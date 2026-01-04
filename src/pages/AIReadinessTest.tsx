import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, tArray } from "@/i18n/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ArrowRight,
  ArrowLeft,
  Rocket,
  TrendingUp,
  Wrench,
  FileStack,
  RefreshCw,
  CheckCircle2,
  ClipboardCheck,
} from "lucide-react";

interface Question {
  id: string;
  category: "data" | "process" | "technical" | "organizational";
  question: { sv: string; en: string };
  options: Array<{
    label: { sv: string; en: string };
    score: number;
  }>;
}

const questions: Question[] = [
  // Data category
  {
    id: "data-format",
    category: "data",
    question: {
      sv: "Hur lagras era affärsdata och historiska beslut?",
      en: "How is your business data and historical decisions stored?",
    },
    options: [
      { label: { sv: "Mestadels papper eller ostrukturerade filer", en: "Mostly paper or unstructured files" }, score: 0 },
      { label: { sv: "Blandning av kalkylblad och dokument", en: "Mix of spreadsheets and documents" }, score: 1 },
      { label: { sv: "Digitalt i flera separata system", en: "Digital in multiple separate systems" }, score: 2 },
      { label: { sv: "Centraliserad databas eller modernt affärssystem", en: "Centralized database or modern ERP" }, score: 3 },
    ],
  },
  {
    id: "data-history",
    category: "data",
    question: {
      sv: "Hur mycket historisk data har ni tillgänglig för det område ni vill förbättra?",
      en: "How much historical data do you have available for the area you want to improve?",
    },
    options: [
      { label: { sv: "Mindre än 3 månader eller ingen", en: "Less than 3 months or none" }, score: 0 },
      { label: { sv: "3-6 månaders data", en: "3-6 months of data" }, score: 1 },
      { label: { sv: "6-12 månaders data", en: "6-12 months of data" }, score: 2 },
      { label: { sv: "Mer än 12 månaders data", en: "More than 12 months of data" }, score: 3 },
    ],
  },
  {
    id: "data-labeling",
    category: "data",
    question: {
      sv: "Kan ni enkelt identifiera vad som är ett \"bra\" respektive \"dåligt\" utfall i era processer?",
      en: "Can you easily identify what constitutes a \"good\" vs \"bad\" outcome in your processes?",
    },
    options: [
      { label: { sv: "Nej, det är oklart", en: "No, it's unclear" }, score: 0 },
      { label: { sv: "Delvis, men det kräver expertbedömning", en: "Partially, but it requires expert judgment" }, score: 1 },
      { label: { sv: "Ja, vi kan märka historiska exempel manuellt", en: "Yes, we can label historical examples manually" }, score: 2 },
      { label: { sv: "Ja, vi har redan kategoriserad data", en: "Yes, we already have categorized data" }, score: 3 },
    ],
  },
  // Process category
  {
    id: "process-documentation",
    category: "process",
    question: {
      sv: "Hur väl dokumenterade är era arbetsflöden och processer?",
      en: "How well documented are your workflows and processes?",
    },
    options: [
      { label: { sv: "Inte dokumenterade alls", en: "Not documented at all" }, score: 0 },
      { label: { sv: "Muntlig kunskap hos nyckelpersoner", en: "Verbal knowledge among key people" }, score: 1 },
      { label: { sv: "Delvis dokumenterade", en: "Partially documented" }, score: 2 },
      { label: { sv: "Väldefinierade och dokumenterade processer", en: "Well-defined and documented processes" }, score: 3 },
    ],
  },
  {
    id: "process-bottlenecks",
    category: "process",
    question: {
      sv: "Vet ni var era manuella flaskhalsar och repetitiva uppgifter finns?",
      en: "Do you know where your manual bottlenecks and repetitive tasks are?",
    },
    options: [
      { label: { sv: "Nej, vi har ingen överblick", en: "No, we have no overview" }, score: 0 },
      { label: { sv: "Vi har en känsla men inga mätningar", en: "We have a feeling but no measurements" }, score: 1 },
      { label: { sv: "Ja, vi har identifierat huvudsakliga flaskhalsar", en: "Yes, we've identified main bottlenecks" }, score: 2 },
      { label: { sv: "Ja, vi har kartlagt och mätt tidsåtgång", en: "Yes, we've mapped and measured time spent" }, score: 3 },
    ],
  },
  {
    id: "process-error-cost",
    category: "process",
    question: {
      sv: "Kan ni uppskatta kostnaden för fel eller manuella misstag i era processer?",
      en: "Can you estimate the cost of errors or manual mistakes in your processes?",
    },
    options: [
      { label: { sv: "Nej, vi mäter inte detta", en: "No, we don't measure this" }, score: 0 },
      { label: { sv: "Vi vet att det finns kostnader men kan inte kvantifiera", en: "We know there are costs but can't quantify" }, score: 1 },
      { label: { sv: "Vi har grova uppskattningar", en: "We have rough estimates" }, score: 2 },
      { label: { sv: "Ja, vi har tydlig data på felkostnader", en: "Yes, we have clear data on error costs" }, score: 3 },
    ],
  },
  // Technical category
  {
    id: "tech-integration",
    category: "technical",
    question: {
      sv: "Hur tillgänglig är er data för externa verktyg eller integrationer?",
      en: "How accessible is your data for external tools or integrations?",
    },
    options: [
      { label: { sv: "Helt låst, ingen möjlighet till export", en: "Completely locked, no export possibility" }, score: 0 },
      { label: { sv: "Kan exportera manuellt via CSV/Excel", en: "Can export manually via CSV/Excel" }, score: 1 },
      { label: { sv: "Har API:er eller databasåtkomst tillgänglig", en: "Have APIs or database access available" }, score: 2 },
      { label: { sv: "Modern arkitektur med öppna integrationer", en: "Modern architecture with open integrations" }, score: 3 },
    ],
  },
  {
    id: "tech-it-support",
    category: "technical",
    question: {
      sv: "Har ni tillgång till IT-stöd eller utvecklarresurser?",
      en: "Do you have access to IT support or developer resources?",
    },
    options: [
      { label: { sv: "Nej, ingen teknisk kompetens internt", en: "No, no technical competence internally" }, score: 0 },
      { label: { sv: "Begränsad, extern IT-support vid behov", en: "Limited, external IT support when needed" }, score: 1 },
      { label: { sv: "Ja, deltids IT-stöd eller generalist", en: "Yes, part-time IT support or generalist" }, score: 2 },
      { label: { sv: "Ja, dedikerad teknisk personal eller team", en: "Yes, dedicated technical staff or team" }, score: 3 },
    ],
  },
  {
    id: "tech-infrastructure",
    category: "technical",
    question: {
      sv: "Var körs era system idag?",
      en: "Where are your systems running today?",
    },
    options: [
      { label: { sv: "Lokalt på enskilda datorer", en: "Locally on individual computers" }, score: 0 },
      { label: { sv: "Lokala servrar på kontoret", en: "Local servers in the office" }, score: 1 },
      { label: { sv: "Molntjänster (t.ex. Google, Microsoft 365)", en: "Cloud services (e.g., Google, Microsoft 365)" }, score: 2 },
      { label: { sv: "Modern molninfrastruktur (AWS, Azure, GCP)", en: "Modern cloud infrastructure (AWS, Azure, GCP)" }, score: 3 },
    ],
  },
  // Organizational category
  {
    id: "org-budget",
    category: "organizational",
    question: {
      sv: "Finns det budget avsatt för AI- eller automationsprojekt?",
      en: "Is there budget allocated for AI or automation projects?",
    },
    options: [
      { label: { sv: "Nej, inga planer", en: "No, no plans" }, score: 0 },
      { label: { sv: "Inte specifikt, men kan finnas vid rätt case", en: "Not specifically, but could be available for the right case" }, score: 1 },
      { label: { sv: "Ja, begränsad budget för pilotprojekt", en: "Yes, limited budget for pilot projects" }, score: 2 },
      { label: { sv: "Ja, dedikerad budget för digitalisering/AI", en: "Yes, dedicated budget for digitalization/AI" }, score: 3 },
    ],
  },
  {
    id: "org-leadership",
    category: "organizational",
    question: {
      sv: "Har ledningen stöd för att testa ny teknik?",
      en: "Does leadership support trying new technology?",
    },
    options: [
      { label: { sv: "Nej, konservativ inställning till förändring", en: "No, conservative attitude towards change" }, score: 0 },
      { label: { sv: "Delvis, men det krävs starka bevis", en: "Partially, but strong evidence is required" }, score: 1 },
      { label: { sv: "Ja, öppna för pilotprojekt med låg risk", en: "Yes, open to low-risk pilot projects" }, score: 2 },
      { label: { sv: "Ja, aktivt drivande av innovation och digitalisering", en: "Yes, actively driving innovation and digitalization" }, score: 3 },
    ],
  },
  {
    id: "org-success-metrics",
    category: "organizational",
    question: {
      sv: "Har ni tydliga KPI:er för det område ni vill förbättra?",
      en: "Do you have clear KPIs for the area you want to improve?",
    },
    options: [
      { label: { sv: "Nej, vi mäter inte prestanda", en: "No, we don't measure performance" }, score: 0 },
      { label: { sv: "Vi har informella mål men inga mätningar", en: "We have informal goals but no measurements" }, score: 1 },
      { label: { sv: "Vi har några grundläggande KPI:er", en: "We have some basic KPIs" }, score: 2 },
      { label: { sv: "Ja, väldefinierade och regelbundet mätta KPI:er", en: "Yes, well-defined and regularly measured KPIs" }, score: 3 },
    ],
  },
];

