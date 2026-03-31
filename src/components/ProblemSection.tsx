import { Clock, FileText, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Long Waiting Time",
    desc: "Patients wait 30+ minutes for consent explanation from medical staff, causing delays in surgery schedules and patient dissatisfaction.",
  },
  {
    icon: FileText,
    title: "Paper-based Inefficiency",
    desc: "Manual paper consent forms lead to storage issues, lost documents, and difficulty in managing patient records across departments.",
  },
  {
    icon: AlertTriangle,
    title: "Legal & Compliance Risk",
    desc: "Inadequate explanation records increase medical dispute risks. Lack of standardized consent process creates legal vulnerability.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-muted/50">
      <div className="section-container">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">01 — Problem Definition</p>
        <h2 className="section-title">Current Hospital Consent Process Is Broken</h2>
        <p className="section-subtitle max-w-2xl">
          The traditional surgical consent process is inefficient, error-prone, and creates unnecessary burden for both patients and hospital staff.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div key={p.title} className="card-base">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
