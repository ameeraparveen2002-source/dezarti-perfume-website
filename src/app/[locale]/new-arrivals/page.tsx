import { CollectionPage } from "@/components/luxury-shell";
import { getDictionary } from "@/lib/translations";

export default async function NewArrivalsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getDictionary(locale).collectionPages.newArrivals;

  return (
    <CollectionPage
      locale={locale}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      filter="new"
    />
  );
}
