'use client';

import React from 'react';

interface MarqueeTickerProps {
  campaignTheme?: string;
}

export default function MarqueeTicker({
  campaignTheme = 'HUT KE-63: DISCIPLE MAKER ✦ GEREJA MISIONER ✦ CINTA TUHAN, MENGASIHI SESAMA, MENJANGKAU DUNIA ✦ DARI SUKABUMI SAMPAI KE UJUNG BUMI',
}: MarqueeTickerProps) {
  // Repeat the theme string to seamlessly loop
  const repeatedText = Array(12).fill(campaignTheme);

  return (
    <aside
      className="bg-[#efeeeb] border-y border-[#e8e2d5] text-[#1b1c1a] py-3.5 overflow-hidden select-none relative z-20"
      aria-label="Tema Tahunan Gereja"
    >
      <div className="overflow-hidden flex items-center">
        <div className="animate-marquee-gms flex items-center gap-6 text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#625e54]">
          {repeatedText.map((text, idx) => (
            <span key={`theme-item-${idx}`} className="flex items-center gap-6 flex-shrink-0">
              <span className="hover:text-[#1b1c1a] transition-colors">
                {text}
              </span>
              <span className="text-[#785600] font-normal">✦</span>
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
