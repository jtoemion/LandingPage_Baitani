'use client';

import React from 'react';
import { Play, ChevronDown, Compass } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Media: Dramatic Worship Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2200&auto=format&fit=crop"
          alt="Baitani Worship Concert Scale"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center scale-105 opacity-40 animate-pulse duration-1000"
        />
        {/* Layered cinematic vignettes & dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        
        {/* Editorial Sub-Pill */}
        <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-zinc-300 uppercase">
            SATU TUHAN • SATU KELUARGA • MENGUBAHKAN HIDUP
          </span>
        </div>

        {/* Massive Typographic Welcome Home Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-8 select-none">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
            WELCOME
          </span>
          <span className="block text-white mt-1 drop-shadow-[0_10px_35px_rgba(255,255,255,0.15)]">
            HOME
          </span>
        </h1>

        {/* GMS-style Manifesto Paragraph */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-12">
          Sebuah rumah bagi setiap jiwa untuk bertumbuh dalam kasih Kristus, mengalami pemulihan sejati, dan bergerak dalam pergerakan Roh Kudus.
        </p>

        {/* High-End Minimalist Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#lokasi"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs tracking-[0.15em] uppercase shadow-2xl transition-all duration-300 active:scale-95 min-h-[50px]"
          >
            <Compass className="w-4 h-4" />
            <span>CARI LOKASI & JADWAL IBADAH</span>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/20 font-bold text-xs tracking-[0.15em] uppercase backdrop-blur-sm transition-all duration-300 min-h-[50px]"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>TONTON LIVE STREAMING</span>
          </a>
        </div>

      </div>

      {/* Subtle Downward Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-medium">SCROLL</span>
        <ChevronDown className="w-4 h-4 text-zinc-400 animate-bounce" />
      </div>
    </section>
  );
}
