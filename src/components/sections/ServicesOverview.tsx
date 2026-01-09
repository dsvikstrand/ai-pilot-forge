import { Target, Wrench, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

function StepCard({ step, index }: { step: { icon: any; number: string; title: string; description: string }; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  
  return (
    <div 
      ref={ref}
      className="scroll-reveal relative text-center"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 hover:scale-110">
        <step.icon className="h-7 w-7" />
      </div>
      <span className="mb-2 block text-sm font-medium text-accent">
        Step {step.number}
      </span>
      <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
      <p className="text-sm text-muted-foreground">{step.description}</p>
    </div>
  );
}

export function ServicesOverview() {
  const { language } = useLanguage();

  const steps = [
    {
      icon: Target,
      number: "01",
      title: t(translations.howItWorks.step1.title, language),
      description: t(translations.howItWorks.step1.description, language),
    },
    {
      icon: Wrench,
      number: "02",
      title: t(translations.howItWorks.step2.title, language),
      description: t(translations.howItWorks.step2.description, language),
    },
    {
      icon: Rocket,
      number: "03",
      title: t(translations.howItWorks.step3.title, language),
      description: t(translations.howItWorks.step3.description, language),
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            {t(translations.servicesOverview.title, language)}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t(translations.servicesOverview.subtitle, language)}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
