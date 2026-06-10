import { MetadataRoute } from "next";
import { products } from "@/lib/dezarti-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dezartiperfumes.com";
  const locales = ["en", "ar"];
  const routes = [
    "",
    "/about",
    "/contact",
    "/collections",
    "/collections/men",
    "/collections/women",
    "/collections/unisex",
    "/collections/ac-ambient",
    "/men",
    "/women",
    "/unisex",
    "/air-fragrances",
    "/new-arrivals",
    "/best-sellers",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Static routes
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }

    // Dynamic product routes
    for (const product of products) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/product/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  }

  return sitemapEntries;
}
