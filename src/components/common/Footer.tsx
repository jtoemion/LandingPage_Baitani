import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Compass, Mail } from 'lucide-react';
import InstagramIcon from '@/components/common/InstagramIcon';

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#f5f3f0] text-[#625e54] pt-16 pb-12 border-t border-[#e8e2d5] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Navigation & Identity Mirror */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
          {/* Identity & Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#d3c4af] bg-white shadow-xs flex-shrink-0">
                <Image
                  src="/images/logo/logo-baitani.jpeg"
                  alt="Logo GBI Baitani Sukabumi"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
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
              Gereja Baptis Indonesia Baitani, Sukabumi. Gereja Misioner yang berakar dalam Firman Tuhan, bertumbuh dalam kasih Kristus, dengan kerinduan memuridkan dari Sukabumi sampai ke ujung bumi.
            </p>

            {/* Social Media Links */}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://www.instagram.com/gbibaitanisukabumi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e8e2d5] hover:bg-[#785600] hover:text-white text-[#625e54] transition-all text-xs font-semibold shadow-xs w-fit"
                aria-label="Instagram Resmi Gereja Baptis Indonesia Baitani Sukabumi"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-600 group-hover:text-white" />
                <span>@gbibaitanisukabumi</span>
              </a>

              <a
                href="https://www.facebook.com/search/top?q=GBI%20baitani"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e8e2d5] hover:bg-[#785600] hover:text-white text-[#625e54] transition-all text-xs font-semibold shadow-xs w-fit"
                aria-label="Facebook GBI baitani"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2] group-hover:text-white" />
                <span>Facebook: GBI baitani</span>
              </a>

              <a
                href="https://www.youtube.com/results?search_query=Baptis+Baitani"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e8e2d5] hover:bg-[#785600] hover:text-white text-[#625e54] transition-all text-xs font-semibold shadow-xs w-fit"
                aria-label="YouTube Baptis Baitani"
              >
                <YouTubeIcon className="w-3.5 h-3.5 text-[#FF0000] group-hover:text-white" />
                <span>YouTube: Baptis Baitani</span>
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
                  Lokasi & Jadwal Ibadah
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
              WAKTU IBADAH & SEKRETARIAT
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#785600] mt-0.5 flex-shrink-0" />
                <div className="space-y-1.5">
                  <p className="text-[#1b1c1a] font-semibold">Ibadah Raya (Minggu):</p>
                  <p className="text-[#625e54] leading-relaxed">
                    • Ibadah 1 (Pagi): 07.00 WIB<br />
                    • Ibadah 2 (Siang): 10.00 WIB
                  </p>

                  <p className="text-[#1b1c1a] font-semibold pt-1">Jam Doa Syafaat (Rabu):</p>
                  <p className="text-[#625e54] leading-relaxed">
                    • Pukul 18.00 WIB di Gedung Gereja
                  </p>

                  <p className="text-[#1b1c1a] font-semibold pt-1">Jam Layanan Sekretariat:</p>
                  <p className="text-[#625e54] leading-relaxed">
                    • Selasa – Minggu: 08.00 – 16.00 WIB<br />
                    <span className="text-[#817563] italic">(Hari Senin Libur / Tutup)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-[#1b1c1a] text-xs font-bold tracking-widest uppercase mb-4">
              KONTAK & LOKASI
            </h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#785600] flex-shrink-0 mt-0.5" />
                <span>
                  Jl. R.E. Martadinata No. 86, Sukabumi, Jawa Barat
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#1b1c1a] font-semibold block">WhatsApp Sekretariat:</span>
                  <a
                    href="https://wa.me/6281295859490"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#785600] font-semibold hover:underline font-mono inline-flex items-center gap-1"
                  >
                    <span>081295859490</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#785600] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#1b1c1a] font-semibold block">Email Resmi:</span>
                  <a
                    href="mailto:baptisbaitani232@gmail.com"
                    className="text-[#785600] hover:underline"
                  >
                    baptisbaitani232@gmail.com
                  </a>
                </div>
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
