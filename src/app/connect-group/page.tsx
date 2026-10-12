import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import SiteIcon from '@/components/common/SiteIcon';
import InstagramIcon from '@/components/common/InstagramIcon';

export default function ConnectGroupPage() {

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
          imageSrc="/images/page-hero/komunitas.jpg"
          imageAlt="Foto ilustrasi: sekelompok teman duduk bersama di tepi air."
        />

        {/* 4 Pillars Section */}
        <section className="py-20 bg-[#f5f3f0] border-b border-[#e8e2d5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

              <div className="p-7 rounded-2xl bg-[#fff] border border-[#e8e2d5] shadow-warm-sm">
                <SiteIcon name="faith-community" className="w-6 h-6 text-[#785600] mb-4" />
                <h3 className="text-base font-bold text-[#1b1c1a] mb-2">Keluarga Rohani</h3>
                <p className="text-xs text-[#625e54] font-light leading-relaxed">
                  Ruang hangat di mana jemaat saling mengenal, saling memperhatikan, dan mengalami persekutuan yang akrab.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#fff] border border-[#e8e2d5] shadow-warm-sm">
                <SiteIcon name="bible-study" className="w-6 h-6 text-[#785600] mb-4" />
                <h3 className="text-base font-bold text-[#1b1c1a] mb-2">Pendalaman Firman</h3>
                <p className="text-xs text-[#625e54] font-light leading-relaxed">
                  Membaca dan merenungkan kebenaran Alkitab bersama agar iman jemaat berakar kuat dalam kehidupan sehari-hari.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#fff] border border-[#e8e2d5] shadow-warm-sm">
                <SiteIcon name="prayer" className="w-6 h-6 text-[#785600] mb-4" />
                <h3 className="text-base font-bold text-[#1b1c1a] mb-2">Saling Mendoakan</h3>
                <p className="text-xs text-[#625e54] font-light leading-relaxed">
                  Saling menopang beban doa dalam permohonan pergumulan hidup, kesembuhan, maupun mengucap syukur bersama.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#fff] border border-[#e8e2d5] shadow-warm-sm">
                <SiteIcon name="faith-community" className="w-6 h-6 text-[#785600] mb-4" />
                <h3 className="text-base font-bold text-[#1b1c1a] mb-2">Kasih Persaudaraan</h3>
                <p className="text-xs text-[#625e54] font-light leading-relaxed">
                  Menjaga kesatuan hati dan saling mendukung sebagai satu tubuh Kristus di tengah masyarakat Sukabumi.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Narrative Overview of KOI */}
        <section className="py-24 bg-[#fff] border-b border-[#e8e2d5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] block">
                TENTANG KOI
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1b1c1a]">
                Mengenal Komunitas Iman (KOI)
              </h2>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#fff] border border-[#e8e2d5] shadow-warm-md space-y-4 text-[#625e54] text-sm leading-relaxed font-light">
              <p>
                Di Gereja Baptis Indonesia Baitani, Sukabumi, persekutuan tidak hanya berlangsung dalam ibadah umum, melainkan juga terpelihara melalui <strong className="text-[#1b1c1a] font-medium">Komunitas Iman (KOI)</strong>. Melalui KOI, setiap warga jemaat memiliki wadah untuk saling membagikan pengalaman iman, berdoa bersama, dan saling menopang dalam kasih Kristus.
              </p>
              <p>
                Kelompok KOI diadakan untuk menjangkau keluarga, pemuda, dan warga jemaat di wilayah Sukabumi dan sekitarnya agar persekutuan tetap terjalin erat sepanjang minggu.
              </p>
              <div className="pt-4 border-t border-[#e8e2d5] flex flex-wrap items-center gap-4">
                <a
                  href="https://www.instagram.com/gbibaitanisukabumi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#785600] hover:text-[#ffdea6] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>Informasi Pertemuan Melalui Instagram @gbibaitanisukabumi</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Connect / Interest Section */}
        <section id="daftar-koi" className="py-24 bg-[#f5f3f0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#785600] block mb-2">
                TERHUBUNG DENGAN KOI
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1b1c1a] mb-4">
                Bergabung dengan Komunitas Iman
              </h2>
              <p className="text-[#625e54] text-sm font-light leading-relaxed">
                Rindu bertumbuh dan memiliki persekutuan rohani di Sukabumi? Sampaikan informasi kontak Anda atau kunjungi langsung persekutuan di gereja.
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
                  Untuk menjaga kenyamanan dan keamanan data Anda, penempatan kelompok KOI dikoordinasikan langsung oleh pengurus jemaat tanpa pengisian formulir pihak ketiga.
                </p>
              </div>

              <div className="space-y-3.5 py-1 text-sm text-[#625e54] font-light">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f5f3f0] text-[#785600] flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[#e8e2d5]">
                    1
                  </span>
                  <div>
                    <strong className="text-[#1b1c1a] block font-medium">Melalui Direct Message (DM) Instagram:</strong>
                    <span className="text-xs leading-relaxed">
                      Kirimkan pesan ke akun Instagram resmi gereja <strong className="text-[#1b1c1a]">@gbibaitanisukabumi</strong> mengenai minat Anda, wilayah domisili di Sukabumi, atau kelompok usia (pemuda, dewasa, keluarga).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f5f3f0] text-[#785600] flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 border border-[#e8e2d5]">
                    2
                  </span>
                  <div>
                    <strong className="text-[#1b1c1a] block font-medium">Tatap Muka Seusai Ibadah Raya:</strong>
                    <span className="text-xs leading-relaxed">
                      Anda dapat menjumpai hamba Tuhan atau pengurus jemaat seusai Ibadah Raya hari Minggu di gedung gereja: Jl. R.E. Martadinata No. 86, Sukabumi. Tim kami akan dengan sukacita memperkenalkan Anda ke pemimpin KOI terdekat.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e8e2d5] space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.instagram.com/gbibaitanisukabumi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-magnetic flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#785600] hover:bg-[#ffdea6] text-white hover:text-[#1b1c1a] font-bold text-xs tracking-wider uppercase transition-all shadow-warm-sm active:scale-95 min-h-12"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-500" />
                    <span>HUBUNGI VIA INSTAGRAM (@GBIBAITANISUKABUMI)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jl.+R.E.+Martadinata+No.+86+Sukabumi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-magnetic flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-[#e8e2d5] bg-[#fff] hover:bg-[#f5f3f0] text-[#1b1c1a] font-bold text-xs tracking-wider uppercase transition-all min-h-12"
                  >
                    <MapPin className="w-4 h-4 text-[#785600]" />
                    <span>LOKASI: JL. R.E. MARTADINATA NO. 86</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#625e54]" />
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#e8e2d5] text-center">
                  <p className="text-xs text-[#625e54] font-light leading-relaxed">
                    Kami tidak mengumpulkan nomor telepon atau data pribadi Anda melalui web ini. Seluruh persekutuan KOI bersifat sukarela, kekeluargaan, dan terbuka bagi setiap jiwa yang rindu berakar dalam Kristus.
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
