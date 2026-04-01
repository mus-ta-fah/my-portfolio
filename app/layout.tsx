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
  title: "Moustapha Mbaye — Développeur Fullstack · Dakar",
  description:
    "Développeur fullstack web & mobile basé à Dakar. Sites vitrines professionnels pour PME françaises. Next.js, FastAPI, React Native.",
  metadataBase: new URL("https://mustafah.dev"),
  openGraph: {
    title: "Moustapha Mbaye — Développeur Fullstack",
    description: "Je construis depuis Dakar ce que les agences parisiennes facturent 3x plus cher.",
    url: "https://mustafah.dev",
    siteName: "mustafah.dev",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moustapha Mbaye — Développeur Fullstack",
    description: "Fullstack dev basé à Dakar · Sites vitrines PME françaises",
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