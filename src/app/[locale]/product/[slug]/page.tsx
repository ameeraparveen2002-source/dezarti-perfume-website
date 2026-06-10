import { Metadata } from "next";
import { ProductDetail } from "@/components/luxury-shell";
import { products } from "@/lib/dezarti-data";
import { getProductMetadata, getStructuredData } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return ["ar", "en"].flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return getProductMetadata(locale, product);
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const jsonLd = getStructuredData(locale, "product", { product });
  const breadcrumbJsonLd = getStructuredData(locale, "breadcrumb", { product });

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
      <ProductDetail locale={locale} product={product} />
    </>
  );
}
