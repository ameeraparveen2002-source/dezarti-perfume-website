import type { Product } from "@/lib/dezarti-data";

export type SupportedLocale = "ar" | "en";

export type Translation = typeof translations.en;

const categoryNameMap = {
  men: {
    ar: "عطور الرجال",
    en: "Men's Perfumes",
  },
  women: {
    ar: "عطور النساء",
    en: "Women's Perfumes",
  },
  unisex: {
    ar: "عطور للجنسين",
    en: "Unisex Perfumes",
  },
  air: {
    ar: "عطور التكييف والجو",
    en: "AC & Ambient Fragrances",
  },
} as const;

const englishProductNames: Record<Product["category"], string[]> = {
  men: [
    "Red Tobacco", "Noir Imperial", "Oud Obscur", "Saffron Wood", "Leather Noble",
    "Amber Night", "Cigar Blanc", "Vetiver Royal", "Tobacco Dark", "Musk Forge",
    "Cafe Noir", "Ebony Wood", "Cedar Strict", "Labdanum 26", "Atlas Oud",
    "Ember Smoke", "Night Baron", "Black Iris", "Tonka Rich", "Ombre Mineral",
    "Royal Trail", "Dark Suede", "Accord 19", "Amber Crown", "Oud Reserve",
  ],
  women: [
    "Mahajad", "Velvet Rose", "Blanc Minuit", "Rose Couture", "Jasmine Pearl",
    "Orris Silk", "Vanilla Noir", "Musk Lumiere", "Peach Fleur", "Luna Rose",
    "Tuberose Blanc", "Soleil Fleur", "Rose du Soir", "Cashmere Bloom", "Pearl 03",
    "Ivoire Musk", "Narcisse Veil", "Dahlia Rouge", "Fleur Amber", "Sandal Rose",
    "Mirage Blanc", "Violet Dore", "Magnolia Silk", "Rosa Alte", "Aurora Veil",
  ],
  unisex: [
    "Nally", "Amber Serene", "Oud Lumiere", "Amber Ritual", "The Noir",
    "Labdanum Silk", "Salt Wood", "Incense Blanc", "Patchouli Veil", "Amber Cashmere",
    "Rose and Smoke", "Neroli Mineral", "Tonka Sky", "Oud Therapy", "Cardamom Noir",
    "Iris Santal", "Musk Opal", "Frankincense 12", "Amber Fig", "Suede Blanc",
    "Serene Wood", "Rose Cardamom", "Vetiver Skin", "Oud Aura", "Blanc Odyssey",
    "Cafe Amber", "Sandal Minuet", "Eclipse Musk",
  ],
  air: ["Cielo Air", "Hotel Blanc", "Linen Cold", "Amber Space", "White Tea"],
};

