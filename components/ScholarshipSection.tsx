"use client";

import ScrollReveal from "./ScrollReveal";

export interface ScholarshipData {
  eyebrow?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  bikeDriveBadge?: string;
  bikeDriveTitle?: string;
  bikeDriveDescription?: string;
  scholarshipBadge?: string;
  scholarshipTitle?: string;
  scholarshipDescription?: string;
  criteriaList?: string[];
}

interface ScholarshipSectionProps {
  data?: ScholarshipData | null;
}

export default function ScholarshipSection({ data }: ScholarshipSectionProps) {
  const eyebrow = data?.eyebrow ?? "Our Initiatives";
  const headlineLine1 = data?.headlineLine1 ?? "Investing in";
  const headlineLine2 = data?.headlineLine2 ?? "Tomorrow's Leaders";

  const bikeDriveBadge = data?.bikeDriveBadge ?? "Annual Signature Initiative";
  const bikeDriveTitle = data?.bikeDriveTitle ?? "D'Sean Perry's Annual Bike Drive";
  const bikeDriveDescription =
    data?.bikeDriveDescription ??
    "Fulfilling D'Sean's personal dream of giving back to his community, the annual D'Sean Emir Perry Bike Drive provides hundreds of bicycles, helmets, and locks to local children every December. Hosted at the Second Baptist Church in Richmond Heights (Miami, FL), this signature event continues D'Sean's legacy of spreading joy, community safety, and opportunities for young kids.";

  const scholarshipBadge = data?.scholarshipBadge ?? "Educational Empowerment";
  const scholarshipTitle =
    data?.scholarshipTitle ?? "The D'Sean Perry Memorial Scholarship";
  const scholarshipDescription =
    data?.scholarshipDescription ??
    "Supporting student-athletes who excel both academically and athletically, honoring D'Sean's dual passions for the game and the arts. Recipients are selected for their character, leadership, and commitment to community.";

  const criteriaList = data?.criteriaList && data.criteriaList.length > 0
    ? data.criteriaList
    : [
        "Academic achievement",
        "Athletic dedication",
        "Community leadership",
        "Creative expression",
      ];

  return (
    <section id="initiatives" className="relative section-padding overflow-hidden bg-navy-900">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-uva-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-uva-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <span className="text-uva-orange/80 text-xs tracking-[0.3em] uppercase mb-4 block">
              {eyebrow}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="headline-lg text-4xl sm:text-5xl lg:text-6xl text-white mb-8">
              {headlineLine1}
              <span className="block text-uva-orange mt-1">{headlineLine2}</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* D'Sean's Annual Bike Drive */}
        <ScrollReveal delay={0.2}>
          <div className="glass rounded-sm p-8 md:p-12 lg:p-16 mb-12 text-center relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-uva-orange/[0.03] to-transparent pointer-events-none" />

            {/* Bicycle Icon representation */}
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-uva-orange/10 text-uva-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="5.5" cy="17.5" r="3" />
                  <circle cx="18.5" cy="17.5" r="3" />
                  <path d="M7.5 9h3" />
                  <path d="M9 9v2.5" />
                  <path d="M5.5 17.5L9 11.5" />
                  <path d="M5.5 17.5h5.5" />
                  <path d="M9 11.5h6l-4 6z" />
                  <path d="M15 11.5l1.5-3.5" />
                  <path d="M15 8h2.5" />
                  <path d="M18.5 17.5L16.5 11.5" />
                </svg>
              </div>
            </div>

            <span className="text-uva-orange text-xs font-semibold tracking-widest uppercase block mb-2">
              {bikeDriveBadge}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white mb-6">
              {bikeDriveTitle}
            </h3>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed mb-8 text-base">
              {bikeDriveDescription}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-white/10 pt-8 text-left">
              <div>
                <span className="text-uva-orange text-sm font-semibold uppercase block">Hosted Annually</span>
                <span className="text-white/80 text-xs">Every December in Miami, FL</span>
              </div>
              <div>
                <span className="text-uva-orange text-sm font-semibold uppercase block">200+ Gifted</span>
                <span className="text-white/80 text-xs">Bicycles, helmets &amp; locks</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="text-uva-orange text-sm font-semibold uppercase block">Community Funded</span>
                <span className="text-white/80 text-xs">100% powered by donations</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Scholarship Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.3} direction="left">
            <div className="glass rounded-sm p-8 lg:p-10 group hover:bg-white/[0.08] transition-all duration-500">
              <div className="text-uva-orange/60 text-xs tracking-[0.3em] uppercase mb-4">
                {scholarshipBadge}
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">
                {scholarshipTitle}
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                {scholarshipDescription}
              </p>
              <ul className="space-y-3">
                {criteriaList.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/50 text-sm">
                    <span className="w-1.5 h-1.5 bg-uva-orange/60 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="right">
            <div className="glass rounded-sm p-8 lg:p-10 group hover:bg-white/[0.08] transition-all duration-500">
              <div className="text-uva-orange/60 text-xs tracking-[0.3em] uppercase mb-4">
                Community Programs
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">
                Youth Development Grants
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Funding youth football camps, art workshops, and mentorship programs
                in Miami and Charlottesville — creating opportunities for young people
                to discover their potential, just as D&apos;Sean did.
              </p>
              <ul className="space-y-3">
                {["Football camp sponsorships", "Art & creativity workshops", "Mentorship connections", "Equipment & resources"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/50 text-sm">
                    <span className="w-1.5 h-1.5 bg-uva-orange/60 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
