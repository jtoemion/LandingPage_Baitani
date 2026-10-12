import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Compass } from 'lucide-react';
import InstagramIcon from '@/components/common/InstagramIcon';

export default function Footer() {
  return (
    <footer className="bg-[#f5f3f0] text-[#625e54] pt-16 pb-12 border-t border-[#e8e2d5] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Navigation & Identity Mirror */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
          
          {/* Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#785600] text-white flex items-center justify-center font-black text-xs tracking-tighter shadow-xs">
                GBI
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm tracking-widest text-[#1b1c1a] uppercase leading-none">
                  BAITANI
                </span>
                <span className="text-[10px] tracking-widest text-[#817563] font-semibold uppercase mt-0.5">
                  SUKABUMI
                </span>
              </div>
            </div>
            <p className="text-xs text-[#625e54] leading-relaxed font-normal">
              Gereja Baptis Indonesia Baitani, Sukabumi. Keluarga rohani yang berakar dalam Firman Tuhan, bertumbuh dalam kasih Kristus, dan saling menopang dalam persekutuan jemaat.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/gbibaitanisukabumi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#e8e2d5] hover:bg-[#785600] hover:text-white text-[#625e54] transition-all text-xs font-semibold shadow-xs"
                aria-label="Instagram Resmi Gereja Baptis Indonesia Baitani Sukabumi"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600 group-hover:text-white" />
                <span>@gbibaitanisukabumi</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#1b1c1a] text-xs font-bold tracking-widest uppercase mb-4">
              JELAJAHI
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#785600] transition-colors inline-block py-1">
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-[#785600] transition-colors inline-block py-1">
                  Tentang Kami & Pengakuan Iman
                </Link>
              </li>
              <li>
                <Link href="/acara" className="hover:text-[#785600] transition-colors inline-block py-1">
                  Acara & Agenda Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/#lokasi" className="hover:text-[#785600] transition-colors inline-block py-1">
                  Lokasi & Informasi Ibadah
                </Link>
              </li>
              <li>
                <Link href="/connect-group" className="hover:text-[#785600] transition-colors inline-block py-1">
                  Komunitas Iman (KOI)
                </Link>
              </li>
              <li>
                <Link href="/gembala" className="hover:text-[#785600] transition-colors inline-block py-1">
                  Gembala & Pelayanan
                </Link>
              </li>
              <li>
                <Link href="/sorotan" className="hover:text-[#785600] transition-colors inline-block py-1">
                  Sorotan & Dokumentasi
                </Link>
              </li>
              <li>
                <Link href="/persembahan" className="hover:text-[#785600] transition-colors inline-block py-1">
                  Informasi Persembahan
                </Link>
              </li>
              <li>
                <Link href="/koneksi" className="hover:text-[#785600] transition-colors inline-block py-1 font-semibold text-[#785600]">
                  Saya Jemaat Baru
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Timing */}
          <div>
            <h3 className="text-[#1b1c1a] text-xs font-bold tracking-widest uppercase mb-4">
              WAKTU IBADAH
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#785600] mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-[#1b1c1a] font-semibold">Ibadah & Persekutuan</p>
                  <p className="text-[#625e54] leading-relaxed">
                    Informasi jadwal ibadah rutin dan kegiatan jemaat dapat dikonfirmasi langsung ke gereja.
                  </p>
                  <p className="text-[#817563] text-[11px] leading-relaxed pt-1">
                    Silakan menghubungi sekretariat gereja atau pantau pengumuman resmi terkini di akun Instagram resmi{' '}
                    <a
                      href="https://www.instagram.com/gbibaitanisukabumi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#785600] font-semibold underline hover:text-[#986d00]"
                    >
                      @gbibaitanisukabumi
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-[#1b1c1a] text-xs font-bold tracking-widest uppercase mb-4">
              LOKASI RESMI
            </h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#785600] flex-shrink-0 mt-0.5" />
                <span>
                  Jl. R.E. Martadinata No. 86, Sukabumi, Jawa Barat
                </span>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jl.+R.E.+Martadinata+No.+86+Sukabumi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e8e2d5] hover:border-[#785600] text-[#785600] font-semibold transition-colors text-xs"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Petunjuk Arah Google Maps</span>
                </a>
              </div>
              <p className="text-[12px] text-[#817563] pt-1">
                Layanan sekretariat dan konfirmasi pastoral dilayani langsung di gedung gereja atau melalui pesan resmi Instagram.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e8e2d5] flex flex-col sm:flex-row items-center justify-between text-xs text-[#817563] gap-4 font-mono">
          <p>© {new Date().getFullYear()} GEREJA BAPTIS INDONESIA BAITANI, SUKABUMI. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest uppercase text-[#785600] font-semibold">
            SUKABUMI, JAWA BARAT
          </p>
        </div>

      </div>
    </footer>
  );
}
