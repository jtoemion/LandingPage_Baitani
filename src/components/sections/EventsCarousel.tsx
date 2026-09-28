'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { eventsData } from '@/data/eventsData';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function EventsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="acara" className="py-24 bg-zinc-950 text-white relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: GMS Style */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-2">
              AGENDA & KEGIATAN MENDATANG
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Acara Kita
            </h2>
          </div>

          {/* Minimalist Circular Arrows & View All Link */}
          <div className="flex items-center gap-4">
            <Link
              href="/acara"
              className="btn-magnetic hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/20 hover:border-[#d4af37] text-white hover:text-[#d4af37] text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <span>SEMUA ACARA</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-white text-zinc-300 hover:text-white flex items-center justify-center transition-all min-w-[44px] min-h-[44px] active:scale-95"
                aria-label="Event sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-white text-zinc-300 hover:text-white flex items-center justify-center transition-all min-w-[44px] min-h-[44px] active:scale-95"
                aria-label="Event berikutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll-Snap Track: GMS Fashion Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6"
        >
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-[290px] sm:w-[340px] lg:w-[380px] snap-start bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Event Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                {/* Global Tag Pill */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase">
                  GLOBAL
                </div>

                {/* Date String */}
                <div className="absolute bottom-3 left-4 text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  {event.displayDate}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#d4af37] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6 font-light">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-medium">
                    {event.location}
                  </span>
                  <a
                    href="#koneksi"
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-white hover:text-[#d4af37] transition-colors min-h-[44px]"
                  >
                    <span>DAFTAR</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
