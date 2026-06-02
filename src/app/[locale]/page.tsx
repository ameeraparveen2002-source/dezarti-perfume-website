import { LuxuryHome } from "@/components/luxury-shell";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return <LuxuryHome locale={locale} />;
}