const englishProductMeta: Record<Product["category"], {
  family: string;
  mood: string;
  story: string;
  usageRecommendation: string;
  notes: Product["notes"];
}> = {
  men: {
    family: "Woody Tobacco",
    mood: "Red tobacco, dark woods, warm leather, and deep presence",
    story: "A polished masculine signature balancing warm tobacco, quiet woods, and a refined leather trail.",
    usageRecommendation: "Ideal for evening wear, private meetings, and moments that call for lasting presence.",
    notes: {
      top: ["Coffee", "Almond", "Bergamot"],
      heart: ["Red Tobacco", "Cinnamon", "Cedar"],
      base: ["Vanilla", "Cacao", "Sandalwood"],
    },
  },
  women: {
    family: "Velvet Floral",
    mood: "Dark rose, pearl, red velvet, and evening elegance",
    story: "A rich feminine composition moving between rose, jasmine, creamy musk, and quiet theatrical softness.",
    usageRecommendation: "Suited to refined evenings, special occasions, and moments that need a soft unforgettable trace.",
    notes: {
      top: ["Bergamot", "White Peach", "Pear"],
      heart: ["Sambac Jasmine", "Tuberose", "Rose"],
      base: ["Vanilla", "Tonka", "Sandalwood"],
    },
  },
  unisex: {
    family: "Amber Leather",
    mood: "Amber, soft leather, dark rose, and elegant tension",
    story: "A fragrance beyond classification, blending amber warmth with soft leather and deep woods.",
    usageRecommendation: "For luxurious daily wear, travel, and evenings that need a personal signature beyond rules.",
    notes: {
      top: ["Cardamom", "Pink Pepper", "Bergamot"],
      heart: ["Rose", "Black Tea", "Frankincense"],
      base: ["Amber", "Leather", "White Musk"],
    },
  },
  air: {
    family: "Fresh Aromatic",
    mood: "Hotel air, cool linen, and polished calm",
    story: "A luxury air fragrance created to transform interiors into calm, clean, and refined environments.",
    usageRecommendation: "For homes, boutiques, salons, hotel suites, entrances, and spaces with a distinct identity.",
    notes: {
      top: ["Italian Lemon", "Aldehydes", "Mint Leaf"],
      heart: ["White Tea", "Fig Leaf", "Iris"],
      base: ["Clean Musk", "Cedar", "Soft Amber"],
    },
  },
};

