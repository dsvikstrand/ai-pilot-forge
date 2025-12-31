import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Contact = () => {
  const { language } = useLanguage();

  return (
    <Layout>
      <SEO
        title="Contact VDS - Let's Build Your AI Pilot"
        description="Get in touch to discuss your AI project. Email david@vdsai.se or connect on LinkedIn and GitHub."
        canonical="https://vds.se/contact"
      />
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">{t(translations.contactPage.title, language)}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t(translations.contactPage.subtitle, language)}</p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Mail className="h-6 w-6" /></div>
                <h3 className="mb-2 font-semibold">{t(translations.contactPage.email, language)}</h3>
                <a href="mailto:david@vdsai.se" className="text-sm text-muted-foreground transition-colors hover:text-accent">david@vdsai.se</a>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><MapPin className="h-6 w-6" /></div>
                <h3 className="mb-2 font-semibold">{t(translations.contactPage.location, language)}</h3>
                <p className="text-sm text-muted-foreground">{t(translations.contactPage.locationValue, language)}</p>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Linkedin className="h-6 w-6" /></div>
                <h3 className="mb-2 font-semibold">{t(translations.contactPage.connect, language)}</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/V1kstrand" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-accent" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                  <a href="https://www.linkedin.com/in/david-vikstrand/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-accent" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </Layout>
  );
};

export default Contact;
