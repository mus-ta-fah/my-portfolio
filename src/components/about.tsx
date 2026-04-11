"use client";

import { aboutData } from "@/lib/data";
import { motion, Transition } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

export default function About() {
  return (
    <section
      id="about"
      data-num="02"
      className="section-num relative px-5 sm:px-10 md:px-16 lg:px-20 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center overflow-hidden"
    >
      {/* Gauche */}
      <motion.div {...fadeUp(0)}>
        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
          <span className="w-7 h-px bg-accent" />
          {aboutData.eyebrow}
        </div>

        {/* Titre */}
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-tight tracking-tight mb-8">
          {aboutData.title.line1}
          <br />
          <em className="italic text-accent">{aboutData.title.line2Accent}</em>
        </h2>

        {/* Paragraphes */}
        <div className="space-y-4 text-base font-light leading-[1.85] text-text2 mb-6">
          {aboutData.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Bloc offre */}
        <p className="text-base font-light leading-[1.85] text-text2 mb-8">
          <strong className="text-text font-medium">{aboutData.offrefr.text}</strong>{" "}
          {aboutData.offrefr.description}
        </p>

        {/* Bloc argument */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-text mb-3">{aboutData.argument.text}</p>
          <ul className="space-y-2">
            {aboutData.argument.list.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-light text-text2">
                <span className="text-accent shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2">
          {aboutData.stack.map((s) => (
            <span
              key={s}
              className="font-mono-jet text-[11px] font-medium px-3 py-1.5 rounded border border-border2 text-text2 bg-surface transition-all duration-200 hover:border-accent hover:text-accent hover:bg-[rgba(232,201,122,0.05)] cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Droite — Card */}
      <motion.div {...fadeUp(0.2)}>
        <div className="relative bg-surface rounded-xl border border-border overflow-hidden p-8">
          {/* Gradient top bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 gradient-top" />

          {/* Badge Dakar */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-sn bg-[rgba(0,176,79,0.1)] border border-[rgba(0,176,79,0.2)] px-3.5 py-1.5 rounded-full mb-5">
            {aboutData.card.badge}
          </div>

          {/* Titre + sous-titre */}
          <h3 className="font-display text-xl font-bold tracking-tight text-text mb-3">
            {aboutData.card.title}
          </h3>
          <p className="text-sm font-light leading-relaxed text-text2 mb-8">
            {aboutData.card.subtitle}
          </p>

          {/* Grille 2×2 métriques */}
          <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
            {aboutData.card.metrics.map((m) => (
              <div key={m.label} className="bg-surface2 p-5 text-center">
                <div className="font-display text-4xl font-black text-accent leading-none tracking-tight">
                  {m.num}
                </div>
                <div className="font-mono-jet text-[11px] font-normal tracking-[0.08em] uppercase text-text2 mt-1.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
