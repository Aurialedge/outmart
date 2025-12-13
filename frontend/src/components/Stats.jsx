import React, { useEffect, useRef, useState } from 'react';
import { ShoppingBag, Users, MapPin, Server } from 'lucide-react';

export default function Stats() {
  const stats = [
    { id: 'stores', target: 10000, suffix: 'K+', label: 'Active Stores', color: 'from-purple-400 to-pink-400', icon: ShoppingBag },
    { id: 'shoppers', target: 500000, suffix: 'K+', label: 'Shoppers', color: 'from-blue-400 to-cyan-400', icon: Users },
    { id: 'cities', target: 50, suffix: '+', label: 'Cities', color: 'from-pink-400 to-rose-400', icon: MapPin },
    { id: 'uptime', target: 99.9, suffix: '%', label: 'Uptime', color: 'from-green-400 to-emerald-400', icon: Server }
  ];

  const [counts, setCounts] = useState(() => stats.reduce((acc, s) => ({ ...acc, [s.id]: 0 }), {}));
  const containerRef = useRef(null);
  const rafIds = useRef({});

  useEffect(() => {
    const supportsReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (supportsReducedMotion) {
      // If user prefers reduced motion, set final counts immediately
      const final = {};
      stats.forEach(s => final[s.id] = s.target);
      setCounts(final);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When entering viewport, start/restart counters
          stats.forEach(s => startCountAnimation(s));
        } else {
          // When leaving viewport, cancel animations and reset counts
          stats.forEach(s => {
            if (rafIds.current[s.id]) {
              cancelAnimationFrame(rafIds.current[s.id]);
              delete rafIds.current[s.id];
            }
          });
          // reset
          const reset = {};
          stats.forEach(s => (reset[s.id] = 0));
          setCounts(reset);
        }
      });
    }, { threshold: 0.25 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      // cancel any running RAFs
      Object.keys(rafIds.current).forEach(k => {
        cancelAnimationFrame(rafIds.current[k]);
        delete rafIds.current[k];
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startCountAnimation = (stat) => {
    // cancel previous animation for this stat if any
    if (rafIds.current[stat.id]) {
      cancelAnimationFrame(rafIds.current[stat.id]);
      delete rafIds.current[stat.id];
    }

    const duration = 1400; // ms
    let start = null;
    const from = 0;
    const to = stat.target;

    const step = (now) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const value = from + (to - from) * easeOutCubic(progress);
      setCounts(prev => ({ ...prev, [stat.id]: value }));
      if (progress < 1) {
        rafIds.current[stat.id] = requestAnimationFrame(step);
      } else {
        setCounts(prev => ({ ...prev, [stat.id]: to }));
        if (rafIds.current[stat.id]) {
          cancelAnimationFrame(rafIds.current[stat.id]);
          delete rafIds.current[stat.id];
        }
      }
    };

    rafIds.current[stat.id] = requestAnimationFrame(step);
  };

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  const formatNumber = (v, sfx) => {
    if (typeof v === 'number') {
      if (sfx === 'K+') {
        // show only thousands, round appropriately
        const thousands = Math.round(v / 100) / 10; // one decimal as needed
        return `${thousands}K+`;
      }
      if (sfx === '%') return `${(Math.round(v * 10) / 10).toFixed(1)}%`;
      return `${Math.round(v)}${sfx || ''}`;
    }
    return v;
  };

  return (
    <section ref={containerRef} className="relative w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 animate-fade-in-up animation-delay-200">
      <div className="w-full max-w-7xl mx-auto">
        <h3 className="text-sm md:text-base text-gray-400 uppercase tracking-wide mb-4 md:mb-6 text-center">Metrics in real-time</h3>
        <div role="list" className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 items-stretch">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const value = counts[stat.id];
            return (
              <div key={stat.id} role="listitem" className={`om-card group text-center p-4 md:p-6 rounded-xl md:rounded-2xl h-full flex flex-col justify-center items-center hover:scale-105 animate-fade-in-up animation-delay-${(i + 1) * 200}` }>
                <div className="absolute inset-0 bg-gradient-to-br from-white/6 to-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center bg-gradient-to-br ${stat.color} text-white shadow-lg`}> 
                  <Icon className="w-5 h-5 opacity-90" />
                </div>
                <div className={`relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 md:mb-2 transition-transform duration-500`}> 
                  <span aria-live="polite">{formatNumber(value, stat.suffix)}</span>
                </div>
                <div className="relative text-xs sm:text-sm md:text-base text-gray-300 font-medium group-hover:text-gray-100 transition-colors duration-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
