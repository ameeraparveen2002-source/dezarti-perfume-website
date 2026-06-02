import { ContactPage } from "@/components/luxury-shell";

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return <ContactPage locale={locale} />;
}
