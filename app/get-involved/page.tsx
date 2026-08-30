import type { Metadata } from "next";
import Link from "next/link";
import GetInvolvedForm from "@/components/GetInvolvedForm";

export const metadata: Metadata = {
  title: "Get Involved | The D'Sean Perry Foundation",
  description: "Volunteer, partner, mentor, or support community programs with The D'Sean Perry Foundation.",
};

const opportunities = [
  {
    number: "01",
    title: "Volunteer",
    description: "Help with youth camps, community drives, event setup, outreach, and day-of support.",
  },
  {
    number: "02",
    title: "Mentor",
    description: "Share your experience with young athletes, students, and emerging creatives in our programs.",
  },
  {
    number: "03",
    title: "Partner",
    description: "Bring your school, nonprofit, team, or company alongside the foundation for meaningful programs.",
  },
  {
    number: "04",
    title: "Sponsor",
    description: "Support scholarships, camps, equipment, community events, and long-term youth opportunities.",
  },
];

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-navy-900 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="D'Sean Perry Foundation home">
            <span className="flex h-10 w-10 items-center justify-center border border-uva-orange/60 font-serif text-sm font-bold text-uva-orange">41</span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-wider">D&apos;Sean Perry</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-uva-orange/70">Foundation</span>
            </span>
          </Link>
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-uva-orange">
            ← Back Home
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,114,0,0.12),transparent_38%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.3em] text-uva-orange">Carry the legacy forward</span>
          <h1 className="font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">
            Your time can make a
            <span className="block text-uva-orange">lasting difference.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            Whether you give a few hours, share your expertise, or build a long-term partnership, there is a place for you in D&apos;Sean&apos;s continuing legacy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block text-xs uppercase tracking-[0.25em] text-uva-orange">Ways to participate</span>
          <h2 className="font-serif text-4xl sm:text-5xl">Choose how you want to contribute</h2>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {opportunities.map((opportunity) => (
            <article key={opportunity.title} className="bg-navy-900 p-7 lg:min-h-72 lg:p-8">
              <span className="font-serif text-4xl text-uva-orange/35">{opportunity.number}</span>
              <h3 className="mt-10 font-serif text-2xl text-white">{opportunity.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/50">{opportunity.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-navy-950 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <GetInvolvedForm />
        </div>
      </section>
    </main>
  );
}
