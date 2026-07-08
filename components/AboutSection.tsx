"use client";

import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-navy-900 section-padding overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-800/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Editorial Words & Tributes Side */}
          <ScrollReveal direction="left" duration={1}>
            <div className="space-y-8 relative">
              {/* Decorative vertical lines */}
              <div className="absolute -left-6 top-10 bottom-10 w-px bg-gradient-to-b from-uva-orange/40 via-transparent to-uva-orange/40 hidden md:block" />

              {/* D'Sean's Essay Card */}
              <div className="relative bg-navy-800/80 backdrop-blur-md p-8 border border-white/5 rounded-sm shadow-xl">
                {/* 41 Watermark background */}
                <div className="absolute right-4 top-4 font-serif text-8xl font-bold text-white/[0.02] select-none pointer-events-none">
                  41
                </div>

                <span className="text-uva-orange text-xs font-semibold tracking-widest uppercase block mb-2">
                  In His Own Words
                </span>
                <h3 className="font-serif text-white text-2xl mb-4 italic">
                  &ldquo;Bigger Than Me&rdquo;
                </h3>
                
                <div className="space-y-4 font-serif text-white/80 text-sm leading-relaxed border-l-2 border-uva-orange/60 pl-4 py-1 italic">
                  <p>
                    &ldquo;Whatever I do in the future, I will make sure that whoever has helped me become successful will receive something in return. All I want to do is make my family and the city I&apos;m from proud.&rdquo;
                  </p>
                  <p className="text-white/60 text-xs mt-2 not-italic">
                    &mdash; D&apos;Sean Perry, High School English Essay
                  </p>
                </div>

                <div className="mt-6 space-y-4 font-serif text-white/80 text-sm leading-relaxed border-l-2 border-uva-orange/40 pl-4 py-1 italic">
                  <p>
                    &ldquo;Even though there was hate and adversity, we turn it into motivation and overcame those odds.&rdquo;
                  </p>
                  <p className="text-white/60 text-xs mt-2 not-italic">
                    &mdash; D&apos;Sean Perry, on the power of teamwork
                  </p>
                </div>
              </div>

              {/* Tributes Card */}
              <div className="bg-navy-800/40 p-8 border border-white/5 rounded-sm">
                <span className="text-uva-orange/80 text-xs font-semibold tracking-widest uppercase block mb-3">
                  A Beautiful Soul
                </span>
                
                <div className="space-y-4 text-xs sm:text-sm text-white/70">
                  <blockquote className="border-l border-white/10 pl-3">
                    <p className="italic">
                      &ldquo;D&apos;Sean was a loving, giving, caring, God-fearing young man who made his family proud. Football and art was his passion, but the love that he had for his family, friends, and community was proven time and time again...&rdquo;
                    </p>
                    <cite className="block text-white/50 text-[11px] not-italic mt-1.5 font-sans">
                      &mdash; Sean & Happy Perry, Parents
                    </cite>
                  </blockquote>

                  <blockquote className="border-l border-white/10 pl-3">
                    <p className="italic">
                      &ldquo;D&apos;Sean was a delightful, respectful, hard-working person who was one of the best overall young men our communities had to offer. He had a fierce competitive nature, but he was kind and had a strong faith.&rdquo;
                    </p>
                    <cite className="block text-white/50 text-[11px] not-italic mt-1.5 font-sans">
                      &mdash; Earl Sims, Jr., High School Football Coach
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Story Side */}
          <div>
            <ScrollReveal delay={0.1}>
              <span className="text-uva-orange/80 text-xs tracking-[0.3em] uppercase mb-4 block">
                About D&apos;Sean
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="headline-lg text-4xl sm:text-5xl lg:text-6xl text-white mb-8">
                More Than an
                <span className="block text-uva-orange mt-1">Athlete</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-6 body-lg text-white/70">
                <p>
                  Born and raised in Miami, Florida, D&apos;Sean Perry was a force of nature — 
                  on the field, in the studio, and in every life he touched. A standout at 
                  Gulliver Preparatory Academy, he earned the South Florida Conference&apos;s 
                  2018 Defensive Player of the Year with 199 career tackles and 15 sacks.
                </p>
                <p>
                  At the University of Virginia, D&apos;Sean wore #41 with pride as a linebacker 
                  and defensive end. In his 2020 debut, he returned an interception 84 yards 
                  for a touchdown — the second-longest return by a linebacker in program history. 
                  But his impact extended far beyond the field.
                </p>
                <p>
                  A Studio Art major, D&apos;Sean filled sketchbooks since childhood, earned awards 
                  for his ceramics, and created sculptures that blended mythology with self-expression. 
                  He played piano and guitar, wrote poetry, and carried a warmth that made everyone 
                  around him feel seen.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="mt-10 flex items-center gap-6">
                <div className="text-center">
                  <span className="font-serif text-3xl text-uva-orange font-bold block">199</span>
                  <span className="text-white/40 text-xs tracking-wider uppercase">Career Tackles</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <span className="font-serif text-3xl text-uva-orange font-bold block">84</span>
                  <span className="text-white/40 text-xs tracking-wider uppercase">Yard INT Return</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <span className="font-serif text-3xl text-uva-orange font-bold block">#41</span>
                  <span className="text-white/40 text-xs tracking-wider uppercase">Forever</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
