import { AppWindow, House, LucideIcon, Smartphone } from 'lucide-react';

export const siteConfig = {
    name: "Moustapha Mbaye",
    role: "Développeur Fullstack & Mobile",
    email: "hello@mustafah.dev",
    domain: "mustafah.dev",
    location: "Dakar, Sénégal",
    flag: "🇸🇳",
    github: "https://github.com/mustafah",
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
    tag: "Dakar 🇸🇳 · Disponible pour missions France · Premiers clients en cours",
    title: {
        line1: "Moustapha",
        line2: "Mbaye.",       // italic + accent color
        line3: "Développeur.", // outline stroke
    },
    subtitle: {
        text: "Je crée des sites rapides, modernes et optimisés pour le mobile pour les PME et hôtels français qui veulent plus de visibilité et plus de réservations directes.",
        span: "Livraison en 10-15 jours, sans les tarifs d’une agence à 10 000€."
    },

    cta: {
        primary: { label: "Recevoir un mini audit gratuit →", href: "#contact" },
        secondary: { label: "Voir mes projets", href: "#projects" },
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
        line1: "Un développeur",
        line2Accent: "qui pense comme un entrepreneur.",
    },
    paragraphs: [
        "Je suis Moustapha Mbaye, développeur fullstack. Depuis Dakar, je conçois des sites vitrines et applications web pour des entreprises & particuliers qui veulent une présence en ligne moderne et efficace.",
        // "Mon Master 2 Data Science & Génie Logiciel à l'Université de Bambey forge ma rigueur technique. Ma pratique quotidienne sur des projets réels — scrapers, SaaS, IoT, marketplaces — forge mes compétences.",
    ],
    offrefr:{
        text: "Mon offre principale pour la France :",
        description: "sites vitrines pour hôtels et PME, livrés en 10-15 jours avec une stack moderne et un SEO technique solide."
    },
    problemes: {
        text: "Beaucoup de PME ont encore aujourd’hui :",
        list: [
            "un site lent, un SEO faible",
            "un design daté et non responsive",
            "une mauvaise expérience mobile",
        ],
        resultat: "Résultat : des visiteurs… mais peu de clients."
    },
    objectif: {
        text: "Mon objectif est simple :",
        description: "transformer votre site en un outil qui inspire confiance et génère des prospects.",
        methode: {
            text: "Pour cela je combine",
            list: [
                "design moderne",
                "performance technique",
                "expérience utilisateur claire",
            ]
        }
    },
    card: {
        badge: "🇸🇳 Dakar, Sénégal",
        title: "La meilleure tech n'a pas de frontières.",
        subtitle:
            "Un hôtel à Lyon mérite le même niveau de soin qu'une startup à Dakar. Je le prouve à chaque projet.",
        metrics: [
            { num: "10j", label: "Délai moyen" },
            { num: "-40%", label: "vs agences FR" },
            { num: "M2", label: "Data Science & Génie Logiciel Data" },
            { num: "5+", label: "Projets construits" },
        ],
    },
    stack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Native",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Prisma",
        "Docker",
        "Vercel",
    ],
} as const;

// ─────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────

export type Service = {
    num: string;
    icon: LucideIcon;
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
            icon: House,
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
            icon: AppWindow,
            name: "Application Web",
            desc: "SaaS, dashboards, outils internes. Stack moderne Next.js 15 + FastAPI + PostgreSQL. Architecture pensée pour scaler dès le départ.",
            price: "Sur devis",
            priceSuffix: "",
            highlight: false,
            features: [
                "Next.js + FastAPI",
                "Auth, dashboard, API REST",
                "Déploiement Vercel + Railway/Render",
                "Tests & CI/CD inclus",
            ],
        },
        {
            num: "03",
            icon: Smartphone,
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
            title: "Discussion rapide",
            desc: "Nous échangeons sur votre activité et vos objectifs pour comprendre votre établissement, vos clients et ce que vous voulez que le site fasse pour vous.",
            days: "Jour 1",
        },
        {
            num: "02",
            title: "Maquette gratuite",
            desc: "Je prépare une première version visuelle de votre site avant tout engagement. Vous validez, vous ajustez — puis on signe.",
            days: "Jour 2-3",
        },
        {
            num: "03",
            title: "Développement",
            desc: "Développement sur la base validée. Vous suivez l'avancement en temps réel via un lien de preview mis à jour chaque jour.",
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
    subtitle:[
         "Si vous a besoin d’un site moderne, rapide et crédible ou que vous avez un projet plus ambitieux",
         "décrivez-moi votre besoin en 2 lignes.",
         "Je réponds sous 24h avec une première maquette."
    ],
        // "",
    availability: "Disponible · Répond sous 24h",
    audit: {
        text: "Je peux aussi vous envoyer un mini audit gratuit de votre site actuel.",
        details : {
            text: "Dans cet audit je vous montre :",
            list : [
                "les points faibles de votre site",
                "ce qui peut être amélioré",
                "comment augmenter vos conversions"
            ]
        }
    },
    cta: {
        primary: { label: "Me parler de votre projet →", href: "mailto:hello@mustafah.dev" },
        secondary: { label: "Recevoir mon audit gratuit →", href: "mailto:hello@mustafah.dev" },
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