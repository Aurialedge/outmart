import React, { useState, useRef, useEffect } from 'react';
import { Users, Sparkles, CheckCircle2, PlayCircle } from 'lucide-react';

export default function ChatDemo({ videoSrc = null, posterSrc = null }) {
  const matches = [
    { brand: 'Nike Air Zoom', price: '₹2,899', location: 'Section A → Rack 12' },
    { brand: 'Adidas Ultraboost', price: '₹2,999', location: 'Section B → Rack 5' }
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const vidRef = useRef(null);
  const closeBtnRef = useRef(null);

  const onCloseModal = () => {
    setModalOpen(false);
    if (vidRef.current) {
      try {
        vidRef.current.pause();
        vidRef.current.currentTime = 0;
      } catch (e) {}
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && modalOpen) onCloseModal();
    };
    if (modalOpen) {
      document.addEventListener('keydown', handleKey);
      // focus close button once modal opens
      setTimeout(() => {
        if (closeBtnRef.current) closeBtnRef.current.focus();
      }, 40);
    }
    return () => document.removeEventListener('keydown', handleKey);
  }, [modalOpen]);

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up animation-delay-400">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 lg:mb-6">
            <span className="text-white">See </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI in Action</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400">Natural conversation. Instant results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative bg-transparent items-stretch">
          <div className="om-card h-full relative rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-white/10">
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
                  {matches.map((item, i) => (
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
          {/* Demo video column */}
          <div className="relative flex flex-col gap-4 md:gap-6">
            <div className="text-sm md:text-base lg:text-lg text-gray-300">Watch the demo</div>
            <div className="om-card h-full w-full rounded-xl overflow-hidden bg-black/70 shadow-lg border border-white/10">
              {videoSrc ? (
                <div className="relative">
                  <video className="aspect-video w-full object-cover" controls playsInline muted src={videoSrc} poster={posterSrc} />
                  <button aria-label="Open demo video" onClick={() => setModalOpen(true)} className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <PlayCircle className="w-16 h-16 text-white opacity-90 drop-shadow-lg" />
                  </button>
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden bg-white/3 backdrop-blur-sm border border-white/10 p-6 text-center">
                  <div className="text-gray-300 mb-4">Add a video to showcase the demo here.</div>
                  <div className="text-xs text-gray-400">Provide `videoSrc` prop or place a file in /public and pass the path.</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" role="dialog" aria-modal="true">
            <div className="relative w-full max-w-4xl mx-4 md:mx-8">
              <div className="relative bg-black rounded-lg overflow-hidden">
                <button ref={closeBtnRef} onClick={onCloseModal} aria-label="Close video" className="absolute top-3 right-3 z-20 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white">
                  ✕
                </button>
                <video ref={vidRef} controls autoPlay className="w-full h-full bg-black">
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

