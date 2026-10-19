'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Servant {
  id: string;
  name: string;
  role: string;
  roleGroup: 'mimbar' | 'music' | 'media' | 'usher';
  tag?: string;
  confirmed: boolean;
  notes?: string;
}

export default function PortalRosterPage() {
  const [selectedService, setSelectedService] = useState('raya1');
  const [selectedDate, setSelectedDate] = useState('18 Okt 2026');
  const [toastMessage, setToastMessage] = useState('');

  const [servants, setServants] = useState<Servant[]>([
    // Mimbar
    {
      id: 'S-01',
      name: 'Pdt. Kristianto, M.Th.',
      role: 'Pengkhotbah / Firman Tuhan',
      roleGroup: 'mimbar',
      tag: 'Utama',
      confirmed: true,
    },
    {
      id: 'S-02',
      name: 'Ibu Wiesye Mirnawati',
      role: 'Liturgis / Pemimpin Pujian (WL)',
      roleGroup: 'mimbar',
      confirmed: true,
    },
    {
      id: 'S-03',
      name: 'Pdt. Salim Bastaman',
      role: 'Pendoa Syafaat & Pengurapan',
      roleGroup: 'mimbar',
      confirmed: true,
    },
    {
      id: 'S-04',
      name: 'Bp. Eddy Mulyadi & Bp. Thio Jan Fung',
      role: 'Pelayan Meja Perjamuan Kudus',
      roleGroup: 'mimbar',
      confirmed: true,
    },

    // Musik
    {
      id: 'S-05',
      name: 'Bpk. Ari',
      role: 'Keyboard / Piano',
      roleGroup: 'music',
      confirmed: true,
    },
    {
      id: 'S-06',
      name: 'Bp. Daniel Dean Darmawan',
      role: 'Gitar Akustik',
      roleGroup: 'music',
      confirmed: false,
      notes: 'Menunggu Konfirmasi',
    },
    {
      id: 'S-07',
      name: 'Sdr. Reginald',
      role: 'Electric Bass',
      roleGroup: 'music',
      confirmed: true,
    },
    {
      id: 'S-08',
      name: 'Sdr. Yanes',
      role: 'Drums & Perkusi',
      roleGroup: 'music',
      confirmed: true,
    },
    {
      id: 'S-09',
      name: 'Sdri. Lily Siwalette & Sdri. Cheren Masria',
      role: 'Tim Singers / Backing Vocal',
      roleGroup: 'music',
      confirmed: true,
      notes: 'Latihan: Sabtu, 17:00 WIB',
    },

    // Media
    {
      id: 'S-10',
      name: 'Sdr. Reginald Pratama',
      role: 'Sound Engineer / Mixing',
      roleGroup: 'media',
      confirmed: true,
    },
    {
      id: 'S-11',
      name: 'Sdri. Pricilia',
      role: 'Operator EasyWorship & Lirik',
      roleGroup: 'media',
      confirmed: true,
    },
    {
      id: 'S-12',
      name: 'Sdr. Kevin',
      role: 'Live Streaming & PTZ Camera',
      roleGroup: 'media',
      confirmed: true,
    },

    // Usher
    {
      id: 'S-13',
      name: 'Ibu Susan Sudarma & Ibu Tenny',
      role: 'Pintu Masuk Utama & Salam',
      roleGroup: 'usher',
      confirmed: true,
    },
    {
      id: 'S-14',
      name: 'Bp. Natanael',
      role: 'Pengatur Parkir & Tempat Duduk',
      roleGroup: 'usher',
      confirmed: true,
    },
    {
      id: 'S-15',
      name: 'Ibu Fung Jie & Ibu Mexy Juliana',
      role: 'Petugas Kolekte & Kantong',
      roleGroup: 'usher',
      confirmed: true,
    },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const toggleConfirmStatus = (id: string) => {
    setServants((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          const newStatus = !s.confirmed;
          showToast(`Status kehadiran ${s.name} diubah menjadi: ${newStatus ? 'Siap Hadir ✓' : 'Menunggu Konfirmasi'}`);
          return { ...s, confirmed: newStatus };
        }
        return s;
      })
    );
  };

  const confirmedCount = servants.filter((s) => s.confirmed).length;
  const pendingCount = servants.filter((s) => !s.confirmed).length;

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 p-4 rounded-xl bg-white border border-[#785600] text-[#1f1b16] shadow-xl text-xs flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-200">
          <span className="material-symbols-outlined text-[#785600] text-[20px]">check_circle</span>
          <span className="font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Pastoral Header Bar */}
      <div className="relative overflow-hidden rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-[#eae1d9]">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#ffdea5]/30 blur-3xl pointer-events-none" />
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbf2ea] text-[#785600] text-xs font-bold border border-[#eae1d9]">
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              <span className="uppercase tracking-wider">Sekretariat Liturgi &amp; Pengerja Altar</span>
            </div>
            <h1 className="font-headline-lg text-2xl md:text-3xl text-[#785600] font-bold tracking-tight">
              Roster Pelayanan Ibadah Raya &amp; Jam Doa
            </h1>
            <p className="font-body-md text-xs sm:text-sm text-[#665d52]">
              Jadwal penugasan pengerja pelayan altar, pemusik, liturgis, multimedia, usher, dan konfirmasi kehadiran
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#fbf2ea] hover:bg-[#f6ece4] text-[#1f1b16] text-xs font-semibold border border-[#d2c5b2] transition-all shadow-xs"
            >
              <span className="material-symbols-outlined text-[16px] text-[#785600]">print</span>
              <span>Cetak Lembar Warta</span>
            </button>
            <button
              type="button"
              onClick={() => showToast('Notifikasi pengingat penugasan dikirimkan ke 24 pelayan via WhatsApp!')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#fbf2ea] hover:bg-[#f6ece4] text-[#1f1b16] text-xs font-semibold border border-[#d2c5b2] transition-all shadow-xs"
            >
              <span className="material-symbols-outlined text-[16px] text-[#785600]">send_to_mobile</span>
              <span>Notifikasi WA Massal</span>
            </button>
            <button
              type="button"
              onClick={() => showToast('Membuka formulir penugasan pelayan baru...')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#785600] text-white text-xs font-bold hover:bg-[#5a4000] shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">person_add</span>
              <span>+ Tambah Penugasan</span>
            </button>
          </div>
        </div>

        {/* Service Selection & Date Selector Ribbon */}
        <div className="mt-6 pt-5 bg-[#fbf2ea]/70 -mx-6 -mb-6 p-6 rounded-b-2xl border-t border-[#eae1d9] flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          {/* Service Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 xl:pb-0 no-scrollbar text-xs">
            {[
              { id: 'raya1', label: 'Ibadah Raya 1 (Pagi 07:00 WIB)', icon: 'church' },
              { id: 'raya2', label: 'Ibadah Raya 2 (Siang 10:00 WIB)', icon: 'wb_sunny' },
              { id: 'sm', label: 'Sekolah Minggu (08:30 WIB)', icon: 'child_care' },
              { id: 'doa', label: 'Jam Doa Syafaat (Rabu 18:00)', icon: 'nights_stay' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedService(tab.id)}
                className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                  selectedService === tab.id
                    ? 'bg-[#785600] text-white shadow-sm'
                    : 'bg-white text-[#4e4637] hover:bg-[#f6ece4] border border-[#eae1d9]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Date Toggles */}
          <div className="flex items-center gap-2 self-start xl:self-auto text-xs">
            <button
              type="button"
              onClick={() => setSelectedDate('18 Okt 2026')}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 shadow-xs border ${
                selectedDate === '18 Okt 2026'
                  ? 'bg-white text-[#785600] border-[#785600]'
                  : 'bg-transparent text-[#665d52] border-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-[16px] text-[#785600]">event</span>
              <span>Minggu, 18 Okt 2026</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedDate('25 Okt 2026')}
              className={`px-3 py-1.5 rounded-xl font-medium flex items-center gap-1 transition-colors ${
                selectedDate === '25 Okt 2026'
                  ? 'bg-white text-[#785600] border border-[#785600] font-bold'
                  : 'text-[#665d52] hover:bg-white'
              }`}
            >
              <span>Minggu Depan: 25 Okt</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Live Status Metric Tiles (4 tiles) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#eae1d9] flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#f6ece4] flex items-center justify-center text-[#785600]">
            <span className="material-symbols-outlined text-[24px]">groups</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-[#1f1b16]">{servants.length + 9} Jiwa</span>
            <span className="text-xs text-[#665d52]">Pelayan Ditugaskan</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#eae1d9] flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#ffdea5]/50 flex items-center justify-center text-[#785600]">
            <span className="material-symbols-outlined text-[24px]">check_circle</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-emerald-800">{confirmedCount + 7} Pelayan</span>
            <span className="text-xs text-emerald-700 font-semibold">Terkonfirmasi Hadir ✓</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#eae1d9] flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#f6ece4] flex items-center justify-center text-[#807666]">
            <span className="material-symbols-outlined text-[24px]">hourglass_top</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-[#1f1b16]">{pendingCount + 1} Pengerja</span>
            <span className="text-xs text-[#665d52]">Menunggu Respon ⏳</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#eae1d9] flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#ffdad6]/60 flex items-center justify-center text-[#ba1a1a]">
            <span className="material-symbols-outlined text-[24px]">person_off</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-[#1f1b16]">1 Pengganti</span>
            <span className="text-xs text-[#ba1a1a] font-semibold">Berhalangan Sakit ✕</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Departments & Liturgy Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Department Rosters (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* SECTION A: Pelayan Mimbar & Altar */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eae1d9]">
            <div className="flex items-center justify-between pb-3 border-b border-[#eae1d9]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-5 rounded-full bg-[#785600]"></span>
                <h2 className="font-headline-md text-base md:text-lg font-bold text-[#1f1b16]">
                  Bagian A: Pelayan Mimbar &amp; Altar
                </h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#f6ece4] text-[#665d52] text-xs font-semibold">
                4 Posisi Utama
              </span>
            </div>

            <div className="space-y-3 pt-3">
              {servants
                .filter((s) => s.roleGroup === 'mimbar')
                .map((servant) => (
                  <div
                    key={servant.id}
                    className="p-3.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#f6ece4] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#785600] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {servant.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-[#1f1b16]">
                            {servant.name}
                          </span>
                          {servant.tag && (
                            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#ffdea5] text-[#5d4200]">
                              {servant.tag}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-[#665d52]">{servant.role}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
                      <button
                        type="button"
                        onClick={() => toggleConfirmStatus(servant.id)}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                          servant.confirmed
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {servant.confirmed ? 'check_circle' : 'schedule'}
                        </span>
                        <span>{servant.confirmed ? 'Siap Hadir ✓' : 'Menunggu Konfirmasi'}</span>
                      </button>
                      <a
                        href="https://wa.me/6281295859490"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-white text-[#665d52] border border-[#d2c5b2]"
                        title="Kirim WA"
                      >
                        <span className="material-symbols-outlined text-[16px] text-emerald-700">chat</span>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* SECTION B: Tim Musik & Praise */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eae1d9]">
            <div className="flex items-center justify-between pb-3 border-b border-[#eae1d9]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-5 rounded-full bg-[#665d52]"></span>
                <h2 className="font-headline-md text-base md:text-lg font-bold text-[#1f1b16]">
                  Bagian B: Tim Musik &amp; Pujian
                </h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#f6ece4] text-[#665d52] text-xs font-semibold">
                6 Pemusik &amp; Singer
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
              {servants
                .filter((s) => s.roleGroup === 'music')
                .map((servant) => {
                  const isSinger = servant.role.includes('Singer');
                  return (
                    <div
                      key={servant.id}
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                        isSinger ? 'md:col-span-2 bg-[#fbf2ea] border-[#eae1d9]' : 'bg-[#fbf2ea] border-[#eae1d9]'
                      }`}
                    >
                      <div className="min-w-0">
                        <span className="text-[10px] text-[#807666] uppercase tracking-wider block font-bold">
                          {servant.role}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#1f1b16] truncate block">
                          {servant.name}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => toggleConfirmStatus(servant.id)}
                            className={`inline-flex items-center gap-1 text-[11px] font-bold cursor-pointer ${
                              servant.confirmed ? 'text-emerald-800' : 'text-amber-800'
                            }`}
                          >
                            <span className="material-symbols-outlined text-[13px]">
                              {servant.confirmed ? 'check_circle' : 'schedule'}
                            </span>
                            <span>{servant.confirmed ? 'Terkonfirmasi ✓' : 'Menunggu Konfirmasi'}</span>
                          </button>
                          {servant.notes && (
                            <span className="text-[10px] text-[#665d52]">({servant.notes})</span>
                          )}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleConfirmStatus(servant.id)}
                        className="p-2 rounded-xl bg-white hover:bg-[#f6ece4] border border-[#d2c5b2] text-[#785600] shrink-0"
                        title="Ubah Status Kehadiran"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {servant.confirmed ? 'check' : 'sync'}
                        </span>
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* SECTION C & D: Multi-column Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Multimedia */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eae1d9]">
              <div className="flex items-center justify-between pb-3 border-b border-[#eae1d9]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-4 rounded-full bg-[#785600]"></span>
                  <h3 className="font-title-sm text-sm font-bold text-[#1f1b16]">Multimedia &amp; Audio</h3>
                </div>
                <span className="text-xs text-[#665d52]">3 Petugas</span>
              </div>
              <div className="space-y-2 pt-3 text-xs">
                {servants
                  .filter((s) => s.roleGroup === 'media')
                  .map((m) => (
                    <div key={m.id} className="p-2.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9]">
                      <span className="text-[10px] text-[#807666] block font-semibold">{m.role}</span>
                      <div className="flex items-center justify-between mt-0.5">
                        <span className="font-bold text-[#1f1b16]">{m.name}</span>
                        <span className="material-symbols-outlined text-[16px] text-emerald-700">check_circle</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Usher & Kolektan */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eae1d9]">
              <div className="flex items-center justify-between pb-3 border-b border-[#eae1d9]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-4 rounded-full bg-[#665d52]"></span>
                  <h3 className="font-title-sm text-sm font-bold text-[#1f1b16]">Usher &amp; Kolektan</h3>
                </div>
                <span className="text-xs text-[#665d52]">5 Petugas</span>
              </div>
              <div className="space-y-2 pt-3 text-xs">
                {servants
                  .filter((s) => s.roleGroup === 'usher')
                  .map((u) => (
                    <div key={u.id} className="p-2.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9]">
                      <span className="text-[10px] text-[#807666] block font-semibold">{u.role}</span>
                      <div className="flex items-center justify-between mt-0.5">
                        <span className="font-bold text-[#1f1b16]">{u.name}</span>
                        <span className="material-symbols-outlined text-[16px] text-emerald-700">check_circle</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Liturgy, Songlist & Rehearsal (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Liturgy & Sermon Overview Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eae1d9]">
            <div className="flex items-center gap-2.5 pb-4 border-b border-[#eae1d9]">
              <span className="material-symbols-outlined text-[22px] text-[#785600]">auto_stories</span>
              <h3 className="font-headline-sm text-base font-bold text-[#785600]">Liturgi &amp; Panduan Ibadah</h3>
            </div>

            {/* Sermon Theme Banner */}
            <div className="p-4 rounded-xl bg-[#fbf2ea] my-4 border border-[#eae1d9]">
              <span className="text-[10px] uppercase tracking-wider text-[#665d52] font-bold block">
                Tema Khotbah Minggu
              </span>
              <h4 className="font-headline-sm text-sm md:text-base text-[#1f1b16] mt-1 font-bold">
                Disciple Maker: Membangun Generasi Misioner
              </h4>
              <div className="flex items-center gap-1.5 mt-2 text-[#785600] text-xs italic font-semibold">
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                <span>Matius 28:19–20</span>
              </div>
            </div>

            {/* Songlist */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between font-bold text-[#1f1b16]">
                <span>Daftar Lagu Pujian</span>
                <span className="text-[11px] text-[#665d52] font-normal">4 Lagu Utama</span>
              </div>

              <ol className="space-y-2">
                {[
                  { num: 1, title: 'Kumasuk Ruang Mahakudus', label: 'Pujian Pembuka', key: 'Do = G' },
                  { num: 2, title: "Kasih Allahku Sungguh T'lah Terbukti", label: 'Pujian Penyembahan', key: 'Do = D' },
                  { num: 3, title: "Firman-Mu P'lita Bagi Kakiku", label: 'Lagu Firman', key: 'Do = C' },
                  { num: 4, title: 'Bagi Dia Segala Kemuliaan', label: 'Persembahan & Penutup', key: 'Do = F' },
                ].map((s) => (
                  <li key={s.num} className="p-2.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded bg-[#785600] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {s.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="font-bold text-[#1f1b16] block leading-tight truncate">{s.title}</span>
                      <div className="flex items-center justify-between mt-1 text-[11px] text-[#665d52]">
                        <span>{s.label}</span>
                        <span className="px-1.5 py-0.2 rounded bg-white text-[#1f1b16] font-mono font-bold border border-[#eae1d9]">
                          {s.key}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Download Chord Action */}
            <div className="mt-5 pt-3 border-t border-[#eae1d9]">
              <button
                type="button"
                onClick={() => showToast('Mengunduh teks liturgi & chord partitur lengkap (PDF)...')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#785600] hover:bg-[#5a4000] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">file_download</span>
                <span>Unduh Teks Liturgi &amp; Chord PDF</span>
              </button>
            </div>
          </div>

          {/* Schedule & Rehearsal Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eae1d9]">
            <div className="flex items-center gap-2 pb-3 border-b border-[#eae1d9]">
              <span className="material-symbols-outlined text-[20px] text-[#785600]">timer</span>
              <h3 className="font-title-sm text-sm font-bold text-[#1f1b16]">Jadwal Gladi &amp; Doa Pengerja</h3>
            </div>
            <div className="space-y-2 pt-3 text-xs">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9]">
                <span className="font-bold text-[#785600] whitespace-nowrap">Sabtu, 17:00</span>
                <span className="text-[#665d52]">Gladi Resik Pemusik, Singer, &amp; Tim Multimedia</span>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9]">
                <span className="font-bold text-[#785600] whitespace-nowrap">Minggu, 06:15</span>
                <span className="text-[#665d52]">Doa Pengerja di Ruang Konsistori (Wajib Seluruh Pelayan)</span>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9]">
                <span className="font-bold text-[#785600] whitespace-nowrap">Minggu, 06:45</span>
                <span className="text-[#665d52]">Standby di Posisi Mimbar &amp; Pintu Masuk</span>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-[#f6ece4] border border-[#eae1d9]">
              <p className="font-headline-sm text-xs italic text-[#1f1b16] leading-relaxed">
                “Layanilah seorang akan yang lain, sesuai dengan karunia yang telah diperoleh tiap-tiap orang sebagai pengurus yang baik dari kasih karunia Allah.”
              </p>
              <span className="block mt-1.5 text-[10px] text-[#665d52] font-bold text-right">— 1 Petrus 4:10</span>
            </div>
          </div>

          {/* Sanctuary Banner Snapshot */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#eae1d9] relative group">
            <div className="relative w-full h-40">
              <Image
                src="/images/focus/mimbar-altar.jpg"
                alt="Ruang Ibadah GBI Baitani Sukabumi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b16]/90 via-[#1f1b16]/30 to-transparent flex items-end p-4">
                <div className="text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-[#ffdea5]">
                    Ruang Ibadah Utama
                  </span>
                  <span className="text-xs font-bold">GBI Baitani Sukabumi — Siap Menyambut Jemaat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
