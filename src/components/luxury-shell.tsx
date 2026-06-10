"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Product, products, withLocale } from "@/lib/dezarti-data";
import {
  getDictionary,
  getHomeProductSections,
  getLocale,
  getProductDisplay,
  SupportedLocale,
  whatsappLink,
} from "@/lib/translations";

type PageProps = {
  locale: string;
};

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const },
} as const;

const collectionDropdownLinks = [
  { key: "women", href: "/collections/women" },
  { key: "men", href: "/collections/men" },
  { key: "unisex", href: "/collections/unisex" },
] as const;

export function LuxuryHome({ locale }: PageProps) {
  const sections = getHomeProductSections(locale, products);
  const newArrivalsSection = sections.find((s) => s.id === "new-arrivals");
  const bestSellersSection = sections.find((s) => s.id === "best-sellers");
  const remainingSections = sections.filter((s) => s.id !== "new-arrivals" && s.id !== "best-sellers");

  return (
    <LuxuryShell locale={locale} splash>
      <Hero locale={locale} />
      <SEOIntroSection locale={locale} />
      {newArrivalsSection && (
        <HomeProductSection locale={locale} index={0} {...newArrivalsSection} />
      )}

      <AirFragranceCTA locale={locale} />

      {bestSellersSection && (
        <HomeProductSection locale={locale} index={1} {...bestSellersSection} />
      )}
      <CollectionTabsSection locale={locale} />
      <AcAmbientSection locale={locale} />
      {remainingSections.map((section, index) => (
        <HomeProductSection key={section.id} locale={locale} index={index + 3} {...section} />
      ))}
      <AboutPreview locale={locale} />
      <FAQSection locale={locale} page="home" />
      <HomeContactSection locale={locale} />
    </LuxuryShell>
  );
}

