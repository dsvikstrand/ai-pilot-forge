import { Search, Image, Zap, Tags, Boxes } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
  {
    icon: Search,
    title: "RAG fit-check & evaluation",
    description: "Validate whether Retrieval-Augmented Generation is the right approach, and measure quality before you ship.",
  },
  {
    icon: Image,
    title: "Visual search from images",
    description: "Find similar products from a photo using embeddings and fast search pipelines.",
  },
  {
    icon: Zap,
    title: "Inference speed & GPU cost optimization",
    description: "Profile bottlenecks, improve throughput/latency, and reduce serving cost.",
  },
  {
    icon: Tags,
    title: "Auto-tagging & categorization",
    description: "Turn image libraries into structured catalogs with reliable tagging workflows.",
  },
  {
    icon: Boxes,
    title: "Custom prototyping",
    description: "Build and test a prototype model/pipeline with clear success metrics.",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What we do</h2>
          <p className="mt-4 text-muted-foreground">
            We help teams test and deploy practical AI: search, automation, and optimization—built with strong engineering and clear evaluation.
          </p>
        </div>
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
  );
}
