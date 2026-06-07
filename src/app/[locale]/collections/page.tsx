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
  return getBaseMetadata(locale, "/collections");
}

export default async function CollectionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getDictionary(locale).collectionPages.collections;
  const jsonLd = getStructuredData(locale, "collection", {
    name: copy.eyebrow,
    path: "/collections",
    description: copy.description,
  });

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <CollectionPage
        locale={locale}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
    </>
  );
}
