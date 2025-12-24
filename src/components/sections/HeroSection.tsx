import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            GPU-powered AI pilots for Swedish SMEs
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl">
            From idea to a working prototype—fast, measurable, and built to ship.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Book a short call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/services">Explore services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
