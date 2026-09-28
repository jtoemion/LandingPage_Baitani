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
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-black text-white border-b border-white/10 select-none">
      {/* Deep Atmospheric Gradient & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.12),rgba(5,5,5,0))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono tracking-wider text-zinc-400">
          <Link href="/" className="hover:text-[#d4af37] transition-colors">
            BERANDA
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[#d4af37] font-semibold uppercase">{breadcrumbCurrent}</span>
        </nav>

        {/* Category Badge Pill */}
        <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#e5c07b] uppercase">
            {category}
          </span>
        </div>

        {/* Massive Editorial Display Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400">
            {title}
          </span>
          {titleAccent && (
            <span className="block text-[#d4af37] mt-1 font-serif italic tracking-normal drop-shadow-[0_12px_40px_rgba(212,175,55,0.2)]">
              {titleAccent}
            </span>
          )}
        </h1>

        {/* Subtitle / Narrative Thesis */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
