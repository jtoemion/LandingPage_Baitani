'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import InstagramIcon from '@/components/common/InstagramIcon';
import SiteIcon from '@/components/common/SiteIcon';

export default function EventsCarousel() {
  return (
    <section id="acara" className="py-20 lg:py-24 bg-[#fbf9f6] text-[#1b1c1a] relative border-b border-[#e8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#785600] block mb-2 font-mono">
              AGENDA & WARTA PELAYANAN
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1b1c1a]">
              Acara & Kegiatan Jemaat
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/acara"
              className="btn-magnetic inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#d3c4af] hover:border-[#785600] text-[#785600] hover:bg-[#e8e2d5]/40 text-xs font-bold tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600]"
            >
              <span>PUSAT INFORMASI ACARA</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Announcement Grid (Truthful Church Information Hub) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Card 1: Warta Jemaat Mingguan */}
          <div className="bg-white border border-[#e8e2d5] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#d3c4af] transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#f5f3f0] border border-[#e8e2d5] flex items-center justify-center text-[#785600]">
                <SiteIcon name="event-announcement" className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#785600] block mb-1">
                  WARTA LISAN & TERTULIS
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1b1c1a] mb-2">
                  Warta Jemaat Mingguan
                </h3>
                <p className="text-[#625e54] text-[13px] sm:text-sm leading-relaxed font-normal">
                  Seluruh agenda kebaktian khusus, persekutuan doa, kegiatan pemuda, dan program pelayanan jemaat diumumkan secara berkala saat Ibadah Raya hari Minggu atau melalui kanal resmi gereja.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#e8e2d5] flex items-center justify-between">
              <span className="text-xs text-[#817563] flex items-center gap-1.5 font-medium">
                <SiteIcon name="church-location" className="w-3.5 h-3.5" />
                <span>Gedung Gereja Sukabumi</span>
              </span>
              <Link
                href="/#lokasi"
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#785600] hover:text-[#986d00] transition-colors"
              >
                <span>Informasi Ibadah & Lokasi</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Saluran Media Sosial Resmi */}
          <div className="bg-white border border-[#e8e2d5] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#d3c4af] transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-pink-700 block mb-1">
                  SIARAN DIGITAL TERKINI
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1b1c1a] mb-2">
                  Instagram @gbibaitanisukabumi
                </h3>
                <p className="text-[#625e54] text-[13px] sm:text-sm leading-relaxed font-normal">
                  Untuk pemberitahuan kegiatan mendesak, dokumentasi foto pelayanan, dan pengumuman rohani terkini, silakan ikuti akun media sosial resmi Gereja Baptis Indonesia Baitani Sukabumi.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#e8e2d5] flex items-center justify-between">
              <span className="text-xs text-[#817563] font-medium font-mono">
                @gbibaitanisukabumi
              </span>
              <a
                href="https://www.instagram.com/gbibaitanisukabumi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#785600] hover:text-[#986d00] transition-colors"
              >
                <span>Buka Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Informative Guidance Strip */}
        <div className="bg-[#f2efe9] border border-[#e8e2d5] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <SiteIcon name="event-announcement" className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-[13px] text-[#625e54] leading-relaxed">
              <strong className="text-[#1b1c1a]">Pemberitahuan Resmi:</strong> Silakan periksa pengumuman terbaru pada akun Instagram resmi @gbibaitanisukabumi atau tanyakan langsung saat hadir beribadah di gereja.
            </p>
          </div>
          <Link
            href="/acara"
            className="text-xs font-bold tracking-wider uppercase text-[#785600] hover:text-[#986d00] inline-flex items-center gap-1 flex-shrink-0"
          >
            <span>Selengkapnya di Halaman Acara</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
