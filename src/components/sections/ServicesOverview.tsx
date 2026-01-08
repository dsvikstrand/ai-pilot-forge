import { useState } from "react";
import { Search, Image, Zap, Tags, Boxes, Bot } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServiceDetailModal, ServiceDetail } from "@/components/ui/ServiceDetailModal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

export function ServicesOverview() {
  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const services: ServiceDetail[] = [
    {
      icon: Search,
      title: t(translations.services.rag.title, language),
      description: t(translations.services.rag.description, language),
      longDescription: language === "sv" 
        ? "Vi analyserar din data och ditt användningsfall för att avgöra om RAG är rätt approach. Inkluderar datakvalitetsbedömning, retrieval-strategidesign, och kvalitetsmätning."
        : "We analyze your data and use case to determine if RAG is the right approach. Includes data quality assessment, retrieval strategy design, and quality measurement.",
      price: language === "sv" ? "Från 25 000 kr" : "From €2,500",
      priceNote: language === "sv" ? "Typiskt 1-2 veckor" : "Typically 1-2 weeks",
      timeline: language === "sv" ? "1-2 veckor" : "1-2 weeks",
      deliverables: language === "sv" 
        ? ["RAG fit-check rapport", "Datakvalitetsanalys", "Retrieval-strategirekommendationer", "Go/No-go rekommendation"]
        : ["RAG fit-check report", "Data quality analysis", "Retrieval strategy recommendations", "Go/No-go recommendation"]
    },
    {
      icon: Image,
      title: t(translations.services.visualSearch.title, language),
      description: t(translations.services.visualSearch.description, language),
      longDescription: language === "sv"
        ? "Bygg en visuell sökpipeline som låter användare hitta produkter genom att ladda upp bilder."
        : "Build a visual search pipeline that lets users find products by uploading images.",
      price: language === "sv" ? "Från 35 000 kr" : "From €3,500",
      priceNote: language === "sv" ? "Typiskt 2-3 veckor" : "Typically 2-3 weeks",
      timeline: language === "sv" ? "2-3 veckor" : "2-3 weeks",
      deliverables: language === "sv"
        ? ["Embedding-pipeline för bilder", "Snabb vektorsökning", "API-integration", "Dokumentation"]
        : ["Image embedding pipeline", "Fast vector search", "API integration", "Documentation"]
    },
    {
      icon: Zap,
      title: t(translations.services.inference.title, language),
      description: t(translations.services.inference.description, language),
      longDescription: language === "sv"
        ? "Profilera dina ML-pipelines för att hitta flaskhalsar och optimera för snabbhet och kostnad."
        : "Profile your ML pipelines to find bottlenecks and optimize for speed and cost.",
      price: language === "sv" ? "Från 30 000 kr" : "From €3,000",
      priceNote: language === "sv" ? "Typiskt 1-2 veckor" : "Typically 1-2 weeks",
      timeline: language === "sv" ? "1-2 veckor" : "1-2 weeks",
      deliverables: language === "sv"
        ? ["Prestandaprofileringsrapport", "Optimeringsrekommendationer", "Före/efter-benchmarks"]
        : ["Performance profiling report", "Optimization recommendations", "Before/after benchmarks"]
    },
    {
      icon: Tags,
      title: t(translations.services.autoTagging.title, language),
      description: t(translations.services.autoTagging.description, language),
      longDescription: language === "sv"
        ? "Automatisera taggning och kategorisering av bildbibliotek med pålitliga AI-flöden."
        : "Automate tagging and categorization of image libraries with reliable AI workflows.",
      price: language === "sv" ? "Från 25 000 kr" : "From €2,500",
      priceNote: language === "sv" ? "Typiskt 1-2 veckor" : "Typically 1-2 weeks",
      timeline: language === "sv" ? "1-2 veckor" : "1-2 weeks",
      deliverables: language === "sv"
        ? ["Taggningsmodell/pipeline", "Kvalitetsutvärdering", "Integration med befintligt system"]
        : ["Tagging model/pipeline", "Quality evaluation", "Integration with existing system"]
    },
    {
      icon: Boxes,
      title: t(translations.services.prototyping.title, language),
      description: t(translations.services.prototyping.description, language),
      longDescription: language === "sv"
        ? "Gå från idé till fungerande prototyp med korrekt ingenjörskonst och utvärdering från dag ett."
        : "Move from idea to working prototype with proper engineering and evaluation from day one.",
      price: language === "sv" ? "Från 40 000 kr" : "From €4,000",
      priceNote: language === "sv" ? "Typiskt 2-4 veckor" : "Typically 2-4 weeks",
      timeline: language === "sv" ? "2-4 veckor" : "2-4 weeks",
      deliverables: language === "sv"
        ? ["Fungerande prototyp", "Framgångsmått & utvärdering", "Teknisk dokumentation"]
        : ["Working prototype", "Success metrics & evaluation", "Technical documentation"]
    },
    {
      icon: Bot,
      title: t(translations.services.agenticWorkflows.title, language),
      description: t(translations.services.agenticWorkflows.description, language),
      longDescription: language === "sv"
        ? "Skräddarsydda AI-agenter som autonomt utför komplexa flerstegsuppgifter med mänsklig kontroll."
        : "Custom AI agents that autonomously execute complex multi-step tasks with human-in-the-loop guardrails.",
      price: language === "sv" ? "Från 50 000 kr" : "From €5,000",
      priceNote: language === "sv" ? "Typiskt 3-4 veckor" : "Typically 3-4 weeks",
      timeline: language === "sv" ? "3-4 veckor" : "3-4 weeks",
      deliverables: language === "sv"
        ? ["Fungerande agentpipeline", "Säkerhetsmekanismer", "Utvärdering & dokumentation"]
        : ["Working agent pipeline", "Safety mechanisms", "Evaluation & documentation"]
    },
  ];

  const handleServiceClick = (service: ServiceDetail) => {
    setSelectedService(service);
    setModalOpen(true);
  };

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
              price={service.price}
              delay={index * 100}
              onClick={() => handleServiceClick(service)}
            />
          ))}
        </div>
      </div>
      
      <ServiceDetailModal 
        service={selectedService} 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
      />
    </section>
  );
}
