import { Link } from "react-router-dom";
import { ArrowRight, Search, Image, Zap, Tags, Boxes, FileCode, Bot } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface RelatedServicesProps {
  currentService?: string;
  maxItems?: number;
}

const services = [
  {
    id: "rag",
    icon: Search,
    title: { en: "RAG Systems", sv: "RAG-system" },
    description: { en: "Knowledge retrieval with AI", sv: "Kunskapsåtervinning med AI" },
    href: "/services#rag",
  },
  {
    id: "visual-search",
    icon: Image,
    title: { en: "Visual Search", sv: "Visuell sökning" },
    description: { en: "Find products from images", sv: "Hitta produkter från bilder" },
    href: "/services#visual-search",
  },
  {
    id: "inference",
    icon: Zap,
    title: { en: "Inference Optimization", sv: "Inferensoptimering" },
    description: { en: "Faster, cheaper ML", sv: "Snabbare, billigare ML" },
    href: "/services#inference",
  },
  {
    id: "auto-tagging",
    icon: Tags,
    title: { en: "Auto-tagging", sv: "Auto-taggning" },
    description: { en: "Automated categorization", sv: "Automatiserad kategorisering" },
    href: "/services#auto-tagging",
  },
  {
    id: "prototyping",
    icon: Boxes,
    title: { en: "Prototyping", sv: "Prototyping" },
    description: { en: "Build and test fast", sv: "Bygg och testa snabbt" },
    href: "/services#prototyping",
  },
  {
    id: "agentic",
    icon: Bot,
    title: { en: "Agentic Workflows", sv: "Agentiska flöden" },
    description: { en: "Autonomous AI agents", sv: "Autonoma AI-agenter" },
    href: "/agentic-workflows",
  },
  {
    id: "deployment",
    icon: FileCode,
    title: { en: "Deployment", sv: "Driftsättning" },
    description: { en: "Production guidance", sv: "Produktionsvägledning" },
    href: "/services#deployment",
  },
];

export function RelatedServices({ currentService, maxItems = 3 }: RelatedServicesProps) {
  const { language } = useLanguage();
  const prefix = language === "sv" ? "/sv" : "/en";
  
  const filteredServices = services
    .filter((s) => s.id !== currentService)
    .slice(0, maxItems);

  const title = language === "sv" ? "Relaterade tjänster" : "Related services";
  const viewAll = language === "sv" ? "Visa alla tjänster" : "View all services";

  return (
    <section className="border-t border-border pt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <Link 
          to={`${prefix}/services`}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {viewAll}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <Link key={service.id} to={`${prefix}${service.href}`}>
            <Card className="group h-full transition-colors hover:border-primary/50">
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base group-hover:text-primary">
                    {service.title[language]}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {service.description[language]}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
