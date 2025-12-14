import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import NavBar from '../components/NavBar';
import OtpPanel from '../components/OtpPanel';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
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
    if (!form.name || !form.email || !form.password) return setError('All fields are required');
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Signup failed');
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
            <h2 className="text-5xl font-bold mb-4">Create your account</h2>
            <p className="text-gray-400 max-w-lg">Sign up to start using OutMartAI — manage shops, inventory, and discover nearby products.</p>
          </div>

          <div className="md:col-span-6 flex justify-center md:justify-end px-4">
            <div className="relative w-full max-w-md md:max-w-lg">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-600/80 via-pink-500/80 to-cyan-400/70 blur-2xl opacity-50" />
              <div className="om-card relative bg-[#06060a]/70 border border-white/10 rounded-3xl p-6 overflow-hidden backdrop-blur-md">
                <h3 className="text-2xl font-bold mb-4">Sign up</h3>
                {error && <div className="text-red-500 mb-3">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="bg-white/5 rounded-full overflow-hidden px-3 py-2">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="w-full bg-transparent outline-none placeholder:text-gray-500 text-white text-sm" />
                  </div>
                  <div className="bg-white/5 rounded-full overflow-hidden px-3 py-2">
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full bg-transparent outline-none placeholder:text-gray-500 text-white text-sm" />
                  </div>
                  <div className="bg-white/5 rounded-full overflow-hidden px-3 py-2">
                    <input name="phone" value={form.phone || ''} onChange={handleChange} placeholder="Phone (optional, include country code)" className="w-full bg-transparent outline-none placeholder:text-gray-500 text-white text-sm" />
                  </div>
                  <div className="bg-white/5 rounded-full overflow-hidden px-3 py-2">
                    <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" className="w-full bg-transparent outline-none placeholder:text-gray-500 text-white text-sm" />
                  </div>

                  <button disabled={loading} className="w-full bg-white text-black p-3 rounded-xl font-semibold hover:bg-gray-200 transition">
                    {loading ? 'Creating...' : 'Create Account'}
                  </button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-400">
                  Already have an account? <Link to="/login" className="text-white font-medium hover:text-purple-300">Login</Link>
                </div>

                <div className="mt-6 text-center text-gray-300">Or sign up with OTP</div>
                <div className="mt-3">
                  <OtpPanel purpose="signup" defaultName={form.name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
