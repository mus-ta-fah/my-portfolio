"use client";

import { projectsData, siteConfig } from "@/lib/data";
import { motion, Transition } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

const statusConfig = {
  live:  { label: "Live",  classes: "text-accent3 border-[rgba(100,232,160,0.25)] bg-[rgba(100,232,160,0.06)]" },
  demo:  { label: "Démo",  classes: "text-accent2 border-[rgba(91,156,246,0.25)]  bg-[rgba(91,156,246,0.06)]"  },
  wip:   { label: "En cours", classes: "text-[#f0a05a] border-[rgba(240,160,90,0.25)] bg-[rgba(240,160,90,0.06)]" },
} as const;

export default function Projects() {
  const [featured, ...rest] = projectsData.items;

  return (
    <section
      id="projects"
      data-num="04"
      className="section-num relative px-5 sm:px-10 md:px-16 lg:px-20 py-32 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <motion.div {...fadeUp(0)}>
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            <span className="w-7 h-px bg-accent" />
            {projectsData.eyebrow}
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-tight tracking-tight">
            {projectsData.title.line1}
            <br />
            {projectsData.title.line2}{" "}
            <em className="italic text-accent">{projectsData.title.line2Accent}</em>
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sm font-normal tracking-wide text-text2 no-underline group pb-0.5"
          >
            GitHub
            <span className="absolute bottom-0 left-0 w-0 h-px bg-text2 transition-all duration-300 group-hover:w-full" />
            {" →"}
          </Link>
        </motion.div>
      </div>

      {/* Projet featured — pleine largeur */}
      <motion.a
        href={featured.href}
        target="_blank"
        rel="noopener noreferrer"
        {...fadeUp(0.15)}
        className="relative flex flex-col md:flex-row gap-0 bg-surface rounded-xl border border-border overflow-hidden mb-4 group no-underline hover:border-border2 transition-colors duration-300"
      >
        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 gradient-top" />

        <div className="flex flex-col justify-between p-8 xl:p-10 flex-1">
          {/* Top row */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {featured.tags.map((t) => (
                <span
                  key={t.label}
                  className={`font-mono-jet text-[10px] px-2 py-1 rounded border ${
                    t.highlight
                      ? "border-[rgba(232,201,122,0.3)] text-accent bg-[rgba(232,201,122,0.05)]"
                      : "border-border2 text-text2"
                  }`}
                >
                  {t.label}
                </span>
              ))}
              {/* Status badge */}
              <span className={`font-mono-jet text-[10px] px-2 py-1 rounded border ${statusConfig[featured.status].classes}`}>
                {statusConfig[featured.status].label}
              </span>
            </div>

            <h3 className="font-display text-[clamp(24px,3vw,36px)] font-bold tracking-tight text-text mb-2 leading-tight">
              {featured.name}
            </h3>
            <div className="text-xs text-text2 mb-5">{featured.location}</div>
            <p className="text-sm font-light leading-relaxed text-text2 max-w-xl mb-6">
              {featured.desc}
            </p>
            <div className="font-mono-jet text-[11px] text-text2 leading-relaxed">
              {featured.stack}
            </div>
          </div>

          {/* CTA démo */}
          <div className="mt-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-bg bg-accent px-6 py-3 rounded no-underline transition-all duration-200 group-hover:bg-[#f0d98a] group-hover:-translate-y-0.5">
              {featured.linkLabel}
            </span>
          </div>
        </div>

        {/* Arrow décor */}
        <span className="absolute top-6 right-6 text-lg text-text2 transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </motion.a>

      {/* Grille 3 colonnes — autres projets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden mb-12">
        {rest.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            {...fadeUp(0.1 + i * 0.1)}
            className="relative flex flex-col bg-surface p-8 hover:bg-surface2 transition-colors duration-300 group no-underline"
          >
            {/* Arrow */}
            <span className="absolute top-5 right-5 text-lg text-text2 transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5 pr-6">
              {p.tags.map((t) => (
                <span
                  key={t.label}
                  className={`font-mono-jet text-[10px] px-2 py-1 rounded border ${
                    t.highlight
                      ? "border-[rgba(232,201,122,0.3)] text-accent bg-[rgba(232,201,122,0.05)]"
                      : "border-border2 text-text2"
                  }`}
                >
                  {t.label}
                </span>
              ))}
            </div>

            {/* Status badge */}
            <div className="mb-4">
              <span className={`font-mono-jet text-[10px] px-2 py-1 rounded border ${statusConfig[p.status].classes}`}>
                {statusConfig[p.status].label}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold tracking-tight text-text mb-1 leading-tight">
              {p.name}
            </h3>
            <div className="text-xs text-text2 mb-4">{p.location}</div>
            <p className="text-sm font-light leading-relaxed text-text2 mb-6 flex-1">
              {p.desc}
            </p>
            <div className="font-mono-jet text-[11px] text-text2 border-t border-border pt-4 leading-relaxed">
              {p.stack}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Note PME — centrée, italic */}
      <motion.p
        {...fadeUp(0.4)}
        className="text-sm italic font-light text-text2 text-center max-w-xl mx-auto"
      >
        {projectsData.pmeNote}
      </motion.p>
    </section>
  );
}
