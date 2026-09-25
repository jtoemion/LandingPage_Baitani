import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PastorProfile() {
  return (
    <section id="pastor" className="py-24 bg-black text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dignified Portrait (~40% width / 5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                alt="Foto Pdt. Johanes Pratama, Gembala Sidang"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-400 block mb-1">
                  GEMBALA SIDANG
                </span>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Pdt. Johanes Pratama, M.Th
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Calling (~60% width / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[11px] font-black tracking-[0.3em] uppercase text-zinc-400 block mb-2">
              PROFIL KEPEMIMPINAN
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-6 leading-tight">
              Pdt. Johanes Pratama
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              <p>
                Pdt. Johanes Pratama menyerahkan hidupnya secara penuh untuk melayani pekerjaan Tuhan sejak usia muda. Setelah menyelesaikan pendidikan teologi dan pelayanan pastoral lintas kota, ia kembali dengan visi yang membara untuk mendirikan keluarga rohani yang kokoh dan relevan bagi generasi masa kini.
              </p>
              <p>
                Sebagai Gembala Sidang, visinya adalah melihat setiap jiwa mengalami kasih anugerah Allah yang mengubahkan, keluarga-keluarga dipulihkan, dan jemaat diperlengkapi untuk menjadi berkat di ranah profesional, pendidikan, dan masyarakat luas.
              </p>
            </div>

            {/* Read More & Social Media Row (§2.7 spec) */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
              <a
                href="#koneksi"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-blue-400 transition-colors py-2"
              >
                <span>LIHAT SELENGKAPNYA</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-zinc-400">
                <span className="text-zinc-600">|</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                  aria-label="Instagram Pastor"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                  aria-label="YouTube Channel Pastor"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
