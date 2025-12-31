import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ProfessionalServiceSchema } from "@/components/StructuredData";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Search, Image, Zap, Tags, Boxes, FileCode, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray } from "@/i18n/translations";

const Services = () => {
  const { language } = useLanguage();

  const services = [
    { icon: Search, title: t(translations.services.rag.title, language), description: t(translations.services.rag.descriptionLong, language) },
    { icon: Image, title: t(translations.services.visualSearch.title, language), description: t(translations.services.visualSearch.descriptionLong, language) },
    { icon: Zap, title: t(translations.services.inference.title, language), description: t(translations.services.inference.descriptionLong, language) },
    { icon: Tags, title: t(translations.services.autoTagging.title, language), description: t(translations.services.autoTagging.descriptionLong, language) },
    { icon: Boxes, title: t(translations.services.prototyping.title, language), description: t(translations.services.prototyping.descriptionLong, language) },
    { icon: FileCode, title: t(translations.services.deployment.title, language), description: t(translations.services.deployment.descriptionLong, language) },
  ];

  const deliverables = tArray(translations.servicesPage.deliverables.items, language);

  return (
    <Layout>
      <SEO
        title="AI Services - RAG, Visual Search, Inference"
        description="Specialized AI services including RAG systems, visual search, inference optimization, auto-tagging, prototyping, and deployment for Swedish SMEs."
        canonical="https://vds.se/services"
      />
      <ProfessionalServiceSchema />
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">{t(translations.servicesPage.title, language)}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t(translations.servicesPage.subtitle, language)}</p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">{t(translations.servicesPage.deliverables.title, language)}</h2>
            <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </Layout>
  );
};

export default Services;
