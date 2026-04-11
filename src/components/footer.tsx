import { footerData } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 sm:px-10 md:px-16 lg:px-20 py-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo */}
      <Link
        href="#"
        className="font-display text-lg font-bold tracking-tight text-text2 no-underline hover:text-text transition-colors duration-200"
      >
        {footerData.logo.text}
        <span className="text-accent">{footerData.logo.accent}</span>
        {footerData.logo.tld}
      </Link>

      {/* Links */}
      <ul className="flex items-center gap-6 list-none m-0 p-0">
        {footerData.links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-xs text-text2 no-underline transition-colors duration-200 hover:text-text"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <div className="text-xs text-text2">
        {footerData.copy}
      </div>
    </footer>
  );
}
