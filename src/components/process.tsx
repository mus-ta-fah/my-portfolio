"use client";

import { processData } from "@/lib/data";
import { motion, Transition } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

export default function Process() {
  return (
    <section
      id="process"
      data-num="05"
      className="section-num relative bg-bg2 px-5 sm:px-10 md:px-16 lg:px-20 py-32 overflow-hidden"
    >
      {/* Header */}
      <motion.div {...fadeUp(0)} className="max-w-xl mb-20">
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
          <span className="w-7 h-px bg-accent" />
          {processData.eyebrow}
        </div>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-tight tracking-tight">
          {processData.title.line1}
          <br />
          {processData.title.line2}{" "}
          <em className="italic text-accent">{processData.title.line2Accent}</em>
        </h2>
      </motion.div>

      {/* Steps */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {/* Ligne de connexion — lg uniquement */}
        <div className="absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-linear-to-r from-transparent via-border2 to-transparent hidden lg:block pointer-events-none" />

        {processData.steps.map((s, i) => (
          <motion.div
            key={s.num}
            {...fadeUp(i * 0.15)}
            className="flex flex-col items-center text-center group"
          >
            {/* Cercle numéro */}
            <div className="w-14 h-14 rounded-full bg-surface border border-border2 flex items-center justify-center font-mono-jet text-sm font-semibold text-accent mb-6 relative z-10 transition-all duration-300 group-hover:bg-accent group-hover:text-bg group-hover:border-accent group-hover:scale-110">
              {s.num}
            </div>

            {/* Badge jour */}
            <div className="font-mono-jet text-[11px] text-accent tracking-widest uppercase mb-3">
              {s.days}
            </div>

            {/* Titre */}
            <h3 className="font-display text-lg font-bold text-text mb-2.5 tracking-tight">
              {s.title}
            </h3>

            {/* Desc */}
            <p className="text-sm font-light leading-relaxed text-text2">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Note de réassurance */}
      <motion.div
        {...fadeUp(processData.steps.length * 0.15)}
        className="max-w-xl mx-auto text-center border border-[rgba(232,201,122,0.2)] bg-[rgba(232,201,122,0.03)] rounded-xl px-8 py-6"
      >
        <p className="text-sm font-light leading-relaxed text-text2 italic">
          <span className="text-accent font-medium not-italic">✓</span>{" "}
          {processData.note}
        </p>
      </motion.div>
    </section>
  );
}
