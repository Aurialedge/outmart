import React, { useState, useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import TwoPaths from '../components/TwoPaths';
import ChatDemo from '../components/ChatDemo';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

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
      <AnimatedBackground />
      <NavBar scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />


      <Hero />
      

      <Stats />
      
      <TwoPaths />
      

      <ChatDemo videoSrc="/demo.mp4" posterSrc="/demo-poster.jpg" />
      
      <Features />
      
      <CTA />
      
      <Footer />
          </div>
  );
}