"use client";

import { ctaData } from "@/lib/data";
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
          {ctaData.eyebrow}
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-display text-[clamp(40px,6vw,80px)] font-black leading-none tracking-tight max-w-2xl mx-auto mb-6"
        >
          {ctaData.title.line1}<br />
          {ctaData.title.line2} <em className="italic text-accent">{ctaData.title.line2Accent}</em>
        </motion.h2>

        <div className="grid md:grid-cols-2 text-left mt-12 ">

          {/* left */}

          <motion.div {...fadeUp(0.4)} className="flex flex-col h-full">
            <motion.p
              {...fadeUp(0.2)}
              className="text-lg font-light text-muted max-w-md mb-6 leading-relaxed"
            >
              {ctaData.subtitle.map((text, index) => (
                <div key={index}>{text}</div>
              ))}
            </motion.p>
            <div className="mt-12">
              <Link
                href={ctaData.cta.primary.href}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-black bg-accent px-8 py-4 rounded no-underline transition-all duration-200 hover:bg-[#f0d98a] hover:-translate-y-0.5"
              >
                {ctaData.cta.primary.label}
              </Link>
            </div>
          </motion.div>

          {/* right */}
          <div>
            <motion.div
              {...fadeUp(0.3)}
              className="text-lg font-light text-muted max-w-md mb-12 leading-relaxed"
            >
              <span>{ctaData.audit.text}</span>
              <div className="text-left mb-12">
                <p>{ctaData.audit.details.text}</p>
                <ul className="list-disc list-inside">
                  {ctaData.audit.details.list.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <Link
                href={ctaData.cta.secondary.href}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent border border-accent px-8 py-4 rounded no-underline transition-all duration-200 hover:bg-[#111] hover:-translate-y-0.5"
              >
                {ctaData.cta.secondary.label}
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.a
          {...fadeUp(0.5)}
          href="mailto:hello@mustafah.dev"
          className="inline-flex items-center gap-2 font-mono-custom text-sm text-muted mt-6 no-underline transition-colors hover:text-accent"
        >
          hello@mustafah.dev
        </motion.a>
      </div>
    </section>
  );
}