import React from 'react';

export default function CTA() {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up animation-delay-600">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight">
          <span className="text-white">Ready to</span><br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Transform Retail?</span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 mb-6 md:mb-8 lg:mb-10 leading-relaxed px-4">Join thousands experiencing the future of retail today</p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center mb-4 md:mb-6 lg:mb-8 px-4">
          <button className="w-full sm:w-auto px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl md:rounded-2xl text-base md:text-lg lg:text-2xl font-bold hover:shadow-2xl hover:-translate-y-0.5 transform transition-all">Get Started Free</button>
          <button className="w-full sm:w-auto px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl text-white text-base md:text-lg lg:text-2xl font-bold border-2 border-white/20 hover:border-white/40 transition-all">Schedule Demo</button>
        </div>
        <p className="text-xs md:text-sm lg:text-base text-gray-500 px-4">No credit card required • Free forever • Setup in 5 minutes</p>
      </div>
    </section>
  );
}
