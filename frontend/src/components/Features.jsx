import React from 'react';
import { Zap, Lock, Globe, BarChart3, Users, Star } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Zap, title: 'Lightning Fast', desc: 'Results in milliseconds', gradient: 'from-yellow-500 to-orange-500' },
    { icon: Lock, title: 'Secure & Private', desc: 'Encrypted and protected', gradient: 'from-green-500 to-emerald-500' },
    { icon: Globe, title: 'Works Everywhere', desc: 'Any device, anywhere', gradient: 'from-blue-500 to-cyan-500' },
    { icon: BarChart3, title: 'Real-Time Data', desc: 'Live analytics dashboard', gradient: 'from-purple-500 to-pink-500' },
    { icon: Users, title: 'Multi-User', desc: 'Team collaboration', gradient: 'from-pink-500 to-rose-500' },
    { icon: Star, title: '24/7 AI Support', desc: 'Always available', gradient: 'from-indigo-500 to-purple-500' }
  ];

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up animation-delay-500">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-10 lg:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Why OutMartAI?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch">
          {features.map((f, i) => (
            <div key={i} className="om-card group relative p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl h-full flex flex-col">
              <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${f.gradient} rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1.5 md:mb-2 lg:mb-3 text-white">{f.title}</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
