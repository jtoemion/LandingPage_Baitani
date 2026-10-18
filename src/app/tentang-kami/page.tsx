import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import IdentitySection from '@/components/sections/IdentitySection';
import { BookOpen, Flame, Users, HeartHandshake, ArrowUpRight, History, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami & Sejarah — Gereja Baptis Indonesia Baitani, Sukabumi',
  description: 'Mengenal sejarah berdirinya jemaat sejak 1 September 1963, 8 tokoh perintis, lini masa sejarah 1960–2026, visi Gereja Misioner, nilai inti, dan pengakuan iman doktrinal.',
};

export default function TentangKamiPage() {
  const pioneers = [
    { name: 'Bp. Lomena', role: 'Tokoh Perintis' },
    { name: 'Bp. Liu Then Tjhong', role: 'Tokoh Perintis' },
    { name: 'Bp. Rahmat Wirawan', role: 'Tokoh Perintis' },
    { name: 'Bp. Ridwan Tjiptamustika', role: 'Tokoh Perintis' },
    { name: 'Ny. Naomi Ibrahim', role: 'Tokoh Perintis' },
    { name: 'Ny. Medan', role: 'Tokoh Perintis' },
    { name: 'Nn. Onih Yahya', role: 'Tokoh Perintis' },
    { name: 'Ny. Wiriadinata', role: 'Tokoh Perintis' },
  ];

  const timelineEras = [
    {
      period: '1960 – 1962',
      title: 'Awal Perintisan Pos Pekabaran Injil',
      subtitle: 'Jl. Baros 16 & Jl. Gudang 4',
      description: 'Pelayanan dirintis melalui persekutuan doa dan pekabaran Injil oleh Pdt. B.L. Ho dan Pdt. Thio Tjoen An bersama 8 tokoh perintis jemaat mula-mula di Kota Sukabumi.',
      photoUrl: '/images/sejarah/sejarah_01.jpg',
      photoCaption: 'Arsip perintisan awal persekutuan jemaat di Sukabumi',
    },
    {
      period: '1 September 1963',
      title: 'Pengorganisasian Resmi GBI Baitani',
      subtitle: '58 Anggota Piagam & Pdt. Kang Sioe Hoey (Ishak Iskandar)',
      description: 'Diorganisasikan secara resmi menjadi gereja mandiri (Gereja Baptis Indonesia Baitani, Sukabumi) dengan 58 anggota piagam pendiri. Diikrarkan semboyan iman misioner bersejarah: "Dari Sukabumi sampai ke ujung bumi".',
      photoUrl: '/images/sejarah/sejarah_02.jpg',
      photoCaption: 'Dokumentasi piagam pengorganisasian resmi 1 September 1963',
    },
    {
      period: '1964',
      title: 'Gedung Ibadah Pertama',
      subtitle: 'Jl. Gudang IIA (Kini Pastori Jl. Gudang 19)',
      description: 'Tuhan menyediakan tempat ibadah tetap pertama di Jl. Gudang IIA. Gedung ini menjadi pusat persekutuan jemaat, kebaktian kebangunan rohani, dan pembinaan iman generasi awal.',
      photoUrl: '/images/sejarah/sejarah_03.jpg',
      photoCaption: 'Gedung gereja pertama jemaat di Jl. Gudang',
    },
    {
      period: '1968 – 1969',
      title: 'Pembangunan Gedung Jl. R.E. Martadinata 86',
      subtitle: 'Lahan 2.590 m² • Pentahbisan 19 Mei 1969',
      description: 'Melalui anugerah Tuhan dan dukungan misi (dilayani Pdt. Billy Mathias), gereja memperoleh lahan 2.590 m² di Jl. R.E. Martadinata No. 86. Gedung ibadah utama ditahbiskan pada 19 Mei 1969.',
      photoUrl: '/images/sejarah/sejarah_05.jpg',
      photoCaption: 'Gedung Gereja Baitani di Jl. R.E. Martadinata 86',
    },
    {
      period: '1970 – 2003',
      title: 'Era Pertumbuhan & Pembangunan Berkelanjutan',
      subtitle: 'Pdt. Sumardi Timothy, Pdt. David Sumarto, & Pdt. Hendi Tjiptamustika',
      description: 'Masa peneguhan penggembalaan, perluasan pelayanan kategorial pria (PBI), wanita (WBI), kaum muda (PKMB/PKRB), anak, serta pembangunan fasilitas aula dan pastori jemaat.',
      photoUrl: '/images/sejarah/sejarah_08.jpg',
      photoCaption: 'Persekutuan dan pelayanan jemaat era pertumbuhan',
    },
    {
      period: '2004 – Sekarang',
      title: 'Pelayanan Kontemporer & HUT ke-63 "Disciple Maker"',
      subtitle: 'Pdt. Maurits Johannis Takaendengan & Pdt. Kristianto',
      description: 'Memperteguh panggilan pemuridan melalui Komunitas Iman (KOI), transformasi generasi muda, dan penegasan panggilan Gereja Misioner menyambut HUT ke-63 tahun (1963–2026).',
      photoUrl: '/images/sejarah/sejarah_10.jpg',
      photoCaption: 'Pelayanan kontemporer dan kesatuan jemaat masa kini',
    },
  ];

  const coreValues = [
    {
      icon: BookOpen,
      title: 'Kebenaran Alkitabiah',
      description: 'Menjadikan Firman Allah sebagai otoritas tertinggi dan panduan mutlak dalam seluruh pengajaran, kehidupan praktis, dan pengambilan keputusan jemaat.',
    },
    {
      icon: Flame,
      title: 'Penyembahan yang Tulus',
      description: 'Mendorong penyembahan dalam roh dan kebenaran yang tidak sekadar ritual lahiriah, melainkan penyerahan hati yang mengalir dalam ketaatan sehari-hari.',
    },
    {
      icon: Users,
      title: 'Pemuridan Komunitas Iman',
      description: 'Setiap jemaat diajak untuk bertumbuh dan saling memperhatikan dalam Komunitas Iman (KOI) agar berakar teguh dalam ajaran Kristus.',
    },
    {
      icon: HeartHandshake,
      title: 'Kasih Persaudaraan',
      description: 'Menyatakan kasih Kristus yang nyata kepada sesama melalui kepedulian jemaat, saling menopang dalam doa, dan pelayanan di tengah masyarakat Sukabumi.',
    },
  ];

  const doctrines = [
    {
      no: '01',
      title: 'Alkitab Adalah Firman Allah',
      desc: 'Kami percaya bahwa seluruh isi Alkitab (66 kitab) diilhamkan oleh Roh Kudus, tanpa salah dalam naskah aslinya, dan merupakan otoritas tertinggi bagi iman dan perbuatan orang percaya.',
    },
    {
      no: '02',
      title: 'Allah Tritunggal yang Esa',
      desc: 'Kami percaya kepada satu Allah yang hidup dan sejati, kekal, mahakuasa, maha tahu, yang menyatakan diri dalam tiga pribadi: Bapa, Anak (Yesus Kristus), dan Roh Kudus.',
    },
    {
      no: '03',
      title: 'Ketuhanan Yesus Kristus',
      desc: 'Kami percaya bahwa Yesus Kristus adalah Anak Tunggal Allah, dikandung dari Roh Kudus, lahir dari anak dara Maria, hidup tanpa dosa, mati di kayu salib menebus dosa manusia, dan bangkit pada hari ketiga.',
    },
    {
      no: '04',
      title: 'Keselamatan Hanya Oleh Anugerah',
      desc: 'Kami percaya keselamatan manusia hanya diperoleh melalui anugerah Allah oleh iman kepada Yesus Kristus semata, bukan karena jasa atau perbuatan baik manusia.',
    },
    {
      no: '05',
      title: 'Pekerjaan Roh Kudus',
      desc: 'Kami percaya Roh Kudus menginsafkan manusia akan dosa, melahirkan-barukan orang percaya, memimpin dalam seluruh kebenaran, serta memperlengkapi jemaat untuk hidup berkenan kepada Allah.',
    },
    {
      no: '06',
      title: 'Kedatangan Kristus Kembali',
      desc: 'Kami percaya bahwa Tuhan Yesus Kristus akan datang kembali secara nyata dalam kemuliaan untuk menggenapi Kerajaan-Nya yang kekal.',
    },
  ];

  return (
    <div className="min-h-dvh flex flex-col bg-[#fbf9f6] text-[#1b1c1a]">
      <Navbar />

      <main id="main-content" className="flex-1 pt-24">
        {/* Header Khusus Halaman Tentang Kami */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f5f3f0] to-[#fbf9f6] border-b border-[#e8e2d5] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.12),rgba(251,249,246,0))]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
              {/* Left: text content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] mb-3 block">
                  SEJARAH & IDENTITAS RESMI JEMAAT
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1b1c1a] uppercase tracking-tight mb-4">
                  Gereja Baptis Indonesia Baitani
                </h1>
                <p className="text-[#625e54] text-sm sm:text-base font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Diorganisasikan secara resmi pada <strong className="text-[#1b1c1a] font-semibold">1 September 1963</strong> oleh 58 anggota piagam jemaat mula-mula. Menuju <strong className="text-[#1b1c1a] font-semibold">HUT ke-63 (1963–2026)</strong> dengan visi Gereja Misioner: <span className="italic text-[#785600]">&ldquo;Dari Sukabumi sampai ke ujung bumi&rdquo;</span>.
                </p>
              </div>
              {/* Right: image pane */}
              <div className="w-full lg:w-auto lg:flex-1 lg:max-w-lg xl:max-w-xl flex flex-col">
                <div className="relative w-full aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-[#e8e2d5] shadow-warm-md bg-[#f5f3f0]">
                  <Image
                    src="/images/sejarah/sejarah_08.jpg"
                    alt="Arsip bersejarah persekutuan jemaat Gereja Baptis Indonesia Baitani Sukabumi."
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[rgba(251,249,246,0.9)] backdrop-blur-sm border border-[#e8e2d5]">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#785600] uppercase select-none">
                      DOKUMENTASI ARSIP GEREJA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Identity Section (Visi, Misi & Credo) */}
        <IdentitySection />

        {/* 8 Tokoh Perintis & Piagam Pengorganisasian 1 September 1963 */}
        <section className="py-24 border-b border-[#e8e2d5] bg-[#fff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] block">
                FONDASI SEJARAH RESMI
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1b1c1a] uppercase">
                8 Tokoh Perintis &amp; Piagam 1963
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-light">
                Persekutuan yang diawali dari ketekunan doa di Baros dan Jl. Gudang, hingga pengorganisasian resmi pada 1 September 1963 oleh 58 anggota piagam mula-mula bersama Pdt. Kang Sioe Hoey (Ishak Iskandar).
              </p>
            </div>

            {/* Official Charter Badge Summary */}
            <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#fbf9f6] border border-[#785600]/30 shadow-warm-md mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f3f0] border border-[#e8e2d5] text-[11px] font-mono font-bold uppercase text-[#785600]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  DATA OTENTIK TERVERIFIKASI
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1b1c1a]">
                  1 September 1963 — Titik Awal Pengorganisasian
                </h3>
                <p className="text-xs sm:text-sm text-[#625e54] font-light leading-relaxed">
                  Ditandatangani oleh 58 anggota piagam jemaat dan menjadi dasar perhitungan resmi hari jadi gereja menuju <strong className="text-[#1b1c1a]">HUT ke-63 pada tahun 2026</strong> (1963 + 63 = 2026).
                </p>
              </div>

              <div className="flex-shrink-0 text-center p-4 rounded-2xl bg-white border border-[#e8e2d5] min-w-44 shadow-xs">
                <span className="text-[11px] font-mono uppercase text-[#785600] font-bold block">
                  USIA PELAYANAN
                </span>
                <span className="text-3xl font-black text-[#1b1c1a] font-serif block">
                  63 TAHUN
                </span>
                <span className="text-[11px] text-[#817563] font-mono">
                  1963 – 2026
                </span>
              </div>
            </div>

            {/* 8 Pioneers Grid */}
            <div className="max-w-5xl mx-auto">
              <h4 className="text-xs font-mono font-bold text-center tracking-widest uppercase text-[#817563] mb-6">
                DELAPAN TOKOH PERINTIS GBI BAITANI SUKABUMI
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {pioneers.map((pioneer, idx) => (
                  <div
                    key={`pioneer-${idx}`}
                    className="p-5 rounded-2xl bg-[#f5f3f0] border border-[#e8e2d5] text-center hover:border-[#785600]/40 transition-all shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-[#e8e2d5] flex items-center justify-center text-[#785600] mx-auto mb-3 font-mono font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <h5 className="font-bold text-sm text-[#1b1c1a] leading-snug">
                      {pioneer.name}
                    </h5>
                    <p className="text-[11px] text-[#817563] font-mono mt-1">
                      {pioneer.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lini Masa Sejarah Komprehensif (6 Era: 1960–2026) */}
        <section className="py-24 border-b border-[#e8e2d5] bg-[#f5f3f0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e8e2d5] text-[#785600] text-xs font-mono font-bold tracking-widest uppercase">
                <History className="w-3.5 h-3.5" />
                <span>KRONOLOGI SEJARAH LENGKAP</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1b1c1a] uppercase">
                Lini Masa Sejarah (1960–2026)
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-light">
                Enam babak utama perjalanan pemeliharaan Tuhan bagi Gereja Baptis Indonesia Baitani, Sukabumi.
              </p>
            </div>

            {/* Timeline Vertical Flow */}
            <div className="space-y-8 max-w-5xl mx-auto">
              {timelineEras.map((era, idx) => (
                <div
                  key={`era-${idx}`}
                  className="bg-white rounded-3xl border border-[#e8e2d5] p-6 sm:p-8 lg:p-10 shadow-sm hover:border-[#785600]/40 transition-all flex flex-col lg:flex-row gap-8 items-center"
                >
                  {/* Photo Column */}
                  <div className="w-full lg:w-72 lg:flex-shrink-0">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#e8e2d5] bg-[#f5f3f0]">
                      <Image
                        src={era.photoUrl}
                        alt={era.photoCaption}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 300px"
                      />
                    </div>
                    <p className="text-[11px] text-[#817563] italic mt-2 text-center lg:text-left">
                      {era.photoCaption}
                    </p>
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 space-y-3 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f3f0] border border-[#e8e2d5] text-[11px] font-mono font-bold text-[#785600] uppercase">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{era.period}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1b1c1a]">
                      {era.title}
                    </h3>

                    <h4 className="text-xs sm:text-sm font-semibold text-[#785600] font-mono">
                      {era.subtitle}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#625e54] leading-relaxed font-light pt-1">
                      {era.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nilai-Nilai Inti (Core Values) */}
        <section className="py-24 border-b border-[#e8e2d5] bg-[#fff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#625e54] block mb-2">
                FONDASI KEHIDUPAN JEMAAT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1b1c1a] uppercase mb-4">
                Nilai-Nilai Inti
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-light">
                Empat pilar nilai yang mendasari persekutuan, pertumbuhan rohani, dan cara hidup jemaat Gereja Baptis Indonesia Baitani di Sukabumi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={`val-${idx}`}
                    className="p-8 rounded-2xl bg-[#f5f3f0] border border-[#e8e2d5] hover:border-[#785600]/40 transition-all duration-300 group flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#fff] border border-[#e8e2d5] flex items-center justify-center text-[#785600] mb-6 group-hover:scale-110 group-hover:border-[#785600]/50 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-[#1b1c1a] mb-3 group-hover:text-[#785600] transition-colors">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#625e54] font-light leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pengakuan Iman Doktrinal (The Credo) */}
        <section className="py-24 border-b border-[#e8e2d5] bg-[#f5f3f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#625e54] block mb-2">
                DOKTRIN ALKITABIAH
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1b1c1a] uppercase mb-4">
                Pengakuan Iman Kami
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-light">
                Kami berpegang teguh pada warisan iman para rasul dan ajaran Firman Allah yang murni serta tidak berkompromi dengan pergeseran zaman.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctrines.map((doc) => (
                <div
                  key={doc.no}
                  className="p-8 rounded-2xl bg-[#fff] border border-[#e8e2d5] flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#785600] block mb-3">
                      ARTIKEL {doc.no}
                    </span>
                    <h3 className="text-lg font-bold text-[#1b1c1a] mb-3">
                      {doc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#625e54] font-light leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="py-20 bg-[#fbf9f6] text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#1b1c1a] mb-4">
              Bergabunglah Dalam Persekutuan Kami
            </h2>
            <p className="text-[#625e54] text-sm sm:text-base font-light mb-8 max-w-xl mx-auto">
              Kami menyambut Anda dengan sukacita. Hadiri persekutuan ibadah di gedung gereja atau terhubung dengan Komunitas Iman (KOI).
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/connect-group"
                className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#785600] hover:bg-[#9a6b00] text-white font-bold text-xs tracking-wider uppercase shadow-xl"
              >
                <span>KOMUNITAS IMAN (KOI)</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <Link
                href="/#lokasi"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#e8e2d5] hover:border-[#785600] text-[#1b1c1a] font-bold text-xs tracking-wider uppercase transition-colors"
              >
                <span>LOKASI & JADWAL IBADAH</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}