'use client';

import React from 'react';
import Link from 'next/link';
import { Landmark, ShieldCheck, ArrowUpRight, MapPin } from 'lucide-react';
import InstagramIcon from '@/components/common/InstagramIcon';

export default function GivingSection() {
  return (
    <section id="persembahan" className="py-24 bg-black text-white border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 block mb-2">
            PENATALAYANAN & PERSEMBAHAN KASIH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
            Persembahan Jemaat
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Mendukung pelayanan firman, pembinaan jemaat, dan aksi kasih bagi sesama melalui persembahan persepuluhan dan ucapan syukur.
          </p>
        </div>

        {/* 2-Col Grid: Guidance Card & Onsite Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 max-w-5xl mx-auto">
          
          {/* Left Column: Official Transfer Guidance (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-950 border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
            <div className="flex items-center gap-2 mb-1">
              <Landmark className="w-5 h-5 text-[#d4af37]" />
              <h3 className="text-sm font-bold text-white tracking-widest uppercase font-mono">
                Transfer Rekening Resmi Gereja
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              Nomor rekening resmi Gereja Baptis Indonesia Baitani, Sukabumi dicantumkan dalam Warta Jemaat Mingguan atau dapat dikonfirmasikan langsung melalui bendahara jemaat guna menjamin keamanan transaksi.
            </p>

            <div className="p-4 rounded-xl bg-black border border-white/10 text-xs text-zinc-400 space-y-1">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Akuntabilitas & Keamanan Jemaat</span>
              </span>
              <p>
                Konfirmasi nomor rekening resmi dapat dilakukan sebelum melakukan transfer persembahan persepuluhan atau dana diakonia.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/gbibaitanisukabumi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4af37] hover:text-[#f3e5ab] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500" />
                <span>Konfirmasi via Instagram @gbibaitanisukabumi</span>
              </a>
            </div>
          </div>

          {/* Right Column: Onsite Giving (5 cols) */}
          <div className="lg:col-span-5 bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-5 h-5 text-[#d4af37]" />
              <h3 className="text-sm font-bold text-white tracking-widest uppercase font-mono">
                Persembahan Onsite
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              Persembahan tunai dan amplop syukur dapat dimasukkan langsung saat ibadah onsite berlangsung di gedung gereja:
            </p>

            <div className="p-4 rounded-xl bg-black border border-white/10 text-xs text-zinc-300">
              <p className="font-semibold text-white">Gedung Gereja Baitani:</p>
              <p className="text-zinc-400 mt-0.5">Jl. R.E. Martadinata No. 86, Sukabumi</p>
            </div>
          </div>

        </div>

        {/* Scriptural Quote Card */}
        <div className="p-7 rounded-2xl bg-zinc-950 border border-zinc-800 text-center max-w-3xl mx-auto">
          <blockquote className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-2 font-light">
            &ldquo;Hendaklah masing-masing memberikan menurut kerelaan hatinya, jangan dengan sedih hati atau karena paksaan, sebab Allah mengasihi orang yang memberi dengan sukacita.&rdquo;
          </blockquote>
          <cite className="text-xs font-mono font-bold text-[#d4af37] uppercase tracking-widest not-italic">
            — 2 KORINTUS 9:7
          </cite>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/persembahan"
            className="btn-magnetic inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 hover:border-[#d4af37] text-white hover:text-[#d4af37] text-xs font-bold tracking-wider uppercase transition-colors"
          >
            <span>INFORMASI LENGKAP PERSEMBAHAN</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
