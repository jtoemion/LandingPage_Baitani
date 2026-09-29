'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { MapPin, Navigation, Video, Clock, Phone, Bus, Car, Baby, Accessibility, Coffee } from 'lucide-react';
import CampusLocator from '@/components/sections/CampusLocator';

interface FullCampus {
  id: string;
  name: string;
  city: string;
  badge: string;
  address: string;
  phone: string;
  leadPastor: string;
  schedule: { session: string; time: string; target: string }[];
  facilities: string[];
  publicTransit: string;
  googleMapsUrl: string;
}

export default function LokasiPage() {
  const [selectedCampusId, setSelectedCampusId] = useState('jkt-main');

  const campusDetails: FullCampus[] = [
    {
      id: 'jkt-main',
      name: 'Main Sanctuary Baitani Jakarta (Gedung Pusat)',
      city: 'Jakarta',
      badge: 'MAIN CAMPUS',
      address: 'Jl. Baitani Raya No. 77, Komp. Rumah Doa, Jakarta Barat 11530',
      phone: '+62 21 555-7890 / +62 812-3456-7890',
      leadPastor: 'Pdt. Johanes Pratama, M.Th',
      schedule: [
        { session: 'Ibadah Raya 1 (Pagi)', time: 'Minggu pk 07:30 WIB', target: 'Umum & Keluarga' },
        { session: 'Ibadah Raya 2 (Siang)', time: 'Minggu pk 10:30 WIB', target: 'Umum & Profesional' },
        { session: 'Limitless Youth Service', time: 'Sabtu pk 17:00 WIB', target: 'Remaja & Pemuda' },
        { session: 'Mezbah Doa Malam', time: 'Rabu pk 19:00 WIB', target: 'Doa Syafaat Jemaat' },
      ],
      facilities: [
        'Kapasitas 2.500 Kursi Ergonomis',
        'Ruang Ibadah Anak (Baitani Kids Church)',
        'Ruang Laktasi & Ibu Menyusui',
        'Akses Ramah Disabilitas & Lift',
        'Gedung Parkir 4 Lantai Gratis',
        'Baitani Fellowship Coffee Lounge',
      ],
      publicTransit: '300 meter dari Halte TransJakarta Green Garden (Koridor 8) atau 10 menit dari Stasiun KRL Pesing.',
      googleMapsUrl: 'https://maps.google.com/?q=Jakarta',
    },
    {
      id: 'sby-regional',
      name: 'Baitani Regional Surabaya',
      city: 'Surabaya',
      badge: 'REGIONAL HUB',
      address: 'Jl. Pemuda No. 12, Embong Kaliasin, Genteng, Surabaya 60271',
      phone: '+62 31 555-0199',
      leadPastor: 'Pdt. Andreas Wicaksono',
      schedule: [
        { session: 'Ibadah Raya Pagi', time: 'Minggu pk 09:00 WIB', target: 'Umum & Keluarga' },
        { session: 'Ibadah Sore & Pemuda', time: 'Minggu pk 16:30 WIB', target: 'Pemuda & Mahasiswa' },
        { session: 'Persekutuan Doa Fajar', time: 'Sabtu pk 06:00 WIB', target: 'Doa Bersama' },
      ],
      facilities: [
        'Kapasitas 800 Kursi',
        'Kids Church & Toddler Room',
        'Parkir Mobil & Motor Nyaman',
        'Audio-Visual Standard Konser',
      ],
      publicTransit: 'Dekat pusat kota, 5 menit dari Monumen Kapal Selam dan Stasiun Surabaya Gubeng.',
      googleMapsUrl: 'https://maps.google.com/?q=Surabaya',
    },
    {
      id: 'bali-regional',
      name: 'Baitani Regional Bali',
      city: 'Bali',
      badge: 'ISLAND CAMPUS',
      address: 'Sunset Road No. 88, Kuta, Kabupaten Badung, Bali 80361',
      phone: '+62 361 555-321',
      leadPastor: 'Pdm. Daniel Kristanto',
      schedule: [
        { session: 'Sunday Morning Service', time: 'Minggu pk 10:00 WITA', target: 'Bilingual (ID & EN)' },
        { session: 'Sunset Fellowship & Youth', time: 'Jumat pk 18:30 WITA', target: 'Creative Community' },
      ],
      facilities: [
        'Kapasitas 500 Kursi',
        'Bilingual Translation Headset',
        'Outdoor Fellowship Garden',
        'Parkir Wisatawan Luas',
      ],
      publicTransit: '15 menit dari Bandara Internasional I Gusti Ngurah Rai (DPS). Akses mudah taksi online.',
      googleMapsUrl: 'https://maps.google.com/?q=Bali',
    },
    {
      id: 'mdn-regional',
      name: 'Baitani Regional Medan',
      city: 'Medan',
      badge: 'SUMATRA HUB',
      address: 'Jl. Diponegoro No. 45, Petisah Tengah, Medan 20112',
      phone: '+62 61 455-889',
      leadPastor: 'Pdt. Markus Sitompul',
      schedule: [
        { session: 'Ibadah Raya Sesi 1', time: 'Minggu pk 08:30 WIB', target: 'Umum & Keluarga' },
        { session: 'Ibadah Raya Sesi 2', time: 'Minggu pk 11:00 WIB', target: 'Umum & Generasi Muda' },
        { session: 'Doa Syafaat Wilayah', time: 'Kamis pk 19:30 WIB', target: 'Syafaat Jemaat' },
      ],
      facilities: [
        'Kapasitas 600 Kursi',
        'Ruang Anak & Sekolah Minggu',
        'Keamanan Gedung 24 Jam',
        'Ruang Konseling Privat',
      ],
      publicTransit: 'Bersebelahan dengan pusat perkantoran dan hotel, 10 menit dari Lapangan Merdeka Medan.',
      googleMapsUrl: 'https://maps.google.com/?q=Medan',
    },
  ];

  const activeCampus = campusDetails.find((c) => c.id === selectedCampusId) || campusDetails[0];

  return (
    <div className="min-h-dvh flex flex-col bg-[#050505] text-[#fafafa]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="KAMPUS & SATELIT IBADAH"
          title="LOKASI KAMPUS & JADWAL"
          titleAccent="Worshiping in Spirit & In Truth"
          subtitle="Gereja Baitani hadir melayani jemaat di berbagai kota utama di Indonesia. Temukan jadwal ibadah onsite, fasilitas ramah keluarga, serta petunjuk rute transportasi."
          breadcrumbCurrent="Lokasi & Jadwal"
        />

        {/* Embedded Interactive Vector Map Section */}
        <CampusLocator />

        {/* Deep Dive Campus Profiles */}
        <section className="py-24 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-black tracking-widest uppercase text-zinc-400 block mb-2">
                DETAIL FASILITAS & TRANSPORTASI
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                Pilih Kampus Regional
              </h2>
            </div>

            {/* Campus Selector Tabs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              {campusDetails.map((campus) => (
                <button
                  key={campus.id}
                  type="button"
                  onClick={() => setSelectedCampusId(campus.id)}
                  className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all min-h-11 ${
                    selectedCampusId === campus.id
                      ? 'bg-white text-black shadow-xl ring-2 ring-[#d4af37]'
                      : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  {campus.city} — {campus.badge}
                </button>
              ))}
            </div>

            {/* Campus Detail Card */}
            <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Left: General Info & Schedule (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-block px-3 py-1 rounded bg-[#d4af37]/40 text-[#f3e5ab] border border-[#d4af37]/50 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                      {activeCampus.badge}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                      {activeCampus.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span>{activeCampus.address}</span>
                    </p>
                  </div>

                  {/* Schedule List */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                      Jadwal Ibadah Mingguan:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeCampus.schedule.map((item, idx) => (
                        <div key={`sch-${idx}`} className="p-4 rounded-lg bg-black border border-white/10">
                          <span className="text-xs font-mono text-[#d4af37] font-bold block mb-1">
                            {item.target}
                          </span>
                          <p className="text-sm font-bold text-white mb-1">{item.session}</p>
                          <p className="text-xs text-zinc-400 flex items-center gap-1.5 font-light">
                            <Clock className="w-3.5 h-3.5 text-zinc-500" />
                            <span>{item.time}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Public Transit Guide */}
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                    <Bus className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                        Akses Transportasi Umum
                      </h5>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {activeCampus.publicTransit}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Facilities & Action (5 cols) */}
                <div className="lg:col-span-5 bg-black/60 border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300 mb-4">
                      Fasilitas Gedung Ibadah:
                    </h4>
                    <ul className="space-y-3 text-xs text-zinc-300 font-light">
                      {activeCampus.facilities.map((fac, idx) => (
                        <li key={`fac-${idx}`} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono mb-1">
                        GEMBALA WILAYAH
                      </p>
                      <p className="text-sm font-bold text-white">{activeCampus.leadPastor}</p>
                      <p className="text-xs text-zinc-400 font-mono mt-1">{activeCampus.phone}</p>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col gap-3">
                    <a
                      href={activeCampus.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-magnetic w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-white hover:bg-[#f3e5ab] text-black font-bold text-xs tracking-wider uppercase shadow-xl"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>BUKA DI GOOGLE MAPS</span>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border border-white/20 hover:border-white text-white font-bold text-xs tracking-wider uppercase transition-colors"
                    >
                      <Video className="w-4 h-4 text-[#d4af37]" />
                      <span>IKUTI IBADAH STREAMING</span>
                    </a>
                  </div>
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
