'use client';

import React from 'react';
import { BellRing, ArrowRight } from 'lucide-react';

interface MarqueeTickerProps {
  announcements?: string[];
}

export default function MarqueeTicker({
  announcements = [
    'TEMA TAHUNAN: TAHUN PERSATUAN, PEMULIHAN & HADIRAT YANG NYATA',
    'Ibadah Raya Minggu: Sesi 1 pk 07:30 WIB | Sesi 2 pk 10:30 WIB di Main Sanctuary Baitani',
    'Baitani Kids & Youth Service berjalan serentak setiap akhir pekan!',
    'Mezbah Doa & Puasa Korporat: Setiap Rabu pk 19:00 WIB via Hybrid (Ruang Doa & Zoom)',
    'Butuh konseling atau kunjungan pastoral? Hubungi Pastoral Care kami di menu formulir koneksi.',
  ],
}: MarqueeTickerProps) {
  return (
    <aside
      className="bg-slate-900 border-y border-slate-800 text-white py-3 overflow-hidden select-none relative z-20"
      aria-label="Warta & Pengumuman Jemaat"
    >
      <div className="flex items-center">
        {/* Sticky Label Pill */}
        <div className="flex-shrink-0 z-10 pl-4 sm:pl-8 pr-4 bg-slate-900 flex items-center gap-2 border-r border-slate-800 shadow-md">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold tracking-wider uppercase">
            <BellRing className="w-3.5 h-3.5" />
            <span>WARTA</span>
          </span>
        </div>

        {/* Continuous Running Marquee */}
        <div className="overflow-hidden flex-1 relative flex items-center">
          <div className="animate-marquee flex items-center gap-8 text-sm font-medium text-slate-200">
            {announcements.map((item, idx) => (
              <span key={`ticker-1-${idx}`} className="flex items-center gap-4 flex-shrink-0">
                <span className="hover:text-blue-400 transition-colors cursor-default">
                  {item}
                </span>
                <span className="text-blue-500 font-bold opacity-60">❖</span>
              </span>
            ))}
            {announcements.map((item, idx) => (
              <span key={`ticker-2-${idx}`} className="flex items-center gap-4 flex-shrink-0">
                <span className="hover:text-blue-400 transition-colors cursor-default">
                  {item}
                </span>
                <span className="text-blue-500 font-bold opacity-60">❖</span>
              </span>
            ))}
          </div>
        </div>

        {/* Optional Right Action Shortcut */}
        <div className="hidden lg:flex flex-shrink-0 pr-6 pl-4 bg-slate-900 z-10 border-l border-slate-800">
          <a
            href="#agenda"
            className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
          >
            <span>Seluruh Agenda</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </aside>
  );
}
