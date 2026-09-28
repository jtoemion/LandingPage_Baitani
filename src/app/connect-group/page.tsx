'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { Users, Heart, BookOpen, Shield, Send, CheckCircle2, ArrowRight } from 'lucide-react';

interface GroupCategory {
  id: string;
  name: string;
  ageRange: string;
  tagline: string;
  description: string;
  meetingTime: string;
  imageUrl: string;
}

export default function ConnectGroupPage() {
  const [selectedCategory, setSelectedCategory] = useState('pro');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Jakarta',
    category: 'pro',
    preferredDay: 'Jumat Malam',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories: GroupCategory[] = [
    {
      id: 'pro',
      name: 'Pro-Connect (Young Professionals & Campus)',
      ageRange: 'Usia 20 - 35 Tahun',
      tagline: 'Faith in Career & Purpose in Life',
      description: 'Komunitas bagi mahasiswa, fresh graduates, dan profesional muda. Berdiskusi seputar integritas kerja, karir, relasi pernikahan masa depan, dan menjadi garam di dunia kerja.',
      meetingTime: 'Setiap Jumat pk 19:30 WIB',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'youth',
      name: 'Limitless Youth (Teens & High School)',
      ageRange: 'Usia 13 - 19 Tahun',
      tagline: 'Bold, Passionate, and Unashamed',
      description: 'Wadah bagi generasi muda SMP dan SMA untuk menemukan jati diri dalam Kristus, mempererat pertemanan yang sehat, dan belajar firman Tuhan dengan cara yang relevan.',
      meetingTime: 'Setiap Sabtu pk 15:00 WIB',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'family',
      name: 'Kingdom Family (Married Couples & Parents)',
      ageRange: 'Keluarga & Pasangan Menikah',
      tagline: 'Building Christ-Centered Homes',
      description: 'Kelompok sel bagi pasutri muda dan orang tua untuk saling menguatkan dalam mendidik anak (parenting Alkitabiah), keintiman rumah tangga, dan pemuridan keluarga.',
      meetingTime: 'Setiap Sabtu pk 18:00 WIB',
      imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'kids',
      name: 'Baitani Junior Kids Cell',
      ageRange: 'Usia 5 - 12 Tahun',
      tagline: 'Growing in Wisdom & Grace',
      description: 'Pemuridan anak usia sekolah dasar yang dikemas lewat cerita Alkitab interaktif, pujian kreatif, aktivitas mewarnai, dan doa bersama mentor anak.',
      meetingTime: 'Setiap Minggu pk 10:30 WIB (Saat Ibadah Raya 2)',
      imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'golden',
      name: 'Golden Age Fellowship (Senior Jemaat)',
      ageRange: 'Usia 55 Tahun ke Atas',
      tagline: 'Evergreen Faith & Blessed Legacy',
      description: 'Komunitas hangat bagi jemaat senior untuk menikmati masa pensiun dengan persekutuan yang intim, doa syafaat yang tekun, dan mewariskan teladan iman bagi anak cucu.',
      meetingTime: 'Setiap Kamis pk 10:00 WIB',
      imageUrl: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const activeCategory = categories.find((c) => c.id === selectedCategory) || categories[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#fafafa]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="KOMUNITAS SEL & PEMURIDAN"
          title="CONNECT GROUP"
          titleAccent="A Home for Everyone"
          subtitle="Gereja bukanlah sekadar gedung atau acara seremonial mingguan. Connect Group adalah ruang hangat di mana Anda bertumbuh, berbagi kehidupan, dan dimuridkan bersama."
          breadcrumbCurrent="Connect Group"
        />

        {/* 4 Pillars Section */}
        <section className="py-20 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10">
                <Users className="w-6 h-6 text-[#d4af37] mb-4" />
                <h3 className="text-base font-bold text-white mb-2">Keluarga Rohani</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Tempat di mana nama Anda dikenal, pergumulan Anda didengar, dan sukacita Anda dirayakan bersama.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10">
                <BookOpen className="w-6 h-6 text-[#d4af37] mb-4" />
                <h3 className="text-base font-bold text-white mb-2">Aplikasi Firman</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Mendiskusikan khotbah minggu secara praktis agar firman Tuhan sungguh bekerja dalam kehidupan sehari-hari.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10">
                <Heart className="w-6 h-6 text-[#d4af37] mb-4" />
                <h3 className="text-base font-bold text-white mb-2">Saling Mendoakan</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Dukungan doa tanpa henti di saat Anda menghadapi masa sulit, sakit, kedukaan, atau keputusan penting.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10">
                <Shield className="w-6 h-6 text-[#d4af37] mb-4" />
                <h3 className="text-base font-bold text-white mb-2">Akuntabilitas Karakter</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Membangun integritas dan menjaga hidup tetap kudus melalui persahabatan sejati yang saling mengoreksi dalam kasih.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Categories Showcase */}
        <section className="py-24 bg-[#070709] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-zinc-400 block mb-2">
                PILIH KOMUNITAS SESUAI TAHAP HIDUP ANDA
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                5 Kategori Connect Group
              </h2>
            </div>

            {/* Category Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-white/10 pb-4">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all min-h-[40px] ${
                    selectedCategory === c.id
                      ? 'bg-white text-black shadow-lg ring-2 ring-[#d4af37]'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  {c.name.split(' (')[0]}
                </button>
              ))}
            </div>

            {/* Active Category Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-10">
              
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src={activeCategory.imageUrl}
                  alt={activeCategory.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono text-[#d4af37] font-bold uppercase tracking-wider block mb-1">
                    {activeCategory.ageRange}
                  </span>
                  <h3 className="text-lg font-bold text-white">{activeCategory.tagline}</h3>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#d4af37] block mb-2">
                    KATEGORI KOMUNITAS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mb-3">
                    {activeCategory.name}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                    {activeCategory.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black border border-white/10 text-xs">
                  <p className="text-zinc-400 font-mono mb-1 uppercase font-bold">WAKTU PERTEMUAN RUTIN:</p>
                  <p className="text-white font-semibold">{activeCategory.meetingTime}</p>
                </div>

                <a
                  href="#daftar-cg"
                  className="btn-magnetic inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#f3e5ab] text-black font-bold text-xs tracking-wider uppercase shadow-xl"
                >
                  <span>GABUNG DENGAN CG INI</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Join Connect Group Form */}
        <section id="daftar-cg" className="py-24 bg-black">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-2">
                LANGKAH AWAL BERGABUNG
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-4">
                Formulir Pendaftaran Connect Group
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Isi data singkat Anda di bawah ini. Tim koordinator CG kami akan menghubungi Anda dalam waktu 1x24 jam untuk menghubungkan Anda dengan kelompok sel terdekat.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-zinc-950 border border-emerald-500/30 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Terima Kasih, {formData.name}!</h3>
                <p className="text-zinc-300 text-sm font-light max-w-md mx-auto mb-6">
                  Pendaftaran Connect Group Anda telah kami terima. Koordinator wilayah kami akan segera menghubungi nomor WhatsApp Anda.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-bold uppercase text-white hover:border-white transition-colors"
                >
                  Daftarkan Anggota Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-2xl bg-zinc-950 border border-white/10 space-y-5 shadow-2xl">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Nama Lengkap <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama lengkap Anda"
                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Nomor WhatsApp / HP <span className="text-[#d4af37]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+62 812..."
                      className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white text-sm focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@anda.com"
                      className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white text-sm focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Wilayah / Kota Tempat Tinggal
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white text-sm focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="Jakarta Barat">Jakarta Barat</option>
                      <option value="Jakarta Pusat">Jakarta Pusat</option>
                      <option value="Jakarta Selatan">Jakarta Selatan</option>
                      <option value="Jakarta Utara / Timur">Jakarta Utara / Timur</option>
                      <option value="Tangerang / BSD">Tangerang / BSD</option>
                      <option value="Surabaya">Surabaya</option>
                      <option value="Bali">Bali</option>
                      <option value="Medan">Medan</option>
                      <option value="Lainnya">Kota Lainnya / Online</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Kategori Pilihan
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white text-sm focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="pro">Pro-Connect (Mahasiswa & Profesional)</option>
                      <option value="youth">Limitless Youth (Remaja)</option>
                      <option value="family">Kingdom Family (Keluarga/Pasutri)</option>
                      <option value="golden">Golden Age (Senior)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-magnetic w-full py-4 rounded-full bg-white hover:bg-[#f3e5ab] text-black font-bold text-xs tracking-widest uppercase transition-all shadow-xl min-h-[48px] flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>KIRIM PENDAFTARAN CONNECT GROUP</span>
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
