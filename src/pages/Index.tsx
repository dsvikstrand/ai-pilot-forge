import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyVDS } from "@/components/sections/WhyVDS";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <WhyVDS />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
