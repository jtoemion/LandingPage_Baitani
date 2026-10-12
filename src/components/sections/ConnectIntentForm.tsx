'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowUpRight, ShieldCheck, ExternalLink } from 'lucide-react';
import InstagramIcon from '@/components/common/InstagramIcon';
import SiteIcon, { type IconName } from '@/components/common/SiteIcon';
import { IntentType } from '@/types';

export default function ConnectIntentForm() {
  const [selectedIntent, setSelectedIntent] = useState<IntentType>('new');

  const intentCards = [
    {
      id: 'new' as IntentType,
      title: 'Saya Jemaat Baru',
      description: 'Ingin berkenalan, mengenal gereja lebih dekat, atau menjadwalkan kunjungan ibadah.',
      icon: 'serving',
      details: {
        heading: 'Kunjungan Ibadah & Perkenalan Jemaat Baru',
        summary: 'Kami menyambut setiap tamu dan keluarga baru dengan tangan terbuka dalam persekutuan kasih Kristus.',
        steps: [
          'Hadir langsung pada Ibadah Raya hari Minggu di gedung gereja: Jl. R.E. Martadinata No. 86, Sukabumi.',
          'Tim penyambut jemaat (usher) siap membantu dan menyapa Anda seusai ibadah.',
          'Bila ingin bertanya terlebih dahulu seputar jadwal atau tata ibadah, Anda dapat mengirim pesan melalui Instagram resmi gereja.',
        ],
      },
    },
    {
      id: 'prayer' as IntentType,
      title: 'Permohonan Doa',
      description: 'Tim pendoa syafaat kami siap menopang pergumulan, kesembuhan, atau kebutuhan Anda.',
      icon: 'pastoral-care',
      details: {
        heading: 'Dukungan Doa Syafaat & Penguatan Iman',
        summary: 'Tuhan mendengar setiap seruan hati. Kami rindu berdiri bersama Anda dalam doa dan permohonan.',
        steps: [
          'Sampaikan pokok doa atau permohonan kesembuhan secara pribadi melalui Direct Message (DM) Instagram resmi @gbibaitanisukabumi.',
          'Anda juga dapat didoakan langsung oleh hamba Tuhan dan tim doa sesudah Ibadah Raya di gereja.',
          'Pokok doa dijaga kerahasiaannya dan hanya dibagikan kepada tim pendoa syafaat jemaat.',
        ],
      },
    },
    {
      id: 'serve' as IntentType,
      title: 'Ingin Melayani',
      description: 'Rindu mempersembahkan talenta di tim musik, multimedia, anak, atau diakonia sosial.',
      icon: 'faith-community',
      details: {
        heading: 'Kerinduan Melayani Sesama Dalam Kasih',
        summary: 'Setiap anggota tubuh Kristus diperlengkapi dengan karunia untuk membangun jemaat dan melayani sesama.',
        steps: [
          'Diskusikan talenta dan kerinduan pelayanan Anda bersama pengurus jemaat pada saat ibadah di gereja.',
          'Bidang pelayanan meliputi: Sekolah Minggu (Anak), Pelayanan Pemuda, Musik & Pujian, Multimedia, Usher, dan Aksi Sosial Diakonia.',
          'Hubungi kami melalui DM Instagram @gbibaitanisukabumi untuk koordinasi dengan koordinator bidang pelayanan.',
        ],
      },
    },
    {
      id: 'counseling' as IntentType,
      title: 'Konseling Pastoral',
      description: 'Membutuhkan bimbingan rohani, konseling keluarga, atau konsultasi pastoral pribadi.',
      icon: HelpCircle,
      details: {
        heading: 'Pendampingan Rohani & Konseling Pastoral',
        summary: 'Setiap musim kehidupan memiliki tantangannya. Kami rindu mendampingi Anda berakar dalam firman Tuhan.',
        steps: [
          'Konseling pastoral keluarga, bimbingan pranikah, dan pendampingan rohani dilayani secara tatap muka dengan hamba Tuhan/pembina jemaat.',
          'Jadwalkan janji temu konseling dengan menghubungi sekretariat jemaat di gereja atau via pesan resmi Instagram.',
          'Seluruh percakapan konseling pastoral dijaga kerahasiaannya dengan penuh integritas rohani.',
        ],
      },
    },
  ];

  const activeContent = intentCards.find((c) => c.id === selectedIntent) ?? intentCards[0];

  return (
    <section id="koneksi" className="py-24 relative" style={{ backgroundColor: '#fbf9f6' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase block mb-2 font-mono" style={{ color: '#785600' }}>
            TERHUBUNG DENGAN KELUARGA ALLAH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase mb-4" style={{ color: '#1b1c1a', fontFamily: 'EB Garamond, serif' }}>
            Connect With Us
          </h2>
          <p className="text-sm sm:text-base leading-relaxed font-light mb-6" style={{ color: '#625e54' }}>
            Pilihlah salah satu kebutuhan Anda di bawah ini untuk melihat panduan resmi cara terhubung dan bersekutu bersama kami di Sukabumi.
          </p>
          <Link
            href="/koneksi"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase pb-1 transition-colors"
            style={{ color: '#785600', borderBottom: '1px solid rgba(120,86,0,0.4)' }}
          >
            <span>PANDUAN JEMAAT BARU & 4 LANGKAH PERTUMBUHAN</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Intent Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {intentCards.map((item) => {
            const isSelected = selectedIntent === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIntent(item.id)}
                className={`p-6 rounded-2xl text-left border transition-all flex flex-col justify-between min-h-40 ${
                  isSelected
                    ? 'shadow-lg'
                    : 'hover:shadow-sm'
                }`}
                style={
                  isSelected
                    ? { backgroundColor: '#fbf9f6', border: '2px solid #785600', boxShadow: '0 0 0 3px rgba(120,86,0,0.12)' }
                    : { backgroundColor: '#fff', border: '1px solid #e8e2d5' }
                }
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={
                      isSelected
                        ? { backgroundColor: '#785600', color: '#fbf9f6' }
                        : { backgroundColor: '#f5f3f0', color: '#625e54' }
                    }
                  >
                    {typeof item.icon === 'string'
                      ? <SiteIcon name={item.icon as IconName} className="w-5 h-5" />
                      : <item.icon className="w-5 h-5" />}
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#785600' }} />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base mb-1.5" style={{ color: isSelected ? '#1b1c1a' : '#1b1c1a' }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed font-light line-clamp-2" style={{ color: '#625e54' }}>
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Transparent Communication Guidance Container */}
        <div className="rounded-2xl shadow-lg p-6 sm:p-10 relative overflow-hidden" style={{ backgroundColor: '#fff', border: '1px solid #e8e2d5' }}>
          <div className="space-y-6">

            {/* Header info */}
            <div className="border-b pb-5" style={{ borderColor: '#e8e2d5' }}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-2" style={{ color: '#785600' }}>
                <ShieldCheck className="w-4 h-4" style={{ color: '#785600' }} />
                <span>PANDUAN KOMUNIKASI LANGSUNG & TRANSPARAN</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-wide" style={{ color: '#1b1c1a', fontFamily: 'EB Garamond, serif' }}>
                {activeContent.details.heading}
              </h3>
              <p className="text-sm font-light mt-1" style={{ color: '#625e54' }}>
                {activeContent.details.summary}
              </p>
            </div>

            {/* Step list for active category */}
            <div className="space-y-3 py-2">
              {activeContent.details.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm font-light" style={{ color: '#625e54' }}>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: '#f5f3f0', color: '#785600', border: '1px solid #e8e2d5' }}>
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            {/* Official Church Contact Actions */}
            <div className="pt-4 border-t space-y-4" style={{ borderColor: '#e8e2d5' }}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider block" style={{ color: '#625e54' }}>
                SALURAN RESMI GEREJA (TANPA PERANTARA FORMULIR SITUS)
              </span>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.instagram.com/gbibaitanisukabumi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95"
                  style={{ backgroundColor: '#785600', color: '#fbf9f6', minHeight: '48px' }}
                >
                  <InstagramIcon className="w-4 h-4 text-pink-300" />
                  <span>HUBUNGI VIA INSTAGRAM RESMI (@GBIBAITANISUKABUMI)</span>
                  <ExternalLink className="w-3.5 h-3.5" style={{ color: 'rgba(251,249,246,0.7)' }} />
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jl.+R.E.+Martadinata+No.+86+Sukabumi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border font-bold text-xs tracking-wider uppercase transition-all"
                  style={{ backgroundColor: '#fff', color: '#1b1c1a', borderColor: '#e8e2d5', minHeight: '48px' }}
                >
                  <SiteIcon name="church-location" className="w-4 h-4" />
                  <span>LOKASI: JL. R.E. MARTADINATA NO. 86</span>
                  <ExternalLink className="w-3.5 h-3.5" style={{ color: '#625e54' }} />
                </a>
              </div>

              <div className="p-4 rounded-xl border" style={{ backgroundColor: '#f5f3f0', borderColor: '#e8e2d5' }}>
                <p className="text-xs font-light leading-relaxed" style={{ color: '#625e54' }}>
                  <strong style={{ color: '#1b1c1a' }}>Keterbukaan Privasi & Layanan:</strong> Gereja Baptis Indonesia Baitani Sukabumi tidak menghimpun data pribadi melalui isian formulir web yang tidak terhubung ke backend. Seluruh komunikasi jemaat dilayani secara aman dan langsung melalui kunjungan tatap muka di gedung gereja atau pesan pribadi media sosial resmi.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
