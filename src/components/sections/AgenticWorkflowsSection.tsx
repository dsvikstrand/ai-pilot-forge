import { Bot, Brain, Wrench, Shield, Lightbulb, FileText, Network, Users, ArrowRight, Workflow } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

export function AgenticWorkflowsSection() {
  const { language } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>();

  const components = [
    { 
      icon: Brain, 
      title: t(translations.agenticSection.components.model.title, language), 
      description: t(translations.agenticSection.components.model.description, language),
      color: "bg-primary/10 text-primary"
    },
    { 
      icon: Wrench, 
      title: t(translations.agenticSection.components.tools.title, language), 
      description: t(translations.agenticSection.components.tools.description, language),
      color: "bg-accent/10 text-accent"
    },
    { 
      icon: Shield, 
      title: t(translations.agenticSection.components.guardrails.title, language), 
      description: t(translations.agenticSection.components.guardrails.description, language),
      color: "bg-muted-foreground/10 text-muted-foreground"
    },
  ];

  const useCases = [
    { 
      icon: Lightbulb, 
      title: t(translations.agenticSection.useCases.complex.title, language), 
      description: t(translations.agenticSection.useCases.complex.description, language) 
    },
    { 
      icon: FileText, 
      title: t(translations.agenticSection.useCases.unstructured.title, language), 
      description: t(translations.agenticSection.useCases.unstructured.description, language) 
    },
    { 
      icon: Network, 
      title: t(translations.agenticSection.useCases.multiSystem.title, language), 
      description: t(translations.agenticSection.useCases.multiSystem.description, language) 
    },
  ];

  const patterns = [
    { 
      icon: Bot, 
      title: t(translations.agenticSection.patterns.single.title, language), 
      description: t(translations.agenticSection.patterns.single.description, language),
      diagram: "Input → [Agent + Tools] → Output"
    },
    { 
      icon: Users, 
      title: t(translations.agenticSection.patterns.manager.title, language), 
      description: t(translations.agenticSection.patterns.manager.description, language),
      diagram: "Manager → [Agent A] [Agent B] [Agent C]"
    },
    { 
      icon: Workflow, 
      title: t(translations.agenticSection.patterns.decentralized.title, language), 
      description: t(translations.agenticSection.patterns.decentralized.description, language),
      diagram: "Agent ⇄ Agent ⇄ Agent"
    },
  ];

  return (
    <section ref={sectionRef} className="scroll-reveal relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4 border-primary/20 bg-primary/10 text-primary">
            {t(translations.agenticSection.badge, language)}
          </Badge>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            {t(translations.agenticSection.title, language)}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(translations.agenticSection.subtitle, language)}
          </p>
        </div>

        {/* What is an agent? */}
        <div className="mx-auto mb-16 max-w-4xl">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-xl">
                <Bot className="h-6 w-6 text-primary" />
                {t(translations.agenticSection.whatIs.title, language)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground leading-relaxed">
                {t(translations.agenticSection.whatIs.description, language)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Components - Visual Diagram */}
        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-semibold">
            {t(translations.agenticSection.components.title, language)}
          </h3>
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              {/* Agent Box */}
              <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
                {components.map((component, index) => (
                  <div key={component.title} className="flex items-center gap-4">
                    <div className="flex flex-col items-center text-center">
                      <div className={`mb-3 flex h-16 w-16 items-center justify-center rounded-xl ${component.color}`}>
                        <component.icon className="h-8 w-8" />
                      </div>
                      <h4 className="font-semibold">{component.title}</h4>
                      <p className="mt-1 max-w-[180px] text-sm text-muted-foreground">
                        {component.description}
                      </p>
                    </div>
                    {index < components.length - 1 && (
                      <ArrowRight className="hidden h-6 w-6 text-muted-foreground/50 md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-semibold">
            {t(translations.agenticSection.useCases.title, language)}
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-medium">
                <CardHeader className="pb-3">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Orchestration Patterns */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-semibold">
            {t(translations.agenticSection.patterns.title, language)}
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {patterns.map((pattern) => (
              <Card key={pattern.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <pattern.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{pattern.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-sm leading-relaxed">
                    {pattern.description}
                  </CardDescription>
                  <div className="rounded-md bg-muted/50 px-3 py-2 font-mono text-xs text-muted-foreground">
                    {pattern.diagram}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link to="/contact">
              {t(translations.agenticSection.cta, language)}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
