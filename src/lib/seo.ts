import { Metadata } from "next";
import { Product } from "./dezarti-data";
import { getDictionary, getProductDisplay } from "./translations";

const BASE_URL = "https://dezartiperfumes.com";

export function getBaseMetadata(locale: string, path: string): Metadata {
  const dictionary = getDictionary(locale);
  const siteName = locale === "ar" ? "عطور دزاراتي" : "Dezarti Perfumes";
  
  let title = siteName;
  let description = "";
  let ogImage = "/campaign/dezarti-good-girl.png";

  if (path === "") {
    if (locale === "ar") {
      title = "عطور دزاراتي | عطور فاخرة ومعطرات جو في قطر";
      description = "اكتشف العطور الفاخرة، والروائح المميزة، ومعطرات الجو من عطور دزاراتي. استكشف العطور الرجالية، النسائية، العطور للجنسين ومعطرات الجو الفاخرة في قطر.";
    } else {
      title = "Dezarti Perfumes | Luxury Perfumes & Air Fresheners in Qatar";
      description = "Discover premium perfumes, luxury fragrances, and air fresheners from Dezarti Perfumes. Explore men's, women's, unisex perfumes and premium air fresheners in Qatar.";
    }
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
  const siteName = locale === "ar" ? "عطور دزاراتي" : "Dezarti Perfumes";
  const isAir = product.category === "air";
  
  const title = locale === "ar"
    ? `${display.name} - ${isAir ? "معطر جو فاخر" : "عطر فاخر"} | ${siteName}`
    : `${display.name} - ${isAir ? "Luxury Air Freshener" : "Luxury Perfume"} | ${siteName}`;

  // Unique description including Perfume Name, Fragrance Notes, and Brand Name
  const topNotes = display.notes.top.join(locale === "ar" ? "، " : ", ");
  const heartNotes = display.notes.heart.join(locale === "ar" ? "، " : ", ");
  const baseNotes = display.notes.base.join(locale === "ar" ? "، " : ", ");

  const description = locale === "ar"
    ? `اكتشف عطر ${display.name} من ${siteName}. ${isAir ? "معطر جو فاخر" : "عطر فاخر"} متميز بنوتات عليا من ${topNotes}، وقلب عطر من ${heartNotes}، وقاعدة عطرية من ${baseNotes}. ${display.story}`
    : `Discover ${display.name} by ${siteName}. A premium ${isAir ? "air freshener" : "luxury perfume"} featuring top notes of ${topNotes}, heart notes of ${heartNotes}, and a base of ${baseNotes}. ${display.story}`;

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
  type: "website" | "about" | "contact" | "collection" | "product" | "organization" | "localbusiness" | "breadcrumb",
  data?: { description?: string; name?: string; path?: string; product?: Product }
) {
  const siteName = "Dezarti Perfumes";
  const arabicSiteName = "عطور دزاراتي";
  const currentSiteName = locale === "ar" ? arabicSiteName : siteName;
  const baseUrl = `${BASE_URL}/${locale}`;

  if (type === "website") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": currentSiteName,
      "url": baseUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${baseUrl}/collections?search={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };
  }

  if (type === "organization") {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": siteName,
      "alternateName": arabicSiteName,
      "url": BASE_URL,
      "logo": `${BASE_URL}/campaign/dezarti-good-girl.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+97433667377",
        "contactType": "customer service",
        "areaServed": "QA",
        "availableLanguage": ["Arabic", "English"]
      }
    };
  }

  if (type === "localbusiness") {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": siteName,
      "alternateName": arabicSiteName,
      "image": `${BASE_URL}/campaign/dezarti-good-girl.png`,
      "url": BASE_URL,
      "telephone": "+97433667377",
      "email": "dezaratiperfume@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building Number 17, 41 Betteel Street",
        "addressLocality": "Doha",
        "addressCountry": "QA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2854,
        "longitude": 51.5310
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "20:00"
      }
    };
  }

  if (type === "breadcrumb") {
    const itemListElement = [];
    
    // 1. Home
    itemListElement.push({
      "@type": "ListItem",
      "position": 1,
      "name": locale === "ar" ? "الرئيسية" : "Home",
      "item": `${BASE_URL}/${locale}`
    });

    if (data?.product) {
      const product: Product = data.product;
      const display = getProductDisplay(locale, product);
      const isAir = product.category === "air";
      
      const categoryPath = isAir ? "/air-fragrances" : `/${product.category}`;
      const categoryName = display.collection;
      
      // 2. Collection Category
      itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": categoryName,
        "item": `${BASE_URL}/${locale}${categoryPath}`
      });

      // 3. Product Name
      itemListElement.push({
        "@type": "ListItem",
        "position": 3,
        "name": display.name,
        "item": `${BASE_URL}/${locale}/product/${product.slug}`
      });
    } else if (data?.path) {
      const path = data.path;
      let pageName = "";
      
      if (path === "/about") {
        pageName = locale === "ar" ? "من نحن" : "About Us";
      } else if (path === "/contact") {
        pageName = locale === "ar" ? "اتصل بنا" : "Contact Us";
      } else if (path === "/collections") {
        pageName = locale === "ar" ? "المجموعات" : "Collections";
      } else if (path === "/men" || path === "/collections/men") {
        pageName = locale === "ar" ? "عطور الرجال" : "Men's Perfumes";
      } else if (path === "/women" || path === "/collections/women") {
        pageName = locale === "ar" ? "عطور النساء" : "Women's Perfumes";
      } else if (path === "/unisex" || path === "/collections/unisex") {
        pageName = locale === "ar" ? "عطور للجنسين" : "Unisex Perfumes";
      } else if (path === "/air-fragrances" || path === "/collections/ac-ambient") {
        pageName = locale === "ar" ? "معطرات الجو" : "Air Fresheners";
      } else if (path === "/new-arrivals") {
        pageName = locale === "ar" ? "وصل حديثاً" : "New Arrivals";
      } else if (path === "/best-sellers") {
        pageName = locale === "ar" ? "الأكثر طلباً" : "Best Sellers";
      }
      
      if (pageName) {
        itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": pageName,
          "item": `${BASE_URL}/${locale}${path}`
        });
      }
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    };
  }

  if (type === "about") {
    return {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": locale === "ar" ? `عن ${arabicSiteName}` : `About ${siteName}`,
      "url": `${baseUrl}/about`,
      "description": data?.description || "About DEZARTI luxury fragrance house."
    };
  }

  if (type === "contact") {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": locale === "ar" ? `اتصل بـ ${arabicSiteName}` : `Contact ${siteName}`,
      "url": `${baseUrl}/contact`,
      "description": data?.description || "Contact DEZARTI luxury service."
    };
  }

  if (type === "collection") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": data?.name || "Collection",
      "url": `${baseUrl}${data?.path || ""}`,
      "description": data?.description || "Browse curated collections."
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
