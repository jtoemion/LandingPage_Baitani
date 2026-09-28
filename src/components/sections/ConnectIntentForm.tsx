'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { UserCheck, HandHeart, HeartHandshake, HelpCircle, Send, CheckCircle2, MessageSquare, Lock, ArrowUpRight } from 'lucide-react';
import { IntentType } from '@/types';

export default function ConnectIntentForm() {
  const [selectedIntent, setSelectedIntent] = useState<IntentType>('new');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
    preferredContact: 'whatsapp' as 'whatsapp' | 'call',
    isConfidential: false,
    preferredMinistry: 'kids',
    preferredContactTime: 'morning',
    preferredServiceVisit: 'raya-1',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const intentCards = [
    {
      id: 'new' as IntentType,
      title: 'Saya Jemaat Baru',
      description: 'Ingin berkenalan, mengenal gereja lebih dekat, atau menjadwalkan kunjungan ibadah.',
      icon: UserCheck,
    },
    {
      id: 'prayer' as IntentType,
      title: 'Permohonan Doa',
      description: 'Tim pendoa syafaat kami siap menopang pergumulan, kesembuhan, atau kebutuhan Anda.',
      icon: HeartHandshake,
    },
    {
      id: 'serve' as IntentType,
      title: 'Ingin Melayani',
      description: 'Rindu mempersembahkan talenta di tim musik, multimedia, anak, atau diakonia sosial.',
      icon: HandHeart,
    },
    {
      id: 'counseling' as IntentType,
      title: 'Konseling Pastoral',
      description: 'Membutuhkan bimbingan rohani, konseling keluarga, atau konsultasi pastoral pribadi.',
      icon: HelpCircle,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="koneksi" className="py-24 bg-black text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-2">
            TERHUBUNG DENGAN KELUARGA ALLAH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
            Connect With Us
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light mb-6">
            Pilihlah salah satu kebutuhan Anda di bawah ini agar tim pastoral kami dapat melayani dan terhubung secara pribadi.
          </p>
          <Link
            href="/koneksi"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-400 hover:text-amber-300 border-b border-amber-400/40 pb-1 transition-colors"
          >
            <span>PANDUAN JEMAAT BARU & 4 LANGKAH PERTUMBUHAN</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Intent Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {intentCards.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedIntent === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSelectedIntent(item.id);
                  setIsSubmitted(false);
                }}
                className={`p-6 rounded-2xl text-left border transition-all flex flex-col justify-between min-h-[170px] ${
                  isSelected
                    ? 'border-white bg-zinc-900 shadow-2xl ring-1 ring-white/30'
                    : 'border-white/10 bg-zinc-950 hover:border-white/25 hover:bg-zinc-900/60'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                  )}
                </div>
                <div>
                  <h3 className={`font-bold text-sm sm:text-base mb-1.5 ${isSelected ? 'text-white' : 'text-zinc-200'}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Form Container */}
        <div className="bg-zinc-950 rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-4 shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Terima Kasih, {formData.fullName}!
              </h3>
              <p className="text-zinc-400 text-sm max-w-md mb-6 leading-relaxed font-light">
                Pesan Anda telah kami terima. Tim Pastoral Care Gereja Baitani akan segera menghubungi Anda melalui{' '}
                <span className="font-semibold text-white">
                  {formData.preferredContact === 'whatsapp' ? 'WhatsApp' : 'Panggilan Suara'} ({formData.phone})
                </span>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    phone: '',
                    email: '',
                    notes: '',
                    preferredContact: 'whatsapp',
                    isConfidential: false,
                    preferredMinistry: 'kids',
                    preferredContactTime: 'morning',
                    preferredServiceVisit: 'raya-1',
                  });
                }}
                className="px-8 py-3 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold tracking-wider uppercase transition-all min-h-[44px]"
              >
                KIRIM PESAN LAINNYA
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-white/10 pb-4 mb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white tracking-wide uppercase">
                    Formulir: {intentCards.find((c) => c.id === selectedIntent)?.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    Data Anda dijaga kerahasiaannya dan hanya digunakan untuk keperluan pelayanan pastoral.
                  </p>
                </div>
              </div>

              {/* Standard Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Nama Lengkap <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white focus:outline-none focus:border-white text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Nomor WhatsApp / HP <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white focus:outline-none focus:border-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Alamat Email (Opsional)
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="budi@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white focus:outline-none focus:border-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Metode Kontak Pilihan
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                      className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all min-h-[44px] ${
                        formData.preferredContact === 'whatsapp'
                          ? 'border-white bg-white text-black'
                          : 'border-white/15 bg-black text-zinc-400 hover:text-white'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 text-green-500" />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: 'call' })}
                      className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all min-h-[44px] ${
                        formData.preferredContact === 'call'
                          ? 'border-white bg-white text-black'
                          : 'border-white/15 bg-black text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span>Telepon</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Dynamic Contextual Inputs */}
              {selectedIntent === 'new' && (
                <div>
                  <label htmlFor="serviceVisit" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Rencana Kehadiran Ibadah
                  </label>
                  <select
                    id="serviceVisit"
                    value={formData.preferredServiceVisit}
                    onChange={(e) => setFormData({ ...formData, preferredServiceVisit: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white focus:outline-none focus:border-white text-sm"
                  >
                    <option value="raya-1">Ibadah Raya 1 (Minggu pk 07:30 WIB)</option>
                    <option value="raya-2">Ibadah Raya 2 (Minggu pk 10:30 WIB)</option>
                    <option value="youth">Baitani Youth Movement (Sabtu pk 17:00 WIB)</option>
                    <option value="undecided">Belum menentukan / Ingin bertanya lebih dulu</option>
                  </select>
                </div>
              )}

              {selectedIntent === 'serve' && (
                <div>
                  <label htmlFor="preferredMinistry" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Bidang Pelayanan yang Diminati
                  </label>
                  <select
                    id="preferredMinistry"
                    value={formData.preferredMinistry}
                    onChange={(e) => setFormData({ ...formData, preferredMinistry: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white focus:outline-none focus:border-white text-sm"
                  >
                    <option value="kids">Baitani Kids (Sekolah Minggu)</option>
                    <option value="youth">Youth & Remaja</option>
                    <option value="worship">Worship Team (Singer / Pemain Musik)</option>
                    <option value="multimedia">Multimedia, Visual & Sound System</option>
                    <option value="diakonia">Diakonia Kasih & Aksi Sosial</option>
                    <option value="usher">Penerima Tamu / Usher / Hospitality</option>
                  </select>
                </div>
              )}

              {selectedIntent === 'counseling' && (
                <div>
                  <label htmlFor="contactTime" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Waktu Konseling yang Paling Nyaman Dihubungi
                  </label>
                  <select
                    id="contactTime"
                    value={formData.preferredContactTime}
                    onChange={(e) => setFormData({ ...formData, preferredContactTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white focus:outline-none focus:border-white text-sm"
                  >
                    <option value="morning">Pagi Hari (pk 09:00 - 12:00 WIB)</option>
                    <option value="afternoon">Siang Hari (pk 13:00 - 16:00 WIB)</option>
                    <option value="evening">Malam Hari (pk 18:30 - 20:30 WIB)</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  {selectedIntent === 'prayer'
                    ? 'Pokok Doa / Kebutuhan yang Ingin Didukung'
                    : selectedIntent === 'serve'
                    ? 'Pengalaman atau Talenta yang Dimiliki'
                    : selectedIntent === 'counseling'
                    ? 'Garis Besar Situasi / Topik Konseling'
                    : 'Catatan Tambahan atau Pertanyaan Anda'}
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={
                    selectedIntent === 'prayer'
                      ? 'Tuliskan pokok doa, pergumulan, atau kondisi kesehatan Anda di sini...'
                      : selectedIntent === 'serve'
                      ? 'Ceritakan alat musik yang bisa dimainkan, pengalaman melayani sebelumnya, dll...'
                      : selectedIntent === 'counseling'
                      ? 'Tuliskan secara singkat topik yang ingin dikonsultasikan bersama pastor...'
                      : 'Apakah ada hal khusus yang ingin Anda tanyakan kepada kami?'
                  }
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-black text-white focus:outline-none focus:border-white text-sm font-light"
                />
              </div>

              {selectedIntent === 'prayer' && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-black border border-white/15">
                  <input
                    id="confidentialCheck"
                    type="checkbox"
                    checked={formData.isConfidential}
                    onChange={(e) => setFormData({ ...formData, isConfidential: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-white focus:ring-white cursor-pointer"
                  />
                  <label htmlFor="confidentialCheck" className="text-xs text-zinc-300 cursor-pointer flex items-center gap-1.5 font-light">
                    <Lock className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                    <span>
                      Pokok doa ini bersifat <strong>rahasia</strong> (hanya dibagikan ke Gembala Sidang & Tim Pendoa Syafaat Inti).
                    </span>
                  </label>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#f3e5ab] text-black font-bold text-xs tracking-[0.18em] uppercase transition-all shadow-xl active:scale-95 min-h-[48px]"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>KIRIM FORMULIR TERHUBUNG</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
