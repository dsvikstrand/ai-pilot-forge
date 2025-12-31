import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AgenticWorkflowsSection } from "@/components/sections/AgenticWorkflowsSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyVDS } from "@/components/sections/WhyVDS";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="VDS - Vikstrand Deep Solutions"
        description="GPU-powered AI pilots for Swedish SMEs. From idea to working prototype—fast, measurable, and built to ship. RAG, visual search, inference optimization."
        canonical="https://vds.se"
      />
      <HeroSection />
      <ServicesOverview />
      <AgenticWorkflowsSection />
      <HowItWorks />
      <WhyVDS />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
