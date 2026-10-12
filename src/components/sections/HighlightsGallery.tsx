'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, ShieldCheck } from 'lucide-react';
import InstagramIcon from '@/components/common/InstagramIcon';
import SiteIcon from '@/components/common/SiteIcon';

export default function HighlightsGallery() {
  return (
    <section
      id="sorotan"
      className="py-20 lg:py-24 bg-[#f5f3f0] text-[#1b1c1a] border-b border-[#e8e2d5] relative scroll-mt-20"
      aria-label="Sorotan dan Dokumentasi Resmi Jemaat"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#785600] block mb-2 font-mono">
              DOKUMENTASI & PERSEKUTUAN RESMI
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1b1c1a] flex items-center gap-3">
              <span>Sorotan & Dokumentasi Jemaat</span>
              <SiteIcon name="photo-documentation" className="w-6 h-6 text-[#817563] hidden sm:inline" />
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/sorotan"
              className="btn-magnetic inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#d3c4af] hover:border-[#785600] text-[#785600] hover:bg-[#e8e2d5]/40 text-xs font-bold tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600]"
            >
              <span>PORTAL DOKUMENTASI</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Honest Warm Sanctuary Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

          {/* Card 1: Kanal Dokumentasi Digital Resmi Instagram */}
          <div className="bg-white border border-[#e8e2d5] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-[#d3c4af] transition-all group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-pink-700 bg-pink-50 border border-pink-200 px-3 py-1 rounded-full">
                  PUBLIKASI DIGITAL RESMI
                </span>
                <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-6 h-6" />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium text-[#1b1c1a] mb-2 group-hover:text-[#785600] transition-colors">
                  Dokumentasi di Instagram @gbibaitanisukabumi
                </h3>
                <p className="text-[#625e54] text-[13px] sm:text-sm leading-relaxed font-normal">
                  Seluruh dokumentasi kegiatan ibadah raya, persekutuan doa, pembinaan pemuda, kegiatan anak-anak sekolah minggu, dan momen persekutuan jemaat diabadikan secara berkala dan terverifikasi pada feed serta sorotan cerita Instagram resmi.
                </p>
              </div>

              <div className="pt-4 border-t border-[#e8e2d5] text-xs text-[#817563] flex items-center gap-2">
                <span className="font-mono font-semibold text-[#1b1c1a]">@gbibaitanisukabumi</span>
                <span>•</span>
                <span>Sumber Foto & Video Sah</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#e8e2d5]">
              <a
                href="https://www.instagram.com/gbibaitanisukabumi/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#785600] hover:bg-[#986d00] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600]"
              >
                <span>Lihat Dokumentasi di Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Pengalaman Persekutuan Nyata di Rumah Tuhan */}
          <div className="bg-white border border-[#e8e2d5] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-[#d3c4af] transition-all group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#785600] bg-[#f5f3f0] border border-[#e8e2d5] px-3 py-1 rounded-full">
                  PERSEKUTUAN JEMAAT LOKAL
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#f5f3f0] border border-[#e8e2d5] flex items-center justify-center text-[#785600] group-hover:scale-105 transition-transform">
                  <SiteIcon name="faith-community" className="w-6 h-6" />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium text-[#1b1c1a] mb-2 group-hover:text-[#785600] transition-colors">
                  Alami Kasih & Kehangatan Persekutuan Langsung
                </h3>
                <p className="text-[#625e54] text-[13px] sm:text-sm leading-relaxed font-normal">
                  Dokumentasi paling indah adalah hadirat Tuhan dan kasih persaudaraan yang Anda alami sendiri. Pintu persekutuan Gereja Baptis Indonesia Baitani senantiasa terbuka menyambut Anda dan keluarga untuk bertumbuh bersama di Sukabumi.
                </p>
              </div>

              <div className="pt-4 border-t border-[#e8e2d5] text-xs text-[#817563] flex items-center gap-2">
                <SiteIcon name="church-location" className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="font-medium text-[#1b1c1a]">Jl. R.E. Martadinata No. 86, Sukabumi</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#e8e2d5]">
              <Link
                href="/#lokasi"
                className="btn-magnetic w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full border border-[#d3c4af] hover:border-[#785600] hover:bg-[#e8e2d5]/30 text-[#785600] font-bold text-xs tracking-wider uppercase transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600]"
              >
                <span>Informasi Kunjungan & Lokasi</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>

        </div>

        {/* Warm Sanctuary Transparency Strip */}
        <div className="bg-[#edeae3] border border-[#e8e2d5] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#785600] flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-[13px] text-[#625e54] leading-relaxed">
              <strong className="text-[#1b1c1a]">Integritas Dokumentasi:</strong> Gereja kami tidak menampilkan foto stok representasi sebagai dokumentasi kegiatan jemaat. Kunjungi akun media sosial resmi untuk melihat dokumentasi foto dan video asli.
            </p>
          </div>
          <Link
            href="/sorotan"
            className="text-xs font-bold tracking-wider uppercase text-[#785600] hover:text-[#986d00] inline-flex items-center gap-1 flex-shrink-0"
          >
            <span>Selengkapnya di Halaman Sorotan</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
