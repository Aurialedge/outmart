import React from 'react';
import { ShoppingBag, MapPin, Zap, Search, CheckCircle2 } from 'lucide-react';
import { Store, Rocket, BarChart3, TrendingUp } from 'lucide-react';

export default function TwoPaths() {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up animation-delay-400">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 lg:mb-6">
            <span className="text-white">Built for</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">Whether shopping or selling, experience retail reimagined</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl md:rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
            <div className="om-card relative h-full p-5 md:p-8 lg:p-10">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6 lg:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/30">
                  <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">For Shoppers</h3>
              </div>
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                {[
                  { icon: MapPin, text: "Enable location → See nearby stores", badge: "2 sec" },
                  { icon: Search, text: "Search with natural language", badge: "instant" },
                  { icon: Zap, text: "AI finds exact products & locations", badge: "1 sec" },
                  { icon: CheckCircle2, text: "Get aisle, rack & availability", badge: "live" }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 bg-blue-500/5 rounded-lg md:rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:bg-blue-500/10 cursor-pointer group/item">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-500/20 transition-all duration-300 group-hover/item:scale-110">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-400 group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm lg:text-base text-gray-200 font-medium mb-0.5 md:mb-1 group-hover/item:text-white transition-colors duration-300">{step.text}</p>
                      <span className="text-xs text-blue-400 font-semibold group-hover/item:text-blue-300 transition-colors duration-300">{step.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl md:rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
            <div className="om-card relative h-full p-5 md:p-8 lg:p-10">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6 lg:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg shadow-purple-500/30">
                  <Store className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">For Owners</h3>
              </div>
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                {[
                  { icon: Rocket, text: "Create workplace in 5 minutes", badge: "easy" },
                  { icon: Store, text: "Upload inventory with locations", badge: "bulk" },
                  { icon: BarChart3, text: "Track real-time analytics", badge: "live" },
                  { icon: TrendingUp, text: "Update prices & offers instantly", badge: "fast" }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 bg-purple-500/5 rounded-lg md:rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:bg-purple-500/10 cursor-pointer group/item">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-500/20 transition-all duration-300 group-hover/item:scale-110">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-purple-400 group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm lg:text-base text-gray-200 font-medium mb-0.5 md:mb-1 group-hover/item:text-white transition-colors duration-300">{step.text}</p>
                      <span className="text-xs text-purple-400 font-semibold group-hover/item:text-purple-300 transition-colors duration-300">{step.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
