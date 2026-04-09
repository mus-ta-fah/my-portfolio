"use client";

import { servicesData } from "@/lib/data";
import { motion, Transition } from "framer-motion";


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

export default function Services() {
  return (
    <section id="services" className="relative bg-bg2 px-12 md:px-20 py-32">
      {/* Section number */}
      <span className="absolute top-20 right-20 font-display text-[120px] font-black text-[rgba(255,255,255,0.02)] leading-none select-none pointer-events-none">
        02
      </span>

      {/* Header */}
      <motion.div {...fadeUp(0)} className="max-w-xl mb-16">
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
          <span className="w-7 h-px bg-accent" />
          Services
        </div>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-tight tracking-tight">
          Ce que<br />je construis.
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
        {servicesData.items.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.num}
              {...fadeUp(i * 0.1)}
              className="bg-surface p-10 hover:bg-surface2 transition-colors duration-300 group"
            >
              <div className="font-mono-custom text-[11px] text-faint tracking-widest mb-6">
                {s.num}
              </div>
              <span className="text-3xl block mb-5">{ <Icon/>}</span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-text mb-3">
                {s.name}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted mb-6">
                {s.desc}
              </p>
              <div className="font-display text-3xl font-bold text-accent tracking-tight">
                {s.price}{" "}
                <span className="font-body text-sm font-normal text-faint">
                  {s.priceSuffix}
                </span>
              </div>
              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="text-accent text-xs shrink-0">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
}