'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Navigation, ArrowUpRight } from 'lucide-react';
import InstagramIcon from '@/components/common/InstagramIcon';

export default function CampusLocator() {
  const church = {
    id: 'sukabumi-main',
    name: 'Gereja Baptis Indonesia Baitani, Sukabumi',
    city: 'Sukabumi',
    address: 'Jl. R.E. Martadinata No. 86, Sukabumi, Jawa Barat',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jl.+R.E.+Martadinata+No.+86+Sukabumi',
    instagramUrl: 'https://www.instagram.com/gbibaitanisukabumi/',
  };

  return (
    <section id="lokasi" className="py-24 bg-black text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2 font-mono">
              GEREJA LOKAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Lokasi Ibadah Jemaat
            </h2>
          </div>

          {/* Action Button */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#lokasi"
              className="btn-magnetic inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/20 hover:border-[#d4af37] text-white hover:text-[#d4af37] text-xs font-bold tracking-wider uppercase transition-colors min-h-11"
            >
              <span>PETUNJUK LOKASI DI BERANDA</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Single Factual Church Card */}
        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-7 sm:p-10 max-w-3xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-black tracking-wider uppercase text-[#d4af37] bg-[#d4af37]/20 px-2.5 py-1 rounded border border-[#d4af37]/40">
              {church.city}
            </span>
            <span className="text-xs text-zinc-400 font-mono">
              Jawa Barat
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            {church.name}
          </h3>

          <div className="flex items-start gap-2.5 text-sm text-zinc-300 mb-6 leading-relaxed">
            <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
            <span>{church.address}</span>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light">
            Gereja Baptis Indonesia Baitani adalah jemaat lokal di Kota Sukabumi, Jawa Barat. Konfirmasi jam ibadah dan persekutuan rutin dapat ditanyakan langsung ke sekretariat gereja atau melalui akun Instagram resmi @gbibaitanisukabumi.
          </p>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
            <a
              href={church.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-[#f3e5ab] transition-all min-h-11"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>PETUNJUK ARAH GOOGLE MAPS</span>
            </a>
            <a
              href={church.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-zinc-700 hover:border-white text-white text-xs font-bold tracking-wider uppercase transition-colors min-h-11"
              aria-label="Instagram Resmi Baitani Sukabumi"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
              <span>@gbibaitanisukabumi</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
