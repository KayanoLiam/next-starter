import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Home");

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse delay-500" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8 animate-fade-in">
            ✨ {t("badge", { defaultValue: "New: AI-Powered Development" })}
          </div>

          {/* Main heading with gradient text */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl animate-fade-in-up delay-200">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 animate-fade-in-up delay-300">
            <Button
              size="lg"
              className="text-base px-8 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              {t("downloadButton")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group text-base px-8 py-3 border-2 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
            >
              {t("learnMore")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="mt-16 flow-root sm:mt-24 animate-fade-in-up delay-500">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Main container */}
              <div className="relative rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-3 ring-1 ring-border/50 shadow-2xl lg:rounded-3xl lg:p-6 transform transition-transform duration-500 hover:scale-[1.02]">
                <div className="aspect-[16/10] rounded-xl lg:rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src="/demo.png"
                    alt="Product Demo"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg animate-bounce">
                  Live Demo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
