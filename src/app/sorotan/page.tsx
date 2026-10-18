import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { ExternalLink, ShieldCheck, MapPin, HeartHandshake, ArrowUpRight, History } from 'lucide-react';
import SiteIcon from '@/components/common/SiteIcon';
import InstagramIcon from '@/components/common/InstagramIcon';

export const metadata: Metadata = {
  title: 'Sorotan & Galeri Arsip — Gereja Baptis Indonesia Baitani, Sukabumi',
  description: 'Portal dokumentasi resmi foto dan video kegiatan persekutuan jemaat serta galeri arsip sejarah 1963–2026 Gereja Baptis Indonesia Baitani di Sukabumi.',
};

export default function SorotanPage() {
  const historicalMoments = [
    {
      image: '/images/sejarah/sejarah_01.jpg',
      era: '1960–1962',
      title: 'Awal Perintisan Pos Baros & Gudang',
      caption: 'Persekutuan doa awal jemaat bersama para perintis di Baros 16 dan Gudang 4.',
    },
    {
      image: '/images/sejarah/sejarah_02.jpg',
      era: '1963',
      title: 'Pengorganisasian Resmi Jemaat',
      caption: 'Piagam pengorganisasian 1 September 1963 oleh 58 anggota mula-mula.',
    },
    {
      image: '/images/sejarah/sejarah_03.jpg',
      era: '1964',
      title: 'Gedung Ibadah Pertama Jl. Gudang IIA',
      caption: 'Gedung persekutuan dan tempat ibadah tetap pertama sebelum berpindah ke Martadinata.',
    },
    {
      image: '/images/sejarah/sejarah_05.jpg',
      era: '1968–1969',
      title: 'Pembangunan Gedung Martadinata 86',
      caption: 'Pentahbisan gedung gereja di atas lahan 2.590 m² pada 19 Mei 1969.',
    },
    {
      image: '/images/sejarah/sejarah_08.jpg',
      era: '1970–2003',
      title: 'Era Pertumbuhan & Kategorial',
      caption: 'Kebersamaan persekutuan jemaat dalam pelayanan kategorial dan perintisan pos baru.',
    },
    {
      image: '/images/sejarah/sejarah_10.jpg',
      era: '2004–2026',
      title: 'Pelayanan Kontemporer & HUT ke-63',
      caption: 'Kesatuan hati jemaat dalam misi pemuridan "Disciple Maker" di Sukabumi.',
    },
  ];

  const portalChannels = [
    {
      badge: 'DOKUMENTASI FOTO & VIDEO',
      title: 'Dokumentasi Digital @gbibaitanisukabumi',
      description: 'Seluruh dokumentasi kegiatan ibadah, pelayanan firman, pembinaan pemuda, kegiatan anak, dan persekutuan jemaat disajikan secara berkala dan terverifikasi pada feed serta sorotan cerita Instagram resmi kami.',
      metaLabel: 'Kanal Resmi:',
      metaValue: '@gbibaitanisukabumi',
      icon: InstagramIcon,
      actionText: 'Buka Dokumentasi di Instagram',
      actionHref: 'https://www.instagram.com/gbibaitanisukabumi/',
      isExternal: true,
    },
    {
      badge: 'PERSEKUTUAN JEMAAT LOKAL',
      title: 'Hadir & Bersekutu Secara Langsung',
      description: 'Kehangatan kasih persaudaraan dan hadirat Tuhan paling nyata dialami saat kita berkumpul bersama dalam persekutuan di rumah Tuhan. Pintu gereja kami terbuka menyambut Anda dan keluarga di Sukabumi.',
      metaLabel: 'Gedung Gereja:',
      metaValue: 'Jl. R.E. Martadinata No. 86, Sukabumi',
      icon: MapPin,
      actionText: 'Informasi Lokasi & Kunjungan',
      actionHref: '/#lokasi',
      isExternal: false,
    },
    {
      badge: 'KELUARGA ROHANI KECIL',
      title: 'Bertumbuh di Komunitas Iman (KOI)',
      description: 'Jalin persahabatan sejati, saling mendoakan, dan bertumbuh dalam kebenaran Firman Allah melalui kelompok-kelompok kecil Komunitas Iman (KOI) yang tersebar di wilayah Sukabumi.',
      metaLabel: 'Persekutuan:',
      metaValue: 'Kelompok Komunitas Iman (KOI)',
      icon: 'faith-community' as const,
      actionText: 'Pelajari Komunitas Iman (KOI)',
      actionHref: '/connect-group',
      isExternal: false,
    },
  ];

  return (
    <div className="min-h-dvh flex flex-col bg-[#fbf9f6] text-[#1b1c1a]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="DOKUMENTASI & MEDIA RESMI"
          title="PORTAL DOKUMENTASI RESMI"
          titleAccent="Dokumentasi Terverifikasi Jemaat"
          subtitle="Seluruh dokumentasi foto dan video kegiatan ibadah raya, persekutuan jemaat, dan pelayanan Gereja Baptis Indonesia Baitani, Sukabumi dipublikasikan secara resmi melalui akun Instagram resmi gereja."
          breadcrumbCurrent="Sorotan & Galeri"
          imageSrc="/images/page-hero/sorotan-natural.jpg"
          imageAlt="Album arsip sejarah dan dokumentasi kegiatan pelayanan jemaat GBI Baitani Sukabumi sejak 1963."
          imageLabel="ARSIP & DOKUMENTASI"
        />

        {/* Notice of Transparency Strip */}
        <section className="py-6 bg-[#fff] border-b border-[#e8e2d5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start sm:items-center gap-3 text-xs text-[#625e54]">
              <ShieldCheck className="w-5 h-5 text-[#785600] flex-shrink-0 mt-0.5 sm:mt-0" />
              <p className="leading-relaxed font-light">
                <strong className="text-[#1b1c1a] font-medium">Integritas Dokumentasi:</strong> Kami berkomitmen menyajikan informasi yang jujur dan dapat dipertanggungjawabkan. Kami tidak menyajikan foto stok representasi sebagai dokumentasi kegiatan jemaat. Seluruh dokumentasi foto dan video asli dapat diakses langsung pada akun Instagram resmi{' '}
                <a
                  href="https://www.instagram.com/gbibaitanisukabumi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#785600] underline font-medium hover:text-[#ffdea6]"
                >
                  @gbibaitanisukabumi
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* Dedicated Section: Galeri Arsip Sejarah Jemaat (1963–2026) */}
        <section className="py-24 bg-[#fff] border-b border-[#e8e2d5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f3f0] border border-[#e8e2d5] text-[#785600] text-xs font-mono font-bold tracking-widest uppercase">
                <History className="w-3.5 h-3.5" />
                <span>ARSIP HISTORIS RESMI</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1b1c1a]">
                Galeri Arsip Sejarah Jemaat (1963–2026)
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-light">
                Menyaksikan kembali jejak kesetiaan pemeliharaan Tuhan selama 63 tahun perjalanan iman Gereja Baptis Indonesia Baitani di Kota Sukabumi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {historicalMoments.map((moment, idx) => (
                <div
                  key={`hist-${idx}`}
                  className="group bg-[#fbf9f6] rounded-3xl border border-[#e8e2d5] overflow-hidden hover:border-[#785600]/40 transition-all shadow-xs flex flex-col"
                >
                  <div className="relative w-full aspect-[4/3] bg-[#f5f3f0] overflow-hidden">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[rgba(251,249,246,0.9)] backdrop-blur-sm border border-[#e8e2d5]">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#785600] uppercase">
                        {moment.era}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#1b1c1a] group-hover:text-[#785600] transition-colors leading-snug">
                        {moment.title}
                      </h3>
                      <p className="text-xs text-[#625e54] leading-relaxed font-light mt-2">
                        {moment.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                href="/tentang-kami"
                className="btn-magnetic inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1b1c1a] hover:bg-[#785600] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
              >
                <span>BACA SEJARAH LENGKAP 6 ERA</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Portal Documentation Hub Cards */}
        <section className="py-20 bg-[#f5f3f0] border-b border-[#e8e2d5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] block mb-2">
                SALURAN DOKUMENTASI &amp; PERSEKUTUAN
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1b1c1a] mb-4">
                Momen &amp; Warta Pelayanan
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-light">
                Silakan jelajahi dokumentasi visual kegiatan pelayanan kami atau hadir bersekutu langsung bersama jemaat di Sukabumi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portalChannels.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={`channel-${idx}`}
                    className="p-8 rounded-2xl bg-[#fff] border border-[#e8e2d5] flex flex-col justify-between shadow-warm-md hover:border-[#785600]/30 transition-all duration-300 group"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-[#785600] uppercase tracking-wider bg-[#f5f3f0] border border-[#e8e2d5] px-3 py-1 rounded-full">
                          {channel.badge}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#f5f3f0] border border-[#e8e2d5] flex items-center justify-center text-[#785600] group-hover:scale-110 transition-transform">
                          {typeof Icon === 'string' ? (
                            <SiteIcon name={Icon} className="w-5 h-5" />
                          ) : (
                            <Icon className="w-5 h-5" />
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#1b1c1a] mb-2 group-hover:text-[#785600] transition-colors">
                          {channel.title}
                        </h3>
                        <p className="text-[#625e54] text-xs sm:text-sm font-light leading-relaxed">
                          {channel.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#e8e2d5] text-xs text-[#625e54] font-light flex items-center gap-2">
                        <span className="text-[#a09888] font-mono">{channel.metaLabel}</span>
                        <span className="text-[#1b1c1a] font-medium">{channel.metaValue}</span>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#e8e2d5]">
                      {channel.isExternal ? (
                        <a
                          href={channel.actionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-magnetic w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#785600] hover:bg-[#ffdea6] text-white hover:text-[#1b1c1a] font-bold text-xs tracking-wider uppercase transition-all shadow-warm-sm active:scale-95"
                        >
                          <span>{channel.actionText}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={channel.actionHref}
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
          </div>
        </section>

        {/* Authentic Congregational Testimony & Fellowship Guidance */}
        <section className="py-24 bg-[#fff] border-b border-[#e8e2d5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="w-12 h-12 rounded-2xl bg-[#f5f3f0] border border-[#e8e2d5] flex items-center justify-center text-[#785600] mx-auto">
              <HeartHandshake className="w-6 h-6" />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] block">
                KESAKSIAN IMAN &amp; KASIH TUHAN
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1b1c1a] tracking-tight">
                Berbagi Kasih &amp; Karya Kristus
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
                Setiap karya pemulihan, doa yang dijawab, dan kesetiaan Tuhan dalam kehidupan jemaat adalah berkat yang menguatkan seluruh persekutuan tubuh Kristus.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fff] border border-[#e8e2d5] text-left space-y-4 shadow-warm-md">
              <h3 className="text-base sm:text-lg font-bold text-[#1b1c1a] flex items-center gap-2">
                <SiteIcon name="photo-documentation" className="w-5 h-5 text-[#785600]" />
                <span>Dokumentasi Kesaksian Jemaat</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#625e54] font-light leading-relaxed">
                Bagi warga jemaat yang rindu membagikan kesaksian bagaimana kasih Tuhan bekerja dalam kehidupan pribadi atau keluarga, kesaksian dapat disampaikan melalui pembina kelompok Komunitas Iman (KOI), mimbar persekutuan ibadah, atau melalui koordinasi dengan hamba Tuhan dan sekretariat gereja.
              </p>
              <div className="pt-4 border-t border-[#e8e2d5] flex flex-wrap items-center gap-3">
                <a
                  href="https://www.instagram.com/gbibaitanisukabumi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#785600] hover:bg-[#ffdea6] text-white hover:text-[#1b1c1a] font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                  <span>Kirim Pesan via DM Instagram</span>
                </a>
                <Link
                  href="/#lokasi"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#e8e2d5] hover:border-[#785600] text-[#1b1c1a] text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#785600]" />
                  <span>Kunjungi Gedung Gereja</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
