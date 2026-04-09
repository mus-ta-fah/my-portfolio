"use client";

import { heroData } from "@/lib/data";
import { motion, Transition } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

const stats = [
  { num: "4+", label: "Ans d'expérience" },
  { num: "5+", label: "Produits construits" },
  { num: "Full-stack", label: "Web · Mobile · IoT" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-12 md:px-20 overflow-hidden">
      {/* Grid BG */}
      <div className="absolute inset-0 grid-bg" />

      {/* Orbs */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(232,201,122,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-12 left-24 w-[400px] h-[400px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(91,156,246,0.06),transparent_70%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Tag */}
        <motion.div
          {...fadeUp(0.2)}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {heroData.tag}
        </motion.div>

        {/* Title */}
        <motion.h1
          {...fadeUp(0.4)}
          className="font-display text-[clamp(52px,7vw,96px)] font-black leading-none tracking-[-0.03em] mb-7"
        >
          <span className="block text-text">Moustapha</span>
          <span className="block italic text-accent">Mbaye.</span>
          <span
            className="block"
            style={{
              WebkitTextStroke: "1px rgba(232,201,122,0.3)",
              color: "transparent",
            }}
          >
            Développeur.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.6)}
          className="text-lg font-light leading-relaxed text-muted max-w-xl mb-11"
        >
          {heroData.subtitle.text}
          <br />
          <strong className="text-text font-medium">
            {heroData.subtitle.span}
          </strong>
        </motion.p>

        {/* Actions */}
        <motion.div {...fadeUp(0.8)} className="flex items-center gap-4">
          <Link
            href={heroData.cta.primary.href}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-bg bg-accent px-8 py-3.5 rounded no-underline transition-all duration-200 hover:bg-[#f0d98a] hover:-translate-y-0.5"
          >
            {heroData.cta.primary.label}
          </Link>
          <Link
            href={heroData.cta.secondary.href}
            className="text-sm font-normal tracking-wide text-muted border-b border-border-2 pb-0.5 no-underline transition-all duration-200 hover:text-text hover:border-text2"
          >
            {heroData.cta.secondary.label}
          </Link>
        </motion.div>
      </div>

      {/* Stats - right side */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-right">
            <div className="font-display text-5xl font-black text-accent leading-none tracking-tight">
              {s.num}
            </div>
            <div className="text-[11px] font-normal tracking-widest uppercase text-faint mt-1.5">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-px h-16 bg-linear-to-b from-transparent via-accent to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}