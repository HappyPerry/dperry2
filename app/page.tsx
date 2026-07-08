import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ScholarshipSection from "@/components/ScholarshipSection";
import ImpactSection from "@/components/ImpactSection";
import EventsSection from "@/components/EventsSection";
import LegacyWall from "@/components/LegacyWall";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ScholarshipSection />
      <ImpactSection />
      <EventsSection />
      <LegacyWall />
      <DonationSection />
      <Footer />
    </main>
  );
}
