"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";


interface HeroData {
  eyebrow?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  headlineLine3?: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  sideQuote?: string;
  heroImage?: Parameters<typeof urlForImage>[0];
}

interface HeroSectionProps {
  data?: HeroData | null;
  jerseyUrl?: string | null;
}

const DEFAULT_JERSEY_URL =
  "https://www.uvabookstores.com/NIke-Custom-Orange-Jersey?quantity=1&footballplayername=95";

function TwoLineLabel({ text }: { text: string }) {
  const words = text.trim().split(/\s+/);
  const secondLine = words.pop();

  return (
    <span className="leading-relaxed">
      <span className="block whitespace-nowrap">{words.join(" ")}</span>
      <span className="block whitespace-nowrap">{secondLine}</span>
    </span>
  );
}

export default function HeroSection({ data, jerseyUrl }: HeroSectionProps) {
  const eyebrow = data?.eyebrow ?? "University of Virginia \u2022 #41";
  const headlineLine1 = data?.headlineLine1 ?? "The";
  const headlineLine2 = data?.headlineLine2 ?? "D\u2019Sean Perry";
  const headlineLine3 = data?.headlineLine3 ?? "Foundation";
  const subtitle =
    data?.subtitle ??
    "Honoring a life of leadership, love, artistic expression, and athletic dedication.";
  const ctaPrimaryText = data?.ctaPrimaryText ?? "Honor His Legacy";
  const ctaPrimaryLink = data?.ctaPrimaryLink ?? "#about";
  const ctaSecondaryText = data?.ctaSecondaryText ?? "Support the Foundation";
  const ctaSecondaryLink = data?.ctaSecondaryLink ?? "#donate";
  const sideQuote =
    data?.sideQuote ??
    "D\u2019Sean\u2019s legacy lives on \u2014 a force of positivity, artistic creation, and community empowerment for young athletes.";

  const heroImageUrl = data?.heroImage
    ? urlForImage(data.heroImage)?.width(1200).url()
    : "/images/dsean-perry.png";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-20"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-800/40 via-navy-900 to-navy-950 z-0 pointer-events-none" />

      {/* D'Sean Perry Portrait - Desktop: Right Aligned, Mobile: Background Watermark */}
      <div className="absolute right-0 bottom-0 w-full lg:w-1/2 h-[80%] lg:h-[90%] z-1 flex items-end justify-center lg:justify-end">
        {/* Soft studio light aura behind D'Sean */}
        <div className="absolute right-[20%] bottom-[30%] w-[60%] h-[60%] rounded-full bg-uva-orange/10 blur-[100px] pointer-events-none z-0 hidden lg:block" />
        
        {/* Bottom fade to prevent a harsh chest crop */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-10" />
        
        {/* Mobile-only full opacity dark overlay */}
        <div className="absolute inset-0 bg-navy-900/60 z-10 lg:hidden" />
        
        <div className="relative w-full h-full max-w-lg lg:max-w-none opacity-30 lg:opacity-100 transition-opacity duration-700">
          <Image
            src={heroImageUrl!}
            alt="D'Sean Perry"
            fill
            priority
            className="object-contain object-bottom lg:object-right-bottom scale-100"
            sizes="(max-w-1024px) 100vw, 50vw"
            quality={95}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="max-w-2xl lg:max-w-none text-left flex flex-col justify-center py-12">
          {/* Eyebrow */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-3 text-uva-orange text-xs font-semibold tracking-[0.3em] uppercase">
              <span className="w-6 h-px bg-uva-orange/45" />
              {eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6"
          >
            {headlineLine1}{" "}
            <span className="block text-white">{headlineLine2}</span>{" "}
            <span className="block text-uva-orange">{headlineLine3}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-lg sm:text-xl text-white/70 italic mb-10 max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <a href={ctaPrimaryLink} className="btn-primary min-h-20 w-full px-4 py-3 text-center">
              <TwoLineLabel text={ctaPrimaryText} />
            </a>
            <a href={ctaSecondaryLink} className="btn-outline min-h-20 w-full px-4 py-3 text-center">
              <TwoLineLabel text={ctaSecondaryText} />
            </a>
            <a
              href={jerseyUrl || DEFAULT_JERSEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-20 w-full items-center justify-center border-2 border-uva-orange bg-uva-orange/10 px-4 py-3 text-center text-uva-orange text-xs font-semibold tracking-[0.12em] uppercase shadow-lg shadow-uva-orange/10 transition-all duration-300 hover:bg-uva-orange hover:text-white hover:shadow-uva-orange/30"
            >
              <span className="leading-relaxed">
                <span className="block whitespace-nowrap">Buy D’Sean’s</span>
                <span className="block whitespace-nowrap">Jersey ↗</span>
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Side Tagline overlay - Desktop only */}
        <div className="hidden lg:flex justify-end items-start h-full pt-12 relative z-20">
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-xs text-right bg-navy-950/40 backdrop-blur-sm p-6 border-r-2 border-uva-orange"
          >
            <p className="font-serif text-white/80 text-sm leading-relaxed italic">
              &ldquo;{sideQuote}&rdquo;
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-6 lg:left-8 z-10 flex items-center gap-4"
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase rotate-90 origin-left translate-x-4">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
