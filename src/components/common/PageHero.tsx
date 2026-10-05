import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  category: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  breadcrumbCurrent: string;
}

export default function PageHero({
  category,
  title,
  titleAccent,
  subtitle,
  breadcrumbCurrent,
}: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden bg-black text-white border-b border-zinc-800 select-none">
      {/* Deep Atmospheric Gradient & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.12),rgba(5,5,5,0))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-[11px] sm:text-xs font-mono tracking-wider text-zinc-400">
          <Link href="/" className="hover:text-[#d4af37] transition-colors">
            BERANDA
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
          <span className="text-[#d4af37] font-semibold uppercase truncate">{breadcrumbCurrent}</span>
        </nav>

        {/* Category Badge Pill */}
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#e5c07b] uppercase">
            {category}
          </span>
        </div>

        {/* Display Heading - Ukuran Font & Spasi Disesuaikan */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight mb-4">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400">
            {title}
          </span>
          {titleAccent && (
            <span className="block text-[#d4af37] text-xl sm:text-2xl md:text-3xl mt-1 font-serif italic font-normal tracking-normal drop-shadow-lg">
              {titleAccent}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-base text-zinc-300 font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}