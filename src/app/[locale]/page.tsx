import { Metadata } from "next";
import { LuxuryHome } from "@/components/luxury-shell";
import { getBaseMetadata, getStructuredData } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getBaseMetadata(locale, "");
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const websiteJsonLd = getStructuredData(locale, "website");
  const organizationJsonLd = getStructuredData(locale, "organization");
  const localBusinessJsonLd = getStructuredData(locale, "localbusiness");

  return (
    <>
      {websiteJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      )}
      {organizationJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      )}
      {localBusinessJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      )}
      <LuxuryHome locale={locale} />
    </>
  );
}
