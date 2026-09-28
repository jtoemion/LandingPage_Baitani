'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { Calendar, Clock, MapPin, User, ArrowUpRight, CheckCircle2, Search, Filter } from 'lucide-react';
import Link from 'next/link';

interface ChurchEventDetail {
  id: string;
  title: string;
  category: 'all' | 'special' | 'youth' | 'family' | 'prayer' | 'social';
  categoryLabel: string;
  displayDate: string;
  time: string;
  location: string;
  speaker: string;
  imageUrl: string;
  description: string;
  registrationOpen: boolean;
  quota: string;
}

export default function AcaraPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [registeredEventId, setRegisteredEventId] = useState<string | null>(null);

  const events: ChurchEventDetail[] = [
    {
      id: 'event-1',
      title: 'Sorga Terbuka Conference 2026',
      category: 'special',
      categoryLabel: 'KONFERENSI TAHUNAN',
      displayDate: '15 - 17 MEI 2026',
      time: '18:00 - 21:30 WIB',
      location: 'Main Sanctuary Baitani Jakarta',
      speaker: 'Pdt. Johanes Pratama & Pembicara Tamu',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
      description: 'Konferensi rohani akbar 3 malam untuk membakar kembali api doa, pemulihan jubah profetik, dan pembekalan kuasa Roh Kudus bagi kepemimpinan jemaat.',
      registrationOpen: true,
      quota: 'Sisa 240 Kursi',
    },
    {
      id: 'event-2',
      title: 'Limitless Youth Camp: Unshakable',
      category: 'youth',
      categoryLabel: 'YOUTH MOVEMENT',
      displayDate: '26 - 28 JUNI 2026',
      time: '3 Hari 2 Malam',
      location: 'Highland Camp Resort, Puncak',
      speaker: 'Pdm. Michael Christian & Tim Youth',
      imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop',
      description: 'Retreat tahunan khusus siswa SMP, SMA, dan mahasiswa. Membangun fondasi iman yang tak tergoyahkan di tengah arus tren dunia modern.',
      registrationOpen: true,
      quota: 'Sisa 65 Peserta',
    },
    {
      id: 'event-3',
      title: 'Seminar Pernikahan: Covenant of Love',
      category: 'family',
      categoryLabel: 'FAMILY MINISTRY',
      displayDate: '11 JULI 2026',
      time: '09:00 - 15:00 WIB',
      location: 'Grace Fellowship Hall Lt. 3',
      speaker: 'Pdt. Johanes Pratama & Ibu Maria',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      description: 'Lokakarya interaktif bagi pasangan suami-istri dan tunangan untuk memperdalam komunikasi, resolusi konflik Alkitabiah, dan keintiman keluarga.',
      registrationOpen: true,
      quota: 'Sisa 20 Pasang',
    },
    {
      id: 'event-4',
      title: 'Malam Doa & Kesembuhan Ilahi',
      category: 'prayer',
      categoryLabel: 'MEZBAH DOA',
      displayDate: 'SETIAP RABU MINGGU KE-1',
      time: '19:00 - 21:00 WIB',
      location: 'Main Sanctuary & Live YouTube',
      speaker: 'Tim Pastoral & Syafaat Baitani',
      imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1200&auto=format&fit=crop',
      description: 'Momen hening mencari hadirat Tuhan, menaikkan syafaat bagi bangsa dan kota, serta pelayanan doa tumpang tangan bagi jemaat yang sakit.',
      registrationOpen: false,
      quota: 'Terbuka untuk Umum',
    },
    {
      id: 'event-5',
      title: 'Baitani Care: Bakti Sosial Kesehatan & Sembako',
      category: 'social',
      categoryLabel: 'BAITANI PEDULI',
      displayDate: '08 AGUSTUS 2026',
      time: '08:00 - 14:00 WIB',
      location: 'Kawasan Komunitas Binaan Jakarta Barat',
      speaker: 'Tim Dokter & Relawan Baitani Care',
      imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
      description: 'Pemeriksaan kesehatan gratis, pengobatan umum, dan penyaluran 1.000 paket sembako cinta kasih bagi warga pra-sejahtera di sekitar gedung gereja.',
      registrationOpen: true,
      quota: 'Terbuka Relawan',
    },
    {
      id: 'event-6',
      title: 'Baptisan Kudus & Kelas Fondasi Iman',
      category: 'special',
      categoryLabel: 'SAKRAMEN KUDUS',
      displayDate: '23 AGUSTUS 2026',
      time: '13:00 - 15:30 WIB',
      location: 'Baptistry Room Gedung Baitani',
      speaker: 'Pdt. Andreas Wicaksono',
      imageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1200&auto=format&fit=crop',
      description: 'Deklarasi iman publik melalui sakramen baptisan selam setelah menyelesaikan 3 sesi pembekalan doktrin keselamatan dasar.',
      registrationOpen: true,
      quota: 'Pendaftaran Dibuka',
    },
  ];

  const categories = [
    { id: 'all', label: 'Semua Acara' },
    { id: 'special', label: 'Konferensi & Khusus' },
    { id: 'youth', label: 'Youth & Young Adult' },
    { id: 'family', label: 'Keluarga & Pasangan' },
    { id: 'prayer', label: 'Doa Syafaat' },
    { id: 'social', label: 'Bakti Sosial' },
  ];

  const filteredEvents = events.filter((e) => {
    const matchCategory = selectedCategory === 'all' || e.category === selectedCategory;
    const matchSearch =
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.speaker.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleRegister = (id: string) => {
    setRegisteredEventId(id);
    setTimeout(() => {
      setRegisteredEventId(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#fafafa]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero Header */}
        <PageHero
          category="AGENDA & KALENDER GEREJA"
          title="ACARA KITA"
          titleAccent="Moments of Encounter & Fellowship"
          subtitle="Temukan jadwal ibadah khusus, konferensi tahunan, pembekalan keluarga, dan pelayanan sosial yang dirancang untuk memperlengkapi pertumbuhan rohani Anda."
          breadcrumbCurrent="Acara Kita"
        />

        {/* Filter & Search Bar */}
        <section className="py-8 bg-[#0a0a0d] border-b border-white/10 sticky top-[72px] z-30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all min-h-[40px] ${
                      selectedCategory === c.id
                        ? 'bg-white text-black shadow-lg'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari acara, topik, pembicara..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Events Grid Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-24 bg-zinc-950 border border-white/10 rounded-2xl p-8">
                <p className="text-zinc-400 text-base mb-4 font-light">
                  Tidak ada agenda acara yang cocok dengan kriteria pencarian Anda.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                        <img
                          src={evt.imageUrl}
                          alt={evt.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                        
                        {/* Tag Pill */}
                        <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-[#d4af37]/40 text-[#f3e5ab] px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase">
                          {evt.categoryLabel}
                        </div>

                        {/* Quota Badge */}
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/15 text-white px-2.5 py-1 rounded text-[10px] font-mono font-semibold">
                          {evt.quota}
                        </div>
                      </div>

                      {/* Content Box */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#d4af37] mb-2 uppercase">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{evt.displayDate}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#d4af37] transition-colors">
                          {evt.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3">
                          {evt.description}
                        </p>

                        <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-zinc-400 font-light">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                            <span>{evt.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                            <span className="truncate">{evt.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                            <span className="truncate">{evt.speaker}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="p-6 pt-0">
                      {evt.registrationOpen ? (
                        <button
                          type="button"
                          onClick={() => handleRegister(evt.id)}
                          className={`btn-magnetic w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all min-h-[44px] ${
                            registeredEventId === evt.id
                              ? 'bg-emerald-600 text-white'
                              : 'bg-white hover:bg-[#f3e5ab] text-black shadow-lg active:scale-95'
                          }`}
                        >
                          {registeredEventId === evt.id ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Pendaftaran Berhasil!</span>
                            </>
                          ) : (
                            <>
                              <span>DAFTAR SEKARANG</span>
                              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                            </>
                          )}
                        </button>
                      ) : (
                        <div className="w-full py-3.5 rounded-full border border-white/10 text-center text-xs text-zinc-500 font-bold uppercase tracking-wider">
                          Terbuka Tanpa Registrasi
                        </div>
                      )}
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* FAQ Strip */}
        <section className="py-20 border-t border-white/10 bg-[#070709]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase text-center mb-12">
              Pertanyaan Seputar Pendaftaran Acara
            </h2>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-zinc-950 border border-white/10">
                <h3 className="text-sm font-bold text-white mb-2">
                  Apakah seluruh acara dikenakan biaya registrasi?
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Sebagian besar ibadah raya, malam doa, dan persekutuan bulanan bersifat gratis dan terbuka untuk umum. Biaya pendaftaran hanya berlaku untuk event retreat/camp yang mencakup akomodasi dan konsumsi.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-zinc-950 border border-white/10">
                <h3 className="text-sm font-bold text-white mb-2">
                  Apakah tersedia penitipan anak / ibadah sekolah minggu selama acara berlangsung?
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Ya, pada setiap Ibadah Raya Minggu dan Konferensi Umum, tim Baitani Kids menyediakan ibadah anak yang interaktif dan aman bagi usia 2 hingga 12 tahun.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
