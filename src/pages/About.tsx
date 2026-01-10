import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { PageBreadcrumb, BreadcrumbSchema } from "@/components/PageBreadcrumb";
import { RelatedServices } from "@/components/RelatedServices";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray } from "@/i18n/translations";
import founderImage from "@/assets/founder.png";

const About = () => {
  const { language } = useLanguage();
  const context = tArray(translations.aboutPage.context, language);
  const howIWork = tArray(translations.aboutPage.howIWorkItems, language);
  const prefix = language === "sv" ? "/sv" : "/en";
  const baseUrl = "https://vdsai.se";

  return (
    <Layout>
      <SEO
        titleEn="About VDS - Vikstrand Deep Solutions"
        titleSv="Om VDS - Vikstrand Deep Solutions"
        descriptionEn="Learn about the founder of VDS and how we help Swedish SMEs implement GPU-powered AI solutions. From idea to working prototype."
        descriptionSv="Lär dig om grundaren av VDS och hur vi hjälper svenska SMF att implementera GPU-drivna AI-lösningar. Från idé till fungerande prototyp."
      />
      <BreadcrumbSchema 
        items={[
          { name: language === "sv" ? "Hem" : "Home", url: `${baseUrl}${prefix}` },
          { name: t(translations.aboutPage.title, language), url: `${baseUrl}${prefix}/about` }
        ]} 
      />
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <PageBreadcrumb 
              items={[{ label: t(translations.aboutPage.title, language) }]} 
            />
            <div className="text-center">
              <h1 className="text-4xl font-bold md:text-5xl">{t(translations.aboutPage.title, language)}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{t(translations.aboutPage.subtitle, language)}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold">{t(translations.aboutPage.contextTitle, language)}</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                {context.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-medium">
                <img src={founderImage} alt="Founder of VDS" className="aspect-square w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">{t(translations.aboutPage.howIWork, language)}</h2>
            <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
              <ul className="space-y-4">
                {howIWork.map((item, index) => (
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <RelatedServices maxItems={3} />
          </div>
        </div>
      </section>
      <ContactCTA />
    </Layout>
  );
};

export default About;
