import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full py-4 md:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 animate-fade-in">
      <div className="w-full max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4 lg:mb-6">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-white">OutMartAI</span>
        </div>
        <p className="text-sm sm:text-base text-gray-400 mb-2 md:mb-3">The future of smart retail. Powered by AI.</p>
        <p className="text-xs sm:text-sm text-gray-600">© 2024 OutMartAI. All rights reserved.</p>
      </div>
    </footer>
  );
}