export const translations = {
  en: {
    languageNames: { ar: "AR", en: "EN" },
    brand: {
      name: "DEZARTI",
      tagline: "Luxury Beyond Fragrance",
      footerText: "Luxury beyond fragrance. Perfumes, spatial rituals, and sensory identity composed with care.",
    },
    nav: {
      byPath: {
        "/": "Home",
        "/collections": "Collections",
        "/men": "Men",
        "/women": "Women",
        "/unisex": "Unisex",
        "/new-arrivals": "New Arrivals",
        "/air-fragrances": "AC & Ambient",
        "/about": "About",
        "/contact": "Contact",
      },
      home: [
        { href: "/", label: "Home" },
        { href: "/#new-arrivals", label: "New Arrivals" },
        { href: "/#collections", label: "Collections" },
        { href: "/#about", label: "About" },
        { href: "/#contact", label: "Contact" },
      ],
    },
    hero: {
      eyebrow: "Luxury Fragrance House",
      title: "Quiet luxury, composed as memory.",
      text: "Fragrances crafted for moments that linger with restraint, elegance, and emotional clarity.",
      primaryCta: "Explore Collections",
      secondaryCta: "Discover the House",
    },
    homeSections: [
      {
        id: "new-arrivals",
        eyebrow: "New Arrivals",
        title: "The house's newest expressions.",
        description: "A concise edit of new compositions designed for a quiet, luxurious trail.",
        href: "/new-arrivals",
      },
      {
        id: "best-sellers",
        eyebrow: "Best Sellers",
        title: "Beloved signatures that define DEZARTI.",
        description: "Selected perfumes that introduce the house through its most desired signatures.",
        href: "/collections",
      },
    ],
    collectionsSection: {
      eyebrow: "Collections",
      title: "Explore Our Collections",
      description: "Discover DEZARTI through refined fragrance wardrobes, curated for different moods, rituals, signatures, and spaces.",
      tabs: {
        women: "Women",
        men: "Men",
        unisex: "Unisex",
        air: "AC & Ambient",
      },
      viewFull: {
        women: "View Women's Collection",
        men: "View Men's Collection",
        unisex: "View Unisex Collection",
        air: "View AC & Ambient Collection",
      },
    },
    about: {
      eyebrow: "About the House",
      title: "A house for lasting sensory identity.",
      text: "DEZARTI blends fragrance craft, editorial calm, and modern luxury storytelling for skin, spaces, and unforgettable moments.",
      cta: "Learn More",
      pageEyebrow: "The House of DEZARTI",
      pageTitle: "A perfume house shaped by calm, ritual, and rare materials.",
      pageText: "DEZARTI exists to transform scent into memory. Every composition is designed with architectural clarity, selected ingredients, and a contemporary global sensibility.",
      pillars: [
        {
          title: "Mission",
          text: "To craft perfumes and interior rituals that feel close, distinctive, and luxurious without excess.",
        },
        {
          title: "Vision",
          text: "To become an international fragrance house known for cinematic storytelling, quality, and timeless presence.",
        },
        {
          title: "Craft",
          text: "To work with precise balances, disciplined formulas, and slow design decisions until every detail feels placed.",
        },
      ],
    },
    contact: {
      eyebrow: "Private Consultation",
      title: "Let us compose something beautiful together.",
      text: "For personal fragrance consultations, ambient scenting projects, wholesale requests, and international partnerships.",
      homeEyebrow: "Contact",
      homeTitle: "A private consultation for scent and space.",
      homeText: "Contact DEZARTI for personal fragrance inquiries, wholesale requests, and ambient scenting.",
      service: "DEZARTI Private Service",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      phoneLabel: "Phone",
      locationLabel: "Location",
      location: "Dubai, United Arab Emirates",
      mapText: "Reserved space for a Google Map of the DEZARTI showroom or office.",
      businessHoursLabel: "Business Hours",
      businessHours: "Daily, 10 AM - 8 PM",
      form: {
        name: "Full name",
        email: "Email address",
        phone: "Phone / WhatsApp",
        message: "Tell us about your request",
        submit: "Send Inquiry",
      },
      status: {
        sending: "Sending your private inquiry...",
        success: "Your inquiry has been received. DEZARTI will contact you soon.",
        error: "We could not send the inquiry. Please use WhatsApp or email directly.",
      },
    },
    collectionPages: {
      collections: {
        eyebrow: "Collections",
        title: "An edited fragrance wardrobe with quiet precision.",
        description: "Browse DEZARTI perfumes and spatial fragrances through a calm visual journey toward the right feeling.",
      },
      men: {
        eyebrow: "Men's Fragrances",
        title: "Composed for calm strength and presence.",
        description: "Dark woods, polished leather, amber, oud, and mineral freshness for a modern masculine signature.",
      },
      women: {
        eyebrow: "Women's Fragrances",
        title: "Refined florals and soft signatures on skin.",
        description: "A polished selection of rose, jasmine, iris, silk musk, and soft woods for unforgettable moments.",
      },
      unisex: {
        eyebrow: "Unisex Fragrances",
        title: "Fragrance beyond classification.",
        description: "Amber, incense, tea, oud, spice, and musk in a quiet texture that moves fluidly between tastes.",
      },
      newArrivals: {
        eyebrow: "New Arrivals",
        title: "The latest expressions from DEZARTI.",
        description: "New perfumes and spatial rituals shaped with a calm, luxurious editorial eye.",
      },
      airFragrances: {
        eyebrow: "AC & Ambient Fragrances",
        title: "Interior fragrance for pure, polished spaces.",
        description: "Luxury rituals for air conditioning, homes, boutiques, suites, and spaces with a private identity.",
      },
    },
    product: {
      curatedEyebrow: "Curated Selection",
      curatedTitle: "Discover the collection.",
      completeEyebrow: "Complete the ritual",
      completeTitle: "Compositions close to this feeling.",
      details: "View details",
      inquire: "Ask on WhatsApp",
      related: "Related perfumes",
      usage: "How to Wear",
      longevity: "Longevity",
      projection: "Projection",
      feeling: "Feeling",
      topNotes: "Top Notes",
      heartNotes: "Heart Notes",
      baseNotes: "Base Notes",
      newBadge: "New Arrival",
      viewCollection: "View Collection",
      priceCurrency: "AED",
      projectionAmbient: "Ambient",
      projectionClear: "Clear and polished",
      projectionSoft: "Soft and close",
      longevityAmbient: "Long-lasting in the space",
      longevityHours: "hours",
    },
    globalStatement: {
      eyebrow: "Luxury Statement",
      title: "Designed for the exceptional.",
    },
    whatsapp: {
      generic: "Hello DEZARTI, I would like to inquire about your fragrances and services.",
      productPrefix: "Hello DEZARTI, I would like to inquire about",
      productConnector: "from",
    },
  },
  ar: {
    languageNames: { ar: "ع", en: "EN" },
    brand: {
      name: "DEZARTI",
      tagline: "فخامة تتجاوز العطر",
      footerText: "فخامة تتجاوز العطر. عطور، طقوس للمساحات، وهوية حسية مصاغة بعناية.",
    },
    nav: {
      byPath: {
        "/": "الرئيسية",
        "/collections": "المجموعات",
        "/men": "الرجال",
        "/women": "النساء",
        "/unisex": "للجنسين",
        "/new-arrivals": "وصل حديثاً",
        "/air-fragrances": "التكييف والجو",
        "/about": "من نحن",
        "/contact": "تواصل",
      },
      home: [
        { href: "/", label: "الرئيسية" },
        { href: "/#new-arrivals", label: "وصل حديثاً" },
        { href: "/#collections", label: "المجموعات" },
        { href: "/#about", label: "من نحن" },
        { href: "/#contact", label: "تواصل" },
      ],
    },
    hero: {
      eyebrow: "دار عطور فاخرة",
      title: "فخامة هادئة، مصاغة كذكرى.",
      text: "عطور مصممة للحظات تبقى في الذاكرة بهدوء وأناقة.",
      primaryCta: "استكشف المجموعة",
      secondaryCta: "اكتشف الحكاية",
    },
    homeSections: [
      {
        id: "new-arrivals",
        eyebrow: "وصل حديثاً",
        title: "الإصدارات الأحدث من الدار.",
        description: "اختيار مختصر من أحدث التركيبات المصممة لأثر فاخر وهادئ.",
        href: "/new-arrivals",
      },
      {
        id: "best-sellers",
        eyebrow: "الأكثر طلباً",
        title: "تواقيع محبوبة تعرّف عالم DEZARTI.",
        description: "عطور مختارة لسهولة الوصول إلى أكثر الروائح حضوراً وطلباً.",
        href: "/collections",
      },
    ],
    collectionsSection: {
      eyebrow: "المجموعات",
      title: "اكتشف مجموعاتنا",
      description: "اكتشف عالم DEZARTI من خلال خزائن عطرية راقية مصممة لأمزجة وطقوس وتواقيع ومساحات مختلفة.",
      tabs: {
        women: "النساء",
        men: "الرجال",
        unisex: "للجنسين",
        air: "التكييف والجو",
      },
      viewFull: {
        women: "عرض مجموعة النساء",
        men: "عرض مجموعة الرجال",
        unisex: "عرض مجموعة للجنسين",
        air: "عرض مجموعة التكييف والجو",
      },
    },
    about: {
      eyebrow: "من نحن",
      title: "دار لصناعة هوية حسية تبقى.",
      text: "تجمع DEZARTI بين الحرفة العطرية، الهدوء التحريري، وسردية الفخامة الحديثة لصناعة عطور للبشرة والمساحات واللحظات التي لا تُنسى.",
      cta: "تعرّف أكثر",
      pageEyebrow: "دار DEZARTI",
      pageTitle: "دار عطور تتشكل من الهدوء والطقس والخامات النادرة.",
      pageText: "توجد DEZARTI لتحويل الرائحة إلى ذاكرة. كل تركيبة تُصمم بوضوح معماري ومكونات مختارة وحس عالمي معاصر.",
      pillars: [
        {
          title: "الرسالة",
          text: "صناعة عطور وطقوس داخلية تشعر بالقرب والتميّز والفخامة من دون مبالغة.",
        },
        {
          title: "الرؤية",
          text: "أن تصبح DEZARTI دار عطور عالمية معروفة بالسرد السينمائي والجودة والحضور الخالد.",
        },
        {
          title: "الحِرفية",
          text: "العمل بتوازنات دقيقة وصيغ منضبطة وقرارات تصميمية بطيئة حتى تبدو كل تفصيلة في مكانها.",
        },
      ],
    },
    contact: {
      eyebrow: "استشارة خاصة",
      title: "لنبني شيئاً جميلاً معاً.",
      text: "لاستشارات العطور الشخصية، مشاريع تعطير المساحات، طلبات الجملة، والشراكات العالمية.",
      homeEyebrow: "تواصل معنا",
      homeTitle: "استشارة خاصة لعطرك ومساحتك.",
      homeText: "تواصل مع فريق DEZARTI للاستفسارات الشخصية، طلبات الجملة، وتعطير المساحات.",
      service: "خدمة DEZARTI الخاصة",
      emailLabel: "البريد",
      whatsappLabel: "واتساب",
      phoneLabel: "الهاتف",
      locationLabel: "الموقع",
      location: "دبي، الإمارات العربية المتحدة",
      mapText: "مساحة مخصصة لخريطة Google لمعرض أو مكتب DEZARTI.",
      businessHoursLabel: "ساعات العمل",
      businessHours: "يومياً، 10 صباحاً - 8 مساءً",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف / واتساب",
        message: "أخبرنا عن طلبك",
        submit: "إرسال الاستفسار",
      },
      status: {
        sending: "جارٍ إرسال استفسارك الخاص...",
        success: "تم استلام استفسارك. سيتواصل فريق DEZARTI معك قريباً.",
        error: "تعذر إرسال الاستفسار. يرجى استخدام واتساب أو البريد الإلكتروني مباشرة.",
      },
    },
    collectionPages: {
      collections: {
        eyebrow: "المجموعات",
        title: "خزانة عطرية منسقة بطابع تحريري.",
        description: "تصفح عطور DEZARTI ومعطرات المساحات من خلال تجربة بصرية هادئة تقودك إلى الإحساس المناسب.",
      },
      men: {
        eyebrow: "عطور الرجال",
        title: "مصاغة للهدوء والقوة والحضور.",
        description: "أخشاب داكنة، جلد مصقول، عنبر، عود، وانتعاش معدني لتوقيع رجالي معاصر.",
      },
      women: {
        eyebrow: "عطور النساء",
        title: "زهور راقية وتواقيع ناعمة على البشرة.",
        description: "مجموعة مصقولة من الورد والياسمين والسوسن والمسك الحريري والأخشاب الناعمة للحظات لا تُنسى.",
      },
      unisex: {
        eyebrow: "عطور للجنسين",
        title: "عطر يتجاوز التصنيف.",
        description: "عنبر، بخور، شاي، عود، توابل ومسك بنسيج هادئ يتحرك بسلاسة بين الأذواق.",
      },
      newArrivals: {
        eyebrow: "الإصدارات الجديدة",
        title: "أحدث تعبيرات DEZARTI.",
        description: "عطور وطقوس مساحات جديدة برؤية تحريرية فاخرة وهادئة.",
      },
      airFragrances: {
        eyebrow: "التكييف والجو",
        title: "عطر داخلي لمساحات نقية ومصقولة.",
        description: "طقوس فاخرة لتعطير التكييف والمنازل والبوتيكات والأجنحة والمساحات ذات الهوية الخاصة.",
      },
    },
    product: {
      curatedEyebrow: "اختيار منسق",
      curatedTitle: "اكتشف المجموعة.",
      completeEyebrow: "أكمل الطقس",
      completeTitle: "تركيبات قريبة من هذا الإحساس.",
      details: "عرض التفاصيل",
      inquire: "استفسر عبر واتساب",
      related: "عطور ذات صلة",
      usage: "طريقة الاستخدام",
      longevity: "الثبات",
      projection: "الفوحان",
      feeling: "الإحساس",
      topNotes: "النوتات العليا",
      heartNotes: "قلب العطر",
      baseNotes: "قاعدة العطر",
      newBadge: "إصدار جديد",
      viewCollection: "عرض المجموعة",
      priceCurrency: "درهم",
      projectionAmbient: "محيطي",
      projectionClear: "واضح ومصقول",
      projectionSoft: "ناعم وقريب",
      longevityAmbient: "انتشار طويل في المساحة",
      longevityHours: "ساعات",
    },
    globalStatement: {
      eyebrow: "بيان الفخامة",
      title: "صُممت للاستثنائي.",
    },
    whatsapp: {
      generic: "مرحباً DEZARTI، أود الاستفسار عن العطور والخدمات.",
      productPrefix: "مرحباً DEZARTI، أود الاستفسار عن",
      productConnector: "من",
    },
  },
} as const;

