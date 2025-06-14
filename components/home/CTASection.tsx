import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("Home.cta");

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative group animate-fade-in-up">
          {/* Outer glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

          {/* Main container */}
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 px-8 py-24 text-center shadow-2xl rounded-3xl sm:px-16 transform transition-transform duration-500 hover:scale-[1.02]">
            {/* Animated background patterns */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float delay-1000" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground mb-8 animate-fade-in">
                🎉 {t("badge", { defaultValue: "Ready to Get Started?" })}
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl animate-fade-in-up delay-200">
                {t("title")}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90 animate-fade-in-up delay-300">
                {t("description")}
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 animate-fade-in-up delay-500">
                <Button
                  size="lg"
                  className="group text-base px-8 py-3 bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  {t("downloadButton")}
                </Button>
                <Button
                  size="lg"
                  className="group text-base px-8 py-3 bg-white text-black border-2 border-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {t("learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
