export type Locale = "ar" | "en";

export type Product = {
  slug: string;
  name: string;
  arabicName: string;
  category: "men" | "women" | "unisex" | "air";
  collection: string;
  mood: string;
  price: string;
  image: string;
  badge?: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  family: string;
  longevity: string;
  projection: string;
  usageRecommendation: string;
  story: string;
};

export const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/collections", label: "المجموعات" },
  { href: "/men", label: "عطور الرجال" },
  { href: "/women", label: "عطور النساء" },
  { href: "/unisex", label: "عطور للجنسين" },
  { href: "/new-arrivals", label: "الإصدارات الجديدة" },
  { href: "/air-fragrances", label: "معطرات الجو" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "اتصل بنا" },
];

const categoryImages: Record<Product["category"], string[]> = {
  men: [
    "/campaign/dezarti-men-red-tobacco.png",
    "/campaign/dezarti-good-girl.png",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85",
  ],
  women: [
    "/campaign/dezarti-women-mahajad.png",
    "/campaign/dezarti-elli-notes.png",
    "https://images.unsplash.com/photo-1615634262417-cb64bb3b2f8f?auto=format&fit=crop&w=1200&q=85",
  ],
  unisex: [
    "/campaign/dezarti-unisex-nally.png",
    "/campaign/dezarti-miss-grasse.png",
    "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1200&q=85",
  ],
  air: [
    "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&w=1200&q=85",
  ],
};

const collectionMeta: Record<Product["category"], {
  collection: string;
  family: string;
  mood: string;
  story: string;
  usageRecommendation: string;
  notes: Product["notes"];
}> = {
  men: {
    collection: "مجموعة عطور الرجال",
    family: "خشبي تبغي",
    mood: "تبغ أحمر، أخشاب داكنة، جلد دافئ وحضور عميق",
    story: "توقيع رجالي مصقول يوازن بين التبغ الحار والأخشاب الهادئة والأثر الجلدي الفاخر.",
    usageRecommendation: "مثالي للمساء، الاجتماعات الخاصة، واللحظات التي تتطلب حضوراً ثابتاً.",
    notes: {
      top: ["قهوة", "لوز", "برغموت"],
      heart: ["تبغ أحمر", "قرفة", "أرز"],
      base: ["فانيلا", "كاكاو", "صندل"],
    },
  },
  women: {
    collection: "مجموعة عطور النساء",
    family: "زهري مخملي",
    mood: "ورد داكن، لؤلؤ، مخمل أحمر وأناقة مسائية",
    story: "تركيبة أنثوية غنية تتحرك بين الورد والياسمين والمسك الكريمي بلمسة مسرحية هادئة.",
    usageRecommendation: "يناسب الأمسيات الراقية، المناسبات الخاصة، واللحظات التي تحتاج إلى أثر ناعم لا يُنسى.",
    notes: {
      top: ["برغموت", "خوخ أبيض", "كمثرى"],
      heart: ["ياسمين سامباك", "مسك الروم", "ورد"],
      base: ["فانيلا", "تونكا", "صندل"],
    },
  },
  unisex: {
    collection: "مجموعة عطور للجنسين",
    family: "عنبر جلدي",
    mood: "عنبر، جلد ناعم، ورد داكن وتوتر أنيق",
    story: "عطر يتجاوز التصنيف، يجمع دفء العنبر مع نعومة الجلد وعمق الأخشاب في تركيبة حميمية.",
    usageRecommendation: "للاستخدام اليومي الفاخر، السفر، والأمسيات التي تحتاج إلى توقيع شخصي لا يتبع القواعد.",
    notes: {
      top: ["هيل", "فلفل وردي", "برغموت"],
      heart: ["ورد", "شاي أسود", "لبان"],
      base: ["عنبر", "جلد", "مسك أبيض"],
    },
  },
  air: {
    collection: "مجموعة معطرات الجو",
    family: "منعش عطري",
    mood: "هواء فندقي، كتان بارد، وهدوء مصقول",
    story: "معطر تكييف فاخر صمم لتحويل المساحات الداخلية إلى بيئات هادئة ونقية وراقية.",
    usageRecommendation: "للمنازل، البوتيكات، الصالونات، الأجنحة الفندقية، والمداخل ذات الهوية الخاصة.",
    notes: {
      top: ["ليمون إيطالي", "ألدهيدات", "ورق النعناع"],
      heart: ["شاي أبيض", "ورق التين", "سوسن"],
      base: ["مسك نظيف", "أرز", "عنبر ناعم"],
    },
  },
};

