import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ProfessionalServiceSchema } from "@/components/StructuredData";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServiceDetailModal, ServiceDetail } from "@/components/ui/ServiceDetailModal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Search, Image, Zap, Tags, Boxes, FileCode, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray } from "@/i18n/translations";

const Services = () => {
  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const services: ServiceDetail[] = [
    { 
      icon: Search, 
      title: t(translations.services.rag.title, language), 
      description: t(translations.services.rag.descriptionLong, language),
      longDescription: language === "sv" 
        ? "Vi analyserar din data och ditt användningsfall för att avgöra om RAG är rätt approach. Inkluderar datakvalitetsbedömning, retrieval-strategidesign, och kvalitetsmätning med tydliga benchmarks innan lansering."
        : "We analyze your data and use case to determine if RAG is the right approach. Includes data quality assessment, retrieval strategy design, and quality measurement with clear benchmarks before launch.",
      price: language === "sv" ? "Från 25 000 kr" : "From €2,500",
      priceNote: language === "sv" ? "Typiskt 1-2 veckor" : "Typically 1-2 weeks",
      timeline: language === "sv" ? "1-2 veckor" : "1-2 weeks",
      deliverables: language === "sv" 
        ? ["RAG fit-check rapport", "Datakvalitetsanalys", "Retrieval-strategirekommendationer", "Kvalitetsmätningar & benchmarks", "Go/No-go rekommendation"]
        : ["RAG fit-check report", "Data quality analysis", "Retrieval strategy recommendations", "Quality metrics & benchmarks", "Go/No-go recommendation"]
    },
    { 
      icon: Image, 
      title: t(translations.services.visualSearch.title, language), 
      description: t(translations.services.visualSearch.descriptionLong, language),
      longDescription: language === "sv"
        ? "Bygg en visuell sökpipeline som låter användare hitta produkter genom att ladda upp bilder. Perfekt för e-handel och lagerhantering där visuell matchning överträffar textbaserade sökningar."
        : "Build a visual search pipeline that lets users find products by uploading images. Perfect for e-commerce and inventory management where visual matching outperforms text-based queries.",
      price: language === "sv" ? "Från 35 000 kr" : "From €3,500",
      priceNote: language === "sv" ? "Typiskt 2-3 veckor" : "Typically 2-3 weeks",
      timeline: language === "sv" ? "2-3 veckor" : "2-3 weeks",
      deliverables: language === "sv"
        ? ["Embedding-pipeline för bilder", "Snabb vektorsökning", "API-integration", "Utvärdering på din data", "Dokumentation & överlämning"]
        : ["Image embedding pipeline", "Fast vector search", "API integration", "Evaluation on your data", "Documentation & handover"]
    },
    { 
      icon: Zap, 
      title: t(translations.services.inference.title, language), 
      description: t(translations.services.inference.descriptionLong, language),
      longDescription: language === "sv"
        ? "Profilera dina ML-pipelines för att hitta flaskhalsar och optimera för snabbhet och kostnad. Vi identifierar exakt var tid och pengar spenderas—och åtgärdar det."
        : "Profile your ML pipelines to find bottlenecks and optimize for speed and cost. We identify exactly where time and money are being spent—and fix it.",
      price: language === "sv" ? "Från 30 000 kr" : "From €3,000",
      priceNote: language === "sv" ? "Typiskt 1-2 veckor" : "Typically 1-2 weeks",
      timeline: language === "sv" ? "1-2 veckor" : "1-2 weeks",
      deliverables: language === "sv"
        ? ["Prestandaprofileringsrapport", "Optimeringsrekommendationer", "Implementering av optimeringar", "Före/efter-benchmarks", "Kostnadsbesparingsberäkning"]
        : ["Performance profiling report", "Optimization recommendations", "Implementation of optimizations", "Before/after benchmarks", "Cost savings calculation"]
    },
    { 
      icon: Tags, 
      title: t(translations.services.autoTagging.title, language), 
      description: t(translations.services.autoTagging.descriptionLong, language),
      longDescription: language === "sv"
        ? "Automatisera taggning och kategorisering av bildbibliotek med pålitliga AI-flöden. Minska manuellt etikettarbete drastiskt och förbättra konsekvensen."
        : "Automate tagging and categorization of image libraries with reliable AI workflows. Dramatically reduce manual labeling effort and improve consistency.",
      price: language === "sv" ? "Från 25 000 kr" : "From €2,500",
      priceNote: language === "sv" ? "Typiskt 1-2 veckor" : "Typically 1-2 weeks",
      timeline: language === "sv" ? "1-2 veckor" : "1-2 weeks",
      deliverables: language === "sv"
        ? ["Taggningsmodell/pipeline", "Kvalitetsutvärdering", "Integration med befintligt system", "Taxonomirekommendationer", "Dokumentation"]
        : ["Tagging model/pipeline", "Quality evaluation", "Integration with existing system", "Taxonomy recommendations", "Documentation"]
    },
    { 
      icon: Boxes, 
      title: t(translations.services.prototyping.title, language), 
      description: t(translations.services.prototyping.descriptionLong, language),
      longDescription: language === "sv"
        ? "Gå från idé till fungerande prototyp med korrekt ingenjörskonst och utvärdering från dag ett. Tydliga framgångsmått och iterativ utveckling."
        : "Move from idea to working prototype with proper engineering and evaluation from day one. Clear success metrics and iterative development.",
      price: language === "sv" ? "Från 40 000 kr" : "From €4,000",
      priceNote: language === "sv" ? "Typiskt 2-4 veckor" : "Typically 2-4 weeks",
      timeline: language === "sv" ? "2-4 veckor" : "2-4 weeks",
      deliverables: language === "sv"
        ? ["Fungerande prototyp", "Framgångsmått & utvärdering", "Teknisk dokumentation", "Kodnedladdning", "Produktionsrekommendationer"]
        : ["Working prototype", "Success metrics & evaluation", "Technical documentation", "Code handover", "Production recommendations"]
    },
    { 
      icon: FileCode, 
      title: t(translations.services.deployment.title, language), 
      description: t(translations.services.deployment.descriptionLong, language),
      longDescription: language === "sv"
        ? "Få praktisk rådgivning för att ta dina AI-prototyper till produktion. Vi hjälper med arkitektur, infrastruktur och överlämning."
        : "Get practical advice on taking your AI prototypes to production. We help with architecture, infrastructure, and handover.",
      price: language === "sv" ? "Från 15 000 kr" : "From €1,500",
      priceNote: language === "sv" ? "Typiskt 1 vecka" : "Typically 1 week",
      timeline: language === "sv" ? "1 vecka" : "1 week",
      deliverables: language === "sv"
        ? ["Arkitekturgranskning", "Infrastrukturrekommendationer", "Överlämningsdokumentation", "Checklista för produktion", "Uppföljningssamtal"]
        : ["Architecture review", "Infrastructure recommendations", "Handover documentation", "Production checklist", "Follow-up call"]
    },
  ];

  const deliverables = tArray(translations.servicesPage.deliverables.items, language);

  const handleServiceClick = (service: ServiceDetail) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <Layout>
      <SEO
        titleEn="AI Services - RAG, Visual Search, Inference"
        titleSv="AI-tjänster - RAG, Visuell sökning, Inferens"
        descriptionEn="Specialized AI services including RAG systems, visual search, inference optimization, auto-tagging, prototyping, and deployment for Swedish SMEs."
        descriptionSv="Specialiserade AI-tjänster inklusive RAG-system, visuell sökning, inferensoptimering, auto-taggning, prototyping och driftsättning för svenska SMF."
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
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={service.title} className={index >= 3 ? "hidden md:block" : ""}>
                <ServiceCard 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description}
                  price={service.price}
                  onClick={() => handleServiceClick(service)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="hidden md:block bg-secondary/30 py-16 lg:py-24">
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
      
      <ServiceDetailModal 
        service={selectedService} 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
      />
    </Layout>
  );
};

export default Services;
