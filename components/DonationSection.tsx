"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { urlForImage } from "@/sanity/lib/image";

interface DonationData {
  eyebrow?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  description?: string;
  backgroundImage?: Parameters<typeof urlForImage>[0];
}

interface SiteSettingsData {
  donationUrl?: string;
  jerseyUrl?: string;
  jerseyTitle?: string;
  jerseyDescription?: string;
  contactEmail?: string;
  venmoHandle?: string;
}

interface DonationSectionProps {
  data?: DonationData | null;
  siteSettings?: SiteSettingsData | null;
}

export default function DonationSection({ data, siteSettings }: DonationSectionProps) {
  const eyebrow = data?.eyebrow ?? "Support the Mission";
  const headlineLine1 = data?.headlineLine1 ?? "Continue His";
  const headlineLine2 = data?.headlineLine2 ?? "Legacy";
  const description =
    data?.description ??
    "Every contribution helps us carry forward D\u2019Sean\u2019s vision \u2014 empowering young athletes, supporting students, and strengthening the communities he loved.";
  const donationUrl = siteSettings?.donationUrl ?? "https://account.venmo.com/u/dep_0920";
  const jerseyUrl =
    siteSettings?.jerseyUrl ??
    "https://www.uvabookstores.com/NIke-Custom-Orange-Jersey?quantity=1&footballplayername=95";
  const jerseyTitle =
    siteSettings?.jerseyTitle ?? "Official #41 Nike Custom Orange Jersey";
  const jerseyDescription =
    siteSettings?.jerseyDescription ??
    "All purchases of the official #41 D\u2019Sean Perry UVA jersey directly benefit the D\u2019Sean Perry Foundation and support our scholarships and youth programs.";
  const contactEmail = siteSettings?.contactEmail ?? "info@dseanperryfoundation.org";
  const venmoHandle = siteSettings?.venmoHandle ?? "@Happy-Perry-2";

  const bgImageUrl = data?.backgroundImage
    ? urlForImage(data.backgroundImage)?.width(1920).url()
    : "/images/donation-bg.png";

  return (
    <section id="donate" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageUrl!}
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-navy-900/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-navy-900/70" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <span className="text-uva-orange/80 text-xs tracking-[0.3em] uppercase mb-4 block">
            {eyebrow}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="headline-xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
            {headlineLine1}
            <span className="block text-uva-orange">{headlineLine2}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-serif text-xl text-white/70 italic mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        {/* Featured Jersey Card */}
        <ScrollReveal delay={0.25}>
          <div className="mb-14 max-w-3xl mx-auto bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-uva-orange/30 p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden text-left shadow-2xl group hover:border-uva-orange/60 transition-all duration-500">
            {/* Subtle orange accent glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-uva-orange/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-uva-orange to-uva-orange-light" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-uva-orange/15 border border-uva-orange/40 text-uva-orange text-[11px] font-semibold tracking-widest uppercase mb-3">
                  <span className="w-2 h-2 rounded-full bg-uva-orange animate-pulse" />
                  Official Tribute Merchandise
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold mb-2">
                  {jerseyTitle}
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
                  {jerseyDescription}
                </p>
                <div className="mt-3 flex items-center gap-2 text-uva-orange text-xs font-medium tracking-wider uppercase">
                  <span>100% of proceeds support the foundation</span>
                </div>
              </div>

              <div className="w-full md:w-auto flex-shrink-0">
                <a
                  href={jerseyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full md:w-auto text-sm px-8 py-4 whitespace-nowrap shadow-lg shadow-uva-orange/20 hover:shadow-uva-orange/40 flex items-center justify-center gap-3 group/btn"
                >
                  <span>Order #41 Jersey</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Direct Donation & Contact Actions */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
            <a
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4 animate-pulse-glow"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                Donate via Venmo
              </span>
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="btn-outline text-base px-10 py-4"
            >
              Get Involved
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-white/40 text-sm">
            <span>Venmo: {venmoHandle}</span>
            <span className="w-px h-4 bg-white/10 hidden sm:inline" />
            <span>501(c)(3) Tax Deductible</span>
            <span className="w-px h-4 bg-white/10 hidden sm:inline" />
            <a
              href={jerseyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-uva-orange/80 hover:text-uva-orange underline underline-offset-4 transition-colors"
            >
              UVA Bookstore Official Merchandise
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
