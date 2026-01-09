import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AgenticWorkflowsSection } from "@/components/sections/AgenticWorkflowsSection";
import { WhyVDS } from "@/components/sections/WhyVDS";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <SEO
        titleEn="VDS - Vikstrand Deep Solutions"
        titleSv="VDS - Vikstrand Deep Solutions"
        descriptionEn="GPU-powered AI pilots for Swedish SMEs. From idea to working prototype—fast, measurable, and built to ship. RAG, visual search, inference optimization."
        descriptionSv="GPU-drivna AI-piloter för svenska SMF. Från idé till fungerande prototyp—snabbt, mätbart och byggt för leverans. RAG, visuell sökning, inferensoptimering."
      />
      <HeroSection />
      <ServicesOverview />
      <div className="hidden md:block">
        <AgenticWorkflowsSection />
      </div>
      <div className="hidden md:block">
        <WhyVDS />
      </div>
      <ContactCTA />
    </Layout>
  );
};

export default Index;
