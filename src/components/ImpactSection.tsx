import { TrendingDown, TrendingUp, Leaf } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    label: "Waiting Time Reduction",
    value: "60%",
    detail: "Average consent explanation time reduced from 30 min to 12 min through AI avatar and self-paced viewing.",
  },
  {
    icon: TrendingUp,
    label: "Process Efficiency",
    value: "3×",
    detail: "Staff can process 3× more patients per day by eliminating repetitive verbal explanations.",
  },
  {
    icon: Leaf,
    label: "Paper Cost Savings",
    value: "₩0",
    detail: "Complete elimination of paper consent forms, printing costs, and physical storage requirements.",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding bg-muted/50">
      <div className="section-container">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">09 — Expected Impact</p>
        <h2 className="section-title">Projected Outcomes</h2>
        <p className="section-subtitle max-w-2xl">
          Measurable improvements expected from implementing the untact consent system.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {metrics.map((m) => (
            <div key={m.label} className="card-base text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{m.value}</div>
              <div className="text-sm font-semibold text-foreground mb-2">{m.label}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
