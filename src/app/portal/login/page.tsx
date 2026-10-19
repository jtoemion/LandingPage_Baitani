'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePortalAuth } from '@/context/PortalAuthContext';

export default function PortalLoginPage() {
  const router = useRouter();
  const { user, isLoadingAuth, login, switchRole } = usePortalAuth();

  const [whatsapp, setWhatsapp] = useState('');
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedDemoToast, setSelectedDemoToast] = useState('');

  // If already logged in, redirect straight to portal dashboard
  React.useEffect(() => {
    if (!isLoadingAuth && user) {
      router.replace('/portal');
    }
  }, [isLoadingAuth, user, router]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const res = await login(whatsapp, pin);
      if (res.success) {
        setTimeout(() => {
          router.push('/portal');
        }, 500);
      } else {
        setErrorMessage(res.message || 'Nomor WhatsApp atau PIN tidak cocok.');
        setIsLoading(false);
      }
    } catch {
      setErrorMessage('Terjadi kendala jaringan saat autentikasi.');
      setIsLoading(false);
    }
  };

  const handleQuickRoleAccess = (key: string, phone: string, demoPin: string, label: string) => {
    setWhatsapp(phone);
    setPin(demoPin);
    setSelectedDemoToast(label);
    switchRole(key);

    // Auto login & navigate
    setIsLoading(true);
    setTimeout(() => {
      router.push('/portal');
    }, 600);
  };

  const promptResetPin = () => {
    const cleanWa = whatsapp ? `0${whatsapp.replace(/\D/g, '')}` : '';
    const message = cleanWa
      ? `Syalom Sekretariat Baitani, saya ingin melakukan verifikasi pembaruan PIN akses untuk nomor terdaftar ${cleanWa}.`
      : `Syalom Sekretariat Baitani, mohon panduan untuk ganti PIN mandiri Portal Jemaat.`;
    window.open(`https://wa.me/6281295859490?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#fff8f3] text-[#1f1b16] font-body-md flex flex-col justify-center items-center py-12 px-4 overflow-hidden">
      {/* Sacred Aura Ambient Background Gradients */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-gradient-to-b from-[#eec067]/20 via-[#f0e7de]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-24 left-1/4 w-[480px] h-[480px] bg-[#ffdea5]/20 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Decorative Liturgical Watermark Motif (Sacred Cross & Radiance) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none -z-10">
        <svg className="text-[#785600]" fill="none" height="420" viewBox="0 0 200 200" width="420">
          <circle cx="100" cy="100" r="92" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="76" stroke="currentColor" strokeWidth="1" />
          <path d="M100 20V180M40 80H160" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
          <circle cx="100" cy="80" r="16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Back to Home Link */}
      <div className="w-full max-w-md mx-auto mb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#665d52] hover:text-[#785600] transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Kembali ke Beranda Utama</span>
        </Link>
        <span className="text-[11px] font-mono text-[#807666]">GBI Baitani Sukabumi</span>
      </div>

      {/* Central Authentication Card Container */}
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl shadow-[#1f1b16]/5 p-6 sm:p-8 relative border border-[#eae1d9] transition-all">
          {/* Top Arch Rim Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#eec067] to-transparent rounded-full" />

          {/* Header & Church Emblem */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-3 group">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#ffdea5] to-[#fdce73] opacity-40 blur-sm group-hover:opacity-70 transition duration-500" />
              <div className="relative w-20 h-20 rounded-full p-1 bg-[#fbf2ea] shadow-sm flex items-center justify-center overflow-hidden border border-[#d2c5b2]">
                <Image
                  src="/images/logo/logo-baitani.jpeg"
                  alt="Logo GBI Baitani Sukabumi"
                  width={72}
                  height={72}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Overline Tagline */}
            <p className="font-label-sm text-xs text-[#785600] tracking-widest uppercase mb-1 font-bold">
              Gereja Baptis Indonesia Baitani
            </p>

            {/* Main Title */}
            <h1 className="font-headline-md text-2xl text-[#1f1b16] tracking-tight mb-2 font-bold">
              Portal Penggembalaan &amp; Warga Jemaat
            </h1>

            {/* Subtitle Context */}
            <p className="font-body-sm text-xs text-[#4e4637] leading-relaxed max-w-sm mb-6">
              Ruang persekutuan digital, presensi 11 kelas kategorial, warta jemaat, dan penggembalaan Baitani Sukabumi.
            </p>
          </div>

          {/* Error Message Toast */}
          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-rose-600 text-[18px]">error</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Authentication Form */}
          <form className="space-y-4" onSubmit={handleLoginSubmit}>
            {/* Field 1: WhatsApp Number */}
            <div className="space-y-1.5 text-left">
              <label className="block font-label-md text-xs font-semibold text-[#1f1b16]" htmlFor="waPhoneInput">
                Nomor WhatsApp Terdaftar
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-2.5 flex items-center gap-1 px-2 py-1 bg-[#f6ece4] rounded-lg text-[#4e4637] font-label-md text-xs select-none pointer-events-none">
                  <span className="material-symbols-outlined text-[15px] text-[#785600]">phone</span>
                  <span>+62</span>
                </div>
                <input
                  id="waPhoneInput"
                  name="wa_phone"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="812 1458 2962"
                  className="w-full pl-20 pr-4 py-2.5 bg-[#fbf2ea] rounded-xl font-body-md text-sm text-[#1f1b16] placeholder:text-[#807666] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#785600]/30 border border-transparent focus:border-[#d2c5b2] transition-all"
                />
              </div>
              <p className="font-body-sm text-[11px] text-[#665d52] flex items-center gap-1 pt-0.5">
                <span className="material-symbols-outlined text-[14px] text-[#807666]">info</span>
                <span>Masukkan nomor WhatsApp yang tercatat pada sensus jemaat 2026.</span>
              </p>
            </div>

            {/* Field 2: PIN Akses (6 Digit) */}
            <div className="space-y-1.5 text-left pt-1">
              <div className="flex items-center justify-between">
                <label className="block font-label-md text-xs font-semibold text-[#1f1b16]" htmlFor="pinInput">
                  PIN Akses (6 Digit)
                </label>
                <span className="font-label-sm text-[11px] text-[#665d52] font-mono">DDMMYY</span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute left-3 text-[#807666] pointer-events-none flex items-center">
                  <span className="material-symbols-outlined text-[18px]">key</span>
                </div>
                <input
                  id="pinInput"
                  name="pin_access"
                  type={showPin ? 'text' : 'password'}
                  inputMode="numeric"
                  maxLength={6}
                  pattern="[0-9]{6}"
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="••••••"
                  className="w-full pl-10 pr-12 py-2.5 bg-[#fbf2ea] rounded-xl font-body-md text-sm text-[#1f1b16] tracking-widest placeholder:text-[#807666] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#785600]/30 border border-transparent focus:border-[#d2c5b2] transition-all"
                />
                <button
                  type="button"
                  id="togglePinBtn"
                  onClick={() => setShowPin(!showPin)}
                  aria-label="Tampilkan atau sembunyikan PIN"
                  className="absolute right-3 p-1 text-[#807666] hover:text-[#1f1b16] transition-colors rounded-lg focus:outline-none"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showPin ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>

              {/* Petunjuk PIN Hint Box */}
              <div className="mt-2 p-2.5 rounded-xl bg-[#fbf2ea]/80 flex items-start gap-2 border border-[#eae1d9]">
                <span className="material-symbols-outlined text-[#785600] text-[16px] shrink-0 mt-0.5">lightbulb</span>
                <p className="font-body-sm text-[11px] text-[#4e4637] leading-tight">
                  <span className="font-semibold text-[#1f1b16]">Petunjuk PIN:</span> Gunakan 6 digit tanggal lahir yang tercatat di sensus (<span className="font-medium text-[#785600]">Format: DDMMYY</span>, contoh: 29 Oktober 1988 = <code className="px-1 py-0.5 bg-[#f6ece4] rounded text-[#1f1b16] font-mono">291088</code>).
                </p>
              </div>
            </div>

            {/* Utility Row */}
            <div className="flex items-center justify-between pt-1 text-xs text-left">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 rounded text-[#785600] focus:ring-[#785600]/20 accent-[#785600] cursor-pointer"
                />
                <span className="text-[#665d52]">Ingat Perangkat Ini</span>
              </label>
              <button
                type="button"
                onClick={promptResetPin}
                className="text-[#785600] hover:underline font-semibold"
              >
                Ganti PIN Mandiri
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-[#785600] hover:bg-[#5a4000] text-white font-label-md text-xs font-bold rounded-xl shadow-md shadow-[#785600]/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] group mt-3 disabled:opacity-60 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  <span>Memverifikasi Sensus...</span>
                </>
              ) : (
                <>
                  <span>Masuk ke Portal Baitani</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </>
              )}
            </button>
          </form>

          {/* Quick Role Access Buttons (Testing Simulation) */}
          <div className="mt-6 pt-5 border-t border-[#eae1d9]">
            <div className="flex items-center justify-between mb-2">
              <p className="font-label-sm text-[11px] text-[#807666] flex items-center gap-1 uppercase tracking-wider font-semibold">
                <span className="material-symbols-outlined text-[14px] text-[#785600]">shield_person</span>
                <span>Akses Cepat Pengujian Role:</span>
              </p>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#f6ece4] text-[#4e4637]">
                1-Tap Login
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left">
              {/* Role 1: Gembala Sidang */}
              <button
                type="button"
                onClick={() => handleQuickRoleAccess('kristianto', '81283164343', '120572', 'Pdt. Kristianto (Gembala Sidang)')}
                className="p-2.5 rounded-xl bg-[#fbf2ea] hover:bg-[#f6ece4] transition-all text-left flex flex-col group border border-[#eae1d9]"
              >
                <span className="font-label-sm text-xs text-[#1f1b16] group-hover:text-[#785600] font-bold truncate">
                  Pdt. Kristianto
                </span>
                <span className="text-[10px] text-[#665d52]">Gembala Sidang</span>
              </button>

              {/* Role 2: Guru Indria */}
              <button
                type="button"
                onClick={() => handleQuickRoleAccess('cheren', '82210154946', '240391', 'Ibu Cheren (Guru Kelas Indria)')}
                className="p-2.5 rounded-xl bg-[#fbf2ea] hover:bg-[#f6ece4] transition-all text-left flex flex-col group border border-[#eae1d9]"
              >
                <span className="font-label-sm text-xs text-[#1f1b16] group-hover:text-[#785600] font-bold truncate">
                  Ibu Cheren
                </span>
                <span className="text-[10px] text-[#665d52]">Guru Kelas Indria</span>
              </button>

              {/* Role 3: Jemaat & Orang Tua */}
              <button
                type="button"
                onClick={() => handleQuickRoleAccess('merla', '81214582962', '180986', 'Ibu Merla (Jemaat & Orang Tua)')}
                className="p-2.5 rounded-xl bg-[#fbf2ea] hover:bg-[#f6ece4] transition-all text-left flex flex-col group border border-[#eae1d9]"
              >
                <span className="font-label-sm text-xs text-[#1f1b16] group-hover:text-[#785600] font-bold truncate">
                  Ibu Merla
                </span>
                <span className="text-[10px] text-[#665d52]">Jemaat &amp; Wali Murid</span>
              </button>

              {/* Role 4: Sekretariat Gereja */}
              <button
                type="button"
                onClick={() => handleQuickRoleAccess('sekretariat', '81295859490', '010195', 'Sekretariat GBI Baitani')}
                className="p-2.5 rounded-xl bg-[#fbf2ea] hover:bg-[#f6ece4] transition-all text-left flex flex-col group border border-[#eae1d9]"
              >
                <span className="font-label-sm text-xs text-[#1f1b16] group-hover:text-[#785600] font-bold truncate">
                  Sekretariat Gereja
                </span>
                <span className="text-[10px] text-[#665d52]">Admin Presensi &amp; Sensus</span>
              </button>
            </div>

            {/* Selected Demo Toast Notification */}
            {selectedDemoToast && (
              <div className="mt-2 py-1.5 px-2.5 bg-[#ffdea5]/40 border border-[#eec067] rounded-lg text-center animate-fade-in">
                <p className="font-body-sm text-xs text-[#5d4200]">
                  Profil terpilih: <span className="font-bold text-[#785600]">{selectedDemoToast}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Pastoral Support Link Footer */}
        <div className="mt-6 flex flex-col items-center text-center space-y-3">
          <div className="flex flex-col items-center gap-1.5">
            <p className="font-body-sm text-xs text-[#665d52]">
              Belum terdaftar atau nomor sensus jemaat berganti?
            </p>
            <a
              href="https://wa.me/6281295859490?text=Syalom%20Sekretariat%20GBI%20Baitani,%20saya%20butuh%20bantuan%20akses%20Portal%20Penggembalaan."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#1f1b16] hover:bg-[#f6ece4] border border-[#d2c5b2] transition-colors shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="font-label-md text-xs font-semibold text-emerald-800">
                Hubungi Sekretariat Gereja (0812-9585-9490)
              </span>
              <span className="material-symbols-outlined text-[16px] text-emerald-700">chat</span>
            </a>
          </div>

          {/* Scripture Ribbon */}
          <div className="pt-2 flex items-center justify-center gap-2 text-[#807666]">
            <span className="h-px w-8 bg-[#eae1d9]"></span>
            <p className="font-headline-sm text-xs italic text-[#665d52] tracking-wide">
              Gereja Misioner ✦ Dari Sukabumi Sampai ke Ujung Bumi
            </p>
            <span className="h-px w-8 bg-[#eae1d9]"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
