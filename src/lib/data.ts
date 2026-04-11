import type { LucideIcon } from 'lucide-react';
import { AppWindow, Hotel, Smartphone } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Moustapha Mbaye",
  role: "Développeur Web — Spécialiste Site Vitrine - Réservation Directe",
  email: "hello@mustafah.dev",
  domain: "mustafah.dev",
  location: "Dakar, Sénégal",
  flag: "🇸🇳",
  github: "https://github.com/mus-ta-fah",
  linkedin: "https://linkedin.com/in/mustafah-mbaye",
  status: "Disponible · Répond sous 24h",
} as const;

// ─────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────

export const navData = {
  logo: { text: "mustafah", accent: ".", tld: "dev" },
  links: [
    { label: "Le problème", href: "#problem" },
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#projects" },
    { label: "Process", href: "#process" },
  ],
  cta: { label: "Maquette gratuite →", href: "#contact" },
} as const;

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────

export const heroData = {
  tag: "Dakar 🇸🇳 · Disponible pour missions France · Répond sous 24h",
  title: {
    line1: "Votre site envoie",
    line2: "vos clients",
    line3: "sur Booking.",
  },
  subtitle: {
    text: "Un site de réservation directe, livré en 15 jours, à une fraction du tarif d'une agence parisienne.",
    span: "Arrêtez de payer 15% de commission sur chaque réservation.",
  },
  cta: {
    primary: { label: "Recevoir une maquette gratuite →", href: "#contact" },
    secondary: { label: "Voir les réalisations", href: "#projects" },
  },
  stats: [
    { num: "15%", label: "Commission Booking évitée" },
    { num: "15j", label: "Délai de livraison" },
    { num: "-60%", label: "vs agence parisienne" },
  ],
} as const;

// ─────────────────────────────────────────────────────────────
// PROBLEM  (nouvelle section)
// ─────────────────────────────────────────────────────────────

export const problemData = {
  eyebrow: "Le problème",
  title: {
    line1: "Booking travaille",
    line2Accent: "contre vous.",
  },
  intro: "Chaque réservation via Booking ou Expedia vous coûte entre 15% et 25% de commission. Sur une année, pour un hôtel de 20 chambres à 70€ la nuit, ça représente :",
  calcul: {
    rooms: 20,
    price: 70,
    occupancy: 0.6,
    commission: 0.18,
    label: "en commissions perdues par an",
  },
  douleurs: [
    {
      icon: "💸",
      title: "Vous financez votre concurrent",
      desc: "Booking garde vos données client. Vous payez pour acquérir des clients que vous ne pouvez pas fidéliser.",
    },
    {
      icon: "📵",
      title: "Vous n'existez pas sans eux",
      desc: "Si votre site est lent, pas mobile, ou inexistant — Booking est votre seul canal. Vous dépendez de leur algorithme.",
    },
    {
      icon: "🏚️",
      title: "Votre site fait fuir",
      desc: "Un site daté en 2026, c'est un client qui repart sur Booking par défaut, convaincu que vous n'êtes pas sérieux.",
    },
    {
      icon: "💰",
      title: "Les agences locales coûtent trop cher",
      desc: "8 000€ et 3 mois d'attente pour un site vitrine. La majorité des hôtels indépendants ne peuvent pas se le permettre.",
    },
  ],
  transition: "Il y a une autre façon de faire.",
} as const;

// ─────────────────────────────────────────────────────────────
// ABOUT  (la réponse au problème)
// ─────────────────────────────────────────────────────────────

