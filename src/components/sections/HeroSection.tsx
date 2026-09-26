'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { heroSlidesData } from '@/data/heroSlidesData';
import { ChevronLeft, ChevronRight, Play, Pause, Compass, ArrowUpRight } from 'lucide-react';

const SLIDE_DURATION = 6500; // 6.5s per slide

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
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

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, nextSlide, currentIndex]);

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

  return (
    <section
      id="hero"
      aria-label="Hero Carousel Banner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-black text-white select-none"
    >
      {/* Background Slides Track with Ken Burns & Smooth Crossfade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {heroSlidesData.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.altText}
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-110' : 'scale-100'
                } opacity-40`}
              />
              {/* Deep cinematic layered gradients for guaranteed WCAG AAA contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85" />
            </div>
          );
        })}
      </div>

      {/* Slide Content Overlay */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-32 flex flex-col items-center">
        {heroSlidesData.map((slide, idx) => {
          if (idx !== currentIndex) return null;
          return (
            <div
              key={`content-${slide.id}`}
              className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-700"
            >
              {/* Slide Badge Pill */}
              <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-zinc-300 uppercase">
                  {slide.badge}
                </span>
              </div>

              {/* Massive Brutalist Display Headline */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.88] mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400">
                  {slide.title}
                </span>
                {slide.titleAccent && (
                  <span className="block text-white mt-1 drop-shadow-[0_12px_40px_rgba(255,255,255,0.2)]">
                    {slide.titleAccent}
                  </span>
                )}
              </h1>

              {/* Slide Description Paragraph */}
              <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-10">
                {slide.description}
              </p>

              {/* Dual Action CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href={slide.primaryCtaHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-xs tracking-[0.16em] uppercase shadow-2xl transition-all duration-300 active:scale-95 min-h-[50px]"
                >
                  <Compass className="w-4 h-4" />
                  <span>{slide.primaryCtaText}</span>
                </a>
                {slide.secondaryCtaText && (
                  <a
                    href={slide.secondaryCtaHref || '#'}
                    target={slide.secondaryCtaHref?.startsWith('http') ? '_blank' : undefined}
                    rel={slide.secondaryCtaHref?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/20 font-bold text-xs tracking-[0.16em] uppercase backdrop-blur-sm transition-all duration-300 min-h-[50px]"
                  >
                    <span>{slide.secondaryCtaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next Floating Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 hover:border-white bg-black/40 backdrop-blur-md text-white items-center justify-center transition-all duration-200 active:scale-90 hover:scale-105"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 hover:border-white bg-black/40 backdrop-blur-md text-white items-center justify-center transition-all duration-200 active:scale-90 hover:scale-105"
        aria-label="Slide berikutnya"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* High-Fashion Timeline Bar & Slide Indicators at Bottom */}
      <div className="absolute bottom-6 left-0 right-0 z-30 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          
          {/* Interactive Slide Timeline Tabs */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {heroSlidesData.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={`tab-${slide.id}`}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className="text-left group focus:outline-none py-2"
                  aria-label={`Pindah ke slide ${idx + 1}: ${slide.subtitle}`}
                  aria-current={isActive}
                >
                  {/* Progress Line */}
                  <div className="w-full h-[2px] bg-white/20 rounded-full overflow-hidden mb-2 relative">
                    {isActive ? (
                      <div
                        className="h-full bg-white transition-all ease-linear"
                        style={{
                          width: isPlaying && !isHovered ? '100%' : '100%',
                          transitionDuration: `${SLIDE_DURATION}ms`,
                        }}
                      />
                    ) : (
                      <div className="h-full w-0 group-hover:w-full bg-white/40 transition-all duration-300" />
                    )}
                  </div>

                  {/* Tab Label */}
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-[11px] font-bold tracking-wider uppercase truncate ${
                        isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                      }`}
                    >
                      {slide.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Autoplay Play/Pause Toggle */}
          <div className="hidden sm:flex items-center pl-2 border-l border-white/10">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label={isPlaying ? 'Jeda carousel otomatis' : 'Mulai carousel otomatis'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