const productNames: Record<Product["category"], string[]> = {
  men: [
    "ريد توباكو", "نوار إمبريال", "عود أوبسكور", "سافرون وود", "ليذر نوبل",
    "أمبر نايت", "سيجار بلانك", "فيتيفر رويال", "توباكو دارك", "موسك فورج",
    "كافيه نوار", "إيبوني وود", "سيدار ستركت", "لابدانوم 26", "أطلس عود",
    "إمبر سموك", "نايت بارون", "بلاك إيريس", "تونكا ريتش", "أومبر مينرال",
    "رويال تريل", "دارك سويد", "أكورد 19", "أمبر كراون", "عود ريزرف",
  ],
  women: [
    "مهاجاد", "فلفت روز", "بلان مينوي", "روز كوتور", "جاسمين بيرل",
    "أوريس سيلك", "فانيلا نوير", "مسك لوميير", "بيتش فلور", "لونا روز",
    "توبروز بلان", "سولاي فلور", "روز دو سوار", "كشمير بلوم", "لؤلؤة 03",
    "إيفوار موسك", "نارسيس فيل", "داليا روج", "فلور أمبر", "ساندال روز",
    "ميراج بلان", "فيوليت دور", "ماغنوليا سيلك", "روزا ألت", "أورورا فيل",
  ],
  unisex: [
    "نالي", "عنبر سيرين", "عود لوميير", "أمبر ريتوال", "تي نوير",
    "لابدانوم سيلك", "سولت وود", "إنسنس بلان", "باتشولي فيل", "أمبر كشمير",
    "روز أند سموك", "نيرولي مينرال", "تونكا سكاي", "عود ثيرابي", "هيل نوار",
    "إيريس سانتال", "مسك أوبال", "فرانكنسنس 12", "أمبر فيغ", "سويد بلانك",
    "سيرين وود", "روز كارداموم", "فيتيفر سكن", "عود أورا", "بلانك أوديسي",
    "كافيه أمبر", "صندل مينويت", "إكليبس موسك",
  ],
  air: ["سييلو إير", "هوتيل بلان", "لينن كولد", "أمبر سبيس", "وايت تي"],
};

function createCollection(category: Product["category"], count: number): Product[] {
  const meta = collectionMeta[category];
  const images = categoryImages[category];
  const names = productNames[category];

  return Array.from({ length: count }, (_, index) => {
    const name = names[index % names.length];
    const number = String(index + 1).padStart(2, "0");

    return {
      slug: `${category}-${index + 1}`,
      name: `${name} ${number}`,
      arabicName: `${name} ${number}`,
      category,
      collection: meta.collection,
      mood: meta.mood,
      price: `${category === "air" ? 240 + (index % 4) * 20 : 520 + (index % 8) * 35} درهم`,
      image: images[index % images.length],
      badge: index < 3 ? "إصدار جديد" : undefined,
      notes: meta.notes,
      family: meta.family,
      longevity: category === "air" ? "انتشار طويل في المساحة" : `${8 + (index % 5)}-${10 + (index % 5)} ساعات`,
      projection: category === "air" ? "محيطي" : index % 2 === 0 ? "واضح ومصقول" : "ناعم وقريب",
      usageRecommendation: meta.usageRecommendation,
      story: meta.story,
    };
  });
}

export const products: Product[] = [
  ...createCollection("men", 25),
  ...createCollection("women", 25),
  ...createCollection("unisex", 28),
  ...createCollection("air", 10),
];

export const collectionCards = [
  {
    title: "عطور الرجال",
    href: "/men",
    copy: "أخشاب مصقولة، عنبر داكن، وتوقيع رجالي هادئ الحضور.",
    image: "/campaign/dezarti-men-red-tobacco.png",
  },
  {
    title: "عطور النساء",
    href: "/women",
    copy: "زهور راقية، مسك مضيء، وأنوثة مصاغة كقطعة كوتور.",
    image: "/campaign/dezarti-women-mahajad.png",
  },
  {
    title: "عطور للجنسين",
    href: "/unisex",
    copy: "بخور وعنبر وشاي وعود في طقوس عطرية تتجاوز التصنيف.",
    image: "/campaign/dezarti-unisex-nally.png",
  },
  {
    title: "معطرات الجو",
    href: "/air-fragrances",
    copy: "عطور داخلية للتكييف، الصالونات، الأجنحة، والمنازل الراقية.",
    image: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&w=1200&q=85",
  },
];

export function withLocale(locale: string, href: string) {
  return `/${locale}${href === "/" ? "" : href}`;
}

export function whatsappLink(product?: Product) {
  const base = "https://wa.me/971500000000";
  const text = product
    ? `مرحباً DEZARTI، أود الاستفسار عن ${product.name} من ${product.collection}.`
    : "مرحباً DEZARTI، أود الاستفسار عن العطور والخدمات.";

  return `${base}?text=${encodeURIComponent(text)}`;
}
