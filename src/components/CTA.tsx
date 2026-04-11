"use client";

import { ctaData } from "@/lib/data";
import { motion, Transition } from "framer-motion";
import Link from "next/link";
import { useState, FormEvent } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut", delay } satisfies Transition,
});

type FormState = Record<string, string>;
type Status = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const initialForm: FormState = Object.fromEntries(
    ctaData.form.fields.map((f) => [f.name, ""])
  );

  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      data-num="06"
      className="section-num relative px-5 sm:px-10 md:px-16 lg:px-20 py-32 overflow-hidden"
    >
      {/* Orb glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[80px] bg-[radial-gradient(circle,rgba(232,201,122,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
        {/* Gauche */}
        <motion.div {...fadeUp(0)}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            <span className="w-7 h-px bg-accent" />
            {ctaData.eyebrow}
          </div>

          {/* Titre */}
          <h2 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold leading-tight tracking-tight mb-6">
            {ctaData.title.line1}
            <br />
            <em className="italic text-accent">{ctaData.title.line2Accent}</em>
          </h2>

          {/* Subtitle */}
          <p className="text-base font-light leading-[1.85] text-text2 mb-10 max-w-md">
            {ctaData.subtitle}
          </p>

          {/* Réassurance */}
          <ul className="space-y-3">
            {ctaData.reassurance.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-light text-text2">
                <span className="text-accent3 font-semibold shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Droite — Formulaire */}
        <motion.div {...fadeUp(0.15)}>
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[320px] gap-4 border border-[rgba(100,232,160,0.2)] bg-[rgba(100,232,160,0.04)] rounded-xl p-10">
              <div className="text-5xl">✓</div>
              <p className="font-display text-xl font-bold text-accent3">
                Message reçu !
              </p>
              <p className="text-sm font-light text-text2 leading-relaxed">
                Je reviens vers vous sous 24h avec une maquette personnalisée.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-border rounded-xl p-8 space-y-5"
            >
              {/* Gradient top bar */}
              <div className="relative -mx-8 -mt-8 mb-6 h-0.5 gradient-top rounded-t-xl" />

              {ctaData.form.fields.map((field) =>
                field.type === "textarea" ? (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label
                      htmlFor={field.name}
                      className="font-mono-jet text-[11px] font-medium tracking-widest uppercase text-text2"
                    >
                      {field.label}
                    </label>
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg2 border border-border rounded-lg px-4 py-3 text-sm font-light text-text placeholder:text-text2 resize-none outline-none transition-colors duration-200 focus:border-accent focus:bg-[rgba(232,201,122,0.03)]"
                    />
                  </div>
                ) : (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label
                      htmlFor={field.name}
                      className="font-mono-jet text-[11px] font-medium tracking-widest uppercase text-text2"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg2 border border-border rounded-lg px-4 py-3 text-sm font-light text-text placeholder:text-text2 outline-none transition-colors duration-200 focus:border-accent focus:bg-[rgba(232,201,122,0.03)]"
                    />
                  </div>
                )
              )}

              {/* Error */}
              {status === "error" && (
                <p className="text-xs text-[#f0a05a] font-light">
                  Une erreur est survenue. Réessayez ou écrivez directement à{" "}
                  <a
                    href={`mailto:${ctaData.email}`}
                    className="underline hover:text-accent transition-colors"
                  >
                    {ctaData.email}
                  </a>
                  .
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-bg bg-accent px-8 py-4 rounded transition-all duration-200 hover:bg-[#f0d98a] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-2"
              >
                {status === "loading" ? "Envoi…" : ctaData.form.submit}
              </button>

              {/* Note */}
              <p className="text-[11px] font-light text-text2 text-center leading-relaxed">
                {ctaData.form.note}
              </p>
            </form>
          )}
        </motion.div>
      </div>

      {/* Bloc PME — pleine largeur */}
      <motion.div
        {...fadeUp(0.3)}
        className="relative z-10 mt-20 pt-8 border-t border-border text-center"
      >
        <p className="text-sm font-light text-text2">
          {ctaData.pme.text}{" "}
          <Link
            href={ctaData.pme.href}
            className="text-text2 underline underline-offset-2 decoration-border2 hover:text-accent hover:decoration-accent transition-colors duration-200"
          >
            {ctaData.pme.cta}
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
