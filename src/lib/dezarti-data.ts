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
  fragranceImage?: string;
  badge?: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  ingredients: string[];
  family: string;
  longevity: string;
  projection: string;
  usageRecommendation: string;
  productDetails: string[];
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
    "/campaign/women/dezarti-women-page-1.png",
    "/campaign/women/dezarti-women-page-3.png",
    "/campaign/women/dezarti-women-page-5.png",
    "/campaign/women/dezarti-women-page-7.png",
    "/campaign/women/dezarti-women-page-9.png",
    "/campaign/women/dezarti-women-page-11.png",
    "/campaign/women/dezarti-women-page-13.png",
    "/campaign/women/dezarti-women-page-15.png",
    "/campaign/women/dezarti-women-page-17.png",
    "/campaign/women/dezarti-women-page-19.png",
    "/campaign/women/dezarti-women-page-21.png",
    "/campaign/women/dezarti-women-page-23.png",
    "/campaign/women/dezarti-women-page-25.png",
    "/campaign/women/dezarti-women-page-27.png",
    "/campaign/women/dezarti-women-page-29.png",
    "/campaign/women/dezarti-women-page-31.png",
    "/campaign/women/dezarti-women-page-33.png",
    "/campaign/women/dezarti-women-page-35.png",
    "/campaign/women/dezarti-women-page-37.jpg",
    "/campaign/women/dezarti-women-page-39.png",
    "/campaign/women/dezarti-women-page-41.png",
    "/campaign/women/dezarti-women-page-43.png",
    "/campaign/women/dezarti-women-page-45.png",
    "/campaign/women/dezarti-women-page-47.png",
    "/campaign/women/dezarti-women-page-49.png",
  ],
  women: [
    "/campaign/men/dezarti-men-page-2.png",
    "/campaign/men/dezarti-men-page-4.png",
    "/campaign/men/dezarti-men-page-6.png",
    "/campaign/men/dezarti-men-page-8.png",
    "/campaign/men/dezarti-men-page-10.png",
    "/campaign/men/dezarti-men-page-12.png",
    "/campaign/men/dezarti-men-page-14.png",
    "/campaign/men/dezarti-men-page-16.png",
    "/campaign/men/dezarti-men-page-18.png",
    "/campaign/men/dezarti-men-page-20.png",
    "/campaign/men/dezarti-men-page-22.png",
    "/campaign/men/dezarti-men-page-24.png",
    "/campaign/men/dezarti-men-page-26.png",
    "/campaign/men/dezarti-men-page-28.png",
    "/campaign/men/dezarti-men-page-30.png",
    "/campaign/men/dezarti-men-page-32.png",
    "/campaign/men/dezarti-men-page-34.png",
    "/campaign/men/dezarti-men-page-36.png",
    "/campaign/men/dezarti-men-page-38.png",
    "/campaign/men/dezarti-men-page-40.png",
    "/campaign/men/dezarti-men-page-42.png",
    "/campaign/men/dezarti-men-page-44.png",
    "/campaign/men/dezarti-men-page-46.png",
    "/campaign/men/dezarti-men-page-48.png",
    "/campaign/men/dezarti-men-page-50.png",
  ],
  unisex: [
    "/campaign/unisex/dezarti-unisex-page-2.png",
    "/campaign/unisex/dezarti-unisex-page-4.png",
    "/campaign/unisex/dezarti-unisex-page-6.png",
    "/campaign/unisex/dezarti-unisex-page-8.png",
    "/campaign/unisex/dezarti-unisex-page-10.png",
    "/campaign/unisex/dezarti-unisex-page-12.png",
    "/campaign/unisex/dezarti-unisex-page-16.png",
    "/campaign/unisex/dezarti-unisex-page-22.png",
    "/campaign/unisex/dezarti-unisex-page-26.png",
    "/campaign/unisex/dezarti-unisex-page-30.png",
    "/campaign/unisex/dezarti-unisex-page-32.png",
    "/campaign/unisex/dezarti-unisex-page-34.png",
    "/campaign/unisex/dezarti-unisex-page-36.png",
    "/campaign/unisex/dezarti-unisex-page-38.png",
    "/campaign/unisex/dezarti-unisex-page-40.png",
    "/campaign/unisex/dezarti-unisex-page-42.png",
    "/campaign/unisex/dezarti-unisex-page-50.png",
  ],
  air: [
    "/campaign/air/dezarti-air-home.png",
    "/campaign/air/dezarti-air-sensual.png",
    "/campaign/air/dezarti-air-libre.png",
    "/campaign/air/dezarti-air-escada-taj.png",
    "/campaign/air/dezarti-air-organza.png",
    "/campaign/air/dezarti-air-lavander.png",
    "/campaign/air/dezarti-air-musk.png",
    "/campaign/air/dezarti-air-lavander-300ml.png",
    "/campaign/air/dezarti-air-irish-leather.png",
    "/campaign/air/dezarti-air-flora.png",
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
    "MY WAY", "MAHAJAD", "BACARAT", "PRINCE", "TOBACCO VANILLE",
    "IRISH LEATHER", "SAVAGE", "REPTILE", "TIGER", "CAVALY",
    "APRES", "OUDI", "OUD TOBACCO", "AFGAN", "G&Y",
    "BRITISH LEATHER", "SMART", "NEW YORK", "IMAGINATION", "JARA",
    "HOMME", "SCANDAL MAN", "DARK SAFFRON", "VALLY", "SENSUAL OUD",
  ],
  women: [
    "LIBRE", "MISS GRASSE", "ALIENN", "IDOLLE", "ELLI",
    "ADORE", "FOREVER", "GOOD GIRL", "PATCHOULI", "MARSH",
    "TOP", "LAVANDER", "RED TOBACCO", "OPIUM", "ROMA",
    "HER", "FLORA", "NEW YORK DREAM", "PACIFIC", "POUR HOMME",
    "COCO", "SCANDAL RED", "COMETE", "WAVE-CHILLED", "GIRL BLUSH",
  ],
  unisex: [
    "نالي", "عنبر سيرين", "عود لوميير", "أمبر ريتوال", "تي نوير",
    "لابدانوم سيلك", "سولت وود", "إنسنس بلان", "باتشولي فيل", "أمبر كشمير",
    "روز أند سموك", "نيرولي مينرال", "تونكا سكاي", "عود ثيرابي", "هيل نوار",
    "إيريس سانتال", "مسك أوبال", "فرانكنسنس 12", "أمبر فيغ", "سويد بلانك",
    "سيرين وود", "روز كارداموم", "فيتيفر سكن", "عود أورا", "بلانك أوديسي",
    "كافيه أمبر", "صندل مينويت", "إكليبس موسك",
  ],
  air: ["HOME", "SENSUAL", "LIBRE", "ESCADA TAJ", "ORGANZA", "LAVENDER", "MUSK", "PARIS HILTON", "IRISH LEATHER", "FLORA"],
};

