import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray } from "@/i18n/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Target,
  Users,
  Settings,
  ShieldCheck,
  Cpu,
  Search,
  Zap,
  Clock,
  TrendingDown,
  BarChart3,
  CheckCircle2,
  XCircle,
  Eye,
  FileText,
  LineChart,
  ArrowRightCircle,
  Database,
  RefreshCw,
  Play,
  CheckCheck,
  Gauge,
  Lock,
  Brain,
  Check,
} from "lucide-react";

export default function CustomAI() {
  const { language } = useLanguage();
  const heroRef = useScrollReveal<HTMLDivElement>();
  const problemRef = useScrollReveal<HTMLDivElement>();
  const pipelineRef = useScrollReveal<HTMLDivElement>();
  const trainingRef = useScrollReveal<HTMLDivElement>();
  const comparisonRef = useScrollReveal<HTMLDivElement>();
  const valueRef = useScrollReveal<HTMLDivElement>();
  const useCasesRef = useScrollReveal<HTMLDivElement>();
  const tiersRef = useScrollReveal<HTMLDivElement>();
  const faqRef = useScrollReveal<HTMLDivElement>();

  const tr = translations.customAIPage;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(210_60%_50%/0.15)_0%,_transparent_50%)]" />
        <div
          ref={heroRef}
          className="container mx-auto px-4 lg:px-8 scroll-reveal"
        >
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
            >
              {t(tr.hero.badge, language)}
            </Badge>
            <p className="text-sm text-primary-foreground/60 mb-4">
              {t(tr.hero.pilotFraming, language)}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance mb-6">
              {t(tr.hero.title, language)}
            </h1>
            <p className="text-lg text-primary-foreground/80 sm:text-xl max-w-3xl mx-auto mb-8">
              {t(tr.hero.subtitle, language)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">
                  {t(tr.hero.ctaPrimary, language)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <a href="#pipeline">
                  {t(tr.hero.ctaSecondary, language)}
                </a>
              </Button>
            </div>

            {/* Credibility chips */}
            <div className="flex flex-wrap justify-center gap-3">
              {tArray(tr.hero.chips, language).map((chip, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground"
                >
                  {index === 0 && <Target className="h-4 w-4" />}
                  {index === 1 && <Cpu className="h-4 w-4" />}
                  {index === 2 && <ShieldCheck className="h-4 w-4" />}
                  {chip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div
          ref={problemRef}
          className="container mx-auto px-4 lg:px-8 scroll-reveal"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              {t(tr.problem.title, language)}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(tr.problem.subtitle, language)}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { icon: Users, ...tr.problem.items.average },
              { icon: Target, ...tr.problem.items.definitions },
              { icon: Search, ...tr.problem.items.inspect },
              { icon: Settings, ...tr.problem.items.integrate },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card shadow-soft hover:shadow-medium transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">
                      {t(item.title, language)}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t(item.description, language)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section id="pipeline" className="py-20 lg:py-28 bg-secondary/30">
        <div
          ref={pipelineRef}
          className="container mx-auto px-4 lg:px-8 scroll-reveal"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              {t(tr.pipeline.title, language)}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(tr.pipeline.subtitle, language)}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line - hidden on mobile */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Target, step: tr.pipeline.steps.define, hasNote: false },
                  { icon: Database, step: tr.pipeline.steps.audit, hasNote: false },
                  { icon: ShieldCheck, step: tr.pipeline.steps.baseline, hasNote: true },
                  { icon: Brain, step: tr.pipeline.steps.train, hasNote: false },
                  { icon: Search, step: tr.pipeline.steps.analyze, hasNote: false },
                  { icon: Settings, step: tr.pipeline.steps.integrate, hasNote: false },
                  { icon: RefreshCw, step: tr.pipeline.steps.monitor, hasNote: false },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-medium">
                        <item.icon className="h-7 w-7" />
                        <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {t(item.step.title, language)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(item.step.description, language)}
                      </p>
                      {item.hasNote && 'note' in item.step && (
                        <p className="mt-2 text-xs text-accent italic">
                          {t(item.step.note as { sv: string; en: string }, language)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Explanation Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div
          ref={trainingRef}
          className="container mx-auto px-4 lg:px-8 scroll-reveal"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                {t(tr.training.title, language)}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t(tr.training.subtitle, language)}
              </p>
            </div>

            {/* Visual flow diagram */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              {[
                { icon: Database, step: tr.training.steps.examples },
                { icon: Brain, step: tr.training.steps.patterns },
                { icon: Play, step: tr.training.steps.test },
                { icon: RefreshCw, step: tr.training.steps.iterate },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Card className="border-border bg-card shadow-soft p-4 text-center w-40">
                    <div className="flex justify-center mb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {t(item.step, language)}
                    </p>
                  </Card>
                  {index < 3 && (
                    <ArrowRightCircle className="h-6 w-6 text-muted-foreground mx-2 hidden md:block" />
                  )}
                </div>
              ))}
            </div>

            <Card className="border-border/50 bg-secondary/30 p-6">
              <p className="text-center text-muted-foreground">
                {t(tr.training.analogy, language)}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div
          ref={comparisonRef}
          className="container mx-auto px-4 lg:px-8 scroll-reveal"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              {t(tr.comparison.title, language)}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(tr.comparison.subtitle, language)}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left font-semibold text-foreground">
                      {t(tr.comparison.headers.aspect, language)}
                    </th>
                    <th className="py-4 px-6 text-center font-semibold text-muted-foreground">
                      {t(tr.comparison.headers.generic, language)}
                    </th>
                    <th className="py-4 px-6 text-center font-semibold text-primary">
                      {t(tr.comparison.headers.custom, language)}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    tr.comparison.rows.metrics,
                    tr.comparison.rows.thresholds,
                    tr.comparison.rows.constraints,
                    tr.comparison.rows.integration,
                    tr.comparison.rows.privacy,
                    tr.comparison.rows.cannotDetermine,
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-6 text-foreground font-medium">
                        {t(row.aspect, language)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                          <XCircle className="h-4 w-4 text-destructive/70" />
                          <span className="text-sm">{t(row.generic, language)}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                          <span className="text-sm">{t(row.custom, language)}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div
          ref={valueRef}
          className="container mx-auto px-4 lg:px-8 scroll-reveal"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              {t(tr.value.title, language)}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(tr.value.subtitle, language)}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              { icon: Clock, ...tr.value.outcomes.time },
              { icon: Zap, ...tr.value.outcomes.decisions },
              { icon: TrendingDown, ...tr.value.outcomes.errors },
              { icon: BarChart3, ...tr.value.outcomes.consistency },
              { icon: Users, ...tr.value.outcomes.experience },
              { icon: Gauge, ...tr.value.outcomes.cost },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card shadow-soft hover:shadow-medium transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">
                      {t(item.title, language)}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t(item.description, language)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            {t(tr.value.disclaimer, language)}
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div
          ref={useCasesRef}
          className="container mx-auto px-4 lg:px-8 scroll-reveal"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              {t(tr.useCases.title, language)}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(tr.useCases.subtitle, language)}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { icon: Eye, ...tr.useCases.cases.visual },
              { icon: FileText, ...tr.useCases.cases.document },
              { icon: LineChart, ...tr.useCases.cases.prediction },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card shadow-soft"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">
                    {t(useCase.title, language)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      {t(tr.useCases.labels.input, language)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t(useCase.input, language)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      {t(tr.useCases.labels.output, language)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t(useCase.output, language)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      {t(tr.useCases.labels.impact, language)}
                    </p>
                    <p className="text-sm text-accent font-medium">
                      {t(useCase.impact, language)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Readiness CTA */}
      <section className="py-16 lg:py-20 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              {t(tr.readinessTest.badge, language)}
            </Badge>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              {t(tr.readinessTest.title, language)}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(tr.readinessTest.subtitle, language)}
            </p>
            <Button asChild size="lg">
              <Link to="/ai-readiness-test">
                {t(tr.readinessTest.cta, language)}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tiers Section - AI Pilots */}
      <section id="pilots" className="py-20 lg:py-28 bg-background">
        <div
          ref={tiersRef}
          className="container mx-auto px-4 lg:px-8 scroll-reveal"
        >
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {t(tr.tiers.badge, language)}
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              {t(tr.tiers.title, language)}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(tr.tiers.subtitle, language)}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { featured: false, ...tr.tiers.fitCheck },
              { featured: true, ...tr.tiers.pilot },
              { featured: false, ...tr.tiers.production },
            ].map((tier, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium ${
                  tier.featured
                    ? "border-accent shadow-glow ring-1 ring-accent/20"
                    : "bg-card shadow-soft"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {tier.featured && (
                  <div className="absolute right-4 top-4 animate-pulse rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {t(tr.tiers.popular, language)}
                  </div>
                )}
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl">
                    {t(tier.title, language)}
                  </CardTitle>
                  <p className="text-sm font-medium text-accent">
                    {t(tier.duration, language)}
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {t(tier.price, language)}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground">
                    {t(tier.description, language)}
                  </p>
                  <ul className="space-y-3">
                    {tArray(tier.deliverables, language).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="group/btn w-full"
                    variant={tier.featured ? "default" : "outline"}
                  >
                    <Link to="/contact">
                      {t(tier.cta, language)}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div
          ref={faqRef}
          className="container mx-auto px-4 lg:px-8 scroll-reveal"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              {t(tr.faq.title, language)}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {tr.faq.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {t(item.question, language)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t(item.answer, language)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4">
            {t(tr.finalCta.title, language)}
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {t(tr.finalCta.subtitle, language)}
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contact">
              {t(tr.finalCta.cta, language)}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
