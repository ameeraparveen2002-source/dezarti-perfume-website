import { ProductDetail } from "@/components/luxury-shell";
import { products } from "@/lib/dezarti-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return ["ar", "en"].flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
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

  return <ProductDetail locale={locale} product={product} />;
}
