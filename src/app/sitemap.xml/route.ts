import { products } from "@/lib/dezarti-data";
import { getProductDisplay } from "@/lib/translations";

const BASE_URL = "https://dezartiperfumes.com";
const locales = ["en", "ar"];

const routes = [
  "",
  "/about",
  "/contact",
  "/collections",
  "/men",
  "/women",
  "/unisex",
  "/air-fragrances",
  "/new-arrivals",
  "/best-sellers"
];

export async function GET() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  // Static routes
  for (const route of routes) {
    for (const locale of locales) {
      const url = `${BASE_URL}/${locale}${route}`;
      const priority = route === "" ? "1.0" : "0.8";
      
      xml += `
  <url>
    <loc>${url}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en${route}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${BASE_URL}/ar${route}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${route}" />
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }
  }

  // Product routes
  for (const product of products) {
    for (const locale of locales) {
      const url = `${BASE_URL}/${locale}/product/${product.slug}`;
      const display = getProductDisplay(locale, product);
      const isAir = product.category === "air";
      const imageTitle = locale === "ar"
        ? `${display.name} - ${isAir ? "معطر جو فاخر" : "عطر فاخر"} من عطور دزاراتي`
        : `${display.name} - ${isAir ? "Luxury Air Freshener" : "Luxury Perfume"} by Dezarti Perfumes`;
      
      xml += `
  <url>
    <loc>${url}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en/product/${product.slug}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${BASE_URL}/ar/product/${product.slug}" />
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
    <image:image>
      <image:loc>${BASE_URL}${product.image}</image:loc>
      <image:title>${imageTitle.replace(/&/g, "&amp;")}</image:title>
    </image:image>
  </url>`;
    }
  }

  xml += `\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
