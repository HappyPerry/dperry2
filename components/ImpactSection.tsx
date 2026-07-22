"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.span
      ref={ref}
      className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-uva-orange leading-none block"
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
}

interface MetricData {
  _id: string;
  label: string;
  value: number;
  suffix?: string;
  description?: string;
}

interface ImpactSectionProps {
  data?: MetricData[] | null;
}

const fallbackMetrics: MetricData[] = [
  { _id: "1", value: 500, suffix: "+", label: "Youth Impacted", description: "Through camps, programs, and community events" },
  { _id: "2", value: 15, suffix: "", label: "Scholarships Awarded", description: "Supporting student-athletes and creatives" },
  { _id: "3", value: 200, suffix: "+", label: "Bikes Donated", description: "Holiday bike drives in Miami communities" },
  { _id: "4", value: 10, suffix: "+", label: "Community Events", description: "Annual camps, drives, and memorial gatherings" },
];

export default function ImpactSection({ data }: ImpactSectionProps) {
  const metrics = data && data.length > 0 ? data : fallbackMetrics;

  return (
    <section id="impact" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-800" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <span className="text-uva-orange/80 text-xs tracking-[0.3em] uppercase mb-4 block">
              Our Impact
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="headline-lg text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Making a
              <span className="text-uva-orange ml-3">Difference</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Every number represents a life touched by D&apos;Sean&apos;s legacy.
            </p>
          </ScrollReveal>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric._id} delay={0.1 + i * 0.1}>
              <div className="text-center group p-6 rounded-sm glass hover:bg-white/[0.06] transition-all duration-500">
                <AnimatedCounter
                  target={metric.value}
                  suffix={metric.suffix || ""}
                />
                <h3 className="text-white font-semibold text-sm tracking-wider uppercase mt-4 mb-2">
                  {metric.label}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
