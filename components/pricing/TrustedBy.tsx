import { useTranslations } from "next-intl";

export default function TrustedBy() {
  const t = useTranslations("Pricing");

  const companies = [
    "Company A",
    "Company B", 
    "Company C",
    "Company D",
    "Company E",
    "Company F",
    "Company G",
    "Company H",
    "Company I"
  ];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-12">
        {t("trustedBy")}
      </h2>
      
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center opacity-60">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-12 w-24 bg-muted rounded-lg text-sm font-medium text-muted-foreground"
          >
            {company}
          </div>
        ))}
      </div>
    </section>
  );
}
