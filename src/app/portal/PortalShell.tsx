'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { usePortalAuth } from '@/context/PortalAuthContext';

const emptySubscribe = () => () => {};

export default function PortalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, switchRole, demoProfiles, logout } = usePortalAuth();
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Hydration-safe client detection (canonical React 18/19 pattern)
  const isClient = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Is login page
  const isLoginPage = pathname === '/portal/login';

  const navLinks = [
    { label: 'Dasbor Eksekutif', href: '/portal', exact: true },
    { label: 'Rekap Presensi 11 Kelas', href: '/portal/presensi' },
    { label: 'Pastoral & Ulang Tahun', href: '/portal/pastoral' },
    { label: 'Pokok Doa Syafaat', href: '/portal/doa' },
    { label: 'Roster Pelayanan', href: '/portal/roster' },
    { label: 'Master Jemaat', href: '/portal/sensus' },
  ];

  // Protect portal routes: if not logged in, redirect to login page after client mount
  React.useEffect(() => {
    if (isClient && !isLoginPage && !user) {
      router.replace('/portal/login');
    }
  }, [isClient, isLoginPage, user, router]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  // Consistent SSR & Hydration loading view (eliminates hydration mismatch)
  if (!isClient || !user) {
    return (
      <div className="min-h-screen bg-[#fff8f3] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-10 h-10 border-3 border-[#785600] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-sm font-semibold text-[#785600]">Memuat Sesi Portal Jemaat...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff8f3] text-[#1f1b16] font-body-md antialiased flex flex-col">
      {/* Top Global Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(60,45,20,0.06)] border-b border-[#eae1d9]">
        {/* Row 1: Brand, Search, Role switcher, User chip */}
        <div className="h-20 w-full px-4 sm:px-8 flex items-center justify-between gap-4 max-w-7xl mx-auto">
          {/* Left Brand */}
          <div className="flex items-center gap-4">
            <Link href="/portal" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#d2c5b2] bg-white shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
                <Image
                  src="/images/logo/logo-baitani.jpeg"
                  alt="Logo GBI Baitani Sukabumi"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-[16px] sm:text-[18px] text-[#785600] leading-tight tracking-tight font-bold">
                  GBI BAITANI SUKABUMI
                </span>
                <span className="font-label-sm text-[11px] sm:text-[12px] text-[#665d52] font-medium tracking-wide">
                  Portal Penggembalaan &amp; Sekretariat
                </span>
              </div>
            </Link>

            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebded0]/70 text-[#211b12]">
              <span className="w-2 h-2 rounded-full bg-[#785600] animate-pulse"></span>
              <span className="font-label-sm text-[12px] font-medium">
                Minggu, 18 Oktober 2026 — Sensus Triwulan Aktif (151 Jiwa)
              </span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Quick search input */}
            <div className="relative hidden lg:block w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#807666] text-[18px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari 151 data jemaat..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#fbf2ea] text-[#1f1b16] placeholder:text-[#807666] text-xs focus:outline-none focus:ring-2 focus:ring-[#785600]/40 transition-all border border-transparent focus:border-[#d2c5b2]"
              />
            </div>

            {/* Back to public website button */}
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#665d52] hover:bg-[#f6ece4] hover:text-[#1f1b16] transition-colors"
              title="Ke Halaman Web Utama"
            >
              <span className="material-symbols-outlined text-[16px]">public</span>
              <span className="hidden md:inline">Web Jemaat</span>
            </Link>

            {/* Notification bell */}
            <button
              type="button"
              className="relative p-2 rounded-lg text-[#4e4637] hover:bg-[#f6ece4] transition-colors"
              aria-label="Notifikasi"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#785600] border-2 border-white"></span>
            </button>

            {/* User Chip & Role Switcher Menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                className="flex items-center gap-2.5 py-1 px-2.5 rounded-full bg-[#fbf2ea] hover:bg-[#f0e7de] border border-[#d2c5b2]/60 transition-all text-left"
              >
                <div className="w-8 h-8 rounded-full bg-[#785600] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                  {user?.nama ? user.nama.slice(0, 2).toUpperCase() : 'PK'}
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="font-label-md text-xs text-[#1f1b16] font-semibold leading-tight max-w-[130px] truncate">
                    {user?.nama || 'Pdt. Kristianto'}
                  </span>
                  <span className="text-[10px] text-[#785600] font-medium leading-none">
                    {user?.title || user?.role || 'Gembala Sidang'}
                  </span>
                </div>
                <span className="material-symbols-outlined text-[16px] text-[#807666]">
                  {isRoleDropdownOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>

              {/* Dropdown Menu */}
              {isRoleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#d2c5b2] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-[#eae1d9] mb-1">
                    <p className="text-[10px] font-bold text-[#807666] uppercase tracking-wider">
                      Simulasi Peran / Role Switcher
                    </p>
                    <p className="text-xs text-[#1f1b16] font-semibold mt-0.5 truncate">
                      {user?.nama} ({user?.role})
                    </p>
                  </div>

                  <div className="space-y-1">
                    {demoProfiles.map((p) => {
                      const isCurrent = user?.id === p.id;
                      return (
                        <button
                          key={p.key}
                          type="button"
                          onClick={() => {
                            switchRole(p.key);
                            setIsRoleDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-colors ${
                            isCurrent
                              ? 'bg-[#ffdea5]/40 text-[#5a4000] font-bold'
                              : 'hover:bg-[#fbf2ea] text-[#1f1b16]'
                          }`}
                        >
                          <div className="flex flex-col">
                            <span className="font-semibold">{p.nama}</span>
                            <span className="text-[10px] text-[#665d52]">{p.title}</span>
                          </div>
                          {isCurrent && (
                            <span className="material-symbols-outlined text-[16px] text-[#785600]">
                              check
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#eae1d9] flex items-center justify-between px-1">
                    <Link
                      href="/portal/login"
                      onClick={() => {
                        logout();
                        setIsRoleDropdownOpen(false);
                      }}
                      className="text-xs text-rose-700 hover:text-rose-900 font-medium flex items-center gap-1 py-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">logout</span>
                      <span>Keluar Akun</span>
                    </Link>
                    <span className="text-[10px] text-[#807666]">Sensus 2026</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Row 2: Sub-nav Tabs */}
        <div className="h-12 w-full px-4 sm:px-8 bg-[#fbf2ea]/90 border-t border-[#eae1d9] flex items-center justify-between max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar" aria-label="Portal Navigation">
            {navLinks.map((item) => {
              const isActive = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#785600] text-white shadow-sm font-bold'
                      : 'text-[#4e4637] hover:bg-[#eae1d9] hover:text-[#1f1b16]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-1.5 font-label-sm text-xs text-[#665d52]">
            <span className="material-symbols-outlined text-[16px] text-[#785600]">verified_user</span>
            <span className="font-semibold">Gabungan Gereja Baptis Indonesia (GGBI)</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full pt-32 pb-16 flex-1 max-w-7xl mx-auto px-4 sm:px-8">
        {children}
      </main>

      {/* Verified Baptist Portal Footer */}
      <footer className="w-full bg-[#fbf2ea] border-t border-[#eae1d9] py-8 text-xs text-[#665d52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-headline-sm text-sm text-[#785600] font-bold">
              GBI Baitani Sukabumi
            </span>
            <span className="text-[#d2c5b2]">—</span>
            <span className="font-medium text-[#1f1b16]">
              Gereja Baptis Indonesia Baitani Sukabumi
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-center md:text-right">
            <span>Jl. R.E. Martadinata No. 86, Cikole, Sukabumi</span>
            <span className="text-[#d2c5b2] hidden sm:inline">•</span>
            <span>Sistem Informasi Pastoral &amp; Presensi 11 Kelas © 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
