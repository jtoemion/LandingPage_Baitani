'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Landmark, QrCode, Copy, Check, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';

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
    <section id="persembahan" className="py-24 bg-black text-white border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-2">
            PENATALAYANAN & PERSEMBAHAN KASIH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
            Giving
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Mendukung pekabaran Injil, pemeliharaan jemaat, dan aksi sosial bagi sesama yang membutuhkan melalui persembahan persepuluhan dan ucapan syukur.
          </p>
        </div>

        {/* 2-Col Grid: Bank Transfer Cards & QRIS Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Bank Accounts (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Landmark className="w-5 h-5 text-white" />
              <h3 className="text-sm font-bold text-white tracking-widest uppercase">
                Transfer Rekening Resmi
              </h3>
            </div>

            {bankAccounts.map((account) => (
              <div
                key={account.id}
                className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#d4af37]">
                      {account.bankName}
                    </span>
                    <span className="text-[10px] bg-white/5 text-zinc-400 border border-white/10 px-2.5 py-0.5 rounded">
                      VERIFIKASI
                    </span>
                  </div>
                  <div className="text-2xl sm:text-4xl font-black font-mono tracking-wider text-white mb-1">
                    {account.accountNumber}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    A.N. {account.accountHolder}
                  </div>
                  <p className="text-xs text-zinc-500 mt-3 font-light">
                    Peruntukan: <span className="text-zinc-300">{account.purpose}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Rekening Gereja Resmi</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(account.accountNumber, account.id)}
                    className={`btn-magnetic inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all min-h-[44px] ${
                      copiedAccount === account.id
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30'
                        : 'bg-white hover:bg-[#f3e5ab] text-black active:scale-95'
                    }`}
                    aria-label={`Salin nomor rekening ${account.bankName}`}
                  >
                    {copiedAccount === account.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Tersalin!</span>
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
          <div className="lg:col-span-5 bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-4">
              <QrCode className="w-6 h-6" />
            </div>

            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-1">
              QRIS Persembahan
            </h3>
            <p className="text-xs text-zinc-400 max-w-xs mb-6 font-light">
              Pindai barcode menggunakan m-banking atau aplikasi dompet digital apa pun.
            </p>

            {/* QR Code Presentation */}
            <div className="bg-white p-4 rounded-xl shadow-2xl border border-zinc-300 mb-6 w-48 h-48 flex flex-col items-center justify-center relative">
              <div className="w-40 h-40 bg-black rounded-lg flex flex-col items-center justify-center p-2 text-white text-center">
                <QrCode className="w-24 h-24 text-white" />
                <span className="text-[10px] font-mono tracking-widest text-zinc-300 mt-1">
                  QRIS GEREJA BAITANI
                </span>
                <span className="text-[8px] text-zinc-500">NMID: ID1029384756</span>
              </div>
            </div>

            <div className="text-[11px] text-zinc-400 space-y-1 mb-6 font-light">
              <p className="font-semibold text-zinc-300">Mendukung Seluruh E-Wallet & M-Banking</p>
              <p>BCA • Mandiri • BRI • BNI • GoPay • OVO • DANA • ShopeePay</p>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Halo%20Sekretariat%20Gereja%20Baitani,%20saya%20ingin%20mengonfirmasi%20bukti%20transfer%20persembahan."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-white/20 hover:border-white text-white text-xs font-bold tracking-wider uppercase transition-colors min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 text-green-400" />
              <span>KONFIRMASI VIA WHATSAPP</span>
            </a>
          </div>

        </div>

        {/* Scriptural Quote Card */}
        <div className="p-6 rounded-xl bg-zinc-950 border border-white/10 text-center max-w-3xl mx-auto">
          <blockquote className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-2 font-light">
            &ldquo;Hendaklah masing-masing memberikan menurut kerelaan hatinya, jangan dengan sedih hati atau karena paksaan, sebab Allah mengasihi orang yang memberi dengan sukacita.&rdquo;
          </blockquote>
          <cite className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest not-italic">
            — 2 KORINTUS 9:7
          </cite>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/persembahan"
            className="btn-magnetic inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 hover:border-[#d4af37] text-white hover:text-[#d4af37] text-xs font-bold tracking-wider uppercase transition-colors"
          >
            <span>INFO LENGKAP & FAQ PERSEMBAHAN</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
