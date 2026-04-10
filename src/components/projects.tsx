"use client";

import { projectsData } from "@/lib/data";
import { motion, Transition } from "framer-motion";
import Link from "next/link";

// const projects = [
//   {
//     tags: [{ label: "Business actuel", highlight: true }, { label: "Next.js" }, { label: "Framer" }, { label: "France" }],
//     name: "Sites Vitrines Hôtels",
//     location: "🇫🇷 Lyon, Bordeaux, France",
//     desc: "Prospection B2B + création de sites vitrines professionnels pour hôtels indépendants français. Réservation directe intégrée, SEO technique. 194 prospects identifiés, pipeline actif.",
//     stack: "Next.js · Tailwind CSS · Framer · Google Maps API · Anthropic API",
//     href: "https://hotel-kyriad.netlify.app",
//   },
//   {
//     tags: [{ label: "IoT · Govathon 2025", highlight: true }, { label: "ESP8266" }, { label: "Next.js" }],
//     name: "Kaaraange",
//     location: "🇸🇳 Dakar, Sénégal",
//     desc: "Poubelle biomédicale connectée pour améliorer la gestion des déchets hospitaliers. Capteurs IoT, dashboard temps réel, auth sécurisée. Présenté à Govathon 2025.",
//     stack: "ESP8266 · Next.js 15 · Prisma · Neon PostgreSQL · Better Auth · Vercel",
//     href: "https://kaaraange.vercel.app",
//   },
//   {
//     tags: [{ label: "SaaS · Freemium", highlight: true }, { label: "FastAPI" }, { label: "Next.js" }],
//     name: "Micro-Business Assistant",
//     location: "🌍 Afrique de l'Ouest",
//     desc: "SaaS de gestion pour micro-entrepreneurs africains. 39 endpoints, génération PDF, résumés IA GPT-4, Mobile Money, WhatsApp Business. Freemium en FCFA.",
//     stack: "FastAPI · PostgreSQL · SQLAlchemy · Next.js 15 · shadcn/ui · Celery · Redis",
//     href: "#",
//   },
//   {
//     tags: [{ label: "Marketplace B2B", highlight: true }, { label: "FastAPI" }, { label: "Multi-tenant" }],
//     name: "SenMarché",
//     location: "🌍 Afrique de l'Ouest",
//     desc: "Marketplace B2B wholesale multi-tenant pour le commerce ouest-africain. RLS PostgreSQL, JWT rotation, WebSocket, CI/CD GitHub Actions.",
//     stack: "FastAPI · PostgreSQL RLS · Redis · Docker · GitHub Actions · WebSocket",
//     href: "#",
//   },
// ];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

export default function Projects() {
  return (
    <section id="projects" className="relative px-12 md:px-20 py-32">
      {/* Section number */}
      <span className="absolute top-20 right-20 font-display text-[120px] font-black text-[rgba(255,255,255,0.02)] leading-none select-none pointer-events-none">
        03
      </span>

      {/* Header */}
      <div className="flex items-end justify-between mb-16">
        <motion.div {...fadeUp(0)}>
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            <span className="w-7 h-px bg-accent" />
            Projets
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-tight tracking-tight">
            Ce que<br />j&apos;ai <em className="italic text-accent">construit</em>.
          </h2>
        </motion.div>
        <motion.div {...fadeUp(0.1)}>
          <Link
            href="https://github.com/mus-ta-fah"
            target="_blank"
            className="text-sm font-normal tracking-wide text-muted border-b border-border2 pb-0.5 no-underline transition-all duration-200 hover:text-text hover:border-text2"
          >
            GitHub →
          </Link>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
        {projectsData.items.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            {...fadeUp(i * 0.1)}
            className="relative bg-surface p-10 hover:bg-surface2 transition-colors duration-300 cursor-pointer group no-underline block"
          >
            {/* Arrow */}
            <span className="absolute top-6 right-6 text-xl text-faint transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tags.map((t) => (
                <span
                  key={t.label}
                  className={`font-mono-custom text-[10px] px-2 py-1 rounded border ${
                    t.highlight
                      ? "border-[rgba(232,201,122,0.3)] text-accent bg-[rgba(232,201,122,0.05)]"
                      : "border-border2 text-faint"
                  }`}
                >
                  {t.label}
                </span>
              ))}
            </div>

            <h3 className="font-display text-2xl font-bold tracking-tight text-text mb-2 leading-tight">
              {p.name}
            </h3>
            <div className="text-xs text-faint mb-4 flex items-center gap-1.5">
              {p.location}
            </div>
            <p className="text-sm font-light leading-relaxed text-muted mb-6">
              {p.desc}
            </p>
            <div className="font-mono-custom text-[11px] text-faint border-t border-border pt-4 leading-relaxed">
              {p.stack}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}