const airFragranceImages: Record<string, string> = {
  "IRISH LEATHER": "/campaign/ingredient-air/dezarti-air-irish-leather.png",
  HOME: "/campaign/ingredient-air/dezarti-air-home.png",
  "ESCADA TAJ": "/campaign/ingredient-air/dezarti-air-escada-taj.png",
  "PARIS HILTON": "/campaign/ingredient-air/dezarti-air-paris-hilton.png",
  LAVENDER: "/campaign/ingredient-air/dezarti-air-lavender.png",
  FLORA: "/campaign/ingredient-air/dezarti-air-flora.png",
  MUSK: "/campaign/ingredient-air/dezarti-air-musk.png",
  LIBRE: "/campaign/ingredient-air/dezarti-air-libre.png",
  ORGANZA: "/campaign/ingredient-air/dezarti-air-organza.png",
  SENSUAL: "/campaign/ingredient-air/dezarti-air-sensual.png",
};

type PerfumeProfile = {
  name: string;
  notes: Product["notes"];
};

const perfumeProfiles: Record<number, PerfumeProfile> = {
  1: { name: "MY WAY", notes: { top: ["Calabrian Bergamot", "Egyptian Orange Blossom"], heart: ["Indian Tuberose", "Jasmine"], base: ["Virginia Cedarwood", "Madagascan Vanilla", "White Musk"] } },
  2: { name: "LIBRE", notes: { top: ["Tangerine", "Bergamot", "Lavender"], heart: ["Jasmine Sambac", "Orange Blossom", "Orchid Accord"], base: ["Tonka Bean", "Vanilla", "Ambergris", "Vetiver"] } },
  3: { name: "MAHAJAD", notes: { top: ["Blackcurrant", "Pomegranate", "Spearmint Orpur"], heart: ["Hibiscus", "Hibiscus Tea", "Damask Rose Absolute Orpur", "Ambrette Seed Absolute", "Cinnamon Orpur"], base: ["Vanilla Absolute Orpur", "Vanilla Orchid", "Leather"] } },
  4: { name: "MISS GRASSE", notes: { top: ["Iris", "Peony", "Lily-of-the-Valley"], heart: ["Apricot", "Rose", "Peach"], base: ["Vanilla", "Musk", "Tonka Bean", "Benzoin", "Sandalwood"] } },
  5: { name: "BACARAT", notes: { top: ["Jasmine", "Saffron", "Orange", "Marigold"], heart: ["Ambroxan", "Evernyl"], base: ["Cedarwood", "Ambergris", "Fir Balsam"] } },
  6: { name: "ALIENN", notes: { top: ["Sambac Jasmine"], heart: ["Cashmeran Wood"], base: ["White Amber"] } },
  7: { name: "PRINCE", notes: { top: ["Mint", "Mandarin Orange", "Grapefruit"], heart: ["Cinnamon", "Rose", "Spices"], base: ["Leather", "White Wood", "Patchouli", "Amber"] } },
  8: { name: "IDOLLE", notes: { top: ["Pear", "Bergamot", "Mandarin"], heart: ["Rose (Turkish Rose, Centifolia Rose, Rose Absolute)", "Jasmine"], base: ["White Musk", "Vanilla"] } },
  9: { name: "TOBACCO VANILLE", notes: { top: ["Tobacco Leaf", "Spices"], heart: ["Tonka Bean", "Tobacco Flower", "Vanilla", "Cocoa"], base: ["Dry Fruit Accord", "Woods"] } },
  10: { name: "ELLI", notes: { top: ["Orange Blossom"], heart: ["Jasmine", "Patchouli"], base: ["Cedarwood", "Rose Honey"] } },
  11: { name: "IRISH LEATHER", notes: { top: ["Pink Pepper", "Mandarin", "Juniper Berry"], heart: ["Iris", "Clary Sage", "Green Mate"], base: ["Amberwood", "Leather", "Tonka Bean"] } },
  12: { name: "ADORE", notes: { top: ["Bergamot", "Pear", "Melon", "Peach", "Mandarin"], heart: ["Jasmine", "Freesia", "Magnolia", "Violet", "Orchid", "Rose"], base: ["Musk", "Vanilla", "Blackberry", "Cedarwood"] } },
  13: { name: "SAVAGE", notes: { top: ["Bergamot"], heart: ["Pepper", "Lavender", "Geranium"], base: ["Ambroxan", "Vetiver", "Patchouli"] } },
  14: { name: "FOREVER", notes: { top: ["Neroli", "Lotus Blossom", "Dewy Green Apple"], heart: ["Tuberose", "Gardenia"], base: ["White Musk", "Exotic Woods"] } },
  15: { name: "REPTILE", notes: { top: ["Cedar"], heart: ["Leather", "Pepper"], base: ["Moss", "Musk"] } },
  16: { name: "GOOD GIRL", notes: { top: ["Almond", "Coffee"], heart: ["Jasmine Sambac", "Tuberose"], base: ["Cocoa", "Tonka Bean", "Vanilla", "Sandalwood"] } },
  17: { name: "TIGER", notes: { top: ["Grapefruit"], heart: ["Ginger"], base: ["Musk", "Vetiver", "Patchouli"] } },
  18: { name: "PATCHOULI", notes: { top: ["White Peach", "Gardenia"], heart: ["Frangipani", "Leather"], base: ["Patchouli", "Sandalwood", "Vanilla", "Benzoin"] } },
  19: { name: "CAVALY", notes: { top: ["Pink Pepper"], heart: ["Orange Blossom"], base: ["Tonka Bean", "Vanilla", "Benzoin"] } },
  20: { name: "MARSH", notes: { top: ["Orange Blossom", "Jasmine"], heart: ["Rose", "Jasmine", "Orange Blossom"], base: ["Vanilla", "Musk", "Sugary Powder (Marshmallow)"] } },
  21: { name: "APRE'S", notes: { top: ["Lemon Zest", "Bitter Orange Blossom"], heart: ["Aromatic Spices"], base: ["Musk", "Amber", "Woods"] } },
  22: { name: "TOP", notes: { top: ["Aldehydes", "Orange Blossom", "Lemon", "Bergamot"], heart: ["Jasmine", "Rose", "Lily of the Valley", "Ylang-Ylang"], base: ["Sandalwood", "Vanilla", "Vetiver", "Musk"] } },
  23: { name: "OUDI", notes: { top: ["Bergamot", "Saffron"], heart: ["Rose", "Frankincense", "Warm Spices"], base: ["Indian Oud", "Amber", "Sandalwood"] } },
  24: { name: "LAVANDER", notes: { top: ["Lavender", "Bergamot"], heart: ["Oud", "Geranium"], base: ["Sandalwood", "Musk"] } },
  25: { name: "OUD TOBACCO", notes: { top: ["Whiskey"], heart: ["Spicy Notes", "Cinnamon", "Coriander"], base: ["Tobacco", "Agarwood (Oud)", "Incense", "Sandalwood", "Patchouli", "Benzoin", "Vanilla", "Cedar"] } },
  26: { name: "RED TOBACCO", notes: { top: ["Saffron", "Cinnamon", "Incense", "Nutmeg", "White Peach", "Green Apple", "Nepalese Oud"], heart: ["Patchouli Leaves", "Delicate Jasmine"], base: ["Precious Tobacco", "Amber", "Woody Notes", "Vetiver", "Vanilla Pods", "White Musk"] } },
  27: { name: "AFGAN", notes: { top: ["Cannabis", "Green Notes"], heart: ["Woods", "Tobacco", "Coffee"], base: ["Oud (Agarwood)", "Incense"] } },
  28: { name: "OPIUM", notes: { top: ["Mandarin", "Bergamot", "Plum", "Spices (Clove, Coriander, Pepper)"], heart: ["Jasmine", "Rose", "Carnation", "Lily of the Valley", "Ylang-Ylang", "Peach", "Cinnamon", "Myrrh"], base: ["Vanilla", "Patchouli", "Sandalwood", "Vetiver", "Labdanum", "Benzoin", "Amber", "Musk", "Incense", "Cedar"] } },
  29: { name: "G & Y", notes: { top: ["White Florals (Jasmine, Orange Blossom)"], heart: ["Warm Floral Accords with Soft Spices"], base: ["Vetiver", "Deep Woody Notes"] } },
  30: { name: "ROMA", notes: { top: ["Blackcurrant", "Bergamot"], heart: ["Jasmine Grandiflorum", "Jasmine Sambac", "Jasmine Tea"], base: ["Bourbon Vanilla", "Cashmeran", "Guaiac Wood"] } },
  31: { name: "BRITISH LEATHER", notes: { top: ["Bergamot", "Hazelnut", "Cardamom"], heart: ["Violet Leaf"], base: ["Leather", "Patchouli", "Sandalwood", "Vetiver"] } },
  32: { name: "HER", notes: { top: ["Raspberry", "Strawberry", "Blackcurrant", "Blueberry", "Cherry", "Bergamot"], heart: ["Violet", "Jasmine"], base: ["Musk", "Woods", "Amber"] } },
  33: { name: "SMART", notes: { top: ["Bergamot", "Cinnamon", "Nutmeg"], heart: ["Dates", "Lily of the Valley", "Praline", "Tuberose"], base: ["Roasted Tonka Bean", "Benzoin", "Myrrh", "Akigalawood", "Vanilla", "Amberwood"] } },
  34: { name: "FLORA", notes: { top: ["Peony", "Mandarin Orange"], heart: ["Rose", "Osmanthus (Apricot-Honey Scent)"], base: ["Sandalwood", "Patchouli", "Pink Pepper"] } },
  35: { name: "NEW YORK", notes: { top: ["Lime", "Aldehydes", "Vinyl Accord"], heart: ["Green Apple", "Elemi Resin", "Black Pepper"], base: ["Vetiver", "Tonka Bean", "Vanilla"] } },
  36: { name: "NEW YORK DREAM", notes: { top: ["Bergamot", "Carambola (Starfruit)", "Apple"], heart: ["Rose", "Pomarose™", "Lily-of-the-Valley"], base: ["Patchouli", "Sandalwood", "Ambrofix™"] } },
  37: { name: "IMAGINATION", notes: { top: ["Calabrian Bergamot", "Citron", "Sicilian Orange"], heart: ["Ceylon Cinnamon", "Nigerian Ginger", "Tunisian Neroli"], base: ["Ambroxan", "Chinese Black Tea", "Guaiac Wood", "Olibanum"] } },
  38: { name: "PACIFIC", notes: { top: ["Blackcurrant", "Lemon", "Mint", "Coriander", "Orange", "Apricot"], heart: ["Carrot Seeds", "Basil", "May Rose"], base: ["Ambrette Seeds", "Dates", "Fig"] } },
  39: { name: "JARA", notes: { top: ["Bergamot", "Pink Pepper", "Tangerine", "Elemi", "Nutmeg", "Oud", "Honey"], heart: ["Patchouli", "Rose", "Saffron", "Jasmine", "Vetiver", "Cinnamon", "Orange Blossom", "Cashmere Wood"], base: ["Musk", "Amber", "Raspberry", "Saffron", "Oakmoss", "Ambrette Seeds", "Leather", "Sandalwood", "Violet", "Oud", "Ambroxan"] } },
  40: { name: "POUR HOME", notes: { top: ["Neroli", "Bitter Orange Leaves", "Citron of Diamante", "Bergamot"], heart: ["Geranium", "Blue Hyacinth", "Clary Sage", "Cedarwood"], base: ["Oud", "Mineral Amber", "Musk", "Tonka Bean"] } },
  41: { name: "HOMME", notes: { top: ["Grapefruit", "Cardamom"], heart: ["Lavender", "Clary Sage"], base: ["Sandalwood", "Patchouli"] } },
  42: { name: "COCO", notes: { top: ["Coriander", "Mandarin Orange", "Peach", "Ylang-Ylang"], heart: ["Rose", "Lily-of-the-Valley", "Clove", "Orange Blossom"], base: ["Amber", "Sandalwood", "Vanilla", "Tonka Bean", "Oud"] } },
  43: { name: "SCANDAL MAN", notes: { top: ["Clary Sage", "Mandarin"], heart: ["Caramel", "Tonka Bean"], base: ["Vetiver"] } },
  44: { name: "SCANDAL RED", notes: { top: ["Blood Orange", "Gardenia"], heart: ["Honey", "Gardenia"], base: ["Patchouli"] } },
  45: { name: "DARK SAFFRON", notes: { top: ["Saffron", "Bergamot"], heart: ["Damask Rose", "Jasmine"], base: ["Sandalwood", "Amber", "Musk"] } },
  46: { name: "COMETE", notes: { top: ["Cherry Blossom"], heart: ["Heliotrope", "Iris"], base: ["Musk"] } },
  47: { name: "VALLY", notes: { top: ["Davana", "Italian Bergamot", "Pink Pepper"], heart: ["White Amber", "African Rosemary", "Oud"], base: ["Musk", "Leather", "Vetiver Haiti"] } },
  48: { name: "WAVE-CHAILD", notes: { top: ["Oceanic Accord", "Sea Salt", "Grapefruit"], heart: ["Bay Leaf", "Geranium", "Red Amber"], base: ["Guaiac Wood", "Red Amber"] } },
  49: { name: "SENSUAL OUD", notes: { top: ["Dates", "Geranium", "Cloves"], heart: ["Rose", "Saffron", "Suede"], base: ["Agarwood (Oud)", "Patchouli", "Cypriol Oil (Nagarmotha)"] } },
  50: { name: "GIRL BLUSH", notes: { top: ["Bitter Almond", "Bergamot"], heart: ["Peony", "Ylang-Ylang"], base: ["Tonka Bean", "Vanilla"] } },
};

