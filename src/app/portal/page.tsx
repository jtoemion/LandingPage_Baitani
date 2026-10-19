'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePortalAuth } from '@/context/PortalAuthContext';

export default function PortalDashboardPage() {
  const { user } = usePortalAuth();
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState('Tersinkronisasi Otomatis');
  const [syncTimestamp, setSyncTimestamp] = useState('18 Okt 2026, 11:42 WIB');
  const [filterAge, setFilterAge] = useState('all');

  const handleSyncSheets = () => {
    setIsSyncing(true);
    setSyncStatus('Menghubungi Google Apps Script...');
    setTimeout(() => {
      setIsSyncing(false);
      setSyncStatus('Sinkronisasi Sukses (LockService Ready)');
      const now = new Date();
      setSyncTimestamp(
        `${now.getDate()} Okt 2026, ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} WIB`
      );
      setTimeout(() => {
        setSyncStatus('Tersinkronisasi Otomatis');
      }, 4000);
    }, 1200);
  };

  const classData = [
    {
      code: 'KAT-01',
      name: 'Asuhan',
      age: '0–3 thn',
      present: 4,
      target: 4,
      ratio: '100%',
      teachers: 'Pricilia Putri, Ibu Merla',
      contactNote: '(Kontak: Wali)',
      offering: '—',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      code: 'KAT-02',
      name: 'Indria',
      age: '4–6 thn',
      present: 8,
      target: 9,
      ratio: '89%',
      teachers: 'Cheren Masria, Ibu Sandrawati',
      contactNote: '',
      offering: 'Rp 185.000',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      code: 'KAT-03',
      name: 'Gabungan Pratama',
      age: '7–9 thn',
      present: 10,
      target: 11,
      ratio: '91%',
      teachers: 'Sdri. Lily, Ibu Susi',
      contactNote: '',
      offering: 'Rp 210.000',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      code: 'KAT-04',
      name: 'Madya',
      age: '10–12 thn',
      present: 5,
      target: 5,
      ratio: '100%',
      teachers: 'Ibu Mexy, Tri Lestari',
      contactNote: '',
      offering: 'Rp 165.000',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      code: 'KAT-05',
      name: 'Tunas Muda',
      age: '13–15 thn',
      present: 11,
      target: 13,
      ratio: '85%',
      teachers: 'Ibu Fung Jie',
      contactNote: '',
      offering: 'Rp 290.000',
      badgeColor: 'bg-amber-100 text-amber-900',
    },
    {
      code: 'KAT-06',
      name: 'Remaja PKRB',
      age: '16–19 thn',
      present: 7,
      target: 8,
      ratio: '88%',
      teachers: 'Ibu Febiola Sara Ardi',
      contactNote: '',
      offering: 'Rp 240.000',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      code: 'KAT-07',
      name: 'Pemuda PKMB',
      age: '20–29 thn',
      present: 8,
      target: 10,
      ratio: '80%',
      teachers: 'Bp. Daniel Dean, Mery Christina',
      contactNote: '',
      offering: 'Rp 310.000',
      badgeColor: 'bg-amber-100 text-amber-900',
    },
    {
      code: 'KAT-08',
      name: 'Dewasa Onsite',
      age: '30–55 thn',
      present: 14,
      target: 15,
      ratio: '93%',
      teachers: 'Pdt. Kristianto, Bp. Eddy Mulyadi',
      contactNote: '',
      offering: 'Rp 640.000',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      code: 'KAT-09',
      name: 'Dewasa Online (Zoom)',
      age: 'Streaming',
      present: 5,
      target: 5,
      ratio: '100%',
      teachers: 'Bp. Eddy (OL), Pdt. Salim',
      contactNote: '',
      offering: 'Transfer QRIS',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      code: 'KAT-10',
      name: 'Senior 1 Pra-Lansia',
      age: '56–67 thn',
      present: 12,
      target: 14,
      ratio: '86%',
      teachers: 'Ibu Susan Sudarma, Ibu Tenny',
      contactNote: '',
      offering: 'Rp 520.000',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      code: 'KAT-11',
      name: 'Senior 2 Lansia/Opa-Oma',
      age: '68+ thn',
      present: 29,
      target: 33,
      ratio: '88%',
      teachers: 'Pdt. Hendi, Ibu Wiesye, Bp. Thio Jan Fung',
      contactNote: '',
      offering: 'Rp 860.000',
      badgeColor: 'bg-green-100 text-green-800',
    },
  ];

  return (
    <div className="flex flex-col w-full pb-16 space-y-6">
      {/* Pastoral Header & Liturgical Greeting Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#fbf2ea] p-6 md:p-8 shadow-xs border border-[#eae1d9]">
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-[#ffdea5]/30 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#785600] font-label-sm text-xs font-bold w-fit shadow-xs border border-[#eae1d9]">
              <span className="material-symbols-outlined text-[16px]">church</span>
              <span>Ruang Kerja Gembala Sidang &amp; Tata Usaha Gereja</span>
            </div>
            <h1 className="font-headline-lg text-2xl md:text-3xl text-[#785600] tracking-tight font-bold">
              Shalom dalam Kasih Kristus, {user?.nama || 'Pdt. Kristianto, M.Th.'} &amp; Tim Sekretariat
            </h1>
            <p className="font-body-md text-xs sm:text-sm text-[#665d52] leading-relaxed">
              Minggu, 18 Oktober 2026 <span className="text-[#785600] font-bold">✦</span> Sensus Aktif Triwulan IV:{' '}
              <strong className="text-[#1f1b16]">151 Jiwa (127 Keluarga)</strong>{' '}
              <span className="text-[#785600] font-bold">✦</span>{' '}
              <span className="italic font-headline-sm text-sm text-[#4e4637]">“Kasih yang Mempersatukan”</span>
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
            <Link
              href="/portal/presensi"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#785600] text-white font-label-md text-xs font-bold shadow-sm hover:bg-[#5a4000] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
              <span>+ Input Presensi Manual</span>
            </Link>
            <Link
              href="/portal/presensi#tamu"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white text-[#785600] font-label-md text-xs font-bold shadow-xs hover:bg-[#f6ece4] border border-[#d2c5b2] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              <span>+ Catat Tamu Ibadah</span>
            </Link>
            <button
              type="button"
              onClick={handleSyncSheets}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#ebded0] text-[#211b12] font-label-md text-xs font-semibold hover:bg-[#eae1d9] transition-colors"
              title="Ekspor Google Sheets"
            >
              <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
              <span className="hidden xl:inline">Ekspor Excel / Sheets</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Performance Metrics (4 Liturgical Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Card 1: Total Jemaat */}
        <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm border border-[#eae1d9] flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#665d52]">
                Registri Jemaat
              </span>
              <span className="font-title-sm text-sm text-[#1f1b16] font-bold mt-0.5">
                Total Jemaat Terdata
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#f6ece4] flex items-center justify-center text-[#785600]">
              <span className="material-symbols-outlined text-[22px]">groups_3</span>
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-headline-xl text-3xl md:text-4xl text-[#785600] font-bold">151</span>
            <span className="font-title-md text-sm text-[#665d52]">Jiwa</span>
            <span className="ml-auto px-2 py-0.5 rounded-full bg-[#f6ece4] text-[#785600] font-label-sm text-[11px] font-semibold">
              +4 triwulan ini
            </span>
          </div>
          <div className="mt-3 pt-3 border-t border-[#eae1d9] flex items-center justify-between text-[#665d52] font-label-sm text-[11px]">
            <span>11 Kelas Kategorial</span>
            <span>127 Akun Login Aktif</span>
          </div>
        </div>

        {/* Card 2: Kehadiran Hari Ini */}
        <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm border border-[#eae1d9] flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#665d52]">
                Kehadiran Hari Ini
              </span>
              <span className="font-title-sm text-sm text-[#1f1b16] font-bold mt-0.5">
                Presensi Triwulan IV
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#f6ece4] flex items-center justify-center text-[#785600]">
              <span className="material-symbols-outlined text-[22px]">rule_folder</span>
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-headline-xl text-3xl md:text-4xl text-[#1f1b16] font-bold">128</span>
            <span className="font-title-sm text-xs sm:text-sm text-[#665d52] font-semibold">Hadir (84.7%)</span>
            <span className="ml-auto text-emerald-700 font-label-sm text-xs font-bold flex items-center">
              <span className="material-symbols-outlined text-[16px]">trending_up</span> +5.2%
            </span>
          </div>
          <div className="mt-3 pt-3 border-t border-[#eae1d9] flex items-center justify-between text-[#665d52] font-label-sm text-[11px]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> 8 Sakit
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-sky-600"></span> 9 Izin
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span> 6 Alpa
            </span>
          </div>
        </div>

        {/* Card 3: Persembahan Kelas */}
        <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm border border-[#eae1d9] flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#665d52]">
                Keuangan Kelas
              </span>
              <span className="font-title-sm text-sm text-[#1f1b16] font-bold mt-0.5">
                Persembahan Terhimpun
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#f6ece4] flex items-center justify-center text-[#785600]">
              <span className="material-symbols-outlined text-[22px]">savings</span>
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-sm text-[#665d52] font-medium">Rp</span>
            <span className="font-headline-xl text-2xl md:text-3xl text-[#785600] font-bold">3.420.000</span>
          </div>
          <div className="mt-3 pt-3 border-t border-[#eae1d9] flex items-center justify-between text-[#665d52] font-label-sm text-[11px]">
            <span className="inline-flex items-center gap-1 text-emerald-800 font-semibold">
              <span className="material-symbols-outlined text-[16px] text-emerald-700">check_circle</span> 11 Kelas Setor Penuh
            </span>
            <span className="text-[#807666]">Kas Sekretariat</span>
          </div>
        </div>

        {/* Card 4: Permohonan Doa */}
        <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm border border-[#eae1d9] flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#665d52]">
                Syafaat Jemaat
              </span>
              <span className="font-title-sm text-sm text-[#1f1b16] font-bold mt-0.5">
                Permohonan Doa Baru
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#f6ece4] flex items-center justify-center text-[#785600]">
              <span className="material-symbols-outlined text-[22px]">volunteer_activism</span>
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-headline-xl text-3xl md:text-4xl text-[#1f1b16] font-bold">8</span>
            <span className="font-title-md text-sm text-[#665d52]">Pokok Doa</span>
            <span className="ml-auto px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#93000a] font-label-sm text-[11px] font-bold">
              3 Privat Gembala
            </span>
          </div>
          <div className="mt-3 pt-3 border-t border-[#eae1d9] flex items-center justify-between text-[#665d52] font-label-sm text-[11px]">
            <span>5 Syafaat Terbuka</span>
            <Link href="/portal/doa" className="text-[#785600] hover:underline font-bold">
              Buka Tab Doa →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Asymmetric Split (Left: 8 cols, Right: 4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Critical Pastoral Early Warning Alert Banner */}
          <div className="rounded-2xl bg-[#fbf2ea] p-5 shadow-xs border border-[#eae1d9] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                <span className="material-symbols-outlined text-[22px]">notifications_active</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-title-sm text-sm font-bold text-[#1f1b16]">
                    Perhatian Penggembalaan Kritis (Lansia)
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-200/60 text-amber-900 font-label-sm text-[10px] font-bold">
                    3 Pekan Absen
                  </span>
                </div>
                <p className="font-body-sm text-xs text-[#665d52] mt-1 leading-normal">
                  3 Jemaat Lansia absen 3 minggu berturut-turut:{' '}
                  <strong className="text-[#1f1b16]">Ibu Tan Bok Nio (87 th)</strong>,{' '}
                  <strong className="text-[#1f1b16]">Bp. Herry (71 th)</strong>, dan{' '}
                  <strong className="text-[#1f1b16]">Ibu Suryani (69 th)</strong>. Jadwalkan lawatan tim diaken &amp; pastoral minggu ini.
                </p>
              </div>
            </div>
            <Link
              href="/portal/pastoral"
              className="shrink-0 px-4 py-2 rounded-xl bg-[#785600] text-white font-label-md text-xs font-bold shadow-sm hover:bg-[#5a4000] transition-colors whitespace-nowrap text-center"
            >
              Jadwalkan Kunjungan Pastoral
            </Link>
          </div>

          {/* 11 Kategorial Presensi Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eae1d9] flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-3 border-b border-[#eae1d9]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#785600]"></span>
                  <h2 className="font-headline-md text-lg md:text-xl font-bold text-[#1f1b16]">
                    Rekap Kehadiran 11 Kelas Kategorial Hari Ini
                  </h2>
                </div>
                <p className="font-body-sm text-xs text-[#665d52] mt-0.5">
                  Minggu, 18 Oktober 2026 — Sesi Ibadah Sekolah Minggu, Remaja &amp; Umum
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFilterAge(filterAge === 'all' ? 'children' : 'all')}
                  className="px-3 py-1.5 rounded-lg bg-[#f6ece4] font-label-sm text-xs text-[#665d52] hover:text-[#1f1b16] font-medium"
                >
                  Filter: {filterAge === 'all' ? 'Semua Usia' : 'Sekolah Minggu Saja'}
                </button>
                <button
                  type="button"
                  onClick={handleSyncSheets}
                  className="px-3 py-1.5 rounded-lg bg-[#f6ece4] font-label-sm text-xs text-[#785600] font-bold flex items-center gap-1 hover:bg-[#eae1d9]"
                >
                  <span className={`material-symbols-outlined text-[16px] ${isSyncing ? 'animate-spin' : ''}`}>
                    refresh
                  </span>
                  <span>Refresh Live</span>
                </button>
              </div>
            </div>

            {/* Attendance Proportion Bar */}
            <div className="my-4 p-3.5 rounded-xl bg-[#fbf2ea] flex flex-col gap-2">
              <div className="flex items-center justify-between text-[#665d52] font-label-sm text-xs">
                <span className="text-[#1f1b16] font-semibold">Tingkat Partisipasi Total: 84.7%</span>
                <span>128 Hadir dari 151 Jemaat</span>
              </div>
              <div className="w-full h-3 rounded-full bg-[#eae1d9] overflow-hidden flex">
                <div className="h-full bg-[#785600] rounded-l-full" style={{ width: '84.7%' }} title="Hadir: 128" />
                <div className="h-full bg-amber-400" style={{ width: '5.3%' }} title="Sakit: 8" />
                <div className="h-full bg-sky-400" style={{ width: '6.0%' }} title="Izin: 9" />
                <div className="h-full bg-rose-400 rounded-r-full" style={{ width: '4.0%' }} title="Alpa: 6" />
              </div>
              <div className="flex items-center gap-4 text-[#665d52] font-label-sm text-xs pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-[#785600]"></span> 128 Hadir
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-amber-400"></span> 8 Sakit
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-sky-400"></span> 9 Izin
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-rose-400"></span> 6 Alpa
                </span>
              </div>
            </div>

            {/* High-Density Responsive Table for 11 Classes */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#fbf2ea] text-[#665d52] font-label-sm text-xs">
                    <th className="py-2.5 px-3 rounded-l-lg">Kode &amp; Kategori</th>
                    <th className="py-2.5 px-3">Rentang Usia</th>
                    <th className="py-2.5 px-3">Presensi / Target</th>
                    <th className="py-2.5 px-3">Rasio</th>
                    <th className="py-2.5 px-3">Guru / Fasilitator</th>
                    <th className="py-2.5 px-3 text-right rounded-r-lg">Kolekte Kelas</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-xs text-[#1f1b16] divide-y divide-[#eae1d9]">
                  {classData
                    .filter((c) => (filterAge === 'children' ? ['KAT-01', 'KAT-02', 'KAT-03', 'KAT-04'].includes(c.code) : true))
                    .map((item) => (
                      <tr key={item.code} className="hover:bg-[#fbf2ea]/60 transition-colors">
                        <td className="py-3 px-3 font-semibold text-[#785600]">
                          <span className="px-1.5 py-0.5 rounded bg-[#f6ece4] text-[#1f1b16] mr-1.5 text-[10px] font-mono">
                            {item.code}
                          </span>
                          {item.name}
                        </td>
                        <td className="py-3 px-3 text-[#665d52]">{item.age}</td>
                        <td className="py-3 px-3 font-medium">
                          {item.present} / {item.target} Jiwa
                        </td>
                        <td className="py-3 px-3">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold ${item.badgeColor}`}>
                            {item.ratio}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-[#665d52]">
                          {item.teachers}
                          {item.contactNote && (
                            <span className="text-[10px] text-[#807666] block">{item.contactNote}</span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right font-semibold text-[#1f1b16]">
                          {item.offering}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#665d52] font-label-sm text-xs bg-[#fbf2ea] p-3 rounded-xl border border-[#eae1d9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#785600]">verified</span>
                <span>11 Kelas terkonfirmasi lengkap oleh guru pamong &amp; sekretariat.</span>
              </div>
              <div className="font-semibold text-[#1f1b16]">
                Total Kolekte Minggu Ini: <span className="text-[#785600] font-bold">Rp 3.420.000</span>
              </div>
            </div>
          </div>

          {/* Devotional Scripture Highlight Card */}
          <div className="rounded-2xl bg-[#f6ece4] p-6 shadow-xs border border-[#eae1d9] flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#ffdea5] flex items-center justify-center text-[#785600] shrink-0">
              <span className="material-symbols-outlined text-[20px]">menu_book</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-xs uppercase tracking-wider text-[#785600] font-bold">
                Renungan Penggembalaan Pekan Ini
              </span>
              <p className="font-headline-sm text-base md:text-lg text-[#1f1b16] italic mt-1 leading-snug">
                “Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan.”
              </p>
              <span className="font-body-sm text-xs text-[#665d52] mt-1">
                — Kolose 3:14 (Landasan Pelayanan Baitani 2026)
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Widget 1: Ulang Tahun Minggu Ini */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eae1d9] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#eae1d9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#785600]">cake</span>
                <h3 className="font-title-sm text-sm font-bold text-[#1f1b16]">Ulang Tahun Minggu Ini 🎂</h3>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#f6ece4] text-[#785600] font-label-sm text-xs font-semibold">
                3 Jemaat
              </span>
            </div>
            <p className="font-body-sm text-xs text-[#665d52] my-3">
              Kirimkan berkat &amp; doa gembala sidang secara personal:
            </p>

            <div className="flex flex-col gap-3">
              {/* Member 1: Ibu Wiesye */}
              <div className="p-3.5 rounded-xl bg-[#fbf2ea] flex flex-col gap-2.5 border border-[#eae1d9]">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-label-md text-xs font-bold text-[#1f1b16]">Ibu Wiesye Mirnawati</h4>
                    <span className="font-body-sm text-[11px] text-[#665d52]">Senior 2 (Lansia) • HUT ke-72</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white text-[#785600] font-label-sm text-xs font-semibold border border-[#eae1d9]">
                    8 Nov
                  </span>
                </div>
                <a
                  href="https://wa.me/?text=Shalom%20Ibu%20Wiesye%20Mirnawati,%20Selamat%20Ulang%20Tahun%20ke-72.%20Tuhan%20Yesus%20memberkati%20senantiasa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-700 text-white font-label-sm text-xs hover:bg-emerald-800 transition-colors shadow-xs"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Kirim Ucapan Gembala via WA</span>
                </a>
              </div>

              {/* Member 2: Audrey Nathania */}
              <div className="p-3.5 rounded-xl bg-[#fbf2ea] flex items-center justify-between border border-[#eae1d9]">
                <div className="flex flex-col">
                  <h4 className="font-label-md text-xs font-bold text-[#1f1b16]">Audrey Nathania</h4>
                  <span className="font-body-sm text-[11px] text-[#665d52]">Kelas Madya • HUT ke-11</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-white text-[#665d52] font-label-sm text-xs border border-[#eae1d9]">
                  11 Agu
                </span>
              </div>

              {/* Member 3: Axel Danilla Susilo */}
              <div className="p-3.5 rounded-xl bg-[#fbf2ea] flex items-center justify-between border border-[#eae1d9]">
                <div className="flex flex-col">
                  <h4 className="font-label-md text-xs font-bold text-[#1f1b16]">Axel Danilla Susilo</h4>
                  <span className="font-body-sm text-[11px] text-[#665d52]">Kelas Indria • HUT ke-4</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-white text-[#665d52] font-label-sm text-xs border border-[#eae1d9]">
                  29 Okt
                </span>
              </div>
            </div>
          </div>

          {/* Widget 2: Pokok Doa Pastoral Masuk */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eae1d9] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#eae1d9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#785600]">volunteer_activism</span>
                <h3 className="font-title-sm text-sm font-bold text-[#1f1b16]">Pokok Doa Pastoral Masuk</h3>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#93000a] font-label-sm text-[10px] font-bold">
                Filter Rahasia
              </span>
            </div>

            <div className="flex flex-col gap-3 mt-3">
              {/* Doa 1 */}
              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 font-label-sm text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                    <span className="material-symbols-outlined text-[12px]">lock</span> Rahasia Gembala
                  </span>
                  <span className="text-[10px] text-[#665d52]">08:15 WIB</span>
                </div>
                <p className="font-body-sm text-xs text-[#1f1b16] font-medium leading-relaxed">
                  Keluarga Bpk. S — Pemulihan pasca operasi di RSUD R. Syamsudin SH Sukabumi.
                </p>
                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="text-[#785600] font-semibold">Status: Konseling Privat</span>
                  <Link href="/portal/doa" className="text-[#665d52] hover:text-[#1f1b16] underline">
                    Tindak Lanjut
                  </Link>
                </div>
              </div>

              {/* Doa 2 */}
              <div className="p-3 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 font-label-sm text-[10px] font-semibold text-[#785600] bg-[#f6ece4] px-2 py-0.5 rounded">
                    Jam Doa Syafaat
                  </span>
                  <span className="text-[10px] text-[#665d52]">Kemarin</span>
                </div>
                <p className="font-body-sm text-xs text-[#1f1b16]">
                  <strong>Sdri. Cheren</strong> — Mohon doa untuk ujian kelulusan &amp; komitmen melayani anak Sekolah Minggu.
                </p>
              </div>

              {/* Doa 3 */}
              <div className="p-3 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 font-label-sm text-[10px] font-semibold text-[#665d52] bg-[#f6ece4] px-2 py-0.5 rounded">
                    Umum / Syukur
                  </span>
                  <span className="text-[10px] text-[#665d52]">Jumat</span>
                </div>
                <p className="font-body-sm text-xs text-[#1f1b16]">
                  <strong>Bpk. Eddy</strong> — Ucapan syukur pemulihan kesehatan keluarga &amp; kelancaran usaha sembako.
                </p>
              </div>
            </div>

            <Link
              href="/portal/doa"
              className="mt-4 pt-3 border-t border-[#eae1d9] flex items-center justify-between font-label-md text-xs text-[#785600] font-bold hover:underline"
            >
              <span>Buka Rekap 8 Pokok Doa Lengkap</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Widget 3: Koneksi Backend Google Sheets */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eae1d9] flex flex-col">
            <div className="flex items-center gap-2 pb-3 border-b border-[#eae1d9]">
              <span className="material-symbols-outlined text-[20px] text-emerald-700">cloud_sync</span>
              <h3 className="font-title-sm text-sm font-bold text-[#1f1b16]">Koneksi Backend Google Sheets</h3>
            </div>
            <div className="p-3 rounded-xl bg-[#fbf2ea] flex flex-col gap-2 mt-3 border border-[#eae1d9]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#665d52]">Status Sistem:</span>
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  {syncStatus}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#665d52]">App Script:</span>
                <span className="font-mono text-[10px] text-[#1f1b16] bg-[#f6ece4] px-1.5 py-0.5 rounded">
                  Gas Web App v4.2
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#665d52]">Master File:</span>
                <span className="text-xs text-[#1f1b16] font-semibold truncate max-w-[170px]">
                  GBI_Baitani_Database_Master (7 Tab)
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#665d52]">Sinkronisasi Terakhir:</span>
                <span className="text-xs text-[#665d52]">{syncTimestamp}</span>
              </div>
            </div>
            <button
              type="button"
              disabled={isSyncing}
              onClick={handleSyncSheets}
              className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#f6ece4] text-[#785600] font-label-md text-xs font-bold hover:bg-[#eae1d9] transition-colors shadow-xs disabled:opacity-50"
            >
              <span className={`material-symbols-outlined text-[18px] ${isSyncing ? 'animate-spin' : ''}`}>
                sync
              </span>
              <span>{isSyncing ? 'Menyinkronkan...' : 'Sinkronkan Sekarang (LockService Ready)'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
