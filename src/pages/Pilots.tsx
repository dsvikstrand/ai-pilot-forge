import { Layout } from "@/components/layout/Layout";
import { PilotCard } from "@/components/ui/PilotCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pilots = [
  {
    title: "Discovery",
    duration: "3–5 days",
    description: "Quick feasibility assessment when you're not sure if AI is the right solution. Get honest answers before investing in a full build.",
    deliverables: [
      "Data quality audit",
      "Feasibility assessment",
      "Recommended approach (or no-go decision)",
      "Scoped proposal for next steps",
    ],
  },
  {
    title: "Pilot Sprint",
    duration: "1–2 weeks",
    description: "The core engagement: build a working prototype with proper evaluation. Move from idea to measured results quickly.",
    deliverables: [
      "Working prototype (not slides)",
      "Baseline metrics and evaluation",
      "Performance profiling",
      "Clean codebase + documentation",
      "Next-step plan (ship, iterate, or stop)",
    ],
    featured: true,
  },
  {
    title: "Optimization Sprint",
    duration: "1 week",
    description: "Make existing ML systems faster and cheaper. Focused work on inference speed, GPU utilization, and serving cost.",
    deliverables: [
      "Latency/throughput profiling",
      "Bottleneck identification",
      "Optimization implementation",
      "Before/after cost analysis",
      "Technical report",
    ],
  },
];

const faqs = [
  {
    question: "Do you work with sensitive data?",
    answer: "Yes. We can work with sanitized samples during early exploration, and sign NDAs for production data. All work can be done on your infrastructure if required.",
  },
  {
    question: "Do you deliver code?",
    answer: "Yes. Every engagement includes a clean repository with source code, documentation, and clear instructions. Your team can own and extend the work.",
  },
  {
    question: "What if we don't know if AI is the right solution?",
    answer: "That's exactly what the Discovery engagement is for. We'll assess your data, explore options, and give you an honest recommendation—including if AI isn't the right fit.",
  },
  {
    question: "How do you handle scope changes during a pilot?",
    answer: "We start with a clearly scoped goal, but we stay flexible. If we discover something important mid-pilot, we'll discuss options and adjust the plan together.",
  },
  {
    question: "What industries do you work with?",
    answer: "We've worked across e-commerce, manufacturing, and professional services. The common thread is companies with real data who want to test AI practically—not just talk about it.",
  },
];

const Pilots = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">AI Pilots</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Focused engagements designed to validate value quickly. Choose the format that fits your current needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pilot Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pilots.map((pilot, index) => (
              <PilotCard
                key={pilot.title}
                title={pilot.title}
                duration={pilot.duration}
                description={pilot.description}
                deliverables={pilot.deliverables}
                featured={pilot.featured}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
};

export default Pilots;
