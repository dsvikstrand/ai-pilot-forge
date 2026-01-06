import { Helmet } from "react-helmet-async";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export function OrganizationSchema({
  name = "Vikstrand Deep Solutions",
  url = "https://vdsai.se",
  logo = "https://vdsai.se/vds-logo.jpg",
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

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  image?: string;
  keywords?: string[];
}

export function ArticleSchema({
  headline,
  description,
  author,
  datePublished,
  image,
  keywords = [],
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Vikstrand Deep Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://vdsai.se/vds-logo.jpg",
      },
    },
    datePublished,
    dateModified: datePublished,
    ...(image && { image }),
    ...(keywords.length > 0 && { keywords: keywords.join(", ") }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://vdsai.se/blog",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
