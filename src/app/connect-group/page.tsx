'use client';

import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { MapPin, ExternalLink, ShieldCheck, Calendar, UserCheck } from 'lucide-react';
import SiteIcon from '@/components/common/SiteIcon';
import InstagramIcon from '@/components/common/InstagramIcon';
import { koiGroups, koiCoordinator } from '@/data/koiData';

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

export default function ConnectGroupPage() {
  const whatsappJoinUrl =
    'https://wa.me/6281295859490?text=Halo%20GBI%20Baitani,%20saya%20ingin%20bergabung%20dengan%20Komunitas%20Iman%20(KOI)';

  return (
    <div className="min-h-dvh flex flex-col bg-[#fbf9f6] text-[#1b1c1a]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="PERSEKUTUAN JEMAAT & PEMURIDAN"
          title="KOMUNITAS IMAN (KOI)"
          titleAccent="Bertumbuh Bersama Dalam Kristus"
          subtitle="Komunitas Iman (KOI) adalah wadah persekutuan kelompok jemaat Gereja Baptis Indonesia Baitani, Sukabumi di mana jemaat saling menguatkan, mendalami Firman Tuhan, dan bertumbuh dalam kasih persaudaraan."
          breadcrumbCurrent="Komunitas Iman (KOI)"
          imageSrc="/images/koi/koi-persekutuan.jpeg"
          imageAlt="Foto persekutuan Komunitas Iman (KOI) Gereja Baptis Indonesia Baitani Sukabumi."
        />

        {/* 4 Pillars Section */}
        <section className="py-20 bg-[#f5f3f0] border-b border-[#e8e2d5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-7 rounded-2xl bg-[#fff] border border-[#e8e2d5] shadow-xs">
                <SiteIcon name="faith-community" className="w-6 h-6 text-[#785600] mb-4" />
                <h3 className="text-base font-bold text-[#1b1c1a] mb-2">Keluarga Rohani</h3>
                <p className="text-xs text-[#625e54] font-light leading-relaxed">
                  Ruang hangat di mana jemaat saling mengenal, saling memperhatikan, dan mengalami persekutuan yang akrab.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#fff] border border-[#e8e2d5] shadow-xs">
                <SiteIcon name="bible-study" className="w-6 h-6 text-[#785600] mb-4" />
                <h3 className="text-base font-bold text-[#1b1c1a] mb-2">Pendalaman Firman</h3>
                <p className="text-xs text-[#625e54] font-light leading-relaxed">
                  Membaca dan merenungkan kebenaran Alkitab bersama agar iman jemaat berakar kuat dalam kehidupan sehari-hari.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#fff] border border-[#e8e2d5] shadow-xs">
                <SiteIcon name="prayer" className="w-6 h-6 text-[#785600] mb-4" />
                <h3 className="text-base font-bold text-[#1b1c1a] mb-2">Saling Mendoakan</h3>
                <p className="text-xs text-[#625e54] font-light leading-relaxed">
                  Saling menopang beban doa dalam permohonan pergumulan hidup, kesembuhan, maupun mengucap syukur bersama.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#fff] border border-[#e8e2d5] shadow-xs">
                <SiteIcon name="faith-community" className="w-6 h-6 text-[#785600] mb-4" />
                <h3 className="text-base font-bold text-[#1b1c1a] mb-2">Kasih Persaudaraan</h3>
                <p className="text-xs text-[#625e54] font-light leading-relaxed">
                  Menjaga kesatuan hati dan saling mendukung sebagai satu tubuh Kristus di tengah masyarakat Sukabumi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KOI Coordinator Spotlight */}
        <section className="py-16 bg-[#fff] border-b border-[#e8e2d5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#fbf9f6] border border-[#e8e2d5] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#785600]/10 border border-[#785600]/30 flex items-center justify-center text-[#785600] flex-shrink-0">
                  <UserCheck className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#785600] block mb-1">
                    KOORDINATOR PELAYANAN
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#1b1c1a]">
                    {koiCoordinator.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#625e54] font-medium">
                    {koiCoordinator.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={whatsappJoinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1b1c1a] hover:bg-[#785600] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Daftar / Terhubung KOI</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8 Official KOI Groups Grid */}
        <section className="py-24 bg-[#f5f3f0] border-b border-[#e8e2d5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] block">
                DAFTAR KELOMPOK RESMI
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1b1c1a]">
                8 Kelompok Komunitas Iman (KOI)
              </h2>
              <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-light">
                Temukan kelompok persekutuan terdekat dengan lokasi domisili Anda di Kota Sukabumi dan sekitarnya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {koiGroups.map((koi, idx) => (
                <div
                  key={koi.id}
                  className="p-6 rounded-2xl bg-white border border-[#e8e2d5] hover:border-[#785600]/40 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#785600] bg-[#f5f3f0] px-2.5 py-1 rounded-full border border-[#e8e2d5]">
                        KELOMPOK {idx + 1}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#1b1c1a] bg-[#e8e2d5]/60 px-2.5 py-0.5 rounded-md">
                        <Calendar className="w-3 h-3 text-[#785600]" />
                        <span>{koi.day}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#1b1c1a] font-serif">
                        KOI {koi.name}
                      </h3>
                      <p className="text-xs text-[#817563] mt-0.5 font-mono">
                        Tuan Rumah / Fasilitator: <strong className="text-[#1b1c1a]">{koi.host}</strong>
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#fbf9f6] border border-[#e8e2d5] text-xs space-y-1 text-[#625e54]">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#785600] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{koi.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#e8e2d5]">
                    <a
                      href={whatsappJoinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-[#f5f3f0] hover:bg-[#785600] text-[#1b1c1a] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>Hubungi Sekretariat</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect / Guidance Section */}
        <section id="daftar-koi" className="py-24 bg-[#fff]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] block mb-2">
                TERHUBUNG DENGAN KOI
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1b1c1a] mb-4">
                Bergabung dengan Komunitas Iman
              </h2>
              <p className="text-[#625e54] text-sm font-light leading-relaxed">
                Rindu bertumbuh dan memiliki persekutuan rohani di Sukabumi? Sampaikan permohonan Anda ke sekretariat gereja atau kunjungi langsung persekutuan di gereja.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#fff] border border-[#e8e2d5] shadow-warm-md space-y-6">
              <div className="border-b border-[#e8e2d5] pb-5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#785600] tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#785600]" />
                  <span>PANDUAN TERHUBUNG LANGSUNG KE SEKRETARIAT</span>
                </div>
                <h3 className="text-xl font-bold text-[#1b1c1a]">
                  Langkah Bergabung dengan Kelompok KOI
                </h3>
                <p className="text-xs sm:text-sm text-[#625e54] font-light mt-1 leading-relaxed">
                  Untuk menjaga kenyamanan dan keamanan privasi jemaat, penempatan kelompok KOI dikoordinasikan langsung oleh koordinator Pdt. Hendi dan sekretariat gereja tanpa menyebarkan nomor pribadi di ruang publik.
                </p>
              </div>

              <div className="space-y-4 py-1 text-sm text-[#625e54] font-light">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f5f3f0] text-[#785600] flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[#e8e2d5]">
                    1
                  </span>
                  <div>
                    <strong className="text-[#1b1c1a] block font-medium">Melalui WhatsApp Resmi Sekretariat:</strong>
                    <span className="text-xs leading-relaxed">
                      Hubungi sekretariat di nomor <strong className="text-[#1b1c1a]">081295859490</strong> untuk menanyakan kelompok KOI yang paling cocok dengan domisili atau jadwal Anda.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f5f3f0] text-[#785600] flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[#e8e2d5]">
                    2
                  </span>
                  <div>
                    <strong className="text-[#1b1c1a] block font-medium">Melalui Direct Message (DM) Instagram:</strong>
                    <span className="text-xs leading-relaxed">
                      Kirimkan pesan ke akun Instagram resmi gereja <strong className="text-[#1b1c1a]">@gbibaitanisukabumi</strong> mengenai minat Anda dan wilayah domisili di Sukabumi.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f5f3f0] text-[#785600] flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[#e8e2d5]">
                    3
                  </span>
                  <div>
                    <strong className="text-[#1b1c1a] block font-medium">Tatap Muka Seusai Ibadah Raya:</strong>
                    <span className="text-xs leading-relaxed">
                      Anda dapat menjumpai Pdt. Hendi atau pengurus jemaat seusai Ibadah Raya hari Minggu di gedung gereja: Jl. R.E. Martadinata No. 86, Sukabumi. Tim kami akan dengan sukacita memperkenalkan Anda ke kelompok terdekat.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e8e2d5] space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={whatsappJoinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-magnetic flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#1b1c1a] hover:bg-[#785600] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-warm-sm active:scale-95 min-h-12"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>HUBUNGI VIA WHATSAPP (081295859490)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://www.instagram.com/gbibaitanisukabumi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-magnetic flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-[#e8e2d5] bg-[#fff] hover:bg-[#f5f3f0] text-[#1b1c1a] font-bold text-xs tracking-wider uppercase transition-all min-h-12"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-600" />
                    <span>DM INSTAGRAM @GBIBAITANISUKABUMI</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#625e54]" />
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#e8e2d5] text-center">
                  <p className="text-xs text-[#625e54] font-light leading-relaxed">
                    Kami menjaga privasi Anda dengan tidak mempublikasikan kontak pribadi jemaat. Seluruh persekutuan KOI bersifat sukarela, kekeluargaan, dan terbuka bagi setiap jiwa yang rindu berakar dalam Kristus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
