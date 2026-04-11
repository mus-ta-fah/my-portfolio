"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import Link from "next/link";
import { navData } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêche le scroll du body quand le drawer est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  const navTransition: Transition = { duration: 0.6, ease: "easeOut" };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={navTransition}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-10 md:px-16 lg:px-20 transition-all duration-500 ${
          scrolled
            ? "py-3.5 bg-[rgba(7,8,9,0.9)] backdrop-blur-xl border-b border-border"
            : "py-5"
        }`}
      >
        {/* Logo */}
        <Link
          href="#"
          className="font-display text-xl font-bold tracking-tight text-text no-underline"
        >
          {navData.logo.text}
          <span className="text-accent">{navData.logo.accent}{navData.logo.tld}</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navData.links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-sm font-normal tracking-wide text-text2 hover:text-text transition-colors duration-200 no-underline group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href={navData.cta.href}
          className="hidden md:inline-flex text-xs font-semibold tracking-wide text-bg bg-accent px-5 py-2.5 rounded no-underline transition-all duration-200 hover:bg-[#f0d98a] hover:-translate-y-0.5"
        >
          {navData.cta.label}
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer"
        >
          <span
            className={`block w-6 h-px bg-text transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-text transition-all duration-300 ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-text transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-bg md:hidden"
            style={{ paddingTop: "72px" }}
          >
            {/* Noise overlay (hérite du body::before mais le drawer est au-dessus) */}
            <div className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
              }}
            />

            <nav className="relative z-10 flex flex-col px-5 sm:px-10 pt-10 pb-12 gap-2 flex-1">
              {navData.links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    onClick={close}
                    className="block font-display text-[clamp(28px,8vw,48px)] font-bold tracking-tight text-text no-underline py-3 border-b border-border hover:text-accent transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 + navData.links.length * 0.06 }}
                className="mt-8"
              >
                <Link
                  href={navData.cta.href}
                  onClick={close}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-bg bg-accent px-8 py-4 rounded no-underline transition-all duration-200 hover:bg-[#f0d98a]"
                >
                  {navData.cta.label}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
