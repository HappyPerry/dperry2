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
import { client } from "@/sanity/lib/client";
import {
  heroQuery,
  siteSettingsQuery,
  aboutSectionQuery,
  missionSectionQuery,
  scholarshipSectionQuery,
  donationSectionQuery,
  eventsQuery,
  impactMetricsQuery,
  legacyWallQuery,
} from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";
export const revalidate = 0;

import { projectId } from "@/sanity/env";

async function getSanityData() {
  if (!projectId || projectId === "placeholder") {
    return {
      heroData: null,
      siteSettings: null,
      aboutData: null,
      missionData: null,
      scholarshipData: null,
      donationData: null,
      eventsData: null,
      impactData: null,
      legacyData: null,
    };
  }

  try {
    const [
      heroData,
      siteSettings,
      aboutData,
      missionData,
      scholarshipData,
      donationData,
      eventsData,
      impactData,
      legacyData,
    ] = await Promise.all([
      client.fetch(heroQuery),
      client.fetch(siteSettingsQuery),
      client.fetch(aboutSectionQuery),
      client.fetch(missionSectionQuery),
      client.fetch(scholarshipSectionQuery),
      client.fetch(donationSectionQuery),
      client.fetch(eventsQuery),
      client.fetch(impactMetricsQuery),
      client.fetch(legacyWallQuery),
    ]);

    return {
      heroData,
      siteSettings,
      aboutData,
      missionData,
      scholarshipData,
      donationData,
      eventsData,
      impactData,
      legacyData,
    };
  } catch {
    return {
      heroData: null,
      siteSettings: null,
      aboutData: null,
      missionData: null,
      scholarshipData: null,
      donationData: null,
      eventsData: null,
      impactData: null,
      legacyData: null,
    };
  }
}

export default async function Home() {
  const {
    heroData,
    siteSettings,
    aboutData,
    missionData,
    scholarshipData,
    donationData,
    eventsData,
    impactData,
    legacyData,
  } = await getSanityData();

  return (
    <main>
      <Navbar />
      <HeroSection data={heroData} />
      <AboutSection data={aboutData} />
      <MissionSection data={missionData} />
      <ScholarshipSection data={scholarshipData} />
      <ImpactSection data={impactData} />
      <EventsSection data={eventsData} />
      <LegacyWall data={legacyData} />
      <DonationSection data={donationData} siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} />
    </main>
  );
}
