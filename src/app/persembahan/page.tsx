'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { Landmark, ShieldCheck, QrCode, Mail, ExternalLink, CheckCircle } from 'lucide-react';
import SiteIcon from '@/components/common/SiteIcon';

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

export default function PersembahanPage() {
  const givingChannels = [
    {
      badge: 'METODE 01',
      title: 'Persembahan Langsung di Gereja',
      desc: 'Dapat dimasukkan langsung ke dalam kantong atau kotak persembahan saat Ibadah Raya (Minggu 07.00 & 10.00 WIB) maupun Jam Doa Syafaat (Rabu 18.00 WIB). Tersedia amplop persepuluhan dan ucapan syukur.',
      footer: 'Lokasi: Gedung Gereja, Jl. R.E. Martadinata No. 86',
      image: '/images/page-hero/persembahan-natural.jpg',
      imageAlt: 'Persembahan jemaat ke dalam kotak persembahan kayu di ruang ibadah',
      icon: <SiteIcon name="church-location" className="w-5 h-5" />,
    },
    {
      badge: 'METODE 02',
      title: 'Transfer Rekening Bank Resmi',
      desc: 'Transfer langsung ke rekening bank resmi gereja. Nomor rekening resmi dikonfirmasikan langsung melalui Bendahara Jemaat (Bp. Yulius) atau Sekretariat Gereja untuk mencegah kekeliruan.',
      footer: 'Verifikasi: Bendahara / Sekretariat',
      image: '/images/page-hero/gembala-natural.jpg',
      imageAlt: 'Meja administrasi dan verifikasi rekening bank resmi gereja',
      icon: <Landmark className="w-5 h-5" />,
    },
    {
      badge: 'METODE 03',
      title: 'QRIS Resmi Gereja',
      desc: 'Pembayaran non-tunai melalui kode QRIS resmi terverifikasi yang terpasang di meja warta jemaat dan area sekretariat saat ibadah berlangsung, mendukung seluruh aplikasi perbankan dan e-wallet.',
      footer: 'Tersedia di Meja Warta & Sekretariat',
      image: '/images/persembahan/metode-qris.jpg',
      imageAlt: 'Kode QRIS resmi persembahan jemaat di meja penerimaan warta',
      icon: <QrCode className="w-5 h-5" />,
    },
  ];

  const givingPrinciples = [
    {
      title: 'Persepuluhan',
      verse: 'Maleakhi 3:10',
      desc: 'Wujud ketaatan dan pengakuan iman bahwa segala berkat dan rezeki bersumber dari Tuhan semata.',
      image: '/images/pelayanan/firman-pemuridan.jpg',
      imageAlt: 'Alkitab terbuka di atas mimbar kayu ruang ibadah',
    },
    {
      title: 'Persembahan Syukur',
      verse: 'Mazmur 100:4',
      desc: 'Pemberian sukarela atas kasih setia pemeliharaan Allah dalam kehidupan pribadi dan keluarga.',
      image: '/images/ibadah/ibadah-raya.jpeg',
      imageAlt: 'Ibadah ucapan syukur dan puji-pujian jemaat',
    },
    {
      title: 'Dana Diakonia & Kasih',
      verse: 'Amsal 19:17',
      desc: 'Pemberian kasih untuk menolong sesama yang berkekurangan, jemaat prasejahtera, dan bantuan sosial di Sukabumi.',
      image: '/images/diakonia/diakonia-sembako.jpeg',
      imageAlt: 'Aksi kepedulian kasih dan pembagian sembako jemaat',
    },
    {
      title: 'Pemeliharaan Sarana Ibadah',
      verse: '2 Korintus 9:7',
      desc: 'Menopang pemeliharaan rumah Tuhan dan operasional pelayanan jemaat agar ibadah berjalan tertib.',
      image: '/images/gedung/gedung-exterior.png',
      imageAlt: 'Gedung Gereja Baptis Indonesia Baitani Sukabumi',
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
          imageSrc="/images/page-hero/persembahan-natural.jpg"
          imageAlt="Persembahan syukur jemaat dengan hati sukacita ke dalam kotak persembahan kayu di ruang ibadah GBI Baitani Sukabumi."
          imageLabel="PENATALAYANAN"
        />

        {/* 3 Approved Giving Channels */}
        <section className="py-24 bg-[#f5f3f0] border-b border-[#e8e2d5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] block">
                SALURAN RESMI TERVERIFIKASI
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1b1c1a]">
                3 Metode Persembahan Resmi
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base font-light leading-relaxed">
                Demi menjaga akuntabilitas, ketepatan penyaluran, dan prinsip kehati-hatian, jemaat dapat memberikan persembahan melalui 3 saluran resmi yang telah disetujui.
              </p>
            </div>

            {/* 3 Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {givingChannels.map((channel, idx) => (
                <div
                  key={`channel-${idx}`}
                  className="bg-white rounded-3xl border border-[#e8e2d5] overflow-hidden shadow-xs flex flex-col justify-between group hover:border-[#785600]/40 transition-all duration-300"
                >
                  <div>
                    {/* Small grid photo banner on top of card */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#e8e2d5] bg-[#f5f3f0]">
                      <Image
                        src={channel.image}
                        alt={channel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[rgba(251,249,246,0.92)] backdrop-blur-sm border border-[#e8e2d5] flex items-center justify-center text-[#785600] shadow-xs">
                        {channel.icon}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase font-bold text-[#785600] block mb-1">
                          {channel.badge}
                        </span>
                        <h3 className="text-xl font-bold text-[#1b1c1a] group-hover:text-[#785600] transition-colors">
                          {channel.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#625e54] leading-relaxed font-light">
                        {channel.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                    <div className="pt-4 border-t border-[#e8e2d5] text-xs font-mono text-[#817563]">
                      {channel.footer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Financial Verification Box */}
            <div className="bg-white border border-[#785600]/30 rounded-3xl p-8 sm:p-10 space-y-6 shadow-warm-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e8e2d5] pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f5f3f0] border border-[#e8e2d5] flex items-center justify-center text-[#785600] flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1b1c1a]">
                      Verifikasi &amp; Konfirmasi Resmi Persembahan
                    </h3>
                    <p className="text-xs text-[#785600] font-mono font-bold">
                      DIVERIFIKASI OLEH: BP. YULIUS (BENDAHARA GEREJA)
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f3f0] border border-[#e8e2d5] text-xs font-mono font-bold text-[#785600] uppercase">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>AKUNTABILITAS TINGGI</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#625e54] leading-relaxed font-light">
                <p>
                  Gereja tidak mempublikasikan nomor rekening pihak ketiga atau nomor rekening tanpa verifikasi resmi di ruang publik web demi melindungi keamanan jemaat. Untuk meminta nomor rekening resmi atau mengonfirmasikan bukti transfer persembahan persepuluhan/syukur, silakan menghubungi Bendahara (<strong className="text-[#1b1c1a] font-medium">Bp. Yulius</strong>) melalui sekretariat gereja di bawah ini:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#fbf9f6] border border-[#e8e2d5] space-y-1">
                    <span className="font-semibold text-xs text-[#1b1c1a] block">
                      WhatsApp Sekretariat &amp; Bendahara:
                    </span>
                    <p className="text-xs text-[#625e54]">
                      Konfirmasi cepat dan permintaan rekening bank resmi:
                    </p>
                    <a
                      href="https://wa.me/6281295859490?text=Halo%20Sekretariat%20GBI%20Baitani,%20saya%20ingin%20konfirmasi%20rekening%20persembahan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#785600] font-mono font-bold text-xs hover:underline pt-1"
                    >
                      <span>081295859490</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-[#fbf9f6] border border-[#e8e2d5] space-y-1">
                    <span className="font-semibold text-xs text-[#1b1c1a] block">
                      Email Resmi Gereja:
                    </span>
                    <p className="text-xs text-[#625e54]">
                      Penyampaian warta dan bukti transaksi digital:
                    </p>
                    <a
                      href="mailto:gerejabaitani232@gmail.com"
                      className="text-[#785600] font-medium text-xs hover:underline block pt-1"
                    >
                      gerejabaitani232@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/6281295859490?text=Halo%20Sekretariat%20GBI%20Baitani,%20saya%20ingin%20konfirmasi%20rekening%20persembahan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1b1c1a] hover:bg-[#785600] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Hubungi WhatsApp (081295859490)</span>
                </a>

                <a
                  href="mailto:gerejabaitani232@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#e8e2d5] hover:border-[#785600] text-[#785600] text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#785600]" />
                  <span>Kirim Email Konfirmasi</span>
                </a>
              </div>
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
                  className="rounded-2xl bg-[#fff] border border-[#e8e2d5] flex flex-col justify-between shadow-warm-sm overflow-hidden group hover:border-[#785600]/40 transition-all duration-300"
                >
                  <div>
                    {/* Small grid photo banner on top of card */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#e8e2d5] bg-[#f5f3f0]">
                      <Image
                        src={type.image}
                        alt={type.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[rgba(251,249,246,0.92)] backdrop-blur-sm border border-[#e8e2d5]">
                        <span className="text-[10px] font-mono font-bold text-[#785600]">
                          {type.verse}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#1b1c1a] mb-2 group-hover:text-[#785600] transition-colors">
                        {type.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#625e54] font-light leading-relaxed">
                        {type.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className="pt-3 border-t border-[#e8e2d5]">
                      <span className="text-[11px] font-mono text-[#625e54]/70 uppercase">
                        GBI Baitani Sukabumi
                      </span>
                    </div>
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
