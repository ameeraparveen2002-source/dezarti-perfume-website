import { Metadata } from "next";
import { CollectionPage } from "@/components/luxury-shell";
import { getDictionary } from "@/lib/translations";
import { getBaseMetadata, getStructuredData } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getBaseMetadata(locale, "/collections/ac-ambient");
}

export default async function CollectionAcAmbientPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getDictionary(locale).collectionPages.airFragrances;
  const jsonLd = getStructuredData(locale, "collection", {
    name: copy.eyebrow,
    path: "/collections/ac-ambient",
    description: copy.description,
  });
  const breadcrumbJsonLd = getStructuredData(locale, "breadcrumb", { path: "/collections/ac-ambient" });

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
      <CollectionPage
        locale={locale}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        filter="air"
      />
    </>
  );
}
