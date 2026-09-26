import { HeroSlide } from '@/types';

/**
 * Hero Carousel Slides Configuration
 * You can replace the imageUrl with local files placed in /public/images/hero/
 * e.g., '/images/hero/slide-1.jpg', '/images/hero/slide-2.jpg', etc.
 */
export const heroSlidesData: HeroSlide[] = [
  {
    id: 'welcome-home',
    badge: 'SATU TUHAN • SATU KELUARGA • MENGUBAHKAN HIDUP',
    title: 'WELCOME',
    titleAccent: 'HOME',
    subtitle: 'Rumah Bagi Setiap Jiwa',
    description: 'Sebuah rumah bagi setiap jiwa untuk bertumbuh dalam kasih Kristus, mengalami pemulihan sejati, dan bergerak dalam pergerakan Roh Kudus.',
    primaryCtaText: 'CARI LOKASI & JADWAL IBADAH',
    primaryCtaHref: '#lokasi',
    secondaryCtaText: 'TONTON LIVE STREAMING',
    secondaryCtaHref: 'https://youtube.com',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2200&auto=format&fit=crop',
    altText: 'Worship Atmosphere Baitani Church Concert Stage',
  },
  {
    id: 'tahun-persatuan',
    badge: 'TEMA TAHUNAN 2026',
    title: 'SORGA YANG',
    titleAccent: 'TERBUKA',
    subtitle: 'Tahun Persatuan & Mujizat Ilahi',
    description: 'Memasuki musim pelipatgandaan rohani, keintiman doa korporat yang kokoh, dan terobosan keselamatan bagi seluruh keluarga jemaat.',
    primaryCtaText: 'IKUTI MEZBAH DOA MINGGUAN',
    primaryCtaHref: '#jadwal',
    secondaryCtaText: 'PENGAKUAN IMAN KAMI',
    secondaryCtaHref: '#identitas',
    imageUrl: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2200&auto=format&fit=crop',
    altText: 'Prayer Altar and Congregation in Worship',
  },
  {
    id: 'youth-movement',
    badge: 'BAITANI YOUTH MOVEMENT',
    title: 'LIMITLESS',
    titleAccent: 'FAITH',
    subtitle: 'Kebangkitan Generasi Muda',
    description: 'Komunitas pemuda yang berkobar bagi Kristus, berakar dalam kebenaran, dan membawa dampak kepemimpinan di kampus serta dunia karir.',
    primaryCtaText: 'YOUTH SERVICE • SABTU PK 17:00',
    primaryCtaHref: '#jadwal',
    secondaryCtaText: 'GABUNG KOMUNITAS YOUTH',
    secondaryCtaHref: '#connect-group',
    imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2200&auto=format&fit=crop',
    altText: 'Youth Revival Fellowship and Worship',
  },
  {
    id: 'connect-group',
    badge: 'KOMUNITAS SEL JEMAAT',
    title: 'A HOME FOR',
    titleAccent: 'EVERYONE',
    subtitle: 'Keluarga Rohani di Dekat Anda',
    description: 'Temukan keluarga rohani yang saling menopang, memuridkan, dan merayakan kesaksian hidup dalam kelompok sel Connect Group mingguan.',
    primaryCtaText: 'TEMUKAN CONNECT GROUP',
    primaryCtaHref: '#connect-group',
    secondaryCtaText: 'SAYA JEMAAT BARU',
    secondaryCtaHref: '#koneksi',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2200&auto=format&fit=crop',
    altText: 'Community Life and Fellowship',
  },
];
