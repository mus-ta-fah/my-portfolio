"use client";

import { servicesData } from "@/lib/data";
import { motion, Transition } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

export default function Services() {
  return (
    <section
      id="services"
      data-num="03"
      className="section-num relative bg-bg2 px-5 sm:px-10 md:px-16 lg:px-20 py-32 overflow-hidden"
    >
      {/* Header */}
      <motion.div {...fadeUp(0)} className="max-w-xl mb-16">
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
          <span className="w-7 h-px bg-accent" />
          {servicesData.eyebrow}
        </div>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-tight tracking-tight mb-3">
          {servicesData.title.line1}
          <br />
          {servicesData.title.line2}
        </h2>
        <p className="text-sm italic font-light text-text2">{servicesData.note}</p>
      </motion.div>

      {/* Cards — flex colonne sur mobile, flex-row aligné en bas sur md+ */}
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        {servicesData.items.map((s, i) => {
          const Icon = s.icon;

          if (s.highlight) {
            return (
              <motion.div
                key={s.num}
                {...fadeUp(i * 0.1)}
                className="order-first md:order-0 relative flex flex-col flex-1 bg-surface border border-accent/30 rounded-xl p-10 z-10 scale-[1.03]"
                style={{ boxShadow: "0 0 60px rgba(232,201,122,0.08)" }}
              >
                {/* Gradient top bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 gradient-top rounded-t-xl" />

                {/* Badge "Offre phare" */}
                <div className="absolute top-5 right-5 font-mono-jet text-[10px] font-bold tracking-[0.12em] uppercase text-bg bg-accent px-3 py-1 rounded-full">
                  Offre phare
                </div>

                {/* Numéro */}
                <div className="font-mono-jet text-[11px] text-text2 tracking-widest mb-6">
                  {s.num}
                </div>

                {/* Icône */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(232,201,122,0.12)] border border-[rgba(232,201,122,0.2)] text-accent mb-5">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                {/* Tagline badge */}
                <div className="inline-flex self-start items-center font-mono-jet text-[10px] font-medium tracking-wide text-accent border border-[rgba(232,201,122,0.2)] bg-[rgba(232,201,122,0.06)] px-2.5 py-1 rounded mb-4">
                  {s.tagline}
                </div>

                {/* Nom */}
                <h3 className="font-display text-2xl font-bold tracking-tight text-text mb-3">
                  {s.name}
                </h3>

                {/* Desc */}
                <p className="text-sm font-light leading-relaxed text-text2 mb-6 flex-1">
                  {s.desc}
                </p>

                {/* Prix */}
                <div className="font-display text-5xl font-bold text-accent tracking-tight mb-1">
                  {s.price}
                  {s.priceSuffix && (
                    <span className="font-sans text-sm font-normal text-text2 ml-2">
                      {s.priceSuffix}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="mt-5 space-y-2 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm font-light text-text2">
                      <span className="text-accent shrink-0 mt-0.5 text-xs">→</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA plein */}
                <Link
                  href="#contact"
                  className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-bg bg-accent px-5 py-3 rounded no-underline transition-all duration-200 hover:bg-[#f0d98a] hover:-translate-y-0.5"
                >
                  {s.cta}
                </Link>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={s.num}
              {...fadeUp(i * 0.1)}
              className="relative flex flex-col flex-1 bg-surface border border-border rounded-xl p-8 opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
              {/* Numéro */}
              <div className="font-mono-jet text-[11px] text-text2 tracking-widest mb-6">
                {s.num}
              </div>

              {/* Icône */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(232,201,122,0.08)] border border-[rgba(232,201,122,0.12)] text-accent mb-5 transition-all duration-300 group-hover:bg-[rgba(232,201,122,0.14)]">
                <Icon size={24} strokeWidth={1.5} />
              </div>

              {/* Tagline badge */}
              <div className="inline-flex self-start items-center font-mono-jet text-[10px] font-medium tracking-wide text-accent border border-[rgba(232,201,122,0.2)] bg-[rgba(232,201,122,0.06)] px-2.5 py-1 rounded mb-4">
                {s.tagline}
              </div>

              {/* Nom */}
              <h3 className="font-display text-2xl font-bold tracking-tight text-text mb-3">
                {s.name}
              </h3>

              {/* Desc */}
              <p className="text-sm font-light leading-relaxed text-text2 mb-6 flex-1">
                {s.desc}
              </p>

              {/* Prix */}
              <div className="font-display text-3xl font-bold text-accent tracking-tight mb-1">
                {s.price}
                {s.priceSuffix && (
                  <span className="font-sans text-sm font-normal text-text2 ml-2">
                    {s.priceSuffix}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="mt-5 space-y-2 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-light text-text2">
                    <span className="text-accent shrink-0 mt-0.5 text-xs">→</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA outline */}
              <Link
                href="#contact"
                className="mt-auto inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-accent border border-[rgba(232,201,122,0.3)] px-5 py-2.5 rounded no-underline transition-all duration-200 hover:bg-[rgba(232,201,122,0.08)] hover:border-accent hover:-translate-y-0.5"
              >
                {s.cta}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
