import type { Metadata } from 'next';
import { EB_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gereja Baptis Indonesia Baitani, Sukabumi — Rumah Kasih & Pertumbuhan Rohani',
  description: 'Situs resmi Gereja Baptis Indonesia Baitani di Sukabumi, Jawa Barat. Temukan informasi jemaat, Komunitas Iman (KOI), warta pelayanan, dan persekutuan bersama.',
  keywords: ['Gereja Baptis Indonesia Baitani', 'GBI Baitani Sukabumi', 'Gereja di Sukabumi', 'Baptis Sukabumi', 'Komunitas Iman', 'KOI Baitani'],
  openGraph: {
    title: 'Gereja Baptis Indonesia Baitani, Sukabumi',
    description: 'Keluarga rohani yang bertumbuh bersama dalam kasih Kristus di Sukabumi, Jawa Barat.',
    url: 'https://gerejabaitani.org',
    siteName: 'Gereja Baptis Indonesia Baitani, Sukabumi',
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/images/logo/logo-baitani.jpeg', type: 'image/jpeg' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/images/logo/logo-baitani.jpeg',
    apple: '/images/logo/logo-baitani.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={`h-full ${ebGaramond.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" href="/images/logo/logo-baitani.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/logo/logo-baitani.jpeg" />
        <link rel="apple-touch-icon" href="/images/logo/logo-baitani.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body className="min-h-dvh flex flex-col bg-[#fbf9f6] text-[#1b1c1a] antialiased selection:bg-[#ffdea6] selection:text-[#271900]">
        {/* Skip to Content Link (WCAG 2.1 AA §03.8) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#785600] focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#785600]"
        >
          Lewati ke Konten Utama
        </a>
        {children}
      </body>
    </html>
  );
}
