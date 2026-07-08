"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function DonationSection() {
  return (
    <section id="donate" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/donation-bg.png"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-navy-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-navy-900/60" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <span className="text-uva-orange/80 text-xs tracking-[0.3em] uppercase mb-4 block">
            Support the Mission
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="headline-xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
            Continue His
            <span className="block text-uva-orange">Legacy</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-serif text-xl text-white/60 italic mb-12 max-w-2xl mx-auto leading-relaxed">
            Every contribution helps us carry forward D&apos;Sean&apos;s vision — 
            empowering young athletes, supporting students, and strengthening 
            the communities he loved.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4 animate-pulse-glow"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                Donate Now
              </span>
            </a>
            <a
              href="mailto:info@dseanperryfoundation.org"
              className="btn-outline text-base px-10 py-4"
            >
              Get Involved
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-8 text-white/30 text-sm">
            <span>Venmo: @Happy-Perry-2</span>
            <span className="w-px h-4 bg-white/10" />
            <span>501(c)(3) Tax Deductible</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
