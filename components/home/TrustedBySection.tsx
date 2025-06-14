import { useTranslations } from "next-intl";

export default function TrustedBySection() {
  const t = useTranslations("Home");

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
    <section className="py-16 sm:py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-lg font-semibold text-muted-foreground mb-12">
            {t("trustedBy")}
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 items-center justify-items-center animate-fade-in-up delay-200">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`group flex items-center justify-center h-14 w-24 bg-gradient-to-br from-muted/60 to-muted/30 backdrop-blur-sm rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground hover:from-primary/10 hover:to-primary/5 transition-all duration-300 transform hover:scale-110 hover:shadow-lg animate-fade-in delay-${index * 50}`}
            >
              <span className="transition-all duration-300 group-hover:font-semibold">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
