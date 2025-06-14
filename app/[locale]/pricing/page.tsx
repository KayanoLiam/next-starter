import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import PricingSection from "@/components/pricing/PricingSection";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import TrustedBy from "@/components/pricing/TrustedBy";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Pricing");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <PricingSection />
        <TrustedBy />
        <PricingFAQ />
      </div>
    </div>
  );
}
