"use client";

import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
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

export function LuxuryHome({ locale }: PageProps) {
  const sections = getHomeProductSections(locale, products);
  const featuredSections = sections.slice(0, 2);
  const remainingSections = sections.slice(2);

  return (
    <LuxuryShell locale={locale} splash>
      <Hero locale={locale} />
      {featuredSections.map((section, index) => (
        <HomeProductSection key={section.id} locale={locale} index={index} {...section} />
      ))}
      <CollectionTabsSection locale={locale} />
      <AcAmbientSection locale={locale} />
      {remainingSections.map((section, index) => (
        <HomeProductSection key={section.id} locale={locale} index={index + featuredSections.length + 1} {...section} />
      ))}
      <AboutPreview locale={locale} />
      <HomeContactSection locale={locale} />
    </LuxuryShell>
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
  filter?: Product["category"] | "new";
}) {
  const items = useMemo(() => {
    if (filter === "new") return products.filter((product) => product.badge);
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
    </LuxuryShell>
  );
}

export function ProductDetail({ locale, product }: PageProps & { product: Product }) {
  const dictionary = getDictionary(locale);
  const display = getProductDisplay(locale, product);

  return (
    <LuxuryShell locale={locale}>
      <section className="relative bg-[#faf6f0] px-6 pb-16 pt-28 md:px-12 md:pb-24 md:pt-32">
        <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div {...fadeUp} className="relative min-h-[320px] overflow-hidden rounded-[3px] border border-[#b58a54]/15 bg-[#fffdf9] md:min-h-[480px] luxury-image-frame">
          <Image src={product.image} alt={display.name} fill priority className="object-cover" />
        </motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="flex flex-col justify-center">
          <p className="luxury-eyebrow">{display.collection}</p>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.08] text-[#1f1a17] md:text-6xl">{display.name}</h1>
          <p className="text-xs tracking-[0.18em] text-gold">{display.family}</p>
          <p className="mt-5 text-lg font-light leading-[1.65] text-[#6f655c] md:text-2xl">{display.story}</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            <Spec label={dictionary.product.longevity} value={display.longevity} />
            <Spec label={dictionary.product.projection} value={display.projection} />
            <Spec label={dictionary.product.feeling} value={display.mood} />
          </div>
          <div className="mt-7 border-y border-[#b58a54]/15 py-5">
            <p className="luxury-eyebrow">{dictionary.product.usage}</p>
            <p className="mt-4 text-base leading-[1.8] text-[#6f655c]">{display.usageRecommendation}</p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <NoteGroup title={dictionary.product.topNotes} notes={display.notes.top} />
            <NoteGroup title={dictionary.product.heartNotes} notes={display.notes.heart} />
            <NoteGroup title={dictionary.product.baseNotes} notes={display.notes.base} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
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
      <section className="mx-auto grid max-w-[1100px] gap-8 px-6 py-24 md:grid-cols-3 md:px-12 md:py-32">
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
      <section className="mx-auto grid max-w-[1100px] gap-12 px-6 pb-24 md:grid-cols-[0.78fr_1.22fr] md:px-12 md:pb-36">
        <div className="border-t border-[#b58a54]/20 pt-8">
          <p className="luxury-eyebrow">{dictionary.contact.service}</p>
          <div className="mt-10 space-y-6 text-sm leading-[1.8] text-[#6f655c]">
            <p>{dictionary.contact.emailLabel}: concierge@dezarti.com</p>
            <p>{dictionary.contact.whatsappLabel}: +971 50 000 0000</p>
            <p>{dictionary.contact.location}</p>
          </div>
          <div className="mt-12 h-64 rounded-[3px] border border-[#b58a54]/15 bg-[#efe5d9] p-6">
            <p className="text-xs tracking-[0.22em] text-gold">{dictionary.contact.locationLabel}</p>
            <p className="mt-24 max-w-xs text-sm leading-[1.8] text-[#6f655c]">{dictionary.contact.mapText}</p>
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
    const lenis = new Lenis({ lerp: 0.06, wheelMultiplier: 0.8, infinite: false });
    let frame = 0;

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
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

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#b58a54]/15 bg-[#f4ede4]/95">
      <div dir="ltr" className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 text-[#1f1a17] md:h-20 md:px-8">
        <Link href={withLocale(locale, "/")} className="shrink-0 font-serif text-lg tracking-[0.28em] md:text-2xl">
          DEZARTI
        </Link>
        <nav dir={activeLocale === "ar" ? "rtl" : "ltr"} className="hidden items-center gap-5 text-[0.64rem] font-normal uppercase tracking-[0.13em] text-[#6f655c] xl:flex 2xl:gap-7">
          {dictionary.nav.home.map((item) => (
            <Link key={item.href} href={withLocale(locale, item.href)} className="transition duration-300 hover:text-[#1f1a17]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={activeLocale} />
          <Link href={withLocale(locale, "/contact")} className="hidden rounded-full border border-[#b58a54]/25 px-4 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-[#1f1a17] transition duration-300 hover:border-[#b58a54] hover:bg-[#1f1a17] hover:text-[#fffdf9] md:inline-flex">
            {dictionary.contact.eyebrow}
          </Link>
        </div>
      </div>
    </header>
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
    <div className="flex shrink-0 items-center rounded-full border border-[#b58a54]/20 bg-[#faf6f0] p-1 text-[0.66rem] font-medium tracking-[0.14em]">
      {(Object.keys(dictionary.languageNames) as SupportedLocale[]).map((option) => (
        <Link
          key={option}
          href={switchHref(option)}
          aria-current={locale === option ? "page" : undefined}
          className={`rounded-full px-3 py-2 transition duration-300 ${
            locale === option
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
    <section className="relative overflow-hidden bg-[#f4ede4] px-6 pb-12 pt-24 md:px-12 md:pb-20 md:pt-28">
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
            <MagneticLink href={withLocale(locale, "/collections")}>{dictionary.hero.primaryCta}</MagneticLink>
            <MagneticLink href={withLocale(locale, "/about")} variant="ghost">
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
              alt="DEZARTI campaign"
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
    <section id="about" className="mx-auto grid max-w-[1100px] scroll-mt-24 gap-10 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:px-12 md:py-24">
      <motion.div {...fadeUp} className="relative min-h-[280px] overflow-hidden rounded-[3px] border border-[#b58a54]/15 md:min-h-[390px] luxury-image-frame">
        <Image
          src="/campaign/dezarti-miss-grasse.png"
          alt={dictionary.about.title}
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
          <MagneticLink href={withLocale(locale, "/about")} variant="ghost">
            {dictionary.about.cta}
          </MagneticLink>
        </div>
      </motion.div>
    </section>
  );
}

type CollectionTab = "women" | "men" | "unisex" | "air";

const collectionTabLinks: Record<CollectionTab, string> = {
  women: "/collections/women",
  men: "/collections/men",
  unisex: "/collections/unisex",
  air: "/collections/ac-ambient",
};

function CollectionTabsSection({ locale }: PageProps) {
  const [activeTab, setActiveTab] = useState<CollectionTab>("women");
  const dictionary = getDictionary(locale);
  const tabs: CollectionTab[] = ["women", "men", "unisex"];
  const items = products.filter((product) => product.category === activeTab).slice(0, 4);

  return (
    <section id="collections" className="scroll-mt-24 bg-[#f4ede4] px-6 py-16 md:px-12 md:py-24">
      <motion.div {...fadeUp} className="mx-auto max-w-[1100px] text-center">
        <p className="luxury-eyebrow">{dictionary.collectionsSection.eyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-light leading-[1.16] text-charcoal md:text-5xl">
          {dictionary.collectionsSection.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.75] text-[#6f655c]">
          {dictionary.collectionsSection.description}
        </p>
      </motion.div>

      <div className="mx-auto mt-8 flex max-w-[1100px] justify-center">
        <div className="flex rounded-full border border-[#b58a54]/20 bg-[#fffdf9] p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.16em] transition duration-300 md:px-7 ${
                activeTab === tab
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
          className="mx-auto mt-10 grid max-w-[1100px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {items.map((product) => (
            <ProductCard key={`${activeTab}-${product.slug}`} locale={locale} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mx-auto mt-8 flex max-w-[1100px] justify-center">
        <MagneticLink href={withLocale(locale, collectionTabLinks[activeTab])} variant="ghost">
          {dictionary.collectionsSection.viewFull[activeTab]}
        </MagneticLink>
      </div>
    </section>
  );
}

function AcAmbientSection({ locale }: PageProps) {
  const dictionary = getDictionary(locale);
  const items = products.filter((product) => product.category === "air").slice(0, 4);

  const title = locale === "ar" ? "عطور التكييف والجو" : "AC & Ambient Fragrances";
  const subtitle = locale === "ar"
    ? "عطور فاخرة مصممة للمنازل، المكاتب، الفنادق، الصالات، وأنظمة التكييف والمساحات الراقية."
    : "Luxury fragrances designed for homes, offices, hotels, lounges, air conditioning systems, and premium environments.";

  const viewFullText = locale === "ar" ? "عرض المجموعة الكاملة" : "View Full Collection";

  return (
    <section id="ac-ambient" className="scroll-mt-24 bg-[#faf6f0] px-6 py-16 md:px-12 md:py-24">
      <motion.div {...fadeUp} className="mx-auto max-w-[1100px] text-center">
        <p className="luxury-eyebrow">{dictionary.collectionsSection.tabs.air || "AC & Ambient"}</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-light leading-[1.16] text-charcoal md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.75] text-[#6f655c]">
          {subtitle}
        </p>
      </motion.div>

      <div className="mx-auto mt-10 grid max-w-[1100px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {items.map((product) => (
          <ProductCard key={`ac-ambient-${product.slug}`} locale={locale} product={product} />
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-[1100px] justify-center">
        <MagneticLink href={withLocale(locale, "/collections/ac-ambient")} variant="ghost">
          {viewFullText}
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

  return (
    <section id={id} className={`${sectionTone} scroll-mt-24 px-6 py-16 md:px-12 md:py-24`}>
      <motion.div {...fadeUp} className="mx-auto mb-10 flex max-w-[1100px] flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="luxury-eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-light leading-[1.16] text-charcoal md:text-5xl">
            {title}
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-[1.75] text-[#6f655c]">{description}</p>
      </motion.div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {items.map((product) => (
          <ProductCard key={`${id}-${product.slug}`} locale={locale} product={product} compact />
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-[1100px] justify-center">
        <MagneticLink href={withLocale(locale, href)} variant="ghost">
          {dictionary.product.viewCollection}
        </MagneticLink>
      </div>
    </section>
  );
}

function ProductShowcase({ locale, eyebrow, title, items }: PageProps & { eyebrow: string; title: string; items: Product[] }) {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
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

function ProductCard({ locale, product, compact = false }: PageProps & { product: Product; compact?: boolean }) {
  const dictionary = getDictionary(locale);
  const display = getProductDisplay(locale, product);
  const imageHeight = compact ? "h-40 sm:h-48 md:h-56" : "h-52 md:h-64 xl:h-72";

  return (
    <motion.article {...fadeUp} className="group luxury-card overflow-hidden rounded-[3px]">
      <Link href={withLocale(locale, `/product/${product.slug}`)} className="block">
        <div className={`relative overflow-hidden bg-[#f4ede4] rounded-t-[3px] luxury-image-frame ${imageHeight}`}>
          <Image src={product.image} alt={display.name} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition duration-700 ease-out group-hover:scale-[1.015]" />
          {display.badge && <span className="absolute left-4 top-4 rounded-[3px] border border-[#b58a54]/25 bg-[#fffdf9]/90 px-3 py-1.5 text-[0.62rem] tracking-[0.12em] text-[#b58a54]">{display.badge}</span>}
        </div>
        <div className={compact ? "p-4 md:p-5" : "p-5 md:p-6"}>
          <p className="text-[0.66rem] uppercase tracking-[0.16em] text-gold">{display.collection}</p>
          <h3 className="mt-2 font-display text-lg text-charcoal md:text-xl">{display.name}</h3>
          {!compact && <p className="mt-3 text-sm leading-7 text-charcoal/55">{display.mood}</p>}
          <div className="mt-5 flex items-center justify-between gap-3 text-sm text-charcoal/70">
            <span>{display.price}</span>
            <span className="rounded-[3px] border border-[#b58a54]/20 px-3 py-1.5 text-[0.68rem] tracking-[0.08em] transition duration-500 ease-out group-hover:border-[#b58a54] group-hover:text-[#b58a54]">
              {dictionary.product.details}
            </span>
          </div>
        </div>
      </Link>
      <a href={whatsappLink(locale, product)} target="_blank" rel="noreferrer" className="mx-4 mb-4 block rounded-[3px] border border-[#b58a54]/20 py-2.5 text-center text-[0.68rem] tracking-[0.1em] text-charcoal/70 transition duration-500 ease-out hover:border-gold hover:text-gold md:mx-5 md:mb-5">
        {dictionary.product.inquire}
      </a>
    </motion.article>
  );
}

function GlobalStatement({ locale }: PageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="grid place-items-center bg-[#efe5d9] px-6 py-24 text-center md:py-36">
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
    <section id="contact" className="scroll-mt-24 bg-[#faf6f0] px-6 py-16 md:px-12 md:py-24">
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
              +971 50 000 0000
            </a>
            <a href="mailto:concierge@dezarti.com" className="border-t border-[#b58a54]/15 pt-4 transition hover:text-[#1f1a17]">
              <span className="block text-[0.64rem] uppercase tracking-[0.16em] text-gold">{dictionary.contact.emailLabel}</span>
              concierge@dezarti.com
            </a>
            <div className="border-t border-[#b58a54]/15 pt-4">
              <span className="block text-[0.64rem] uppercase tracking-[0.16em] text-gold">{dictionary.contact.phoneLabel}</span>
              +971 50 000 0000
            </div>
            <div className="border-t border-[#b58a54]/15 pt-4">
              <span className="block text-[0.64rem] uppercase tracking-[0.16em] text-gold">{dictionary.contact.businessHoursLabel}</span>
              {dictionary.contact.businessHours}
            </div>
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
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-12 md:pb-28 md:pt-40">
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
      <h3 className="font-display text-xl text-[#1f1a17]">{title}</h3>
      <div className="mt-5 grid gap-3">
        {notes.map((note) => (
          <div key={note} className="flex items-center gap-3 rounded-[3px] border border-[#b58a54]/15 bg-[#faf6f0] px-4 py-3">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-gold/35 text-xs text-gold">✦</span>
            <span className="text-sm text-[#6f655c]">{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[#b58a54]/20 pt-4">
      <p className="text-xs tracking-[0.18em] text-gold">{label}</p>
      <p className="mt-3 text-[#6f655c]">{value}</p>
    </div>
  );
}

function MagneticLink({
  href,
  children,
  variant = "solid",
  external = false,
}: React.PropsWithChildren<{ href: string; variant?: "solid" | "ghost"; external?: boolean }>) {
  const className = variant === "solid" ? "luxury-button" : "luxury-button luxury-button-ghost";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
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
    <footer className="border-t border-[#b58a54]/15 bg-[#f4ede4] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-[1100px] flex-col justify-between gap-12 md:flex-row md:items-end">
        <div>
          <p className="font-serif text-3xl tracking-[0.28em] text-[#1f1a17]">DEZARTI</p>
          <p className="mt-5 max-w-md text-sm leading-[1.8] text-[#6f655c]">
            {dictionary.brand.footerText}
          </p>
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