export const aboutData = {
  eyebrow: "La solution",
  title: {
    line1: "La qualité parisienne.",
    line2Accent: "Le prix de Dakar.",
  },
  paragraphs: [
    "Je suis Moustapha Mbaye, développeur fullstack basé à Dakar. J'ai passé 4 ans à construire des produits numériques sérieux — SaaS, applications IoT, marketplaces — avec les mêmes standards qu'une équipe parisienne.",
    "J'ai décidé de mettre cette expertise au service des hôtels et PME françaises qui méritent un site de qualité sans payer le prix d'une agence locale.",
  ],
  offrefr: {
    text: "Mon offre concrète :",
    description: "un site de réservation directe ou une vitrine professionnelle, livré en 15 jours, pour 1 500 à 2 500€ — soit 3 à 5 fois moins qu'une agence parisienne pour un résultat équivalent.",
  },
  argument: {
    text: "La distance n'est pas un problème.",
    list: [
      "Vous suivez l'avancement en temps réel via un lien de preview",
      "On échange par appel vidéo, WhatsApp, email — à votre convenance",
      "Livraison sur votre domaine, formation incluse, accès remis",
    ],
  },
  card: {
    badge: "🇸🇳 Dakar, Sénégal",
    title: "La meilleure tech n'a pas de frontières.",
    subtitle:
      "Un hôtel à Lyon mérite le même niveau de soin qu'une startup à Dakar. Je le prouve à chaque projet.",
    metrics: [
      { num: "15j", label: "Délai moyen" },
      { num: "-60%", label: "vs agences FR" },
      { num: "4+", label: "Ans de pratique" },
      { num: "5+", label: "Produits livrés" },
    ],
  },
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "FastAPI",
    "PostgreSQL",
    "Vercel",
    "SEO technique",
    "Performance web",
  ],
} as const;

// ─────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────

export type Service = {
  num: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  desc: string;
  price: string;
  priceSuffix: string;
  features: string[];
  highlight: boolean;
  cta: string;
};

