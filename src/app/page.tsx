import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/sections/HeroSection';
import MarqueeTicker from '@/components/sections/MarqueeTicker';
import ServiceSchedule from '@/components/sections/ServiceSchedule';
import EventsCarousel from '@/components/sections/EventsCarousel';
import MinistryShowcase from '@/components/sections/MinistryShowcase';
import LeadershipGrid from '@/components/sections/LeadershipGrid';
import GivingSection from '@/components/sections/GivingSection';
import ConnectIntentForm from '@/components/sections/ConnectIntentForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* 1. Full-Bleed Hero Section */}
        <HeroSection />

        {/* 2. Announcement Running Marquee Ticker */}
        <MarqueeTicker />

        {/* 3. Live Service Schedule & Countdown Timer */}
        <ServiceSchedule />

        {/* 4. Upcoming Events & Seminars Carousel */}
        <EventsCarousel />

        {/* 5. Ministries & Community Groups */}
        <MinistryShowcase />

        {/* 6. Pastoral & Leadership Team */}
        <LeadershipGrid />

        {/* 7. Giving, Tithes & Offerings (QRIS & Bank Transfer) */}
        <GivingSection />

        {/* 8. Connect & Prayer Intent Form */}
        <ConnectIntentForm />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
