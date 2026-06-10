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
  return getBaseMetadata(locale, "/best-sellers");
}

export default async function BestSellersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getDictionary(locale).homeSections[1]; // best-sellers copy
  const pageTitle = locale === "ar" ? "الأكثر طلباً" : "Best Sellers";

  const collectionJsonLd = getStructuredData(locale, "collection", {
    name: copy.eyebrow,
    path: "/best-sellers",
    description: copy.description,
  });
  
  const breadcrumbJsonLd = getStructuredData(locale, "breadcrumb", {
    path: "/best-sellers",
  });

  return (
    <>
      {collectionJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
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
        title={pageTitle}
        description={copy.description}
        filter="best"
      />
    </>
  );
}
