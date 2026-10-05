import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/sections/HeroSection';
import MarqueeTicker from '@/components/sections/MarqueeTicker';
import EventsCarousel from '@/components/sections/EventsCarousel';
import HighlightsGallery from '@/components/sections/HighlightsGallery';

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* Full-Screen Hero */}
        <HeroSection />

        {/* Campaign Marquee Strip */}
        <MarqueeTicker />

        {/* Events Carousel */}
        <EventsCarousel />

        {/* Highlights Gallery */}
        <HighlightsGallery />
      </main>

      <Footer />
    </div>
  );
}