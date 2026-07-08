"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
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
            src="/images/dsean-perry.png"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-3 text-uva-orange text-xs font-semibold tracking-[0.3em] uppercase">
              <span className="w-6 h-px bg-uva-orange/45" />
              University of Virginia &bull; #41
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6"
          >
            The <span className="block text-white">D&apos;Sean Perry</span> <span className="block text-uva-orange">Foundation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-lg sm:text-xl text-white/70 italic mb-10 max-w-xl leading-relaxed"
          >
            Honoring a life of leadership, love, artistic expression, and athletic dedication.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <a href="#about" className="btn-primary w-full sm:w-auto px-8 py-4 text-center">
              <span>Honor His Legacy</span>
            </a>
            <a href="#donate" className="btn-outline w-full sm:w-auto px-8 py-4 text-center">
              Support the Foundation
            </a>
          </motion.div>
        </div>

        {/* Right Side Tagline overlay - Desktop only */}
        <div className="hidden lg:flex justify-end items-start h-full pt-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-xs text-right bg-navy-950/40 backdrop-blur-sm p-6 border-r-2 border-uva-orange"
          >
            <p className="font-serif text-white/80 text-sm leading-relaxed italic">
              &ldquo;D&apos;Sean&apos;s legacy lives on &mdash; a force of positivity, artistic creation, and community empowerment for young athletes.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
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
