import { CheckCircle2, Clock, Target, Database, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import rorstrandImage from "@/assets/rorstrand-porcelain.png";

export function WhyVDS() {
  const { language } = useLanguage();

  const reasons = [
    t(translations.whyVds.reasons.fast, language),
    t(translations.whyVds.reasons.engineering, language),
    t(translations.whyVds.reasons.communication, language),
    t(translations.whyVds.reasons.gpu, language),
    t(translations.whyVds.reasons.honest, language),
  ];

  const metrics = [
    {
      icon: Clock,
      value: t(translations.whyVds.caseStudy.responseTime, language),
      label: t(translations.whyVds.caseStudy.responseTimeLabel, language),
    },
    {
      icon: Target,
      value: t(translations.whyVds.caseStudy.accuracy, language),
      label: t(translations.whyVds.caseStudy.accuracyLabel, language),
    },
    {
      icon: Database,
      value: t(translations.whyVds.caseStudy.images, language),
      label: t(translations.whyVds.caseStudy.imagesLabel, language),
    },
    {
      icon: Rocket,
      value: t(translations.whyVds.caseStudy.production, language),
      label: t(translations.whyVds.caseStudy.productionLabel, language),
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Why VDS Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 mb-20">
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
          
          {/* Case Study Card */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-soft">
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={rorstrandImage} 
                  alt="Rörstrand porcelain collection" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {t(translations.whyVds.caseStudy.badge, language)}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-accent">
                    {t(translations.whyVds.caseStudy.client, language)}
                  </p>
                  <h3 className="text-xl font-semibold mt-1">
                    {t(translations.whyVds.caseStudy.title, language)}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(translations.whyVds.caseStudy.challenge, language)}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(translations.whyVds.caseStudy.solution, language)}
                </p>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  {metrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <metric.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
