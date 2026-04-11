import type { Metadata } from "next";
import { Playfair_Display, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/nav-bar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moustapha Mbaye — Création site hôtel & réservation directe · Dakar",
  description:
    "Développeur web basé à Dakar. Je crée des sites de réservation directe pour hôtels indépendants français — livré en 15 jours, 3x moins cher qu'une agence parisienne. Maquette gratuite.",
  metadataBase: new URL("https://mustafah.dev"),
  alternates: {
    canonical: "https://mustafah.dev",
  },
  openGraph: {
    title: "Moustapha Mbaye — Site hôtel & réservation directe",
    description: "Arrêtez de payer 15% à Booking. Un site professionnel livré en 15 jours depuis Dakar, à une fraction du tarif d'une agence parisienne.",
    url: "https://mustafah.dev",
    siteName: "mustafah.dev",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moustapha Mbaye — Création site hôtel & réservation directe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moustapha Mbaye — Site hôtel · Réservation directe",
    description: "Arrêtez de payer Booking. Site livré en 15 jours depuis Dakar.",
    images: ["/og-image.png"],
  },
  keywords: [
    "création site hôtel",
    "site réservation directe hôtel",
    "développeur web hôtel france",
    "site vitrine hôtel indépendant",
    "réduire commissions booking",
    "développeur web Dakar",
    "site web PME française",
    "Moustapha Mbaye développeur",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <body>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}