export const servicesData: {
  eyebrow: string;
  title: { line1: string; line2: string };
  note: string;
  items: Service[];
} = {
  eyebrow: "Services",
  title: {
    line1: "Ce que",
    line2: "je construis.",
  },
  note: "Vous n'avez pas encore de site ? L'offre Vitrine de départ est faite pour vous.",
  items: [
    {
      num: "01",
      icon: AppWindow,
      name: "Vitrine Professionnelle",
      tagline: "Existez enfin en ligne.",
      desc: "Vous n'avez pas encore de site ou votre présence en ligne est inexistante. Un site vitrine propre, rapide et crédible qui présente votre établissement sous son meilleur jour et capte les clients locaux sur Google.",
      price: "1 500€",
      priceSuffix: "– 2 000€",
      highlight: false,
      cta: "Recevoir une maquette →",
      features: [
        "Design premium adapté à votre secteur",
        "SEO technique inclus",
        "Formulaire de contact + appel direct",
        "Connexion Google My Business",
        "Rapide à charger partout en France",
      ],
    },
    {
      num: "02",
      icon: Hotel,
      name: "Réservation Directe",
      tagline: "Arrêtez de payer Booking.",
      desc: "Un site conçu pour convertir vos visiteurs en réservations directes. Moteur de réservation intégré, SEO local pour apparaître sur Google, mobile-first. Vos clients réservent chez vous, pas via un intermédiaire.",
      price: "2 000€",
      priceSuffix: "– 2 500€",
      highlight: true,
      cta: "Calculer mes économies →",
      features: [
        "Maquette gratuite avant engagement",
        "Livré en 15 jours",
        "Moteur de réservation directe",
        "SEO local + Google My Business",
        "Mobile-first (80% du trafic)",
        "Maintenance 150€/mois (optionnel)",
      ],
    },
    {
      num: "03",
      icon: Smartphone,
      name: "Application Web / Mobile",
      tagline: "Un projet plus ambitieux ?",
      desc: "SaaS, dashboard, app mobile React Native, outil interne. Stack moderne Next.js + FastAPI + PostgreSQL. Pour les PME qui ont besoin d'aller plus loin qu'une vitrine.",
      price: "Sur devis",
      priceSuffix: "",
      highlight: false,
      cta: "Décrivez votre projet →",
      features: [
        "Next.js · FastAPI · PostgreSQL",
        "React Native (iOS + Android)",
        "Auth, API REST, dashboard",
        "CI/CD · Tests · Déploiement",
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────

export type ProjectStatus = "live" | "demo" | "wip";

export type Project = {
  tags: { label: string; highlight: boolean }[];
  name: string;
  location: string;
  desc: string;
  stack: string;
  href: string;
  linkLabel: string;
  status: ProjectStatus;
  featured: boolean;
};

export const projectsData: {
  eyebrow: string;
  title: { line1: string; line2: string; line2Accent: string };
  items: Project[];
  pmeNote: string;
} = {
  eyebrow: "Réalisations",
  title: {
    line1: "Ce que",
    line2: "j'ai",
    line2Accent: "construit.",
  },
  pmeNote: "Vous n'êtes pas hôtelier ? Même approche, même rigueur — restaurant, cabinet, artisan, commerce. Parlez-moi de votre projet.",
  items: [
    {
      featured: true,
      tags: [
        { label: "Vitrine Hôtel · Live", highlight: true },
        { label: "Next.js", highlight: false },
        { label: "Tailwind", highlight: false },
        { label: "France", highlight: false },
      ],
      name: "Démo Vitrine Hôtel",
      location: "🇫🇷 France",
      desc: "Site vitrine professionnel pour hôtel indépendant — page d'accueil impactante, galerie, système de réservation directe, SEO optimisé et mobile-first. Construit pour montrer ce que votre établissement peut avoir en 15 jours.",
      stack: "Next.js · Tailwind CSS · Framer Motion · Vercel",
      href: "https://hotel-vitrine-kyriad-demo.netlify.app",
      linkLabel: "Voir la démo →",
      status: "live",
    },
    {
      featured: false,
      tags: [
        { label: "IoT · Govathon 2025", highlight: true },
        { label: "ESP8266", highlight: false },
        { label: "Next.js", highlight: false },
      ],
      name: "Kaaraange",
      location: "🇸🇳 Dakar — Sénégal",
      desc: "Poubelle biomédicale connectée présentée à Govathon 2025. Firmware ESP8266, capteurs environnementaux temps réel, dashboard Next.js avec authentification sécurisée. Exemple de la profondeur technique appliquée à des projets à fort impact.",
      stack: "ESP8266 · C++ · Next.js 15 · Prisma · Neon PostgreSQL · Vercel",
      href: "mailto:hello@mustafah.dev?subject=Démo Kaaraange",
      linkLabel: "Demander la démo →",
      status: "demo",
    },
    {
      featured: false,
      tags: [
        { label: "SaaS · Freemium", highlight: true },
        { label: "FastAPI", highlight: false },
        { label: "Next.js", highlight: false },
      ],
      name: "Micro-Business Assistant",
      location: "🌍 Afrique de l'Ouest",
      desc: "SaaS de gestion complet pour micro-entrepreneurs. 39 endpoints REST, génération PDF, IA GPT-4, Mobile Money, WhatsApp Business. Prouve la capacité à livrer des produits fullstack complexes de bout en bout.",
      stack: "FastAPI · PostgreSQL · Next.js 15 · shadcn/ui · Celery · Redis",
      href: "mailto:hello@mustafah.dev?subject=Démo MBA",
      linkLabel: "Demander la démo →",
      status: "wip",
    },
    {
      featured: false,
      tags: [
        { label: "Marketplace B2B", highlight: true },
        { label: "FastAPI", highlight: false },
        { label: "Multi-tenant", highlight: false },
      ],
      name: "SenMarché",
      location: "🌍 Afrique de l'Ouest",
      desc: "Marketplace B2B wholesale multi-tenant. PostgreSQL Row Level Security, JWT rotation, WebSocket, rate limiting Redis, CI/CD GitHub Actions. Architecture platform-grade pensée pour scaler.",
      stack: "FastAPI · PostgreSQL RLS · Redis · Docker · GitHub Actions · WebSocket",
      href: "mailto:hello@mustafah.dev?subject=Démo SenMarché",
      linkLabel: "Demander la démo →",
      status: "wip",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// PROCESS
// ─────────────────────────────────────────────────────────────

export const processData: {
  eyebrow: string;
  title: { line1: string; line2: string; line2Accent: string };
  steps: { num: string; title: string; desc: string; days: string }[];
  note: string;
} = {
  eyebrow: "Process",
  title: {
    line1: "De zéro à",
    line2: "en ligne",
    line2Accent: "en 15 jours.",
  },
  steps: [
    {
      num: "01",
      title: "On calcule vos pertes",
      desc: "Un appel de 20 min pour comprendre votre situation — combien Booking vous coûte, ce que votre site actuel fait fuir, ce que vous voulez changer.",
      days: "Jour 1",
    },
    {
      num: "02",
      title: "Maquette gratuite",
      desc: "Je prépare une maquette complète de votre futur site sous 48h. Vous validez, vous demandez des ajustements — puis on signe. Aucun engagement avant.",
      days: "Jour 2–3",
    },
    {
      num: "03",
      title: "Développement",
      desc: "Développement rapide sur la base validée. Vous suivez l'avancement en temps réel via un lien de preview mis à jour chaque jour.",
      days: "Jour 4–12",
    },
    {
      num: "04",
      title: "Mise en ligne",
      desc: "Déploiement sur votre domaine, formation de 20 min pour gérer le contenu, remise de tous les accès. Votre site est live.",
      days: "Jour 13–15",
    },
  ],
  note: "Maquette 100% gratuite et sans engagement. Si elle ne vous convainc pas, vous ne payez rien et vous gardez la maquette.",
};

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS  (prêt pour les futurs clients)
// ─────────────────────────────────────────────────────────────

export const testimonialsData: {
  eyebrow: string;
  title: { line1: string; line2Accent: string };
  items: {
    quote: string;
    author: string;
    role: string;
    location: string;
    result: string;
  }[];
} = {
  eyebrow: "Témoignages",
  title: {
    line1: "Ce qu'ils en",
    line2Accent: "disent.",
  },
  items: [
    // À remplir avec les vrais témoignages clients
    // {
    //   quote: "Moustapha a livré exactement ce qu'il avait promis, dans les délais annoncés. Notre taux de réservation directe a augmenté de 30% en deux mois.",
    //   author: "Jean-Pierre Martin",
    //   role: "Gérant",
    //   location: "Hôtel des Alpes · Grenoble",
    //   result: "+30% de réservations directes",
    // },
  ],
};

// ─────────────────────────────────────────────────────────────
// CTA / CONTACT
// ─────────────────────────────────────────────────────────────

export const ctaData = {
  eyebrow: "Parlons-en",
  title: {
    line1: "Combien vous coûte",
    line2Accent: "Booking ce mois-ci ?",
  },
  subtitle:
    "Décrivez-moi votre situation en 2 lignes. Je reviens avec une maquette et un chiffrage sous 24h — sans engagement.",
  form: {
    fields: [
      { name: "name", label: "Votre nom", placeholder: "Jean Martin", type: "text" },
      { name: "email", label: "Email professionnel", placeholder: "contact@hotel-xyz.fr", type: "email" },
      { name: "etablissement", label: "Votre établissement", placeholder: "Hôtel des Alpes, Lyon", type: "text" },
      { name: "message", label: "Votre situation en 2 lignes", placeholder: "J'ai un hôtel de 25 chambres, mon site date de 2016, je passe 70% de mes réservations par Booking...", type: "textarea" },
    ],
    submit: "Recevoir ma maquette gratuite →",
    note: "Réponse sous 24h · Maquette gratuite · Aucun engagement",
  },
  reassurance: [
    "Maquette gratuite avant tout engagement",
    "Réponse sous 24h garantie",
    "Tarif transparent dès le premier échange",
  ],
  pme: {
    text: "Vous n'êtes pas hôtelier mais vous cherchez une présence en ligne sérieuse ?",
    cta: "Même approche, même rigueur — parlez-moi de votre projet.",
    href: "mailto:hello@mustafah.dev",
  },
  email: "hello@mustafah.dev",
  availability: "Disponible · Répond sous 24h",
} as const;

// ─────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────

export const footerData = {
  logo: { text: "mustafah", accent: ".", tld: "dev" },
  links: [
    { label: "GitHub", href: "https://github.com/mus-ta-fah", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/mustafah-mbaye", external: true },
    { label: "Email", href: "mailto:hello@mustafah.dev", external: false },
  ],
  copy: "© 2026 Moustapha Mbaye · Dakar 🇸🇳",
} as const;