const airProfiles: Record<string, PerfumeProfile> = {
  "IRISH LEATHER": {
    name: "IRISH LEATHER",
    notes: {
      top: ["Juniper Berry", "Green Mate"],
      heart: ["Birch Wood", "Flinty Leather"],
      base: ["Amber", "Tonka Bean"],
    },
  },
  HOME: {
    name: "HOME",
    notes: {
      top: ["Bergamot", "Ginger", "Lemon"],
      heart: ["Basil", "Spices", "Violet Leaf", "White Pepper"],
      base: ["Cedarwood", "Tahitian Vetiver", "Tonka Bean"],
    },
  },
  "ESCADA TAJ": {
    name: "ESCADA TAJ",
    notes: {
      top: ["Alphonso Mango", "Nectarine", "Blood Orange"],
      heart: ["Raspberry", "Star Apple", "Water Lily", "Lotus"],
      base: ["Coconut", "Musk", "Sandalwood"],
    },
  },
  "PARIS HILTON": {
    name: "PARIS HILTON",
    notes: {
      top: ["Frozen Apple", "Peach Nectar", "Wet Ozone", "Muguet (Lily of the Valley)"],
      heart: ["Freesia", "Mimosa", "Jasmine", "Tuberose"],
      base: ["Skin Musk", "Sandalwood", "Ylang-Ylang", "Oakmoss", "Pheromone"],
    },
  },
  LAVENDER: {
    name: "LAVENDER",
    notes: {
      top: ["Bergamot", "Clary Sage"],
      heart: ["English Lavender", "Eucalyptus", "Geranium", "Jasmine", "Chamomile", "Violet"],
      base: ["Woods", "Vanilla", "Patchouli"],
    },
  },
  FLORA: {
    name: "FLORA",
    notes: {
      top: ["Peony", "Mandarin Orange"],
      heart: ["Rose", "Osmanthus (Apricot-Honey Scent)"],
      base: ["Sandalwood", "Patchouli", "Pink Pepper"],
    },
  },
  MUSK: {
    name: "MUSK",
    notes: {
      top: ["Frozen Apple", "Peach Nectar", "Wet Ozone", "Muguet (Lily of the Valley)"],
      heart: ["Freesia", "Mimosa", "Jasmine", "Tuberose"],
      base: ["Skin Musk", "Sandalwood", "Ylang-Ylang", "Oakmoss", "Pheromone"],
    },
  },
  LIBRE: {
    name: "LIBRE",
    notes: {
      top: ["Black Currant", "Lavender", "Mandarin Orange", "Petitgrain"],
      heart: ["Jasmine", "Lavender", "Orange Blossom"],
      base: ["Ambergris", "Cedar", "Madagascar Vanilla", "Musk"],
    },
  },
  ORGANZA: {
    name: "ORGANZA",
    notes: {
      top: ["Bergamot", "Neroli", "Gardenia", "Green Notes", "Nutmeg", "Mace"],
      heart: ["Honeysuckle", "Peony", "Tuberose", "Ylang-Ylang", "Jasmine", "Iris", "Walnut"],
      base: ["Amber", "Guaiac Wood", "Vanilla"],
    },
  },
  SENSUAL: {
    name: "SENSUAL",
    notes: {
      top: ["Pomegranate", "Persimmon", "Green Accord"],
      heart: ["Black Orchid", "Champaca Flower", "Lotus"],
      base: ["Amber", "Black Violet", "Mahogany", "Whipped Cream"],
    },
  },
};

