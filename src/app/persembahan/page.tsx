'use client';

import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { Landmark, ShieldCheck } from 'lucide-react';
import SiteIcon from '@/components/common/SiteIcon';
import InstagramIcon from '@/components/common/InstagramIcon';

export default function PersembahanPage() {
  const givingPrinciples = [
    {
      title: 'Persepuluhan',
      verse: 'Maleakhi 3:10',
      desc: 'Wujud ketaatan dan pengakuan iman bahwa segala berkat dan rezeki bersumber dari Tuhan semata.',
    },
    {
      title: 'Persembahan Syukur',
      verse: 'Mazmur 100:4',
      desc: 'Pemberian sukarela atas kasih setia pemeliharaan Allah dalam kehidupan pribadi dan keluarga.',
    },
    {
      title: 'Dana Diakonia & Kasih',
      verse: 'Amsal 19:17',
      desc: 'Pemberian kasih untuk menolong sesama yang berkekurangan, jemaat prasejahtera, dan bantuan sosial di Sukabumi.',
    },
    {
      title: 'Pemeliharaan Sarana Ibadah',
      verse: '2 Korintus 9:7',
      desc: 'Menopang pemeliharaan rumah Tuhan dan operasional pelayanan jemaat agar ibadah berjalan tertib.',
    },
  ];

  return (
    <div className="min-h-dvh flex flex-col bg-[#fbf9f6] text-[#1b1c1a]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="PENATALAYANAN & PERSEMBAHAN"
          title="PERSEMBAHAN JEMAAT"
          titleAccent="Memberi Dengan Sukacita Hati"
          subtitle="Pelayanan persembahan jemaat di Gereja Baptis Indonesia Baitani, Sukabumi diperuntukkan bagi kelangsungan pelayanan firman, pembinaan jemaat, dan kepedulian diakonia bagi sesama."
          breadcrumbCurrent="Persembahan"
          imageSrc="/images/page-hero/persembahan.jpg"
          imageAlt="Foto ilustrasi: relawan memindahkan kotak bantuan."
        />

        {/* Factual Giving Guidance Section */}
        <section className="py-24 bg-[#f5f3f0] border-b border-[#e8e2d5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] block">
                PANDUAN PENATALAYANAN
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1b1c1a]">
                Saluran Persembahan Resmi
              </h2>
              <p className="text-[#625e54] text-sm font-light leading-relaxed max-w-2xl mx-auto">
                Demi menjaga akuntabilitas dan ketepatan penyaluran, jemaat dapat memberikan persembahan melalui kanal resmi berikut.
              </p>
            </div>

            {/* Verification Notice Card */}
            <div className="bg-[#fff] border border-[#785600]/30 rounded-3xl p-8 sm:p-10 space-y-6 shadow-warm-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5f3f0] border border-[#e8e2d5] flex items-center justify-center text-[#785600] flex-shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1b1c1a]">
                    Transfer Rekening Bank Resmi Gereja
                  </h3>
                  <p className="text-xs text-[#625e54]">
                    Konfirmasi Nomor Rekening Melalui Sekretariat Gereja
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#625e54] leading-relaxed font-light pt-4 border-t border-[#e8e2d5]">
                <p>
                  Untuk memastikan keabsahan nomor rekening dan menghindari potensi kekeliruan transfer, <strong className="text-[#1b1c1a]">nomor rekening bank resmi Gereja Baptis Indonesia Baitani, Sukabumi dapat dikonfirmasikan langsung kepada sekretariat/bendahara jemaat di gedung gereja</strong> atau melalui akun Instagram resmi gereja.
                </p>
                <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#e8e2d5] text-xs text-[#625e54] space-y-1">
                  <p className="font-semibold text-[#1b1c1a] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#785600]" />
                    <span>Prinsip Kehati-hatian &amp; Transparansi:</span>
                  </p>
                  <p>
                    Gereja tidak mempublikasikan nomor rekening pihak ketiga atau nomor placeholder di situs publik tanpa verifikasi resmi majelis gereja. Pastikan rekening tujuan mengatasnamakan resmi rekening gereja.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.instagram.com/gbibaitanisukabumi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#785600] hover:bg-[#ffdea6] text-white hover:text-[#1b1c1a] font-bold text-xs tracking-wider uppercase transition-all shadow-warm-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>KONFIRMASI VIA INSTAGRAM @GBIBAITANISUKABUMI</span>
                </a>
              </div>
            </div>

            {/* Onsite Giving Card */}
            <div className="bg-[#fff] border border-[#e8e2d5] rounded-3xl p-8 sm:p-10 space-y-4 shadow-warm-sm">
              <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f5f3f0] border border-[#e8e2d5] flex items-center justify-center text-white flex-shrink-0">
                  <SiteIcon name="church-location" className="w-5 h-5 text-[#785600]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1b1c1a]">
                    Persembahan Onsite di Gedung Gereja
                  </h3>
                  <p className="text-xs text-[#625e54]">
                    Jl. R.E. Martadinata No. 86, Sukabumi
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#625e54] leading-relaxed font-light pt-2">
                Persembahan tunai, persembahan persepuluhan, dan amplop syukur dapat dimasukkan langsung ke dalam kantong atau kotak persembahan yang disediakan saat ibadah onsite berlangsung di gedung gereja.
              </p>
            </div>

          </div>
        </section>

        {/* 4 Landasan Firman Persembahan */}
        <section className="py-24 bg-[#fff] border-b border-[#e8e2d5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] block mb-2">
                LANDASAN ALKITABIAH
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1b1c1a] mb-4">
                Dasar Memberi Bagi Tuhan
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-light">
                Persembahan adalah bentuk ibadah dan ucapan syukur atas kasih karunia Allah yang telah melimpah atas hidup kita.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {givingPrinciples.map((type, idx) => (
                <div
                  key={`type-${idx}`}
                  className="p-8 rounded-2xl bg-[#fff] border border-[#e8e2d5] flex flex-col justify-between shadow-warm-sm"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#785600] block mb-2">
                      {type.verse}
                    </span>
                    <h3 className="text-lg font-bold text-[#1b1c1a] mb-3">
                      {type.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#625e54] font-light leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scriptural Promise */}
        <section className="py-20 bg-[#f5f3f0] text-center border-b border-[#e8e2d5]">
          <div className="max-w-3xl mx-auto px-4">
            <blockquote className="text-base sm:text-lg text-[#1b1c1a] italic leading-relaxed mb-4 font-serif">
              &ldquo;Hendaklah masing-masing memberikan menurut kerelaan hatinya, jangan dengan sedih hati atau karena paksaan, sebab Allah mengasihi orang yang memberi dengan sukacita.&rdquo;
            </blockquote>
            <cite className="text-xs font-mono font-bold text-[#785600] uppercase tracking-widest not-italic">
              — 2 KORINTUS 9:7
            </cite>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
