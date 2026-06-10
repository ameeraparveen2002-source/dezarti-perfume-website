import type { Metadata } from "next";
import { Amiri, Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dezartiperfumes.com"),
  title: {
    default: "Dezarti Perfumes | Luxury Perfumes & Air Fresheners in Qatar",
    template: "%s | Dezarti Perfumes",
  },
  description:
    "Discover premium perfumes, luxury fragrances, and air fresheners from Dezarti Perfumes. Explore men's, women's, unisex perfumes and premium air fresheners in Qatar.",
  keywords: [
    "Dezarti Perfumes",
    "Dezarti Perfumes Qatar",
    "Luxury Perfumes Qatar",
    "Air Fresheners Qatar",
    "luxury perfume",
    "niche fragrance",
    "Arabic perfume",
    "air conditioner fragrance",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Dezarti Perfumes | Luxury Perfumes & Air Fresheners in Qatar",
    description:
      "Discover premium perfumes, luxury fragrances, and air fresheners from Dezarti Perfumes. Explore men's, women's, unisex perfumes and premium air fresheners in Qatar.",
    siteName: "Dezarti Perfumes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${amiri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
