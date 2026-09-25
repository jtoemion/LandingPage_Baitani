'use client';

import React, { useState, useEffect } from 'react';
import { scheduleData } from '@/data/scheduleData';
import { Clock, MapPin, Video, Users, Navigation, AlertCircle } from 'lucide-react';

export default function ServiceSchedule() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Sunday' | 'Saturday' | 'Wednesday'>('all');
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    targetName: 'Ibadah Raya 1',
  });

  // Calculate live countdown to the next Sunday 07:30 WIB
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      // Target next upcoming Sunday 07:30 WIB (UTC+7)
      const day = now.getDay(); // 0 is Sunday
      const diffDays = (7 - day) % 7;
      
      const targetDate = new Date(now);
      targetDate.setDate(now.getDate() + (diffDays === 0 && (now.getHours() > 7 || (now.getHours() === 7 && now.getMinutes() >= 30)) ? 7 : diffDays));
      targetDate.setHours(7, 30, 0, 0);

      const diffMs = targetDate.getTime() - now.getTime();
      if (diffMs > 0) {
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diffMs / 1000 / 60) % 60);
        const seconds = Math.floor((diffMs / 1000) % 60);
        setCountdown({
          days,
          hours,
          minutes,
          seconds,
          targetName: 'Ibadah Raya Minggu (Sesi 1)',
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const filteredSchedules = activeFilter === 'all'
    ? scheduleData
    : scheduleData.filter((item) => item.dayOfWeek === activeFilter);

  return (
    <section id="jadwal" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Waktu Ibadah Jemaat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Jadwal Ibadah & Pertemuan Rutin
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Hadiri ibadah kami secara tatap muka (onsite) di gedung gereja atau ikuti siaran langsung dari mana pun Anda berada.
          </p>
        </div>

        {/* Live Countdown Banner (Component 2.4 Spec) */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-800 to-slate-900 border border-blue-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4 animate-spin-slow" />
                <span>HITUNG MUNDUR IBADAH TERDEKAT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {countdown.targetName}
              </h3>
              <p className="text-slate-400 text-sm">
                Setiap Minggu pukul 07:30 WIB — Main Sanctuary Lt. 2
              </p>
            </div>

            {/* Countdown Blocks */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center bg-slate-950/70 border border-slate-700/60 rounded-xl px-4 py-3 min-w-[64px] sm:min-w-[76px]">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">
                  {String(countdown.days).padStart(2, '0')}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Hari</span>
              </div>
              <span className="text-xl font-bold text-slate-600">:</span>
              <div className="flex flex-col items-center bg-slate-950/70 border border-slate-700/60 rounded-xl px-4 py-3 min-w-[64px] sm:min-w-[76px]">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {String(countdown.hours).padStart(2, '0')}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Jam</span>
              </div>
              <span className="text-xl font-bold text-slate-600">:</span>
              <div className="flex flex-col items-center bg-slate-950/70 border border-slate-700/60 rounded-xl px-4 py-3 min-w-[64px] sm:min-w-[76px]">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {String(countdown.minutes).padStart(2, '0')}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Menit</span>
              </div>
              <span className="text-xl font-bold text-slate-600">:</span>
              <div className="flex flex-col items-center bg-slate-950/70 border border-slate-700/60 rounded-xl px-4 py-3 min-w-[64px] sm:min-w-[76px]">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">
                  {String(countdown.seconds).padStart(2, '0')}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Detik</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            Semua Ibadah
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('Sunday')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
              activeFilter === 'Sunday'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            Hari Minggu (Umum)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('Saturday')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
              activeFilter === 'Saturday'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            Hari Sabtu (Youth)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('Wednesday')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
              activeFilter === 'Wednesday'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            Hari Rabu (Doa)
          </button>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSchedules.map((schedule) => (
            <div
              key={schedule.id}
              className="p-6 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-900/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded text-xs font-semibold bg-blue-950 text-blue-400 border border-blue-800 mb-2">
                      {schedule.dayNameIndo} • {schedule.time}
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      {schedule.name}
                    </h4>
                  </div>
                  {schedule.livestreamUrl && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      <span>Live Stream</span>
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-sm text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{schedule.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span className="text-slate-400">Jemaat: {schedule.audience}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between gap-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-400" />
                  <span>Petunjuk Arah</span>
                </a>
                {schedule.livestreamUrl && (
                  <a
                    href={schedule.livestreamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors min-h-[36px]"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Tonton Live</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note on parking & nursery */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
          <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
          <span>Fasilitas ruang bayi (Nursery Room) dan parkir mobil/motor tersedia di lantai dasar.</span>
        </div>

      </div>
    </section>
  );
}
