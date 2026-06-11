import { Metadata } from "next";
import { Product, products } from "./dezarti-data";
import { getDictionary, getProductDisplay } from "./translations";

const BASE_URL = "https://dezartiperfumes.com";

export function getBaseMetadata(locale: string, path: string): Metadata {
  const siteName = locale === "ar" ? "عطور دزاراتي" : "Dezarti Perfumes";

  let title = siteName;
  let description = "";
  let ogImage = "/campaign/dezarti-good-girl.png";

  if (path === "") {
    if (locale === "ar") {
      title = "عطور دزاراتي | تسوق عطور فاخرة ومعطرات جو في قطر - Dezarti Perfumes";
      description = "اشترِ العطور الفاخرة عبر الإنترنت في قطر من عطور دزاراتي. اكتشف العطور الرجالية الفاخرة، العطور النسائية، العطور للجنسين ومعطرات الجو المتميزة في قطر. روائح راقية تدوم طويلاً.";
    } else {
      title = "Dezarti Perfumes | Buy Luxury Perfumes & Perfume Shop in Qatar";
      description = "Discover and buy premium perfumes, luxury fragrances, and ambient air fresheners in Qatar from Dezarti Perfumes. Explore long-lasting men's, women's, and unisex perfumes.";
    }
  } else if (path === "/about") {
    if (locale === "ar") {
      title = "من نحن | دار عطور فاخرة في قطر | عطور دزاراتي";
      description = "تعرف على عطور دزاراتي، علامة العطور الفاخرة المتميزة في قطر. رسالتنا ورؤيتنا وحرفيتنا الفريدة في صياغة عطور شخصية ومعطرات جو راقية تدوم طويلاً.";
    } else {
      title = "About Us | Luxury Perfume House in Qatar | Dezarti Perfumes";
      description = "Learn about Dezarti Perfumes, Qatar's premium luxury fragrance brand. Discover our mission, heritage, spatial scenting projects, and long-lasting elegant perfumes.";
    }
  } else if (path === "/contact") {
    if (locale === "ar") {
      title = "اتصل بنا | استشارة خاصة وعطور فاخرة في قطر | عطور دزاراتي";
      description = "تواصل مع عطور دزاراتي في الدوحة، قطر للاستشارات العطرية الخاصة، تعطير المساحات، طلبات الجملة، أو دعم العملاء. موقعنا وأرقام التواصل.";
    } else {
      title = "Contact Us | Perfume Shop & Private Scent Consultation | Dezarti Perfumes";
      description = "Get in touch with Dezarti Perfumes in Doha, Qatar. Contact us for private fragrance consultations, ambient spatial scenting, custom orders, or customer support.";
    }
  } else if (path === "/collections") {
    if (locale === "ar") {
      title = "مجموعات العطور الفاخرة في قطر | عطور دزاراتي";
      description = "تصفح جميع مجموعات عطور دزاراتي الفاخرة في قطر. استكشف العطور الرجالية، النسائية، العطور للجنسين، ومعطرات الجو الراقية المصممة بعناية.";
    } else {
      title = "Luxury Perfume Collections Qatar | Dezarti Perfumes";
      description = "Browse all premium perfume collections by Dezarti Perfumes. Explore luxury men's, women's, unisex perfumes and ambient room sprays in Qatar.";
    }
  } else if (path === "/collections/men" || path === "/men") {
    if (locale === "ar") {
      title = "عطور رجالية في قطر | أفضل العطور الرجالية تدوم طويلاً | عطور دزاراتي";
      description = "تسوق أفضل العطور الرجالية الفاخرة في قطر من عطور دزاراتي. روائح رجالية راقية تدوم طويلاً بنفحات الخشب، والجلود، والعنبر الفاخر.";
    } else {
      title = "Men's Perfumes Qatar | Best Long Lasting Perfumes for Men | Dezarti Perfumes";
      description = "Explore the best men's perfumes in Qatar. Buy premium, long-lasting fragrances for men featuring dark woods, rich leather, amber, and modern masculine signatures.";
    }
    ogImage = "/campaign/women/dezarti-women-page-25.png";
  } else if (path === "/collections/women" || path === "/women") {
    if (locale === "ar") {
      title = "عطور نسائية في قطر | عطور نسائية فاخرة تدوم طويلاً | عطور دزاراتي";
      description = "تسوقي عطوراً نسائية فاخرة في قطر من عطور دزاراتي. اكتشفي تشكيلة راقية من العطور النسائية التي تدوم طويلاً بنوتات الورد، والياسمين، والمسك الناعم.";
    } else {
      title = "Women's Perfumes Qatar | Luxury Women's Fragrances | Dezarti Perfumes";
      description = "Shop luxury women's perfumes in Qatar. Discover long-lasting premium fragrances for women featuring refined rose, jasmine, vanilla, and soft elegant signatures.";
    }
    ogImage = "/campaign/men/dezarti-men-page-26.png";
  } else if (path === "/collections/unisex" || path === "/unisex") {
    if (locale === "ar") {
      title = "عطور للجنسين في قطر | عطور للجنسين فاخرة ومميزة | عطور دزاراتي";
      description = "اكتشف عطوراً فاخرة للجنسين في قطر من عطور دزاراتي. تسوق روائح راقية ومميزة تناسب الجميع بنفحات العنبر، والبخور، والعود والتوابل الهادئة.";
    } else {
      title = "Unisex Perfumes Qatar | Premium Unisex Fragrances | Dezarti Perfumes";
      description = "Discover premium unisex fragrances in Qatar. Explore luxury unisex perfumes featuring warm amber, incense, tea, oud, and spices designed for everyone.";
    }
    ogImage = "/campaign/unisex/dezarti-unisex-page-2.png";
  } else if (path === "/collections/ac-ambient" || path === "/air-fragrances") {
    if (locale === "ar") {
      title = "معطرات جو في قطر | معطرات جو وتكييف فاخرة للمنازل | عطور دزاراتي";
      description = "تسوق معطرات جو فاخرة ومعطرات تكييف متميزة في قطر من عطور دزاراتي. روائح راقية للمنازل، والمكاتب، والفنادق، وأنظمة التكييف.";
    } else {
      title = "Air Fresheners Qatar | Premium Home & AC Fragrances | Dezarti Perfumes";
      description = "Shop luxury air fresheners and premium home fragrances in Qatar. Crafted for homes, offices, hotels, and air conditioning (AC) systems. Refresh your space.";
    }
    ogImage = "/campaign/air/dezarti-air-home.png";
  } else if (path === "/new-arrivals") {
    if (locale === "ar") {
      title = "وصل حديثاً | أحدث العطور الفاخرة في قطر | عطور دزاراتي";
      description = "اكتشف أحدث العطور الفاخرة الواصلة حديثاً من عطور دزاراتي. تسوق أحدث تركيبات العطور الفاخرة ومعطرات الجو الفاخرة في قطر.";
    } else {
      title = "New Arrivals | Latest Luxury Perfumes Qatar | Dezarti Perfumes";
      description = "Discover the newest fragrance arrivals from Dezarti Perfumes. Shop the latest luxury perfumes and spatial ambient scents released in Qatar.";
    }
  } else if (path === "/best-sellers") {
    if (locale === "ar") {
      title = "الأكثر طلباً | أفضل العطور مبيعاً في قطر | عطور دزاراتي";
      description = "تسوق العطور الأكثر مبيعاً والأكثر طلباً في قطر من عطور دزاراتي. اكتشف التواقيع العطرية الفريدة التي تميز دار عطورنا.";
    } else {
      title = "Best Sellers | Best Perfumes in Qatar | Dezarti Perfumes";
      description = "Shop the best-selling and most popular luxury perfumes in Qatar from Dezarti Perfumes. Discover the signature scents that define our brand.";
    }
  }

  // Canonical consolidation for duplicate paths
  let canonicalPath = path;
  if (path === "/collections/men") canonicalPath = "/men";
  else if (path === "/collections/women") canonicalPath = "/women";
  else if (path === "/collections/unisex") canonicalPath = "/unisex";
  else if (path === "/collections/ac-ambient") canonicalPath = "/air-fragrances";

  const canonicalUrl = `${BASE_URL}/${locale}${canonicalPath}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en${canonicalPath}`,
        ar: `${BASE_URL}/ar${canonicalPath}`,
        "x-default": `${BASE_URL}${canonicalPath}`,
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
  type: "website" | "about" | "contact" | "collection" | "product" | "organization" | "localbusiness" | "breadcrumb" | "faq",
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
      "email": "dezartiperfume@gmail.com",
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "11:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Friday"
          ],
          "opens": "16:00",
          "closes": "22:00"
        }
      ]
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
    let filterCategory: Product["category"] | null = null;
    const path = data?.path || "";
    if (path === "/men" || path === "/collections/men") filterCategory = "men";
    else if (path === "/women" || path === "/collections/women") filterCategory = "women";
    else if (path === "/unisex" || path === "/collections/unisex") filterCategory = "unisex";
    else if (path === "/air-fragrances" || path === "/collections/ac-ambient") filterCategory = "air";

    const itemListElement = [];
    if (filterCategory) {
      const filtered = products.filter((p) => p.category === filterCategory);
      for (let i = 0; i < filtered.length; i++) {
        const product = filtered[i];
        const display = getProductDisplay(locale, product);
        itemListElement.push({
          "@type": "ListItem",
          "position": i + 1,
          "url": `${BASE_URL}/${locale}/product/${product.slug}`,
          "name": display.name,
        });
      }
    }

    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": data?.name || "Collection",
      "url": `${baseUrl}${data?.path || ""}`,
      "description": data?.description || "Browse curated collections.",
      ...(itemListElement.length > 0
        ? {
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": itemListElement,
          },
        }
        : {}),
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
      "sku": `${product.category}-${product.slug}`,
      "mpn": `${product.category}-${product.slug}`,
      "brand": {
        "@type": "Brand",
        "name": siteName
      },
      "offers": {
        "@type": "Offer",
        "price": priceAmount,
        "priceCurrency": "QAR",
        "availability": "https://schema.org/InStock",
        "url": `${baseUrl}/product/${product.slug}`,
        "priceValidUntil": "2027-12-31",
        "seller": {
          "@type": "Organization",
          "name": siteName
        }
      }
    };
  }

  if (type === "faq") {
    const dictionary = getDictionary(locale) as unknown as {
      faqs?: Record<string, readonly { readonly question: string; readonly answer: string }[]>;
    };
    let faqKey: "home" | "men" | "women" | "unisex" | "air" = "home";
    const path = data?.path || "";
    if (path === "/men" || path === "/collections/men") faqKey = "men";
    else if (path === "/women" || path === "/collections/women") faqKey = "women";
    else if (path === "/unisex" || path === "/collections/unisex") faqKey = "unisex";
    else if (path === "/air-fragrances" || path === "/collections/ac-ambient") faqKey = "air";

    const faqs = dictionary.faqs?.[faqKey] || [];
    if (faqs.length > 0) {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };
    }
  }

  return null;
}
