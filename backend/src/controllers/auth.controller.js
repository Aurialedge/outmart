const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const jwtSecret = process.env.JWT_SECRET || 'secret_change_me';
const Otp = require('../models/Otp');
const nodemailer = require('nodemailer');
let twilioClient = null;
if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
  // lazy require
  const twilio = require('twilio');
  twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
}

const sendEmail = async (to, subject, text, html) => {
  if (!process.env.SMTP_HOST) {
    console.log('SMTP not configured, skipping email. OTP to', to, 'text:', text);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: !!process.env.SMTP_SECURE,
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
  });

  await transporter.sendMail({ from: process.env.FROM_EMAIL || 'no-reply@example.com', to, subject, text, html });
};

const sendSms = async (to, message) => {
  if (!twilioClient || !process.env.TWILIO_PHONE_NUMBER) {
    console.log('Twilio not configured, skipping SMS. To:', to, 'msg:', message);
    return;
  }
  await twilioClient.messages.create({ body: message, to, from: process.env.TWILIO_PHONE_NUMBER });
};

// helper to generate numeric OTP and store hashed
const crypto = require('crypto');

const generateOtpCode = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email and password are required' });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: 'Email already registered' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, phone });

    const token = jwt.sign({ id: user._id, role: user.role }, jwtSecret, { expiresIn: '7d' });

    res.status(201).json({ user: user.toJSON(), token });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, jwtSecret, { expiresIn: '7d' });

    res.json({ user: user.toJSON(), token });
  } catch (err) {
    next(err);
  }
};

// Request OTP: creates code, stores hashed version, sends via email and SMS if possible
exports.requestOtp = async (req, res, next) => {
  try {
    const { email, phone } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const user = await User.findOne({ email });
    if (phone && user && !user.phone) {
      user.phone = phone;
      await user.save();
    }

    const code = generateOtpCode();
    const codeHash = await bcrypt.hash(code, 10);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await Otp.create({ email, phone: phone || (user && user.phone), codeHash, expiresAt });

    const text = `Your OutMart verification code is: ${code}. It will expire in 10 minutes.`;

    // send email
    await sendEmail(email, 'Your OutMart OTP', text, `<p>${text}</p>`);

    // send SMS if phone available
    const toPhone = phone || (user && user.phone);
    if (toPhone) await sendSms(toPhone, text);

    res.json({ ok: true, message: 'OTP sent if possible' });
  } catch (err) {
    next(err);
  }
};

// Verify OTP and return token if user exists
exports.verifyOtp = async (req, res, next) => {
  try {
    const { email, code } = req.body;
    if (!email || !code) return res.status(400).json({ error: 'Email and code are required' });

    const otp = await Otp.findOne({ email, verified: false }).sort({ createdAt: -1 });
    if (!otp) return res.status(400).json({ error: 'No active OTP found' });

    if (otp.expiresAt < new Date()) return res.status(400).json({ error: 'OTP expired' });

    const match = await bcrypt.compare(code, otp.codeHash);
    if (!match) return res.status(400).json({ error: 'Invalid OTP' });

    otp.verified = true;
    await otp.save();

    let user = await User.findOne({ email });

    // If user doesn't exist but name provided, create user (OTP-based signup)
    if (!user && req.body.name) {
      const randomPassword = crypto.randomBytes(16).toString('hex');
      const hashedPassword = await bcrypt.hash(randomPassword, 10);
      user = await User.create({ name: req.body.name, email, password: hashedPassword, phone: otp.phone || undefined });
    }

    if (!user) return res.status(404).json({ error: 'User not found; please sign up' });

    const token = jwt.sign({ id: user._id, role: user.role }, jwtSecret, { expiresIn: '7d' });
    res.json({ user: user.toJSON(), token });
  } catch (err) {
    next(err);
  }
};
