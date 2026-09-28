import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { Compass, ShieldCheck, HeartHandshake, BookOpen, Flame, Users, Sparkles, ArrowUpRight } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#fafafa]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero Header */}
        <PageHero
          category="PROFIL & IDENTITAS"
          title="TENTANG GEREJA BAITANI"
          titleAccent="A Family Founded on Faith"
          subtitle="Sebuah keluarga rohani yang dipanggil untuk menyatakan kasih, pemulihan, dan kuasa transformasi Kristus bagi setiap generasi di Indonesia dan bangsa-bangsa."
          breadcrumbCurrent="Tentang Kami"
        />

        {/* Visi & Misi Editorial Section */}
        <section className="py-24 border-b border-white/10 relative overflow-hidden bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Visi */}
              <div className="lg:col-span-5 bg-zinc-950 border border-white/10 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#d4af37] mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>VISI KERAJAAN ALLAH</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase mb-6 leading-tight">
                  Membangun Keluarga Allah yang Dewasa, Relevan, dan Berdampak Luas.
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                  Visi kami adalah melihat setiap individu mengalami perjumpaan pribadi dengan kasih Kristus, dipulihkan dari masa lalu, dan bertumbuh menjadi murid yang memperluas Kerajaan Allah di mana pun mereka ditempatkan.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs font-mono text-[#e5c07b] font-bold block mb-1">TARGET 2030</span>
                  <p className="text-xs text-zinc-300 font-light">
                    Melahirkan 1,000 pemimpin kelompok sel dan memperlengkapi 100,000 jemaat di seluruh wilayah kepulauan Indonesia.
                  </p>
                </div>
              </div>

              {/* Right Column: 4 Misi Strategis */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[11px] font-black tracking-[0.3em] uppercase text-zinc-400 block mb-2">
                  4 PILAR STRATEGIS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-8">
                  Misi Pelayanan Kami
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-zinc-950/80 border border-white/10">
                    <span className="text-2xl font-black font-mono text-[#d4af37] block mb-2">01</span>
                    <h3 className="text-base font-bold text-white mb-2">Pekabaran Injil</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      Memberitakan kabar keselamatan Kristus melalui berbagai media, ibadah kreatif, dan kesaksian hidup sehari-hari.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-zinc-950/80 border border-white/10">
                    <span className="text-2xl font-black font-mono text-[#d4af37] block mb-2">02</span>
                    <h3 className="text-base font-bold text-white mb-2">Pemuridan Sel</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      Menanamkan firman dan membina karakter Kristiani yang berakar kuat lewat kelompok sel Connect Group.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-zinc-950/80 border border-white/10">
                    <span className="text-2xl font-black font-mono text-[#d4af37] block mb-2">03</span>
                    <h3 className="text-base font-bold text-white mb-2">Aksi Kasih Diakonia</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      Menjadi saluran berkat bagi masyarakat yang membutuhkan melalui program Baitani Care, bantuan sembako, dan beasiswa.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-zinc-950/80 border border-white/10">
                    <span className="text-2xl font-black font-mono text-[#d4af37] block mb-2">04</span>
                    <h3 className="text-base font-bold text-white mb-2">Pemberdayaan Generasi</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      Menyiapkan anak-anak dan pemuda menjadi pemimpin masa depan yang berintegritas tinggi di ranah publik dan profesional.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Nilai-Nilai Inti (Core Values) */}
        <section className="py-24 border-b border-white/10 bg-[#070709]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-2">
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
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 group-hover:border-[#d4af37]/50 transition-all">
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
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-2">
                DOKTRIN ALKITABIAH
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
                Pengakuan Iman Kami
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Kami berpegang teguh pada warisan iman para rasul dan ajaran Firman Allah yang murni serta tidak berkompromi dengan pergeseran zaman.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-2">
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
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 mb-2">
                      TAHUN {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Node Circle */}
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