function productNumberFor(category: Product["category"], index: number, image: string) {
  if (category === "women") return index * 2 + 2;
  if (category === "men") return index * 2 + 1;

  const imageNumber = image.match(/page-(\d+)/)?.[1];
  return imageNumber ? Number(imageNumber) : index + 1;
}

function perfumeFragranceImage(productNumber: number) {
  return `/campaign/ingredient-perfume/dezarti-fragrance-${String(productNumber).padStart(2, "0")}.png`;
}

function uniqueIngredients(notes: Product["notes"]) {
  return Array.from(new Set([...notes.top, ...notes.heart, ...notes.base]));
}

function fragranceFamily(notes: Product["notes"], category: Product["category"]) {
  const text = uniqueIngredients(notes).join(" ").toLowerCase();

  if (category === "air") {
    if (text.includes("leather")) return "Leather Ambient";
    if (text.includes("musk")) return "Clean Musk Ambient";
    if (text.includes("lavender")) return "Aromatic Ambient";
    if (text.includes("mango") || text.includes("pomegranate") || text.includes("apple")) return "Fruity Floral Ambient";
    if (text.includes("rose") || text.includes("jasmine") || text.includes("gardenia")) return "Floral Ambient";
    return "Luxury Air Freshener";
  }
  if (text.includes("oud") || text.includes("agarwood")) return "Oud Woody";
  if (text.includes("tobacco") || text.includes("whiskey")) return "Tobacco Amber";
  if (text.includes("leather") || text.includes("suede")) return "Leather Woody";
  if (text.includes("rose") || text.includes("jasmine") || text.includes("tuberose") || text.includes("peony")) return "Floral Amber";
  if (text.includes("bergamot") || text.includes("lemon") || text.includes("orange") || text.includes("grapefruit")) return "Citrus Aromatic";
  if (text.includes("vanilla") || text.includes("tonka") || text.includes("caramel")) return "Warm Gourmand";

  return "Woody Musk";
}

