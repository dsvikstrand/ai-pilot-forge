import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Fast prototypes with real measurements",
  "Engineering-first: performance, reproducibility, and clean handover",
  "Clear communication and scoped deliverables",
  "GPU-optimized pipelines for production workloads",
  "Honest assessments—including when AI isn't the right solution",
];

export function WhyVDS() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Why VDS</h2>
            <p className="mt-4 text-muted-foreground">
              VDS exists to close the gap between "AI sounds promising" and "AI actually works in production."
            </p>
            <ul className="mt-8 space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 p-8">
              <div className="flex h-full flex-col justify-center space-y-4 rounded-xl border border-border/50 bg-card p-6 shadow-soft">
                <h3 className="text-lg font-semibold">Typical outcomes</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    A working prototype (not slides)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Clear evaluation metrics and baselines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    A plan for deployment, iteration, or a no-go decision
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
