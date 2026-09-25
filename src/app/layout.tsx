import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gereja Baitani — Rumah Kasih, Pemulihan, & Pertumbuhan Rohani',
  description: 'Selamat datang di Gereja Baitani. Temukan jadwal ibadah mingguan, komunitas sel, agenda kegiatan jemaat, dan pelayanan permohonan doa.',
  keywords: ['Gereja Baitani', 'Ibadah Kristen', 'Jadwal Ibadah', 'Youth Church', 'Sunday Service', 'Komunitas Jemaat'],
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
    <html lang="id" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
