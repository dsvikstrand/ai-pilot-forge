import { Helmet } from "react-helmet-async";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export function OrganizationSchema({
  name = "Vikstrand Deep Solutions",
  url = "https://vds.se",
  logo = "https://vds.se/vds-logo.jpg",
  description = "GPU-powered AI pilots for Swedish SMEs. From idea to working prototype—fast, measurable, and built to ship.",
}: OrganizationSchemaProps = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    contactPoint: {
      "@type": "ContactPoint",
      email: "david@vdsai.se",
      contactType: "customer service",
    },
    sameAs: [
      "https://github.com/V1kstrand",
      "https://www.linkedin.com/in/david-vikstrand/",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface ProfessionalServiceSchemaProps {
  name?: string;
  description?: string;
  serviceTypes?: string[];
}

export function ProfessionalServiceSchema({
  name = "VDS AI Consulting",
  description = "Custom AI solutions including RAG systems, visual search, and inference optimization for Swedish SMEs.",
  serviceTypes = ["AI Consulting", "Machine Learning", "RAG Systems", "Visual Search", "Inference Optimization"],
}: ProfessionalServiceSchemaProps = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Vikstrand Deep Solutions",
    },
    serviceType: serviceTypes,
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
