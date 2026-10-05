import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import IdentitySection from '@/components/sections/IdentitySection';
import { BookOpen, Flame, Users, HeartHandshake, Sparkles, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami — Gereja Baitani',
  description: 'Mengenal visi, misi, nilai-nilai inti, sejarah, dan pengakuan iman doktrinal Gereja Baitani.',
};

export default function TentangKamiPage() {
  const coreValues = [
    {
      icon: BookOpen,
      title: 'Kebenaran Alkitabiah',
      description: 'Menjadikan Firman Allah sebagai otoritas tertinggi dan panduan mutlak dalam seluruh pengajaran, kehidupan praktis, dan pengambilan keputusan jemaat.',
    },
    {
      icon: Flame,
      title: 'Penyembahan Autentik',
      description: 'Mendorong penyembahan dalam roh dan kebenaran yang tidak sekadar ritual lahiriah, melainkan penyerahan hati yang mengalir dalam ketaatan setiap hari.',
    },
    {
      icon: Users,
      title: 'Pemuridan Holistik',
      description: 'Setiap jemaat tidak hanya hadir sebagai penonton, tetapi dimuridkan dalam kelompok sel kecil (Connect Group) agar berakar dan berbuah lebat bagi Kerajaan Allah.',
    },
    {
      icon: HeartHandshake,
      title: 'Kasih yang Berkurban',
      description: 'Menyatakan kasih Kristus yang nyata kepada sesama melalui aksi sosial, kepedulian diakonia, dan penjangkauan jiwa-jiwa yang terluka dan membutuhkan pengharapan.',
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
      desc: 'Kami percaya bahwa Yesus Kristus adalah Anak Tunggal Allah, dikandung dari Roh Kudus, lahir dari perawan Maria, hidup tanpa dosa, mati di kayu salib menebus dosa manusia, dan bangkit pada hari ketiga.',
    },
    {
      no: '04',
      title: 'Keselamatan Hanya Oleh Anugerah',
      desc: 'Kami percaya keselamatan manusia hanya diperoleh melalui anugerah Allah oleh iman kepada Yesus Kristus semata, bukan karena perbuatan baik manusia.',
    },
    {
      no: '05',
      title: 'Pekerjaan & Kuasa Roh Kudus',
      desc: 'Kami percaya Roh Kudus menginsafkan dunia akan dosa, melahirbarukan orang percaya, mendiami jemaat, serta melengkapi dengan karunia-karunia rohani untuk membangun tubuh Kristus.',
    },
    {
      no: '06',
      title: 'Kedatangan Kristus yang Kedua',
      desc: 'Kami percaya bahwa Tuhan Yesus Kristus akan datang kembali secara nyata dalam kemuliaan untuk menghakimi orang yang hidup dan mati serta menegakkan Kerajaan-Nya yang kekal.',
    },
  ];

  const milestones = [
    {
      year: '1985',
      title: 'Awal Mula di Ruang Doa',
      desc: 'Dimulai dari persekutuan doa keluarga berjumlah 12 orang di garasi rumah dengan beban rohani untuk pemulihan generasi muda.',
    },
    {
      year: '1998',
      title: 'Perintisan Jemaat Mandiri',
      desc: 'Resmi ditahbiskan sebagai jemaat lokal mandiri dengan jemaat perdana sebanyak 150 jiwa di wilayah Jakarta Barat.',
    },
    {
      year: '2012',
      title: 'Pembangunan Baitani Main Sanctuary',
      desc: 'Dengan pertolongan anugerah Tuhan, didirikan gedung gereja pusat berkapasitas 2.500 kursi lengkap dengan fasilitas sekolah minggu modern.',
    },
    {
      year: '2020',
      title: 'Ekspansi Multi-Kampus & Pelayanan Digital',
      desc: 'Membuka perintisan regional di Surabaya, Bali, dan Medan serta meluncurkan ibadah live streaming yang menjangkau jemaat di mancanegara.',
    },
    {
      year: '2026',
      title: 'Tahun Persatuan & Sorga Terbuka',
      desc: 'Bergerak serempak memperluas jaringan 1,000 Connect Group dan memperkuat pelayanan sosial Baitani Care bagi masyarakat luas.',
    },
  ];

  return (
    <div className="min-h-dvh flex flex-col bg-[#050505] text-[#fafafa]">
      <Navbar />

      <main id="main-content" className="flex-1 pt-24">
        {/* Header Khusus Halaman Tentang Kami */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-zinc-900 to-black border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.15),rgba(5,5,5,0))]" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#d4af37] mb-3 block">
              PROFIL & IDENTITAS
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
              TENTANG GEREJA BAITANI
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              Sebuah keluarga rohani yang dipanggil untuk menyatakan kasih, pemulihan, dan kuasa transformasi Kristus bagi setiap generasi di Indonesia dan bangsa-bangsa.
            </p>
          </div>
        </section>

        {/* Identity Section (Komponen Visi, Misi & Credo) */}
        <IdentitySection />

        {/* Nilai-Nilai Inti (Core Values) */}
        <section className="py-24 border-b border-white/10 bg-[#070709]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2">
                FONDASI KEHIDUPAN JEMAAT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
                Nilai-Nilai Inti (Core Values)
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Empat nilai fundamental yang membentuk DNA rohani, budaya kebersamaan, dan cara hidup setiap jemaat Gereja Baitani.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={`val-${idx}`}
                    className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 group-hover:border-[#d4af37]/50 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
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
        <section className="py-24 border-b border-white/10 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2">
                DOKTRIN ALKITABIAH
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
                Pengakuan Iman Kami
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Kami berpegang teguh pada warisan iman para rasul dan ajaran Firman Allah yang murni serta tidak berkompromi dengan pergeseran zaman.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctrines.map((doc) => (
                <div
                  key={doc.no}
                  className="p-8 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#d4af37] block mb-3">
                      ARTIKEL {doc.no}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {doc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sejarah & Garis Waktu Pertumbuhan */}
        <section className="py-24 border-b border-white/10 bg-[#070709]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2">
                JEJAK KESETIAAN TUHAN
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
                Sejarah Perjalanan
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Menyaksikan bagaimana Allah menuntun dan melipatgandakan pelayanan dari waktu ke waktu.
              </p>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-[1px] before:bg-white/15">
              {milestones.map((item, idx) => (
                <div
                  key={`mile-${idx}`}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12"
                >
                  <div className="flex-1 sm:text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#d4af37]/40 text-[#f3e5ab] border border-[#d4af37]/50 mb-2">
                      TAHUN {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-black border-2 border-[#d4af37] flex items-center justify-center relative z-10 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  </div>

                  <div className="flex-1 hidden sm:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="py-20 bg-black text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
              Bergabunglah Dalam Keluarga Baitani
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light mb-8 max-w-xl mx-auto">
              Kami menyambut Anda dengan tangan terbuka. Hadiri ibadah minggu ini atau temukan kelompok sel terdekat di lingkungan Anda.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/connect-group"
                className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#f3e5ab] text-black font-bold text-xs tracking-wider uppercase shadow-xl"
              >
                <span>CARI CONNECT GROUP</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <Link
                href="/lokasi"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-white text-white font-bold text-xs tracking-wider uppercase transition-colors"
              >
                <span>JADWAL & LOKASI IBADAH</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}