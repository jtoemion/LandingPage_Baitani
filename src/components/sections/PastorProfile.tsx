import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import InstagramIcon from '@/components/common/InstagramIcon';

export default function PastorProfile() {
  return (
    <section id="pastor" className="py-24 bg-black text-white border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dignified Portrait (~40% width / 5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
              <Image
                src="/images/gembala/pdt-kristianto-ibu-mexy.jpeg"
                alt="Foto Pdt. Kristianto dan Ibu Mexy JT — Gembala Gereja Baptis Indonesia Baitani Sukabumi"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-top grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-black tracking-widest uppercase text-[#d4af37] block mb-1">
                  GEMBALA JEMAAT
                </span>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Pdt. Kristianto & Ibu Mexy JT
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Calling (~60% width / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-black tracking-widest uppercase text-zinc-400 block mb-2 font-mono">
              PELAYANAN GEMBALA JEMAAT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase mb-6 leading-tight">
              Pdt. Kristianto & Ibu Mexy JT
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              <p>
                Pdt. Kristianto adalah Gembala Jemaat Gereja Baptis Indonesia Baitani, Sukabumi; Ibu Mexy JT adalah istrinya.
              </p>
              <p>
                Informasi lebih lanjut mengenai profil dan aktivitas pelayanan dapat dilihat melalui akun Instagram resmi gereja.
              </p>
            </div>

            {/* Read More & Social Media Row */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-zinc-800">
              <Link
                href="/gembala"
                className="btn-magnetic inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-[#d4af37] transition-colors py-2"
              >
                <span>PROFIL GEMBALA & PELAYANAN</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-zinc-400">
                <span className="text-zinc-600">|</span>
                <a
                  href="https://www.instagram.com/gbibaitanisukabumi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                  aria-label="Instagram Resmi Gereja Baitani Sukabumi"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>@gbibaitanisukabumi</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
