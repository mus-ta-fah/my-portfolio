"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 transition-all duration-500 ${
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
        mustafah<span className="text-accent">.dev</span>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="relative text-sm font-normal tracking-wide text-muted hover:text-text transition-colors duration-200 no-underline group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="#contact"
        className="text-xs font-semibold tracking-wide text-bg bg-accent px-5 py-2.5 rounded no-underline transition-all duration-200 hover:bg-[#f0d98a] hover:-translate-y-0.5"
      >
        Me contacter
      </Link>
    </motion.nav>
  );
}