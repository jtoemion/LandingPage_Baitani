'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Camera, ArrowUpRight } from 'lucide-react';

export default function HighlightsGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      label: 'MALAM DOA & PENYEMBAHAN',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
    },
    {
      label: 'BAPTISAN RAYA JEMAAT',
      image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=800&auto=format&fit=crop',
    },
    {
      label: 'YOUTH MOVEMENT CAMP',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop',
    },
    {
      label: 'BAITANI KIDS CHURCH',
      image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop',
    },
    {
      label: 'AKSI KASIH DIAKONIA SOSIAL',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop',
    },
    {
      label: 'WORSHIP & CREATIVE SUMMIT',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="sorotan" className="py-24 bg-zinc-950 text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-2">
              DOKUMENTASI & PERJALANAN IMAN
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase flex items-center gap-3">
              <span>Sorotan</span>
              <Camera className="w-6 h-6 text-zinc-500 hidden sm:inline" />
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/sorotan"
              className="btn-magnetic hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/20 hover:border-[#d4af37] text-white hover:text-[#d4af37] text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <span>SEMUA GALERI</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-white text-zinc-300 hover:text-white flex items-center justify-center transition-all min-w-[44px] min-h-[44px] active:scale-95"
                aria-label="Sorotan sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-white text-zinc-300 hover:text-white flex items-center justify-center transition-all min-w-[44px] min-h-[44px] active:scale-95"
                aria-label="Sorotan berikutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Square Image Cards Track (§2.8 spec) */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6"
        >
          {highlights.map((item, idx) => (
            <div
              key={`highlight-${idx}`}
              className="flex-shrink-0 w-[220px] sm:w-[260px] aspect-square snap-start rounded-xl overflow-hidden relative group bg-black border border-white/10"
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-extrabold tracking-wider uppercase text-white block drop-shadow-md">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
