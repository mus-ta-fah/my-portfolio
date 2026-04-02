// data/portfolio.ts

export const siteConfig = {
    name: "Moustapha Mbaye",
    role: "Développeur Fullstack & Mobile",
    email: "hello@mustafah.dev",
    domain: "mustafah.dev",
    location: "Dakar, Sénégal",
    flag: "🇸🇳",
    github: "https://github.com/mustafahmbaye",
    linkedin: "https://linkedin.com/in/mustafah-mbaye",
    status: "Disponible · Premiers clients en cours",
} as const;

// ─────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────

export const navData = {
    logo: { text: "mustafah", accent: ".", tld: "dev" },
    links: [
        { label: "À propos", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Projets", href: "#projects" },
        { label: "Process", href: "#process" },
    ],
    cta: { label: "Maquette gratuite", href: "#contact" },
} as const;


// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────

export const heroData = {
    tag: "Dakar, Sénégal 🇸🇳 · Disponible · Premiers clients en cours",
    title: {
        line1: "Moustapha",
        line2: "Mbaye.",       // italic + accent color
        line3: "Développeur.", // outline stroke
    },
    subtitle:
        "Je construis des sites vitrines professionnels pour hôtels et PME françaises, et des produits tech pour l'Afrique de l'Ouest. Tarifs transparents, livraison en 10-15 jours, maquette gratuite.",
    cta: {
        primary: { label: "Voir mes projets →", href: "#projects" },
        secondary: { label: "Demander une maquette", href: "#contact" },
    },
    stats: [
        { num: "4+", label: "Ans de pratique" },
        { num: "5", label: "Projets construits" },
        { num: "10j", label: "Délai livraison" },
    ],
} as const;

// ─────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────

export const aboutData = {
    eyebrow: "À propos",
    title: {
        line1: "Dev fullstack.",
        line2: "Basé à",
        line2Accent: "Dakar.",
        line3: "Pour le monde.",
    },
    paragraphs: [
        "Je m'appelle Moustapha Mbaye. Depuis Dakar, je construis des applications web, mobiles et IoT pour des clients en France et des projets qui répondent aux besoins réels de l'Afrique de l'Ouest.",
        "Mon Master 2 en Big Data à l'Université de Bambey forge ma rigueur technique. Ma pratique quotidienne sur des projets réels — scrapers, SaaS, IoT, marketplaces — forge mes compétences.",
        "Mon offre principale pour la France : sites vitrines pour hôtels et PME, livrés en 10-15 jours à 1 500-2 500€. Soit 40% moins cher qu'une agence locale, pour un résultat identique.",
    ],
    card: {
        badge: "🇸🇳 Dakar, Sénégal",
        title: "La meilleure tech n'a pas de frontières.",
        subtitle:
            "Un hôtel à Lyon mérite le même niveau de soin qu'une startup à Dakar. Je le prouve à chaque projet.",
        metrics: [
            { num: "10j", label: "Délai moyen" },
            { num: "-40%", label: "vs agences FR" },
            { num: "M2", label: "Big Data" },
            { num: "5", label: "Projets construits" },
        ],
    },
    stack: [
        "Next.js 15",
        "TypeScript",
        "FastAPI",
        "React Native",
        "PostgreSQL",
        "Tailwind CSS v4",
        "Docker",
        "Vercel",
        "Prisma",
        "Redis",
        "Claude API",
        "ESP8266",
    ],
} as const;

// ─────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────

export type Service = {
    num: string;
    icon: string;
    name: string;
    desc: string;
    price: string;
    priceSuffix: string;
    features: string[];
    highlight: boolean;
};

export const servicesData: {
    eyebrow: string;
    title: { line1: string; line2: string };
    items: Service[];
} = {
    eyebrow: "Services",
    title: {
        line1: "Ce que",
        line2: "je construis.",
    },
    items: [
        {
            num: "01",
            icon: "🏨",
            name: "Site Vitrine",
            desc: "Site professionnel pour hôtels et PME françaises. Réservation directe intégrée, SEO technique, responsive mobile. Réduit vos commissions Booking dès le premier mois.",
            price: "1 500€",
            priceSuffix: "– 2 500€",
            highlight: true,
            features: [
                "Maquette gratuite avant engagement",
                "Livré en 10-15 jours",
                "Moteur de réservation directe",
                "SEO technique inclus",
                "Maintenance optionnelle 150€/mois",
            ],
        },
        {
            num: "02",
            icon: "⚡",
            name: "Application Web",
            desc: "SaaS, dashboards, outils internes. Stack moderne Next.js 15 + FastAPI + PostgreSQL. Architecture pensée pour scaler dès le départ.",
            price: "Sur devis",
            priceSuffix: "",
            highlight: false,
            features: [
                "Next.js 15 + FastAPI",
                "Auth, dashboard, API REST",
                "Déploiement Vercel + Railway",
                "Tests & CI/CD inclus",
            ],
        },
        {
            num: "03",
            icon: "📱",
            name: "Application Mobile",
            desc: "Apps iOS & Android avec React Native. Un seul codebase, deux plateformes. Intégration Mobile Money, WhatsApp et paiements africains maîtrisés.",
            price: "Sur devis",
            priceSuffix: "",
            highlight: false,
            features: [
                "React Native (cross-platform)",
                "Mobile Money & WhatsApp",
                "Publication App Store + Play",
                "Contexte africain maîtrisé",
            ],
        },
    ],
};

// ─────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────

export type ProjectTag = {
    label: string;
    highlight: boolean;
};

export type Project = {
    tags: ProjectTag[];
    name: string;
    location: string;
    desc: string;
    stack: string;
    href: string;
    linkLabel: string;
    status: "live" | "demo" | "wip";
};

export const projectsData: {
    eyebrow: string;
    title: { line1: string; line2: string; line2Accent: string };
    items: Project[];
} = {
    eyebrow: "Projets",
    title: {
        line1: "Ce que",
        line2: "j'ai",
        line2Accent: "construit.",
    },
    items: [
        {
            tags: [
                { label: "Vitrine · Demo live", highlight: true },
                {
                    label: "Next.js",
                    highlight: false
                },
                {
                    label: "Tailwind",
                    highlight: false
                },
                {
                    label: "France",
                    highlight: false
                },
            ],
            name: "Sites Vitrines Hôtels",
            location: "🇫🇷 Lyon, Bordeaux — France",
            desc: "Système de prospection B2B construit from scratch : scraper Google Maps (304 établissements collectés), dashboard CRM avec cold outreach IA, template vitrine professionnel déployé. Stack complète opérationnelle, pipeline de 194 leads actif.",
            stack: "Next.js · Tailwind CSS · Framer · Google Maps API · Anthropic API · Python",
            href: "https://hotel-vitrine-kyriad-demo.netlify.app",
            linkLabel: "Voir la démo →",
            status: "live",
        },
        {
            tags: [
                { label: "IoT · Govathon 2025", highlight: true },
                {
                    label: "ESP8266",
                    highlight: false
                },
                {
                    label: "Next.js",
                    highlight: false
                },
            ],
            name: "Kaaraange",
            location: "🇸🇳 Dakar — Sénégal",
            desc: "Poubelle biomédicale connectée pour améliorer la gestion des déchets hospitaliers. Firmware ESP8266 avec capteurs environnementaux, dashboard Next.js temps réel, authentification sécurisée. Résolution d'un bug de production Prisma sur Vercel (binary targets Linux). Présenté à Govathon 2025.",
            stack: "ESP8266 · C++ · Next.js 15 · Prisma · Neon PostgreSQL · Better Auth · Vercel",
            href: "mailto:hello@mustafah.dev?subject=Démo Kaaraange",
            linkLabel: "Demander la démo →",
            status: "demo",
        },
        {
            tags: [
                { label: "SaaS · Freemium", highlight: true },
                {
                    label: "FastAPI",
                    highlight: false
                },
                {
                    label: "Next.js",
                    highlight: false
                },
            ],
            name: "Micro-Business Assistant",
            location: "🌍 Afrique de l'Ouest",
            desc: "SaaS de gestion pour micro-entrepreneurs africains. 39 endpoints REST (auth, ventes, clients, factures, devis, dashboard IA), génération PDF WeasyPrint, résumés IA GPT-4, intégration Mobile Money et WhatsApp Business. Modèle freemium en FCFA. Score : 89/100 d'avancement.",
            stack: "FastAPI · PostgreSQL · SQLAlchemy · Alembic · Next.js 15 · shadcn/ui · Celery · Redis",
            href: "mailto:hello@mustafah.dev?subject=Démo Micro-Business Assistant",
            linkLabel: "Demander la démo →",
            status: "wip",
        },
        {
            tags: [
                { label: "Marketplace B2B", highlight: true },
                {
                    label: "FastAPI",
                    highlight: false
                },
                {
                    label: "Multi-tenant",
                    highlight: false
                },
            ],
            name: "SenMarché",
            location: "🌍 Afrique de l'Ouest",
            desc: "Marketplace B2B wholesale multi-tenant pour le commerce ouest-africain. Architecture platform-grade avec Row Level Security PostgreSQL, TenantMiddleware subdomain-based, JWT avec token rotation, WebSocket ConnectionManager, rate limiting Redis sliding window et CI/CD GitHub Actions.",
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
    steps: {
        num: string;
        title: string;
        desc: string;
        days: string;
    }[];
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
            title: "Découverte",
            desc: "Call de 20 min pour comprendre votre établissement, vos clients et ce que vous voulez que le site fasse pour vous.",
            days: "Jour 1",
        },
        {
            num: "02",
            title: "Maquette gratuite",
            desc: "Je prépare une maquette complète de votre site avant tout engagement. Vous validez, vous ajustez — puis on signe.",
            days: "Jour 2-3",
        },
        {
            num: "03",
            title: "Développement",
            desc: "Développement sur la base validée. Vous suivez l'avancement en temps réel via un lien de preview Vercel mis à jour chaque jour.",
            days: "Jour 4-12",
        },
        {
            num: "04",
            title: "Livraison",
            desc: "Mise en ligne sur votre domaine, formation de 20 min pour gérer le contenu, et remise des accès. Maintenance mensuelle optionnelle.",
            days: "Jour 13-15",
        },
    ],
    note: "Maquette 100% gratuite et sans engagement. Si elle ne vous convainc pas, vous ne payez rien.",
};

// ─────────────────────────────────────────────────────────────
// CTA / CONTACT
// ─────────────────────────────────────────────────────────────

export const ctaData = {
    eyebrow: "Parlons-en",
    title: {
        line1: "Prêt à lancer",
        line2: "votre",
        line2Accent: "vitrine ?",
    },
    subtitle:
        "Hôtel sans site, site obsolète ou projet plus ambitieux — décrivez-moi votre besoin en 2 lignes. Je réponds sous 24h avec une première maquette.",
    availability: "Disponible · Répond sous 24h",
    cta: {
        primary: { label: "Envoyer un email →", href: "mailto:hello@mustafah.dev" },
        secondary: { label: "LinkedIn", href: "https://linkedin.com/in/mustafah-mbaye" },
    },
    email: "hello@mustafah.dev",
    reassurance: [
        "Maquette gratuite avant tout engagement",
        "Réponse sous 24h",
        "Tarif transparent dès le premier échange",
    ],
} as const;

// ─────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────

export const footerData = {
    logo: { text: "mustafah", accent: ".", tld: "dev" },
    links: [
        { label: "GitHub", href: "https://github.com/mustafahmbaye", external: true },
        { label: "LinkedIn", href: "https://linkedin.com/in/mustafah-mbaye", external: true },
        { label: "Email", href: "mailto:hello@mustafah.dev", external: false },
    ],
    copy: "© 2026 Moustapha Mbaye · Dakar 🇸🇳",
} as const;