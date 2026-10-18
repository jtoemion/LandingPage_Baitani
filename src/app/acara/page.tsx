import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { Bell, ExternalLink, ShieldCheck, HelpCircle, ArrowUpRight } from 'lucide-react';
import SiteIcon from '@/components/common/SiteIcon';
import InstagramIcon from '@/components/common/InstagramIcon';
import AcaraActivitiesCarousel from '@/components/sections/AcaraActivitiesCarousel';

export const metadata: Metadata = {
  title: 'Agenda & Pengumuman Acara — Gereja Baptis Indonesia Baitani, Sukabumi',
  description: 'Pusat informasi resmi agenda kegiatan rohani, ibadah khusus, dan warta pelayanan jemaat Gereja Baptis Indonesia Baitani di Sukabumi.',
};

export default function AcaraPage() {
  const announcementChannels = [
    {
      title: 'Warta Persekutuan & Ibadah',
      badge: 'WARTA LISAN & MIMBAR',
      icon: 'event-announcement' as const,
      description: 'Seluruh agenda kebaktian khusus, persekutuan doa, kegiatan pemuda, dan program pelayanan jemaat diumumkan secara berkala saat Ibadah Raya hari Minggu atau melalui komunikasi langsung dengan gereja.',
      location: 'Gedung Gereja: Jl. R.E. Martadinata No. 86, Sukabumi',
      scheduleNote: 'Konfirmasi jam ibadah dapat ditanyakan langsung ke sekretariat gereja atau akun Instagram resmi',
      actionLink: '/#lokasi',
      actionText: 'Informasi Kunjungan & Lokasi',
      isExternal: false,
    },
    {
      title: 'Media Sosial Resmi Gereja',
      badge: 'PUBLIKASI DIGITAL RESMI',
      icon: InstagramIcon,
      description: 'Untuk pengumuman kegiatan rohani terkini, poster pengumuman hari raya, perubahan jadwal, dan dokumentasi pelayanan jemaat, gereja menyiarkannya secara berkala melalui akun media sosial resmi.',
      location: 'Akun Instagram Resmi: @gbibaitanisukabumi',
      scheduleNote: 'Diperbarui berkala melalui akun resmi @gbibaitanisukabumi',
      actionLink: 'https://www.instagram.com/gbibaitanisukabumi/',
      actionText: 'Buka Instagram Resmi',
      isExternal: true,
    },
  ];

  const faqs = [
    {
      question: 'Bagaimana cara mengetahui jadwal ibadah perayaan khusus (Paskah, HUT Gereja, Natal)?',
      answer: 'Jadwal dan tema perayaan rohani khusus diumumkan menjelang pelaksanaan melalui pengumuman di gereja dan postingan resmi Instagram @gbibaitanisukabumi.',
    },
    {
      question: 'Apakah jemaat baru atau tamu dapat menghadiri acara dan kebaktian khusus?',
      answer: 'Ya, seluruh ibadah raya, persekutuan doa, dan kebaktian penyegaran rohani terbuka bagi masyarakat umum, jemaat musafir, dan warga kota Sukabumi tanpa syarat pendaftaran tertutup.',
    },
    {
      question: 'Bagaimana cara berkoordinasi jika ingin menyelenggarakan penyerahan anak atau baptisan?',
      answer: 'Koordinasi sakramen baptisan kudus dan penyerahan anak dilayani secara langsung melalui konsultasi dengan hamba Tuhan/pembina jemaat di gedung gereja atau mengirim pesan via DM Instagram resmi.',
    },
  ];

  return (
    <div className="min-h-dvh flex flex-col bg-[#fbf9f6] text-[#1b1c1a]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="AGENDA & DOKUMENTASI KEGIATAN"
          title="ACARA & WARTA JEMAAT"
          titleAccent="Persekutuan, Ibadah, & Pelayanan Misi"
          subtitle="Pusat rujukan resmi agenda kegiatan rohani, ibadah khusus, dokumentasi pelayanan misi, dan warta jemaat Gereja Baptis Indonesia Baitani, Sukabumi."
          breadcrumbCurrent="Acara & Warta"
          imageSrc="/images/acara/acara-hero.jpeg"
          imageAlt="Foto bersama seluruh warga jemaat di depan gedung Gereja Baptis Baitani Sukabumi."
        />

        {/* Notice of Transparency Strip */}
        <section className="py-6 bg-[#fff] border-b border-[#e8e2d5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start sm:items-center gap-3 text-xs text-[#625e54]">
              <ShieldCheck className="w-5 h-5 text-[#785600] flex-shrink-0 mt-0.5 sm:mt-0" />
              <p className="leading-relaxed font-light">
                <strong className="text-[#1b1c1a] font-medium">Kebijakan Faktual:</strong> Seluruh agenda kegiatan jemaat diumumkan secara resmi melalui saluran terkonfirmasi di bawah ini. Kami tidak mempublikasikan jadwal atau formulir pendaftaran spekulatif yang belum disahkan oleh gereja.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Activity & Mission Carousel in the Center */}
        <AcaraActivitiesCarousel />

        {/* Announcement Hub Cards */}
        <section className="py-16 md:py-20 bg-[#f5f3f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] block mb-2">
                SALURAN PENGUMUMAN RESMI
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1b1c1a]">
                Pusat Informasi Kegiatan Jemaat
              </h2>
              <p className="text-[#625e54] text-sm font-light leading-relaxed mt-2">
                Untuk memastikan keakuratan waktu, lokasi, dan teknis kegiatan, silakan merujuk pada dua saluran informasi resmi jemaat berikut:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {announcementChannels.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 sm:p-10 rounded-2xl bg-[#fff] border border-[#e8e2d5] flex flex-col justify-between shadow-warm-md hover:border-[#785600]/30 transition-all"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-[#785600] uppercase tracking-wider bg-[#f5f3f0] border border-[#e8e2d5] px-3 py-1 rounded-full">
                          {channel.badge}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#f5f3f0] border border-[#e8e2d5] flex items-center justify-center text-[#785600]">
                          {typeof Icon === 'string' ? (
                            <SiteIcon name={Icon} className="w-5 h-5" />
                          ) : (
                            <Icon className="w-5 h-5" />
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1b1c1a] mb-2">
                          {channel.title}
                        </h3>
                        <p className="text-[#625e54] text-xs sm:text-sm font-light leading-relaxed">
                          {channel.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-[#e8e2d5] text-xs text-[#625e54] font-light">
                        <div className="flex items-start gap-2">
                          <SiteIcon name="church-location" className="w-4 h-4 text-[#785600] flex-shrink-0 mt-0.5" />
                          <span>{channel.location}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Bell className="w-4 h-4 text-[#a09888] flex-shrink-0 mt-0.5" />
                          <span>{channel.scheduleNote}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#e8e2d5]">
                      {channel.isExternal ? (
                        <a
                          href={channel.actionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-magnetic w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#785600] hover:bg-[#ffdea6] text-white hover:text-[#1b1c1a] font-bold text-xs tracking-wider uppercase transition-all shadow-warm-sm active:scale-95"
                        >
                          <span>{channel.actionText}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={channel.actionLink}
                          className="btn-magnetic w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border border-[#e8e2d5] hover:border-[#785600] text-[#1b1c1a] font-bold text-xs tracking-wider uppercase transition-all hover:bg-[#f5f3f0] active:scale-95"
                        >
                          <span>{channel.actionText}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action Strip */}
            <div className="max-w-5xl mx-auto mt-12 p-6 rounded-2xl bg-[#fff] border border-[#e8e2d5] shadow-warm-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-sm font-bold text-[#1b1c1a]">Ingin Mengetahui Informasi Ibadah & Persekutuan?</h4>
                <p className="text-xs text-[#625e54] font-light mt-0.5">
                  Ibadah Raya Minggu, Doa Bersama, dan Persekutuan Jemaat diadakan secara teratur di Sukabumi.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#lokasi"
                  className="px-5 py-2.5 rounded-full bg-[#785600] text-white font-bold text-xs tracking-wider uppercase hover:bg-[#ffdea6] hover:text-[#1b1c1a] transition-colors"
                >
                  Informasi Kunjungan & Lokasi
                </Link>
                <Link
                  href="/connect-group"
                  className="px-5 py-2.5 rounded-full border border-[#e8e2d5] text-[#1b1c1a] font-bold text-xs tracking-wider uppercase hover:border-[#785600] transition-colors"
                >
                  Komunitas Iman (KOI)
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 border-t border-[#e8e2d5] bg-[#fff]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <HelpCircle className="w-6 h-6 text-[#785600] mx-auto mb-2" />
              <h2 className="text-2xl sm:text-3xl font-black text-[#1b1c1a]">
                Pertanyaan Seputar Warta & Kegiatan
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#fff] border border-[#e8e2d5] shadow-warm-sm space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-[#1b1c1a]">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#625e54] font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}