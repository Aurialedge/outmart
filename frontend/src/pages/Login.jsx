import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import NavBar from '../components/NavBar';
import OtpPanel from '../components/OtpPanel';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) return setError('Email and password required');
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden relative">
      <AnimatedBackground />
      <NavBar scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <section className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-6 hidden md:block px-4">
            <h2 className="text-5xl font-bold mb-4">Welcome back</h2>
            <p className="text-gray-400 max-w-lg">Login to access your dashboard and manage your store or purchases. If you don't have an account, you can sign up.</p>
          </div>

          <div className="md:col-span-6 flex justify-center md:justify-end px-4">
            <div className="relative w-full max-w-md md:max-w-lg">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-600/80 via-pink-500/80 to-cyan-400/70 blur-2xl opacity-50" />
              <div className="om-card relative bg-[#06060a]/70 border border-white/10 rounded-3xl p-6 overflow-hidden backdrop-blur-md">
                <h3 className="text-2xl font-bold mb-4">Login</h3>
                {error && <div className="text-red-500 mb-3">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="bg-white/5 rounded-full overflow-hidden px-3 py-2">
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full bg-transparent outline-none placeholder:text-gray-500 text-white text-sm" />
                  </div>
                  <div className="bg-white/5 rounded-full overflow-hidden px-3 py-2">
                    <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" className="w-full bg-transparent outline-none placeholder:text-gray-500 text-white text-sm" />
                  </div>

                  <button disabled={loading} className="w-full bg-white text-black p-3 rounded-xl font-semibold hover:bg-gray-200 transition">
                    {loading ? 'Logging...' : 'Login'}
                  </button>
                </form>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <div className="text-center text-sm text-gray-400">Don't have an account? <Link to="/signup" className="text-white font-medium hover:text-purple-300">Sign up</Link></div>
                  <div className="text-center text-sm text-gray-400">OR</div>
                  <OtpPanel purpose="login" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

function OtpPanel() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const requestOtp = async () => {
    if (!email) return setMessage('Enter email to receive OTP');
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`${API}/api/auth/request-otp`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, phone }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send OTP');
      setMessage('OTP sent — check email and SMS (if phone provided)');
    } catch (err) {
      setMessage(err.message);
    } finally { setLoading(false); }
  };

  const verify = async () => {
    if (!email || !code) return setMessage('Enter email and code');
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/verify-otp`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, code }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Invalid code');
      localStorage.setItem('token', data.token);
      setMessage('Verified');
      navigate('/');
    } catch (err) {
      setMessage(err.message);
    } finally { setLoading(false); }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email for OTP" className="flex-1 bg-white/5 rounded-full px-3 py-2 text-sm outline-none text-white" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)" className="w-36 bg-white/5 rounded-full px-3 py-2 text-sm outline-none text-white" />
      </div>
      <div className="flex gap-2">
        <button onClick={requestOtp} disabled={loading} className="flex-1 bg-purple-600 hover:bg-purple-500 p-2 rounded-full text-white">Send OTP</button>
      </div>
      <div className="flex gap-2">
        <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter code" className="flex-1 bg-white/5 rounded-full px-3 py-2 text-sm outline-none text-white" />
        <button onClick={verify} disabled={loading} className="bg-white text-black p-2 rounded-full">Verify</button>
      </div>
      {message && <div className="text-sm text-gray-300">{message}</div>}
    </div>
  );
}