function SEOIntroSection({ locale }: PageProps) {
  const activeLocale = getLocale(locale);
  
  return (
    <section className="bg-[#faf6f0] px-6 py-10 md:px-12 md:py-16 text-center border-b border-[#b58a54]/15">
      <div className="mx-auto max-w-[1000px] relative z-10 flex flex-col items-center">
        <p className="luxury-eyebrow">
          {activeLocale === "ar" ? "دار عطور فاخرة في قطر" : "Luxury Fragrance Experience in Qatar"}
        </p>
        <h2 className="mt-4 font-display text-2xl font-light leading-[1.25] text-[#1f1a17] sm:text-3xl md:text-4xl max-w-2xl">
          {activeLocale === "ar" 
            ? "دزاراتي للعطور - خيارك الأول للعطور الفاخرة ومعطرات الجو في قطر"
            : "Dezarti Perfumes - Your Premier Perfume Shop & Luxury Fragrance House in Qatar"}
        </h2>
        <p className="mt-6 text-sm leading-[1.8] text-[#6f655c] md:text-base max-w-3xl">
          {activeLocale === "ar"
            ? "مرحباً بكم في عطور دزاراتي، متجر العطور الفاخر الرائد في قطر. نحن فخورون بتقديم أرقى تشكيلات العطور الرجالية الفاخرة، العطور النسائية الأنيقة، والعطور للجنسين المبتكرة. نركز في صياغتنا على الثبات العالي والأثر الخالد، مما يتيح لكم شراء العطور عبر الإنترنت بثقة تامة. تشتمل مجموعتنا أيضاً على معطرات الجو والتكييف المتميزة لإضفاء لمسة من الفخامة والنقاء على مساحاتكم الخاصة."
            : "Welcome to Dezarti Perfumes, the ultimate luxury perfume shop in Qatar. We craft signature, long-lasting fragrances designed to evoke memories, elegance, and distinct presence. Whether you are looking to buy perfumes online in Qatar or discover premium men's perfumes, luxury women's perfumes, or sophisticated unisex perfumes, our curated collections offer unmatched sophistication. Explore our spatial air fresheners collection to elevate your home or office ambient scenting."}
        </p>
        
        {/* Internal links for SEO structure */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs tracking-wide uppercase text-gold">
          <Link href={withLocale(locale, "/men")} className="transition hover:text-[#1f1a17]">
            {activeLocale === "ar" ? "عطور الرجال في قطر" : "Men's Perfumes Qatar"}
          </Link>
          <span className="text-[#b58a54]/30">•</span>
          <Link href={withLocale(locale, "/women")} className="transition hover:text-[#1f1a17]">
            {activeLocale === "ar" ? "عطور النساء في قطر" : "Women's Perfumes Qatar"}
          </Link>
          <span className="text-[#b58a54]/30">•</span>
          <Link href={withLocale(locale, "/unisex")} className="transition hover:text-[#1f1a17]">
            {activeLocale === "ar" ? "عطور للجنسين في قطر" : "Unisex Perfumes Qatar"}
          </Link>
          <span className="text-[#b58a54]/30">•</span>
          <Link href={withLocale(locale, "/air-fragrances")} className="transition hover:text-[#1f1a17]">
            {activeLocale === "ar" ? "معطرات الجو في قطر" : "Air Fresheners Qatar"}
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ locale, page = "home" }: PageProps & { page?: "home" | "men" | "women" | "unisex" | "air" }) {
  const activeLocale = getLocale(locale);
  const dictionary = getDictionary(locale) as unknown as {
    faqs?: Record<string, readonly { readonly question: string; readonly answer: string }[]>;
  };
  const faqs = dictionary.faqs?.[page] || [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) return null;

  return (
    <section className="bg-[#f4ede4] px-6 py-12 md:px-12 md:py-16 scroll-mt-24 border-t border-[#b58a54]/15">
      <div className="mx-auto max-w-[800px] relative z-10">
        <div className="text-center mb-10">
          <p className="luxury-eyebrow">
            {activeLocale === "ar" ? "الأسئلة الشائعة" : "FAQ"}
          </p>
          <h2 className="mt-3 font-display text-2xl font-light text-[#1f1a17] sm:text-3xl md:text-4xl">
            {activeLocale === "ar" ? "الأسئلة المتكررة حول عطورنا" : "Frequently Asked Questions"}
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-[#b58a54]/15 rounded-[3px] bg-[#fffdf9] overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif text-[#1f1a17] hover:text-gold transition duration-300"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-medium ${activeLocale === "ar" ? "text-right" : "text-left"}`}>
                    {faq.question}
                  </span>
                  <svg
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                    >
                      <div className="px-5 pb-5 pt-0 text-sm leading-[1.8] text-[#6f655c] border-t border-[#b58a54]/10">
                        <p className={activeLocale === "ar" ? "text-right" : "text-left"}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AirFragranceCTA({ locale }: PageProps) {
  const activeLocale = getLocale(locale);
  const title = activeLocale === "ar"
    ? "اكتشف مجموعة عطور التكييف والجو الخاصة بنا"
    : "Explore Our Air Fresheners Collection";
  const buttonText = activeLocale === "ar"
    ? "عرض المجموعة"
    : "View Collection";

  return (
    <section className="relative overflow-hidden bg-[#efe5d9] px-6 py-8 md:px-12 md:py-10 text-center">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,249,0.15)_0%,rgba(181,138,84,0.05)_100%)]" />
      <motion.div {...fadeUp} className="relative z-10 mx-auto max-w-[800px] flex flex-col items-center justify-center gap-6">
        <p className="luxury-eyebrow">
          {activeLocale === "ar" ? "طقوس المساحات" : "Spatial Rituals"}
        </p>
        <h2 className="font-display text-2xl font-light leading-[1.2] text-[#1f1a17] sm:text-3xl md:text-4xl max-w-xl">
          {title}
        </h2>
        <div className="mt-2">
          <MagneticLink href={withLocale(locale, "/collections/ac-ambient")} variant="collection">
            {buttonText}
          </MagneticLink>
        </div>
      </motion.div>
    </section>
  );
}

export function CollectionPage({
  locale,
  title,
  eyebrow,
  description,
  filter,
}: PageProps & {
  title: string;
  eyebrow: string;
  description: string;
  filter?: Product["category"] | "new" | "best";
}) {
  const items = useMemo(() => {
    if (filter === "new") return products.filter((product) => product.badge);
    if (filter === "best") return [products[0], products[25], products[50], products[3]].filter(Boolean);
    if (filter) return products.filter((product) => product.category === filter);
    return products;
  }, [filter]);
  const dictionary = getDictionary(locale);

  return (
    <LuxuryShell locale={locale}>
      <section className="relative overflow-hidden px-6 pb-14 pt-28 md:px-12 md:pb-20 md:pt-32">
        <CinematicBackdrop />
        <motion.div {...fadeUp} className="relative z-10 mx-auto max-w-[1100px] text-center">
          <p className="luxury-eyebrow">{eyebrow}</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-light leading-[1.12] text-[#1f1a17] md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.75] text-[#6f655c] md:text-base">{description}</p>
        </motion.div>
      </section>
      <ProductShowcase
        locale={locale}
        eyebrow={dictionary.product.curatedEyebrow}
        title={dictionary.product.curatedTitle}
        items={items}
      />
      {filter && filter !== "new" && filter !== "best" && (
        <FAQSection locale={locale} page={filter} />
      )}
    </LuxuryShell>
  );
}

export function ProductDetail({ locale, product }: PageProps & { product: Product }) {
  const dictionary = getDictionary(locale);
  const display = getProductDisplay(locale, product);
  const heroImage = product.fragranceImage ?? product.image;

  return (
    <LuxuryShell locale={locale}>
      <section className="relative bg-[#faf6f0] px-6 pb-8 pt-20 md:px-12 md:pb-12 md:pt-24">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-[1fr_1fr] items-start">
          <motion.div {...fadeUp} className="w-full max-w-[760px] mx-auto md:mx-0 shrink-0">
            <div className="relative overflow-hidden rounded-[28px] border border-[#b58a54]/20 bg-[#fffdf9] p-3 shadow-[0_28px_80px_rgba(31,26,23,0.10)] luxury-image-frame">
              <div className="pointer-events-none absolute inset-3 rounded-[22px] border border-[#b58a54]/20" />
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-[#faf6f0]">
                <Image
                  src={heroImage}
                  alt={
                    locale === "ar"
                      ? `${display.name} ${product.category === "air" ? "معطر جو فاخر" : "عطر فاخر"} من عطور دزاراتي`
                      : `${display.name} ${product.category === "air" ? "Air Freshener Fragrance" : "Luxury Perfume"} by Dezarti Perfumes`
                  }
                  fill
                  priority
                  sizes="(min-width: 1280px) 720px, (min-width: 768px) 48vw, 100vw"
                  className="object-contain p-2 sm:p-3"
                />
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="flex flex-col">
            <p className="luxury-eyebrow">{display.collection}</p>
            <h1 className="mt-3 font-display text-4xl font-light leading-[1.08] text-[#1f1a17] md:text-6xl">{display.name}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
              <p className="text-xs tracking-[0.18em] text-gold">{display.family}</p>
              <p className="rounded-full border border-[#b58a54]/25 px-4 py-2 text-sm tracking-[0.16em] text-[#1f1a17]">
                {dictionary.product.price}: {display.price}
              </p>
            </div>
            <div className="mt-5 border-y border-[#b58a54]/15 py-4">
              <p className="luxury-eyebrow">{dictionary.product.fragranceStory}</p>
              <p className="mt-3 text-base leading-[1.8] text-[#6f655c] md:text-lg">{display.story}</p>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <NoteGroup title={dictionary.product.topNotes} notes={display.notes.top} />
              <NoteGroup title={dictionary.product.heartNotes} notes={display.notes.heart} />
              <NoteGroup title={dictionary.product.baseNotes} notes={display.notes.base} />
            </div>
            <div className="mt-5 rounded-[3px] border border-[#b58a54]/15 bg-[#fffdf9] p-4">
              <p className="luxury-eyebrow">{dictionary.product.ingredients}</p>
              <IngredientList ingredients={display.ingredients} />
            </div>
            <div className="mt-5 rounded-[3px] border border-[#b58a54]/15 bg-[#fffdf9] p-4">
              <p className="luxury-eyebrow">{dictionary.product.productDetails}</p>
              <IngredientList ingredients={display.productDetails} />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <MagneticLink href={whatsappLink(locale, product)} external>
                {dictionary.product.inquire}
              </MagneticLink>
              <MagneticLink href={withLocale(locale, "/collections")} variant="ghost">
                {dictionary.product.related}
              </MagneticLink>
            </div>
          </motion.div>
        </div>
      </section>
      <ProductShowcase
        locale={locale}
        eyebrow={dictionary.product.completeEyebrow}
        title={dictionary.product.completeTitle}
        items={products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 4)}
      />
    </LuxuryShell>
  );
}

export function AboutPage({ locale }: PageProps) {
  const dictionary = getDictionary(locale);

  return (
    <LuxuryShell locale={locale}>
      <EditorialHero
        eyebrow={dictionary.about.pageEyebrow}
        title={dictionary.about.pageTitle}
        copy={dictionary.about.pageText}
      />
      <section className="mx-auto grid max-w-[1100px] gap-8 px-6 py-16 md:grid-cols-3 md:px-12 md:py-20">
        {dictionary.about.pillars.map((pillar, index) => (
          <motion.article key={pillar.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="border-t border-[#b58a54]/20 pt-8">
            <p className="luxury-eyebrow">0{index + 1}</p>
            <h2 className="mt-6 font-display text-3xl font-light text-[#1f1a17]">{pillar.title}</h2>
            <p className="mt-5 text-sm leading-[1.8] text-[#6f655c]">
              {pillar.text}
            </p>
          </motion.article>
        ))}
      </section>
      <GlobalStatement locale={locale} />
    </LuxuryShell>
  );
}

export function ContactPage({ locale }: PageProps) {
  const [status, setStatus] = useState<string>("");
  const { register, handleSubmit, reset, formState } = useForm<ContactFormValues>();
  const dictionary = getDictionary(locale);

  async function onSubmit(values: ContactFormValues) {
    setStatus(dictionary.contact.status.sending);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      setStatus(dictionary.contact.status.success);
      reset();
      return;
    }

    setStatus(dictionary.contact.status.error);
  }

  return (
    <LuxuryShell locale={locale}>
      <EditorialHero
        eyebrow={dictionary.contact.eyebrow}
        title={dictionary.contact.title}
        copy={dictionary.contact.text}
      />
      <section className="mx-auto grid max-w-[1100px] gap-10 px-6 pb-16 md:grid-cols-[0.78fr_1.22fr] md:px-12 md:pb-20">
        <div className="border-t border-[#b58a54]/20 pt-8">
          <p className="luxury-eyebrow">{dictionary.contact.service}</p>
          <div className="mt-10 space-y-6 text-sm leading-[1.8] text-[#6f655c]">
            <p>
              {dictionary.contact.emailLabel}:{" "}
              <a href={`mailto:${dictionary.contact.emailAddress}`} className="transition hover:text-[#1f1a17]">
                {dictionary.contact.emailAddress}
              </a>
            </p>
            <p>
              {dictionary.contact.whatsappLabel}:{" "}
              <a href={whatsappLink(locale)} target="_blank" rel="noreferrer" className="transition hover:text-[#1f1a17]">
                {dictionary.contact.whatsappDisplay}
              </a>
            </p>
            <div>
              <p>{dictionary.contact.locationLabel}</p>
              <div className="mt-2">
                {dictionary.contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 overflow-hidden rounded-[3px] border border-[#b58a54]/15 bg-[#efe5d9]">
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-gold">{dictionary.contact.locationLabel}</p>
              <a href={dictionary.contact.mapUrl} target="_blank" rel="noreferrer" className="mt-2 block text-sm leading-[1.8] text-[#6f655c] transition hover:text-[#1f1a17]">
                {dictionary.contact.mapText}
              </a>
            </div>
            <iframe
              src={dictionary.contact.mapEmbedUrl}
              title={dictionary.contact.locationLabel}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0 grayscale-[12%]"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 border-t border-[#b58a54]/20 pt-8">
          <LuxuryInput placeholder={dictionary.contact.form.name} {...register("name", { required: true })} />
          <LuxuryInput placeholder={dictionary.contact.form.email} type="email" {...register("email", { required: true })} />
          <LuxuryInput placeholder={dictionary.contact.form.phone} {...register("phone")} />
          <textarea
            placeholder={dictionary.contact.form.message}
            className="min-h-44 border-0 border-b border-[#b58a54]/20 bg-transparent px-0 py-4 text-[#1f1a17] outline-none transition duration-300 placeholder:text-[#6f655c]/55 focus:border-[#b58a54]"
            {...register("message", { required: true })}
          />
          <button className="luxury-button" disabled={formState.isSubmitting}>
            {dictionary.contact.form.submit}
          </button>
          {status && <p className="text-sm text-[#6f655c]">{status}</p>}
        </form>
      </section>
    </LuxuryShell>
  );
}

function LuxuryShell({ children, locale, splash = false }: React.PropsWithChildren<PageProps & { splash?: boolean }>) {
  const [showSplash, setShowSplash] = useState(splash);
  const activeLocale = getLocale(locale);

  useEffect(() => {
    if (!splash) return;

    const timer = window.setTimeout(() => setShowSplash(false), 2200);
    return () => window.clearTimeout(timer);
  }, [splash]);

  return (
    <>
      <div className="luxury-bg-vignette" />
      <SmoothScroll />
      <AnimatePresence>{showSplash && <SplashIntro />}</AnimatePresence>
      <Header locale={locale} />
      <main className={activeLocale === "ar" ? "text-right" : "text-left"}>{children}</main>
      <Footer locale={locale} />
    </>
  );
}

function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isTouchDevice) return;

    let frame = 0;
    let destroy: (() => void) | undefined;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9, infinite: false });
      destroy = () => lenis.destroy();

      function raf(time: number) {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      }

      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      destroy?.();
    };
  }, []);

  return null;
}

