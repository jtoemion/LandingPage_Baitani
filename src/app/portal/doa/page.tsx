'use client';

import React, { useState } from 'react';

interface PrayerItem {
  id: string;
  name: string;
  category: string;
  stream: 'stream1' | 'stream2';
  subgroup: string;
  contact: string;
  date: string;
  content: string;
  detailLocation?: string;
  status: 'active' | 'answered' | 'counseling';
}

export default function PortalDoaPage() {
  const [activeStreamFilter, setActiveStreamFilter] = useState<'all' | 'stream1' | 'stream2'>('all');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'answered' | 'counseling'>('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Form submission state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formStream, setFormStream] = useState<'stream1' | 'stream2'>('stream1');
  const [formCategory, setFormCategory] = useState('Kesehatan & Pemulihan');
  const [formContent, setFormContent] = useState('');
  const [formAnonymous, setFormAnonymous] = useState(false);

  const [prayers, setPrayers] = useState<PrayerItem[]>([
    {
      id: 'DOA-101',
      name: 'Bpk. S. Mulyadi',
      category: 'Kesehatan & Pemulihan Medis',
      stream: 'stream2',
      subgroup: 'Dewasa Onsite',
      contact: '0812-9811-xxxx',
      date: '16 Oktober 2026',
      content:
        'Mohon doa penggembalaan untuk pemulihan pasca operasi pemasangan ring jantung di RSUD Syamsudin Sukabumi. Kiranya Tuhan memberi kekuatan dan damai sejahtera bagi keluarga.',
      detailLocation: 'R. Teratai No. 412, RSUD R. Syamsudin, S.H.',
      status: 'active',
    },
    {
      id: 'DOA-102',
      name: 'Ibu Cheren Masria',
      category: 'Pelayanan & Studi Anak',
      stream: 'stream1',
      subgroup: 'Guru Indria',
      contact: '0822-1015-xxxx',
      date: '15 Oktober 2026',
      content:
        'Mendoakan 9 anak di Kelas Indria agar bertumbuh dalam pengenalan akan Tuhan Yesus sejak dini, serta memohon hikmat bagi seluruh guru dalam membimbing kelas setiap Minggu.',
      status: 'active',
    },
    {
      id: 'DOA-103',
      name: 'Bpk. Eddy Mulyadi',
      category: 'Pekerjaan & Usaha',
      stream: 'stream1',
      subgroup: 'Dewasa Onsite',
      contact: '0816-4421-xxxx',
      date: '14 Oktober 2026',
      content:
        'Ucapan syukur pemulihan kesehatan keluarga & kelancaran usaha sembako jemaat di Sukabumi. Kiranya menjadi berkat bagi sesama jemaat.',
      status: 'answered',
    },
    {
      id: 'DOA-104',
      name: 'Ibu Wiesye Mirnawati',
      category: 'Keluarga & Anak',
      stream: 'stream1',
      subgroup: 'Senior 2',
      contact: '0813-1102-xxxx',
      date: '12 Oktober 2026',
      content:
        'Mendoakan cucu dan anak yang sedang merantau bekerja di Jakarta. Kiranya senantiasa setia beribadah dan dijauhkan dari marabahaya.',
      status: 'active',
    },
    {
      id: 'DOA-105',
      name: 'Keluarga Bpk. H',
      category: 'Pemulihan Luka Batin & Krisis',
      stream: 'stream2',
      subgroup: 'Dewasa',
      contact: '0815-6677-xxxx',
      date: '10 Oktober 2026',
      content:
        'Bimbingan konseling pastoral pribadi menghadapi transisi hidup keluarga. Mohon topangan doa gembala secara berkala.',
      status: 'counseling',
    },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleToggleAnswered = (id: string) => {
    setPrayers((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === 'answered' ? 'active' : 'answered' }
          : item
      )
    );
    showToast('Status pokok doa berhasil diperbarui.');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formContent) return;

    const newPrayer: PrayerItem = {
      id: `DOA-${Math.floor(Math.random() * 800 + 200)}`,
      name: formAnonymous ? 'Anonim (Warga Baitani)' : formName || 'Jemaat Baitani',
      category: formCategory,
      stream: formStream,
      subgroup: formStream === 'stream2' ? 'Khusus Gembala' : 'Jemaat Umum',
      contact: formPhone || '0812xxxx',
      date: 'Hari ini',
      content: formContent,
      status: 'active',
    };

    setPrayers([newPrayer, ...prayers]);
    showToast(
      formStream === 'stream2'
        ? 'Pokok doa telah dienkripsi dan langsung diteruskan ke Gembala Sidang!'
        : 'Pokok doa berhasil diajukan untuk Jam Doa Syafaat Rabu!'
    );

    // Reset Form
    setFormName('');
    setFormPhone('');
    setFormContent('');
    setFormAnonymous(false);
  };

  const filteredPrayers = prayers.filter((p) => {
    // Stream filter
    if (activeStreamFilter !== 'all' && p.stream !== activeStreamFilter) {
      return false;
    }

    // Category filter
    if (activeCategoryFilter !== 'all') {
      if (!p.category.toLowerCase().includes(activeCategoryFilter.toLowerCase())) {
        return false;
      }
    }

    // Status filter
    if (statusFilter !== 'all' && p.status !== statusFilter) {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchContent = p.content.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      if (!matchName && !matchContent && !matchCat) return false;
    }

    return true;
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

      {/* Breadcrumbs & Privilege Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 font-label-sm text-xs text-[#665d52]">
          <span>Portal Penggembalaan</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span>Doa &amp; Pengurapan</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-[#785600] font-bold">Pokok Doa Syafaat &amp; Konseling</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fbf2ea] border border-[#d2c5b2] shadow-xs text-xs font-semibold text-[#1f1b16]">
          <span className="w-2 h-2 rounded-full bg-[#785600] ring-4 ring-[#ffdea5]/40 animate-pulse"></span>
          <span className="material-symbols-outlined text-[16px] text-[#785600]">admin_panel_settings</span>
          <span>Akses Terfilter: Gembala Sidang &amp; Tim Pendoa Syafaat</span>
        </div>
      </div>

      {/* Liturgical Header & Scripture Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[#785600] font-label-sm text-xs tracking-widest uppercase font-bold">
            <span className="material-symbols-outlined text-[16px]">drive_file_rename</span>
            <span>Mezbah Korban &amp; Permohonan Suci</span>
          </div>
          <h1 className="font-headline-xl text-2xl md:text-3xl text-[#1f1b16] font-bold tracking-tight">
            Pusat Pokok Doa Syafaat <br className="hidden sm:inline" />
            <span className="italic font-headline-lg text-[#785600]">&amp; Konseling Pastoral</span>
          </h1>
          <p className="font-body-md text-xs sm:text-sm text-[#665d52] max-w-xl mt-1">
            Sistem pengumpulan doa jemaat terpadu GBI Baitani Sukabumi. Menghimpun jeritan hati umat dan mengawal pergumulan jiwa secara akuntabel, penuh kasih, dan berkerahasiaan tinggi.
          </p>
        </div>

        {/* Scripture Banner (Filipi 4:6) */}
        <div className="lg:col-span-5 relative bg-[#fbf2ea] rounded-2xl p-5 shadow-sm border border-[#eae1d9] flex flex-col justify-between">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#785600] rounded-l-2xl"></div>
          <div className="flex items-center justify-between text-[#665d52] mb-1 pl-2">
            <span className="font-label-sm text-xs font-bold tracking-wider uppercase text-[#785600]">
              Nats Pembimbing Doa
            </span>
            <span className="material-symbols-outlined text-[20px] text-[#785600]">format_quote</span>
          </div>
          <blockquote className="pl-2 font-headline-sm text-sm italic text-[#1f1b16] leading-relaxed">
            “Janganlah hendaknya kamu kuatir tentang apapun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur.”
          </blockquote>
          <div className="mt-2 pl-2 flex items-center justify-between text-xs text-[#665d52]">
            <span className="font-bold text-[#785600]">— Filipi 4:6</span>
            <span className="text-[11px] text-[#807666]">Pembaruan Renungan Mingguan</span>
          </div>
        </div>
      </div>

      {/* Dual-Stream Classification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Stream 1 */}
        <div
          onClick={() => setActiveStreamFilter(activeStreamFilter === 'stream1' ? 'all' : 'stream1')}
          className={`bg-white rounded-2xl p-5 shadow-sm transition-all cursor-pointer border flex flex-col justify-between ${
            activeStreamFilter === 'stream1'
              ? 'ring-2 ring-[#785600] border-[#785600]'
              : 'border-[#eae1d9] hover:shadow-md'
          }`}
        >
          <div>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#ebded0] flex items-center justify-center text-[#785600]">
                  <span className="material-symbols-outlined text-[24px]">groups</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#1f1b16]">Stream 1: Jam Doa Syafaat Bersama</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ffdea5] text-[#5d4200] text-[10px] font-bold">
                      Komunal
                    </span>
                  </div>
                  <span className="text-xs text-[#665d52]">Rabu, 18.00 WIB — Aula Utama Lt. 2 GBI Baitani</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#807666] text-[18px]">public</span>
            </div>
            <p className="font-body-sm text-xs text-[#665d52] mt-3 leading-relaxed">
              Didoakan serempak bersama seluruh jemaat, pengerja, dan tim pendoa syafaat tetap. Pokok doa umum meliputi bangsa, gereja lokal, anak sekolah minggu, dan kesembuhan warga.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#eae1d9] flex items-center justify-between text-xs text-[#665d52]">
            <span className="flex items-center gap-1 font-semibold text-[#1f1b16]">
              <span className="w-2 h-2 rounded-full bg-[#785600]"></span> 28 Pokok Doa Terjadwal Pekan Ini
            </span>
            <span className="text-[#785600] font-bold">
              {activeStreamFilter === 'stream1' ? 'Filter Aktif ✓' : 'Klik Filter Stream 1'}
            </span>
          </div>
        </div>

        {/* Stream 2 */}
        <div
          onClick={() => setActiveStreamFilter(activeStreamFilter === 'stream2' ? 'all' : 'stream2')}
          className={`bg-[#fbf2ea] rounded-2xl p-5 shadow-sm transition-all cursor-pointer border flex flex-col justify-between ${
            activeStreamFilter === 'stream2'
              ? 'ring-2 ring-[#785600] border-[#785600]'
              : 'border-[#eae1d9] hover:shadow-md'
          }`}
        >
          <div>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#785600] text-white flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">lock</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#1f1b16]">Stream 2: Khusus Pastoral Gembala Sidang</span>
                  </div>
                  <span className="text-xs text-[#665d52]">Otoritas Eksklusif: Pdt. Kristianto, M.Th.</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#785600] text-white text-[10px] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">lock</span> Rahasia
              </span>
            </div>
            <p className="font-body-sm text-xs text-[#4e4637] mt-3 leading-relaxed">
              Pergumulan sensitif (keluarga, pemulihan luka batin, sakit kritis, dan konseling pastoral pribadi). Sepenuhnya dirahasiakan, tidak dipublikasikan ke pendoa awam, dilayani tatap muka.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#eae1d9] flex items-center justify-between text-xs text-[#665d52]">
            <span className="flex items-center gap-1.5 font-bold text-rose-800">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span> 7 Permohonan Khusus Menunggu Respon
            </span>
            <span className="text-[#785600] font-bold">
              {activeStreamFilter === 'stream2' ? 'Filter Aktif ✓' : 'Klik Filter Stream 2'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: 8 cols prayer list, 4 cols fast form & widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Filter Bar & Prayer Cards Listing (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {/* Filter Controls Container */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#eae1d9] flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 min-w-[240px]">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#807666] text-[18px]">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari pemohon, kata kunci pergumulan, atau no. arsip..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#fbf2ea] text-[#1f1b16] placeholder:text-[#807666] text-xs focus:outline-none focus:ring-1 focus:ring-[#785600] border border-transparent focus:border-[#d2c5b2]"
                />
              </div>

              {/* Scroll to form button */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('form-pengajuan-doa');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-[#785600] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-[#5a4000] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">add_circle</span>
                <span>+ Ajukan Pokok Doa Baru</span>
              </button>
            </div>

            {/* Category Pills Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar text-xs">
              {[
                { id: 'all', label: 'Semua Kategori' },
                { id: 'Kesehatan', label: 'Kesehatan & Kesembuhan' },
                { id: 'Keluarga', label: 'Keluarga & Anak' },
                { id: 'Pekerjaan', label: 'Pekerjaan & Usaha' },
                { id: 'Pelayanan', label: 'Pelayanan' },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategoryFilter(c.id)}
                  className={`px-3 py-1.5 rounded-full font-semibold whitespace-nowrap transition-colors ${
                    activeCategoryFilter === c.id
                      ? 'bg-[#785600] text-white shadow-xs'
                      : 'bg-[#fbf2ea] text-[#665d52] hover:bg-[#f6ece4]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Status Tabs Secondary Filter */}
            <div className="flex items-center justify-between pt-2 border-t border-[#eae1d9] text-xs text-[#665d52]">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStatusFilter('active')}
                  className={`flex items-center gap-1 font-bold ${
                    statusFilter === 'active' ? 'text-[#785600] underline' : 'hover:text-[#1f1b16]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">save_as</span>
                  <span>Dalam Doa ({prayers.filter((p) => p.status === 'active').length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('answered')}
                  className={`flex items-center gap-1 font-bold ${
                    statusFilter === 'answered' ? 'text-emerald-700 underline' : 'hover:text-[#1f1b16]'
                  }`}
                >
                  <span>🕊️</span>
                  <span>Telah Terjawab ({prayers.filter((p) => p.status === 'answered').length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('counseling')}
                  className={`flex items-center gap-1 font-bold ${
                    statusFilter === 'counseling' ? 'text-rose-700 underline' : 'hover:text-[#1f1b16]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px] text-[#ba1a1a]">priority_high</span>
                  <span>Perlu Konseling ({prayers.filter((p) => p.status === 'counseling').length})</span>
                </button>
              </div>
              <span className="text-[#807666] hidden sm:inline text-[11px]">
                Filter: {activeStreamFilter.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Cards Stack */}
          <div className="flex flex-col gap-4">
            {filteredPrayers.length === 0 ? (
              <div className="p-8 text-center text-xs text-[#665d52] bg-white rounded-2xl border border-[#eae1d9]">
                Tidak ada pokok doa yang cocok dengan filter aktif.
              </div>
            ) : (
              filteredPrayers.map((prayer) => (
                <div
                  key={prayer.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col gap-3 border border-[#eae1d9]"
                >
                  {/* Left Color Stripe */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-2 ${
                      prayer.stream === 'stream2' ? 'bg-[#785600]' : 'bg-[#665d52]'
                    }`}
                  />

                  <div className="flex flex-wrap items-start justify-between gap-3 pl-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#f6ece4] flex items-center justify-center text-xs font-bold text-[#785600]">
                        {prayer.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-bold text-[#1f1b16]">{prayer.name}</span>
                          <span className="text-xs text-[#665d52]">({prayer.subgroup})</span>
                          {prayer.stream === 'stream2' ? (
                            <span className="px-2 py-0.5 rounded-full bg-[#785600] text-white text-[10px] font-bold flex items-center gap-1">
                              <span className="material-symbols-outlined text-[11px]">lock</span> Khusus Gembala
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full bg-[#fbf2ea] text-[#665d52] text-[10px] font-bold border border-[#eae1d9]">
                              Jam Doa Syafaat Rabu
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-[#665d52] mt-0.5">
                          <span>{prayer.contact}</span>
                          <span>•</span>
                          <span>Diajukan: {prayer.date}</span>
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-[#fbf2ea] text-[#1f1b16] text-[11px] font-semibold border border-[#eae1d9]">
                      {prayer.category}
                    </span>
                  </div>

                  <div className="pl-2 bg-[#fbf2ea]/70 p-3.5 rounded-xl border border-[#eae1d9]">
                    <p className="font-body-md text-xs sm:text-sm text-[#1f1b16] leading-relaxed italic">
                      “{prayer.content}”
                    </p>
                    {prayer.detailLocation && (
                      <div className="mt-2 flex items-center gap-2 text-xs text-[#785600] font-semibold">
                        <span className="material-symbols-outlined text-[16px]">local_hospital</span>
                        <span>{prayer.detailLocation}</span>
                      </div>
                    )}
                  </div>

                  <div className="pl-2 pt-1 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/62${prayer.contact.replace(/\D/g, '')}?text=Syalom,%20kami%20dari%20GBI%20Baitani%20ikut%20mendoakan%20pokok%20doa%20Anda.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-[#fbf2ea] hover:bg-[#f6ece4] text-[#1f1b16] font-semibold flex items-center gap-1 border border-[#d2c5b2] transition-colors"
                      >
                        <span className="material-symbols-outlined text-[15px] text-[#785600]">chat</span>
                        <span>Hubungi via WA</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => showToast(`Menjadwalkan konseling pastoral untuk ${prayer.name}`)}
                        className="px-3 py-1.5 rounded-lg bg-[#fbf2ea] hover:bg-[#f6ece4] text-[#1f1b16] font-semibold flex items-center gap-1 border border-[#d2c5b2] transition-colors"
                      >
                        <span className="material-symbols-outlined text-[15px] text-[#785600]">event_available</span>
                        <span>Jadwalkan Konseling</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleAnswered(prayer.id)}
                      className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                        prayer.status === 'answered'
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#785600] text-white hover:bg-[#5a4000]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[15px]">check_circle</span>
                      <span>{prayer.status === 'answered' ? 'Telah Terjawab ✓' : 'Tandai Terjawab'}</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Submission Form & Devotional Widgets (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Submission Form Card */}
          <div
            id="form-pengajuan-doa"
            className="bg-white rounded-2xl p-6 shadow-sm border border-[#eae1d9] flex flex-col gap-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#eae1d9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#785600] text-[20px]">edit_note</span>
                <h3 className="font-title-sm text-sm font-bold text-[#1f1b16]">Ajukan Pokok Doa Baru</h3>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#f6ece4] text-[#785600]">
                24 Jam
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 text-xs">
              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Nama Pemohon / Keluarga</label>
                <input
                  type="text"
                  disabled={formAnonymous}
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder={formAnonymous ? 'Disembunyikan (Anonim)' : 'Contoh: Ibu Sandra / Kel. Bp. Rudi'}
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600] disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Nomor WhatsApp Aktif</label>
                <input
                  type="tel"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  placeholder="0812xxxx"
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Klasifikasi Jalur Doa</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormStream('stream1')}
                    className={`p-2 rounded-xl border text-left flex flex-col gap-0.5 transition-all ${
                      formStream === 'stream1'
                        ? 'border-[#785600] bg-[#ffdea5]/40 text-[#5a4000] font-bold'
                        : 'border-[#eae1d9] bg-[#fbf2ea] text-[#665d52]'
                    }`}
                  >
                    <span className="text-[11px]">Stream 1</span>
                    <span className="text-[10px] opacity-80">Doa Syafaat Rabu</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormStream('stream2')}
                    className={`p-2 rounded-xl border text-left flex flex-col gap-0.5 transition-all ${
                      formStream === 'stream2'
                        ? 'border-[#785600] bg-[#785600] text-white font-bold'
                        : 'border-[#eae1d9] bg-[#fbf2ea] text-[#665d52]'
                    }`}
                  >
                    <span className="text-[11px] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">lock</span> Stream 2
                    </span>
                    <span className="text-[10px] opacity-80">Privat Gembala</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Kategori Pergumulan</label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                >
                  <option value="Kesehatan & Pemulihan">Kesehatan &amp; Pemulihan</option>
                  <option value="Keluarga & Anak">Keluarga &amp; Anak</option>
                  <option value="Pekerjaan & Usaha">Pekerjaan &amp; Usaha</option>
                  <option value="Pertumbuhan Rohani">Pertumbuhan Rohani</option>
                  <option value="Duka Cita & Penguatan">Duka Cita &amp; Penguatan</option>
                  <option value="Ucapan Syukur">Ucapan Syukur</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#1f1b16] mb-1">Uraian Pokok Doa</label>
                <textarea
                  rows={3}
                  required
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  placeholder="Tuliskan jeritan hati, nama orang sakit, atau kebutuhan doa secara jelas..."
                  className="w-full px-3 py-2 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] text-[#1f1b16] focus:outline-none focus:ring-1 focus:ring-[#785600]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anonymousCheck"
                  checked={formAnonymous}
                  onChange={(e) => setFormAnonymous(e.target.checked)}
                  className="w-3.5 h-3.5 rounded text-[#785600] accent-[#785600]"
                />
                <label htmlFor="anonymousCheck" className="text-xs text-[#1f1b16] font-medium cursor-pointer">
                  Ajukan secara Anonim (Nama disamarkan)
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-[#785600] text-white font-label-md text-xs font-bold hover:bg-[#5a4000] shadow-sm transition-all mt-2 cursor-pointer"
              >
                Kirim ke Mezbah Doa Baitani
              </button>
            </form>
          </div>

          {/* Weekly Prayer Schedule Widget */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eae1d9] flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[#eae1d9]">
              <span className="material-symbols-outlined text-[#785600] text-[20px]">event_note</span>
              <h3 className="font-title-sm text-sm font-bold text-[#1f1b16]">Jadwal Mezbah Doa Baitani</h3>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex items-start gap-2.5">
                <span className="font-bold text-[#785600] whitespace-nowrap">Rabu 18:00</span>
                <span className="text-[#665d52]">Jam Doa Syafaat Jemaat &amp; Pengurapan (Aula Lt. 2)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex items-start gap-2.5">
                <span className="font-bold text-[#785600] whitespace-nowrap">Sabtu 05:30</span>
                <span className="text-[#665d52]">Doa Fajar Pengerja &amp; Pengurus Sidang</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#fbf2ea] border border-[#eae1d9] flex items-start gap-2.5">
                <span className="font-bold text-[#785600] whitespace-nowrap">Minggu 06:15</span>
                <span className="text-[#665d52]">Doa Konsistori Sebelum Ibadah Raya 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
