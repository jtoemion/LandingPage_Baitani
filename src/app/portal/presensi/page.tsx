'use client';

import React, { useState } from 'react';

type AttendanceStatus = 'Hadir' | 'Sakit' | 'Izin' | 'Alpa';

interface PupilAttendance {
  id: string;
  name: string;
  nickname: string;
  age: string;
  birthDate: string;
  parent: string;
  contact: string;
  status: AttendanceStatus;
  note: string;
}

export default function PortalPresensiPage() {
  const [selectedClassId, setSelectedClassId] = useState('KAT-02');
  const [filterGroup, setFilterGroup] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [saveSuccessToast, setSaveSuccessToast] = useState(false);
  const [settlementSigned, setSettlementSigned] = useState(false);

  // Initial state for pupils in KAT-02 Indria
  const [roster, setRoster] = useState<PupilAttendance[]>([
    {
      id: 'JMT-0008',
      name: 'Axel Danilla Susilo',
      nickname: 'Axel',
      age: '4 Thn',
      birthDate: '29-10-2022',
      parent: 'Ibu Merla',
      contact: '0812-1458-2962',
      status: 'Hadir',
      note: 'Datang tepat waktu & ceria',
    },
    {
      id: 'JMT-0009',
      name: 'Azka Pratama Tarigan',
      nickname: 'Azka',
      age: '5 Thn',
      birthDate: '01-01-2021',
      parent: 'Bp. Tarigan',
      contact: '0812-8534-xxxx',
      status: 'Hadir',
      note: 'Hadir bersama adik',
    },
    {
      id: 'JMT-0010',
      name: 'Benneth Evander Samuel',
      nickname: 'Benneth',
      age: '6 Thn',
      birthDate: '15-09-2021',
      parent: 'Ibu Evita',
      contact: '0895-3830-xxxx',
      status: 'Sakit',
      note: 'Demam sejak Jumat (Sudah didoakan di kelas)',
    },
    {
      id: 'JMT-0011',
      name: 'Clarissa Elvira Liu',
      nickname: 'Clarissa',
      age: '5 Thn',
      birthDate: '26-02-2021',
      parent: 'Ibu Liu',
      contact: '0812-8686-xxxx',
      status: 'Hadir',
      note: 'Membawa teman baru (Jonathan Christian)',
    },
    {
      id: 'JMT-0012',
      name: 'Doretta Serenity Xaviera',
      nickname: 'Doretta',
      age: '4 Thn',
      birthDate: '19-01-2022',
      parent: 'Ibu Xaviera',
      contact: '0858-6162-xxxx',
      status: 'Hadir',
      note: 'Aktif menyanyi dan mewarnai',
    },
    {
      id: 'JMT-0013',
      name: 'Eleanor Joycelin Kuncoro',
      nickname: 'Eleanor',
      age: '6 Thn',
      birthDate: '06-12-2019',
      parent: 'Ibu Kuncoro',
      contact: '0877-6053-xxxx',
      status: 'Hadir',
      note: 'Hadir lengkap ayat hafalan',
    },
    {
      id: 'JMT-0014',
      name: 'Josie Eleanor Kristiawan',
      nickname: 'Josie',
      age: '5 Thn',
      birthDate: '06-09-2021',
      parent: 'Ibu Kristiawan',
      contact: '0857-9300-xxxx',
      status: 'Hadir',
      note: 'Diantar keluarga',
    },
    {
      id: 'JMT-0015',
      name: 'Luke Manuel Firmansyah',
      nickname: 'Luke',
      age: '5 Thn',
      birthDate: '08-12-2020',
      parent: 'Bp. Firmansyah',
      contact: '0896-8277-xxxx',
      status: 'Hadir',
      note: 'Datang bersama kakak kelas Pratama',
    },
    {
      id: 'JMT-0016',
      name: 'Wilhelmina Rylie Areyta',
      nickname: 'Wilhelmina',
      age: '4 Thn',
      birthDate: '01-10-2022',
      parent: 'Ibu Areyta',
      contact: '0811-1118-xxxx',
      status: 'Izin',
      note: 'Acara keluarga di Bogor',
    },
  ]);

  const classCards = [
    {
      id: 'KAT-01',
      group: 'sm',
      code: 'KAT-01',
      title: 'Kelas Asuhan (0–3 th)',
      teachers: 'Guru: Pricilia Putri, Ibu Merla, Yessy Susanto',
      ratio: '100% Hadir',
      presentCount: '4 Terdaftar (4 Hadir)',
      offering: 'Rp 80.000',
    },
    {
      id: 'KAT-02',
      group: 'sm',
      code: 'KAT-02',
      title: 'Kelas Indria (4–6 th)',
      teachers: 'Guru: Cheren Masria, Ibu Sandrawati, Bp. Natanael',
      ratio: '89% Hadir',
      presentCount: '9 Murid (8 Hadir, 1 Sakit)',
      offering: 'Rp 185.000',
    },
    {
      id: 'KAT-03',
      group: 'sm',
      code: 'KAT-03',
      title: 'Gabungan Pratama (7–9 th)',
      teachers: 'Guru: Laudia Siwalette (Sdri. Lily), Ibu Susi Mulyani',
      ratio: '91% Hadir',
      presentCount: '11 Murid (10 Hadir, 1 Izin)',
      offering: 'Rp 210.000',
    },
    {
      id: 'KAT-04',
      group: 'sm',
      code: 'KAT-04',
      title: 'Kelas Madya (10–12 th)',
      teachers: 'Guru: Mexy Juliana (Ibu Mexy), Tri Lestari',
      ratio: '100% Hadir',
      presentCount: '5 Murid (5 Hadir)',
      offering: 'Rp 165.000',
    },
    {
      id: 'KAT-05',
      group: 'youth',
      code: 'KAT-05',
      title: 'Tunas Muda (13–15 th)',
      teachers: 'Guru: Ibu Fung Jie',
      ratio: '85% Hadir',
      presentCount: '13 Murid (11 Hadir, 2 Sakit)',
      offering: 'Rp 290.000',
    },
    {
      id: 'KAT-06',
      group: 'youth',
      code: 'KAT-06',
      title: 'Remaja PKRB (16–19 th)',
      teachers: 'Guru: Ibu Febiola Sara Ardi',
      ratio: '88% Hadir',
      presentCount: '8 Remaja (7 Hadir, 1 Izin)',
      offering: 'Rp 240.000',
    },
    {
      id: 'KAT-07',
      group: 'youth',
      code: 'KAT-07',
      title: 'Pemuda PKMB (20–29 th)',
      teachers: 'Guru: Bp. Daniel Dean Darmawan, Mery Christina',
      ratio: '80% Hadir',
      presentCount: '10 Pemuda (8 Hadir, 2 Alpa)',
      offering: 'Rp 350.000',
    },
    {
      id: 'KAT-08',
      group: 'adult',
      code: 'KAT-08',
      title: 'Dewasa Onsite (30–55 th)',
      teachers: 'Koord: Pdt. Kristianto, Bp. Eddy Mulyadi',
      ratio: '93% Hadir',
      presentCount: '15 Jemaat (14 Hadir, 1 Sakit)',
      offering: 'Rp 680.000',
    },
    {
      id: 'KAT-09',
      group: 'adult',
      code: 'KAT-09',
      title: 'Dewasa Online (30–55 th)',
      teachers: 'Fasilitator: Pdt. Salim Bastaman (OL)',
      ratio: 'Zoom/Live',
      presentCount: '5 Jemaat (100% Interaktif)',
      offering: 'Digital Transfer',
    },
    {
      id: 'KAT-10',
      group: 'senior',
      code: 'KAT-10',
      title: 'Senior 1 Pra-Lansia (56–67 th)',
      teachers: 'Pendamping: Ibu Susan Sudarma, Ibu Tenny',
      ratio: '86% Hadir',
      presentCount: '14 Jemaat (12 Hadir, 2 Sakit)',
      offering: 'Rp 520.000',
    },
    {
      id: 'KAT-11',
      group: 'senior',
      code: 'KAT-11',
      title: 'Senior 2 Lansia/Opa-Oma (68+ th)',
      teachers: 'Pendamping: Pdt. Hendi, Ibu Wiesye, Bp. Thio Jan Fung',
      ratio: '88% Hadir',
      presentCount: '33 Jemaat (29 Hadir, 3 Sakit, 1 Alpa)',
      offering: 'Rp 700.000',
    },
  ];

  const handleStatusChange = (id: string, newStatus: AttendanceStatus) => {
    setRoster((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleSetAllPresent = () => {
    setRoster((prev) => prev.map((item) => ({ ...item, status: 'Hadir' })));
  };

  const handleResetAttendance = () => {
    setRoster((prev) =>
      prev.map((item, idx) => ({
        ...item,
        status: idx === 2 ? 'Sakit' : idx === 8 ? 'Izin' : 'Hadir',
      }))
    );
  };

  const handleSaveAttendance = () => {
    setSaveSuccessToast(true);
    setTimeout(() => {
      setSaveSuccessToast(false);
    }, 3500);
  };

  const filteredCards = classCards.filter((c) => {
    if (filterGroup === 'all') return true;
    return c.group === filterGroup;
  });

  const filteredRoster = roster.filter((r) => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'hadir') return r.status === 'Hadir';
    if (filterStatus === 'sakit') return r.status === 'Sakit';
    if (filterStatus === 'izin') return r.status === 'Izin';
    if (filterStatus === 'alpa') return r.status === 'Alpa';
    return true;
  });

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Action & Filter Deck */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-[#eae1d9]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-[#785600] font-label-sm text-xs uppercase tracking-wider font-bold mb-1">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Sekretariat Presensi &amp; Sensus Jemaat</span>
            </div>
            <h1 className="font-headline-lg text-2xl md:text-3xl text-[#1f1b16] font-bold tracking-tight">
              Rekapitulasi Presensi &amp; Kolekte Mingguan 11 Kelas Kategorial
            </h1>
            <p className="font-body-md text-xs sm:text-sm text-[#665d52] mt-1">
              Data riil sensus jemaat per jenjang usia, kehadiran mingguan, data tamu baru, dan setoran kolekte ke Google Sheets
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => alert('Mengunduh Berita Acara Presensi 11 Kelas (PDF)...')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#fbf2ea] hover:bg-[#f6ece4] text-[#1f1b16] text-xs font-semibold border border-[#eae1d9] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#785600]">download</span>
              <span>Download Rekap PDF</span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#fbf2ea] hover:bg-[#f6ece4] text-[#1f1b16] text-xs font-semibold border border-[#eae1d9] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#785600]">print</span>
              <span>Cetak Lembar Fisik</span>
            </button>
            <button
              type="button"
              onClick={() => alert('Membuka formulir pencatatan presensi guru pamong...')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#785600] text-white text-xs font-bold hover:bg-[#5a4000] shadow-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">person_add</span>
              <span>+ Catat Presensi Guru</span>
            </button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 bg-[#fbf2ea]/70 p-3.5 rounded-xl border border-[#eae1d9]">
          <div className="flex flex-col">
            <label className="text-[11px] font-semibold text-[#665d52] mb-1">Tanggal Ibadah</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[#807666] text-[16px]">
                calendar_today
              </span>
              <input
                type="text"
                readOnly
                value="Minggu, 18 Oktober 2026"
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white text-[#1f1b16] text-xs font-medium border border-[#eae1d9] shadow-xs cursor-default"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[11px] font-semibold text-[#665d52] mb-1">Grup / Kategori Kelas</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[#807666] text-[16px]">
                layers
              </span>
              <select
                value={filterGroup}
                onChange={(e) => setFilterGroup(e.target.value)}
                className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-white text-[#1f1b16] text-xs font-medium border border-[#eae1d9] shadow-xs cursor-pointer focus:outline-none"
              >
                <option value="all">Semua Kelas (11 Kategorial)</option>
                <option value="sm">Sekolah Minggu (KAT-01 s/d 04)</option>
                <option value="youth">Remaja &amp; Pemuda (KAT-05 s/d 07)</option>
                <option value="adult">Dewasa Onsite &amp; Online (KAT-08, 09)</option>
                <option value="senior">Senior Pra-Lansia &amp; Lansia (KAT-10, 11)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[11px] font-semibold text-[#665d52] mb-1">Status Kehadiran</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[#807666] text-[16px]">
                filter_alt
              </span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-white text-[#1f1b16] text-xs font-medium border border-[#eae1d9] shadow-xs cursor-pointer focus:outline-none"
              >
                <option value="all">Semua Status (100%)</option>
                <option value="hadir">Hadir Saja</option>
                <option value="sakit">Sakit</option>
                <option value="izin">Izin</option>
                <option value="alpa">Alpa / Belum Konfirmasi</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[11px] font-semibold text-[#665d52] mb-1">Sinkronisasi Cloud</label>
            <div className="flex items-center justify-between h-[34px] px-3 bg-white rounded-lg border border-[#eae1d9] shadow-xs">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1f1b16]">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span> Google Sheets Auto-Sync
              </span>
              <button
                type="button"
                onClick={() => alert('Sinkronisasi Google Sheets live...')}
                className="p-1 rounded text-[#785600] hover:bg-[#f6ece4]"
                title="Sinkronkan Sekarang"
              >
                <span className="material-symbols-outlined text-[16px]">sync</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats Banner (6 Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#eae1d9] flex flex-col justify-between">
          <span className="text-xs text-[#665d52] flex items-center justify-between">
            Total Terdaftar
            <span className="material-symbols-outlined text-[#807666] text-[16px]">group</span>
          </span>
          <div className="mt-2">
            <div className="text-2xl font-bold text-[#1f1b16] leading-none">151</div>
            <span className="text-[11px] text-[#665d52]">Jiwa Terkatalog</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#eae1d9] flex flex-col justify-between">
          <span className="text-xs text-emerald-800 font-bold flex items-center justify-between">
            Hadir (85%)
            <span className="material-symbols-outlined text-emerald-700 text-[16px]">check_circle</span>
          </span>
          <div className="mt-2">
            <div className="text-2xl font-bold text-emerald-800 leading-none">128</div>
            <span className="text-[11px] text-emerald-700">Tercatat di Ruang</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#eae1d9] flex flex-col justify-between">
          <span className="text-xs text-amber-800 font-bold flex items-center justify-between">
            Sakit (5%)
            <span className="material-symbols-outlined text-amber-700 text-[16px]">medical_services</span>
          </span>
          <div className="mt-2">
            <div className="text-2xl font-bold text-amber-800 leading-none">8</div>
            <span className="text-[11px] text-amber-700">Pokok Doa Syafaat</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#eae1d9] flex flex-col justify-between">
          <span className="text-xs text-[#665d52] flex items-center justify-between">
            Izin (6%)
            <span className="material-symbols-outlined text-[#807666] text-[16px]">event_busy</span>
          </span>
          <div className="mt-2">
            <div className="text-2xl font-bold text-[#1f1b16] leading-none">9</div>
            <span className="text-[11px] text-[#665d52]">Luar Kota / Dinas</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#eae1d9] flex flex-col justify-between">
          <span className="text-xs text-rose-800 font-bold flex items-center justify-between">
            Alpa (4%)
            <span className="material-symbols-outlined text-rose-700 text-[16px]">cancel</span>
          </span>
          <div className="mt-2">
            <div className="text-2xl font-bold text-rose-800 leading-none">6</div>
            <span className="text-[11px] text-rose-700">Perlu Di-Follow up</span>
          </div>
        </div>

        <div className="bg-[#f6ece4] rounded-xl p-4 shadow-sm border border-[#eae1d9] flex flex-col justify-between">
          <span className="text-xs text-[#785600] font-bold flex items-center justify-between">
            Total Kolekte
            <span className="material-symbols-outlined text-[#785600] text-[16px]">payments</span>
          </span>
          <div className="mt-2">
            <div className="text-lg md:text-xl font-bold text-[#785600] leading-none">Rp 3.420.000</div>
            <span className="text-[11px] text-[#665d52]">11 Kantong Kelas</span>
          </div>
        </div>
      </div>

      {/* 11 Categorical Classes Interactive Matrix Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#785600] text-[20px]">hub</span>
            <h2 className="font-headline-md text-lg md:text-xl font-bold text-[#1f1b16]">
              Matriks Ringkasan 11 Kelas Kategorial
            </h2>
          </div>
          <span className="text-xs text-[#665d52]">
            Klik kelas di bawah untuk memuat data roster presensi murid:
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {filteredCards.map((c) => {
            const isSelected = selectedClassId === c.id;
            return (
              <div
                key={c.id}
                onClick={() => setSelectedClassId(c.id)}
                className={`bg-white rounded-xl p-4 transition-all cursor-pointer relative border ${
                  isSelected
                    ? 'ring-2 ring-[#785600] shadow-md border-[#785600]'
                    : 'hover:shadow-md border-[#eae1d9]'
                }`}
              >
                {isSelected && (
                  <div className="absolute -top-2.5 right-4 bg-[#785600] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs">
                    Sedang Dibuka
                  </div>
                )}
                <div className="flex items-start justify-between">
                  <span className="px-2 py-0.5 rounded-full bg-[#f6ece4] text-[#1f1b16] text-[10px] font-mono font-bold">
                    {c.code}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    {c.ratio}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#1f1b16] mt-2">{c.title}</h3>
                <p className="text-xs text-[#665d52] mt-0.5 truncate">{c.teachers}</p>
                <div className="flex items-center justify-between mt-3 pt-2 bg-[#fbf2ea] px-3 py-1.5 rounded-lg text-xs">
                  <span className="text-[#1f1b16]">{c.presentCount}</span>
                  <span className="font-bold text-[#785600]">{c.offering}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Detail Roster & Guest Banner Split View (3 cols table, 1 col guest card) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left 3 Columns: Active Student / Member Roster Table */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-[#eae1d9] overflow-hidden flex flex-col justify-between">
          <div>
            {/* Table Header Controls */}
            <div className="p-4 bg-[#fbf2ea] border-b border-[#eae1d9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#785600]"></span>
                <div>
                  <h3 className="font-title-sm text-sm font-bold text-[#1f1b16]">
                    Roster Presensi: {selectedClassId === 'KAT-02' ? 'KAT-02 Indria (4–6 Tahun)' : selectedClassId}
                  </h3>
                  <p className="text-xs text-[#665d52]">
                    {roster.length} Anggota Terdaftar • Setoran Kolekte: Rp 185.000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[#665d52] font-semibold">Cepat:</span>
                <button
                  type="button"
                  onClick={handleSetAllPresent}
                  className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-bold transition-colors"
                >
                  Semua Hadir
                </button>
                <button
                  type="button"
                  onClick={handleResetAttendance}
                  className="px-2.5 py-1 rounded-lg bg-[#f6ece4] hover:bg-[#eae1d9] text-[#1f1b16] text-xs font-semibold transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Save Success Alert Toast */}
            {saveSuccessToast && (
              <div className="m-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between animate-fade-in">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-700 text-[18px]">check_circle</span>
                  <span>Presensi kelas berhasil disimpan dan disinkronkan ke Google Sheets!</span>
                </span>
                <span className="text-[10px] text-emerald-700 font-mono">Status: 200 OK</span>
              </div>
            )}

            {/* Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body-sm text-xs">
                <thead className="bg-[#fbf2ea] text-[#665d52] uppercase tracking-wider text-[11px] border-b border-[#eae1d9]">
                  <tr>
                    <th className="py-2.5 px-4" scope="col">ID Jemaat</th>
                    <th className="py-2.5 px-4" scope="col">Nama Lengkap &amp; Panggilan</th>
                    <th className="py-2.5 px-4" scope="col">Usia / Tgl Lahir</th>
                    <th className="py-2.5 px-4" scope="col">Wali &amp; Kontak</th>
                    <th className="py-2.5 px-4 text-center" scope="col">Status Kehadiran (1-Tap)</th>
                    <th className="py-2.5 px-4" scope="col">Catatan Khusus</th>
                  </tr>
                </thead>
                <tbody className="text-[#1f1b16] divide-y divide-[#eae1d9]">
                  {filteredRoster.map((pupil) => (
                    <tr
                      key={pupil.id}
                      className={`hover:bg-[#fbf2ea]/50 transition-colors ${
                        pupil.status === 'Sakit'
                          ? 'bg-amber-50/40'
                          : pupil.status === 'Izin'
                          ? 'bg-sky-50/30'
                          : ''
                      }`}
                    >
                      <td className="py-3 px-4 font-mono font-bold text-[#785600]">{pupil.id}</td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-[#1f1b16]">{pupil.name}</div>
                        <div className="text-[11px] text-[#665d52]">Panggilan: {pupil.nickname}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span>{pupil.age}</span>
                        <span className="block text-[11px] text-[#807666]">{pupil.birthDate}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-[#1f1b16]">{pupil.parent}</div>
                        <a
                          href={`https://wa.me/62${pupil.contact.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#785600] hover:underline text-[11px] inline-flex items-center gap-0.5"
                        >
                          <span className="material-symbols-outlined text-[12px]">chat</span>
                          <span>{pupil.contact}</span>
                        </a>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="inline-flex rounded-lg p-0.5 bg-[#f6ece4] border border-[#eae1d9]">
                          {(['Hadir', 'Sakit', 'Izin', 'Alpa'] as AttendanceStatus[]).map((st) => {
                            const isCur = pupil.status === st;
                            return (
                              <button
                                key={st}
                                type="button"
                                onClick={() => handleStatusChange(pupil.id, st)}
                                className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${
                                  isCur
                                    ? st === 'Hadir'
                                      ? 'bg-emerald-600 text-white shadow-xs'
                                      : st === 'Sakit'
                                      ? 'bg-amber-500 text-white shadow-xs'
                                      : st === 'Izin'
                                      ? 'bg-sky-600 text-white shadow-xs'
                                      : 'bg-rose-600 text-white shadow-xs'
                                    : 'text-[#665d52] hover:text-[#1f1b16]'
                                }`}
                              >
                                {st}
                              </button>
                            );
                          })}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-[#665d52] italic max-w-xs">{pupil.note || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table Footer / Actions */}
          <div className="p-4 bg-[#fbf2ea] border-t border-[#eae1d9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#665d52]">
              <span>
                Guru Bertugas: <strong>Cheren Masria, Ibu Sandrawati, Bp. Natanael</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => alert('Membuka catatan evaluasi kelas mingguan...')}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#f6ece4] text-[#1f1b16] font-label-md text-xs font-semibold border border-[#d2c5b2] transition-colors"
              >
                Catatan Evaluasi Kelas
              </button>
              <button
                type="button"
                onClick={handleSaveAttendance}
                className="px-4 py-2 rounded-xl bg-[#785600] text-white font-label-md text-xs font-bold hover:bg-[#5a4000] transition-colors shadow-sm cursor-pointer"
              >
                Simpan Presensi Kelas
              </button>
            </div>
          </div>
        </div>

        {/* Right 1 Column: Tamu Baru & Follow-Up Tracker */}
        <div className="space-y-4">
          {/* New Guest Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#eae1d9]">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-[#ffdea5] text-[#5d4200] font-label-sm text-xs font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">celebration</span> Tamu Baru Hari Ini
              </span>
              <span className="text-[11px] text-[#807666]">18 Okt 2026</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full bg-[#ffdea5]/40 flex items-center justify-center text-[#785600] font-bold text-base">
                JC
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1f1b16] leading-tight">Jonathan Christian</h4>
                <p className="text-xs text-[#665d52]">Usia: 5 Tahun (Sekolah Minggu)</p>
              </div>
            </div>

            <div className="bg-[#fbf2ea] rounded-xl p-3 space-y-1.5 mb-3 text-xs border border-[#eae1d9]">
              <div className="flex items-center justify-between">
                <span className="text-[#665d52]">Diantar oleh:</span>
                <span className="font-semibold text-[#1f1b16]">Doretta Xaviera</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#665d52]">Hubungan:</span>
                <span className="text-[#1f1b16]">Teman Sekolah TK</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#665d52]">Orang Tua:</span>
                <span className="text-[#1f1b16]">Bp. Anton Christian</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#665d52]">No. HP Wali:</span>
                <a className="text-[#785600] font-semibold hover:underline" href="tel:081911223344">
                  0819-1122-3344
                </a>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-900 text-xs mb-3 border border-amber-200">
              <div className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-amber-800 text-[16px] shrink-0 mt-0.5">
                  notification_important
                </span>
                <div>
                  <strong className="font-bold">Status Tindak Lanjut:</strong>
                  <p className="mt-0.5 text-[11px] text-amber-800">
                    Perlu Kunjungan Pastoral &amp; Souvenir Sambutan Anak
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-[#665d52]">
                <span>PIC Follow-up:</span>
                <strong className="text-[#1f1b16]">Sdri. Cheren Masria</strong>
              </div>
              <button
                type="button"
                onClick={() => alert('Jadwal kunjungan follow-up tamu telah dicatat!')}
                className="w-full py-2 px-3 rounded-xl bg-[#f6ece4] hover:bg-[#eae1d9] text-[#785600] text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">add_task</span>
                <span>Jadwalkan Kunjungan Tim Pastoral</span>
              </button>
            </div>
          </div>

          {/* Weekly Scripture Highlight */}
          <div className="bg-[#f6ece4] rounded-2xl p-5 shadow-xs border border-[#eae1d9]">
            <div className="flex items-center gap-1.5 text-[#785600] mb-2 font-bold text-xs">
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              <span className="uppercase tracking-wider">Ayat Penggembalaan Pekan Ini</span>
            </div>
            <blockquote className="font-headline-sm text-sm italic text-[#1f1b16] leading-snug">
              “Didiklah orang muda menurut jalan yang patut baginya, maka pada masa tuanya pun ia tidak akan menyimpang dari pada jalan itu.”
            </blockquote>
            <p className="text-xs text-[#665d52] mt-2 text-right font-medium">— Amsal 22:6 (TB)</p>
          </div>
        </div>
      </div>

      {/* Quick Collection Settlement */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eae1d9]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#785600] text-white flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
            </div>
            <div>
              <h3 className="font-title-md text-base font-bold text-[#1f1b16]">
                Verifikasi &amp; Serah Terima Kolekte Mingguan
              </h3>
              <p className="text-xs text-[#665d52]">
                Total terhimpun Rp 3.420.000 dari 11 kantong kelas kategorial • Diserahkan ke Bendahara Sidang
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-[11px] text-[#665d52] block">Petugas Penerima:</span>
              <span className="text-xs font-bold text-[#1f1b16]">Ibu Evita (Sekretaris / Bendahara)</span>
            </div>
            <button
              type="button"
              onClick={() => setSettlementSigned(true)}
              disabled={settlementSigned}
              className="px-4 py-2.5 rounded-xl bg-[#785600] text-white font-label-md text-xs font-bold hover:bg-[#5a4000] transition-all shadow-sm flex items-center gap-1.5 disabled:bg-emerald-700"
            >
              <span className="material-symbols-outlined text-[16px]">
                {settlementSigned ? 'check' : 'verified_user'}
              </span>
              <span>{settlementSigned ? 'Berita Acara Tertandatangani ✓' : 'Tanda Tangani Berita Acara Kolekte'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
