import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  delay?: number;
  onClick?: () => void;
}

export function ServiceCard({ icon: Icon, title, description, price, delay = 0, onClick }: ServiceCardProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Card 
      ref={ref}
      onClick={onClick}
      className="scroll-reveal group border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-medium cursor-pointer"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
          {price && (
            <Badge variant="secondary" className="text-xs">
              {price}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
