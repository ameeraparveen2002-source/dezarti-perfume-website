import type { Product } from "@/lib/dezarti-data";
import {
  nameTranslations,
  noteTranslations,
  familyTranslations,
  usageTranslations,
} from "./note-translations";

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
    en: "Air Fresheners",
  },
} as const;

export const translations = {
  en: {
    languageNames: { en: "English", ar: "العربية" },
    brand: {
      name: "DEZARTI",
      tagline: "Luxury Beyond Fragrance",
      footerText: "Dezarati Perfume is a luxury fragrance brand based in Qatar, offering premium perfumes and ambient fragrances crafted for elegance, sophistication, and long-lasting impressions.",
    },
    nav: {
      byPath: {
        "/": "Home",
        "/collections": "Collections",
        "/men": "Men",
        "/women": "Women",
        "/unisex": "Unisex",
        "/new-arrivals": "New Arrivals",
        "/air-fragrances": "Air Fresheners",
        "/about": "About",
        "/contact": "Contact",
      },
      collectionsDropdown: {
        women: "Women's Perfumes",
        men: "Men's Perfumes",
        unisex: "Unisex Perfumes",
        air: "Air Fresheners",
      },
      home: [
        { href: "/", label: "Home" },
        { href: "/#new-arrivals", label: "New Arrivals" },
        { href: "/#collections", label: "Collections" },
        { href: "/collections/ac-ambient", label: "Air Fresheners" },
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
      },
      viewFull: {
        women: "View Women's Collection",
        men: "View Men's Collection",
        unisex: "View Unisex Collection",
      },
    },
    acAmbientSection: {
      eyebrow: "Air Fresheners",
      title: "Air Fresheners",
      description: "Luxury fragrances designed for homes, offices, hotels, lounges, air conditioning systems, and premium environments.",
      viewFull: "View Full Collection",
    },
    about: {
      eyebrow: "About Us",
      title: "Luxury fragrances from Qatar, crafted for lasting impressions.",
      text: "Dezarati Perfume is a luxury fragrance brand based in Qatar, offering premium perfumes and ambient fragrances crafted to deliver elegance, sophistication, and long-lasting impressions. Our collection is designed for individuals who appreciate quality, refinement, and timeless scents that enhance everyday experiences.",
      cta: "Learn More",
      pageEyebrow: "About Dezarati Perfume",
      pageTitle: "A Qatar-based luxury fragrance house shaped by elegance and refinement.",
      pageText: "Dezarati Perfume is a luxury fragrance brand based in Qatar, offering premium perfumes and ambient fragrances crafted to deliver elegance, sophistication, and long-lasting impressions. Our collection is designed for individuals who appreciate quality, refinement, and timeless scents that enhance everyday experiences.",
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
      emailAddress: "dezaratiperfume@gmail.com",
      whatsappNumber: "97433667377",
      whatsappDisplay: "+974 33667377",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      phoneLabel: "Phone",
      locationLabel: "Location",
      location: "Building Number 17, 41 Betteel Street, Doha, Qatar",
      addressLines: ["Building Number 17", "41 Betteel Street", "Doha, Qatar"],
      mapText: "Building Number 17, 41 Betteel Street, Doha, Qatar",
      mapUrl: "https://maps.app.goo.gl/stRwxdLfWs5uyrqs5",
      mapEmbedUrl: "https://maps.google.com/maps?q=Building%20Number%2017%2C%2041%20Betteel%20Street%2C%20Doha%2C%20Qatar&output=embed",
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
        eyebrow: "Air Fresheners",
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
      price: "Price",
      fragranceStory: "Fragrance Story",
      ingredients: "Ingredients",
      productDetails: "Product Details",
      topNotes: "Top Notes",
      heartNotes: "Heart Notes",
      baseNotes: "Base Notes",
      newBadge: "New Arrival",
      viewCollection: "View Collection",
      priceCurrency: "QAR",
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
    languageNames: { en: "English", ar: "العربية" },
    brand: {
      name: "DEZARTI",
      tagline: "فخامة تتجاوز العطر",
      footerText: "دزاراتي للعطور علامة عطرية فاخرة مقرها قطر، تقدم عطوراً راقية وروائح للمساحات مصممة للأناقة والرقي والانطباعات طويلة الأثر.",
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
      collectionsDropdown: {
        women: "عطور النساء",
        men: "عطور الرجال",
        unisex: "عطور للجنسين",
        air: "عطور التكييف والجو",
      },
      home: [
        { href: "/", label: "الرئيسية" },
        { href: "/#new-arrivals", label: "وصل حديثاً" },
        { href: "/#collections", label: "المجموعات" },
        { href: "/collections/ac-ambient", label: "التكييف والجو" },
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
      },
      viewFull: {
        women: "عرض مجموعة النساء",
        men: "عرض مجموعة الرجال",
        unisex: "عرض مجموعة للجنسين",
      },
    },
    acAmbientSection: {
      eyebrow: "التكييف والجو",
      title: "عطور التكييف والجو",
      description: "عطور فاخرة مصممة للمنازل، المكاتب، الفنادق، الصالات، وأنظمة التكييف والمساحات الراقية.",
      viewFull: "عرض المجموعة الكاملة",
    },
    about: {
      eyebrow: "من نحن",
      title: "عطور فاخرة من قطر، مصممة لانطباعات تدوم.",
      text: "دزاراتي للعطور علامة عطرية فاخرة مقرها قطر، تقدم عطوراً راقية وروائح للمساحات مصممة لتمنح الأناقة والرقي والانطباعات طويلة الأثر. صُممت مجموعتنا للأشخاص الذين يقدّرون الجودة والتهذيب والروائح الخالدة التي ترتقي بالتجارب اليومية.",
      cta: "تعرّف أكثر",
      pageEyebrow: "عن دزاراتي للعطور",
      pageTitle: "دار عطور فاخرة مقرها قطر، مصاغة بالأناقة والتهذيب.",
      pageText: "دزاراتي للعطور علامة عطرية فاخرة مقرها قطر، تقدم عطوراً راقية وروائح للمساحات مصممة لتمنح الأناقة والرقي والانطباعات طويلة الأثر. صُممت مجموعتنا للأشخاص الذين يقدّرون الجودة والتهذيب والروائح الخالدة التي ترتقي بالتجارب اليومية.",
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
      emailAddress: "dezaratiperfume@gmail.com",
      whatsappNumber: "97433667377",
      whatsappDisplay: "+974 33667377",
      emailLabel: "البريد",
      whatsappLabel: "واتساب",
      phoneLabel: "الهاتف",
      locationLabel: "الموقع",
      location: "مبنى رقم 17، شارع بتيل 41، الدوحة، قطر",
      addressLines: ["مبنى رقم 17", "شارع بتيل 41", "الدوحة، قطر"],
      mapText: "مبنى رقم 17، شارع بتيل 41، الدوحة، قطر",
      mapUrl: "https://maps.app.goo.gl/stRwxdLfWs5uyrqs5",
      mapEmbedUrl: "https://maps.google.com/maps?q=Building%20Number%2017%2C%2041%20Betteel%20Street%2C%20Doha%2C%20Qatar&output=embed",
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
      price: "السعر",
      fragranceStory: "قصة العطر",
      ingredients: "المكونات",
      productDetails: "تفاصيل المنتج",
      topNotes: "النوتات العليا",
      heartNotes: "قلب العطر",
      baseNotes: "قاعدة العطر",
      newBadge: "إصدار جديد",
      viewCollection: "عرض المجموعة",
      priceCurrency: "QAR",
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
      const perfumes = products.filter((product) => product.category !== "air" && product.badge).slice(0, 4);
      const airProducts = products.filter((product) => product.category === "air").slice(0, 2);
      return { ...section, items: [...perfumes, ...airProducts] };
    }

    if (section.id === "best-sellers") {
      return { ...section, items: [products[0], products[25], products[50], products[3]].filter(Boolean) };
    }

    return { ...section, items: [] };
  });
}

