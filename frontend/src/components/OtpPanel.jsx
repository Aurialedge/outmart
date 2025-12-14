import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OtpPanel({ purpose = 'login', defaultName = '' }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState(defaultName);
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
      const body = { email, code };
      if (purpose === 'signup' && name) body.name = name;
      const res = await fetch(`${API}/api/auth/verify-otp`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
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
      {purpose === 'signup' && (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full bg-white/5 rounded-full px-3 py-2 text-sm outline-none text-white" />
        </div>
      )}
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