function fragranceStory(profile: PerfumeProfile) {
  const top = profile.notes.top.slice(0, 3).join(", ");
  const heart = profile.notes.heart.slice(0, 3).join(", ");
  const base = profile.notes.base.slice(0, 3).join(", ");

  return `${profile.name} opens with ${top}, then moves into ${heart}. The dry down rests on ${base}, leaving a refined trail with quiet depth and polished elegance.`;
}

function airFragranceStory(profile: PerfumeProfile) {
  const top = profile.notes.top.slice(0, 3).join(", ");
  const heart = profile.notes.heart.slice(0, 3).join(", ");
  const base = profile.notes.base.slice(0, 3).join(", ");

  return `${profile.name} introduces the space with ${top}, softened by ${heart}. A composed base of ${base} gives the room a clean, polished atmosphere without heaviness.`;
}

function fragranceMood(profile: PerfumeProfile) {
  return [...profile.notes.top.slice(0, 2), ...profile.notes.heart.slice(0, 1), ...profile.notes.base.slice(0, 1)].join(", ");
}

function createCollection(category: Product["category"], count: number): Product[] {
  const meta = collectionMeta[category];
  const images = categoryImages[category];
  const names = productNames[category];

  return Array.from({ length: count }, (_, index) => {
    const image = images[index % images.length];
    const profileNumber = productNumberFor(category, index, image);
    const nameFromList = names[index % names.length];
    const profile = category === "air" ? airProfiles[nameFromList] : perfumeProfiles[profileNumber];
    const name = profile?.name ?? names[index % names.length];
    const number = "";
    const notes = profile?.notes ?? meta.notes;
    const family = profile ? fragranceFamily(notes, category) : meta.family;

    return {
      slug: `${category}-${index + 1}`,
      name: `${name}${number}`,
      arabicName: `${name}${number}`,
      category,
      collection: meta.collection,
      mood: profile ? fragranceMood(profile) : meta.mood,
      price: category === "air" ? "50 QAR" : "150 QAR",
      image,
      fragranceImage: category === "air" ? airFragranceImages[name] : perfumeFragranceImage(profileNumber),
      badge: index < 3 ? "إصدار جديد" : undefined,
      notes,
      ingredients: uniqueIngredients(notes),
      family,
      longevity: category === "air" ? "انتشار طويل في المساحة" : `${8 + (index % 5)}-${10 + (index % 5)} ساعات`,
      projection: category === "air" ? "محيطي" : index % 2 === 0 ? "واضح ومصقول" : "ناعم وقريب",
      usageRecommendation: meta.usageRecommendation,
      productDetails: category === "air"
        ? ["Air Freshener", "Air Freshener", "For homes, offices, hotels, lounges, and air conditioning systems", "50 QAR"]
        : ["Eau de Parfum", "Luxury perfume", "For personal fragrance rituals", "150 QAR"],
      story: profile ? (category === "air" ? airFragranceStory(profile) : fragranceStory(profile)) : meta.story,
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
    image: "/campaign/women/dezarti-women-page-3.png",
  },
  {
    title: "عطور النساء",
    href: "/women",
    copy: "زهور راقية، مسك مضيء، وأنوثة مصاغة كقطعة كوتور.",
    image: "/campaign/men/dezarti-men-page-26.png",
  },
  {
    title: "عطور للجنسين",
    href: "/unisex",
    copy: "بخور وعنبر وشاي وعود في طقوس عطرية تتجاوز التصنيف.",
    image: "/campaign/unisex/dezarti-unisex-page-2.png",
  },
  {
    title: "معطرات الجو",
    href: "/air-fragrances",
    copy: "عطور داخلية للتكييف، الصالونات، الأجنحة، والمنازل الراقية.",
    image: "/campaign/air/dezarti-air-home.png",
  },
];

export function withLocale(locale: string, href: string) {
  return `/${locale}${href === "/" ? "" : href}`;
}

export function whatsappLink(product?: Product) {
  const base = "https://wa.me/97433667377";
  const text = product
    ? `مرحباً DEZARTI، أود الاستفسار عن ${product.name} من ${product.collection}.`
    : "مرحباً DEZARTI، أود الاستفسار عن العطور والخدمات.";

  return `${base}?text=${encodeURIComponent(text)}`;
}
