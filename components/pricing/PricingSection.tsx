"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const t = useTranslations("Pricing");
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Hobby",
      price: { monthly: 0, yearly: 0 },
      description: t("hobby.description"),
      features: [
        t("hobby.feature1"),
        t("hobby.feature2"),
        t("hobby.feature3"),
      ],
      buttonText: t("hobby.button"),
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: { monthly: 20, yearly: 16 },
      description: t("pro.description"),
      features: [
        t("pro.feature1"),
        t("pro.feature2"),
        t("pro.feature3"),
        t("pro.feature4"),
      ],
      buttonText: t("pro.button"),
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Business",
      price: { monthly: 40, yearly: 32 },
      description: t("business.description"),
      features: [
        t("business.feature1"),
        t("business.feature2"),
        t("business.feature3"),
        t("business.feature4"),
      ],
      buttonText: t("business.button"),
      buttonVariant: "default" as const,
      popular: false,
    },
  ];

  return (
    <section className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-muted-foreground mb-12">
        {t("subtitle")}
      </p>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center mb-12">
        <span className={cn("mr-3", !isYearly ? "text-foreground" : "text-muted-foreground")}>
          {t("monthly")}
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={cn(
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
            isYearly ? "bg-primary" : "bg-muted"
          )}
        >
          <span
            className={cn(
              "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
              isYearly ? "translate-x-6" : "translate-x-1"
            )}
          />
        </button>
        <span className={cn("ml-3", isYearly ? "text-foreground" : "text-muted-foreground")}>
          {t("yearly")} <span className="text-green-600 font-medium">({t("discount")})</span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-2xl border p-8 text-left",
              plan.popular
                ? "border-primary shadow-lg scale-105"
                : "border-border"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t("popular")}
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold">
                  {plan.price.monthly === 0 ? t("free") : `$${isYearly ? plan.price.yearly : plan.price.monthly}`}
                </span>
                {plan.price.monthly > 0 && (
                  <span className="text-muted-foreground ml-1">
                    /{isYearly ? t("year") : t("month")}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold mb-4">{t("includes")}</h4>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant={plan.buttonVariant}
              className="w-full"
              size="lg"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>

      {/* Enterprise Contact */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-4">
          {t("enterprise.question")}
        </p>
        <Button variant="outline">
          {t("enterprise.contact")}
        </Button>
      </div>
    </section>
  );
}
