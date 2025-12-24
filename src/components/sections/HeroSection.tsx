import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-accent/5 blur-3xl" style={{ animationDuration: "4s" }} />
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-primary-foreground/5 blur-3xl" style={{ animationDuration: "5s", animationDelay: "1s" }} />
      </div>
      
      <div className="container relative mx-auto px-4 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-up text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            GPU-powered AI pilots for Swedish SMEs
          </h1>
          <p className="animate-fade-up animation-delay-200 mt-6 text-lg text-primary-foreground/80 md:text-xl" style={{ opacity: 0 }}>
            From idea to a working prototype—fast, measurable, and built to ship.
          </p>
          <div className="animate-fade-up animation-delay-400 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ opacity: 0 }}>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contact">
                Book a short call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
