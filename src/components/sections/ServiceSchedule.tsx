'use client';

import React, { useState, useEffect } from 'react';
import { scheduleData } from '@/data/scheduleData';
import { ScheduleItem } from '@/types';
import { Clock, MapPin, Video, Users, Navigation, AlertCircle, Sparkles } from 'lucide-react';

export default function ServiceSchedule() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Sunday' | 'Saturday' | 'Wednesday'>('all');
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    targetName: 'Ibadah Raya 1 (Pagi)',
    dayName: 'Minggu',
    timeStr: '07:30 WIB',
    isHappeningNow: false,
  });

  // Dynamic next service resolver
  useEffect(() => {
    const dayMap: Record<string, number> = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };

    const updateCountdown = () => {
      const now = new Date();
      const currentDay = now.getDay();
      let nearestDiff = Infinity;
      let targetService: ScheduleItem = scheduleData[0];
      let nearestDate = new Date();

      for (const service of scheduleData) {
        const serviceDay = dayMap[service.dayOfWeek];
        const dayDiff = (serviceDay - currentDay + 7) % 7;

        const candidate = new Date(now);
        candidate.setDate(now.getDate() + dayDiff);
        candidate.setHours(service.targetHour, service.targetMinute, 0, 0);

        // Check if service is currently happening (within 90 minutes of start time)
        const timeSinceStart = now.getTime() - candidate.getTime();
        if (dayDiff === 0 && timeSinceStart >= 0 && timeSinceStart < 90 * 60 * 1000) {
          setCountdown({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            targetName: service.name,
            dayName: service.dayNameIndo,
            timeStr: service.time,
            isHappeningNow: true,
          });
          return;
        }

        // If time has passed today, schedule for next week (+7 days)
        if (candidate.getTime() <= now.getTime()) {
          candidate.setDate(candidate.getDate() + 7);
        }

        const diff = candidate.getTime() - now.getTime();
        if (diff < nearestDiff) {
          nearestDiff = diff;
          targetService = service;
          nearestDate = candidate;
        }
      }

      const diffMs = nearestDate.getTime() - now.getTime();
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
          targetName: targetService.name,
          dayName: targetService.dayNameIndo,
          timeStr: targetService.time,
          isHappeningNow: false,
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#d4af37]/30">
            <span>Waktu Ibadah Jemaat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Jadwal Ibadah & Pertemuan Rutin
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed font-light">
            Hadiri ibadah kami secara tatap muka (onsite) di gedung gereja atau ikuti siaran langsung dari mana pun Anda berada.
          </p>
        </div>

        {/* Dynamic Countdown Banner (Component 2.4 Spec) */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-950 via-zinc-900 to-stone-950 border border-[#d4af37]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-[#d4af37] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>
                  {countdown.isHappeningNow ? 'STATUS IBADAH SAAT INI' : 'HITUNG MUNDUR IBADAH TERDEKAT'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-2.5">
                <span>{countdown.targetName}</span>
                {countdown.isHappeningNow && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SEDANG BERLANGSUNG</span>
                  </span>
                )}
              </h3>
              <p className="text-zinc-400 text-sm">
                {countdown.dayName} pukul {countdown.timeStr} — Main Sanctuary Gedung Baitani
              </p>
            </div>

            {/* Countdown Blocks */}
            {!countdown.isHappeningNow ? (
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex flex-col items-center bg-black/80 border border-white/10 rounded-xl px-4 py-3 min-w-[64px] sm:min-w-[76px]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] font-mono">
                    {String(countdown.days).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">Hari</span>
                </div>
                <span className="text-xl font-bold text-zinc-600">:</span>
                <div className="flex flex-col items-center bg-black/80 border border-white/10 rounded-xl px-4 py-3 min-w-[64px] sm:min-w-[76px]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {String(countdown.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">Jam</span>
                </div>
                <span className="text-xl font-bold text-zinc-600">:</span>
                <div className="flex flex-col items-center bg-black/80 border border-white/10 rounded-xl px-4 py-3 min-w-[64px] sm:min-w-[76px]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {String(countdown.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">Menit</span>
                </div>
                <span className="text-xl font-bold text-zinc-600">:</span>
                <div className="flex flex-col items-center bg-black/80 border border-white/10 rounded-xl px-4 py-3 min-w-[64px] sm:min-w-[76px]">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] font-mono">
                    {String(countdown.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">Detik</span>
                </div>
              </div>
            ) : (
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all min-h-[48px]"
              >
                <Video className="w-5 h-5" />
                <span>Masuk Live Streaming Sekarang</span>
              </a>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white font-semibold'
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
                ? 'bg-blue-600 text-white font-semibold'
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
                ? 'bg-blue-600 text-white font-semibold'
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
                ? 'bg-blue-600 text-white font-semibold'
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
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors min-h-[44px]"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-400" />
                  <span>Petunjuk Arah</span>
                </a>
                {schedule.livestreamUrl && (
                  <a
                    href={schedule.livestreamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors min-h-[44px]"
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
