import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import ConnectIntentForm from '@/components/sections/ConnectIntentForm';
import { Coffee, BookOpen, Droplets, Users, HeartHandshake, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Saya Baru & Terhubung — Gereja Baitani',
  description: 'Selamat datang di Gereja Baitani. Terhubung dengan tim pastoral kami, sampaikan permohonan doa, atau jadwalkan kunjungan ibadah.',
};

export default function KoneksiPage() {
  const steps = [
    {
      step: '01',
      icon: Coffee,
      title: 'Welcome Lounge',
      desc: 'Setelah ibadah selesai, singgahlah sejenak di Welcome Lounge. Nikmati secangkir kopi hangat dan terima sambutan tulus dari tim pastoral kami.',
    },
    {
      step: '02',
      icon: BookOpen,
      title: 'Kelas Fondasi Iman',
      desc: 'Kelas pengajaran 4 minggu untuk memperkokoh pemahaman doktrin keselamatan, keselamatan kekal, doa, dan kehidupan Kristiani yang berkemenangan.',
    },
    {
      step: '03',
      icon: Droplets,
      title: 'Baptisan & Komitmen',
      desc: 'Meneguhkan iman melalui sakramen baptisan selam dan secara resmi menjadi bagian dari tubuh jemaat lokal Gereja Baitani.',
    },
    {
      step: '04',
      icon: Users,
      title: 'Bertumbuh & Melayani',
      desc: 'Bergabung dalam kelompok sel Connect Group dan melipatgandakan talenta yang Tuhan beri di berbagai divisi pelayanan jemaat.',
    },
  ];

  return (
    <div className="min-h-dvh flex flex-col bg-[#050505] text-[#fafafa]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="SELAMAT DATANG DI RUMAH"
          title="CONNECT WITH US"
          titleAccent="You Belong Here"
          subtitle="Apakah Anda baru pertama kali beribadah, rindu bertumbuh dalam iman, membutuhkan topangan doa, atau ingin menerima Yesus sebagai Juruselamat? Kami ada di sini untuk Anda."
          breadcrumbCurrent="Saya Baru & Terhubung"
        />

        {/* 4 Steps Journey */}
        <section className="py-20 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2">
                LANGKAH PERTUMBUHAN
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Perjalanan Anda Bersama Kami
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st) => {
                const Icon = st.icon;
                return (
                  <div
                    key={st.step}
                    className="p-8 rounded-2xl bg-zinc-950 border border-white/10 relative overflow-hidden"
                  >
                    <span className="text-3xl font-black font-mono text-[#d4af37]/60 absolute top-4 right-4" aria-hidden="true">
                      {st.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">{st.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive Dynamic Form */}
        <div className="py-12 bg-[#050505]">
          <ConnectIntentForm />
        </div>

        {/* Direct Contact Options */}
        <section className="py-20 bg-[#070709] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
              Butuh Pendampingan Cepat?
            </h2>
            <p className="text-zinc-400 text-sm font-light mb-8 max-w-lg mx-auto">
              Tim pastoral kami siap siaga untuk meresponi situasi darurat kedukaan, sakit berat di rumah sakit, atau kebutuhan konseling mendesak.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase shadow-xl"
              >
                <Phone className="w-4 h-4" />
                <span>HOTLINE WHATSAPP PASTORAL CARE</span>
              </a>
              <a
                href="mailto:pastoral@gerejabaitani.org"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/20 hover:border-white text-white font-bold text-xs tracking-wider uppercase transition-colors"
              >
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span>EMAIL TIM PENGGEMBALAAN</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
