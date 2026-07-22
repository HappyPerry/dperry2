"use client";

import ScrollReveal from "./ScrollReveal";

export interface LegacyTribute {
  _id?: string;
  quote: string;
  author: string;
  role: string;
}

interface LegacyWallProps {
  data?: LegacyTribute[] | null;
}

const defaultMemories: LegacyTribute[] = [
  {
    quote:
      "D'Sean had this way of lighting up every room he walked into. His smile was contagious, his laugh was infectious, and his heart was bigger than anyone I've ever known.",
    author: "Teammate",
    role: "UVA Football",
  },
  {
    quote:
      "He wasn't just an athlete — he was an artist, a poet, a musician. He saw beauty in everything and created beauty wherever he went. The world lost a true Renaissance man.",
    author: "Professor",
    role: "UVA Studio Art",
  },
  {
    quote:
      "D'Sean taught us that you can be tough on the field and gentle in the studio. He broke every stereotype and showed that strength and creativity go hand in hand.",
    author: "Coach",
    role: "UVA Football",
  },
  {
    quote:
      "My son's legacy is not how he died — it's how he lived. He lived with purpose, with love, and with a fire to make everyone around him better.",
    author: "Family",
    role: "The Perry Family",
  },
  {
    quote:
      "He'd fill sketchbooks on road trips, play classical music in the locker room, and then go out and play like a warrior on the field. D'Sean was one of a kind.",
    author: "Teammate",
    role: "UVA Football",
  },
  {
    quote:
      "From Gulliver Prep to Charlottesville, D'Sean left a trail of people who loved him. He had this gift of making you feel like you were the most important person in the room.",
    author: "Friend",
    role: "Miami Community",
  },
];

export default function LegacyWall({ data }: LegacyWallProps) {
  const memoriesList = data && data.length > 0 ? data : defaultMemories;

  return (
    <section id="legacy" className="relative section-padding overflow-hidden bg-navy-900">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-uva-orange/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <span className="text-uva-orange/80 text-xs tracking-[0.3em] uppercase mb-4 block">
              Legacy Wall
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="headline-lg text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Memories That
              <span className="block text-uva-orange mt-1">Live Forever</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-white/50 text-lg">
              Words from those who knew and loved D&apos;Sean.
            </p>
          </ScrollReveal>
        </div>

        {/* Quotes Grid - Masonry-style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {memoriesList.map((memory, i) => (
            <ScrollReveal key={memory._id || i} delay={0.05 * i} direction="none">
              <div className="break-inside-avoid glass rounded-sm p-6 lg:p-8 hover:bg-white/[0.06] transition-all duration-500 group">
                {/* Quote mark */}
                <span className="font-serif text-5xl text-uva-orange/20 leading-none block mb-2">
                  &ldquo;
                </span>

                {/* Quote text */}
                <p className="font-serif text-white/80 text-base sm:text-lg leading-relaxed italic mb-6">
                  {memory.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-8 h-8 bg-uva-orange/10 rounded-full flex items-center justify-center">
                    <span className="text-uva-orange text-xs font-semibold">
                      {memory.author?.[0] ?? "P"}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm font-medium block">
                      {memory.author}
                    </span>
                    <span className="text-white/30 text-xs">
                      {memory.role}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
