'use client';

import React, { useState } from 'react';
import { Landmark, QrCode, Copy, Check, MessageSquare, Heart, ShieldCheck, Download } from 'lucide-react';

export default function GivingSection() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const bankAccounts = [
    {
      id: 'bca-umum',
      bankName: 'BCA (Bank Central Asia)',
      accountNumber: '1234567890',
      accountHolder: 'GEREJA BAITANI INDONESIA',
      purpose: 'Persembahan Umum, Persepuluhan & Operasional Ibadah',
    },
    {
      id: 'mandiri-misi',
      bankName: 'Bank Mandiri',
      accountNumber: '9876543210123',
      accountHolder: 'GEREJA BAITANI PEDULI SESAMA',
      purpose: 'Dana Kasih Diakonia, Tanggap Bencana & Bantuan Sembako',
    },
  ];

  const handleCopy = (accountNumber: string, id: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(id);
    setTimeout(() => {
      setCopiedAccount(null);
    }, 2500);
  };

  return (
    <section id="persembahan" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-blue-400" />
            <span>Memberi Dengan Sukacita</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Persembahan & Penatalayanan
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Terima kasih atas kesetiaan dan kemurahan hati Anda dalam menopang pemberitaan Kabar Baik, pemeliharaan jemaat, dan aksi kasih bagi masyarakat yang membutuhkan.
          </p>
        </div>

        {/* 2-Col Grid: Bank Transfer Cards & QRIS Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Bank Accounts (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Landmark className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white tracking-wide">
                Transfer Rekening Bank Resmi
              </h3>
            </div>

            {bankAccounts.map((account) => (
              <div
                key={account.id}
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-7 hover:border-blue-500/50 transition-all shadow-lg flex flex-col justify-between"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-sm font-semibold text-blue-400">
                      {account.bankName}
                    </span>
                    <span className="text-xs bg-slate-700/80 text-slate-300 px-2.5 py-1 rounded-md">
                      Rekening Resmi
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-wider text-white mb-1">
                    {account.accountNumber}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-300 uppercase">
                    a.n. {account.accountHolder}
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Peruntukan: <span className="text-slate-200">{account.purpose}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/70 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span>Terverifikasi Sekretariat</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(account.accountNumber, account.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all min-h-[44px] ${
                      copiedAccount === account.id
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 active:scale-95'
                    }`}
                    aria-label={`Salin nomor rekening ${account.bankName}`}
                  >
                    {copiedAccount === account.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Tersalin ke Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Salin No. Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: QRIS Digital Payment (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-800/90 to-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <QrCode className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-white mb-1">
              QRIS Persembahan Digital
            </h3>
            <p className="text-xs text-slate-400 max-w-xs mb-6">
              Mendukung seluruh aplikasi dompet digital & mobile banking berlogo QRIS di Indonesia.
            </p>

            {/* Simulated QR Code Frame */}
            <div className="bg-white p-4 rounded-xl shadow-inner border border-slate-300 mb-4 w-48 h-48 flex flex-col items-center justify-center relative group">
              <div className="w-40 h-40 bg-slate-900 rounded-lg flex flex-col items-center justify-center p-2 text-white text-center">
                <QrCode className="w-24 h-24 text-blue-400" />
                <span className="text-[10px] font-mono tracking-widest text-slate-300 mt-1">
                  QRIS GEREJA BAITANI
                </span>
                <span className="text-[8px] text-slate-400">NMID: ID1029384756</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 space-y-1 mb-6">
              <p className="font-semibold text-slate-300">Dapat di-scan menggunakan:</p>
              <p>BCA Mobile • Livin&apos; Mandiri • BRImo • GoPay • OVO • DANA • ShopeePay</p>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Halo%20Sekretariat%20Gereja%20Baitani,%20saya%20ingin%20mengonfirmasi%20bukti%20transfer%20persembahan."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white text-xs font-semibold transition-colors min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 text-green-400" />
              <span>Konfirmasi via WhatsApp Bendahara</span>
            </a>
          </div>

        </div>

        {/* Scriptural Quote Card */}
        <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 text-center max-w-3xl mx-auto">
          <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-2">
            &ldquo;Hendaklah masing-masing memberikan menurut kerelaan hatinya, jangan dengan sedih hati atau karena paksaan, sebab Allah mengasihi orang yang memberi dengan sukacita.&rdquo;
          </blockquote>
          <cite className="text-xs font-semibold text-blue-400 uppercase tracking-wider not-italic">
            — 2 Korintus 9:7
          </cite>
        </div>

      </div>
    </section>
  );
}