function SplashIntro() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#f4ede4]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="relative font-serif text-6xl tracking-[0.34em] text-[#1f1a17] md:text-9xl"
        initial={{ opacity: 0, letterSpacing: "0.52em" }}
        animate={{
          opacity: [0, 1, 1, 0],
          letterSpacing: ["0.52em", "0.34em", "0.34em", "0.32em"],
        }}
        transition={{
          duration: 1.7,
          times: [0, 0.45, 0.82, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        DEZARTI
        <motion.span
          className="absolute -bottom-7 left-1/2 h-px w-0 -translate-x-1/2 bg-gold"
          animate={{ width: "64%" }}
          transition={{ delay: 0.65, duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

function Header({ locale }: PageProps) {
  const activeLocale = getLocale(locale);
  const dictionary = getDictionary(activeLocale);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#b58a54]/15 bg-[#f4ede4]/95">
        <div dir="ltr" className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 text-[#1f1a17] md:h-20 md:px-8">
          <Link href={withLocale(locale, "/")} prefetch className="shrink-0 font-serif text-lg tracking-[0.28em] md:text-2xl">
            DEZARTI
          </Link>
          <nav dir={activeLocale === "ar" ? "rtl" : "ltr"} className="hidden items-center gap-5 text-[0.64rem] font-normal uppercase tracking-[0.13em] text-[#6f655c] xl:flex xl:flex-nowrap shrink-0 2xl:gap-7">
            {dictionary.nav.home.map((item) =>
              item.href === "/#collections" ? (
                <div key={item.href} className="group relative py-7 shrink-0">
                  <Link href={withLocale(locale, item.href)} prefetch className="transition duration-300 hover:text-[#1f1a17] whitespace-nowrap">
                    {item.label}
                  </Link>
                  <div dir={activeLocale === "ar" ? "rtl" : "ltr"} className="pointer-events-none absolute left-1/2 top-full min-w-64 -translate-x-1/2 -translate-y-2 border border-[#b58a54]/15 bg-[#fffdf9]/98 p-2 opacity-0 shadow-[0_22px_55px_rgba(31,26,23,0.08)] transition duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {collectionDropdownLinks.map((link) => (
                      <Link
                        key={link.key}
                        href={withLocale(locale, link.href)}
                        prefetch
                        className="block rounded-[2px] px-4 py-3 text-[0.64rem] tracking-[0.13em] text-[#6f655c] transition duration-300 hover:bg-[#f4ede4] hover:text-[#1f1a17]"
                      >
                        {dictionary.nav.collectionsDropdown[link.key]}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={withLocale(locale, item.href)} prefetch className="transition duration-300 hover:text-[#1f1a17] whitespace-nowrap">
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3 flex-nowrap shrink-0">
            <LanguageSwitcher locale={activeLocale} />
            <a
              href={`tel:+${dictionary.contact.whatsappNumber}`}
              className="rounded-full border border-[#b58a54]/25 px-3 py-1.5 text-[0.58rem] sm:text-[0.66rem] uppercase tracking-[0.14em] text-[#1f1a17] transition duration-300 hover:border-[#b58a54] hover:bg-[#1f1a17] hover:text-[#fffdf9] inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
              aria-label={activeLocale === "ar" ? "اتصل بنا الآن" : "Call us now"}
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.458-.44-.29-1.048.096-1.333l1.293-.97c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>{activeLocale === "ar" ? "اتصل الآن" : "Call now"}</span>
            </a>
            <Link href={withLocale(locale, "/contact")} prefetch className="hidden rounded-full border border-[#b58a54]/25 px-4 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-[#1f1a17] transition duration-300 hover:border-[#b58a54] hover:bg-[#1f1a17] hover:text-[#fffdf9] md:inline-flex whitespace-nowrap shrink-0">
              {dictionary.contact.eyebrow}
            </Link>
            
            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#b58a54]/20 bg-[#faf6f0] text-[#1f1a17] transition duration-300 hover:border-[#b58a54] xl:hidden sm:h-9 sm:w-9"
              aria-label={activeLocale === "ar" ? "تبديل القائمة" : "Toggle Menu"}
            >
              {isMobileMenuOpen ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenuDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} locale={locale} />
    </>
  );
}

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

function MobileMenuDrawer({ isOpen, onClose: _onClose, locale }: MobileMenuDrawerProps) {
  const activeLocale = getLocale(locale);
  const dictionary = getDictionary(activeLocale);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  // Animation variants
  const drawerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "calc(100vh - 72px)",
      transition: { 
        duration: 0.5, 
        ease: [0.215, 0.61, 0.355, 1] as const,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.215, 0.61, 0.355, 1] as const 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] as const } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-drawer"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={drawerVariants}
          dir={activeLocale === "ar" ? "rtl" : "ltr"}
          className="fixed inset-x-0 top-[72px] z-40 overflow-y-auto bg-[#f4ede4]/98 px-6 py-8 backdrop-blur-md border-t border-[#b58a54]/15 flex flex-col justify-between md:top-20"
          style={{ height: "calc(100vh - 72px)" }}
        >
          {/* Subtle line decoration & paper texture */}
          <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[#faf6f0]" />
            <div className="film-grain" />
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {dictionary.nav.home.map((item) => {
                if (item.href === "/#collections") {
                  return (
                    <motion.div key={item.href} variants={itemVariants} className="border-b border-[#b58a54]/10 pb-3">
                      <button
                        type="button"
                        onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                        className="flex w-full items-center justify-between font-serif text-lg text-[#1f1a17] hover:text-gold md:text-xl"
                      >
                        <span className={activeLocale === "ar" ? "text-right" : "text-left"}>{item.label}</span>
                        <svg
                          className={`h-4 w-4 transition-transform duration-300 ${isCollectionsOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {isCollectionsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                            className="overflow-hidden mt-3 flex flex-col gap-3 ltr:border-l ltr:border-[#b58a54]/15 ltr:pl-4 ltr:pr-0 rtl:border-r rtl:border-[#b58a54]/15 rtl:pr-4 rtl:pl-0"
                          >
                            {collectionDropdownLinks.map((link) => (
                              <Link
                                key={link.key}
                                href={withLocale(locale, link.href)}
                                className="block py-1.5 text-xs tracking-[0.12em] text-[#6f655c] hover:text-[#1f1a17] uppercase"
                              >
                                {dictionary.nav.collectionsDropdown[link.key]}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div key={item.href} variants={itemVariants} className="border-b border-[#b58a54]/10 pb-3">
                    <Link
                      href={withLocale(locale, item.href)}
                      className="block font-serif text-lg text-[#1f1a17] hover:text-gold md:text-xl"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-6 border-t border-[#b58a54]/15 pt-6">
            <div className="flex flex-col gap-2.5 text-xs tracking-wide text-[#6f655c] sm:text-sm">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-gold">{dictionary.contact.service}</p>
              <a href={`mailto:${dictionary.contact.emailAddress}`} className="hover:text-[#1f1a17]">
                {dictionary.contact.emailLabel}: <span className="font-serif">{dictionary.contact.emailAddress}</span>
              </a>
              <a href={whatsappLink(locale)} target="_blank" rel="noreferrer" className="hover:text-[#1f1a17]">
                {dictionary.contact.whatsappLabel}: <span className="font-serif">{dictionary.contact.whatsappDisplay}</span>
              </a>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="grid gap-3 grid-cols-2">
                <Link
                  href={withLocale(locale, "/contact")}
                  className="w-full text-center luxury-button py-3 text-[0.62rem]"
                >
                  {dictionary.contact.eyebrow}
                </Link>
                <a
                  href={whatsappLink(locale)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center luxury-button luxury-button-ghost py-3 text-[0.62rem]"
                  aria-label={activeLocale === "ar" ? "استفسر عبر الواتساب" : "Inquire on WhatsApp"}
                >
                  {dictionary.product.inquire}
                </a>
              </div>
              <a
                href={`tel:+${dictionary.contact.whatsappNumber}`}
                className="w-full text-center luxury-button luxury-button-collection py-3 text-[0.62rem] inline-flex items-center justify-center gap-1.5"
                aria-label={activeLocale === "ar" ? "اتصل بنا الآن" : "Call us now"}
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.458-.44-.29-1.048.096-1.333l1.293-.97c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>{activeLocale === "ar" ? "اتصل الآن" : "Call now"}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LanguageSwitcher({ locale }: { locale: SupportedLocale }) {
  const pathname = usePathname();
  const dictionary = getDictionary(locale);

  function switchHref(targetLocale: SupportedLocale) {
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  }

  return (
    <div className="flex shrink-0 items-center rounded-full border border-[#b58a54]/20 bg-[#faf6f0] p-1 text-[0.58rem] sm:text-[0.66rem] font-medium tracking-[0.14em]">
      {(Object.keys(dictionary.languageNames) as SupportedLocale[]).map((option) => (
        <Link
          key={option}
          href={switchHref(option)}
          prefetch
          aria-current={locale === option ? "page" : undefined}
          className={`rounded-full px-2 py-1.5 sm:px-3 sm:py-2 transition duration-300 ${locale === option
            ? "bg-[#1f1a17] text-[#fffdf9]"
            : "text-[#6f655c] hover:text-[#1f1a17]"
            }`}
        >
          {dictionary.languageNames[option]}
        </Link>
      ))}
    </div>
  );
}

function Hero({ locale }: PageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="relative overflow-hidden bg-[#f4ede4] px-6 pb-8 pt-20 md:px-12 md:pb-12 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-[1040px] items-center gap-8 md:grid-cols-[0.95fr_0.9fr] md:gap-12"
      >
        <div className="max-w-xl">
          <p className="luxury-eyebrow">{dictionary.hero.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.05] text-[#1f1a17] md:text-6xl lg:text-7xl">
            {dictionary.hero.title}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-[1.75] text-[#6f655c] md:text-base">
            {dictionary.hero.text}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <MagneticLink
              href={withLocale(locale, "/collections")}
              aria-label={locale === "ar" ? "استكشف مجموعات العطور الفاخرة الكاملة" : "Explore our full luxury perfume collections"}
            >
              {dictionary.hero.primaryCta}
            </MagneticLink>
            <MagneticLink
              href={withLocale(locale, "/about")}
              variant="ghost"
              aria-label={locale === "ar" ? "اكتشف قصة دار عطور دزاراتي الفاخرة" : "Discover the story of Dezarti Perfumes house"}
            >
              {dictionary.hero.secondaryCta}
            </MagneticLink>
          </div>
        </div>
        <motion.div
          className="relative min-h-[300px] overflow-hidden rounded-t-full border border-[#b58a54]/15 bg-[#faf6f0] sm:min-h-[360px] md:min-h-[430px]"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/campaign/dezarti-good-girl.png"
            alt={locale === "ar" ? "حملة عروض عطور دزاراتي الفاخرة" : "Dezarti Perfumes Luxury Fragrance Campaign"}
            fill
            priority
            sizes="(min-width: 768px) 42vw, 100vw"
            className="object-cover transition duration-1000 ease-out hover:scale-[1.012]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a17]/18 via-transparent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function CinematicBackdrop() {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden bg-[#f4ede4]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f4ede4_0%,#faf6f0_52%,#efe5d9_100%)]" />
      <div className="film-grain" />
    </div>
  );
}

function AboutPreview({ locale }: PageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section id="about" className="mx-auto grid max-w-[1100px] scroll-mt-24 gap-8 px-6 py-8 md:grid-cols-[0.95fr_1.05fr] md:px-12 md:py-10">
      <motion.div {...fadeUp} className="relative min-h-[280px] overflow-hidden rounded-[3px] border border-[#b58a54]/15 md:min-h-[390px] luxury-image-frame">
        <Image
          src="/campaign/about/dezarti-about-libre.png"
          alt={
            locale === "ar"
              ? "قصة دار عطور دزاراتي الفاخرة في قطر"
              : "About Dezarti Perfumes - The Luxury Fragrance House in Qatar"
          }
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </motion.div>
      <motion.div {...fadeUp} className="flex flex-col justify-center border-t border-[#b58a54]/20 pt-7">
        <p className="luxury-eyebrow">{dictionary.about.eyebrow}</p>
        <h2 className="mt-4 font-display text-3xl font-light leading-[1.18] text-charcoal md:text-5xl">
          {dictionary.about.title}
        </h2>
        <p className="mt-5 text-sm leading-[1.75] text-charcoal/62">
          {dictionary.about.text}
        </p>
        <div className="mt-6">
          <MagneticLink
            href={withLocale(locale, "/about")}
            variant="ghost"
            aria-label={locale === "ar" ? "تعرف على قصة دار عطور دزاراتي في قطر" : "Learn more about the story of Dezarti Perfumes in Qatar"}
          >
            {dictionary.about.cta}
          </MagneticLink>
        </div>
      </motion.div>
    </section>
  );
}

type CollectionTab = "women" | "men" | "unisex";

const collectionTabLinks: Record<CollectionTab, string> = {
  women: "/collections/women",
  men: "/collections/men",
  unisex: "/collections/unisex",
};

function CollectionTabsSection({ locale }: PageProps) {
  const [activeTab, setActiveTab] = useState<CollectionTab>("women");
  const dictionary = getDictionary(locale);
  const tabs: CollectionTab[] = ["women", "men", "unisex"];
  const items = products.filter((product) => product.category === activeTab).slice(0, 4);

  return (
    <section id="collections" className="scroll-mt-24 bg-[#f4ede4] px-6 pb-8 pt-6 md:px-12 md:pb-10 md:pt-8">
      <motion.div {...fadeUp} className="mx-auto max-w-[1100px] text-center">
        <p className="luxury-eyebrow">{dictionary.collectionsSection.eyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-light leading-[1.16] text-charcoal md:text-5xl">
          {dictionary.collectionsSection.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.75] text-[#6f655c]">
          {dictionary.collectionsSection.description}
        </p>
      </motion.div>

      <div className="mx-auto mt-7 flex max-w-[1100px] justify-center">
        <div className="flex rounded-full border border-[#b58a54]/20 bg-[#fffdf9] p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.16em] transition duration-300 md:px-7 ${activeTab === tab
                ? "bg-[#1f1a17] text-[#fffdf9]"
                : "text-[#6f655c] hover:text-[#1f1a17]"
                }`}
            >
              {dictionary.collectionsSection.tabs[tab]}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 grid max-w-[1100px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {items.map((product) => (
            <ProductCard key={`${activeTab}-${product.slug}`} locale={locale} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mx-auto mt-6 flex max-w-[1100px] justify-center">
        <MagneticLink href={withLocale(locale, collectionTabLinks[activeTab])} variant="collection">
          {dictionary.collectionsSection.viewFull[activeTab]}
        </MagneticLink>
      </div>
    </section>
  );
}

function AcAmbientSection({ locale }: PageProps) {
  const dictionary = getDictionary(locale);
  const items = products.filter((product) => product.category === "air").slice(0, 4);

  return (
    <section id="ac-ambient" className="scroll-mt-24 bg-[#faf6f0] px-6 py-8 md:px-12 md:py-10">
      <motion.div {...fadeUp} className="mx-auto max-w-[1100px] text-center">
        <p className="luxury-eyebrow">{dictionary.acAmbientSection.eyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-light leading-[1.16] text-charcoal md:text-5xl">
          {dictionary.acAmbientSection.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.75] text-[#6f655c]">
          {dictionary.acAmbientSection.description}
        </p>
      </motion.div>

      <div className="mx-auto mt-8 grid max-w-[1100px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {items.map((product) => (
          <ProductCard key={`ac-ambient-${product.slug}`} locale={locale} product={product} />
        ))}
      </div>

      <div className="mx-auto mt-6 flex max-w-[1100px] justify-center">
        <MagneticLink href={withLocale(locale, "/collections/ac-ambient")} variant="collection">
          {dictionary.acAmbientSection.viewFull}
        </MagneticLink>
      </div>
    </section>
  );
}

function HomeProductSection({
  locale,
  id,
  eyebrow,
  title,
  description,
  href,
  items,
  index,
}: PageProps & {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  items: Product[];
  index: number;
}) {
  const dictionary = getDictionary(locale);
  const sectionTone = index % 2 === 0 ? "bg-[#faf6f0]" : "bg-[#f4ede4]";
  const sectionSpacing =
    id === "best-sellers"
      ? "px-6 pb-4 pt-8 md:px-12 md:pb-6 md:pt-10"
      : "px-6 py-8 md:px-12 md:py-10";

  return (
    <section id={id} className={`${sectionTone} scroll-mt-24 ${sectionSpacing}`}>
      <motion.div {...fadeUp} className="mx-auto mb-8 max-w-[760px] text-center md:mb-9">
        <p className="luxury-eyebrow">{eyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-light leading-[1.16] text-charcoal md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-[1.75] text-[#6f655c]">{description}</p>
      </motion.div>

      <div className={`mx-auto grid max-w-[1100px] grid-cols-2 gap-4 ${id === "new-arrivals" ? "md:grid-cols-3" : "md:grid-cols-4"} md:gap-6`}>
        {items.map((product) => (
          <ProductCard
            key={`${id}-${product.slug}`}
            locale={locale}
            product={product}
            compact
            isFeaturedAir={id === "new-arrivals" && product.category === "air"}
          />
        ))}
      </div>

      <div className="mx-auto mt-6 flex max-w-[1100px] justify-center">
        <MagneticLink href={withLocale(locale, href)} variant="collection">
          {dictionary.product.viewCollection}
        </MagneticLink>
      </div>
    </section>
  );
}

function ProductShowcase({ locale, eyebrow, title, items }: PageProps & { eyebrow: string; title: string; items: Product[] }) {
  return (
    <section className="px-6 py-8 md:px-12 md:py-10">
      <motion.div {...fadeUp} className="mx-auto mb-10 max-w-[1100px] text-center">
        <p className="luxury-eyebrow">{eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-light leading-[1.25] text-charcoal md:text-5xl">{title}</h2>
      </motion.div>
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.slug} locale={locale} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  locale,
  product,
  compact = false,
  isFeaturedAir = false,
}: PageProps & {
  product: Product;
  compact?: boolean;
  isFeaturedAir?: boolean;
}) {
  const dictionary = getDictionary(locale);
  const display = getProductDisplay(locale, product);
  const imageHeight = compact ? "h-40 sm:h-48 md:h-56" : "h-52 md:h-64 xl:h-72";
  const isUploadedBottleImage =
    product.image.startsWith("/campaign/women/") ||
    product.image.startsWith("/campaign/men/") ||
    product.image.startsWith("/campaign/unisex/") ||
    product.image.startsWith("/campaign/air/");

  const isAir = product.category === "air";
  const badgeText = isAir
    ? (locale === "ar" ? "تكييف وجو" : "Air Fresheners")
    : display.badge;

  const badgeStyle = isAir
    ? "border-[#cba56b]/35 bg-[#fffdf9]/95 text-[#cba56b] shadow-[0_2px_8px_rgba(203,165,107,0.08)]"
    : "border-[#b58a54]/25 bg-[#fffdf9]/90 text-[#b58a54]";

  return (
    <motion.article {...fadeUp} className="group luxury-card overflow-hidden rounded-[3px] flex flex-col h-full">
      <Link href={withLocale(locale, `/product/${product.slug}`)} prefetch className="flex flex-col flex-1">
        <div className={`relative overflow-hidden rounded-t-[3px] bg-[#fffdf9] luxury-image-frame ${imageHeight} shrink-0`}>
          <Image
            src={product.image}
            alt={
              locale === "ar"
                ? `${display.name} ${isAir ? "معطر جو فاخر" : "عطر فاخر"} من عطور دزاراتي`
                : `${display.name} ${isAir ? "Air Freshener Fragrance" : "Luxury Perfume"} by Dezarti Perfumes`
            }
            fill
            loading="lazy"
            quality={80}
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
            className={`${isUploadedBottleImage ? "object-contain p-3 md:p-4" : "object-cover"} transition duration-700 ease-out group-hover:scale-[1.015]`}
          />
          {badgeText && (
            <span className={`absolute left-4 top-4 rounded-[3px] border px-3 py-1.5 text-[0.62rem] tracking-[0.12em] ${badgeStyle}`}>
              {badgeText}
            </span>
          )}
        </div>
        <div className={`flex flex-col flex-1 justify-between ${compact ? "p-4 md:p-5" : "p-5 md:p-6"}`}>
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.16em] text-gold">
              {isFeaturedAir
                ? (locale === "ar" ? "تكييف وجو مميز" : "Air Fresheners Featured")
                : display.collection}
            </p>
            <h3 className="mt-2 font-display text-lg text-charcoal md:text-xl">{display.name}</h3>
            {!compact && <p className="mt-3 text-sm leading-7 text-charcoal/55 line-clamp-2">{display.mood}</p>}
          </div>
          <div className="mt-5 flex items-center justify-between gap-3 text-sm text-charcoal/70">
            <span>{display.price}</span>
            <span className="rounded-[3px] border border-[#b58a54]/20 px-3 py-1.5 text-[0.68rem] tracking-[0.08em] transition duration-500 ease-out group-hover:border-[#b58a54] group-hover:text-[#b58a54]">
              {dictionary.product.details}
            </span>
          </div>
        </div>
      </Link>
      <a
        href={whatsappLink(locale, product)}
        target="_blank"
        rel="noreferrer"
        className="mx-4 mb-4 block rounded-[3px] border border-[#b58a54]/20 py-2 text-center text-[0.66rem] tracking-[0.1em] text-charcoal/70 transition duration-500 ease-out hover:border-gold hover:text-gold md:mx-5 md:mb-5 shrink-0"
        aria-label={locale === "ar" ? `استفسر عن عطر ${display.name} عبر الواتساب` : `Inquire about ${display.name} on WhatsApp`}
      >
        {dictionary.product.inquire}
      </a>
    </motion.article>
  );
}

function GlobalStatement({ locale }: PageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="grid place-items-center bg-[#efe5d9] px-6 py-10 text-center md:py-12">
      <motion.div {...fadeUp}>
        <p className="luxury-eyebrow">{dictionary.globalStatement.eyebrow}</p>
        <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-light leading-[1.14] text-[#1f1a17] md:text-6xl">
          {dictionary.globalStatement.title}
        </h2>
      </motion.div>
    </section>
  );
}

function HomeContactSection({ locale }: PageProps) {
  const [status, setStatus] = useState<string>("");
  const { register, handleSubmit, reset, formState } = useForm<ContactFormValues>();
  const dictionary = getDictionary(locale);

  async function onSubmit(values: ContactFormValues) {
    setStatus(dictionary.contact.status.sending);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      setStatus(dictionary.contact.status.success);
      reset();
      return;
    }

    setStatus(dictionary.contact.status.error);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-[#faf6f0] px-6 py-8 md:px-12 md:py-10">
      <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <motion.div {...fadeUp} className="border-t border-[#b58a54]/20 pt-8">
          <p className="luxury-eyebrow">{dictionary.contact.homeEyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-light leading-[1.16] text-[#1f1a17] md:text-5xl">
            {dictionary.contact.homeTitle}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-[1.75] text-[#6f655c]">
            {dictionary.contact.homeText}
          </p>

          <div className="mt-8 grid gap-4 text-sm leading-[1.8] text-[#6f655c] sm:grid-cols-2">
            <a href={whatsappLink(locale)} target="_blank" rel="noreferrer" className="border-t border-[#b58a54]/15 pt-4 transition hover:text-[#1f1a17]">
              <span className="block text-[0.64rem] uppercase tracking-[0.16em] text-gold">{dictionary.contact.whatsappLabel}</span>
              {dictionary.contact.whatsappDisplay}
            </a>
            <a href={`mailto:${dictionary.contact.emailAddress}`} className="border-t border-[#b58a54]/15 pt-4 transition hover:text-[#1f1a17]">
              <span className="block text-[0.64rem] uppercase tracking-[0.16em] text-gold">{dictionary.contact.emailLabel}</span>
              {dictionary.contact.emailAddress}
            </a>
            <a href={whatsappLink(locale)} target="_blank" rel="noreferrer" className="border-t border-[#b58a54]/15 pt-4 transition hover:text-[#1f1a17]">
              <span className="block text-[0.64rem] uppercase tracking-[0.16em] text-gold">{dictionary.contact.phoneLabel}</span>
              {dictionary.contact.whatsappDisplay}
            </a>
            <div className="border-t border-[#b58a54]/15 pt-4">
              <span className="block text-[0.64rem] uppercase tracking-[0.16em] text-gold">{dictionary.contact.businessHoursLabel}</span>
              {dictionary.contact.businessHours}
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-[3px] border border-[#b58a54]/15 bg-[#efe5d9]">
            <div className="p-5">
              <p className="text-[0.64rem] uppercase tracking-[0.16em] text-gold">{dictionary.contact.locationLabel}</p>
              <a href={dictionary.contact.mapUrl} target="_blank" rel="noreferrer" className="mt-2 block text-sm leading-[1.8] text-[#6f655c] transition hover:text-[#1f1a17]">
                {dictionary.contact.mapText}
              </a>
            </div>
            <iframe
              src={dictionary.contact.mapEmbedUrl}
              title={dictionary.contact.locationLabel}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-56 w-full border-0 grayscale-[12%]"
            />
          </div>
        </motion.div>

        <motion.form {...fadeUp} onSubmit={handleSubmit(onSubmit)} className="grid gap-5 border-t border-[#b58a54]/20 pt-8">
          <LuxuryInput placeholder={dictionary.contact.form.name} {...register("name", { required: true })} />
          <LuxuryInput placeholder={dictionary.contact.form.email} type="email" {...register("email", { required: true })} />
          <LuxuryInput placeholder={dictionary.contact.form.phone} {...register("phone")} />
          <textarea
            placeholder={dictionary.contact.form.message}
            className="min-h-32 border-0 border-b border-[#b58a54]/20 bg-transparent px-0 py-4 text-[#1f1a17] outline-none transition duration-300 placeholder:text-[#6f655c]/55 focus:border-[#b58a54]"
            {...register("message", { required: true })}
          />
          <button className="luxury-button justify-self-start" disabled={formState.isSubmitting}>
            {dictionary.contact.form.submit}
          </button>
          {status && <p className="text-sm text-[#6f655c]">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}

function EditorialHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-24 md:px-12 md:pb-12 md:pt-28">
      <CinematicBackdrop />
      <motion.div {...fadeUp} className="relative z-10 mx-auto max-w-[1100px] text-center">
        <p className="luxury-eyebrow">{eyebrow}</p>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-light leading-[1.14] text-[#1f1a17] md:text-6xl">{title}</h1>
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-[1.8] text-[#6f655c] md:text-base">{copy}</p>
      </motion.div>
    </section>
  );
}

function NoteGroup({ title, notes }: { title: string; notes: string[] }) {
  return (
    <div className="rounded-[3px] border border-[#b58a54]/15 bg-[#fffdf9] p-5">
      <h2 className="font-display text-xl text-[#1f1a17]">{title}</h2>
      <div className="mt-5 grid gap-3">
        {notes.map((note, index) => (
          <div key={`${note}-${index}`} className="flex items-center gap-3 rounded-[3px] border border-[#b58a54]/15 bg-[#faf6f0] px-4 py-3">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-gold/35 text-xs text-gold">✦</span>
            <span className="text-sm text-[#6f655c]">{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function IngredientList({ ingredients }: { ingredients: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {ingredients.map((ingredient, index) => (
        <span
          key={`${ingredient}-${index}`}
          className="rounded-full border border-[#b58a54]/20 bg-[#faf6f0] px-4 py-2 text-sm text-[#6f655c]"
        >
          {ingredient}
        </span>
      ))}
    </div>
  );
}

function MagneticLink({
  href,
  children,
  variant = "solid",
  external = false,
  ...rest
}: React.PropsWithChildren<{ href: string; variant?: "solid" | "ghost" | "collection"; external?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>>) {
  const className =
    variant === "solid"
      ? "luxury-button"
      : variant === "collection"
        ? "luxury-button luxury-button-collection"
        : "luxury-button luxury-button-ghost";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} prefetch className={className} {...rest}>
      {children}
    </Link>
  );
}

const LuxuryInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className="border-0 border-b border-[#b58a54]/20 bg-transparent px-0 py-4 text-[#1f1a17] outline-none transition duration-300 placeholder:text-[#6f655c]/55 focus:border-[#b58a54]"
    {...props}
  />
);

function Footer({ locale }: PageProps) {
  const activeLocale = getLocale(locale);
  const dictionary = getDictionary(activeLocale);
  const localizedNavItems = Object.entries(dictionary.nav.byPath).map(([href, label]) => ({ href, label }));

  return (
    <footer className="border-t border-[#b58a54]/15 bg-[#f4ede4] px-6 py-8 md:px-12 md:py-10">
      <div className="mx-auto flex max-w-[1100px] flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="font-serif text-3xl tracking-[0.28em] text-[#1f1a17]">DEZARTI</p>
          <p className="mt-5 max-w-md text-sm leading-[1.8] text-[#6f655c]">
            {dictionary.brand.footerText}
          </p>
          <div className="mt-5 space-y-2 text-sm text-[#6f655c]">
            <div>
              <p>{dictionary.contact.locationLabel}:</p>
              {dictionary.contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <a href={`mailto:${dictionary.contact.emailAddress}`} className="block transition hover:text-[#1f1a17]">
              {dictionary.contact.emailLabel}: {dictionary.contact.emailAddress}
            </a>
            <a href={`tel:+${dictionary.contact.whatsappNumber}`} className="block transition hover:text-[#1f1a17]">
              {activeLocale === "ar" ? "الهاتف: " : "Phone: "} {dictionary.contact.whatsappDisplay}
            </a>
            <a href={whatsappLink(locale)} target="_blank" rel="noreferrer" className="block transition hover:text-[#1f1a17]">
              {dictionary.contact.whatsappLabel}: {dictionary.contact.whatsappDisplay}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-[0.68rem] uppercase tracking-[0.16em] text-[#6f655c]">
          {localizedNavItems.slice(1, 6).map((item) => (
            <Link key={item.href} href={withLocale(locale, item.href)} className="transition duration-300 hover:text-[#1f1a17]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
