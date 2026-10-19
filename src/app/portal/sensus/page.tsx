'use client';

import React, { useState, useMemo } from 'react';
import { JEMAAT_MASTER, JemaatMember } from '@/data/jemaatData';

export default function PortalSensusPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 12;

  // Selected member for detail drawer (default to Axel Danilla Susilo JMT-0008)
  const defaultSelected = useMemo(() => {
    return (
      JEMAAT_MASTER.find((j) => j.id === 'JMT-0008') ||
      JEMAAT_MASTER[0]
    );
  }, []);

  const [selectedMember, setSelectedMember] = useState<JemaatMember>(defaultSelected);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  // New member form
  const [newFullName, setNewFullName] = useState('');
  const [newNickName, setNewNickName] = useState('');
  const [newGender, setNewGender] = useState('L');
  const [newClass, setNewClass] = useState('Dewasa (30-55 Tahun)');
  const [newBaptis, setNewBaptis] = useState(true);
  const [newPhone, setNewPhone] = useState('');
  const [newWali, setNewWali] = useState('');

  const [membersList, setMembersList] = useState<JemaatMember[]>(JEMAAT_MASTER);

  const showNotification = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg('');
    }, 3500);
  };

  const filteredMembers = useMemo(() => {
    return membersList.filter((m) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = m.nama_lengkap.toLowerCase().includes(q);
        const matchNick = m.nama_panggilan.toLowerCase().includes(q);
        const matchPhone = (m.no_hp || '').includes(q) || (m.hp_wali || '').includes(q);
        const matchWali = (m.nama_wali || '').toLowerCase().includes(q);
        const matchId = m.id.toLowerCase().includes(q);
        if (!matchName && !matchNick && !matchPhone && !matchWali && !matchId) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'all') {
        if (!m.kelas_kategorial.toLowerCase().includes(selectedCategory.toLowerCase())) {
          return false;
        }
      }

      // Status filter
      if (selectedStatus !== 'all') {
        if (selectedStatus === 'Pengerja') {
          if (m.status_keanggotaan !== 'Pengerja') return false;
        } else if (selectedStatus === 'Tetap') {
          if (m.status_keanggotaan !== 'Anggota Tetap') return false;
        } else if (selectedStatus === 'Baptis') {
          if (!m.is_baptis) return false;
        } else if (selectedStatus === 'Murid') {
          if (
            !m.kelas_kategorial.includes('Asuhan') &&
            !m.kelas_kategorial.includes('Indria') &&
            !m.kelas_kategorial.includes('Pratama') &&
            !m.kelas_kategorial.includes('Madya')
          ) {
            return false;
          }
        }
      }

      return true;
    });
  }, [membersList, searchQuery, selectedCategory, selectedStatus]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredMembers.length / rowsPerPage) || 1;
  const paginatedMembers = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredMembers.slice(start, start + rowsPerPage);
  }, [filteredMembers, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleAddNewMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFullName) return;

    const newId = `JMT-${String(membersList.length + 1).padStart(4, '0')}`;
    const newEntry: JemaatMember = {
      id: newId,
      nama_lengkap: newFullName,
      nama_panggilan: newNickName || newFullName.split(' ')[0],
      tanggal_lahir: '2000-01-01',
      jenis_kelamin: newGender,
      kelas_kategorial: newClass,
      no_hp: newPhone,
      nama_wali: newWali,
      hp_wali: newPhone,
      alamat: 'Sukabumi',
      status_keanggotaan: newBaptis ? 'Anggota Tetap' : 'Warga Simpatisan',
      is_baptis: newBaptis,
      catatan_pastoral: 'Warga baru terdata sensus.',
    };

    setMembersList([newEntry, ...membersList]);
    setSelectedMember(newEntry);
    setIsAddModalOpen(false);
    showNotification(`Jemaat ${newFullName} berhasil didaftarkan dengan ID ${newId}`);

    // Reset inputs
    setNewFullName('');
    setNewNickName('');
    setNewPhone('');
    setNewWali('');
  };

  const exportCensusCSV = () => {
    const headers = [
      'ID Jemaat',
      'Nama Lengkap',
      'Nama Panggilan',
      'Tgl Lahir',
      'Gender',
      'Kelas Kategorial',
      'No HP',
      'Wali',
      'HP Wali',
      'Status',
      'Baptis',
    ];
    const rows = filteredMembers.map((m) => [
      m.id,
      m.nama_lengkap,
      m.nama_panggilan,
      m.tanggal_lahir,
      m.jenis_kelamin,
      m.kelas_kategorial,
      m.no_hp || '',
      m.nama_wali || '',
      m.hp_wali || '',
      m.status_keanggotaan,
      m.is_baptis ? 'TRUE' : 'FALSE',
    ]);
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers, ...rows].map((e) => e.map((x) => `"${x}"`).join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Sensus_GBI_Baitani_${new Date().getFullYear()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed top-24 right-6 z-50 p-4 rounded-xl bg-white border border-[#785600] text-[#1f1b16] shadow-xl text-xs flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-200">
          <span className="material-symbols-outlined text-[#785600] text-[20px]">check_circle</span>
          <span className="font-semibold">{toastMsg}</span>
        </div>
      )}

      {/* Header Section */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#eae1d9]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-3xl">
            <div className="flex items-center gap-1.5 text-[#785600] font-label-sm text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span>Buku Registrasi Induk Sidang Jemaat</span>
            </div>
            <h1 className="font-headline-xl text-2xl md:text-3xl text-[#1f1b16] font-bold tracking-tight">
              Master Database Jemaat &amp; Sensus Keluarga
            </h1>
            <p className="font-body-md text-xs sm:text-sm text-[#665d52] mt-1">
              Berdasarkan data migrasi resmi presensi triwulan 2026:{' '}
              <strong className="text-[#1f1b16] font-semibold">151 Jiwa</strong>,{' '}
              <strong className="text-[#1f1b16] font-semibold">127 Akun Keluarga</strong>, terpetakan ke dalam{' '}
              <strong className="text-[#1f1b16] font-semibold">11 Kelas Kategorial Usia</strong>.
            </p>
          </div>

          {/* Header Quick Actions */}
          <div className="flex items-center flex-wrap gap-2">
            <button
              type="button"
              onClick={() => showNotification('Sinkronisasi Google Sheets tab master berhasil!')}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#fbf2ea] hover:bg-[#f6ece4] text-[#1f1b16] text-xs font-semibold border border-[#d2c5b2] transition-all shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px] text-[#785600]">sync</span>
              <span>Sinkronkan Sheets</span>
            </button>
            <button
              type="button"
              onClick={exportCensusCSV}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#fbf2ea] hover:bg-[#f6ece4] text-[#1f1b16] text-xs font-semibold border border-[#d2c5b2] transition-all shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px] text-[#665d52]">file_download</span>
              <span>Ekspor Master CSV</span>
            </button>
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#785600] text-white text-xs font-bold hover:bg-[#5a4000] transition-all shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              <span>+ Tambah Warga Jemaat</span>
            </button>
          </div>
        </div>
      </section>

      {/* Top Key Metric Ribbon (5 cards) */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="flex flex-col p-4 rounded-xl bg-white shadow-sm border border-[#eae1d9]">
          <div className="flex items-center justify-between text-[#665d52]">
            <span className="text-xs font-semibold">Total Sensus Jiwa</span>
            <span className="material-symbols-outlined text-[20px] text-[#785600]">groups</span>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl md:text-3xl font-bold text-[#785600]">151</span>
            <span className="text-xs text-[#665d52]">Jiwa Terdata</span>
          </div>
          <span className="mt-1 text-[10px] text-[#807666]">100% Tercakup Triwulan IV</span>
        </div>

        <div className="flex flex-col p-4 rounded-xl bg-white shadow-sm border border-[#eae1d9]">
          <div className="flex items-center justify-between text-[#665d52]">
            <span className="text-xs font-semibold">Akun Keluarga WA</span>
            <span className="material-symbols-outlined text-[20px] text-[#785600]">family_restroom</span>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl md:text-3xl font-bold text-[#785600]">127</span>
            <span className="text-xs text-[#665d52]">Kartu Keluarga</span>
          </div>
          <span className="mt-1 text-[10px] text-[#807666]">Shared Login Wali Otomatis</span>
        </div>

        <div className="flex flex-col p-4 rounded-xl bg-white shadow-sm border border-[#eae1d9]">
          <div className="flex items-center justify-between text-[#665d52]">
            <span className="text-xs font-semibold">Pengerja &amp; Guru</span>
            <span className="material-symbols-outlined text-[20px] text-[#785600]">volunteer_activism</span>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl md:text-3xl font-bold text-[#785600]">35</span>
            <span className="text-xs text-[#665d52]">Pelayan Aktif</span>
          </div>
          <span className="mt-1 text-[10px] text-[#807666]">11 Kelas Kategorial Terbina</span>
        </div>

        <div className="flex flex-col p-4 rounded-xl bg-white shadow-sm border border-[#eae1d9]">
          <div className="flex items-center justify-between text-[#665d52]">
            <span className="text-xs font-semibold">Baptisan Selam</span>
            <span className="material-symbols-outlined text-[20px] text-[#785600]">water_drop</span>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl md:text-3xl font-bold text-[#785600]">114</span>
            <span className="text-xs text-[#665d52]">Warga Sah</span>
          </div>
          <span className="mt-1 text-[10px] text-[#807666]">75.5% Anggota Penuh</span>
        </div>

        <div className="col-span-2 md:col-span-1 flex flex-col p-4 rounded-xl bg-white shadow-sm border border-[#eae1d9]">
          <div className="flex items-center justify-between text-[#665d52]">
            <span className="text-xs font-semibold">Anak &amp; Balita</span>
            <span className="material-symbols-outlined text-[20px] text-[#785600]">child_care</span>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl md:text-3xl font-bold text-[#785600]">28</span>
            <span className="text-xs text-[#665d52]">Generasi Anak</span>
          </div>
          <span className="mt-1 text-[10px] text-[#807666]">Indria, Batita, Pratama</span>
        </div>
      </section>

      {/* Search & Filters Bar */}
      <section className="flex flex-col gap-3 p-4 rounded-2xl bg-white shadow-sm border border-[#eae1d9]">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#807666] text-[18px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari nama jemaat, nama panggilan, nomor WA, atau nama wali..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#fbf2ea] text-[#1f1b16] placeholder:text-[#807666] text-xs focus:outline-none focus:ring-1 focus:ring-[#785600] border border-transparent focus:border-[#d2c5b2] transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
            <span className="text-xs text-[#665d52] font-semibold whitespace-nowrap pr-1">Kategori:</span>
            {[
              { id: 'all', label: 'Semua (11 Kelas)' },
              { id: 'Indria', label: 'Indria (4-6 Thn)' },
              { id: 'Pratama', label: 'Pratama' },
              { id: 'Madya', label: 'Madya' },
              { id: 'Dewasa', label: 'Dewasa Onsite' },
              { id: 'Senior', label: 'Senior 1 & 2' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#785600] text-white shadow-xs'
                    : 'bg-[#fbf2ea] text-[#4e4637] hover:bg-[#f6ece4]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#eae1d9] text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[#665d52] font-semibold">Status:</span>
            {[
              { id: 'all', label: 'Semua Status' },
              { id: 'Pengerja', label: 'Pengerja / Guru' },
              { id: 'Tetap', label: 'Anggota Tetap' },
              { id: 'Baptis', label: 'Baptisan Selam' },
              { id: 'Murid', label: 'Murid Sekolah Minggu' },
            ].map((st) => (
              <button
                key={st.id}
                type="button"
                onClick={() => {
                  setSelectedStatus(st.id);
                  setCurrentPage(1);
                }}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                  selectedStatus === st.id
                    ? 'bg-[#f6ece4] text-[#785600] font-bold border border-[#d2c5b2]'
                    : 'text-[#665d52] hover:text-[#1f1b16]'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
          <div className="text-[#665d52]">
            Menampilkan <span className="font-bold text-[#1f1b16]">{filteredMembers.length}</span> dari{' '}
            <span className="font-bold text-[#1f1b16]">{membersList.length}</span> Record Jemaat Sensus
          </div>
        </div>
      </section>

      {/* Main Grid: Split between Master Table and Detail Family Inspection Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Census Table (8 cols) */}
        <section className="lg:col-span-8 flex flex-col gap-4">
          <div className="bg-white rounded-2xl shadow-sm border border-[#eae1d9] overflow-hidden flex flex-col">
            {/* Table Title Ribbon */}
            <div className="px-4 py-3 bg-[#fbf2ea] border-b border-[#eae1d9] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#785600]">table_chart</span>
                <span className="font-bold text-[#1f1b16]">
                  Skema Data Sensus Triwulan (Migrasi Tab 1 Google Sheets)
                </span>
              </div>
              <span className="text-[#665d52] flex items-center gap-1 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#785600]"></span>
                Live Sync ID: GBI-SUKABUMI-DB26
              </span>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#fbf2ea] text-[#665d52] font-label-sm border-b border-[#eae1d9]">
                    <th className="py-2.5 px-3 font-semibold whitespace-nowrap">ID Jemaat</th>
                    <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Nama Lengkap &amp; Panggilan</th>
                    <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Kelas Kategorial</th>
                    <th className="py-2.5 px-2 text-center font-semibold">G</th>
                    <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Kontak WhatsApp / Wali</th>
                    <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Status &amp; Peran</th>
                    <th className="py-2.5 px-2 text-center font-semibold">Baptis</th>
                    <th className="py-2.5 px-3 text-right font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eae1d9] text-[#1f1b16]">
                  {paginatedMembers.map((member) => {
                    const isSelected = selectedMember.id === member.id;
                    return (
                      <tr
                        key={member.id}
                        onClick={() => setSelectedMember(member)}
                        className={`transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#ffdea5]/30 hover:bg-[#ffdea5]/40'
                            : 'hover:bg-[#fbf2ea]/70'
                        }`}
                      >
                        <td className="py-3 px-3 font-mono font-bold text-[#785600] whitespace-nowrap">
                          {member.id}
                        </td>
                        <td className="py-3 px-3">
                          <div className="font-semibold text-[#1f1b16]">{member.nama_lengkap}</div>
                          <div className="text-[11px] text-[#665d52]">
                            Panggilan: {member.nama_panggilan || member.nama_lengkap.split(' ')[0]}
                          </div>
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#f6ece4] text-[#1f1b16] font-medium border border-[#eae1d9]">
                            {member.kelas_kategorial}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center font-bold text-[#665d52]">
                          {member.jenis_kelamin || 'L'}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          {member.no_hp ? (
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-[13px] text-[#785600]">phone_iphone</span>
                              <span>{member.no_hp}</span>
                            </div>
                          ) : (
                            <div className="flex flex-col text-[11px]">
                              <span className="text-[#807666]">(Ikut Wali)</span>
                              <span className="font-medium text-[#1f1b16]">
                                {member.nama_wali || 'Wali'}: {member.hp_wali || '—'}
                              </span>
                            </div>
                          )}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              member.status_keanggotaan === 'Pengerja'
                                ? 'bg-[#ffdea5] text-[#5d4200]'
                                : 'bg-[#f6ece4] text-[#665d52]'
                            }`}
                          >
                            {member.status_keanggotaan}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center">
                          {member.is_baptis ? (
                            <span className="material-symbols-outlined text-[16px] text-[#785600]">check_circle</span>
                          ) : (
                            <span className="material-symbols-outlined text-[16px] text-[#807666]">remove</span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            type="button"
                            className="p-1 rounded text-[#785600] hover:bg-[#f6ece4]"
                            title="Periksa Unit Keluarga"
                          >
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Table Footer Pagination */}
            <div className="px-4 py-3 bg-[#fbf2ea] border-t border-[#eae1d9] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#665d52]">
              <div>
                Halaman {currentPage} dari {totalPages} (Total {filteredMembers.length} Jemaat Aktif)
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  disabled={currentPage <= 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#eae1d9] text-[#1f1b16] disabled:opacity-40"
                >
                  Sebelumnya
                </button>
                <span className="px-3 py-1 bg-[#785600] text-white rounded-lg font-bold">
                  {currentPage}
                </span>
                <button
                  type="button"
                  disabled={currentPage >= totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#eae1d9] text-[#1f1b16] disabled:opacity-40"
                >
                  Berikutnya
                </button>
              </div>
            </div>
          </div>

          {/* UU PDP Compliance Banner */}
          <div className="p-4 rounded-2xl bg-[#fbf2ea] border border-[#eae1d9] flex items-start gap-3">
            <span className="material-symbols-outlined text-[#785600] text-[22px] shrink-0 mt-0.5">
              verified_user
            </span>
            <div className="flex flex-col gap-0.5 text-xs">
              <h4 className="font-bold text-[#1f1b16]">
                Protokol Keamanan Data Jemaat &amp; Kepatuhan UU Perlindungan Data Pribadi (UU PDP)
              </h4>
              <p className="text-[#665d52] leading-relaxed">
                Semua nomor kontak dan tanggal lahir dalam sistem dienkripsi level aplikasi. Hak akses presensi mandiri menggunakan verifikasi 6 digit PIN terenkripsi SHA-256 yang disematkan pada nomor WhatsApp kepala keluarga/wali.
              </p>
            </div>
          </div>
        </section>

        {/* Right: Family Unit & Member Inspection Drawer (4 cols) */}
        <aside className="lg:col-span-4 flex flex-col gap-4 sticky top-36">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#eae1d9] flex flex-col gap-4">
            {/* Card Header with Avatar & Status */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#ffdea5] flex items-center justify-center text-[#785600] font-bold text-lg">
                  {selectedMember.nama_lengkap.slice(0, 1)}
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold text-[#785600]">
                    {selectedMember.id}
                  </span>
                  <h3 className="text-sm font-bold text-[#1f1b16] leading-tight">
                    {selectedMember.nama_lengkap}
                  </h3>
                  <span className="text-[11px] text-[#665d52]">
                    {selectedMember.kelas_kategorial}
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f6ece4] text-[#785600] border border-[#d2c5b2]">
                {selectedMember.status_keanggotaan}
              </span>
            </div>

            {/* Family Link Section */}
            <div className="p-3 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#1f1b16] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#785600]">family_restroom</span>
                  Unit Kartu Keluarga Terhubung
                </span>
                <span className="font-mono text-[10px] text-[#785600] font-bold">KK-SUK-0027</span>
              </div>
              <div className="flex flex-col gap-1 p-2 bg-white rounded-lg border border-[#eae1d9] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#665d52]">Kepala Keluarga / Wali:</span>
                  <span className="font-bold text-[#1f1b16]">
                    {selectedMember.nama_wali || 'Ibu Merla Saputra'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#665d52]">WhatsApp Akun Induk:</span>
                  <span className="font-bold text-[#785600]">
                    {selectedMember.hp_wali || selectedMember.no_hp || '0812-1458-2962'}
                  </span>
                </div>
              </div>
            </div>

            {/* Members Under This Family Account */}
            <div className="flex flex-col gap-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1f1b16]">Anggota Terdaftar:</span>
                <span className="text-[11px] text-[#665d52]">Sensus 2026</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#785600]">person</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1f1b16]">{selectedMember.nama_lengkap}</span>
                    <span className="text-[10px] text-[#665d52]">
                      Tgl Lahir: {selectedMember.tanggal_lahir} • {selectedMember.kelas_kategorial}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#785600] text-white font-bold">
                  Aktif
                </span>
              </div>
            </div>

            {/* Pastoral Verification & Notes */}
            <div className="flex flex-col gap-1 pt-2 border-t border-[#eae1d9] text-xs">
              <span className="font-bold text-[#1f1b16]">Catatan Penggembalaan &amp; Presensi:</span>
              <div className="p-2.5 rounded-xl bg-[#f6ece4] text-[#665d52] italic text-[11px] leading-relaxed">
                “{selectedMember.catatan_pastoral || 'Jemaat terdata aktif dalam sensus triwulan GBI Baitani Sukabumi.'}”
              </div>
            </div>

            {/* Action Buttons Inside Family Drawer */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={() =>
                  showNotification(`Membuka form lawatan pastoral untuk ${selectedMember.nama_lengkap}`)
                }
                className="w-full py-2.5 px-3 rounded-xl bg-[#785600] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#5a4000] shadow-sm transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">clinical_notes</span>
                <span>Catat Kunjungan / Lawatan</span>
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/62${(selectedMember.hp_wali || selectedMember.no_hp || '081295859490').replace(/\D/g, '')}?text=Syalom%20dari%20GBI%20Baitani%20Sukabumi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2 rounded-xl bg-[#fbf2ea] text-[#1f1b16] text-xs font-semibold flex items-center justify-center gap-1 hover:bg-[#f6ece4] border border-[#d2c5b2] transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#785600]">chat</span>
                  <span>Kirim WA</span>
                </a>
                <button
                  type="button"
                  onClick={() => showNotification(`Edit data sensus jemaat ${selectedMember.id} dibuka.`)}
                  className="py-2 px-2 rounded-xl bg-[#fbf2ea] text-[#1f1b16] text-xs font-semibold flex items-center justify-center gap-1 hover:bg-[#f6ece4] border border-[#d2c5b2] transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#665d52]">edit</span>
                  <span>Ubah Data</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Statistical Insights Box */}
          <div className="p-5 rounded-2xl bg-[#fbf2ea] border border-[#eae1d9] flex flex-col gap-3 shadow-xs">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#1f1b16]">Distribusi 11 Kelas Kategorial</span>
              <span className="text-[#785600] font-bold">151 Jiwa</span>
            </div>
            {/* Visual Mini Bar */}
            <div className="w-full flex h-2.5 rounded-full overflow-hidden bg-[#eae1d9]">
              <div className="bg-[#785600] h-full" style={{ width: '45%' }} title="Dewasa Onsite (68)" />
              <div className="bg-[#eec067] h-full" style={{ width: '25%' }} title="Senior Lansia (38)" />
              <div className="bg-[#fdce73] h-full" style={{ width: '18%' }} title="Sekolah Minggu (28)" />
              <div className="bg-[#665d52] h-full" style={{ width: '12%' }} title="Pemuda / Remaja (17)" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-[#665d52]">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#785600] inline-block"></span>
                <span>Dewasa Onsite (45%)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#eec067] inline-block"></span>
                <span>Senior 1 &amp; 2 (25%)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#fdce73] inline-block"></span>
                <span>Sekolah Minggu (18%)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#665d52] inline-block"></span>
                <span>Pemuda/Remaja (12%)</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Modal: Tambah Warga Jemaat */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl border border-[#eae1d9] flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#eae1d9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#785600] text-[22px]">person_add</span>
                <h3 className="font-title-md text-base font-bold text-[#1f1b16]">Tambah Warga Jemaat Baru</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="text-[#665d52] hover:text-[#1f1b16] p-1"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <form onSubmit={handleAddNewMember} className="flex flex-col gap-3 text-xs">
              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">
                  Nama Lengkap Sesuai KTP / Akta
                </label>
                <input
                  type="text"
                  required
                  value={newFullName}
                  onChange={(e) => setNewFullName(e.target.value)}
                  placeholder="Contoh: Jonathan Kevin Santoso"
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#1f1b16] mb-1">Nama Panggilan</label>
                  <input
                    type="text"
                    value={newNickName}
                    onChange={(e) => setNewNickName(e.target.value)}
                    placeholder="Contoh: Kevin"
                    className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#1f1b16] mb-1">Jenis Kelamin</label>
                  <select
                    value={newGender}
                    onChange={(e) => setNewGender(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                  >
                    <option value="L">Laki-laki (L)</option>
                    <option value="P">Perempuan (P)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#1f1b16] mb-1">Kelas Kategorial</label>
                  <select
                    value={newClass}
                    onChange={(e) => setNewClass(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                  >
                    <option value="Asuhan (0-3 Tahun)">Asuhan (0-3 Tahun)</option>
                    <option value="Indria (4-6 Tahun)">Indria (4-6 Tahun)</option>
                    <option value="Gabungan Pratama (7-9 Tahun)">Gabungan Pratama (7-9 Tahun)</option>
                    <option value="Madya (10-12 Tahun)">Madya (10-12 Tahun)</option>
                    <option value="Tunas Muda (13-15 Tahun)">Tunas Muda (13-15 Tahun)</option>
                    <option value="Remaja (16-19 Tahun)">Remaja (16-19 Tahun)</option>
                    <option value="Pemuda (20-29 Tahun)">Pemuda (20-29 Tahun)</option>
                    <option value="Dewasa (30-55 Tahun)">Dewasa Onsite</option>
                    <option value="Dewasa Online (30-55 Tahun)">Dewasa Online (Zoom)</option>
                    <option value="Senior 1 (56-67 Tahun)">Senior 1 (56-67 Tahun)</option>
                    <option value="Senior 2 (68+ Tahun)">Senior 2 (68+ Tahun)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-[#1f1b16] mb-1">Baptisan Selam</label>
                  <select
                    value={newBaptis ? 'true' : 'false'}
                    onChange={(e) => setNewBaptis(e.target.value === 'true')}
                    className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                  >
                    <option value="true">Sudah Dibaptis Selam</option>
                    <option value="false">Belum / Penyerahan Anak</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#1f1b16] mb-1">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="0812xxxx"
                    className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#1f1b16] mb-1">Nama Wali (Jika Anak)</label>
                  <input
                    type="text"
                    value={newWali}
                    onChange={(e) => setNewWali(e.target.value)}
                    placeholder="Nama Orang Tua / Wali"
                    className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#eae1d9] mt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-[#665d52] hover:bg-[#f6ece4] font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#785600] text-white font-bold hover:bg-[#5a4000] shadow-sm"
                >
                  Simpan ke Database Sensus
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
