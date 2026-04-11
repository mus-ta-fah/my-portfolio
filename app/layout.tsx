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
  title: "Moustapha Mbaye — Sites de réservation directe pour hôtels indépendants",
  description:
    "Développeur fullstack basé à Dakar. Sites de réservation directe pour hôtels français — livré en 15 jours, 3x moins cher qu'une agence parisienne.",
  metadataBase: new URL("https://mustafah.dev"),
  openGraph: {
    title: "Moustapha Mbaye — Sites de réservation directe pour hôtels indépendants",
    description: "Développeur fullstack basé à Dakar. Sites de réservation directe pour hôtels français — livré en 15 jours, 3x moins cher qu'une agence parisienne.",
    url: "https://mustafah.dev",
    siteName: "mustafah.dev",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moustapha Mbaye — Sites de réservation directe pour hôtels indépendants",
    description: "Sites de réservation directe pour hôtels français · Livré en 15 jours · Basé à Dakar",
  },
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