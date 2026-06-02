import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://dezarti.com"),
  title: {
    default: "DEZARTI | فخامة تتجاوز العطر",
    template: "%s | DEZARTI",
  },
  description:
    "تجربة عربية فاخرة لدار عطور DEZARTI، تجمع العطور الراقية ومعطرات الجو والطقوس الحسية.",
  keywords: [
    "DEZARTI",
    "luxury perfume",
    "niche fragrance",
    "Arabic perfume",
    "air conditioner fragrance",
  ],
  openGraph: {
    title: "DEZARTI | فخامة تتجاوز العطر",
    description:
      "تجربة عطرية سينمائية للعطور الراقية ومعطرات المساحات.",
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
    <html lang="ar" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${playfair.variable} ${bodoni.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
