"use client";

import ScrollReveal from "./ScrollReveal";

interface EventData {
  _id: string;
  title: string;
  date: string;
  location?: string;
  description?: string;
  type?: string;
}

interface EventsSectionProps {
  data?: EventData[] | null;
}

const fallbackEvents: EventData[] = [
  {
    _id: "1",
    date: "December 2024",
    title: "Annual Holiday Bike Drive",
    location: "Miami, Florida",
    description:
      "Providing bicycles to children in need during the holiday season \u2014 continuing D\u2019Sean\u2019s tradition of giving back to the Miami community.",
    type: "Community",
  },
  {
    _id: "2",
    date: "Summer 2024",
    title: "Youth Football Camp",
    location: "Miami, Florida",
    description:
      "Free football camp for young athletes featuring coaching on fundamentals, teamwork, and character development.",
    type: "Athletics",
  },
  {
    _id: "3",
    date: "November 2024",
    title: "Memorial Remembrance",
    location: "Charlottesville, Virginia",
    description:
      "Annual gathering to honor and celebrate the lives of D\u2019Sean, Lavel, and Devin. A time for healing, community, and remembrance.",
    type: "Memorial",
  },
  {
    _id: "4",
    date: "Spring 2025",
    title: "Art & Athletics Exhibition",
    location: "University of Virginia",
    description:
      "Showcasing D\u2019Sean\u2019s artwork alongside youth creations, celebrating the intersection of athletic excellence and artistic expression.",
    type: "Arts",
  },
];

const typeColors: Record<string, string> = {
  Community: "bg-uva-orange/20 text-uva-orange",
  Athletics: "bg-uva-orange-light/20 text-uva-orange-light",
  Memorial: "bg-white/10 text-white/70",
  Arts: "bg-uva-blue/40 text-white/80",
};

export default function EventsSection({ data }: EventsSectionProps) {
  const events = data && data.length > 0 ? data : fallbackEvents;

  return (
    <section id="events" className="relative section-padding overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <span className="text-uva-orange text-xs tracking-[0.3em] uppercase mb-4 block">
              Events
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="headline-lg text-4xl sm:text-5xl lg:text-6xl text-text-primary mb-6">
              Gathering in
              <span className="block text-uva-blue mt-1">His Honor</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-text-muted text-lg">
              From football camps to community drives, every event carries D&apos;Sean&apos;s 
              spirit of bringing people together.
            </p>
          </ScrollReveal>
        </div>

        {/* Events Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-uva-orange/40 via-uva-orange/20 to-transparent hidden sm:block" />

          <div className="space-y-8 lg:space-y-12">
            {events.map((event, i) => (
              <ScrollReveal
                key={event._id}
                delay={0.1 + i * 0.1}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex flex-col sm:flex-row gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 -translate-x-1/2 bg-uva-orange rounded-full ring-4 ring-cream hidden sm:block z-10" />

                  {/* Spacer for alternating */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="sm:pl-12 md:pl-0 md:w-1/2">
                    <div className={`bg-white rounded-sm p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-black/[0.04] ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full ${typeColors[event.type || "Community"]}`}>
                          {event.type}
                        </span>
                        <span className="text-text-muted text-sm">{event.date}</span>
                      </div>
                      <h3 className="font-serif text-xl text-text-primary font-semibold mb-2">
                        {event.title}
                      </h3>
                      {event.location && (
                        <p className="text-text-muted text-sm mb-3 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {event.location}
                        </p>
                      )}
                      <p className="text-text-muted leading-relaxed text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
