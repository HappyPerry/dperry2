"use client";

import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0" />
      </svg>
    ),
    title: "Youth Athletics",
    description:
      "Free football camps and sports mentorship programs empowering young athletes in Miami and beyond to pursue their dreams through discipline, teamwork, and perseverance.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Education",
    description:
      "Scholarship programs for student-athletes who embody D'Sean's spirit of academic excellence, artistic passion, and dedication to personal growth.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Community",
    description:
      "Holiday bike drives, outreach events, and initiatives that carry forward D'Sean's natural gift for bringing people together and lifting up his community.",
  },
];

export default function MissionSection() {
  return (
    <section id="mission" className="relative section-padding overflow-hidden bg-cream">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A2E 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <span className="text-uva-orange text-xs tracking-[0.3em] uppercase mb-4 block">
              Our Mission
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="headline-lg text-4xl sm:text-5xl lg:text-6xl text-text-primary mb-8">
              Continuing What
              <span className="block text-uva-blue mt-1">D&apos;Sean Started</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-serif text-xl text-text-primary/60 italic leading-relaxed">
              &ldquo;The D&apos;Sean Perry Foundation empowers youth through athletics, 
              education, and community — carrying forward the spirit of a young man 
              who believed everyone deserved a chance to shine.&rdquo;
            </p>
          </ScrollReveal>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={0.1 + i * 0.15}>
              <div className="group relative p-8 lg:p-10 bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-black/[0.04]">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-uva-orange to-uva-orange-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                {/* Icon */}
                <div className="text-uva-orange mb-6">
                  {pillar.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-text-primary font-semibold mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
