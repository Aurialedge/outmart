import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, Shield, Smartphone, Users, ChevronRight, Menu, X, CheckCircle, Globe, Zap, Lock, TrendingUp, Star, Scan, Brain, Database, Wifi, Eye, ArrowRight, Play, Pause, Activity, Cpu, Radio } from 'lucide-react';

const OutMartAI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [digitalParticles, setDigitalParticles] = useState([]);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  const [pulseIntensity, setPulseIntensity] = useState(0);

  const features = [
    {
      icon: <Scan className="w-10 h-10" />,
      title: "Quantum Scanner Array",
      description: "Multi-dimensional barcode recognition with neural pattern matching and predictive inventory algorithms for instant product identification.",
      color: "from-cyan-400 via-blue-500 to-indigo-600",
      bgGlow: "shadow-[0_0_80px_rgba(6,182,212,0.6)]",
      stats: "99.97% Accuracy"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Neural Synapse Engine",
      description: "Advanced deep learning networks with quantum processing units analyzing behavioral patterns for hyper-personalized recommendations.",
      color: "from-purple-400 via-pink-500 to-red-500",
      bgGlow: "shadow-[0_0_80px_rgba(168,85,247,0.6)]",
      stats: "87.3% Match Rate"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Dimensional Data Grid",
      description: "Real-time multi-verse data synchronization across infinite store dimensions with quantum entanglement protocols.",
      color: "from-emerald-400 via-teal-500 to-cyan-600",
      bgGlow: "shadow-[0_0_80px_rgba(16,185,129,0.6)]",
      stats: "0.001s Sync"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Fortress Protocol Shield",
      description: "Military-grade quantum encryption with adaptive threat detection and self-healing security matrices for ultimate data protection.",
      color: "from-orange-400 via-red-500 to-pink-600",
      bgGlow: "shadow-[0_0_80px_rgba(251,146,60,0.6)]",
      stats: "Unbreachable"
    }
  ];

  const digitalMetrics = [
    { label: "Neural Nodes", value: "12,847", trend: "+23.7%", pulse: true },
    { label: "Quantum Scans", value: "2.4M", trend: "+45.2%", pulse: false },
    { label: "AI Accuracy", value: "99.97%", trend: "+0.08%", pulse: true },
    { label: "Response Time", value: "0.12ms", trend: "-18.9%", pulse: false }
  ];

  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Neural Web Nexus",
      status: "DEPLOYING",
      progress: 89,
      features: ["Quantum Pattern Recognition", "Deep Learning Recommendations", "Mesh Network Protocols"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-400 to-emerald-600"
    },
    {
      phase: "Phase 2", 
      title: "Dimensional Commerce",
      status: "ACTIVE DEV",
      progress: 72,
      features: ["Multi-Reality Store Mapping", "Holographic Interface Pods", "Predictive Analytics Core"],
      icon: <Wifi className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-600"
    },
    {
      phase: "Phase 3",
      title: "Blockchain Fortress",
      status: "ALPHA TESTING",
      progress: 45,
      features: ["Post-Quantum Cryptography", "Smart Contract Automation", "Zero-Knowledge Protocols"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-400 to-pink-600"
    },
    {
      phase: "Phase 4",
      title: "Omni-Reality Platform",
      status: "CONCEPTUAL",
      progress: 18,
      features: ["Neural AR Overlays", "Biometric Sync", "Quantum Teleportation"],
      icon: <Eye className="w-6 h-6" />,
      color: "from-orange-400 to-red-600"
    }
  ];

  // Enhanced particle system
  useEffect(() => {
    const particles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      color: ['cyan', 'purple', 'pink'][Math.floor(Math.random() * 3)]
    }));
    setDigitalParticles(particles);

    const animateParticles = () => {
      setDigitalParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.vy + window.innerHeight) % window.innerHeight,
        opacity: Math.sin(Date.now() * 0.003 + particle.id) * 0.3 + 0.5
      })));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 150);
    }, Math.random() * 10000 + 8000);
    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(scanInterval);
  }, []);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseIntensity(Math.sin(Date.now() * 0.002) * 0.5 + 0.5);
    }, 50);
    return () => clearInterval(pulseInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Digital Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {digitalParticles.map(particle => (
          <div
            key={particle.id}
            className={`absolute rounded-full animate-pulse`}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              backgroundColor: particle.color === 'cyan' ? '#06b6d4' : particle.color === 'purple' ? '#a855f7' : '#ec4899',
              boxShadow: `0 0 ${particle.size * 4}px currentColor`
            }}
          />
        ))}
      </div>

      {/* Scan Line Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 opacity-20"
        style={{
          background: `linear-gradient(to bottom, transparent ${scanLine}%, rgba(0,255,255,0.1) ${scanLine + 1}%, transparent ${scanLine + 2}%)`
        }}
      />

      {/* Enhanced Cursor Glow */}
      <div 
        className="fixed pointer-events-none z-50 w-[500px] h-[500px] rounded-full blur-3xl transition-all duration-100"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          background: `radial-gradient(circle, rgba(6,182,212,${0.2 + pulseIntensity * 0.1}) 0%, rgba(168,85,247,${0.1 + pulseIntensity * 0.05}) 50%, transparent 100%)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-3xl border-b border-cyan-500/30 z-40">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <h1 className={`relative text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight ${glitchEffect ? 'animate-pulse' : ''}`}>
                  OutMart.AI
                </h1>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'Roadmap', 'Technology'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="group relative text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></div>
                  <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-lg transition-all duration-300"></div>
                  <span className="relative">{item}</span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
              <button className="group relative overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <div className="relative bg-black px-6 py-3 rounded-xl font-bold text-white group-hover:text-cyan-400 transition-all duration-300">
                  Neural Access
                </div>
              </button>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-cyan-400 p-2 rounded-lg transition-all"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-6 space-y-2 bg-black/50 backdrop-blur-2xl">
              <a href="#features" className="block text-gray-300 hover:text-cyan-400 px-4 py-3 rounded-lg transition-all">Features</a>
              <a href="#roadmap" className="block text-gray-300 hover:text-cyan-400 px-4 py-3 rounded-lg transition-all">Roadmap</a>
              <a href="#tech" className="block text-gray-300 hover:text-cyan-400 px-4 py-3 rounded-lg transition-all">Technology</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-pink-500/20 border border-cyan-400/50 mb-8 backdrop-blur-xl group hover:scale-105 transition-all duration-500">
                <div className="relative mr-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-50"></div>
                </div>
                <span className="text-cyan-400 text-sm font-black tracking-wider">NEURAL NETWORK SYNCHRONIZATION</span>
                <div className="ml-4 flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
                Ready to <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Neural-Link</span>
                <br />Your Commerce Experience?
              </h2>
              
              <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join the quantum evolution of intelligent commerce. Connect to OutMart.AI's neural matrix and 
                experience the future of post-digital retail technology in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
                <button className="group relative overflow-hidden transform hover:scale-105 transition-all duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                  <div className="relative bg-black px-10 py-6 rounded-2xl font-black text-xl text-white group-hover:text-cyan-400 transition-all duration-500 flex items-center">
                    <Cpu className="mr-4 w-8 h-8 animate-spin group-hover:animate-pulse" />
                    Initialize Connection
                    <Zap className="ml-4 w-6 h-6 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </button>
                
                <button className="group px-10 py-6 border-2 border-cyan-400/50 text-cyan-400 rounded-2xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-500 font-black text-xl flex items-center transform hover:scale-105">
                  <Users className="mr-4 w-8 h-8 group-hover:animate-pulse" />
                  Join Beta Network
                  <Radio className="ml-4 w-6 h-6 animate-ping" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { metric: "0.05ms", label: "Neural Response", color: "text-cyan-400", icon: <Zap className="w-6 h-6" /> },
                  { metric: "99.99%", label: "Quantum Uptime", color: "text-purple-400", icon: <Shield className="w-6 h-6" /> },
                  { metric: "∞", label: "Scale Capacity", color: "text-pink-400", icon: <TrendingUp className="w-6 h-6" /> }
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/20 group-hover:to-purple-600/20 rounded-2xl blur-lg transition-all duration-500"></div>
                    <div className="relative text-center p-6 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl rounded-2xl border border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-500">
                      <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className={`p-3 rounded-lg ${item.color === 'text-cyan-400' ? 'bg-cyan-400/20' : item.color === 'text-purple-400' ? 'bg-purple-400/20' : 'bg-pink-400/20'}`}>
                          <div className={item.color}>{item.icon}</div>
                        </div>
                      </div>
                      <div className={`text-3xl font-black ${item.color} mb-2 group-hover:animate-pulse`}>
                        {item.metric}
                      </div>
                      <div className="text-sm text-gray-400 font-semibold group-hover:text-gray-300 transition-colors duration-300">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Footer */}
      <footer className="bg-gradient-to-t from-black via-gray-900 to-black border-t-2 border-cyan-500/30 py-16 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            animation: 'pulse 6s infinite'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="relative mb-8 group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <h3 className="relative text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  OutMart.AI
                </h3>
              </div>
              
              <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                Pioneering the quantum evolution of intelligent retail through advanced neural networks, 
                post-quantum cryptography, and dimensional commerce protocols.
              </p>
              
              <div className="flex space-x-6">
                {[
                  { icon: <Globe className="w-6 h-6" />, color: "from-cyan-400 to-blue-400", label: "Neural Web" },
                  { icon: <Brain className="w-6 h-6" />, color: "from-purple-400 to-pink-400", label: "AI Core" },
                  { icon: <Shield className="w-6 h-6" />, color: "from-orange-400 to-red-400", label: "Quantum Shield" }
                ].map((social, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/20 group-hover:to-purple-600/20 rounded-lg blur-lg transition-all duration-500"></div>
                    <div className={`relative w-12 h-12 bg-gradient-to-r ${social.color} bg-opacity-20 rounded-lg flex items-center justify-center border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer group-hover:scale-110`}>
                      <div className="text-cyan-400 group-hover:animate-pulse">{social.icon}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Neural Platform</h4>
              <ul className="space-y-3 text-gray-400">
                {['Smart Scanner', 'AI Recommendations', 'Real-time Sync', 'Quantum Security'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Network Access</h4>
              <ul className="space-y-3 text-gray-400">
                {['Developer API', 'Neural Docs', 'System Status', 'Support Hub'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center">
                      <div className="w-1 h-1 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cyan-500/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0 text-lg">
                © 2025 OutMart.AI Neural Systems. All quantum rights reserved.
              </p>
              <div className="flex items-center text-green-400 text-sm font-black">
                <div className="relative mr-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-50"></div>
                </div>
                NEURAL NETWORK ONLINE
                <div className="ml-3 flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OutMartAI;-sm font-bold tracking-wider">QUANTUM NEURAL SYSTEM • ONLINE</span>
                <div className="ml-3">
                  <Activity className="w-4 h-4 text-green-400 animate-pulse" />
                </div>
              </div>
              
              <h1 className={`text-5xl sm:text-7xl font-black text-white mb-8 leading-tight ${glitchEffect ? 'animate-pulse' : ''}`}>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  NEURAL
                </span>
                <br />
                <span className="text-white relative">
                  COMMERCE
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  EVOLUTION
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
                Enter the next dimension of retail intelligence. Our quantum-powered neural networks deploy 
                advanced AI algorithms with real-time dimensional data fusion for unprecedented shopping evolution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group relative overflow-hidden transform hover:scale-105 transition-all duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                  <div className="relative bg-black px-8 py-4 rounded-2xl font-bold text-lg text-white group-hover:text-cyan-400 transition-all duration-500 flex items-center">
                    <Cpu className="mr-3 w-6 h-6 animate-spin group-hover:animate-pulse" />
                    Initialize Neural Link
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </button>
                <button 
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="group flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-2xl hover:bg-cyan-400/10 transition-all duration-500 font-bold transform hover:scale-105"
                >
                  <div className="relative mr-3">
                    {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </div>
                  Neural Demo
                  <Radio className="ml-3 w-4 h-4 animate-pulse" />
                </button>
              </div>
            </div>

            {/* Enhanced Metrics Dashboard */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-pink-500/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-cyan-500/5 via-purple-600/5 to-pink-500/5 backdrop-blur-2xl rounded-3xl p-8 border border-cyan-400/50 group hover:scale-105 transition-all duration-700">
                
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black text-white">NEURAL STATUS</h3>
                  <div className="flex items-center text-green-400 text-sm font-bold">
                    <div className="relative mr-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-50"></div>
                    </div>
                    OPERATIONAL
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {digitalMetrics.map((metric, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-500">
                        <div className="text-3xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400 mb-3">{metric.label}</div>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-green-400 font-bold">{metric.trend}</div>
                          {metric.pulse && (
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 via-purple-600/10 to-pink-500/10 rounded-2xl border border-cyan-400/30 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-300 font-semibold">QUANTUM PROCESSING CORE</span>
                    <span className="text-sm text-cyan-400 font-black">{Math.round(94.7 + pulseIntensity * 2)}%</span>
                  </div>
                  <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 relative"
                      style={{ width: `${94.7 + pulseIntensity * 2}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 border border-purple-400/50 mb-8 backdrop-blur-xl group hover:scale-105 transition-all duration-500">
              <Brain className="w-6 h-6 text-purple-400 mr-4 animate-pulse" />
              <span className="text-purple-400 text-sm font-black tracking-wider">NEURAL CAPABILITY MATRIX</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">
              Quantum <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Intelligence</span> Core
            </h2>
            
            <p className="text-gray-300 max-w-4xl mx-auto text-xl leading-relaxed">
              Experience the convergence of quantum computing, neural networks, and blockchain security 
              in our revolutionary retail intelligence platform designed for the post-digital era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-10 rounded-3xl bg-gradient-to-br from-white/5 via-white/5 to-transparent border border-white/10 hover:border-cyan-400/80 transition-all duration-700 ${feature.bgGlow} hover:scale-105 cursor-pointer overflow-hidden`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-600/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-600/10 group-hover:to-pink-500/10 rounded-3xl transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
                    <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${feature.color} group-hover:shadow-2xl transition-all duration-500`}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-cyan-400 font-black bg-cyan-400/20 px-4 py-2 rounded-full border border-cyan-400/30 group-hover:bg-cyan-400/30 group-hover:scale-105 transition-all duration-300">
                      {feature.stats}
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Roadmap Section */}
      <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">
              Neural <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Evolution</span> Timeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapPhases.map((phase, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-white/5 via-white/5 to-transparent rounded-3xl p-8 border border-white/10 hover:border-cyan-400/80 transition-all duration-700 hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-600/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative group-hover:scale-110 transition-transform duration-500">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${phase.color}`}>
                        {phase.icon}
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-full text-xs font-black border bg-green-400/20 text-green-400 border-green-400/50">
                      {phase.status}
                    </div>
                  </div>
                  
                  <div className="text-sm text-cyan-400 font-black mb-3">{phase.phase}</div>
                  <h3 className="text-xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors duration-500">
                    {phase.title}
                  </h3>
                  
                  <div className="mb-8">
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-400 font-semibold">Progress</span>
                      <span className="text-cyan-400 font-black">{phase.progress}%</span>
                    </div>
                    <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${phase.progress}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 mt-2 flex-shrink-0 animate-pulse"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 backdrop-blur-3xl rounded-3xl p-12 border-2 border-cyan-400/50 overflow-hidden">
              
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-pink-500/20 border-2 border-cyan-400/50 mb-10 group hover:scale-105 transition-all duration-500">
                <Brain className="w-6 h-6 text-cyan-400 mr-4 animate-pulse" />
                <span className="text-cyan-400 text