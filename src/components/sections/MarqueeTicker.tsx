'use client';

import React from 'react';

interface MarqueeTickerProps {
  campaignTheme?: string;
}

export default function MarqueeTicker({
  campaignTheme = 'TAHUN PERSATUAN & SORGA YANG TERBUKA',
}: MarqueeTickerProps) {
  // Repeat the theme string to seamlessly loop
  const repeatedText = Array(12).fill(campaignTheme);

  return (
    <aside
      className="bg-black border-y border-white/10 text-white py-3.5 overflow-hidden select-none relative z-20"
      aria-label="Tema Tahunan Gereja"
    >
      <div className="overflow-hidden flex items-center">
        <div className="animate-marquee-gms flex items-center gap-6 text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-zinc-300">
          {repeatedText.map((text, idx) => (
            <span key={`theme-item-${idx}`} className="flex items-center gap-6 flex-shrink-0">
              <span className="hover:text-white transition-colors">
                {text}
              </span>
              <span className="text-zinc-600 font-normal">━</span>
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
