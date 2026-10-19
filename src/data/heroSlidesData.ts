import { HeroSlide } from '@/types';

/**
 * Hero Carousel Slides Configuration
 * You can replace the imageUrl with local files placed in /public/images/hero/
 * e.g., '/images/hero/slide-1.jpg', '/images/hero/slide-2.jpg', etc.
 */
export const heroSlidesData: HeroSlide[] = [
  {
    id: 'rumah-kasih',
    badge: 'GEREJA BAPTIS INDONESIA BAITANI',
    title: 'RUMAH KASIH',
    titleAccent: 'BAGI SETIAP JIWA',
    subtitle: 'Gereja Baptis Indonesia Baitani • Sukabumi',
    description: 'Sebuah persekutuan keluarga beriman di Sukabumi untuk berakar dalam firman kebenaran, bertumbuh dalam anugerah, dan saling melayani dalam kasih persaudaraan Kristus.',
    primaryCtaText: 'LOKASI & INFORMASI IBADAH',
    primaryCtaHref: '#lokasi',
    secondaryCtaText: 'INSTAGRAM RESMI',
    secondaryCtaHref: 'https://www.instagram.com/gbibaitanisukabumi/',
    imageUrl: '/images/ibadah/ibadah-raya.jpeg',
    altText: 'Ibadah Raya dan Puji-Pujian Gereja Baptis Indonesia Baitani Sukabumi',
  },
  {
    id: 'bertumbuh-bersama',
    badge: 'WARGA JEMAAT & PERSEKUTUAN',
    title: 'KASIH YANG',
    titleAccent: 'MEMPERSATUKAN',
    subtitle: 'Bertumbuh Bersama Dalam Kristus',
    description: 'Membangun keintiman doa korporat yang kokoh, kesatuan hati jemaat, dan pertumbuhan rohani bersama keluarga dan sahabat beriman.',
    primaryCtaText: 'LOKASI PERSEKUTUAN',
    primaryCtaHref: '#lokasi',
    secondaryCtaText: 'PENGAKUAN IMAN KAMI',
    secondaryCtaHref: '/tentang-kami',
    imageUrl: '/images/diakonia/diakonia-kegiatan.jpeg',
    altText: 'Persekutuan Keluarga & Jemaat Baitani Sukabumi',
  },
  {
    id: 'generasi-muda',
    badge: 'PERSEKUTUAN GENERASI MUDA',
    title: 'BERTUMBUH',
    titleAccent: 'BERSAMA',
    subtitle: 'Berakar Kuat Dalam Firman',
    description: 'Wadah pembinaan generasi muda untuk berakar dalam kebenaran firman Allah, berkarakter mulia, dan menjadi berkat bagi sesama.',
    primaryCtaText: 'LOKASI PERSEKUTUAN',
    primaryCtaHref: '#lokasi',
    secondaryCtaText: 'KOMUNITAS IMAN (KOI)',
    secondaryCtaHref: '/connect-group',
    imageUrl: '/images/pelayanan/youth-activity-1.jpeg',
    altText: 'Persekutuan Generasi Muda Baitani Sukabumi',
  },
  {
    id: 'komunitas-iman',
    badge: 'KOMUNITAS IMAN (KOI)',
    title: 'KOMUNITAS',
    titleAccent: 'IMAN',
    subtitle: 'Persekutuan Komunitas Iman (KOI)',
    description: 'Temukan keluarga rohani yang saling menopang, belajar firman bersama, dan merayakan kasih karunia Tuhan dalam kelompok Komunitas Iman (KOI).',
    primaryCtaText: 'TENTANG KOI',
    primaryCtaHref: '/connect-group',
    secondaryCtaText: 'SAYA JEMAAT BARU',
    secondaryCtaHref: '/koneksi',
    imageUrl: '/images/koi/koi-persekutuan.jpeg',
    altText: 'Persekutuan Komunitas Iman KOI Baitani Sukabumi',
  },
];
