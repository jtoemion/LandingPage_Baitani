'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Globe, ChevronDown, Layers, ExternalLink } from 'lucide-react';

interface NavItem {
  label: string;
  sectionId: string;
  pageHref: string;
  icon?: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const dedicatedPages = [
    { name: 'Tentang Gereja Baitani', href: '/tentang-kami', desc: 'Visi 2030, Misi, Core Values, Credo & Sejarah' },
    { name: 'Acara & Agenda Kegiatan', href: '/acara', desc: 'Kalender lengkap, filter kategori, registrasi' },
    { name: 'Lokasi Kampus & Jadwal', href: '/lokasi', desc: 'Detail cabang, fasilitas anak/disabilitas, KRL' },
    { name: 'Connect Group (Komunitas Sel)', href: '/connect-group', desc: '5 kategori sel jemaat & form pendaftaran' },
    { name: 'Gembala Sidang & Pastoral', href: '/gembala', desc: 'Profil Pdt. Johanes Pratama & dewan penatua' },
    { name: 'Sorotan & Galeri Momen', href: '/sorotan', desc: 'Dokumentasi baptisan, youth, & kesaksian' },
    { name: 'Persembahan & QRIS', href: '/persembahan', desc: 'Rekening resmi BCA/Mandiri & barcode QRIS' },
    { name: 'Saya Jemaat Baru / Koneksi', href: '/koneksi', desc: 'Langkah awal bergabung & form doa rahasia' },
  ];

  // Scroll detection & ScrollSpy for Single-Page Homepage
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Active Section ScrollSpy on Homepage
      if (pathname === '/') {
        const sections = ['hero', 'identitas', 'acara', 'lokasi', 'connect-group', 'pastor', 'sorotan', 'persembahan', 'koneksi'];
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsPagesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${sectionId}`);
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false);
      }
    }
  };

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
          
          {/* GMS-style Typographic Minimalist Brand */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
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

          {/* Desktop Nav - Single-Page Smooth Scroll + Active Highlight */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isSectionActive = pathname === '/' && activeSection === link.sectionId;
              const isPageActive = pathname !== '/' && pathname.startsWith(link.pageHref);
              const isActive = isSectionActive || isPageActive;

              return (
                <a
                  key={link.label}
                  href={pathname === '/' ? `#${link.sectionId}` : `/#${link.sectionId}`}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className={`text-[11px] xl:text-[12px] font-semibold tracking-[0.16em] transition-colors py-1 relative group cursor-pointer ${
                    isActive ? 'text-[#d4af37]' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#d4af37] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action: Explore Dedicated Pages Dropdown & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Dedicated Pages Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs text-zinc-300 hover:text-white font-mono tracking-wider transition-all min-h-[38px]"
                aria-expanded={isPagesDropdownOpen}
                aria-label="Buka menu halaman lengkap"
              >
                <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-[11px] font-semibold">HALAMAN</span>
                <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPagesDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-zinc-950/95 border border-white/15 p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 z-50">
                  <div className="px-3 py-2 border-b border-white/10 mb-2">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#d4af37]">
                      8 HALAMAN MANDIRI DEDIKASI
                    </p>
                  </div>
                  <div className="space-y-1 max-h-[380px] overflow-y-auto no-scrollbar">
                    {dedicatedPages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        onClick={() => setIsPagesDropdownOpen(false)}
                        className={`flex flex-col p-2.5 rounded-xl hover:bg-white/10 transition-colors group ${
                          pathname === page.href ? 'bg-[#d4af37]/10 border border-[#d4af37]/30' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold ${pathname === page.href ? 'text-[#d4af37]' : 'text-white group-hover:text-[#d4af37]'}`}>
                            {page.name}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-[11px] text-zinc-400 font-light mt-0.5 line-clamp-1">
                          {page.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language Pill */}
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-zinc-400 font-semibold px-2 py-1 border border-white/10 rounded">
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>ID</span>
            </div>

            {/* SAYA BARU Button */}
            <a
              href={pathname === '/' ? '#koneksi' : '/#koneksi'}
              onClick={(e) => handleNavClick(e, 'koneksi')}
              className="btn-magnetic inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#f3e5ab] text-black text-xs font-bold tracking-wider uppercase transition-all shadow-lg active:scale-95"
            >
              <span>SAYA BARU</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-4 pb-8 space-y-4 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          
          <div className="pb-2 border-b border-white/10">
            <span className="text-[10px] font-mono text-[#d4af37] font-bold uppercase tracking-widest block mb-2">
              SEKSI HALAMAN DEPAN (SINGLEPAGE)
            </span>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={pathname === '/' ? `#${link.sectionId}` : `/#${link.sectionId}`}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="block py-2 text-sm font-semibold tracking-wider text-zinc-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono text-[#d4af37] font-bold uppercase tracking-widest block mb-2">
              HALAMAN LENGKAP MANDIRI
            </span>
            <div className="grid grid-cols-2 gap-2">
              {dedicatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 text-[11px] font-semibold text-zinc-200 hover:text-[#d4af37]"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a
              href={pathname === '/' ? '#koneksi' : '/#koneksi'}
              onClick={(e) => handleNavClick(e, 'koneksi')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black text-xs font-bold tracking-wider uppercase"
            >
              <span>SAYA JEMAAT BARU</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
