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
  return getBaseMetadata(locale, "/collections/unisex");
}

export default async function CollectionUnisexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getDictionary(locale).collectionPages.unisex;
  const jsonLd = getStructuredData(locale, "collection", {
    name: copy.eyebrow,
    path: "/collections/unisex",
    description: copy.description,
  });
  const breadcrumbJsonLd = getStructuredData(locale, "breadcrumb", { path: "/collections/unisex" });

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
        filter="unisex"
      />
    </>
  );
}
