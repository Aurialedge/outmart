import React from 'react';

export default function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 md:w-[600px] md:h-[600px] bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 md:w-[500px] md:h-[500px] bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-6000" />
      </div>

      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:72px_72px] pointer-events-none opacity-50 animate-pulse-slow" />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-float animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float animation-delay-4000" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-float animation-delay-1000" />
      </div>
    </>
  );
}
