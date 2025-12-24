import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PilotCardProps {
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  featured?: boolean;
}

export function PilotCard({ title, duration, description, deliverables, featured = false }: PilotCardProps) {
  return (
    <Card className={`relative overflow-hidden border-border/50 transition-all duration-300 hover:shadow-medium ${
      featured ? "border-accent shadow-glow" : ""
    }`}>
      {featured && (
        <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm font-medium text-accent">{duration}</CardDescription>
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
        <Button asChild className="w-full" variant={featured ? "default" : "outline"}>
          <Link to="/contact">Get started</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
