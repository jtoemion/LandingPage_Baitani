'use client';

import React, { useRef } from 'react';
import { eventsData } from '@/data/eventsData';
import { Calendar, MapPin, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

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
    <section id="agenda" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Kegiatan & Perjumpaan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
              Agenda & Kegiatan Mendatang
            </h2>
            <p className="text-slate-600 text-base max-w-xl">
              Ikuti berbagai seminar rohani, retreat pemuda, dan ibadah spesial untuk mempererat persekutuan kita.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-600 shadow-sm flex items-center justify-center transition-colors min-w-[44px] min-h-[44px]"
              aria-label="Gulir ke kiri"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-600 shadow-sm flex items-center justify-center transition-colors min-w-[44px] min-h-[44px]"
              aria-label="Gulir ke kanan"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll-Snap Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6"
        >
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[380px] snap-start bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden group"
            >
              {/* Event Image & Date Badge */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-md">
                  {event.displayDate}
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-4 bg-blue-600 text-white px-2.5 py-0.5 rounded text-[11px] font-semibold">
                  {event.category}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="mt-5 pt-3">
                  <a
                    href="#koneksi"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 text-xs font-semibold transition-colors min-h-[44px]"
                  >
                    <span>Informasi / Pendaftaran</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
