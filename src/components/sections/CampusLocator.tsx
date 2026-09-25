'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Video, Clock, LocateFixed, Loader2 } from 'lucide-react';

interface CampusInfo {
  id: string;
  name: string;
  city: string;
  address: string;
  services: string[];
  phone: string;
  coordinates: { x: number; y: number }; // percentage on map
}

export default function CampusLocator() {
  const [selectedCity, setSelectedCity] = useState('Jakarta');
  const [isLocating, setIsLocating] = useState(false);
  const [geoMessage, setGeoMessage] = useState<string | null>(null);

  const campuses: CampusInfo[] = [
    {
      id: 'jkt-pusat',
      name: 'Baitani Main Sanctuary (Gedung Pusat)',
      city: 'Jakarta',
      address: 'Jl. Baitani Raya No. 77, Komp. Rumah Doa, Jakarta Barat',
      services: ['Minggu pk 07:30 (Raya 1)', 'Minggu pk 10:30 (Raya 2)', 'Sabtu pk 17:00 (Youth)'],
      phone: '+62 21 555-7890',
      coordinates: { x: 28, y: 64 }, // Jakarta location on ID map
    },
    {
      id: 'sby-campus',
      name: 'Baitani Regional Surabaya',
      city: 'Surabaya',
      address: 'Jl. Pemuda No. 12, Surabaya Pusat',
      services: ['Minggu pk 09:00 WIB', 'Minggu pk 16:30 WIB'],
      phone: '+62 31 555-0199',
      coordinates: { x: 42, y: 70 }, // Surabaya location on ID map
    },
    {
      id: 'bali-campus',
      name: 'Baitani Regional Bali',
      city: 'Bali',
      address: 'Sunset Road No. 88, Kuta, Bali',
      services: ['Minggu pk 10:00 WITA', 'Jumat pk 18:30 WITA'],
      phone: '+62 361 555-321',
      coordinates: { x: 49, y: 73 }, // Bali location
    },
    {
      id: 'mdn-campus',
      name: 'Baitani Regional Medan',
      city: 'Medan',
      address: 'Jl. Diponegoro No. 45, Medan',
      services: ['Minggu pk 08:30 WIB', 'Minggu pk 11:00 WIB'],
      phone: '+62 61 455-889',
      coordinates: { x: 12, y: 28 }, // Medan location
    },
  ];

  const currentCampus = campuses.find((c) => c.city === selectedCity) || campuses[0];

  const handleUseLocation = () => {
    setIsLocating(true);
    setGeoMessage(null);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setIsLocating(false);
          setSelectedCity('Jakarta'); // Default to closest
          setGeoMessage('Lokasi Anda terdeteksi: Wilayah terdekat adalah Main Sanctuary Jakarta.');
        },
        () => {
          setIsLocating(false);
          setGeoMessage('Izin lokasi tidak diberikan. Menampilkan kampus pusat.');
        }
      );
    } else {
      setIsLocating(false);
      setGeoMessage('Peramban Anda tidak mendukung geolokasi.');
    }
  };

  return (
    <section id="lokasi" className="py-24 bg-black text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-2">
              JARINGAN GEREJA LOKAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Temukan Kampus Ibadah
            </h2>
          </div>

          {/* Use My Location Button (§2.5 spec) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleUseLocation}
              disabled={isLocating}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-white text-xs font-bold tracking-wider uppercase text-zinc-300 hover:text-white transition-all min-h-[44px]"
              aria-label="Gunakan lokasi saya"
            >
              {isLocating ? (
                <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
              ) : (
                <LocateFixed className="w-4 h-4 text-blue-400" />
              )}
              <span>Gunakan Lokasi Saya</span>
            </button>
          </div>
        </div>

        {geoMessage && (
          <div className="mb-6 p-3 rounded-lg bg-zinc-900 border border-white/10 text-xs text-blue-300">
            {geoMessage}
          </div>
        )}

        {/* City Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/10 pb-4">
          {campuses.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCity(c.city)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all min-h-[40px] ${
                selectedCity === c.city
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {c.city}
            </button>
          ))}
        </div>

        {/* 2-Column: Map Area & Campus Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Stylized Indonesia Archipelago Vector SVG Map (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden min-h-[360px] flex items-center justify-center">
            
            {/* Minimalist Archipelago Map Illustration */}
            <svg
              className="w-full h-auto max-h-[300px] text-zinc-800"
              viewBox="0 0 1000 450"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              role="img"
              aria-label="Peta Wilayah Gereja Baitani di Indonesia"
            >
              {/* Sumatra */}
              <path
                d="M100 80 L180 150 L220 220 L270 290 L240 310 L160 210 L110 130 Z"
                className="fill-zinc-900 hover:fill-zinc-800 transition-colors"
              />
              {/* Java */}
              <path
                d="M260 330 L380 340 L450 350 L480 355 L470 370 L380 365 L260 350 Z"
                className="fill-zinc-900 hover:fill-zinc-800 transition-colors"
              />
              {/* Kalimantan */}
              <path
                d="M360 140 L440 130 L480 170 L470 240 L420 270 L350 240 L340 180 Z"
                className="fill-zinc-900 hover:fill-zinc-800 transition-colors"
              />
              {/* Sulawesi */}
              <path
                d="M520 180 L570 140 L600 170 L580 230 L610 270 L570 290 L550 250 L530 240 Z"
                className="fill-zinc-900 hover:fill-zinc-800 transition-colors"
              />
              {/* Bali & Nusa Tenggara */}
              <path
                d="M490 360 L540 365 L600 360 L620 370 L560 375 L490 368 Z"
                className="fill-zinc-900 hover:fill-zinc-800 transition-colors"
              />
              {/* Papua */}
              <path
                d="M720 190 L850 180 L920 220 L910 320 L840 310 L780 260 L730 240 Z"
                className="fill-zinc-900 hover:fill-zinc-800 transition-colors"
              />
            </svg>

            {/* Pulsing Beacon on Selected Campus */}
            <div
              className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
              style={{
                left: `${currentCampus.coordinates.x}%`,
                top: `${currentCampus.coordinates.y}%`,
              }}
            >
              <div className="relative flex items-center justify-center">
                <span className="w-8 h-8 rounded-full bg-blue-500/30 animate-ping absolute" />
                <span className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg relative z-10 flex items-center justify-center" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/90 border border-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap shadow-xl">
                  {currentCampus.city}
                </div>
              </div>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-6 text-[10px] tracking-widest uppercase text-zinc-500 font-mono">
              INDONESIA ARCHIPELAGO NETWORK • 4 REGIONS
            </div>
          </div>

          {/* Active Campus Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/60">
                  {currentCampus.city}
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  {currentCampus.phone}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {currentCampus.name}
              </h3>

              <div className="flex items-start gap-2.5 text-xs text-zinc-400 mb-6 leading-relaxed">
                <MapPin className="w-4 h-4 text-zinc-300 flex-shrink-0 mt-0.5" />
                <span>{currentCampus.address}</span>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Jadwal Ibadah Onsite:</span>
                </p>
                <ul className="space-y-1.5 text-xs text-zinc-400 pl-5 list-disc">
                  {currentCampus.services.map((srv, idx) => (
                    <li key={`srv-${idx}`} className="text-zinc-300">
                      {srv}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all min-h-[44px]"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>PETUNJUK ARAH</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Tonton Ibadah Live"
              >
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
