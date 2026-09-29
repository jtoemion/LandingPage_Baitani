'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, HeartHandshake, ArrowUpRight } from 'lucide-react';

export default function ConnectGroupSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cgPhotos = [
    {
      title: 'Youth & Campus Life Group',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
      category: 'Mahasiswa & Remaja',
    },
    {
      title: 'Family & Marriage Circle',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop',
      category: 'Keluarga Muda',
    },
    {
      title: 'Young Professionals Network',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
      category: 'Profesional & Karir',
    },
    {
      title: 'Prayer & Faith Fellowship',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop',
      category: 'Pendalaman Alkitab',
    },
    {
      title: 'Creative & Media Community',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
      category: 'Worship & Arts',
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
    <section id="connect-group" className="py-24 bg-zinc-950 text-white border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2">
              KOMUNITAS SEL JEMAAT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Connect Group
            </h2>
            <p className="text-zinc-400 text-sm mt-1 italic">
              &ldquo;A Home for Everyone&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-white text-zinc-300 hover:text-white flex items-center justify-center transition-all min-w-11 min-h-11 active:scale-95"
              aria-label="Foto Connect Group sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-white text-zinc-300 hover:text-white flex items-center justify-center transition-all min-w-11 min-h-11 active:scale-95"
              aria-label="Foto Connect Group berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Square / Cinematic Photo Track (§2.6 spec) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 mb-12"
        >
          {cgPhotos.map((item, idx) => (
            <div
              key={`cg-photo-${idx}`}
              className="flex-shrink-0 w-64 sm:w-80 aspect-square snap-start rounded-2xl overflow-hidden relative group bg-black border border-zinc-800"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37] block mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Action Block (§2.6 spec) */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed mb-8">
            Connect Group (CG) adalah kelompok sel gereja, sebuah komunitas hangat di mana Anda menemukan keluarga rohani dengan tujuan untuk bertumbuh dan dimuridkan menjadi semakin serupa dengan Kristus. Setiap anggota saling menguatkan melalui firman, doa, dan kesaksian hidup.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#koneksi"
              className="btn-magnetic inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-[#f3e5ab] text-black font-bold text-xs tracking-wider uppercase transition-all shadow-xl active:scale-95 min-h-12"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>GABUNG CONNECT GROUP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/connect-group"
              className="btn-magnetic inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-[#d4af37] text-white hover:text-[#d4af37] text-xs font-bold tracking-wider uppercase transition-all min-h-12"
            >
              <span>JELAJAHI 5 KATEGORI SEL</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
