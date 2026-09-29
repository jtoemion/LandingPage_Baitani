import type { Metadata } from 'next';
import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gereja Baitani — Rumah Kasih, Pemulihan, & Pertumbuhan Rohani',
  description: 'Selamat datang di Gereja Baitani. Temukan jadwal ibadah mingguan, komunitas sel, agenda kegiatan jemaat, persembahan digital, dan pelayanan permohonan doa.',
  keywords: ['Gereja Baitani', 'Ibadah Kristen', 'Jadwal Ibadah', 'Youth Church', 'Sunday Service', 'Komunitas Jemaat', 'Persembahan Gereja'],
  openGraph: {
    title: 'Gereja Baitani — Welcome Home',
    description: 'Sebuah keluarga rohani yang bertumbuh bersama dalam kasih Kristus.',
    url: 'https://gerejabaitani.org',
    siteName: 'Gereja Baitani',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`h-full ${cinzel.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-dvh flex flex-col bg-[#050505] text-[#fafafa] antialiased selection:bg-[#d4af37] selection:text-black">
        {/* Skip to Content Link (WCAG 2.1 AA §03.8) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#d4af37] focus:text-black focus:font-semibold focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Lewati ke Konten Utama
        </a>
        {children}
      </body>
    </html>
  );
}
