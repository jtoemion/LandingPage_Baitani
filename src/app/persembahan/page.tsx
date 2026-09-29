'use client';

import React, { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import { Landmark, QrCode, Copy, Check, MessageSquare, ShieldCheck, Heart, Download, HelpCircle } from 'lucide-react';

export default function PersembahanPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const bankAccounts = [
    {
      id: 'bca-umum',
      bankName: 'BCA (Bank Central Asia)',
      accountNumber: '1234567890',
      accountHolder: 'GEREJA BAITANI INDONESIA',
      purpose: 'Persembahan Umum, Persepuluhan & Operasional Ibadah Mingguan',
    },
    {
      id: 'mandiri-diakonia',
      bankName: 'Bank Mandiri',
      accountNumber: '9876543210123',
      accountHolder: 'GEREJA BAITANI PEDULI SESAMA',
      purpose: 'Dana Kasih Diakonia, Tanggap Bencana & Program Sembako Baitani Care',
    },
    {
      id: 'bni-misi',
      bankName: 'Bank BNI',
      accountNumber: '556677889900',
      accountHolder: 'YAYASAN MISI GEREJA BAITANI',
      purpose: 'Perintisan Jemaat Baru, Beasiswa Hamba Tuhan & Misi Lintas Budaya',
    },
  ];

  const givingTypes = [
    {
      title: 'Persepuluhan (Tithe)',
      verse: 'Maleakhi 3:10',
      desc: 'Sepuluh persen dari seluruh penghasilan yang dikembalikan kepada Tuhan sebagai wujud ketaatan dan pengakuan bahwa Allah adalah pemilik sejati hidup kita.',
    },
    {
      title: 'Persembahan Syukur (Offering)',
      verse: 'Mazmur 100:4',
      desc: 'Pemberian sukarela atas anugerah, pemeliharaan, kesembuhan, atau momentum istimewa seperti ulang tahun, kelahiran, atau kelulusan.',
    },
    {
      title: 'Dana Kasih Diakonia',
      verse: 'Amsal 19:17',
      desc: 'Pemberian kasih untuk menolong jemaat prasejahtera, yatim piatu, janda-duda, dan warga sekitar yang terkena dampak musibah atau bencana alam.',
    },
    {
      title: 'Persembahan Misi & Pembangunan',
      verse: 'Matius 28:19-20',
      desc: 'Menopang pendanaan hamba Tuhan di ladang misi perintisan daerah terpencil serta perawatan dan pelunasan sarana ibadah jemaat.',
    },
  ];

  const handleCopy = (number: string, id: string) => {
    navigator.clipboard.writeText(number);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="min-h-dvh flex flex-col bg-[#050505] text-[#fafafa]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <PageHero
          category="PENATALAYANAN & PERSEMBAHAN KASIH"
          title="GIVING & PERSEMBAHAN"
          titleAccent="Honoring God with Our Substance"
          subtitle="Setiap benih yang Anda tabur mendanai pekabaran Injil, pemeliharaan jemaat, perintisan gereja baru, dan aksi kasih bagi sesama yang membutuhkan pertolongan."
          breadcrumbCurrent="Persembahan"
        />

        {/* Giving Console: Bank Accounts & QRIS */}
        <section className="py-24 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Bank Accounts (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <Landmark className="w-5 h-5 text-[#d4af37]" />
                  <h3 className="text-sm font-bold text-white tracking-widest uppercase">
                    Rekening Resmi Gereja Baitani
                  </h3>
                </div>

                {bankAccounts.map((account) => (
                  <div
                    key={account.id}
                    className="bg-zinc-950 border border-white/10 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all shadow-xl flex flex-col justify-between"
                  >
                    <div className="mb-4">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-xs font-bold tracking-wider uppercase text-[#d4af37]">
                          {account.bankName}
                        </span>
                        <span className="text-xs bg-white/5 text-zinc-300 border border-zinc-800 px-2.5 py-0.5 rounded font-mono">
                          TERVERIFIKASI
                        </span>
                      </div>
                      <div className="text-2xl sm:text-4xl font-black font-mono tracking-wider text-white mb-1">
                        {account.accountNumber}
                      </div>
                      <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                        A.N. {account.accountHolder}
                      </div>
                      <p className="text-xs text-zinc-400 mt-3 font-light leading-relaxed">
                        Peruntukan: <span className="text-zinc-200">{account.purpose}</span>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-zinc-400 flex items-center gap-1.5 font-light">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Rekening Bank Resmi Gereja</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(account.accountNumber, account.id)}
                        className={`btn-magnetic inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all min-h-11 ${
                          copiedId === account.id
                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/40'
                            : 'bg-white hover:bg-[#f3e5ab] text-black active:scale-95'
                        }`}
                      >
                        {copiedId === account.id ? (
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

              {/* Right Column: QRIS Frame (5 cols) */}
              <div className="lg:col-span-5 bg-zinc-950 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#d4af37] mb-4">
                  <QrCode className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-1">
                  QRIS Persembahan Digital
                </h3>
                <p className="text-xs text-zinc-400 max-w-xs mb-6 font-light leading-relaxed">
                  Pindai barcode menggunakan aplikasi m-banking atau e-wallet apa pun di seluruh Indonesia.
                </p>

                {/* QR Code Presentation */}
                <div className="bg-white p-4 rounded-2xl shadow-2xl border border-zinc-300 mb-6 w-52 h-52 flex flex-col items-center justify-center">
                  <div className="w-44 h-44 bg-black rounded-lg flex flex-col items-center justify-center p-2 text-white text-center">
                    <QrCode className="w-28 h-28 text-white" />
                    <span className="text-xs font-mono tracking-widest text-zinc-300 mt-1 font-bold">
                      GEREJA BAITANI
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">NMID: ID1029384756</span>
                  </div>
                </div>

                <div className="text-xs text-zinc-400 space-y-1 mb-6 font-light">
                  <p className="font-semibold text-zinc-300">Mendukung Seluruh Layanan Pembayaran:</p>
                  <p>BCA • Mandiri • BRI • BNI • GoPay • OVO • DANA • ShopeePay • LinkAja</p>
                </div>

                <a
                  href="https://wa.me/6281234567890?text=Halo%20Sekretariat%20Gereja%20Baitani,%20saya%20ingin%20mengonfirmasi%20bukti%20transfer%20persembahan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full border border-white/20 hover:border-white text-white text-xs font-bold tracking-wider uppercase transition-colors min-h-11"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>KONFIRMASI BUKTI TRANSFER VIA WA</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 4 Jenis Persembahan */}
        <section className="py-24 bg-[#070709] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-2">
                PEMAHAMAN ALKITABIAH
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
                4 Jenis Pos Persembahan
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Setiap bentuk persembahan memiliki tujuan dan landasan rohani yang jelas bagi kemajuan pekerjaan Tuhan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {givingTypes.map((type, idx) => (
                <div
                  key={`type-${idx}`}
                  className="p-8 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#d4af37] block mb-2">
                      {type.verse}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {type.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scriptural Promise */}
        <section className="py-20 bg-black text-center border-b border-zinc-800">
          <div className="max-w-3xl mx-auto px-4">
            <blockquote className="text-base sm:text-lg text-zinc-200 italic font-serif leading-relaxed mb-4">
              &ldquo;Muliakanlah TUHAN dengan hartamu dan dengan hasil pertama dari segala penghasilanmu, maka lumbung-lumbungmu akan diisi penuh sampai melimpah-limpah.&rdquo;
            </blockquote>
            <cite className="text-xs font-mono font-bold text-[#d4af37] uppercase tracking-widest not-italic">
              — AMSAL 3:9-10
            </cite>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
