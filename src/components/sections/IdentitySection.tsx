import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Compass, Target } from 'lucide-react';

export default function IdentitySection() {
  return (
    <section id="identitas" className="py-24 bg-paper text-ink border-b border-outline relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Short Logo Mark */}
        <div className="w-12 h-12 rounded-sm bg-ink text-paper flex items-center justify-center font-black text-base tracking-tighter mb-8">
          GBI
        </div>

        {/* Narrative Description */}
        <div className="space-y-6 max-w-3xl mx-auto mb-16 text-copy text-base sm:text-lg leading-relaxed font-light border border-outline rounded-2xl p-6 sm:p-8">
          <p>
            Gereja Baptis Indonesia Baitani, Sukabumi adalah persekutuan jemaat lokal yang berakar kuat dalam kebenaran Firman Tuhan, bertumbuh dalam kasih Kristus, dan berpegang teguh pada doktrin Alkitabiah.
          </p>
          <p className="text-sm sm:text-base">
            Berlokasi di Jl. R.E. Martadinata No. 86, Sukabumi, kami rindu menjadi keluarga rohani yang hangat bagi setiap orang yang rindu mencari Tuhan, mengalami pemulihan, dan bertumbuh dalam persekutuan Komunitas Iman (KOI).
          </p>
        </div>

        {/* Two-Column Visi & Misi Stark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-16 text-left">
          
          {/* Visi Block */}
          <div className="p-8 rounded-2xl bg-white border border-outline hover:border-gold transition-all flex flex-col justify-between shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-xs font-black tracking-widest uppercase text-copy font-mono">
                VISI PERSEKUTUAN
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink leading-snug">
              Jemaat yang Berakar, Bertumbuh, & Berbuah dalam Kristus
            </h3>
            <p className="text-copy text-sm sm:text-base mt-3 font-light leading-relaxed">
              Membangun keluarga rohani yang setia dalam doa, tekun mempelajari Firman Tuhan, dan memancarkan kasih Kristus di tengah masyarakat Kota Sukabumi.
            </p>
          </div>

          {/* Misi Block */}
          <div className="p-8 rounded-2xl bg-white border border-outline hover:border-gold transition-all flex flex-col justify-between shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-xs font-black tracking-widest uppercase text-copy font-mono">
                MISI PELAYANAN
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink leading-snug">
              Pemuridan Melalui Komunitas Iman (KOI)
            </h3>
            <p className="text-copy text-sm sm:text-base mt-3 font-light leading-relaxed">
              Menumbuhkan warga jemaat yang saling memperhatikan dalam Komunitas Iman (KOI), membina anak-anak dan generasi muda, serta menyatakan kepedulian kasih di Sukabumi.
            </p>
          </div>

        </div>

        {/* Credo CTA Block (Pengakuan Iman) */}
        <div className="w-full max-w-2xl p-6 sm:p-8 rounded-2xl border border-outline bg-white flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-ink">
                Pengakuan Iman & Doktrin Kami
              </h4>
              <p className="text-sm text-copy font-light">
                Ajaran teologis Alkitabiah yang kami percayai dan pegang teguh bersama.
              </p>
            </div>
          </div>
          <Link
            href="/tentang-kami"
            className="btn-magnetic inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold hover:border-ink text-xs font-bold tracking-wider uppercase text-paper bg-gold hover:bg-ink transition-all whitespace-nowrap min-h-11"
            aria-label="Lihat Selengkapnya: Pengakuan Iman & Profil Gereja"
          >
            <span>BACA PENGAKUAN IMAN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
