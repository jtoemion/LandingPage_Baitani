'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'BERANDA', href: '/' },
    { label: 'TENTANG KAMI', href: '/tentang-kami' },
    { label: 'ACARA KITA', href: '/acara' },
    { label: 'LOKASI & JADWAL', href: '/lokasi' },
    { label: 'CONNECT GROUP', href: '/connect-group' },
    { label: 'GEMBALA', href: '/gembala' },
    { label: 'SOROTAN', href: '/sorotan' },
    { label: 'PERSEMBAHAN', href: '/persembahan' },
  ];

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

          {/* Desktop Nav - High End Minimalist Spacing */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] xl:text-[12px] font-semibold tracking-[0.16em] transition-colors py-1 relative group ${
                    isActive ? 'text-[#d4af37]' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#d4af37] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-zinc-400 font-semibold px-2 py-1 border border-white/10 rounded">
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>ID</span>
            </div>
            <Link
              href="/koneksi"
              className="btn-magnetic inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#f3e5ab] text-black text-xs font-bold tracking-wider uppercase transition-all shadow-lg active:scale-95"
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
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-4 pb-8 space-y-3 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2.5 text-sm font-semibold tracking-wider border-b border-white/5 ${
                  isActive ? 'text-[#d4af37]' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4">
            <Link
              href="/koneksi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black text-xs font-bold tracking-wider uppercase"
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