function getScoreCategory(normalizedScore: number): {
  key: "aiReady" | "promising" | "earlyStage" | "foundation";
  icon: typeof Rocket;
  colorClass: string;
} {
  if (normalizedScore >= 8) {
    return { key: "aiReady", icon: Rocket, colorClass: "text-accent" };
  } else if (normalizedScore >= 5) {
    return { key: "promising", icon: TrendingUp, colorClass: "text-primary" };
  } else if (normalizedScore >= 3) {
    return { key: "earlyStage", icon: Wrench, colorClass: "text-amber-500" };
  } else {
    return { key: "foundation", icon: FileStack, colorClass: "text-muted-foreground" };
  }
}

function getCategoryWeaknesses(answers: number[]): string[] {
  const categoryScores = {
    data: answers.slice(0, 3).reduce((a, b) => a + b, 0) / 9,
    process: answers.slice(3, 6).reduce((a, b) => a + b, 0) / 9,
    technical: answers.slice(6, 9).reduce((a, b) => a + b, 0) / 9,
    organizational: answers.slice(9, 12).reduce((a, b) => a + b, 0) / 9,
  };

  const weakCategories: string[] = [];
  if (categoryScores.data < 0.5) weakCategories.push("data");
  if (categoryScores.process < 0.5) weakCategories.push("process");
  if (categoryScores.technical < 0.5) weakCategories.push("technical");
  if (categoryScores.organizational < 0.5) weakCategories.push("organizational");

  return weakCategories;
}