function translateNote(note: string, locale: SupportedLocale): string {
  const cleanNote = note.trim();
  const trans = noteTranslations[cleanNote];
  if (trans) {
    return trans[locale];
  }
  return cleanNote;
}

function translateFamily(family: string, locale: SupportedLocale): string {
  const cleanFamily = family.trim();
  const trans = familyTranslations[cleanFamily];
  if (trans) {
    return trans[locale];
  }
  return cleanFamily;
}

function translateProductName(name: string, locale: SupportedLocale, fallbackArabic?: string): string {
  const match = name.match(/^(.*?)\s*(\d+)$/);
  const baseName = match ? match[1] : name;
  const numSuffix = match ? ` ${match[2]}` : "";
  
  const cleanBase = baseName.trim();
  const trans = nameTranslations[cleanBase];
  if (trans) {
    return `${trans[locale]}${numSuffix}`;
  }
  return locale === "ar" && fallbackArabic ? `${fallbackArabic.trim()}` : name;
}

function translateMood(mood: string, locale: SupportedLocale): string {
  if (locale === "en") {
    if (mood.includes("تبغ أحمر")) return "Red tobacco, dark woods, warm leather and deep presence";
    if (mood.includes("ورد داكن")) return "Dark rose, pearl, red velvet and evening elegance";
    if (mood.includes("عنبر، جلد ناعم")) return "Amber, soft leather, dark rose and elegant tension";
    if (mood.includes("هواء فندقي")) return "Hotel air, cool linen, and polished calm";
    return mood;
  } else {
    const parts = mood.split(",").map(p => p.trim());
    const translatedParts = parts.map(p => translateNote(p, "ar"));
    return translatedParts.join("، ");
  }
}

