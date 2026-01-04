import { Bot, ArrowRight, Workflow, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Link } from "react-router-dom";

function FeatureItem({ icon: Icon, title, description, index }: { 
  icon: any; 
  title: string; 
  description: string;
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  
  return (
    <div 
      ref={ref}
      className="scroll-reveal flex gap-4"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function AgenticWorkflowsSection() {
  const { language } = useLanguage();
  const sectionRef = useScrollReveal<HTMLDivElement>();
  
  // Helper to get localized path
  const getLocalizedPath = (basePath: string): string => {
    return language === "sv" ? `/sv${basePath}` : basePath;
  };
  const features = [
    {
      icon: Workflow,
      title: t(translations.agenticSection.features.multiStep.title, language),
      description: t(translations.agenticSection.features.multiStep.description, language),
    },
    {
      icon: Shield,
      title: t(translations.agenticSection.features.guardrails.title, language),
      description: t(translations.agenticSection.features.guardrails.description, language),
    },
    {
      icon: Zap,
      title: t(translations.agenticSection.features.scalable.title, language),
      description: t(translations.agenticSection.features.scalable.description, language),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          ref={sectionRef}
          className="scroll-reveal mx-auto max-w-6xl"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Bot className="h-4 w-4" />
                {t(translations.agenticSection.badge, language)}
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {t(translations.agenticSection.title, language)}
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                {t(translations.agenticSection.subtitle, language)}
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to={getLocalizedPath("/agentic-workflows")}>
                    {t(translations.agenticSection.cta, language)}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="rounded-2xl border bg-card p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t(translations.agenticSection.visual.title, language)}</h4>
                    <p className="text-sm text-muted-foreground">{t(translations.agenticSection.visual.subtitle, language)}</p>
                  </div>
                </div>
                
                {/* Workflow visualization */}
                <div className="space-y-3">
                  {[
                    { step: "1", label: t(translations.agenticSection.visual.steps.receive, language), status: "complete" },
                    { step: "2", label: t(translations.agenticSection.visual.steps.analyze, language), status: "complete" },
                    { step: "3", label: t(translations.agenticSection.visual.steps.execute, language), status: "active" },
                    { step: "4", label: t(translations.agenticSection.visual.steps.verify, language), status: "pending" },
                  ].map((item, index) => (
                    <div 
                      key={item.step}
                      className={`flex items-center gap-3 rounded-lg border p-3 transition-all ${
                        item.status === "active" 
                          ? "border-primary bg-primary/5" 
                          : item.status === "complete"
                          ? "border-muted bg-muted/30"
                          : "border-dashed border-muted"
                      }`}
                    >
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                        item.status === "active"
                          ? "bg-primary text-primary-foreground"
                          : item.status === "complete"
                          ? "bg-muted-foreground/20 text-muted-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {item.status === "complete" ? "✓" : item.step}
                      </div>
                      <span className={item.status === "pending" ? "text-muted-foreground" : ""}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
