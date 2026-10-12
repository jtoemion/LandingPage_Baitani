import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import ConnectIntentForm from '@/components/sections/ConnectIntentForm';
import { MapPin } from 'lucide-react';
import InstagramIcon from '@/components/common/InstagramIcon';
import SiteIcon from '@/components/common/SiteIcon';

export const metadata: Metadata = {
  title: 'Saya Baru & Terhubung — Gereja Baptis Indonesia Baitani, Sukabumi',
  description: 'Selamat datang di Gereja Baptis Indonesia Baitani, Sukabumi. Terhubung dengan persekutuan jemaat, sampaikan permohonan doa, atau rencanakan kunjungan ibadah.',
};

export default function KoneksiPage() {
  const steps = [
    {
      step: '01',
      icon: 'faith-community' as const,
      title: 'Penyambutan Jemaat',
      desc: 'Setelah ibadah selesai, singgahlah sejenak untuk berkenalan dengan sesama jemaat dan pengurus gereja.',
    },
    {
      step: '02',
      icon: 'bible-study' as const,
      title: 'Pembinaan Firman',
      desc: 'Kelas pembentukan iman Kristen untuk memperkokoh pemahaman firman Tuhan dan ajaran keselamatan dalam Kristus.',
    },
    {
      step: '03',
      icon: 'baptism' as const,
      title: 'Baptisan Kudus',
      desc: 'Meneguhkan iman percaya kepada Tuhan Yesus Kristus melalui sakramen baptisan selam dan persekutuan jemaat lokal.',
    },
    {
      step: '04',
      icon: 'faith-community' as const,
      title: 'Komunitas Iman (KOI)',
      desc: 'Bertumbuh bersama dalam kelompok Komunitas Iman (KOI) dan melayani sesama dengan talenta yang Tuhan anugerahkan.',
    },
  ];

  return (
    <div className="min-h-dvh flex flex-col" style={{ backgroundColor: '#fbf9f6', color: '#1b1c1a' }}>
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="SELAMAT DATANG DI RUMAH"
          title="TERHUBUNG DENGAN KAMI"
          titleAccent="Keluarga Beriman di Sukabumi"
          subtitle="Apakah Anda baru pertama kali beribadah, rindu bertumbuh dalam iman, membutuhkan topangan doa, atau ingin mengenal gereja lebih dekat? Pintu persekutuan kami terbuka bagi Anda."
          breadcrumbCurrent="Saya Baru & Terhubung"
          imageSrc="/images/page-hero/koneksi.jpg"
          imageAlt="Foto ilustrasi: orang-orang berbincang di meja."
        />

        {/* 4 Steps Journey */}
        <section className="py-20 border-b" style={{ backgroundColor: '#f5f3f0', borderColor: '#e8e2d5' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold tracking-widest uppercase block mb-2" style={{ color: '#785600' }}>
                LANGKAH PERTUMBUHAN IMAN
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight" style={{ color: '#1b1c1a', fontFamily: 'EB Garamond, serif' }}>
                Perjalanan Bersama Kami
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st) => {
                return (
                  <div
                    key={st.step}
                    className="p-8 rounded-2xl relative overflow-hidden"
                    style={{ backgroundColor: '#fff', border: '1px solid #e8e2d5', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
                  >
                    <span className="text-3xl font-black font-mono absolute top-4 right-4" aria-hidden="true" style={{ color: '#e8e2d5', fontFamily: 'EB Garamond, serif' }}>
                      {st.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#f5f3f0', border: '1px solid #e8e2d5', color: '#785600' }}>
                      <SiteIcon name={st.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold mb-2" style={{ color: '#1b1c1a', fontFamily: 'EB Garamond, serif' }}>{st.title}</h3>
                    <p className="text-xs font-light leading-relaxed" style={{ color: '#625e54' }}>{st.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive Dynamic Form */}
        <div className="py-12">
          <ConnectIntentForm />
        </div>

        {/* Direct Contact Options */}
        <section className="py-20 border-t" style={{ backgroundColor: '#fbf9f6', borderColor: '#e8e2d5' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4" style={{ color: '#1b1c1a', fontFamily: 'EB Garamond, serif' }}>
              Kanal Komunikasi Resmi
            </h2>
            <p className="text-sm font-light mb-8 max-w-lg mx-auto leading-relaxed" style={{ color: '#625e54' }}>
              Untuk permohonan doa, informasi jadwal ibadah, atau kebutuhan persekutuan, Anda dapat terhubung melalui saluran resmi kami:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/gbibaitanisukabumi/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase shadow-xl"
                style={{ backgroundColor: '#785600', color: '#fbf9f6' }}
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>INSTAGRAM @GBIBAITANISUKABUMI</span>
              </a>
              <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border text-xs font-mono" style={{ borderColor: '#e8e2d5', color: '#625e54', backgroundColor: '#fff' }}>
                <MapPin className="w-4 h-4" style={{ color: '#785600' }} />
                <span>Jl. R.E. Martadinata No. 86, Sukabumi</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
