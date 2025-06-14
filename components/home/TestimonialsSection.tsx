import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("Home.testimonials");

  const testimonials = [
    {
      content: t("testimonial1.content"),
      author: t("testimonial1.author"),
      company: t("testimonial1.company"),
      avatar: "1",
    },
    {
      content: t("testimonial2.content"),
      author: t("testimonial2.author"),
      company: t("testimonial2.company"),
      avatar: "2",
    },
    {
      content: t("testimonial3.content"),
      author: t("testimonial3.author"),
      company: t("testimonial3.company"),
      avatar: "3",
    },
    {
      content: t("testimonial4.content"),
      author: t("testimonial4.author"),
      company: t("testimonial4.company"),
      avatar: "4",
    },
    {
      content: t("testimonial5.content"),
      author: t("testimonial5.author"),
      company: t("testimonial5.company"),
      avatar: "5",
    },
    {
      content: t("testimonial6.content"),
      author: t("testimonial6.author"),
      company: t("testimonial6.company"),
      avatar: "6",
    },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-4">
            💬 {t("badge", { defaultValue: "Customer Stories" })}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 animate-fade-in-up delay-${index * 100}`}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-8 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold text-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
