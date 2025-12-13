import React, { useState, useEffect } from 'react';
import { MapPin, Store, Zap, TrendingUp, ShoppingBag, BarChart3, Search, Sparkles, Cpu, Globe, Lock, Users, Rocket, ArrowRight, CheckCircle2, Star, Menu, X } from 'lucide-react';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:72px_72px] pointer-events-none opacity-50" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : ''}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg md:rounded-xl blur-md opacity-50" />
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-1.5 md:p-2 rounded-lg md:rounded-xl">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                OutMartAI
              </span>
            </div>

            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <button className="px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base text-gray-300 hover:text-white transition-colors font-medium">
                Login
              </button>
              <button className="px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-semibold">
                Sign Up
              </button>
            </div>

            <button 
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col gap-3">
                <button className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  Login
                </button>
                <button className="w-full px-4 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-semibold">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 mb-6 md:mb-8 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-gray-300">Revolutionizing Physical Retail</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight tracking-tight">
              <span className="block">Shop Smarter</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Live Better
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-10 lg:mb-12 px-4 leading-relaxed max-w-3xl mx-auto">
              AI-powered retail platform connecting customers with nearby stores. 
              <span className="text-white font-medium"> Find products instantly.</span> No more wandering aisles.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 lg:mb-20 px-4">
              <button className="w-full sm:w-auto group px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all hover:scale-105 shadow-lg text-sm md:text-base">
                <span className="flex items-center justify-center gap-2">
                  Find Stores Near You
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-white/40 text-sm md:text-base">
                Create Your Workplace
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 px-4">
              {[
                { icon: MapPin, text: "Location-Based" },
                { icon: Zap, text: "AI-Powered" },
                { icon: Store, text: "Multi-Store" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 transition-all cursor-pointer group">
                  <item.icon className="w-3 h-3 md:w-4 md:h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs md:text-sm font-medium text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              { value: "10K+", label: "Active Stores" },
              { value: "500K+", label: "Shoppers" },
              { value: "50+", label: "Cities" },
              { value: "99.9%", label: "Uptime" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Paths Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 lg:mb-6">
              <span className="text-white">Built for</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Everyone
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Whether shopping or selling, experience retail reimagined
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl p-5 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-white/10 hover:border-white/30 transition-all">
                <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6 lg:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-300">For Shoppers</h3>
                </div>
                
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  {[
                    { icon: MapPin, text: "Enable location → See nearby stores", badge: "2 sec" },
                    { icon: Search, text: "Search with natural language", badge: "instant" },
                    { icon: Zap, text: "AI finds exact products & locations", badge: "1 sec" },
                    { icon: CheckCircle2, text: "Get aisle, rack & availability", badge: "live" }
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 bg-blue-500/5 rounded-lg md:rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
                      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm lg:text-base text-gray-200 font-medium mb-0.5 md:mb-1">{step.text}</p>
                        <span className="text-xs text-blue-400 font-semibold">{step.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl p-5 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-white/10 hover:border-white/30 transition-all">
                <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6 lg:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Store className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-300">For Owners</h3>
                </div>
                
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  {[
                    { icon: Rocket, text: "Create workplace in 5 minutes", badge: "easy" },
                    { icon: Store, text: "Upload inventory with locations", badge: "bulk" },
                    { icon: BarChart3, text: "Track real-time analytics", badge: "live" },
                    { icon: TrendingUp, text: "Update prices & offers instantly", badge: "fast" }
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 bg-purple-500/5 rounded-lg md:rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm lg:text-base text-gray-200 font-medium mb-0.5 md:mb-1">{step.text}</p>
                        <span className="text-xs text-purple-400 font-semibold">{step.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Demo */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 lg:mb-6">
              <span className="text-white">See </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI in Action</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400">Natural conversation. Instant results.</p>
          </div>
          
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-white/10">
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-2 md:gap-3 lg:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="flex-1 bg-blue-500/10 p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl rounded-tl-none border border-blue-500/20">
                  <p className="text-xs md:text-sm lg:text-base text-gray-100">"Need running shoes, size 9, under ₹3000"</p>
                </div>
              </div>
              
              <div className="flex gap-2 md:gap-3 lg:gap-4 flex-row-reverse">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="flex-1 bg-purple-500/10 p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl rounded-tr-none border border-purple-500/20">
                  <p className="text-xs md:text-sm lg:text-base text-gray-100 font-semibold mb-3 md:mb-4">Found 4 perfect matches! 🎯</p>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      { brand: "Nike Air Zoom", price: "₹2,899", location: "Section A → Rack 12" },
                      { brand: "Adidas Ultraboost", price: "₹2,999", location: "Section B → Rack 5" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-2.5 md:p-3 lg:p-4 bg-white/5 rounded-lg md:rounded-xl border border-purple-400/20">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs md:text-sm lg:text-base text-purple-300 font-bold flex items-center gap-1.5 md:gap-2">
                            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                            <span>{item.brand}</span>
                          </p>
                          <p className="text-xs md:text-sm text-gray-400 mt-0.5 md:mt-1">📍 {item.location}</p>
                        </div>
                        <div className="text-left sm:text-right flex-shrink-0">
                          <p className="text-sm md:text-base lg:text-lg text-pink-400 font-bold">{item.price}</p>
                          <span className="text-xs text-green-400">✓ In Stock</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 md:mb-16 lg:mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why OutMartAI?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Results in milliseconds", gradient: "from-yellow-500 to-orange-500" },
              { icon: Lock, title: "Secure & Private", desc: "Encrypted and protected", gradient: "from-green-500 to-emerald-500" },
              { icon: Globe, title: "Works Everywhere", desc: "Any device, anywhere", gradient: "from-blue-500 to-cyan-500" },
              { icon: BarChart3, title: "Real-Time Data", desc: "Live analytics dashboard", gradient: "from-purple-500 to-pink-500" },
              { icon: Users, title: "Multi-User", desc: "Team collaboration", gradient: "from-pink-500 to-rose-500" },
              { icon: Star, title: "24/7 AI Support", desc: "Always available", gradient: "from-indigo-500 to-purple-500" }
            ].map((feature, i) => (
              <div key={i} className="group relative p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-white/10 hover:border-white/30 transition-all hover:scale-105 bg-white/5 backdrop-blur-sm">
                <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${feature.gradient} rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1.5 md:mb-2 lg:mb-3 text-white">{feature.title}</h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight">
            <span className="text-white">Ready to</span><br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Transform Retail?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 mb-8 md:mb-10 lg:mb-12 leading-relaxed px-4">
            Join thousands experiencing the future of retail today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center mb-6 md:mb-8 lg:mb-12 px-4">
            <button className="w-full sm:w-auto px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-6 bg-white text-black rounded-xl md:rounded-2xl text-base md:text-lg lg:text-2xl font-bold hover:bg-gray-200 transition-all hover:scale-105">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl text-base md:text-lg lg:text-2xl font-bold border-2 border-white/20 hover:border-white/40 transition-all">
              Schedule Demo
            </button>
          </div>
          
          <p className="text-xs md:text-sm lg:text-base text-gray-500 px-4">
            No credit card required • Free forever • Setup in 5 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4 lg:mb-6">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">OutMartAI</span>
          </div>
          <p className="text-sm sm:text-base text-gray-400 mb-2 md:mb-3">
            The future of smart retail. Powered by AI.
          </p>
          <p className="text-xs sm:text-sm text-gray-600">
            © 2024 OutMartAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}