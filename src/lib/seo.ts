import { Metadata } from "next";
import { Product } from "./dezarti-data";
import { getDictionary, getProductDisplay } from "./translations";

const BASE_URL = "https://dezarti.com";

export function getBaseMetadata(locale: string, path: string): Metadata {
  const dictionary = getDictionary(locale);
  const siteName = "DEZARTI";
  
  let title = siteName;
  let description = "";
  let ogImage = "/campaign/dezarti-good-girl.png";

  if (path === "") {
    title = `${siteName} | ${dictionary.brand.tagline}`;
    description = dictionary.brand.footerText;
  } else if (path === "/about") {
    title = `${dictionary.about.pageEyebrow} | ${siteName}`;
    description = dictionary.about.pageText;
  } else if (path === "/contact") {
    title = `${dictionary.contact.eyebrow} | ${siteName}`;
    description = dictionary.contact.text;
  } else if (path === "/collections") {
    title = `${dictionary.collectionPages.collections.eyebrow} | ${siteName}`;
    description = dictionary.collectionPages.collections.description;
  } else if (path === "/collections/men" || path === "/men") {
    title = `${dictionary.collectionPages.men.eyebrow} | ${siteName}`;
    description = dictionary.collectionPages.men.description;
    ogImage = "/campaign/men/dezarti-men-page-26.png";
  } else if (path === "/collections/women" || path === "/women") {
    title = `${dictionary.collectionPages.women.eyebrow} | ${siteName}`;
    description = dictionary.collectionPages.women.description;
    ogImage = "/campaign/women/dezarti-women-page-3.png";
  } else if (path === "/collections/unisex" || path === "/unisex") {
    title = `${dictionary.collectionPages.unisex.eyebrow} | ${siteName}`;
    description = dictionary.collectionPages.unisex.description;
    ogImage = "/campaign/unisex/dezarti-unisex-page-2.png";
  } else if (path === "/collections/ac-ambient" || path === "/air-fragrances") {
    title = `${dictionary.collectionPages.airFragrances.eyebrow} | ${siteName}`;
    description = dictionary.collectionPages.airFragrances.description;
    ogImage = "/campaign/air/dezarti-air-home.png";
  } else if (path === "/new-arrivals") {
    title = `${dictionary.collectionPages.newArrivals.eyebrow} | ${siteName}`;
    description = dictionary.collectionPages.newArrivals.description;
  } else if (path === "/best-sellers") {
    title = `${dictionary.brand.name} | ${dictionary.homeSections[1]?.title || "Best Sellers"}`;
    description = dictionary.homeSections[1]?.description || "";
  }

  const canonicalUrl = `${BASE_URL}/${locale}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en${path}`,
        ar: `${BASE_URL}/ar${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function getProductMetadata(locale: string, product: Product): Metadata {
  const display = getProductDisplay(locale, product);
  const siteName = "DEZARTI";
  const title = `${display.name} | ${display.collection} | ${siteName}`;
  const description = display.story;
  const canonicalUrl = `${BASE_URL}/${locale}/product/${product.slug}`;
  const ogImage = product.image;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en/product/${product.slug}`,
        ar: `${BASE_URL}/ar/product/${product.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: display.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function getStructuredData(
  locale: string,
  type: "website" | "about" | "contact" | "collection" | "product",
  data?: { description?: string; name?: string; path?: string; product?: Product }
) {
  const siteName = "DEZARTI";
  const baseUrl = `${BASE_URL}/${locale}`;

  if (type === "website") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": siteName,
      "url": baseUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${baseUrl}/collections?search={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };
  }

  if (type === "about") {
    return {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": `About ${siteName}`,
      "url": `${baseUrl}/about`,
      "description": data?.description || "About DEZARTI luxury fragrance house."
    };
  }

  if (type === "contact") {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": `Contact ${siteName}`,
      "url": `${baseUrl}/contact`,
      "description": data?.description || "Contact DEZARTI luxury service."
    };
  }

  if (type === "collection") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": data?.name || "DEZARTI Collection",
      "url": `${baseUrl}${data?.path || ""}`,
      "description": data?.description || "Browse DEZARTI curated collections."
    };
  }

  if (type === "product" && data?.product) {
    const product: Product = data.product;
    const display = getProductDisplay(locale, product);
    const priceAmount = parseFloat(display.price.replace(/[^\d.]/g, "")) || (product.category === "air" ? 50 : 150);

    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": display.name,
      "image": `${BASE_URL}${product.image}`,
      "description": display.story,
      "category": display.collection,
      "brand": {
        "@type": "Brand",
        "name": siteName
      },
      "offers": {
        "@type": "Offer",
        "price": priceAmount,
        "priceCurrency": "QAR",
        "availability": "https://schema.org/InStock",
        "url": `${baseUrl}/product/${product.slug}`
      }
    };
  }

  return null;
}
