import { Check, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface PilotCardProps {
  title: string;
  duration: string;
  price?: string;
  description: string;
  deliverables: string[];
  featured?: boolean;
  delay?: number;
}

export function PilotCard({ title, duration, price, description, deliverables, featured = false, delay = 0 }: PilotCardProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Card 
      ref={ref}
      className={`scroll-reveal group relative overflow-hidden border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium ${
        featured ? "border-accent shadow-glow ring-1 ring-accent/20" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {featured && (
        <div className="absolute right-4 top-4 animate-pulse rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          Popular
        </div>
      )}
      <CardHeader className="pt-8">
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm font-medium text-accent">{duration}</p>
        {price && <p className="text-2xl font-bold text-foreground mt-2">{price}</p>}
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">{description}</p>
        <ul className="space-y-3">
          {deliverables.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="group/btn w-full" variant={featured ? "default" : "outline"}>
          <Link to="/contact">
            Get started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
