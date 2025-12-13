import React, { useRef, useState } from 'react';
import { ArrowRight, MapPin, Zap, Store, ShoppingBag, Search } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) - rect.width / 2) / rect.width;
    const y = ((e.clientY - rect.top) - rect.height / 2) / rect.height;
    setPos({ x: x * 12, y: y * 8 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <section className="relative w-full pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-6 text-left px-2 md:px-0 h-full md:min-h-[320px] flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 mb-4 md:mb-6 bg-gradient-to-r from-white/6 via-white/5 to-white/6 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer group animate-fade-in relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer" />
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 relative z-10" />
              <span className="text-xs md:text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300 relative z-10">Revolutionizing Physical Retail</span>
              <div className="absolute -right-8 top-0 w-16 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:right-full transition-all duration-1000" />
            </div>

            <h1 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 md:mb-5 lg:mb-6 leading-tight tracking-tight animate-fade-in-up">
              <span className="block hover:scale-105 transition-transform duration-500 inline-block">Shop Smarter</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] hover:scale-105 transition-transform duration-500 inline-block">
                Live Better
              </span>
            </h1>

            <p className="text-left text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-4 md:mb-6 px-0 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
              AI-powered retail platform connecting customers with nearby stores. <span className="text-white font-medium hover:text-purple-300 transition-colors duration-300">Find products instantly.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start mb-6 px-0 animate-fade-in-up animation-delay-400">
              <button aria-label="Find Stores" className="w-full sm:w-auto group px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/30 text-sm md:text-base relative overflow-hidden animate-glow-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Find Stores Near You
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              <button aria-label="Create Workplace" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/50 text-sm md:text-base hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Create Your Workplace</span>
              </button>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-gray-300">Live AI demo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                <ShoppingBag className="w-4 h-4 text-white opacity-80" />
                <span className="text-xs text-gray-300">10k+ stores</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-center md:justify-end px-2 md:px-0">
            <div className="relative w-full max-w-[420px] md:max-w-[520px]" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: `translateX(${pos.x}px) translateY(${pos.y}px)`}}>
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-600/80 via-pink-500/80 to-cyan-400/70 blur-2xl opacity-60" />
              <div className="om-card relative bg-[#06060a]/70 border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden backdrop-blur-md h-full md:min-h-[320px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <Search className="w-4 h-4 text-white opacity-90" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/5 rounded-full overflow-hidden px-3 py-2">
                      <input className="w-full bg-transparent outline-none placeholder:text-gray-500 text-white text-sm" placeholder="Search for products or stores" readOnly />
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-52 md:h-64">
                  {/* Product cards stack */}
                  <div className="absolute -top-3 left-4 w-64 md:w-72 p-3 rounded-xl bg-gradient-to-r from-purple-600/80 to-pink-500/80 border border-white/10 shadow-xl transform -rotate-[2deg] hover:-translate-y-2 hover:scale-105 transition-transform duration-300 group animate-fade-in-up animation-delay-200">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                          <ShoppingBag className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-100 font-medium">Nike Air Zoom</div>
                          <div className="text-xs text-gray-400">Section A • Rack 12</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-pink-300">₹2,899</div>
                        <div className="text-xs text-green-400">In Stock</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-10 right-6 w-64 md:w-72 p-3 rounded-xl bg-gradient-to-r from-blue-600/80 to-cyan-500/80 border border-white/10 shadow-xl transform rotate-[4deg] hover:-translate-y-2 hover:scale-105 transition-transform duration-300 group animate-fade-in-up animation-delay-400">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                          <ShoppingBag className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-100 font-medium">Adidas Ultraboost</div>
                          <div className="text-xs text-gray-400">Section B • Rack 5</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-pink-300">₹2,999</div>
                        <div className="text-xs text-green-400">In Stock</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-6 w-44 md:w-48 p-2 rounded-lg bg-white/3 border border-white/6 shadow-lg backdrop-blur-sm animate-fade-in-up animation-delay-600">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white opacity-90" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-100 font-medium">Nearby</div>
                        <div className="text-xs text-gray-400">City Mall • 500m</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
