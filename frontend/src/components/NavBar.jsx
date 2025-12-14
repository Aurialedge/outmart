import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Menu, X } from 'lucide-react';

export default function NavBar({ scrolled, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-purple-500/10' : ''}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg md:rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-1.5 md:p-2 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white animate-pulse" />
              </div>
            </div>
            <span className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              OutMartAI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link to="/login" className="px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative group">
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link to="/signup" className="px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold hover:scale-110 hover:shadow-xl hover:shadow-white/20 relative overflow-hidden group">
              <span className="relative z-10">Sign Up</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-3">
              <Link to="/login" className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:translate-x-2">
                Login
              </Link>
              <Link to="/signup" className="w-full px-4 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold transform hover:scale-105">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
