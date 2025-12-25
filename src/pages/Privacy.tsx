import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray } from "@/i18n/translations";

const Privacy = () => {
  const { language } = useLanguage();
  const sections = translations.privacyPage.sections;

  return (
    <Layout>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold">{t(translations.privacyPage.title, language)}</h1>
            <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg">{t(translations.privacyPage.lastUpdated, language)} {new Date().toLocaleDateString(language === "sv" ? "sv-SE" : "en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">{t(sections.overview.title, language)}</h2>
              <p>{t(sections.overview.content, language)}</p>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">{t(sections.collect.title, language)}</h2>
              <p>{t(sections.collect.intro, language)}</p>
              <ul className="list-disc pl-6 space-y-2">{tArray(sections.collect.items, language).map((item, i) => <li key={i}>{item}</li>)}</ul>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">{t(sections.use.title, language)}</h2>
              <p>{t(sections.use.intro, language)}</p>
              <ul className="list-disc pl-6 space-y-2">{tArray(sections.use.items, language).map((item, i) => <li key={i}>{item}</li>)}</ul>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">{t(sections.security.title, language)}</h2>
              <p>{t(sections.security.content, language)}</p>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">{t(sections.rights.title, language)}</h2>
              <p>{t(sections.rights.content, language)}</p>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">{t(sections.contactPrivacy.title, language)}</h2>
              <p>{t(sections.contactPrivacy.content, language)}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
