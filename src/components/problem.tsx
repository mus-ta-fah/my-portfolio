"use client";

import { problemData } from "@/lib/data";
import { motion, Transition } from "framer-motion";
import { TrendingDown, Unplug, MonitorX, Landmark } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

const { rooms, price, occupancy, commission, label } = problemData.calcul;
const montant = Math.round(rooms * price * 365 * occupancy * commission);
const montantEntier = Math.floor(montant).toLocaleString("fr-FR");

const douleursMeta = [
  { Icon: TrendingDown, color: "#f87171" },
  { Icon: Unplug,       color: "#60a5fa" },
  { Icon: MonitorX,     color: "#fbbf24" },
  { Icon: Landmark,     color: "#a78bfa" },
] as const;

export default function Problem() {
  return (
    <section
      id="problem"
      data-num="01"
      className="section-num relative bg-bg2 px-5 sm:px-10 md:px-16 lg:px-20 py-32 overflow-hidden"
    >
      {/* Header */}
      <motion.div {...fadeUp(0)} className="max-w-2xl mb-14">
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
          <span className="w-7 h-px bg-accent" />
          {problemData.eyebrow}
        </div>
        <h2 className="font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-tight tracking-tight">
          {problemData.title.line1}
          <br />
          <em className="italic text-accent">{problemData.title.line2Accent}</em>
        </h2>
      </motion.div>

      {/* Intro */}
      <motion.p
        {...fadeUp(0.05)}
        className="text-base font-light leading-[1.85] text-text2 max-w-2xl mb-16"
      >
        {problemData.intro}
      </motion.p>

      {/* Bloc calcul */}
      <motion.div {...fadeUp(0.1)} className="max-w-md mx-auto mb-20 text-center">
        <div className="relative bg-surface border border-border2 rounded-xl overflow-hidden p-10">
          {/* Gradient top bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 gradient-top" />

          {/* Label */}
          <p className="font-mono-jet text-xs font-medium tracking-widest uppercase text-text2 mb-4">
            Pour un hôtel de {rooms} chambres à {price}€/nuit
          </p>

          {/* Montant */}
          <div className="font-display font-black text-accent leading-none">
            <span className="text-[72px] tracking-tight">{montantEntier}</span>
            <sup className="text-3xl align-top mt-4 inline-block ml-1">€</sup>
          </div>

          {/* Label sous le montant */}
          <p className="text-sm font-light text-text2 mt-3">{label}</p>
        </div>
      </motion.div>

      {/* Grille 2×2 douleurs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden mb-20">
        {problemData.douleurs.map((d, i) => {
          const { Icon, color } = douleursMeta[i];
          return (
            <motion.div
              key={d.title}
              {...fadeUp(i * 0.1)}
              className="relative bg-surface p-10 hover:bg-surface2 transition-colors duration-300 group overflow-hidden flex gap-6"
            >
              {/* Barre verticale colorée à gauche */}
              <div
                className="shrink-0 w-[3px] rounded-full self-stretch"
                style={{ backgroundColor: color, opacity: 0.6 }}
              />

              <div className="flex-1">
                {/* Icône cercle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mt-1"
                  style={{ background: `${color}1a` }}
                >
                  <Icon size={20} color={color} strokeWidth={1.5} />
                </div>

                {/* Titre */}
                <h3 className="font-display text-xl font-bold text-text mt-5 mb-3 tracking-tight">
                  {d.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-light leading-relaxed text-text2">
                  {d.desc}
                </p>
              </div>

              {/* Numéro watermark */}
              <span
                className="absolute bottom-3 right-5 font-display text-7xl font-black pointer-events-none select-none leading-none"
                style={{ color: "rgba(255,255,255,0.03)" }}
              >
                {i + 1}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Phrase de transition */}
      <motion.div
        {...fadeUp(0.5)}
        className="flex items-center gap-4 justify-center"
      >
        <div className="w-16 h-px bg-accent/30" />
        <p className="font-display text-[clamp(18px,2.5vw,26px)] italic text-accent font-bold tracking-tight text-center">
          {problemData.transition}
        </p>
        <div className="w-16 h-px bg-accent/30" />
      </motion.div>
    </section>
  );
}
