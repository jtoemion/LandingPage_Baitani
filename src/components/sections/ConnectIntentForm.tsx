'use client';

import React, { useState } from 'react';
import { UserCheck, HandHeart, HeartHandshake, HelpCircle, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { IntentType } from '@/types';

export default function ConnectIntentForm() {
  const [selectedIntent, setSelectedIntent] = useState<IntentType>('new');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
    preferredContact: 'whatsapp' as 'whatsapp' | 'call',
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
    
    // Simulate instant success
    setIsSubmitted(true);
  };

  return (
    <section id="koneksi" className="py-20 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Terhubung Dengan Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Kami Rindu Menyapa & Melayani Anda
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Pilihlah salah satu kebutuhan Anda di bawah ini agar tim pastoral kami dapat terhubung secara tepat dan personal.
          </p>
        </div>

        {/* 4 Intent Cards Grid (Component 2.8 spec) */}
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
                className={`p-5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between min-h-[160px] ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/80 shadow-md ring-2 ring-blue-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  )}
                </div>
                <div>
                  <h3 className={`font-bold text-base mb-1 ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-6 sm:p-10 relative overflow-hidden">
          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Terima Kasih, {formData.fullName}!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mb-6 leading-relaxed">
                Pesan Anda telah kami terima. Tim Pastoral Care Gereja Baitani akan segera menghubungi Anda melalui{' '}
                <span className="font-semibold text-slate-800">
                  {formData.preferredContact === 'whatsapp' ? 'WhatsApp' : 'Panggilan Telepon'} ({formData.phone})
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
                  });
                }}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors min-h-[44px]"
              >
                Kirim Pesan Lainnya
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-100 pb-4 mb-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Formulir: {intentCards.find((c) => c.id === selectedIntent)?.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Data Anda dijaga kerahasiaannya dan hanya digunakan untuk keperluan pelayanan pastoral.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Nama Lengkap <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Nomor WhatsApp / HP <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Alamat Email (Opsional)
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="budi@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Metode Kontak Pilihan
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                      className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg border text-xs font-medium transition-colors min-h-[44px] ${
                        formData.preferredContact === 'whatsapp'
                          ? 'border-blue-600 bg-blue-50 text-blue-800 font-semibold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 text-green-600" />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: 'call' })}
                      className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg border text-xs font-medium transition-colors min-h-[44px] ${
                        formData.preferredContact === 'call'
                          ? 'border-blue-600 bg-blue-50 text-blue-800 font-semibold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>Telepon Suara</span>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  {selectedIntent === 'prayer'
                    ? 'Pokok Doa / Permohonan Anda'
                    : selectedIntent === 'serve'
                    ? 'Bidang Pelayanan yang Diminati & Pengalaman'
                    : 'Catatan atau Pertanyaan'}
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={
                    selectedIntent === 'prayer'
                      ? 'Tuliskan pokok doa atau kebutuhan Anda di sini...'
                      : 'Ceritakan sedikit tentang Anda...'
                  }
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 active:scale-98 transition-all min-h-[48px]"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Formulir Terhubung</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
