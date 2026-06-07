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
  const jsonLd = getStructuredData(locale, "website");

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <LuxuryHome locale={locale} />
    </>
  );
}
