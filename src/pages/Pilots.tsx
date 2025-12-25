import { Layout } from "@/components/layout/Layout";
import { PilotCard } from "@/components/ui/PilotCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray } from "@/i18n/translations";

const Pilots = () => {
  const { language } = useLanguage();

  const pilots = [
    { title: t(translations.pilots.discovery.title, language), duration: t(translations.pilots.discovery.duration, language), description: t(translations.pilots.discovery.description, language), deliverables: tArray(translations.pilots.discovery.deliverables, language) },
    { title: t(translations.pilots.sprint.title, language), duration: t(translations.pilots.sprint.duration, language), description: t(translations.pilots.sprint.description, language), deliverables: tArray(translations.pilots.sprint.deliverables, language), featured: true },
    { title: t(translations.pilots.optimization.title, language), duration: t(translations.pilots.optimization.duration, language), description: t(translations.pilots.optimization.description, language), deliverables: tArray(translations.pilots.optimization.deliverables, language) },
  ];

  const faqs = translations.faqs.map((faq) => ({ question: t(faq.question, language), answer: t(faq.answer, language) }));

  return (
    <Layout>
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">{t(translations.pilotsPage.title, language)}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t(translations.pilotsPage.subtitle, language)}</p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pilots.map((pilot, index) => (
              <PilotCard key={pilot.title} title={pilot.title} duration={pilot.duration} description={pilot.description} deliverables={pilot.deliverables} featured={pilot.featured} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">{t(translations.pilotsPage.faq, language)}</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <ContactCTA />
    </Layout>
  );
};

export default Pilots;
