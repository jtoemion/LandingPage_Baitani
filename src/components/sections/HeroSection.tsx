'use client';

import React, { useState, useEffect, useCallback, useRef, useSyncExternalStore } from 'react';
import { heroSlidesData } from '@/data/heroSlidesData';
import { ChevronLeft, ChevronRight, Play, Pause, Compass, ArrowUpRight } from 'lucide-react';

const SLIDE_DURATION = 6500; // 6.5s per slide

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * Resolves hero slide CTA anchors to valid existing sections or page routes:
 * - #jadwal -> #lokasi (section lokasi & jadwal di beranda)
 * - #identitas -> /tentang-kami
 * - #connect-group -> /connect-group
 * - #koneksi -> /koneksi
 * - #lokasi -> #lokasi (smooth scroll)
 */
function resolveHeroCtaHref(href: string | undefined): string {
  if (!href) return '#';
  switch (href) {
    case '#jadwal':
      return '#lokasi';
    case '#identitas':
      return '/tentang-kami';
    case '#connect-group':
      return '/connect-group';
    case '#koneksi':
      return '/koneksi';
    case '#lokasi':
      return '#lokasi';
    default:
      return href;
  }
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const touchStartX = useRef<number | null>(null);

  const totalSlides = heroSlidesData.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay timer with pause on hover, manual pause, or prefers-reduced-motion
  useEffect(() => {
    if (!isPlaying || isHovered || prefersReducedMotion) return;
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, prefersReducedMotion, nextSlide, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  const currentSlide = heroSlidesData[currentIndex];
  const primaryHref = resolveHeroCtaHref(currentSlide.primaryCtaHref);
  const secondaryHref = resolveHeroCtaHref(currentSlide.secondaryCtaHref);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, targetHref: string) => {
    if (targetHref.startsWith('#')) {
      const targetId = targetHref.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Carousel Banner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative bg-[#fbf9f6] text-[#1b1c1a] overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 select-none"
    >
      {/* Atmospheric Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#ffdea6]/35 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#e8e2d5]/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Eyebrow & Status Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8e2d5]/80 border border-[#d3c4af]/50 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#785600] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest text-[#785600] uppercase">
              {currentSlide.badge}
            </span>
          </div>

          {/* Slide Progress Indicator & Autoplay Toggle */}
          <div className="flex items-center gap-3 font-mono text-xs text-[#625e54] bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-[#e8e2d5]">
            <span className="font-bold text-[#785600] text-sm">
              0{currentIndex + 1}
            </span>
            <span className="text-[#d3c4af]">/</span>
            <span>0{totalSlides}</span>

            {/* Quick Dot Controls */}
            <div className="flex gap-1 ml-2">
              {heroSlidesData.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600] ${
                    idx === currentIndex
                      ? 'w-5 bg-[#785600]'
                      : 'w-1.5 bg-[#d3c4af] hover:bg-[#817563]'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <div className="pl-2 border-l border-[#e8e2d5] ml-1">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1 text-[#625e54] hover:text-[#1b1c1a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600] rounded"
                aria-label={isPlaying ? 'Jeda carousel otomatis' : 'Mulai carousel otomatis'}
              >
                {isPlaying && !prefersReducedMotion ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Carousel Frame */}
        <div className="relative rounded-3xl overflow-hidden bg-[#efeeeb] shadow-xl min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-end border border-[#e8e2d5]">
          
          {/* Background Slides Track with Ken Burns & Smooth Crossfade */}
          <div className="absolute inset-0 z-0">
            {heroSlidesData.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.imageUrl}
                    alt={slide.altText}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out ${
                      isActive && !prefersReducedMotion ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  {/* Rich warm sanctuary layered gradients for guaranteed high-contrast legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1a]/95 via-[#1b1c1a]/60 to-[#1b1c1a]/25" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1b1c1a]/75 via-[#1b1c1a]/30 to-transparent" />
                </div>
              );
            })}
          </div>

          {/* Prev / Next Floating Overlay Controls */}
          <div className="absolute top-6 right-6 z-20 hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/85 hover:bg-white text-[#1b1c1a] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur border border-[#e8e2d5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600]"
              aria-label="Slide sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/85 hover:bg-white text-[#1b1c1a] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur border border-[#e8e2d5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600]"
              aria-label="Slide berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Content Overlay */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-3xl space-y-4 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#785600]/85 backdrop-blur text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-xs">
              <span>{currentSlide.subtitle}</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-white drop-shadow-sm">
              <span>{currentSlide.title}</span>
              {currentSlide.titleAccent && (
                <span className="italic text-[#ffdea6] ml-2.5">
                  {currentSlide.titleAccent}
                </span>
              )}
            </h1>

            {/* Slide Description Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#eae8e5] max-w-2xl font-normal leading-relaxed">
              {currentSlide.description}
            </p>

            {/* Dual Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={primaryHref}
                onClick={(e) => handleCtaClick(e, primaryHref)}
                className="btn-magnetic inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-bold text-white bg-[#785600] hover:bg-[#986d00] shadow-md shadow-[#785600]/30 transition-all transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Compass className="w-4 h-4 text-white" />
                <span>{currentSlide.primaryCtaText}</span>
              </a>

              {currentSlide.secondaryCtaText && (
                <a
                  href={secondaryHref}
                  onClick={(e) => handleCtaClick(e, secondaryHref)}
                  target={secondaryHref.startsWith('http') ? '_blank' : undefined}
                  rel={secondaryHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur border border-white/25 shadow-xs transition-all transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>{currentSlide.secondaryCtaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Slide Timeline Tabs below frame */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {heroSlidesData.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={`tab-${slide.id}`}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white shadow-xs text-left transition-all border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600] ${
                  isActive
                    ? 'border-[#785600] ring-1 ring-[#785600]/20 shadow-sm'
                    : 'border-transparent hover:border-[#d3c4af] bg-white/80 hover:bg-white'
                }`}
                aria-label={`Pindah ke slide ${idx + 1}: ${slide.subtitle}`}
                aria-current={isActive}
              >
                {/* Progress Line */}
                <div className="w-full h-1 bg-[#e8e2d5] rounded-full overflow-hidden mb-2 relative">
                  {isActive && (
                    <div
                      key={`progress-${idx}-${isPlaying}-${isHovered}`}
                      className="h-full bg-gradient-to-r from-[#785600] to-[#c59b27] origin-left"
                      style={
                        prefersReducedMotion || !isPlaying || isHovered
                          ? { width: '100%' }
                          : {
                              animation: `heroProgress ${SLIDE_DURATION}ms linear forwards`,
                            }
                      }
                    />
                  )}
                </div>

                {/* Tab Label */}
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className={`font-mono text-[11px] font-bold ${isActive ? 'text-[#785600]' : 'text-[#817563]'}`}>
                    0{idx + 1}
                  </span>
                  <span
                    className={`font-bold text-[13px] sm:text-xs uppercase tracking-wider truncate block ${
                      isActive ? 'text-[#1b1c1a]' : 'text-[#625e54]'
                    }`}
                  >
                    {slide.title}
                  </span>
                </div>
                <p className="font-serif text-[11px] sm:text-xs text-[#817563] truncate hidden sm:block">
                  {slide.subtitle}
                </p>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
