import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray } from "@/i18n/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { PilotCard } from "@/components/ui/PilotCard";
import { 
  Bot, 
  ArrowRight, 
  CheckCircle, 
  Workflow, 
  Shield, 
  Zap,
  Users,
  TrendingUp,
  Clock,
  Target,
  Lightbulb,
  Cog,
  Sparkles
} from "lucide-react";

function UseCaseCard({ icon: Icon, title, description, examples, index }: {
  icon: any;
  title: string;
  description: string;
  examples: string[];
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  
  return (
    <div 
      ref={ref}
      className="scroll-reveal rounded-xl border bg-card p-6 transition-all hover:shadow-lg"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <ul className="space-y-2">
        {examples.map((example, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon: Icon, title, description, index }: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  
  return (
    <div 
      ref={ref}
      className="scroll-reveal text-center"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="mb-2 font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default function AgenticWorkflows() {
  const { language } = useLanguage();
  const heroRef = useScrollReveal<HTMLDivElement>();

  const useCases = [
    {
      icon: TrendingUp,
      title: t(translations.agenticPage.useCases.research.title, language),
      description: t(translations.agenticPage.useCases.research.description, language),
      examples: tArray(translations.agenticPage.useCases.research.examples, language),
    },
    {
      icon: Users,
      title: t(translations.agenticPage.useCases.customer.title, language),
      description: t(translations.agenticPage.useCases.customer.description, language),
      examples: tArray(translations.agenticPage.useCases.customer.examples, language),
    },
    {
      icon: Cog,
      title: t(translations.agenticPage.useCases.operations.title, language),
      description: t(translations.agenticPage.useCases.operations.description, language),
      examples: tArray(translations.agenticPage.useCases.operations.examples, language),
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: t(translations.agenticPage.benefits.time.title, language),
      description: t(translations.agenticPage.benefits.time.description, language),
    },
    {
      icon: Target,
      title: t(translations.agenticPage.benefits.accuracy.title, language),
      description: t(translations.agenticPage.benefits.accuracy.description, language),
    },
    {
      icon: Zap,
      title: t(translations.agenticPage.benefits.scalability.title, language),
      description: t(translations.agenticPage.benefits.scalability.description, language),
    },
    {
      icon: Shield,
      title: t(translations.agenticPage.benefits.control.title, language),
      description: t(translations.agenticPage.benefits.control.description, language),
    },
  ];

  const principles = [
    {
      icon: Workflow,
      title: t(translations.agenticPage.principles.orchestration.title, language),
      description: t(translations.agenticPage.principles.orchestration.description, language),
    },
    {
      icon: Shield,
      title: t(translations.agenticPage.principles.guardrails.title, language),
      description: t(translations.agenticPage.principles.guardrails.description, language),
    },
    {
      icon: Lightbulb,
      title: t(translations.agenticPage.principles.transparency.title, language),
      description: t(translations.agenticPage.principles.transparency.description, language),
    },
  ];

  return (
    <Layout>
      <SEO
        titleEn="Agentic AI Workflows for Swedish SMEs | VDS"
        titleSv="Agentiska AI-arbetsflöden för svenska SMF | VDS"
        descriptionEn="Autonomous AI agents that handle complex tasks independently. Research, customer service, and operations automation for Swedish SMEs. Get a pilot in 4-6 weeks."
        descriptionSv="Autonoma AI-agenter som hanterar komplexa uppgifter självständigt. Research, kundtjänst och operationell automatisering för svenska små och medelstora företag."
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={heroRef}
            className="scroll-reveal mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Bot className="h-4 w-4" />
              {t(translations.agenticPage.badge, language)}
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              {t(translations.agenticPage.title, language)}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {t(translations.agenticPage.subtitle, language)}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  {t(translations.agenticPage.cta, language)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#agentic-pilots">
                  {t(translations.agenticPage.ctaSecondary, language)}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What are Agentic Workflows */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
              {t(translations.agenticPage.what.title, language)}
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-center">
                {t(translations.agenticPage.what.description, language)}
              </p>
            </div>
          </div>

          {/* Principles */}
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {principles.map((principle, index) => {
              const ref = useScrollReveal<HTMLDivElement>();
              return (
                <div 
                  key={principle.title}
                  ref={ref}
                  className="scroll-reveal rounded-xl border bg-card p-6"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <principle.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits for SMEs */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              {t(translations.agenticPage.benefitsSection.title, language)}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t(translations.agenticPage.benefitsSection.subtitle, language)}
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              {t(translations.agenticPage.useCasesSection.title, language)}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t(translations.agenticPage.useCasesSection.subtitle, language)}
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={useCase.title}
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                examples={useCase.examples}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Agentic Pilots Section */}
      <section id="agentic-pilots" className="bg-secondary/30 py-20 lg:py-28 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              {t(translations.agenticPage.agenticPilots.badge, language)}
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">
              {t(translations.agenticPage.agenticPilots.title, language)}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t(translations.agenticPage.agenticPilots.subtitle, language)}
            </p>
          </div>
          
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <PilotCard
              title={t(translations.agenticPage.agenticPilots.tiers.assessment.title, language)}
              duration={t(translations.agenticPage.agenticPilots.tiers.assessment.duration, language)}
              price={t(translations.agenticPage.agenticPilots.tiers.assessment.price, language)}
              description={t(translations.agenticPage.agenticPilots.tiers.assessment.description, language)}
              deliverables={tArray(translations.agenticPage.agenticPilots.tiers.assessment.deliverables, language)}
              delay={0}
            />
            <PilotCard
              title={t(translations.agenticPage.agenticPilots.tiers.pilot.title, language)}
              duration={t(translations.agenticPage.agenticPilots.tiers.pilot.duration, language)}
              price={t(translations.agenticPage.agenticPilots.tiers.pilot.price, language)}
              description={t(translations.agenticPage.agenticPilots.tiers.pilot.description, language)}
              deliverables={tArray(translations.agenticPage.agenticPilots.tiers.pilot.deliverables, language)}
              featured={true}
              delay={100}
            />
            <PilotCard
              title={t(translations.agenticPage.agenticPilots.tiers.production.title, language)}
              duration={t(translations.agenticPage.agenticPilots.tiers.production.duration, language)}
              price={t(translations.agenticPage.agenticPilots.tiers.production.price, language)}
              description={t(translations.agenticPage.agenticPilots.tiers.production.description, language)}
              deliverables={tArray(translations.agenticPage.agenticPilots.tiers.production.deliverables, language)}
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {t(translations.agenticPage.process.title, language)}
            </h2>
            <p className="mb-8 text-muted-foreground">
              {t(translations.agenticPage.process.description, language)}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  {t(translations.agenticPage.process.cta, language)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
