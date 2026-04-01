"use client";

import { motion, Transition } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative px-12 md:px-20 py-32 text-center overflow-hidden"
    >
      {/* Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(232,201,122,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          {...fadeUp(0)}
          className="flex items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-6"
        >
          Parlons-en
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-display text-[clamp(40px,6vw,80px)] font-black leading-none tracking-tight max-w-2xl mx-auto mb-6"
        >
          Prêt à lancer<br />
          votre <em className="italic text-accent">vitrine</em> ?
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg font-light text-muted max-w-md mx-auto mb-12 leading-relaxed"
        >
          Hôtel sans site, site obsolète ou projet plus ambitieux — décrivez-moi
          votre besoin en 2 lignes.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="mailto:hello@mustafah.dev"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-bg bg-accent px-8 py-4 rounded no-underline transition-all duration-200 hover:bg-[#f0d98a] hover:-translate-y-0.5"
          >
            Envoyer un email →
          </Link>
          <Link
            href="https://linkedin.com/in/mustafah-mbaye"
            target="_blank"
            className="text-sm font-normal tracking-wide text-muted border-b border-border2 pb-0.5 no-underline transition-all hover:text-text hover:border-text2"
          >
            LinkedIn
          </Link>
        </motion.div>

        <motion.a
          {...fadeUp(0.4)}
          href="mailto:hello@mustafah.dev"
          className="inline-flex items-center gap-2 font-mono-custom text-sm text-muted mt-6 no-underline transition-colors hover:text-accent"
        >
          hello@mustafah.dev
        </motion.a>
      </div>
    </section>
  );
}