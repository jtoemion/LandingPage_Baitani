import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/sections/HeroSection';
import MarqueeTicker from '@/components/sections/MarqueeTicker';
import EventsCarousel from '@/components/sections/EventsCarousel';
import IdentitySection from '@/components/sections/IdentitySection';
import CampusLocator from '@/components/sections/CampusLocator';
import ConnectGroupSection from '@/components/sections/ConnectGroupSection';
import PastorProfile from '@/components/sections/PastorProfile';
import HighlightsGallery from '@/components/sections/HighlightsGallery';
import GivingSection from '@/components/sections/GivingSection';
import ConnectIntentForm from '@/components/sections/ConnectIntentForm';

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-black text-white selection:bg-white selection:text-black">
      {/* 1. Global Minimalist Sticky Header */}
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* 2. Full-Screen Cinematic Hero ("WELCOME HOME") */}
        <HeroSection />

        {/* 3. Campaign Marquee Strip ("TAHUN PERSATUAN & SORGA YANG TERBUKA") */}
        <MarqueeTicker />

        {/* 4. Events Carousel ("ACARA KITA") */}
        <EventsCarousel />

        {/* 5. GMS-Style Identity Section (Visi, Misi & Credo) */}
        <IdentitySection />

        {/* 6. Region / Campus Locator with Indonesia Map Graphic */}
        <CampusLocator />

        {/* 7. Connect Group Section ("A Home for Everyone") */}
        <ConnectGroupSection />

        {/* 8. Pastor Profile (Lead Pastor Dignified Portrait & Biography) */}
        <PastorProfile />

        {/* 9. Highlights Gallery ("SOROTAN") */}
        <HighlightsGallery />

        {/* 10. Giving & Penatalayanan (Rekening Resmi & QRIS) */}
        <GivingSection />

        {/* 11. Connect With Us Intent Form */}
        <ConnectIntentForm />
      </main>

      {/* 12. Global Footer with Affiliations Logo Strip */}
      <Footer />
    </div>
  );
}
