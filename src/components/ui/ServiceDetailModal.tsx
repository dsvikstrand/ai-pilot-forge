import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  priceNote: string;
  deliverables: string[];
  timeline: string;
}

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ServiceDetailModal({ service, open, onOpenChange }: ServiceDetailModalProps) {
  const { language } = useLanguage();

  if (!service) return null;

  const Icon = service.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <DialogTitle className="text-xl">{service.title}</DialogTitle>
              <Badge variant="secondary" className="mt-1">{service.timeline}</Badge>
            </div>
          </div>
          <DialogDescription className="text-left pt-2">
            {service.longDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Pricing */}
          <div className="rounded-lg border border-border bg-secondary/30 p-4">
            <p className="text-sm text-muted-foreground mb-1">
              {language === "sv" ? "Pris" : "Price"}
            </p>
            <p className="text-2xl font-bold text-primary">{service.price}</p>
            <p className="text-sm text-muted-foreground">{service.priceNote}</p>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="font-semibold mb-3">
              {language === "sv" ? "Vad ingår" : "What's included"}
            </h4>
            <ul className="space-y-2">
              {service.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Button asChild className="w-full">
            <a href={`/${language}/contact`}>
              {language === "sv" ? "Kom igång" : "Get started"}
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
