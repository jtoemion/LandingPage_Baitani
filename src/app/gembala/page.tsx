import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { ArrowUpRight, BookOpen, Heart, Mail, Phone, Calendar, Quote, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gembala & Kepemimpinan — Gereja Baitani',
  description: 'Mengenal profil Gembala Sidang Pdt. Johanes Pratama dan tim pastoral Gereja Baitani.',
};

export default function GembalaPage() {
  const pastoralTeam = [
    {
      name: 'Pdt. Andreas Wicaksono, M.Div',
      role: 'Gembala Bidang Pengajaran & Doktrin',
      bio: 'Mengawasi kurikulum pemuridan, pembinaan calon baptisan, dan memastikan seluruh khotbah serta materi sel berakar teguh pada eksegesis Alkitabiah.',
      email: 'andreas@gerejabaitani.org',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Ibu Maria Magdalena, S.Th',
      role: 'Gembala Pelayanan Wanita & Baitani Care',
      bio: 'Memimpin persekutuan wanita, pelayanan konseling keluarga, serta mengkoordinasikan aksi kemanusiaan tanggap bencana dan santunan sembako.',
      email: 'maria@gerejabaitani.org',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Pdm. Michael Christian',
      role: 'Youth & Young Adult Pastor',
      bio: 'Memiliki beban besar mengobarkan hati anak-anak muda SMP, SMA, dan mahasiswa untuk hidup kudus, berani bersaksi, dan mengejar panggilan Tuhan.',
      email: 'michael@gerejabaitani.org',
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Pdm. Ruth Elisabeth, S.Pd',
      role: 'Director of Baitani Kids Church',
      bio: 'Mendedikasikan hidupnya melatih para guru sekolah minggu dan merancang kurikulum animasi kreatif agar anak-anak mengenal kasih Yesus sejak dini.',
      email: 'ruth@gerejabaitani.org',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-dvh flex flex-col bg-[#050505] text-[#fafafa]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="KEPEMIMPINAN & PENGGEMBALAAN"
          title="TIM PENGGEMBALAAN"
          titleAccent="Called to Shepherd with Integrity"
          subtitle="Mengenal hati, visi, dan para pelayan Tuhan yang menggembalakan jemaat Gereja Baitani dengan ketulusan, doa yang tekun, dan pengajaran Alkitabiah yang murni."
          breadcrumbCurrent="Gembala & Kepemimpinan"
        />

        {/* Lead Pastor Editorial Profile */}
        <section className="py-24 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Portrait (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-950 group">
                  <img
                    src="/gembala.jpeg"
                    alt="Pdt. Johanes Pratama, M.Th — Gembala Sidang Gereja Baitani"
                    className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-black tracking-wider uppercase text-[#d4af37] block mb-1">
                      GEMBALA SIDANG
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-wide">
                      Pdt. Johanes Pratama, M.Th
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 font-light">
                      Senior Pastor & Founder Gereja Baitani
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio & Story (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-black tracking-widest uppercase text-zinc-400 block mb-2">
                  BIOGRAFI GEMBALA SIDANG
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                  Pdt. Johanes Pratama
                </h2>

                <div className="space-y-4 text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                  <p>
                    Pdt. Johanes Pratama menyerahkan hidupnya untuk melayani Tuhan sejak usia muda. Setelah menempuh pendidikan Master of Theology (M.Th) di Seminari Alkitab terkemuka dan melayani di berbagai kota di Indonesia, ia menerima panggilan ilahi untuk merintis Gereja Baitani sebagai rumah pemulihan bagi jiwa-jiwa.
                  </p>
                  <p>
                    Dalam kepemimpinannya, ia menekankan keseimbangan antara <strong>kuasa Firman yang tak berkompromi</strong> dan <strong>kepekaan akan karya Roh Kudus</strong>. Kerinduan terbesarnya adalah melahirkan generasi yang tidak hanya sekadar menjadi penonton gereja, melainkan murid Kristus yang berakar teguh, berkarakter mulia, dan berpengaruh nyata di tengah masyarakat.
                  </p>
                  <p>
                    Bersama istrinya, Maria Magdalena, dan anak-anak mereka, keluarga penggembalaan berkomitmen melayani jemaat dengan hati seorang bapa rohani yang penuh belas kasihan.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6">
                  <Link
                    href="/koneksi"
                    className="btn-magnetic inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#f3e5ab] text-black font-bold text-xs tracking-wider uppercase shadow-xl"
                  >
                    <span>JADWALKAN KONSELING PASTORAL</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                  <span className="text-xs font-mono text-zinc-500">
                    sekretariat@gerejabaitani.org
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Renungan Penggembalaan Bulan Ini */}
        <section className="py-20 bg-[#070709] border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-[#d4af37]/40 shadow-2xl relative overflow-hidden">
              <Quote className="w-16 h-16 text-[#d4af37]/50 absolute -right-2 -bottom-2 pointer-events-none" aria-hidden="true" />
              
              <div className="inline-block px-3 py-1 rounded bg-[#d4af37]/40 text-[#f3e5ab] border border-[#d4af37]/50 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                PESAN BULAN INI // SEPTEMBER 2026
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                &ldquo;Tahun Persatuan: Mengalami Kuasa Sorga yang Terbuka Melalui Kerendahan Hati&rdquo;
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                Ketika jemaat sepakat dalam doa dan sehati dalam kasih, tidak ada tembok benteng musuh yang tidak diruntuhkan. Roh Kudus tidak dicurahkan di atas perselisihan, melainkan di atas persekutuan yang berakar dalam kerendahan hati Kristus. Mari kita melangkah di sisa tahun ini dengan tekad untuk saling mengampuni dan saling menopang.
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10 text-xs text-zinc-400 font-mono">
                <span className="text-white font-bold">Pdt. Johanes Pratama</span>
                <span>•</span>
                <span>Baitani Pastoral Letter</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tim Pastoral & Dewan Penggembalaan */}
        <section className="py-24 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2">
                DEWAN PENGGEMBALAAN & BIDANG
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
                Tim Pastoral Kami
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Para hamba Tuhan yang melayani dengan dedikasi penuh di setiap bidang pelayanan jemaat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastoralTeam.map((pastor, idx) => (
                <div
                  key={`pastor-${idx}`}
                  className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                      <img
                        src={pastor.imageUrl}
                        alt={pastor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                    </div>

                    <div className="p-6">
                      <span className="text-xs font-bold tracking-wider uppercase text-[#d4af37] block mb-1">
                        {pastor.role}
                      </span>
                      <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                        {pastor.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                        {pastor.bio}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a
                      href={`mailto:${pastor.email}`}
                      className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="truncate">{pastor.email}</span>
                    </a>
                  </div>
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
