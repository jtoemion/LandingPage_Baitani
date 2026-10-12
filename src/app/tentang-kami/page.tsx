import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import IdentitySection from '@/components/sections/IdentitySection';
import { BookOpen, Flame, Users, HeartHandshake, ArrowUpRight, HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami — Gereja Baptis Indonesia Baitani, Sukabumi',
  description: 'Mengenal identitas, visi, misi, nilai-nilai inti, catatan perjalanan iman, dan pengakuan iman doktrinal Gereja Baptis Indonesia Baitani di Sukabumi.',
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
                  IDENTITAS & PROFIL GEREJA LOKAL
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1b1c1a] uppercase tracking-tight mb-4">
                  Gereja Baptis Indonesia Baitani
                </h1>
                <p className="text-[#625e54] text-sm sm:text-base font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Jemaat lokal Gereja Baptis Indonesia di Sukabumi, Jawa Barat. Berakar dalam Firman Allah, hidup dalam kasih persaudaraan, dan setia melayani di tengah masyarakat.
                </p>
              </div>
              {/* Right: image pane */}
              <div className="w-full lg:w-auto lg:flex-1 lg:max-w-lg xl:max-w-xl flex flex-col">
                <div className="relative w-full aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-[#e8e2d5] shadow-warm-md bg-[#f5f3f0]">
                  <Image
                    src="/images/page-hero/gembala.jpg"
                    alt="Foto ilustrasi: tangan membuka Alkitab."
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* FOTO ILUSTRASI label */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[rgba(251,249,246,0.85)] backdrop-blur-sm border border-[#e8e2d5]">
                    <span className="text-[9px] sm:text-[10px] font-mono font-semibold tracking-widest text-[#785600] uppercase select-none">
                      FOTO ILUSTRASI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Identity Section (Komponen Visi, Misi & Credo) */}
        <IdentitySection />

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
                    className="p-8 rounded-2xl bg-[#f5f3f0] border border-[#e8e2d5] hover:border-[#785600]/40 transition-all duration-300 group flex flex-col justify-between"
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
                  className="p-8 rounded-2xl bg-[#fff] border border-[#e8e2d5] flex flex-col justify-between"
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

        {/* Catatan Sejarah & Verifikasi Kronologi Tahun Berdiri */}
        <section className="py-24 border-b border-[#e8e2d5] bg-[#fff]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#625e54] block mb-2">
                JEJAK PERJALANAN IMAN
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1b1c1a] uppercase mb-4">
                Perjalanan Sejarah Jemaat
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-light">
                Menyaksikan bagaimana pemeliharaan Tuhan menyertai persekutuan jemaat di Sukabumi dari masa ke masa.
              </p>
            </div>

            <div className="space-y-6">
              {/* Official Historical Archives & Church Anniversary Reference */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#fbf9f6] border border-[#785600]/30 shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#785600]/15 flex items-center justify-center text-[#785600]">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#785600] block">
                      RUJUKAN ARSIP & HARI JADI GEREJA
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1b1c1a]">
                      Catatan Hari Jadi & Tahun Berdiri Jemaat
                    </h3>
                  </div>
                </div>

                <div className="text-[#625e54] text-xs sm:text-sm leading-relaxed space-y-4 font-light pt-2 border-t border-[#e8e2d5]">
                  <p>
                    Berdasarkan catatan dan publikasi resmi gereja di media sosial, perjalanan persekutuan jemaat dirangkum sebagai berikut:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#785600]/30 flex flex-col justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-mono text-[#785600] uppercase font-bold block">
                          Usia Pelayanan Gereja
                        </span>
                        <strong className="text-base sm:text-lg text-[#1b1c1a] font-bold block">
                          HUT ke-63 Tahun (2026)
                        </strong>
                        <p className="text-[11px] text-[#625e54] mt-1 leading-snug">
                          Merujuk pada publikasi resmi peringatan hari ulang tahun jemaat di Instagram.
                        </p>
                      </div>
                      <a
                        href="https://www.instagram.com/gbibaitanisukabumi/p/DcU3J25OW7J/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#785600] hover:bg-[#9a6b00] text-white text-[11px] font-bold uppercase tracking-wider transition-colors w-fit"
                      >
                        <span>Lihat Unggahan HUT ke-63</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#785600]/30 flex flex-col justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-mono text-[#785600] uppercase font-bold block">
                          Tanggal Peringatan Hari Jadi
                        </span>
                        <strong className="text-base sm:text-lg text-[#1b1c1a] font-bold block">
                          1 September 1967
                        </strong>
                        <p className="text-[11px] text-[#625e54] mt-1 leading-snug">
                          Tercantum pada bio profil media sosial resmi @gbibaitanisukabumi.
                        </p>
                      </div>
                      <a
                        href="https://www.instagram.com/gbibaitanisukabumi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e8e2d5] text-[#1b1c1a] text-[11px] font-bold uppercase tracking-wider hover:border-[#785600] transition-colors w-fit"
                      >
                        <span>Lihat Bio Instagram</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <p className="text-[#625e54] text-xs italic pt-1">
                    Gereja menyajikan catatan usia pelayanan (63 tahun) dan tanggal peringatan resmi ini secara terbuka dan terhubung langsung ke sumbernya, seraya penelusuran arsip historis jemaat terus disempurnakan.
                  </p>
                </div>
              </div>

              {/* Factual Local Church Context Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#f5f3f0] border border-[#e8e2d5] space-y-4">
                <h3 className="text-lg font-bold text-[#1b1c1a]">
                  Pelayanan Jemaat Lokal di Sukabumi
                </h3>
                <p className="text-[#625e54] text-xs sm:text-sm leading-relaxed font-light">
                  Gereja Baptis Indonesia Baitani berakar dan bertumbuh melayani warga jemaat di Kota Sukabumi, Jawa Barat. Beralamat di Jl. R.E. Martadinata No. 86, gereja senantiasa menjadi wadah persekutuan yang bersahaja, membina anak-anak dan generasi muda, serta menjadi saluran berkat bagi lingkungan sekitar.
                </p>
              </div>
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
                <span>LOKASI & INFORMASI IBADAH</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}