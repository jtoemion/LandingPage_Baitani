'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    { label: 'LOKASI & IBADAH', sectionId: 'lokasi', pageHref: '/#lokasi' },
    { label: 'KOI', sectionId: 'connect-group', pageHref: '/connect-group' },
    { label: 'GEMBALA', sectionId: 'pastor', pageHref: '/gembala' },
    { label: 'SOROTAN', sectionId: 'sorotan', pageHref: '/sorotan' },
    { label: 'PERSEMBAHAN', sectionId: 'persembahan', pageHref: '/persembahan' },
  ];

  // Scrollspy & Scrolled background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      if (pathname === '/') {
        const sections = ['hero', 'acara', 'sorotan', 'lokasi'];
        const scrollPosition = window.scrollY + 250;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i];
          const el = document.getElementById(sectionId);
          if (el && scrollPosition >= el.offsetTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavItem) => {
    if (pathname === '/') {
      if (link.sectionId === 'hero') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('hero');
      } else if (link.sectionId === 'lokasi') {
        e.preventDefault();
        const el = document.getElementById('lokasi');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection('lokasi');
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fbf9f6]/95 backdrop-blur-xl border-b border-[#e8e2d5] py-3.5 shadow-[0_4px_20px_rgba(27,28,26,0.06)]'
          : 'bg-[#fbf9f6]/90 backdrop-blur-md border-b border-[#e8e2d5]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('hero');
              }
            }}
            className="flex items-center gap-3 group transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600] rounded-lg p-1"
            aria-label="Gereja Baptis Indonesia Baitani Sukabumi Home"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#d3c4af] bg-white shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
              <Image
                src="/images/logo/logo-baitani.jpeg"
                alt="Logo Resmi Gereja Baptis Indonesia Baitani Sukabumi"
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-[0.18em] text-[#1b1c1a] uppercase leading-none group-hover:text-[#785600] transition-colors">
                BAITANI
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#817563] font-semibold uppercase mt-1 group-hover:text-[#785600] transition-colors">
                SUKABUMI
              </span>
            </div>
          </Link>

          {/* Navigasi Utama */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                pathname === '/'
                  ? activeSection === link.sectionId
                  : pathname === link.pageHref;

              const targetHref =
                pathname === '/' && link.sectionId === 'lokasi'
                  ? '#lokasi'
                  : link.pageHref;

              return (
                <Link
                  key={link.label}
                  href={targetHref}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-[11px] font-semibold tracking-wider transition-colors py-1 relative group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600] rounded-sm px-0.5 ${
                    isActive ? 'text-[#785600] font-bold' : 'text-[#625e54] hover:text-[#1b1c1a]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#785600] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Language Pill */}
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-[#625e54] font-semibold px-2 py-1 border border-[#d3c4af] rounded">
              <Globe className="w-3.5 h-3.5 text-[#785600]" />
              <span>ID</span>
            </div>



            {/* CTA Saya Baru */}
            <Link
              href="/koneksi"
              className="btn-magnetic inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#785600] hover:bg-[#986d00] text-white text-[11px] font-bold tracking-wider uppercase transition-all shadow-[0_4px_14px_rgba(120,86,0,0.22)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785600]"
            >
              <span>SAYA BARU</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#4f4535] hover:text-[#1b1c1a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#785600] rounded-lg"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#fbf9f6]/98 backdrop-blur-2xl border-b border-[#e8e2d5] px-6 pt-4 pb-8 space-y-4 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto shadow-xl"
        >
          <div className="pb-2 border-b border-[#e8e2d5]">
            <span className="text-xs font-mono text-[#785600] font-bold uppercase tracking-wider block mb-2">
              MENU UTAMA
            </span>
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === '/'
                    ? activeSection === link.sectionId
                    : pathname === link.pageHref;

                const targetHref =
                  pathname === '/' && link.sectionId === 'lokasi'
                    ? '#lokasi'
                    : link.pageHref;

                return (
                  <Link
                    key={link.label}
                    href={targetHref}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`block py-3 px-2 text-sm font-semibold tracking-wider transition-colors rounded-lg min-h-[44px] flex items-center ${
                      isActive
                        ? 'text-[#785600] font-bold bg-[#f5f3f0]'
                        : 'text-[#4f4535] hover:text-[#1b1c1a] hover:bg-[#f5f3f0]/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-2 space-y-2">

            <Link
              href="/koneksi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-magnetic w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#785600] text-white text-xs font-bold tracking-wider uppercase shadow-md"
            >
              <span>SAYA JEMAAT BARU</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}