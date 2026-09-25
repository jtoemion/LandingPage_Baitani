import React from 'react';
import { Calendar, HeartHandshake, Play, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Media with Elegant Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2000&auto=format&fit=crop"
          alt="Gereja Baitani Worship Atmosphere"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000"
        />
        {/* Gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Welcome Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>SELAMAT DATANG DI GEREJA BAITANI</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl">
          Rumah Bagi Jiwa, <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
            Keluarga yang Bertumbuh.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-10">
          Kami menyambut Anda apa adanya untuk mengalami kasih tanpa syarat, pemulihan hidup, dan perjumpaan nyata dengan Kristus di setiap ibadah dan komunitas kami.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#jadwal"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-xl shadow-blue-600/25 active:scale-98 transition-all min-h-[48px]"
          >
            <Calendar className="w-5 h-5" />
            <span>Lihat Jadwal Ibadah</span>
          </a>
          <a
            href="#koneksi"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium text-base hover:text-white transition-all min-h-[48px]"
          >
            <HeartHandshake className="w-5 h-5 text-blue-400" />
            <span>Permohonan Doa</span>
          </a>
        </div>

        {/* Highlights Meta Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-900/50 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">2 Sesi Ibadah</p>
              <p className="text-slate-400 text-xs">Setiap Hari Minggu</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-900/50 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Play className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Live Streaming</p>
              <p className="text-slate-400 text-xs">Disiarkan Online</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-900/50 flex items-center justify-center text-blue-400 flex-shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Kids & Youth</p>
              <p className="text-slate-400 text-xs">Kelas Khusus Usia</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-900/50 flex items-center justify-center text-blue-400 flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Gedung Pusat</p>
              <p className="text-slate-400 text-xs">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