export default function AIReadinessTest() {
  const { language } = useLanguage();
  const heroRef = useScrollReveal<HTMLDivElement>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [testStarted, setTestStarted] = useState(false);

  const tr = translations.aiReadinessTest;

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, selectedOption];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      const newAnswers = answers.slice(0, -1);
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] ?? null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
    setTestStarted(false);
  };

  const rawScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 3; // 36
  const normalizedScore = Math.round((rawScore / maxScore) * 9) + 1; // 1-10 scale
  const scoreCategory = getScoreCategory(normalizedScore);
  const weakCategories = getCategoryWeaknesses(answers);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const CategoryIcon = scoreCategory.icon;

  return (
    <Layout>
      <SEO
        titleEn="AI Readiness Assessment"
        titleSv="AI-beredskapsbedömning"
        descriptionEn="Find out if your business is ready for AI. Take our free 12-question assessment to evaluate your data, processes, and organizational readiness."
        descriptionSv="Ta reda på om ditt företag är redo för AI. Gör vår kostnadsfria 12-frågeanalys för att utvärdera din data, processer och organisatoriska beredskap."
      />
      {/* Hero Section */}
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
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance mb-6">
              {t(tr.hero.title, language)}
            </h1>
            <p className="text-lg text-primary-foreground/80 sm:text-xl max-w-3xl mx-auto mb-8">
              {t(tr.hero.subtitle, language)}
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-primary-foreground/70 text-sm">
              <span className="flex items-center gap-2">
                <ClipboardCheck className="h-4 w-4" />
                {t(tr.hero.timeEstimate, language)}
              </span>
              <span>•</span>
              <span>{t(tr.hero.questionsCount, language)}</span>
              <span>•</span>
              <span>{t(tr.hero.instantResults, language)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {!testStarted && !showResults && (
              <Card className="border-border/50 bg-card shadow-soft">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">
                    {t(tr.start.title, language)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {t(tr.start.description, language)}
                  </p>
                  <div className="space-y-3">
                    {tArray(tr.start.categories, language).map((cat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        <span className="text-foreground">{cat}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => setTestStarted(true)}
                    size="lg"
                    className="w-full"
                  >
                    {t(tr.start.cta, language)}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )}

            {testStarted && !showResults && (
              <div className="space-y-6">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>
                      {t(tr.test.question, language)} {currentQuestion + 1} / {questions.length}
                    </span>
                    <span>
                      {t(tr.test.category, language)}: {t(tr.categories[questions[currentQuestion].category], language)}
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Question Card */}
                <Card className="border-border/50 bg-card shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {t(questions[currentQuestion].question, language)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={selectedOption?.toString() ?? ""}
                      onValueChange={(value) => setSelectedOption(parseInt(value))}
                      className="space-y-3"
                    >
                      {questions[currentQuestion].options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                            selectedOption === option.score
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setSelectedOption(option.score)}
                        >
                          <RadioGroupItem
                            value={option.score.toString()}
                            id={`option-${index}`}
                          />
                          <Label
                            htmlFor={`option-${index}`}
                            className="flex-1 cursor-pointer text-foreground"
                          >
                            {t(option.label, language)}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="flex justify-between mt-8">
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {t(tr.test.previous, language)}
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={selectedOption === null}
                      >
                        {currentQuestion < questions.length - 1
                          ? t(tr.test.next, language)
                          : t(tr.test.seeResults, language)}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {showResults && (
              <div className="space-y-8">
                {/* Score Card */}
                <Card className="border-border/50 bg-card shadow-soft text-center">
                  <CardHeader>
                    <div className={`mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-secondary ${scoreCategory.colorClass}`}>
                      <CategoryIcon className="h-12 w-12" />
                    </div>
                    <div className="text-6xl font-bold text-foreground mb-2">
                      {normalizedScore}/10
                    </div>
                    <CardTitle className="text-2xl">
                      {t(tr.results.categories[scoreCategory.key].title, language)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      {t(tr.results.categories[scoreCategory.key].description, language)}
                    </p>

                    {/* Weak areas */}
                    {weakCategories.length > 0 && (
                      <div className="text-left p-4 rounded-lg bg-secondary/50">
                        <p className="font-medium text-foreground mb-2">
                          {t(tr.results.areasToImprove, language)}
                        </p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {weakCategories.map((cat) => (
                            <li key={cat} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                              {t(tr.categories[cat as keyof typeof tr.categories], language)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Recommendations */}
                    <div className="text-left space-y-4">
                      <p className="font-medium text-foreground">
                        {t(tr.results.recommendations.title, language)}
                      </p>
                      <ul className="space-y-2">
                        {tArray(tr.results.categories[scoreCategory.key].recommendations, language).map((rec, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 space-y-4">
                      <Button asChild size="lg" className="w-full">
                        <Link to="/contact">
                          {t(tr.results.categories[scoreCategory.key].cta, language)}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleRestart}
                        className="w-full"
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        {t(tr.results.restart, language)}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Learn more */}
                <Card className="border-border/50 bg-secondary/30">
                  <CardContent className="py-6 text-center">
                    <p className="text-muted-foreground mb-4">
                      {t(tr.results.learnMore, language)}
                    </p>
                    <Button asChild variant="outline">
                      <Link to="/custom-ai">
                        {t(tr.results.learnMoreCta, language)}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
