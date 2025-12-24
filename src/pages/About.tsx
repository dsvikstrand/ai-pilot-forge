import { Layout } from "@/components/layout/Layout";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CheckCircle2 } from "lucide-react";
import founderImage from "@/assets/founder.png";

const howIWork = [
  "Start with clear goals and success metrics",
  "Build working prototypes, not slide decks",
  "Measure everything that matters",
  "Communicate honestly—including when AI isn't the answer",
  "Deliver clean, documented code your team can own",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">About</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Engineering-first AI consulting for teams that want results, not demos.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold">Context</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  VDS (Vikstrand Deep Solutions) exists to close the gap between "AI sounds promising" and "AI actually works in production." Many teams get stuck between demos that don't scale and long projects that never ship.
                </p>
                <p>
                  I help companies build GPU-powered AI pilots that are practical, measurable, and designed for handover. The goal is simple: validate value quickly, reduce risk, and move from idea to a working prototype with clear next steps.
                </p>
                <p>
                  My background combines deep technical expertise in machine learning with practical experience shipping real systems. I focus on what works—not what sounds impressive on a slide.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-medium">
                <img
                  src={founderImage}
                  alt="Founder of VDS"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">How I work</h2>
            <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
              <ul className="space-y-4">
                {howIWork.map((item, index) => (
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

export default About;
