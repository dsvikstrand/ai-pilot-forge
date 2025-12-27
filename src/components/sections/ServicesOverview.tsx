import { Search, Image, Zap, Tags, Boxes, Bot } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function ServicesOverview() {
  const { language } = useLanguage();

  const services = [
    {
      icon: Search,
      title: t(translations.services.rag.title, language),
      description: t(translations.services.rag.description, language),
    },
    {
      icon: Image,
      title: t(translations.services.visualSearch.title, language),
      description: t(translations.services.visualSearch.description, language),
    },
    {
      icon: Zap,
      title: t(translations.services.inference.title, language),
      description: t(translations.services.inference.description, language),
    },
    {
      icon: Tags,
      title: t(translations.services.autoTagging.title, language),
      description: t(translations.services.autoTagging.description, language),
    },
    {
      icon: Boxes,
      title: t(translations.services.prototyping.title, language),
      description: t(translations.services.prototyping.description, language),
    },
    {
      icon: Bot,
      title: t(translations.services.agenticWorkflows.title, language),
      description: t(translations.services.agenticWorkflows.description, language),
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