export function getLocale(locale: string): SupportedLocale {
  return locale === "en" ? "en" : "ar";
}

export function getDictionary(locale: string) {
  return translations[getLocale(locale)];
}

function productIndex(product: Product) {
  return Number(product.slug.split("-").at(-1) ?? "1") - 1;
}

export function getHomeProductSections(locale: string, products: Product[]) {
  const dictionary = getDictionary(locale);
  const sections = dictionary.homeSections as readonly {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    href: string;
  }[];

  return sections.map((section) => {
    if (section.id === "new-arrivals") {
      return { ...section, items: products.filter((product) => product.badge).slice(0, 4) };
    }

    if (section.id === "best-sellers") {
      return { ...section, items: [products[0], products[25], products[50], products[3]].filter(Boolean) };
    }

    return { ...section, items: [] };
  });
}

export function getProductDisplay(locale: string, product: Product) {
  const activeLocale = getLocale(locale);
  const dictionary = getDictionary(activeLocale);
  const index = productIndex(product);
  const priceNumber = product.price.match(/\d+/)?.[0] ?? "";

  if (activeLocale === "ar") {
    return {
      name: product.name,
      collection: categoryNameMap[product.category].ar,
      mood: product.mood,
      price: `${priceNumber} ${dictionary.product.priceCurrency}`,
      badge: product.badge ? dictionary.product.newBadge : undefined,
      family: product.family,
      story: product.story,
      usageRecommendation: product.usageRecommendation,
      notes: product.notes,
      longevity: product.longevity,
      projection: product.projection,
    };
  }

  const meta = englishProductMeta[product.category];
  const names = englishProductNames[product.category];
  const number = String(index + 1).padStart(2, "0");
  const longevity =
    product.category === "air"
      ? dictionary.product.longevityAmbient
      : `${8 + (index % 5)}-${10 + (index % 5)} ${dictionary.product.longevityHours}`;
  const projection =
    product.category === "air"
      ? dictionary.product.projectionAmbient
      : index % 2 === 0
        ? dictionary.product.projectionClear
        : dictionary.product.projectionSoft;

  return {
    name: `${names[index % names.length]} ${number}`,
    collection: categoryNameMap[product.category].en,
    mood: meta.mood,
    price: `${dictionary.product.priceCurrency} ${priceNumber}`,
    badge: product.badge ? dictionary.product.newBadge : undefined,
    family: meta.family,
    story: meta.story,
    usageRecommendation: meta.usageRecommendation,
    notes: meta.notes,
    longevity,
    projection,
  };
}

export function whatsappLink(locale: string, product?: Product) {
  const dictionary = getDictionary(locale);
  const base = "https://wa.me/971500000000";
  const text = product
    ? `${dictionary.whatsapp.productPrefix} ${getProductDisplay(locale, product).name} ${dictionary.whatsapp.productConnector} ${getProductDisplay(locale, product).collection}.`
    : dictionary.whatsapp.generic;

  return `${base}?text=${encodeURIComponent(text)}`;
}