function generateLocalizedStory(
  locale: SupportedLocale,
  category: Product["category"],
  name: string,
  notes: Product["notes"]
): string {
  if (name.includes("IMAGINATION") || name.includes("إيماجينيشن")) {
    if (locale === "en") {
      return "IMAGINATION 37 is an amber citrus masterpiece that captures the infinite beauty of the world. It opens with a radiant burst of Calabrian bergamot, citron, and Sicilian orange, evoking the crispness of a Mediterranean morning. The heart unfolds with the warm, unexpected spice of Ceylon cinnamon and Nigerian ginger, wrapped in the delicate floral essence of Tunisian neroli. The fragrance settles into a sublime, long-lasting dry down of ambroxan, precious Chinese black tea, guaiac wood, and sacred olibanum—a contemporary trail of rare elegance and silent power.";
    } else {
      return "إيماجينيشن 37 هي تحفة فنية من الحمضيات العنبرية تجسد الجمال اللامتناهي للعالم. يفتتح العطر بنفحات مشرقة من برغموت كالابريا، الأترج، والبرتقال الصقلي، مما يعيد إلى الأذهان نسيم الصباح المتوسطي المنعش. ينبض قلب العطر بنسمات دافئة وغير متوقعة من قرفة سيلان والزنجبيل النيجيري، مغلفة بجوهر زهر النيرولي التونسي الرقيق. يستقر العطر على قاعدة فاخرة تدوم طويلاً من الأمبروكسان، الشاي الصيني الأسود الثمين، خشب الغاياك، واللبان المقدس—ليترك أثراً معاصراً من الأناقة النادرة والقوة الصامتة.";
    }
  }

  const top = notes.top.slice(0, 3).map(n => translateNote(n, locale)).join(locale === "ar" ? "، " : ", ");
  const heart = notes.heart.slice(0, 3).map(n => translateNote(n, locale)).join(locale === "ar" ? "، " : ", ");
  const base = notes.base.slice(0, 3).map(n => translateNote(n, locale)).join(locale === "ar" ? "، " : ", ");

  if (locale === "en") {
    if (category === "air") {
      return `${name} introduces the space with ${top}, softened by ${heart}. A composed base of ${base} gives the room a clean, polished atmosphere without heaviness.`;
    }
    return `${name} opens with ${top}, then moves into ${heart}. The dry down rests on ${base}, leaving a refined trail with quiet depth and polished elegance.`;
  } else {
    if (category === "air") {
      return `يقدم عطر ${name} مساحتك بنوتات الـ ${top}، الملطفة بـ ${heart}. وتمنح قاعدة متسقة من ${base} الغرفة جواً نظيفاً ومصقولاً دون ثقل.`;
    }
    return `يبدأ عطر ${name} بنوتات الـ ${top}، ثم ينتقل إلى قلب عطر غني بـ ${heart}. ويستقر عند القاعدة على ${base}، تاركاً أثراً راقياً بعمق هادئ وأناقة مصقولة.`;
  }
}

