'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Sparkles, Compass } from 'lucide-react';

interface ActivitySlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  location: string;
  dateBadge: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const activitySlides: ActivitySlide[] = [
  {
    id: 'kebersamaan-jemaat',
    badge: 'PERAYAAN & PERSEKUTUAN JEMAAT',
    title: 'Kebersamaan Seluruh Warga Jemaat Baitani',
    subtitle: 'Gedung Gereja Baitani, Jl. R.E. Martadinata No. 86',
    location: 'Kota Sukabumi, Jawa Barat',
    dateBadge: 'Perayaan Gereja',
    description:
      'Momen sukacita dan persekutuan hangat seluruh keluarga besar jemaat Baitani, dari anak-anak sekolah minggu, pemuda-pemudi, dewasa, hingga kaum lansia berkumpul di pelataran gereja dalam balutan warna sukacita.',
    imageUrl: '/images/acara/acara-hero.jpeg',
    altText: 'Foto bersama seluruh warga jemaat di depan gedung Gereja Baptis Baitani Sukabumi',
  },
  {
    id: 'mission-trip-lampung',
    badge: 'PELAYANAN MISI (MISSION TRIP)',
    title: 'Mission Trip Lampung: Menjangkau Sekolah Minggu & Remaja',
    subtitle: 'Pelayanan Lintas Pulau — Melintasi Selat Sunda',
    location: 'Lampung, Sumatera',
    dateBadge: '1–3 Mei',
    description:
      'Tim pelayanan misi GBI Baitani menjangkau pos pelayanan di Lampung untuk membina adik-adik Sekolah Minggu dan persekutuan remaja, berlandaskan 1 Timotius 4:12 sebagai teladan dalam perkataan, tingkah laku, kasih, dan kesetiaan.',
    imageUrl: '/images/acara/mission-trip-1.jpeg',
    altText: 'Tim Mission Trip Lampung GBI Baitani Sukabumi di atas kapal penyeberangan laut',
  },
  {
    id: 'mission-trip-purwokerto',
    badge: 'PELAYANAN MISI (MISSION TRIP)',
    title: 'Mission Trip to Purwokerto: Pergi dan Jadilah Terang',
    subtitle: 'Gebyar Sekolah Minggu & Pembinaan Iman',
    location: 'Purwokerto, Jawa Tengah',
    dateBadge: '17–19 Juli',
    description:
      'Perjalanan misi kasih jemaat ke Purwokerto dalam agenda Gebyar Sekolah Minggu dengan sub-tema "Pergi dan Jadilah Terang", memperlengkapi anak-anak dan jemaat lokal dengan firman Tuhan dan sukacita persekutuan.',
    imageUrl: '/images/acara/mission-trip-2.jpeg',
    altText: 'Tim Mission Trip Purwokerto GBI Baitani Sukabumi dengan spanduk kegiatan',
  },
  {
    id: 'cerdas-cermat-alkitab',
    badge: 'PEMBINAAN GENERASI & FIRMAN TUHAN',
    title: 'Lomba Cerdas Cermat Alkitab (Tingkat SMP & SMA)',
    subtitle: 'Mendidik Generasi Berakar Kuat Dalam Firman',
    location: 'Aula Gereja Baitani Sukabumi',
    dateBadge: 'Pembinaan Rutin',
    description:
      'Wadah kompetisi edukatif yang mengasah kecintaan generasi muda pada isi Alkitab. Puluhan remaja dan anak berkumpul bersama para mentor untuk mendalami kebenaran firman Allah dengan penuh antusiasme.',
    imageUrl: '/images/acara/mission-trip-3.jpeg',
    altText: 'Peserta dan pembina Lomba Cerdas Cermat Alkitab tingkat SMP dan SMA di GBI Baitani',
  },
  {
    id: 'ibadah-syukur-63',
    badge: 'IBADAH RAYA & SYUKUR KELUARGA ALLAH',
    title: 'Ibadah Raya Syukur HUT ke-63 "Disciple Maker"',
    subtitle: 'Puji-Pujian & Penyembahan Bersama Seluruh Pelayan',
    location: 'Sanctuary GBI Baitani Sukabumi',
    dateBadge: '1 September',
    description:
      'Ibadah ucapan syukur memperingati 63 tahun perjalanan iman GBI Baitani Sukabumi (1963–2026), dipimpin oleh Gembala Jemaat Pdt. Kristianto bersama tim pemuji, musisi, paduan suara, dan seluruh jemaat.',
    imageUrl: '/images/ibadah/ibadah-raya.jpeg',
    altText: 'Suasana panggung Ibadah Syukur HUT ke-63 GBI Baitani Sukabumi dengan puji-pujian',
  },
];

