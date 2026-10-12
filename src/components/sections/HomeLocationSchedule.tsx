'use client';

import React from 'react';
import { Clock, Info, ExternalLink } from 'lucide-react';
import InstagramIcon from '@/components/common/InstagramIcon';
import SiteIcon from '@/components/common/SiteIcon';

export default function HomeLocationSchedule() {
  const churchInfo = {
    name: 'Gereja Baptis Indonesia Baitani, Sukabumi',
    city: 'Sukabumi',
    badge: 'GEREJA LOKAL',
    address: 'Jl. R.E. Martadinata No. 86, Sukabumi, Jawa Barat',
    facilities: ['Ruang Ibadah Utama', 'Ruang Pembinaan Anak & Sekolah Minggu', 'Area Parkir Jemaat', 'Akses Pusat Kota Sukabumi'],
    mapsQuery: 'https://www.google.com/maps/search/?api=1&query=Jl.+R.E.+Martadinata+No.+86+Sukabumi',
  };

  return (
    <section
      id="lokasi"
      className="scroll-mt-20 py-20 lg:py-24 bg-[#fbf9f6] text-[#1b1c1a] border-b border-[#e8e2d5] relative"
      aria-label="Lokasi dan Informasi Persekutuan Gereja"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#785600] block">
            LOKASI RESMI & PERSEKUTUAN JEMAAT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1b1c1a]">
            Hadir, Beribadah, & Bertumbuh Bersama
          </h2>
          <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-normal">
            Pintu Gereja Baptis Indonesia Baitani di Sukabumi senantiasa terbuka menyambut Anda dan keluarga untuk bersekutu dan bertumbuh dalam iman.
          </p>
        </div>

        {/* Factual Church Location Card (Single Official Location) */}
        <div className="bg-white rounded-3xl border border-[#e8e2d5] p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e8e2d5]">
            <div>
              <span className="font-mono text-xs font-bold text-[#785600] tracking-widest uppercase block mb-1">
                ALAMAT GEREJA
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1b1c1a]">
                Gereja Baptis Indonesia Baitani
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f3f0] border border-[#e8e2d5] text-xs font-mono font-bold text-[#785600] uppercase">
              <span>SUKABUMI, JAWA BARAT</span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: Info Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#e8e2d5] text-[#785600] uppercase tracking-wider mb-2">
                  {churchInfo.badge}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1b1c1a]">
                  {churchInfo.name}
                </h4>
              </div>

              <div className="space-y-4 text-sm text-[#4f4535]">
                <div className="flex items-start gap-3">
                  <SiteIcon name="church-location" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1b1c1a]">Alamat Resmi:</p>
                    <p className="leading-relaxed text-[13px]">
                      {churchInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#785600] mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="font-semibold text-[#1b1c1a]">Waktu Ibadah & Kegiatan Jemaat:</p>
                    <p className="text-[13px] text-[#625e54] leading-relaxed">
                      Konfirmasi jam ibadah dan jadwal kegiatan jemaat dapat ditanyakan langsung ke sekretariat gereja saat hadir beribadah atau dipantau melalui akun Instagram resmi @gbibaitanisukabumi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Facilities Chips */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#817563] block mb-2 font-mono">
                  SARANA & FASILITAS
                </span>
                <div className="flex flex-wrap gap-2">
                  {churchInfo.facilities.map((fac, idx) => (
                    <span
                      key={`fac-${idx}`}
                      className="px-3 py-1 rounded-lg bg-[#f5f3f0] border border-[#e8e2d5] text-xs font-medium text-[#4f4535]"
                    >
                      {fac}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={churchInfo.mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#785600] hover:bg-[#986d00] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600]"
                >
                  <SiteIcon name="church-location" className="w-4 h-4" />
                  <span>Buka Petunjuk Arah Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.instagram.com/gbibaitanisukabumi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#e8e2d5] hover:border-[#785600] text-[#785600] text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-600" />
                  <span>Instagram @gbibaitanisukabumi</span>
                </a>
              </div>
            </div>

            {/* Right: Informational Trust Notice Card */}
            <div className="lg:col-span-5 bg-[#f5f3f0] border border-[#e8e2d5] rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2.5 text-[#785600]">
                <Info className="w-5 h-5 flex-shrink-0" />
                <h5 className="font-serif text-base font-bold text-[#1b1c1a]">
                  Panduan Kunjungan & Informasi Ibadah
                </h5>
              </div>
              <p className="text-[13px] text-[#625e54] leading-relaxed">
                Bagi jemaat baru, keluarga yang baru pindah ke Sukabumi, atau pengunjung yang rindu beribadah bersama, pintu persekutuan kami terbuka menyambut Anda.
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#e8e2d5] text-[13px] text-[#4f4535] space-y-2">
                <p className="font-semibold text-[#1b1c1a]">
                  Informasi & Layanan Jemaat
                </p>
                <p className="text-[#625e54] leading-relaxed">
                  Layanan administrasi jemaat, warta doa, dan informasi kegiatan dilayani langsung di lokasi gereja pada hari kegiatan atau melalui kontak resmi media sosial Instagram.
                </p>
              </div>
              <p className="text-[12px] text-[#817563] italic">
                * Konfirmasi warta ibadah hari raya gerejawi (Natal, Paskah, dsb.) dapat dipantau langsung di profil Instagram @gbibaitanisukabumi.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
