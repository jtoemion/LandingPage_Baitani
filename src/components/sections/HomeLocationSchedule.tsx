'use client';

import React from 'react';
import Image from 'next/image';
import { Clock, Calendar, ExternalLink, Mail, Phone } from 'lucide-react';
import InstagramIcon from '@/components/common/InstagramIcon';
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

export default function HomeLocationSchedule() {
  const churchInfo = {
    name: 'Gereja Baptis Indonesia Baitani',
    city: 'Sukabumi',
    badge: 'GEREJA LOKAL RESMI',
    address: 'Jl. R.E. Martadinata No. 86, Sukabumi, Jawa Barat',
    facilities: [
      'Gedung Ibadah Utama',
      'Aula Persekutuan',
      'Ruang Kelas Dewasa',
      'Ruang Anak & Sekolah Minggu',
      'Area Parkir Jemaat',
    ],
    mapsQuery: 'https://www.google.com/maps/search/?api=1&query=Jl.+R.E.+Martadinata+No.+86+Sukabumi',
    whatsapp: '081295859490',
    whatsappUrl: 'https://wa.me/6281295859490',
    email: 'gerejabaitani232@gmail.com',
  };

  const mainSchedules = [
    {
      name: 'Ibadah Raya 1 (Pagi)',
      day: 'Setiap Minggu',
      time: '07:00 WIB',
      location: 'Gedung Gereja Baitani',
      audience: 'Semua Usia',
      badge: 'Utama',
    },
    {
      name: 'Sekolah Minggu (Asuhan s.d. Senior 2)',
      day: 'Setiap Minggu',
      time: '08:30 WIB',
      location: 'Ruang Kelas Kategorial Gereja',
      audience: 'Asuhan s.d. Senior 2',
      badge: 'Kategorial',
    },
    {
      name: 'Ibadah Raya 2 (Siang)',
      day: 'Setiap Minggu',
      time: '10:00 WIB',
      location: 'Gedung Gereja Baitani',
      audience: 'Semua Usia',
      badge: 'Utama',
    },
    {
      name: 'Jam Doa Syafaat',
      day: 'Setiap Rabu',
      time: '18:00 WIB',
      location: 'Gedung Gereja Baitani',
      audience: 'Semua Usia',
      badge: 'Doa',
    },
  ];

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
            JADWAL IBADAH & LOKASI RESMI
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1b1c1a]">
            Hadir, Beribadah, & Bertumbuh Bersama
          </h2>
          <p className="text-[#625e54] text-sm sm:text-base leading-relaxed font-normal">
            Pintu Gereja Baptis Indonesia Baitani di Sukabumi senantiasa terbuka menyambut Anda dan keluarga untuk bersekutu dan bertumbuh dalam iman.
          </p>
        </div>

        {/* Factual Church Location & Schedule Container */}
        <div className="bg-white rounded-3xl border border-[#e8e2d5] p-6 sm:p-10 lg:p-12 shadow-sm space-y-10">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e8e2d5]">
            <div>
              <span className="font-mono text-xs font-bold text-[#785600] tracking-widest uppercase block mb-1">
                PUSAT PERSEKUTUAN & SEKRETARIAT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1b1c1a]">
                {churchInfo.name}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f3f0] border border-[#e8e2d5] text-xs font-mono font-bold text-[#785600] uppercase">
              <span>SUKABUMI, JAWA BARAT</span>
            </div>
          </div>

          {/* 2-Column Split: Left (Location & Contacts) / Right (Schedule Table & Secretariat) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Address, Facilities, Contact CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#e8e2d5] text-[#785600] uppercase tracking-wider mb-2">
                  {churchInfo.badge}
                </span>
                <p className="text-sm text-[#625e54] leading-relaxed mb-4">
                  Melayani jemaat dan masyarakat Kota Sukabumi dengan kasih Kristus sejak 1963.
                </p>
                {/* Real Church Exterior Image */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#e8e2d5] shadow-xs mb-6 bg-[#f5f3f0]">
                  <Image
                    src="/images/gedung/gedung-exterior.png"
                    alt="Gedung Gereja Baptis Indonesia Baitani, Jl. R.E. Martadinata No. 86, Sukabumi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-[rgba(251,249,246,0.92)] backdrop-blur-sm border border-[#e8e2d5]">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#785600] uppercase select-none">
                      GEDUNG GEREJA RESMI
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#4f4535]">
                <div className="flex items-start gap-3">
                  <SiteIcon name="church-location" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#785600]" />
                  <div>
                    <p className="font-semibold text-[#1b1c1a]">Alamat Resmi:</p>
                    <p className="leading-relaxed text-[13px] text-[#625e54]">
                      {churchInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#785600] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1b1c1a]">Jam Layanan Sekretariat:</p>
                    <p className="leading-relaxed text-[13px] text-[#625e54]">
                      <strong className="text-[#1b1c1a] font-medium">Selasa – Minggu:</strong> 08.00 – 16.00 WIB
                      <br />
                      <span className="text-[#817563] italic">(Hari Senin Tutup / Libur)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#785600] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1b1c1a]">Kontak Sekretariat & WhatsApp:</p>
                    <a
                      href={churchInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leading-relaxed text-[13px] text-[#785600] font-semibold hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{churchInfo.whatsapp}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#785600] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1b1c1a]">Email Resmi:</p>
                    <a
                      href={`mailto:${churchInfo.email}`}
                      className="leading-relaxed text-[13px] text-[#785600] hover:underline"
                    >
                      {churchInfo.email}
                    </a>
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
                  href={churchInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1b1c1a] hover:bg-[#785600] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Hubungi WhatsApp Sekretariat</span>
                </a>

                <a
                  href={churchInfo.mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#785600] hover:bg-[#986d00] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
                >
                  <SiteIcon name="church-location" className="w-4 h-4" />
                  <span>Petunjuk Arah Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.instagram.com/gbibaitanisukabumi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white border border-[#e8e2d5] hover:border-[#785600] text-[#785600] text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-600" />
                  <span>@gbibaitanisukabumi</span>
                </a>
              </div>
            </div>

            {/* Right Column: Schedule Table / Cards */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#fbf9f6] border border-[#e8e2d5] rounded-2xl p-6 sm:p-7 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#e8e2d5]">
                  <div className="flex items-center gap-2 text-[#785600]">
                    <Calendar className="w-5 h-5 flex-shrink-0" />
                    <h4 className="font-serif text-lg font-bold text-[#1b1c1a]">
                      Jadwal Ibadah & Doa Rutin
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase bg-[#e8e2d5] text-[#785600] px-2.5 py-1 rounded-full">
                    Resmi
                  </span>
                </div>

                {/* Schedule Cards */}
                <div className="space-y-3">
                  {mainSchedules.map((item, idx) => (
                    <div
                      key={`sched-${idx}`}
                      className="bg-white rounded-xl border border-[#e8e2d5] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#785600]/40 transition-all shadow-xs"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-[#1b1c1a]">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#f5f3f0] text-[#785600] font-bold">
                            {item.audience}
                          </span>
                        </div>
                        <p className="text-xs text-[#817563]">
                          {item.day} • {item.location}
                        </p>
                      </div>

                      <div className="sm:text-right flex-shrink-0">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-[#f5f3f0] border border-[#e8e2d5] font-mono text-sm font-bold text-[#785600]">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Notice Box */}
                <div className="p-4 rounded-xl bg-white border border-[#e8e2d5] text-xs text-[#625e54] space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#1b1c1a]">
                    <Clock className="w-4 h-4 text-[#785600]" />
                    <span>Persekutuan Kategorial & Komunitas Iman (KOI)</span>
                  </div>
                  <p className="leading-relaxed text-[12px]">
                    Jadwal Persekutuan Lansia (Selasa 13.00 WIB), Doa Syafaat (Rabu 18.00 WIB), Persekutuan Pria PBI (Kamis 19.00 WIB), Persekutuan Wanita WBI (Jumat 16.00 WIB), Pemuda & Remaja (Sabtu 17.00 WIB), serta kelompok KOI dapat dikonfirmasi ke sekretariat atau gembala.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
