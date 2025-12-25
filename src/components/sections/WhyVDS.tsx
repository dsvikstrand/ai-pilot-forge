import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function WhyVDS() {
  const { language } = useLanguage();

  const reasons = [
    t(translations.whyVds.reasons.fast, language),
    t(translations.whyVds.reasons.engineering, language),
    t(translations.whyVds.reasons.communication, language),
    t(translations.whyVds.reasons.gpu, language),
    t(translations.whyVds.reasons.honest, language),
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              {t(translations.whyVds.title, language)}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t(translations.whyVds.subtitle, language)}
            </p>
            <ul className="mt-8 space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 p-8">
              <div className="flex h-full flex-col justify-center space-y-4 rounded-xl border border-border/50 bg-card p-6 shadow-soft">
                <h3 className="text-lg font-semibold">
                  {t(translations.whyVds.outcomes.title, language)}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {t(translations.whyVds.outcomes.prototype, language)}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {t(translations.whyVds.outcomes.metrics, language)}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {t(translations.whyVds.outcomes.plan, language)}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
