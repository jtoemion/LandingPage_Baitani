import React from 'react';
import { ArrowRight, BookOpen, Compass, Target } from 'lucide-react';

export default function IdentitySection() {
  return (
    <section id="identitas" className="py-24 bg-black text-white border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Short Logo Mark */}
        <div className="w-12 h-12 rounded-sm bg-white text-black flex items-center justify-center font-black text-2xl tracking-tighter mb-8 shadow-2xl">
          B
        </div>

        {/* Narrative Description (§2.4 spec) */}
        <div className="space-y-6 max-w-3xl mx-auto mb-16 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
          <p>
            Baitani adalah gereja sel yang berakar dalam Firman, dipenuhi oleh rupa-rupa karunia Roh Kudus, dan bergerak dalam Amanat Agung untuk menjadikan segala bangsa murid Kristus yang berakar kuat dan berbuah lebat.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base">
            Dari komunitas lokal hingga menjangkau keluarga-keluarga di berbagai penjuru kota, kami terus berlari dalam visi ilahi: membangun gereja lokal yang sehat, relevan, dan membawa terang keselamatan yang memulihkan generasi.
          </p>
        </div>

        {/* Two-Column Visi & Misi Stark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-16 text-left">
          
          {/* Visi Block */}
          <div className="p-8 rounded-xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-zinc-400">
                VISI
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              Gereja Sel yang Apostolik dan Profetik
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-3 font-light leading-relaxed">
              Membangun persekutuan yang intim dengan Roh Kudus serta mengobarkan pergerakan doa, pujian, dan penyembahan yang berdampak bagi transformasi bangsa.
            </p>
          </div>

          {/* Misi Block */}
          <div className="p-8 rounded-xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-zinc-400">
                MISI
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              1.000 Komunitas Sel yang Kuat & Generasi Murid
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-3 font-light leading-relaxed">
              Memuridkan setiap jemaat menjadi pribadi yang dewasa dalam iman, teguh berkarakter Kristus, dan menjadi berkat nyata di marketplace dan masyarakat.
            </p>
          </div>

        </div>

        {/* Credo CTA Block (Pengakuan Iman) */}
        <div className="w-full max-w-2xl p-6 sm:p-8 rounded-xl border border-white/15 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Pengakuan Iman Kami
              </h4>
              <p className="text-xs text-zinc-400 font-light">
                Pandangan teologis & nilai kekristenan yang kami percayai sebagai gereja Tuhan.
              </p>
            </div>
          </div>
          <a
            href="#koneksi"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 hover:border-white text-xs font-bold tracking-wider uppercase text-white hover:bg-white hover:text-black transition-all whitespace-nowrap min-h-[44px]"
            aria-label="Lihat Selengkapnya: Pengakuan Iman"
          >
            <span>BACA CREDO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