function getLocalizedProductDetails(locale: SupportedLocale, product: Product) {
  if (locale === "en") return product.productDetails;

  if (product.category === "air") {
    return ["معطر جو", "عطر للتكييف والجو", "للمنازل والمكاتب والفنادق والصالات وأنظمة التكييف", "50 QAR"];
  }

  return ["عطر فاخر", "عطر شخصي", "لطقوس عطرية شخصية", "150 QAR"];
}

export function getProductDisplay(locale: string, product: Product) {
  const activeLocale = getLocale(locale);
  const dictionary = getDictionary(activeLocale);
  const price = product.category === "air" ? "50 QAR" : "150 QAR";

  const translatedName = translateProductName(product.name, activeLocale, product.arabicName);
  
  // Translate notes
  const translatedNotes = {
    top: product.notes.top.map(n => translateNote(n, activeLocale)),
    heart: product.notes.heart.map(n => translateNote(n, activeLocale)),
    base: product.notes.base.map(n => translateNote(n, activeLocale)),
  };

  // Translate family & usage
  const familyText = translateFamily(product.family, activeLocale);
  const usageText = usageTranslations[product.usageRecommendation]
    ? usageTranslations[product.usageRecommendation][activeLocale]
    : product.usageRecommendation;

  // Translate mood & story
  const moodText = translateMood(product.mood, activeLocale);
  const storyText = generateLocalizedStory(activeLocale, product.category, translatedName, product.notes);

  // Translate longevity
  let longevityText = "";
  if (product.category === "air") {
    longevityText = dictionary.product.longevityAmbient;
  } else {
    const match = product.longevity.match(/(\d+-\d+)/);
    const range = match ? match[1] : "8-10";
    longevityText = `${range} ${dictionary.product.longevityHours}`;
  }

  // Translate projection
  let projectionText = "";
  if (product.category === "air") {
    projectionText = dictionary.product.projectionAmbient;
  } else if (product.projection === "واضح ومصقول" || product.projection === "clear" || product.projection === "Clear and polished") {
    projectionText = dictionary.product.projectionClear;
  } else {
    projectionText = dictionary.product.projectionSoft;
  }

  return {
    name: translatedName,
    collection: categoryNameMap[product.category][activeLocale],
    mood: moodText,
    price,
    badge: product.badge ? dictionary.product.newBadge : undefined,
    family: familyText,
    story: storyText,
    usageRecommendation: usageText,
    notes: translatedNotes,
    ingredients: product.ingredients.map(i => translateNote(i, activeLocale)),
    productDetails: getLocalizedProductDetails(activeLocale, product),
    longevity: longevityText,
    projection: projectionText,
  };
}

export function whatsappLink(locale: string, product?: Product) {
  const dictionary = getDictionary(locale);
  const base = `https://wa.me/${dictionary.contact.whatsappNumber}`;
  const text = product
    ? `${dictionary.whatsapp.productPrefix} ${getProductDisplay(locale, product).name} ${dictionary.whatsapp.productConnector} ${getProductDisplay(locale, product).collection}.`
    : dictionary.whatsapp.generic;

  return `${base}?text=${encodeURIComponent(text)}`;
}
