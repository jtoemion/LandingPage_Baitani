import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { Quote, MapPin, Users } from 'lucide-react';
import SiteIcon from '@/components/common/SiteIcon';
import InstagramIcon from '@/components/common/InstagramIcon';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gembala Jemaat & Pelayanan — Gereja Baptis Indonesia Baitani, Sukabumi',
  description: 'Mengenal Gembala Jemaat Pdt. Kristianto & Ibu Mexy JT serta kepengurusan dan pelayanan jemaat Gereja Baptis Indonesia Baitani di Sukabumi.',
};

export default function GembalaPage() {
  const ministryFocusAreas = [
    {
      title: 'Pelayanan Firman & Pemuridan',
      desc: 'Mendukung pendalaman Alkitab, kelas pembentukan iman, dan kelompok Komunitas Iman (KOI) agar jemaat berakar teguh dalam ajaran Alkitabiah.',
      icon: 'bible-study' as const,
    },
    {
      title: 'Pelayanan Diakonia & Persekutuan',
      desc: 'Menyatakan kasih persaudaraan melalui perhatian jemaat, saling menopang dalam kedukaan maupun sukacita, dan aksi kepedulian sosial di Sukabumi.',
      icon: 'prayer' as const,
    },
    {
      title: 'Pelayanan Generasi Muda & Anak',
      desc: 'Wadah pembinaan rohani bagi anak-anak sekolah minggu dan pemuda-pemudi untuk bertumbuh dalam kasih Tuhan sejak dini.',
      icon: 'youth' as const,
    },
    {
      title: 'Persekutuan Doa & Ibadah',
      desc: 'Memelihara keintiman doa korporat jemaat, permohonan syafaat, dan ketertiban tata ibadah yang memuliakan Tuhan.',
      icon: 'worship' as const,
    },
  ];

  return (
    <div className="min-h-dvh flex flex-col bg-[#fbf9f6] text-[#1b1c1a]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="GEMBALA JEMAAT & PELAYANAN"
          title="GEMBALA JEMAAT"
          titleAccent="Pdt. Kristianto & Ibu Mexy JT"
          subtitle="Mengenal Gembala Jemaat Gereja Baptis Indonesia Baitani, Sukabumi dan komitmen pelayanan bersama bagi pertumbuhan rohani warga jemaat dalam kasih Kristus."
          breadcrumbCurrent="Gembala & Pelayanan"
          imageSrc="/images/page-hero/gembala.jpg"
          imageAlt="Foto ilustrasi: tangan membuka Alkitab."
        />

        {/* Main Pastoral Profile Section */}
        <section className="py-24 bg-[#f5f3f0] border-b border-[#e8e2d5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Pastor & Wife Photos (6 cols on lg) */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                  {/* Photo 1: Pdt. Kristianto & Ibu Mexy JT */}
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden border border-[#e8e2d5] shadow-2xl bg-white group">
                    <Image
                      src="/images/gembala/pdt-kristianto-ibu-mexy.jpeg"
                      alt="Foto Pdt. Kristianto dan Ibu Mexy JT — Gembala Gereja Baptis Indonesia Baitani Sukabumi"
                      fill
                      sizes="(max-width: 640px) 100vw, 350px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#d4af37] block mb-1">
                        PELAYANAN BERSAMA
                      </span>
                      <h4 className="text-base font-bold leading-tight">
                        Pdt. Kristianto &amp; Ibu Mexy JT
                      </h4>
                      <p className="text-xs text-white/80 font-light mt-0.5">
                        Gembala Jemaat &amp; Istri Gembala
                      </p>
                    </div>
                  </div>

                  {/* Photo 2: Pdt. Kristianto Solo */}
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden border border-[#e8e2d5] shadow-2xl bg-white group">
                    <Image
                      src="/images/gembala/pdt-kristianto.jpeg"
                      alt="Foto Pdt. Kristianto — Gembala Jemaat Gereja Baptis Indonesia Baitani Sukabumi"
                      fill
                      sizes="(max-width: 640px) 100vw, 350px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#d4af37] block mb-1">
                        GEMBALA JEMAAT
                      </span>
                      <h4 className="text-base font-bold leading-tight">
                        Pdt. Kristianto
                      </h4>
                      <p className="text-xs text-white/80 font-light mt-0.5">
                        GBI Baitani Sukabumi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Story (6 cols on lg) */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#625e54] block mb-2">
                  PROFIL GEMBALA JEMAAT
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#1b1c1a] uppercase tracking-tight leading-tight">
                  Pdt. Kristianto &amp; Ibu Mexy JT
                </h2>

                <div className="space-y-4 text-[#625e54] text-sm sm:text-base font-light leading-relaxed">
                  <p>
                    <strong className="font-semibold text-[#1b1c1a]">Pdt. Kristianto</strong> adalah Gembala Jemaat Gereja Baptis Indonesia Baitani di Kota Sukabumi, ditemani oleh <strong className="font-semibold text-[#1b1c1a]">Ibu Mexy JT</strong> sebagai istri gembala.
                  </p>
                  <p>
                    Untuk informasi lebih lanjut mengenai kegiatan dan pelayanan jemaat, silakan hubungi sekretariat gereja atau kunjungi akun Instagram resmi GBI Baitani Sukabumi.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#e8e2d5]">
                  <div className="p-4 rounded-xl bg-white border border-[#e8e2d5]">
                    <span className="text-[11px] font-mono text-[#625e54] uppercase block mb-1">Gembala Jemaat</span>
                    <p className="font-bold text-sm text-[#1b1c1a]">Pdt. Kristianto</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#e8e2d5]">
                    <span className="text-[11px] font-mono text-[#625e54] uppercase block mb-1">Istri Gembala Jemaat</span>
                    <p className="font-bold text-sm text-[#1b1c1a]">Ibu Mexy JT</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.instagram.com/gbibaitanisukabumi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-magnetic inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#785600] hover:bg-[#5a4000] text-white font-bold text-xs tracking-wider uppercase shadow-xl"
                  >
                    <InstagramIcon className="w-4 h-4 text-white" />
                    <span>INSTAGRAM @GBIBAITANISUKABUMI</span>
                  </a>
                  <Link
                    href="/#lokasi"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#e8e2d5] hover:border-[#785600] text-[#1b1c1a] text-xs font-bold tracking-wider uppercase transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#785600]" />
                    <span>LOKASI GEREJA DI SUKABUMI</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Separate Section: Panitia Perancang Periode 2025–2027 */}
        <section className="py-20 bg-white border-b border-[#e8e2d5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Badge / Icon Box */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-sm rounded-3xl border border-[#e8e2d5] bg-[#fbf9f6] p-8 text-center shadow-md">
                  <div className="w-16 h-16 rounded-2xl bg-[#785600]/10 border border-[#785600]/30 flex items-center justify-center mx-auto mb-4 text-[#785600]">
                    <Users className="w-8 h-8" />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#785600] block mb-1">
                    PERIODE 2025–2027
                  </span>
                  <h3 className="text-xl font-bold text-[#1b1c1a]">
                    Panitia Perancang
                  </h3>
                  <p className="text-xs text-[#625e54] mt-1 font-light">
                    Kepengurusan Pelayanan Jemaat
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#e8e2d5] text-[11px] text-[#625e54]/80 font-mono">
                    GBI BAITANI SUKABUMI
                  </div>
                </div>
              </div>

              {/* Right Information */}
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#625e54] block">
                  KEPENGURUSAN JEMAAT TERPISAH
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#1b1c1a] uppercase tracking-tight">
                  Panitia Perancang Periode 2025–2027
                </h2>
                <div className="space-y-3 text-[#625e54] text-sm sm:text-base font-light leading-relaxed">
                  <p>
                    Panitia Perancang Periode 2025–2027 adalah kepengurusan pelayanan tersendiri di Gereja Baptis Indonesia Baitani, Sukabumi.
                  </p>
                  <p className="text-xs text-[#625e54]/80 font-mono">
                    * Susunan kepengurusan lengkap dapat dikonfirmasi langsung melalui sekretariat gedung gereja atau akun Instagram resmi GBI Baitani Sukabumi.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Biblical Foundation Card */}
        <section className="py-20 bg-[#fbf9f6] border-b border-[#e8e2d5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#e8e2d5] shadow-2xl relative overflow-hidden">
              <Quote className="w-16 h-16 text-[#785600]/30 absolute -right-2 -bottom-2 pointer-events-none" aria-hidden="true" />

              <div className="inline-block px-3 py-1 rounded bg-[#785600]/10 text-[#785600] border border-[#785600]/30 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                LANDASAN PELAYANAN
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1b1c1a] mb-4">
                &ldquo;Layanilah seorang akan yang lain, sesuai dengan karunia yang telah diperoleh tiap-tiap orang sebagai pengurus yang baik dari kasih karunia Allah.&rdquo;
              </h3>

              <div className="flex items-center gap-3 pt-4 border-t border-[#e8e2d5] text-xs text-[#625e54] font-mono">
                <span className="text-[#785600] font-bold">1 PETRUS 4:10</span>
                <span>•</span>
                <span>Firman Tuhan Sebagai Panduan Pelayanan</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bidang-Bidang Pelayanan Jemaat */}
        <section className="py-24 bg-[#f5f3f0] border-b border-[#e8e2d5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-[#625e54] block mb-2 font-mono">
                BIDANG PELAYANAN JEMAAT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1b1c1a] uppercase mb-4">
                Fokus Pelayanan Bersama
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-light">
                Bidang-bidang pelayanan yang diperuntukkan bagi pembinaan rohani, persekutuan, dan kepedulian kasih di tengah jemaat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ministryFocusAreas.map((area, idx) => {
                return (
                  <div
                    key={`area-${idx}`}
                    className="bg-white border border-[#e8e2d5] rounded-2xl p-7 hover:border-[#785600]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#785600]/10 border border-[#785600]/20 flex items-center justify-center text-[#785600] mb-6 group-hover:scale-110 transition-transform">
                        <SiteIcon name={area.icon} className="w-6 h-6" />
                      </div>

                      <h3 className="text-base font-bold text-[#1b1c1a] mb-3 group-hover:text-[#785600] transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-xs text-[#625e54] font-light leading-relaxed">
                        {area.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#e8e2d5]">
                      <span className="text-[11px] font-mono text-[#625e54]/70 uppercase">
                        GBI Baitani Sukabumi
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
