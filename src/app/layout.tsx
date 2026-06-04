import type { Metadata } from "next";
import { Amiri, Bodoni_Moda, Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
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

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
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
  metadataBase: new URL("https://dezarti.com"),
  title: {
    default: "DEZARTI | Luxury Beyond Fragrance",
    template: "%s | DEZARTI",
  },
  description:
    "A luxury fragrance house from Qatar, offering premium perfumes and ambient fragrances for refined spaces and lasting impressions.",
  keywords: [
    "DEZARTI",
    "luxury perfume",
    "niche fragrance",
    "Arabic perfume",
    "air conditioner fragrance",
  ],
  openGraph: {
    title: "DEZARTI | Luxury Beyond Fragrance",
    description:
      "A luxury fragrance experience for premium perfumes and refined ambient scenting.",
    siteName: "DEZARTI",
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
        className={`${cormorant.variable} ${playfair.variable} ${bodoni.variable} ${inter.variable} ${amiri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
