"use client";

import { motion, Transition } from "framer-motion";

const stack = [
  "Next.js 15", "TypeScript", "FastAPI", "React Native",
  "PostgreSQL", "Tailwind CSS", "Docker", "Vercel",
  "Prisma", "Redis", "Claude API", "ESP8266",
];

const metrics = [
  { num: "10j", label: "Délai moyen" },
  { num: "-40%", label: "vs agences FR" },
  { num: "M2", label: "Big Data" },
  { num: "5", label: "Projets livrés" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

export default function About() {
  return (
    <section id="about" className="relative px-12 md:px-20 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      {/* Section number */}
      <span className="absolute top-20 right-20 font-display text-[120px] font-black text-[rgba(255,255,255,0.02)] leading-none select-none pointer-events-none">
        01
      </span>

      {/* Left — text */}
      <motion.div {...fadeUp(0)}>
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
          <span className="w-7 h-px bg-accent" />
          À propos
        </div>

        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-tight tracking-tight mb-6">
          Dev fullstack.<br />
          Basé à <em className="italic text-accent">Dakar</em>.<br />
          Pour le monde.
        </h2>

        <div className="space-y-5 text-base font-light leading-[1.85] text-muted">
          <p>
            Je m&apos;appelle Moustapha Mbaye. Depuis Dakar, je construis des
            applications web, mobiles et IoT pour des clients en France et des
            projets qui répondent aux besoins réels de l&apos;Afrique de l&apos;Ouest.
          </p>
          <p>
            Mon Master 2 en Big Data à l&apos;Université de Bambey forge ma rigueur
            technique. Ma pratique quotidienne sur des projets réels forge mes
            compétences.
          </p>
          <p>
            <strong className="text-text font-medium">
              Mon offre principale pour la France :
            </strong>{" "}
            sites vitrines pour hôtels et PME, livrés en 10-15 jours à
            1 500-2 500€ — soit 40% moins cher qu&apos;une agence locale.
          </p>
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {stack.map((s) => (
            <span
              key={s}
              className="font-mono-custom text-[11px] font-medium px-3 py-1.5 rounded border border-border2 text-muted bg-surface transition-all duration-200 hover:border-accent hover:text-accent hover:bg-[rgba(232,201,122,0.05)] cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Right — card */}
      <motion.div {...fadeUp(0.2)}>
        <div className="relative bg-surface rounded-xl border border-border overflow-hidden p-8">
          {/* Top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-accent via-accent2 to-accent3" />

          {/* Dakar badge */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-sn bg-[rgba(0,176,79,0.1)] border border-[rgba(0,176,79,0.2)] px-3.5 py-1.5 rounded-full mb-5">
            🇸🇳 Dakar, Sénégal
          </div>

          <h3 className="font-display text-xl font-bold tracking-tight text-text mb-4">
            La meilleure tech n&apos;a pas de frontières.
          </h3>
          <p className="text-sm font-light leading-relaxed text-muted mb-6">
            Un hôtel à Lyon mérite le même niveau de soin qu&apos;une startup à
            Dakar. Je le prouve à chaque projet.
          </p>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
            {metrics.map((m) => (
              <div key={m.label} className="bg-surface2 p-5 text-center">
                <div className="font-display text-4xl font-black text-accent leading-none tracking-tight">
                  {m.num}
                </div>
                <div className="text-[11px] font-normal tracking-[0.08em] uppercase text-faint mt-1.5">
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