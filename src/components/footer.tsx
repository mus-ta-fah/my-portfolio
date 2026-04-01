import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/mus-ta-fah" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mustafah-mbaye" },
  { label: "Email", href: "mailto:hello@mustafah.dev" },
];

export default function Footer() {
  return (
    <footer className="px-12 md:px-20 py-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
      <Link
        href="#"
        className="font-display text-lg font-bold tracking-tight text-muted no-underline"
      >
        mustafah<span className="text-accent">.</span>dev
      </Link>

      <ul className="flex items-center gap-6 list-none">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              className="text-xs text-faint no-underline transition-colors hover:text-muted"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="text-xs text-faint">
        © 2026 Moustapha Mbaye · Dakar 🇸🇳
      </div>
    </footer>
  );
}