'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

interface NavItem {
  label: string;
  sectionId: string;
  pageHref: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks: NavItem[] = [
    { label: 'BERANDA', sectionId: 'hero', pageHref: '/' },
    { label: 'TENTANG KAMI', sectionId: 'identitas', pageHref: '/tentang-kami' },
    { label: 'ACARA KITA', sectionId: 'acara', pageHref: '/acara' },
    { label: 'LOKASI & JADWAL', sectionId: 'lokasi', pageHref: '/lokasi' },
    { label: 'CONNECT GROUP', sectionId: 'connect-group', pageHref: '/connect-group' },
    { label: 'GEMBALA', sectionId: 'pastor', pageHref: '/gembala' },
    { label: 'SOROTAN', sectionId: 'sorotan', pageHref: '/sorotan' },
    { label: 'PERSEMBAHAN', sectionId: 'persembahan', pageHref: '/persembahan' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (pathname === '/') {
        const sections = [
          'hero',
          'identitas',
          'acara',
          'lokasi',
          'connect-group',
          'pastor',
          'sorotan',
          'persembahan',
          'koneksi',
        ];
        const scrollPosition = window.scrollY + 200;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-black/95 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform active:scale-95"
            aria-label="Gereja Baitani Home"
          >
            <div className="w-9 h-9 rounded-sm bg-white text-black flex items-center justify-center font-black text-lg tracking-tighter shadow-md group-hover:bg-[#d4af37] transition-colors">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-[0.22em] text-white uppercase leading-none">
                BAITANI
              </span>
              <span className="text-[9px] tracking-[0.35em] text-zinc-400 font-semibold uppercase mt-1 group-hover:text-[#d4af37] transition-colors">
                CHURCH
              </span>
            </div>
          </Link>

          {/* Navigasi Utama */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.pageHref;

              return (
                <Link
                  key={link.label}
                  href={link.pageHref}
                  className={`text-xs font-semibold tracking-wider transition-colors py-1 relative group cursor-pointer ${
                    isActive ? 'text-[#d4af37]' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Pill */}
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-zinc-400 font-semibold px-2 py-1 border border-zinc-800 rounded">
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>ID</span>
            </div>

            {/* CTA Saya Baru */}
            <Link
              href="/koneksi"
              className="btn-magnetic inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#f3e5ab] text-black text-xs font-bold tracking-wider uppercase transition-all shadow-gold-sm active:scale-95"
            >
              <span>SAYA BARU</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-4 pb-8 space-y-4 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          <div className="pb-2 border-b border-white/10">
            <span className="text-xs font-mono text-[#d4af37] font-bold uppercase tracking-wider block mb-2">
              MENU UTAMA
            </span>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.pageHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-sm font-semibold tracking-wider text-zinc-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}