import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Search, Image, Zap, Tags, Boxes, FileCode, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "RAG fit-check & evaluation",
    description: "Validate whether Retrieval-Augmented Generation (RAG) is the right approach for your use case. We assess data quality, design retrieval strategies, and measure quality before you ship—so you know what works and what doesn't.",
  },
  {
    icon: Image,
    title: "Visual search from images",
    description: "Find similar products from a photo using embeddings and fast search pipelines. Ideal for e-commerce, inventory management, and catalog search where visual matching outperforms text-based queries.",
  },
  {
    icon: Zap,
    title: "Inference speed & GPU cost optimization",
    description: "Profile bottlenecks in your ML pipelines, improve throughput and latency, and reduce serving cost. We identify exactly where time and money are being spent—and fix it.",
  },
  {
    icon: Tags,
    title: "Auto-tagging & categorization",
    description: "Turn image libraries into structured catalogs with reliable tagging workflows. Reduce manual labeling effort and improve consistency across large datasets.",
  },
  {
    icon: Boxes,
    title: "Custom prototyping",
    description: "Build and test a prototype model or pipeline with clear success metrics. Move from idea to working system with proper engineering and evaluation from day one.",
  },
  {
    icon: FileCode,
    title: "Deployment guidance",
    description: "Get practical advice on moving from prototype to production. We help with architecture decisions, infrastructure choices, and handoff documentation your team can actually use.",
  },
];

const deliverables = [
  "Working prototype with source code and documentation",
  "Baseline metrics and evaluation results",
  "Performance profiling (latency, throughput, cost)",
  "Clear next-step recommendations",
  "Handoff-ready deliverables your team can own",
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Services</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Practical AI solutions built with strong engineering and clear evaluation. Every engagement focuses on measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Typical deliverables</h2>
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
    </Layout>
  );
};

export default Services;