export default function AcaraActivitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = activitySlides.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  const active = activitySlides[currentIndex];

  return (
    <section
      className="py-16 md:py-24 bg-[#fff] border-b border-[#e8e2d5]"
      aria-label="Dokumentasi Kegiatan & Pelayanan Misi"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#785600]/10 border border-[#785600]/25 text-[#785600] text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>DOKUMENTASI PELAYANAN MISI & KEGIATAN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b1c1a] tracking-tight uppercase">
              Kegiatan &amp; Misi Jemaat
            </h2>
            <p className="text-[#625e54] text-xs sm:text-sm font-light mt-2 max-w-2xl leading-relaxed">
              Mewujudkan visi Gereja Misioner: Cinta Tuhan, Mengasihi Sesama, dan Menjangkau Dunia — dari kota Sukabumi hingga ke berbagai daerah nusantara.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="text-xs font-mono text-[#817563] font-semibold tracking-wider mr-2">
              <span className="text-[#785600] font-bold text-sm">0{currentIndex + 1}</span> / 0{total}
            </span>
            <button
              onClick={prevSlide}
              aria-label="Kegiatan sebelumnya"
              className="w-11 h-11 rounded-full border border-[#e8e2d5] hover:border-[#785600] bg-white hover:bg-[#f5f3f0] text-[#1b1c1a] hover:text-[#785600] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Kegiatan berikutnya"
              className="w-11 h-11 rounded-full border border-[#e8e2d5] hover:border-[#785600] bg-white hover:bg-[#f5f3f0] text-[#1b1c1a] hover:text-[#785600] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Carousel Card (Centerpiece) */}
        <div className="relative rounded-3xl overflow-hidden bg-[#1b1c1a] border border-[#e8e2d5] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] sm:min-h-[520px]">
            
            {/* Visual Photo Area (7 cols on lg) */}
            <div className="relative lg:col-span-7 h-72 sm:h-96 lg:h-auto overflow-hidden bg-zinc-950">
              <Image
                key={active.id}
                src={active.imageUrl}
                alt={active.altText}
                fill
                priority
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 lg:hidden" />
              
              {/* Floating Date Badge on Image */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <Calendar className="w-3.5 h-3.5 text-[#ffdea6]" />
                  <span>{active.dateBadge}</span>
                </span>
              </div>
            </div>

            {/* Content Details Area (5 cols on lg) */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#1b1c1a] text-white">
              <div className="space-y-5">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#785600]/30 border border-[#785600]/50 text-[#ffdea6] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#ffdea6]" />
                  <span>{active.badge}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    {active.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#ffdea6] font-medium mt-1">
                    {active.subtitle}
                  </p>
                </div>

                {/* Location metadata */}
                <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono pt-1">
                  <MapPin className="w-4 h-4 text-[#785600] flex-shrink-0" />
                  <span>{active.location}</span>
                </div>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed pt-2 border-t border-zinc-800">
                  {active.description}
                </p>
              </div>

              {/* Progress & Slide dots */}
              <div className="pt-8 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {activitySlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Pindah ke slide ${idx + 1}: ${slide.title}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIndex
                          ? 'w-8 bg-[#ffdea6]'
                          : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                      }`}
                    />
                  ))}
                </div>

                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                  GBI BAITANI SUKABUMI
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Thumbnail Selector Grid (5 cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-6">
          {activitySlides.map((slide, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={`thumb-${slide.id}`}
                onClick={() => goToSlide(idx)}
                className={`text-left p-3 rounded-2xl border transition-all duration-300 flex items-center gap-3 cursor-pointer group ${
                  isCurrent
                    ? 'bg-[#f5f3f0] border-[#785600] shadow-sm'
                    : 'bg-white border-[#e8e2d5] hover:border-[#785600]/40'
                }`}
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-900 border border-[#e8e2d5]">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="48px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#785600] block truncate">
                    0{idx + 1} • {slide.dateBadge}
                  </span>
                  <p className="text-xs font-bold text-[#1b1c1a] truncate leading-tight mt-0.5">
                    {slide.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
