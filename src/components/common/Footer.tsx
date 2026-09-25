import React from 'react';
import { Church, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Church className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-wide text-white">
                  GEREJA BAITANI
                </span>
                <span className="text-[11px] tracking-widest uppercase text-slate-400 font-medium">
                  Welcome Home
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sebuah tempat bagi setiap jiwa untuk berakar, bertumbuh, dan berbuah dalam kasih anugerah Kristus. Pintu kami selalu terbuka untuk Anda dan keluarga.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Instagram Gereja Baitani"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* YouTube SVG */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                aria-label="YouTube Channel Gereja Baitani"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>
              {/* Facebook SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Facebook Gereja Baitani"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors inline-block py-1">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-blue-400 transition-colors inline-block py-1">
                  Jadwal Ibadah Mingguan
                </a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-blue-400 transition-colors inline-block py-1">
                  Agenda & Kegiatan Mendatang
                </a>
              </li>
              <li>
                <a href="#pelayanan" className="hover:text-blue-400 transition-colors inline-block py-1">
                  Komunitas & Pelayanan
                </a>
              </li>
              <li>
                <a href="#tim" className="hover:text-blue-400 transition-colors inline-block py-1">
                  Tim Pastoral & Penggembalaan
                </a>
              </li>
              <li>
                <a href="#persembahan" className="hover:text-blue-400 transition-colors inline-block py-1">
                  Persembahan & QRIS
                </a>
              </li>
              <li>
                <a href="#koneksi" className="hover:text-blue-400 transition-colors inline-block py-1">
                  Formulir Doa & Jemaat Baru
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ibadah & Jam Layanan */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              Waktu Ibadah & Kantor
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Ibadah Hari Minggu</p>
                  <p className="text-slate-400">Raya 1: 07:30 WIB</p>
                  <p className="text-slate-400">Raya 2: 10:30 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Youth & Doa</p>
                  <p className="text-slate-400">Sabtu pk 17:00 (Youth)</p>
                  <p className="text-slate-400">Rabu pk 19:00 (Doa Malam)</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Sekretariat Gereja</p>
                  <p className="text-slate-400">Selasa - Sabtu: 09:00 - 17:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Lokasi & Kontak */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              Lokasi & Kontak
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 leading-relaxed">
                  Jl. Baitani Raya No. 77, Komp. Rumah Doa, Jakarta — Indonesia
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  +62 812-3456-7890 (Pastoral Care)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:sekretariat@gerejabaitani.org"
                  className="hover:text-blue-400 transition-colors"
                >
                  sekretariat@gerejabaitani.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Gereja Baitani. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>untuk melayani sesama</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
