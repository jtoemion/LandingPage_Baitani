import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/sections/HeroSection';
import MarqueeTicker from '@/components/sections/MarqueeTicker';
import EventsCarousel from '@/components/sections/EventsCarousel';
import HighlightsGallery from '@/components/sections/HighlightsGallery';
import HomeLocationSchedule from '@/components/sections/HomeLocationSchedule';

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#fbf9f6] text-[#1b1c1a] selection:bg-[#ffdea6] selection:text-[#271900]">
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

        {/* Location & Worship Schedule Section */}
        <HomeLocationSchedule />
      </main>

      <Footer />
    </div>
  );
}