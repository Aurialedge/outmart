import React, { useState, useEffect } from 'react';
import chatbotGif from '../images/chatbot.gif';
import chatbotPng from '../images/chatbot.png';

export default function ChatbotButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [poster, setPoster] = useState(null);

  // Use an inline SVG placeholder by default, and overlay the GIF on hover or focus

  useEffect(() => {
    // Prefer a provided PNG poster if available (less CPU and better performance).
    if (chatbotPng) {
      setPoster(chatbotPng);
      return;
    }
    // Fallback: extract a static poster (first frame) from the gif using a canvas
    let cancelled = false;
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = chatbotGif;
      img.onload = () => {
        if (cancelled) return;
        try {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth || 64;
          canvas.height = img.naturalHeight || 64;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const dataUrl = canvas.toDataURL('image/png');
          setPoster(dataUrl);
        } catch (e) {
          // ignore; poster may remain null
        }
      };
    } catch (e) {
      // ignore
    }
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <button
        aria-label="Open Chatbot"
        className="fixed right-5 bottom-5 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm flex items-center justify-center hover:scale-105 transition-transform duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={() => setOpen(s => !s)}
      >
        <div className="w-full h-full flex items-center justify-center">
          {/* static placeholder - prefer the PNG provided by the user, fallback to SVG */}
          {!isHovered && (
            poster ? (
              <img src={poster} alt="Chatbot icon" className="w-full h-full object-cover" draggable={false} />
            ) : (
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H8l-5 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )
          )}
          {/* animated gif overlay (show on hover) */}
          {isHovered && (
            <img src={chatbotGif} alt="Chatbot animated" className="w-full h-full object-cover" draggable={false} />
          )}
        </div>
      </button>

      {open && (
        <div className="fixed right-6 bottom-20 z-50 w-80 md:w-96 om-card">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H8l-5 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="text-sm md:text-base font-semibold">OutMart AI Chat</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-xs text-gray-300 px-2 py-1 rounded hover:bg-white/6">Close</button>
          </div>
          <div className="p-3 md:p-4 max-h-64 overflow-auto space-y-3">
            <div className="text-xs text-gray-300">Welcome! Ask me to find products, stores or inventory.</div>
            <div className="p-2 rounded-lg bg-white/5 text-xs text-gray-200">How can I help today?</div>
            <div className="p-2 rounded-lg bg-white/5 text-xs text-gray-200">Try: "Find size 9 running shoes near me"</div>
          </div>
          <div className="px-3 py-3 border-t border-white/6">
            <form onSubmit={(e) => { e.preventDefault(); setOpen(false); }} className="flex gap-2">
              <input aria-label="Message" placeholder="Type a message..." className="flex-1 bg-white/5 border border-white/6 rounded px-3 py-2 text-sm text-white outline-none focus:border-white/20" />
              <button type="submit" className="px-3 py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm">Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
