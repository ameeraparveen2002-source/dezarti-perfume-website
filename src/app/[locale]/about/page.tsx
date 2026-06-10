import { Metadata } from "next";
import { AboutPage } from "@/components/luxury-shell";
import { getBaseMetadata, getStructuredData } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getBaseMetadata(locale, "/about");
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const jsonLd = getStructuredData(locale, "about");
  const breadcrumbJsonLd = getStructuredData(locale, "breadcrumb", { path: "/about" });

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      <AboutPage locale={locale} />
    </>
  );
}
