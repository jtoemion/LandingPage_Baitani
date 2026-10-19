'use client';

import React, { useState } from 'react';

interface VisitationRecord {
  id: string;
  date: string;
  time: string;
  name: string;
  location: string;
  team: string;
  summary: string;
  status: string;
  badgeClass: string;
}

export default function PortalPastoralPage() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isCounselingModalOpen, setIsCounselingModalOpen] = useState(false);
  const [counselingTab, setCounselingTab] = useState<'all' | 'pastor' | 'diaconate'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Schedule modal form state
  const [scheduleName, setScheduleName] = useState('');
  const [scheduleDate, setScheduleDate] = useState('2026-10-25');
  const [scheduleTime, setScheduleTime] = useState('16:00');
  const [scheduleMinister, setScheduleMinister] = useState('Pdt. Kristianto, M.Th. (Gembala Sidang)');
  const [scheduleCategory, setScheduleCategory] = useState('Perjamuan Kudus Rumah Tangga');
  const [scheduleNote, setScheduleNote] = useState('');

  // Counseling modal form state
  const [counselInitial, setCounselInitial] = useState('');
  const [counselTopic, setCounselTopic] = useState('');
  const [counselNotes, setCounselNotes] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(true);

  const [visitations, setVisitations] = useState<VisitationRecord[]>([
    {
      id: 'LW-2026-101',
      date: '16 Okt 2026',
      time: '16:00 WIB',
      name: 'Ibu Gouw Giok Lan',
      location: 'Rumah Tinggal • Jl. Otista No. 12',
      team: 'Pdt. Kristianto, M.Th. & Diaken Bp. Hendra',
      summary: 'Doa penguatan pasca masa duka 40 hari. Keadaan keluarga tabah dan aktif mengikuti ibadah streaming.',
      status: 'Perjamuan Bulan Depan',
      badgeClass: 'bg-[#f6ece4] text-[#1f1b16]',
    },
    {
      id: 'LW-2026-098',
      date: '13 Okt 2026',
      time: '10:30 WIB',
      name: 'Bp. Theodorus Lie',
      location: 'RS Hermina Sukabumi • Ruang 304',
      team: 'Pdt. Hendi Gunawan & Ibu Susan',
      summary: 'Doa pengurapan minyak sebelum tindakan katarak mata kanan. Operasi berjalan lancar keesokan harinya.',
      status: 'Sudah Pulang ke Rumah',
      badgeClass: 'bg-[#ffdea5]/50 text-[#785600]',
    },
    {
      id: 'LW-2026-092',
      date: '09 Okt 2026',
      time: '14:15 WIB',
      name: 'Keluarga Bp. Andreas Halim',
      location: 'Kediaman • Cikole, Sukabumi',
      team: 'Diaken Bp. Thio Jan Fung & Tim Pembina Pemuda',
      summary: 'Persekutuan doa pentahbisan tempat usaha baru keluarga (Toko Roti & Kue Berkat). Doa syukur bersama.',
      status: 'Selesai Lengkap',
      badgeClass: 'bg-[#f6ece4] text-[#665d52]',
    },
    {
      id: 'LW-2026-088',
      date: '03 Okt 2026',
      time: '17:00 WIB',
      name: 'Ibu Tan Bok Nio',
      location: 'Kediaman • Jl. Nyomplong No. 45',
      team: 'Pdt. Kristianto, M.Th. & Ibu Gembala',
      summary: 'Perjamuan kudus di rumah edisi awal bulan Oktober. Penyerahan warta doa cetak ukuran huruf besar.',
      status: 'Perlu Lawatan Ulang Nov',
      badgeClass: 'bg-[#ffdad6] text-[#93000a]',
    },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleSaveSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scheduleName) return;

    const newRecord: VisitationRecord = {
      id: `LW-2026-${Math.floor(Math.random() * 900 + 100)}`,
      date: '25 Okt 2026',
      time: `${scheduleTime} WIB`,
      name: scheduleName,
      location: scheduleNote || 'Sukabumi',
      team: scheduleMinister,
      summary: `${scheduleCategory}: ${scheduleNote || 'Jadwal lawatan pastoral baru.'}`,
      status: 'Terjadwal',
      badgeClass: 'bg-emerald-100 text-emerald-800',
    };

    setVisitations([newRecord, ...visitations]);
    setIsScheduleModalOpen(false);
    showToast(`Jadwal lawatan untuk ${scheduleName} berhasil disimpan ke kalender pastoral!`);
    setScheduleName('');
    setScheduleNote('');
  };

  const handleSaveCounseling = (e: React.FormEvent) => {
    e.preventDefault();
    if (!counselInitial) return;

    setIsCounselingModalOpen(false);
    showToast(`Catatan konseling pastoral untuk ${counselInitial} berhasil dienkripsi dan disimpan!`);
    setCounselInitial('');
    setCounselTopic('');
    setCounselNotes('');
  };

  const exportVisitationCSV = () => {
    const rows = [
      ['ID', 'Tanggal', 'Nama Jemaat', 'Lokasi', 'Tim Pelawat', 'Rangkuman', 'Status'],
      ...visitations.map((v) => [v.id, v.date, v.name, v.location, v.team, v.summary, v.status]),
    ];
    const csvContent = 'data:text/csv;charset=utf-8,' + rows.map((e) => e.map((x) => `"${x}"`).join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Log_Lawatan_GBI_Baitani_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredVisitations = visitations.filter((v) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      v.name.toLowerCase().includes(term) ||
      v.team.toLowerCase().includes(term) ||
      v.location.toLowerCase().includes(term)
    );
  });

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 p-4 rounded-xl bg-white border border-[#785600] text-[#1f1b16] shadow-xl text-xs flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-200">
          <span className="material-symbols-outlined text-[#785600] text-[20px]">check_circle</span>
          <span className="font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Command & Hero Header */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#eae1d9]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-2 mb-2 text-[#785600] font-label-sm text-xs font-bold">
              <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>
              <span className="tracking-widest uppercase">Pelayanan Kasih &amp; Gembala Sidang</span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#807666]"></span>
              <span className="text-[#665d52]">Sensus Aktif 151 Jiwa</span>
            </div>
            <h1 className="font-headline-lg text-2xl md:text-3xl text-[#1f1b16] tracking-tight font-bold mb-2">
              Manajemen Pastoral Care, Lawatan &amp; Ulang Tahun Jemaat
            </h1>
            <p className="font-body-md text-xs sm:text-sm text-[#665d52]">
              Pelayanan penggembalaan holistik, radar ulang tahun otomatis, pemantauan jemaat lansia, dan log konseling rahasia jemaat Baitani Sukabumi.
            </p>
          </div>

          {/* Action Suite */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setIsScheduleModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#785600] text-white hover:bg-[#5a4000] transition-all shadow-sm font-label-md text-xs font-bold cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">add_task</span>
              <span>+ Jadwalkan Lawatan</span>
            </button>
            <button
              type="button"
              onClick={() => setIsCounselingModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#fbf2ea] text-[#1f1b16] hover:bg-[#f6ece4] border border-[#d2c5b2] transition-all font-label-md text-xs font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#785600]">lock_person</span>
              <span>+ Catat Konseling Pastoral</span>
            </button>
            <button
              type="button"
              onClick={() =>
                showToast('Menyiapkan generator ucapan ulang tahun WhatsApp Gateway untuk 4 jemaat 14 hari ke depan...')
              }
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#ebded0] text-[#211b12] hover:bg-[#eae1d9] transition-all font-label-md text-xs font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">send_time_extension</span>
              <span>Kirim Ucapan WA Massal</span>
            </button>
          </div>
        </div>
      </section>

      {/* Metric Quick Tiles (4 cards) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#eae1d9] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#ffdad6]/60 flex items-center justify-center text-[#93000a] shrink-0">
            <span className="material-symbols-outlined text-[24px]">crisis_alert</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-[#665d52] truncate font-medium">Perlu Perhatian Khusus</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-xl font-bold text-[#1f1b16]">3 Jiwa</span>
              <span className="text-[11px] font-bold text-[#ba1a1a]">≥ 3 Mgg Absen</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#eae1d9] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#ffdea5]/50 flex items-center justify-center text-[#785600] shrink-0">
            <span className="material-symbols-outlined text-[24px]">cake</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-[#665d52] truncate font-medium">Ulang Tahun (14 Hari)</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-xl font-bold text-[#1f1b16]">4 Jemaat</span>
              <span className="text-[11px] font-bold text-[#785600]">Radar Siap</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#eae1d9] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#f6ece4] flex items-center justify-center text-[#785600] shrink-0">
            <span className="material-symbols-outlined text-[24px]">home_health</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-[#665d52] truncate font-medium">Lawatan Bulan Ini</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-xl font-bold text-[#1f1b16]">18 Titik</span>
              <span className="text-[11px] font-bold text-emerald-700">92% Terlaksana</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#eae1d9] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#f6ece4] flex items-center justify-center text-[#785600] shrink-0">
            <span className="material-symbols-outlined text-[24px]">security</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-[#665d52] truncate font-medium">Konseling Terproteksi</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-xl font-bold text-[#1f1b16]">6 Kasus</span>
              <span className="text-[11px] font-bold text-[#665d52]">Enkripsi Gembala</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two Columns: Pastoral Early Warning System & Birthday Radar */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Pastoral Alert (7 cols) */}
        <div className="lg:col-span-7 flex flex-col bg-white rounded-2xl shadow-sm border border-[#eae1d9] p-6">
          <div className="flex items-start justify-between pb-4 border-b border-[#eae1d9]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">warning_amber</span>
              </div>
              <div>
                <h2 className="font-title-md text-base font-bold text-[#1f1b16]">
                  Peringatan Gembala: Jemaat Absen ≥ 3 Minggu Berturut-turut
                </h2>
                <p className="text-xs text-[#665d52]">
                  Deteksi otomatis via sinkronisasi presensi 11 kelas ibadah
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] bg-[#ffdad6]/70 text-[#93000a] font-bold shrink-0">
              3 Jiwa Respons
            </span>
          </div>

          {/* Alert Items Container */}
          <div className="flex flex-col divide-y divide-[#eae1d9] mt-2">
            {/* Item 1: Ibu Tan Bok Nio */}
            <div className="py-4 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f6ece4] flex items-center justify-center text-[#785600] font-bold text-xs shrink-0">
                    TBN
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-title-sm text-sm font-bold text-[#1f1b16]">Ibu Tan Bok Nio</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#f6ece4] text-[#665d52] font-semibold">
                        87 thn • Senior 2
                      </span>
                    </div>
                    <span className="text-xs text-rose-700 font-semibold mt-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">event_busy</span>
                      Terakhir hadir: 27 September 2026 (Absen 4 Minggu Berturut)
                    </span>
                    <p className="text-xs text-[#4e4637] mt-1">
                      <span className="font-bold text-[#1f1b16]">Catatan Kondisi:</span> Sakit lutut menahun &amp; mobilitas sangat terbatas. Membutuhkan kursi roda.
                    </p>
                    <p className="text-[11px] text-[#665d52] flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      Jl. Nyomplong No. 45, Sukabumi
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pl-0 sm:pl-13 mt-1">
                <button
                  type="button"
                  onClick={() =>
                    showToast('Permintaan Perjamuan Kudus di Rumah didaftarkan ke Jadwal Pelayanan Pdt. Kristianto')
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#785600] text-white text-xs font-bold hover:bg-[#5a4000] transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">local_cafe</span>
                  <span>Jadwalkan Perjamuan Kudus di Rumah</span>
                </button>
                <a
                  href="https://wa.me/6281233449988?text=Syalom%20Ibu%2C%20salam%20kasih%20dari%20GBI%20Baitani.%20Kami%20rindu%20menanyakan%20kondisi%20Ibu%20Tan%20Bok%20Nio..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fbf2ea] text-[#1f1b16] hover:bg-[#f6ece4] border border-[#d2c5b2] text-xs font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-emerald-700">chat</span>
                  <span>Hubungi Anak: 0812-3344-xxxx</span>
                </a>
              </div>
            </div>

            {/* Item 2: Bp. Herry */}
            <div className="py-4 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f6ece4] flex items-center justify-center text-[#785600] font-bold text-xs shrink-0">
                    BH
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-title-sm text-sm font-bold text-[#1f1b16]">Bp. Herry</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#f6ece4] text-[#665d52] font-semibold">
                        71 thn • Senior 2
                      </span>
                    </div>
                    <span className="text-xs text-rose-700 font-semibold mt-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">event_busy</span>
                      Terakhir hadir: 20 September 2026 (Absen 5 Minggu Berturut)
                    </span>
                    <p className="text-xs text-[#4e4637] mt-1">
                      <span className="font-bold text-[#1f1b16]">Catatan Kondisi:</span> Masa pemulihan pasca serangan stroke ringan. Sedang terapi fisioterapi mingguan.
                    </p>
                    <p className="text-[11px] text-[#665d52] flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      Komp. Danalestari Blok C-12, Sukabumi
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pl-0 sm:pl-13 mt-1">
                <button
                  type="button"
                  onClick={() =>
                    showToast('Disposisi lawatan diteruskan ke Diaken Bp. Thio Jan Fung melalui WhatsApp.')
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fbf2ea] text-[#1f1b16] hover:bg-[#f6ece4] border border-[#d2c5b2] text-xs font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">assignment_ind</span>
                  <span>Tugaskan Diaken Bp. Thio Jan Fung</span>
                </button>
                <button
                  type="button"
                  onClick={() => showToast('Panggilan doa otomatis telah tercatat di log!')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f6ece4] text-[#665d52] hover:text-[#1f1b16] text-xs font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">phone_in_talk</span>
                  <span>Telepon Rumah Jemaat</span>
                </button>
              </div>
            </div>

            {/* Item 3: Ibu Suryani */}
            <div className="py-4 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f6ece4] flex items-center justify-center text-[#785600] font-bold text-xs shrink-0">
                    SY
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-title-sm text-sm font-bold text-[#1f1b16]">Ibu Suryani</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#f6ece4] text-[#665d52] font-semibold">
                        69 thn • Senior 1
                      </span>
                    </div>
                    <span className="text-xs text-rose-700 font-semibold mt-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">event_busy</span>
                      Terakhir hadir: 27 September 2026 (Absen 4 Minggu Berturut)
                    </span>
                    <p className="text-xs text-[#4e4637] mt-1">
                      <span className="font-bold text-[#1f1b16]">Catatan:</span> Menjaga cucu sakit di luar kota (Bandung) menurut kabar warta komisi wanita.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pl-0 sm:pl-13 mt-1">
                <button
                  type="button"
                  onClick={() => showToast('Menghubungi Ibu Suryani via Pastoral Line WhatsApp...')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#785600] text-white text-xs font-bold hover:bg-[#5a4000] transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">phone_enabled</span>
                  <span>Telepon Pastoral Langsung</span>
                </button>
                <button
                  type="button"
                  onClick={() => showToast('Status Ibu Suryani ditandai sudah dipantau!')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fbf2ea] text-[#665d52] text-xs font-semibold hover:text-[#1f1b16] transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Tandai Sudah Dipantau</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Birthday Radar 14 Days (5 cols) */}
        <div className="lg:col-span-5 flex flex-col bg-white rounded-2xl shadow-sm border border-[#eae1d9] p-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#eae1d9]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#ffdea5]/50 text-[#785600]">
                <span className="material-symbols-outlined text-[22px]">celebration</span>
              </div>
              <div>
                <h2 className="font-title-md text-base font-bold text-[#1f1b16]">Radar Ulang Tahun</h2>
                <span className="text-xs text-[#665d52]">Sinkronisasi otomatis basis data sensus</span>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#f6ece4] text-[#785600] font-bold">
              14 Hari ke Depan
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {/* Birthday 1 */}
            <div className="p-3.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#785600] text-[22px]">child_care</span>
                  <div className="flex flex-col">
                    <span className="font-title-sm text-sm font-bold text-[#1f1b16]">Axel Danilla Susilo</span>
                    <span className="text-xs text-[#665d52]">Kelas Indria • Genap 4 Tahun</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-label-md text-xs text-[#785600] font-bold">29 Okt</span>
                  <span className="text-[10px] text-[#211b12] bg-[#ede0d2] px-1.5 py-0.5 rounded font-semibold">
                    4 hari lagi
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#eae1d9] text-xs">
                <span className="text-[#665d52]">Ortu: Ibu Merla (0812-1458-2962)</span>
                <a
                  className="inline-flex items-center gap-1 text-[#785600] hover:underline font-bold"
                  href="https://wa.me/6281214582962?text=Syalom%20Ibu%20Merla%2C%20Keluarga%20Besar%20GBI%20Baitani%20Sukabumi%20mengucapkan%20Selamat%20Ulang%20Tahun%20untuk%20Axel%20Danilla%20Susilo%20yang%20ke-4.%20Kiranya%20Tuhan%20Yesus%20memberkati%2C%20tumbuh%20sehat%2C%20cerdas%2C%20dan%20menjadi%20anak%20yang%20takut%20akan%20Tuhan!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[15px]">chat</span>
                  <span>Kirim WA Doa</span>
                </a>
              </div>
            </div>

            {/* Birthday 2 */}
            <div className="p-3.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#785600] text-[22px]">elderly</span>
                  <div className="flex flex-col">
                    <span className="font-title-sm text-sm font-bold text-[#1f1b16]">Ibu Wiesye Mirnawati</span>
                    <span className="text-xs text-[#665d52]">Senior 2 • Genap 72 Tahun</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-label-md text-xs text-[#785600] font-bold">08 Nov</span>
                  <span className="text-[10px] text-[#665d52]">14 hari lagi</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#eae1d9] text-xs">
                <span className="text-[#665d52]">Status: Pelayanan Lansia Aktif</span>
                <a
                  className="inline-flex items-center gap-1 text-[#785600] hover:underline font-bold"
                  href="https://wa.me/?text=Syalom%20Ibu%20Wiesye%20Mirnawati%2C%20Gembala%20Sidang%20dan%20seluruh%20pengerja%20GBI%20Baitani%20Sukabumi%20mengucapkan%20selamat%20ulang%20tahun%20ke-72.%20Kiranya%20panjang%20umur%2C%20kekuatan%2C%20dan%20damai%20sejahtera%20Kristus%20senantiasa%20menyertai!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[15px]">chat</span>
                  <span>Doa Gembala (WA)</span>
                </a>
              </div>
            </div>

            {/* Birthday 3 */}
            <div className="p-3.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#785600] text-[22px]">person</span>
                  <div className="flex flex-col">
                    <span className="font-title-sm text-sm font-bold text-[#1f1b16]">Bp. Eddy Mulyadi</span>
                    <span className="text-xs text-[#665d52]">Dewasa Onsite • Genap 51 Tahun</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-label-md text-xs text-[#785600] font-bold">12 Nov</span>
                  <span className="text-[10px] text-[#665d52]">18 hari lagi</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#eae1d9] text-xs">
                <span className="text-[#665d52]">Pelayan: Tim Mimbar &amp; Altar</span>
                <a
                  className="inline-flex items-center gap-1 text-[#785600] hover:underline font-bold"
                  href="https://wa.me/?text=Syalom%20Bp.%20Eddy%2C%20selamat%20ulang%20tahun%20dari%20keluarga%20GBI%20Baitani."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[15px]">chat</span>
                  <span>WA Langsung</span>
                </a>
              </div>
            </div>

            {/* Birthday 4 */}
            <div className="p-3.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#785600] text-[22px]">school</span>
                  <div className="flex flex-col">
                    <span className="font-title-sm text-sm font-bold text-[#1f1b16]">Audrey Nathania</span>
                    <span className="text-xs text-[#665d52]">Kelas Madya • Genap 11 Tahun</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-label-md text-xs text-[#785600] font-bold">15 Nov</span>
                  <span className="text-[10px] text-[#665d52]">21 hari lagi</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#eae1d9] text-xs">
                <span className="text-[#665d52]">Ortu: Bp. Samuel Tanudjaja</span>
                <a
                  className="inline-flex items-center gap-1 text-[#785600] hover:underline font-bold"
                  href="https://wa.me/?text=Syalom%20Bapak%20Samuel%2C%20selamat%20ulang%20tahun%20untuk%20Audrey%20Nathania..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[15px]">chat</span>
                  <span>WA Orang Tua</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastoral Counseling & Confidential Prayer Journal */}
      <section className="bg-white rounded-2xl shadow-sm border border-[#eae1d9] p-6 flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#eae1d9]">
          <div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#785600] text-[24px]">folder_supervised</span>
              <h2 className="font-title-md text-lg font-bold text-[#1f1b16]">
                Jurnal Konseling Pastoral &amp; Pokok Syafaat Khusus
              </h2>
            </div>
            <p className="font-body-sm text-xs text-[#665d52] mt-0.5">
              Pencatatan konfidensial bimbingan jiwa, pendampingan medis, dan konseling pra-nikah
            </p>
          </div>

          {/* Filter Pill Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setCounselingTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                counselingTab === 'all'
                  ? 'bg-white text-[#1f1b16] shadow-xs'
                  : 'text-[#665d52] hover:text-[#1f1b16]'
              }`}
            >
              Semua Catatan (3)
            </button>
            <button
              type="button"
              onClick={() => setCounselingTab('pastor')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                counselingTab === 'pastor'
                  ? 'bg-white text-[#1f1b16] shadow-xs'
                  : 'text-[#665d52] hover:text-[#1f1b16]'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">key</span>
              <span>Khusus Gembala (Privat)</span>
            </button>
            <button
              type="button"
              onClick={() => setCounselingTab('diaconate')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                counselingTab === 'diaconate'
                  ? 'bg-white text-[#1f1b16] shadow-xs'
                  : 'text-[#665d52] hover:text-[#1f1b16]'
              }`}
            >
              Tindak Lanjut Diaken
            </button>
          </div>
        </div>

        {/* Journal Stream */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Journal Card 1: Medis RSUD Syamsudin */}
          {(counselingTab === 'all' || counselingTab === 'pastor') && (
            <div className="bg-[#fbf2ea]/70 rounded-xl p-4 flex flex-col justify-between border border-[#eae1d9]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#785600] text-white">
                    Khusus Gembala
                  </span>
                  <span className="text-xs text-[#665d52]">Sel, 20 Okt 2026</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#785600] text-[20px]">local_hospital</span>
                  <h3 className="font-title-sm text-sm text-[#1f1b16] font-bold">Keluarga Bpk. S</h3>
                  <span className="text-xs text-[#665d52]">(Jemaat Dewasa)</span>
                </div>
                <p className="font-body-sm text-xs text-[#4e4637] leading-relaxed">
                  Pendampingan spiritual pasca tindakan medis di RSUD Syamsudin Sukabumi. Gembala menjadwalkan kunjungan doa Selasa sore pukul 16:30 WIB.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#eae1d9] flex items-center justify-between text-xs">
                <span className="text-[#785600] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> 16:30 WIB
                </span>
                <button
                  type="button"
                  onClick={() => showToast('Membuka rincian terenkripsi Gembala Sidang...')}
                  className="text-[#1f1b16] hover:text-[#785600] font-bold flex items-center gap-0.5"
                >
                  <span>Buka</span>
                  <span className="material-symbols-outlined text-[14px]">visibility</span>
                </button>
              </div>
            </div>
          )}

          {/* Journal Card 2: Pra-Nikah */}
          {(counselingTab === 'all' || counselingTab === 'pastor') && (
            <div className="bg-[#fbf2ea]/70 rounded-xl p-4 flex flex-col justify-between border border-[#eae1d9]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#f6ece4] text-[#1f1b16] border border-[#d2c5b2]">
                    Pra-Nikah Kristen
                  </span>
                  <span className="text-xs text-[#665d52]">Sabtu, 17 Okt 2026</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#785600] text-[20px]">diversity_1</span>
                  <h3 className="font-title-sm text-sm text-[#1f1b16] font-bold">Sdri. Mery</h3>
                  <span className="text-xs text-[#665d52]">(Komisi Pemuda)</span>
                </div>
                <p className="font-body-sm text-xs text-[#4e4637] leading-relaxed">
                  Konseling pra-nikah sesi 3 — Bimbingan fondasi keluarga Kristen Baptis, resolusi konflik pasangan, serta komitmen kesetiaan kudus.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#eae1d9] flex items-center justify-between text-xs">
                <span className="text-[#665d52] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-emerald-700">verified</span> Selesai Sesi 3/5
                </span>
                <button
                  type="button"
                  onClick={() => showToast('Modul bimbingan sesi 4 tersedia untuk diunduh.')}
                  className="text-[#1f1b16] hover:text-[#785600] font-bold flex items-center gap-0.5"
                >
                  <span>Silabus</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </button>
              </div>
            </div>
          )}

          {/* Journal Card 3: Diakonia Kasih Lansia */}
          {(counselingTab === 'all' || counselingTab === 'diaconate') && (
            <div className="bg-[#fbf2ea]/70 rounded-xl p-4 flex flex-col justify-between border border-[#eae1d9]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ebded0] text-[#211b12]">
                    Tindak Lanjut Diaken
                  </span>
                  <span className="text-xs text-[#665d52]">Kamis, 15 Okt 2026</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#785600] text-[20px]">volunteer_activism</span>
                  <h3 className="font-title-sm text-sm text-[#1f1b16] font-bold">Ibu Susan &amp; Tim Lansia</h3>
                  <span className="text-xs text-[#665d52]">(Diakonia Sosial)</span>
                </div>
                <p className="font-body-sm text-xs text-[#4e4637] leading-relaxed">
                  Penyaluran diakonia kasih bulanan untuk 4 opa/oma berkebutuhan khusus &amp; vitamin nutrisi manula. Pembagian paket sembako dan persekutuan doa pribadi.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#eae1d9] flex items-center justify-between text-xs">
                <span className="text-emerald-800 font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-emerald-700">sync</span> Berjalan Reguler
                </span>
                <button
                  type="button"
                  onClick={() => showToast('Laporan alokasi kas diakonia tercatat Rp 1.850.000')}
                  className="text-[#1f1b16] hover:text-[#785600] font-bold flex items-center gap-0.5"
                >
                  <span>Rincian</span>
                  <span className="material-symbols-outlined text-[14px]">receipt_long</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Structured History Table: Log Lawatan Rumah & Rumah Sakit */}
      <section className="bg-white rounded-2xl shadow-sm border border-[#eae1d9] p-6 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#eae1d9]">
          <div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#785600] text-[24px]">history_edu</span>
              <h2 className="font-title-md text-base md:text-lg font-bold text-[#1f1b16]">
                Log Lawatan Rumah &amp; Rumah Sakit
              </h2>
            </div>
            <p className="font-body-sm text-xs text-[#665d52] mt-0.5">
              Pencatatan historis kunjungan pastoral Tim Penggembalaan dan Majelis Diaken GBI Baitani
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[#807666] text-[16px]">
                search
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari jemaat / pelawat..."
                className="pl-8 pr-3 py-1.5 rounded-lg bg-[#fbf2ea] text-[#1f1b16] text-xs border border-transparent focus:border-[#d2c5b2] focus:outline-none w-52 sm:w-64"
              />
            </div>
            <button
              type="button"
              onClick={exportVisitationCSV}
              className="p-2 rounded-lg bg-[#fbf2ea] hover:bg-[#f6ece4] text-[#1f1b16] border border-[#eae1d9] transition-colors"
              title="Ekspor Log CSV"
            >
              <span className="material-symbols-outlined text-[18px] text-[#785600]">download</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#fbf2ea] text-[#665d52] font-label-sm text-xs border-b border-[#eae1d9]">
                <th className="py-2.5 px-4 font-semibold">Tanggal</th>
                <th className="py-2.5 px-4 font-semibold">Nama Jemaat Dikunjungi</th>
                <th className="py-2.5 px-4 font-semibold">Tim Pelawat</th>
                <th className="py-2.5 px-4 font-semibold">Rangkuman Kunjungan</th>
                <th className="py-2.5 px-4 font-semibold">Tindak Lanjut &amp; Status</th>
                <th className="py-2.5 px-4 text-right font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eae1d9] font-body-sm text-xs">
              {filteredVisitations.map((row) => (
                <tr key={row.id} className="hover:bg-[#fbf2ea]/40 transition-colors">
                  <td className="py-3 px-4 whitespace-nowrap text-[#1f1b16] font-medium">
                    {row.date}
                    <span className="block text-[11px] text-[#665d52]">{row.time}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-bold text-[#1f1b16]">{row.name}</div>
                    <div className="text-[11px] text-[#665d52]">{row.location}</div>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-1 text-[#1f1b16]">
                      <span className="material-symbols-outlined text-[#785600] text-[16px]">person</span>
                      <span>{row.team}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[#4e4637] max-w-xs">{row.summary}</td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${row.badgeClass}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() => showToast(`Membuka rincian lawatan ${row.id}`)}
                      className="text-[#785600] hover:underline p-1 text-xs font-bold"
                    >
                      Rincian
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Modal 1: Jadwalkan Lawatan */}
      {isScheduleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-[#eae1d9] flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#eae1d9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#785600] text-[22px]">calendar_add_on</span>
                <h3 className="font-title-md text-base font-bold text-[#1f1b16]">Jadwalkan Lawatan Baru</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsScheduleModalOpen(false)}
                className="text-[#665d52] hover:text-[#1f1b16] p-1"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveSchedule} className="flex flex-col gap-3 text-xs">
              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Nama Jemaat / Keluarga</label>
                <input
                  type="text"
                  required
                  value={scheduleName}
                  onChange={(e) => setScheduleName(e.target.value)}
                  placeholder="Contoh: Ibu Tan Bok Nio / Kel. Bpk S"
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#1f1b16] mb-1">Tanggal</label>
                  <input
                    type="date"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#1f1b16] mb-1">Waktu</label>
                  <input
                    type="time"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Pelayan / Tim Ditugaskan</label>
                <select
                  value={scheduleMinister}
                  onChange={(e) => setScheduleMinister(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                >
                  <option>Pdt. Kristianto, M.Th. (Gembala Sidang)</option>
                  <option>Pdt. Hendi Gunawan</option>
                  <option>Diaken Bp. Thio Jan Fung</option>
                  <option>Diaken Bp. Hendra</option>
                  <option>Ibu Susan (Tim Diakonia Lansia)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Kategori / Tujuan Kunjungan</label>
                <select
                  value={scheduleCategory}
                  onChange={(e) => setScheduleCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                >
                  <option>Perjamuan Kudus Rumah Tangga</option>
                  <option>Kunjungan Rumah Sakit / Doa Orang Sakit</option>
                  <option>Pastoral Care Jemaat Absen</option>
                  <option>Penguatan Duka Cita</option>
                  <option>Penyerahan Anak / Syukuran Rumah</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Catatan Khusus / Alamat</label>
                <textarea
                  rows={2}
                  value={scheduleNote}
                  onChange={(e) => setScheduleNote(e.target.value)}
                  placeholder="Tuliskan nomor kontak kerabat atau patokan alamat..."
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#eae1d9] mt-2">
                <button
                  type="button"
                  onClick={() => setIsScheduleModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-[#665d52] hover:bg-[#f6ece4] font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#785600] text-white font-bold hover:bg-[#5a4000] shadow-sm"
                >
                  Simpan Jadwal Lawatan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 2: Catat Konseling Pastoral */}
      {isCounselingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-[#eae1d9] flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#eae1d9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#785600] text-[22px]">lock</span>
                <h3 className="font-title-md text-base font-bold text-[#1f1b16]">Catat Konseling Rahasia Gembala</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCounselingModalOpen(false)}
                className="text-[#665d52] hover:text-[#1f1b16] p-1"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveCounseling} className="flex flex-col gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#ffdad6]/40 border border-[#ffdad6] text-[#1f1b16] flex items-start gap-2">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[18px] shrink-0 mt-0.5">
                  verified_user
                </span>
                <span className="text-[11px] leading-relaxed">
                  Catatan ini disimpan dalam protokol kerahasiaan pastoral GBI Baitani (Jabatan Gerejawi). Hanya Gembala Sidang yang memiliki kunci dekripsi catatan ini.
                </span>
              </div>

              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Inisial / Nama Konseli</label>
                <input
                  type="text"
                  required
                  value={counselInitial}
                  onChange={(e) => setCounselInitial(e.target.value)}
                  placeholder="Contoh: Bpk. S / Sdri. M"
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Topik Bimbingan</label>
                <input
                  type="text"
                  required
                  value={counselTopic}
                  onChange={(e) => setCounselTopic(e.target.value)}
                  placeholder="Misal: Krisis Keluarga, Kedukaan, Bimbingan Pra-nikah"
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Rangkuman Pokok Masalah &amp; Ayat Penguatan</label>
                <textarea
                  rows={3}
                  required
                  value={counselNotes}
                  onChange={(e) => setCounselNotes(e.target.value)}
                  placeholder="Tuliskan pokok doa dan kesepakatan langkah pastoral selanjutnya..."
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="privateCheck"
                  checked={isEncrypted}
                  onChange={(e) => setIsEncrypted(e.target.checked)}
                  className="w-3.5 h-3.5 rounded text-[#785600] accent-[#785600]"
                />
                <label htmlFor="privateCheck" className="text-xs text-[#1f1b16] font-semibold cursor-pointer">
                  Kunci dengan PIN Enkripsi Pastoral Gembala (SHA-256)
                </label>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#eae1d9] mt-2">
                <button
                  type="button"
                  onClick={() => setIsCounselingModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-[#665d52] hover:bg-[#f6ece4] font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#785600] text-white font-bold hover:bg-[#5a4000] shadow-sm"
                >
                  Simpan ke Lemari Besi Pastoral
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
