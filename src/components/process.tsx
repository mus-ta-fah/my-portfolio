"use client";

import { motion, Transition } from "framer-motion";

const steps = [
  { num: "01", title: "Découverte", desc: "Call 20 min pour comprendre vos besoins, vos clients, votre positionnement.", days: "Jour 1" },
  { num: "02", title: "Maquette", desc: "Une maquette complète soumise sous 48h. On valide ensemble avant de coder.", days: "Jour 2-3" },
  { num: "03", title: "Développement", desc: "Développement rapide sur base validée. Vous suivez l'avancement en temps réel.", days: "Jour 4-12" },
  { num: "04", title: "Livraison", desc: "Mise en ligne, formation 20 min, et c'est parti. Maintenance mensuelle si besoin.", days: "Jour 13-15" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

export default function Process() {
  return (
    <section id="process" className="relative bg-bg2 px-12 md:px-20 py-32">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-16">
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
          <span className="w-7 h-px bg-accent" />
          Process
        </div>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-tight tracking-tight">
          De zéro à<br />
          en ligne <em className="italic text-accent">en 15 jours</em>.
        </h2>
      </motion.div>

      {/* Steps */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Connector line — visible uniquement sur lg */}
        <div className="absolute top-7 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-border2 to-transparent hidden lg:block" />

        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            {...fadeUp(i * 0.15)}
            className="text-center group"
          >
            {/* Number circle */}
            <div className="w-14 h-14 rounded-full bg-surface border border-border2 flex items-center justify-center font-mono-custom text-sm text-accent mx-auto mb-6 relative z-10 transition-all duration-200 group-hover:bg-accent group-hover:text-bg group-hover:border-accent">
              {s.num}
            </div>
            <h3 className="font-display text-lg font-bold text-text mb-2.5">
              {s.title}
            </h3>
            <p className="text-sm font-light leading-relaxed text-faint mb-3">
              {s.desc}
            </p>
            <div className="font-mono-custom text-[11px] text-accent">
              {s.days}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}