import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const affiliations = [
    { name: 'Sekolah Tinggi Teologi', abbr: 'STT BAITANI' },
    { name: 'Yayasan Kasih Peduli', abbr: 'BAITANI CARE' },
    { name: 'Jaringan Menara Doa', abbr: 'PRAYER NETWORK' },
    { name: 'Penerbitan & Media Rohani', abbr: 'BAITANI PUBLISHING' },
    { name: 'Fellowship of Christian Leaders', abbr: 'FCL INDONESIA' },
  ];

  return (
    <footer className="bg-black text-zinc-400 pt-16 pb-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Affiliations Strip (§2.9 spec) */}
        <div className="pb-16 mb-16 border-b border-white/10 text-center">
          <span className="text-[10px] font-black tracking-[0.35em] uppercase text-zinc-500 block mb-8">
            AFILIASI & JARINGAN PELAYANAN
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 hover:opacity-100 transition-opacity">
            {affiliations.map((item, idx) => (
              <div
                key={`affil-${idx}`}
                className="flex flex-col items-center group cursor-default"
              >
                <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                  {item.abbr}
                </span>
                <span className="text-[9px] tracking-wider uppercase text-zinc-600 mt-0.5">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Column Navigation & Identity Mirror */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
          
          {/* Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-white text-black flex items-center justify-center font-black text-base tracking-tighter">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm tracking-[0.22em] text-white uppercase leading-none">
                  BAITANI
                </span>
                <span className="text-[9px] tracking-[0.35em] text-zinc-500 font-semibold uppercase mt-0.5">
                  CHURCH
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Gereja sel yang berakar kuat dan berbuah lebat dalam kasih Kristus. Pintu kami selalu terbuka menyambut Anda apa adanya untuk mengalami perjumpaan nyata dengan hadirat Allah.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-white hover:text-black text-zinc-400 flex items-center justify-center transition-all min-h-[44px] min-w-[44px]"
                aria-label="Instagram Baitani"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-white hover:text-black text-zinc-400 flex items-center justify-center transition-all min-h-[44px] min-w-[44px]"
                aria-label="YouTube Baitani"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-white hover:text-black text-zinc-400 flex items-center justify-center transition-all min-h-[44px] min-w-[44px]"
                aria-label="Facebook Baitani"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">
              JELAJAHI
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#d4af37] transition-colors inline-block py-1">
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-[#d4af37] transition-colors inline-block py-1">
                  Tentang Kami & Visi Misi
                </Link>
              </li>
              <li>
                <Link href="/acara" className="hover:text-[#d4af37] transition-colors inline-block py-1">
                  Acara & Agenda Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/lokasi" className="hover:text-[#d4af37] transition-colors inline-block py-1">
                  Lokasi Kampus & Peta Ibadah
                </Link>
              </li>
              <li>
                <Link href="/connect-group" className="hover:text-[#d4af37] transition-colors inline-block py-1">
                  Connect Group Sel Jemaat
                </Link>
              </li>
              <li>
                <Link href="/gembala" className="hover:text-[#d4af37] transition-colors inline-block py-1">
                  Gembala Sidang & Pastoral
                </Link>
              </li>
              <li>
                <Link href="/sorotan" className="hover:text-[#d4af37] transition-colors inline-block py-1">
                  Sorotan & Galeri Momen
                </Link>
              </li>
              <li>
                <Link href="/persembahan" className="hover:text-[#d4af37] transition-colors inline-block py-1">
                  Persembahan & QRIS
                </Link>
              </li>
              <li>
                <Link href="/koneksi" className="hover:text-[#d4af37] transition-colors inline-block py-1 font-semibold text-white">
                  Saya Jemaat Baru
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Timing */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">
              WAKTU IBADAH
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Ibadah Raya Minggu</p>
                  <p className="text-zinc-400">Sesi 1: 07:30 WIB</p>
                  <p className="text-zinc-400">Sesi 2: 10:30 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Youth Movement</p>
                  <p className="text-zinc-400">Sabtu pk 17:00 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Mezbah Doa Malam</p>
                  <p className="text-zinc-400">Rabu pk 19:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">
              LOKASI & KONTAK
            </h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>
                  Jl. Baitani Raya No. 77, Komp. Rumah Doa, Jakarta — Indonesia
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +62 812-3456-7890 (Pastoral Care)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <a
                  href="mailto:sekretariat@gerejabaitani.org"
                  className="hover:text-white transition-colors"
                >
                  sekretariat@gerejabaitani.org
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-600 gap-4 font-mono">
          <p>© {new Date().getFullYear()} BAITANI CHURCH. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest uppercase text-zinc-500">
            A HOME FOR EVERYONE
          </p>
        </div>

      </div>
    </footer>
  );
}
