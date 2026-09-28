'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { Camera, Play, Quote, Calendar, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface HighlightItem {
  id: string;
  title: string;
  category: 'all' | 'worship' | 'baptism' | 'youth' | 'social' | 'community';
  categoryLabel: string;
  date: string;
  imageUrl: string;
  description: string;
}

export default function SorotanPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const galleryItems: HighlightItem[] = [
    {
      id: 'g-1',
      title: 'Praise & Worship Night: Hadirat yang Nyata',
      category: 'worship',
      categoryLabel: 'IBADAH RAYA',
      date: 'SEPTEMBER 2026',
      imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop',
      description: 'Ribuan jemaat bersatu hati menyembah Tuhan dalam suasana yang penuh lawatan dan kebebasan Roh.',
    },
    {
      id: 'g-2',
      title: 'Sakramen Baptisan Selam 45 Jiwa Baru',
      category: 'baptism',
      categoryLabel: 'BAPTISAN KUDUS',
      date: 'AGUSTUS 2026',
      imageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1000&auto=format&fit=crop',
      description: 'Momen sakral saat 45 orang mendeklarasikan iman percaya mereka kepada Kristus melalui baptisan air.',
    },
    {
      id: 'g-3',
      title: 'Limitless Youth Night: Revival Generation',
      category: 'youth',
      categoryLabel: 'YOUTH MOVEMENT',
      date: 'AGUSTUS 2026',
      imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop',
      description: 'Anak-anak muda meresponi panggilan Tuhan untuk menjadi terang di sekolah dan kampus masing-masing.',
    },
    {
      id: 'g-4',
      title: 'Baitani Care: Pembagian 1,000 Paket Kasih',
      category: 'social',
      categoryLabel: 'BAITANI PEDULI',
      date: 'JULI 2026',
      imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop',
      description: 'Menyalurkan bantuan bahan pokok dan pemeriksaan kesehatan cuma-cuma bagi warga sekitar gedung gereja.',
    },
    {
      id: 'g-5',
      title: 'Connect Group Leaders Gathering & Fellowship',
      category: 'community',
      categoryLabel: 'CONNECT GROUP',
      date: 'JULI 2026',
      imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000&auto=format&fit=crop',
      description: 'Pembekalan dan kebersamaan para pemimpin sel untuk saling menopang dan menguatkan visi pemuridan.',
    },
    {
      id: 'g-6',
      title: 'Sunday School Musical: Jesus My Hero',
      category: 'worship',
      categoryLabel: 'KIDS CHURCH',
      date: 'JUNI 2026',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
      description: 'Pentas drama musikal anak-anak sekolah minggu yang penuh tawa, pujian sukacita, dan kebenaran firman.',
    },
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      title: 'Profesional & Anggota Pro-Connect',
      quote: 'Dahulu saya datang ke gereja hanya sebagai rutinitas. Namun sejak bergabung di Connect Group, iman saya bertumbuh luar biasa. Saya belajar bagaimana menjadi teladan Kristus di tempat kerja dan memiliki sahabat-sahabat doa yang tulus.',
    },
    {
      name: 'Jessica Amanda',
      title: 'Mahasiswi & Limitless Youth',
      quote: 'Di masa-masa terpuruk saat menghadapi depresi dan kesepian, tim pendoa Baitani setia menopang saya. Di sinilah saya menemukan identitas sejati di dalam Tuhan dan pemulihan luka batin yang nyata.',
    },
    {
      name: 'Keluarga Hartono & Grace',
      title: 'Jemaat Kingdom Family',
      quote: 'Seminar pernikahan dan persekutuan pasutri di Baitani telah menyelamatkan rumah tangga kami yang sempat berada di ambang perpisahan. Kami belajar mengampuni dan membangun mezbah doa keluarga setiap hari.',
    },
  ];

  const categories = [
    { id: 'all', label: 'Semua Momen' },
    { id: 'worship', label: 'Ibadah Raya' },
    { id: 'baptism', label: 'Baptisan Kudus' },
    { id: 'youth', label: 'Youth Movement' },
    { id: 'social', label: 'Baitani Care' },
    { id: 'community', label: 'Connect Group' },
  ];

  const filteredGallery = galleryItems.filter(
    (item) => selectedFilter === 'all' || item.category === selectedFilter
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#fafafa]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="DOKUMENTASI & KESAKSIAN"
          title="SOROTAN & MOMEN GEREJA"
          titleAccent="Witnessing His Faithfulness"
          subtitle="Setiap senyuman, doa yang dijawab, dan jiwa yang dipulihkan adalah bukti kasih Tuhan yang nyata di tengah-tengah jemaat Gereja Baitani."
          breadcrumbCurrent="Sorotan & Galeri"
        />

        {/* Filter Bar */}
        <section className="py-8 bg-[#0a0a0d] border-b border-white/10 sticky top-[72px] z-30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedFilter(c.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all min-h-[40px] ${
                    selectedFilter === c.id
                      ? 'bg-white text-black shadow-lg ring-2 ring-[#d4af37]'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#d4af37]/40 text-[#f3e5ab] px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase">
                      {item.categoryLabel}
                    </div>

                    <div className="absolute bottom-3 left-4 text-xs font-mono font-bold text-zinc-400 uppercase">
                      {item.date}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#d4af37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonies Section */}
        <section className="py-24 bg-[#070709] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-2">
                KESAKSIAN JEMAAT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
                Cerita Pemulihan Hidup
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Kisah nyata tentang bagaimana kasih Tuhan mengubah masa lalu menjadi masa depan yang penuh pengharapan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testi, idx) => (
                <div
                  key={`testi-${idx}`}
                  className="p-8 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col justify-between relative shadow-xl"
                >
                  <Quote className="w-10 h-10 text-[#d4af37]/20 mb-4" />
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6 italic">
                    &ldquo;{testi.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm font-bold text-white">{testi.name}</h4>
                    <span className="text-[11px] text-[#d4af37] font-mono">{testi.title}</span>
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
