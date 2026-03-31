import { Calendar, Link2 } from "lucide-react";

const expansions = [
  {
    icon: Calendar,
    title: "Reservation System Integration",
    desc: "Connect consent workflow with hospital appointment scheduling. Patients receive consent forms automatically before their scheduled visit, enabling pre-visit completion.",
    phase: "Phase 2",
  },
  {
    icon: Link2,
    title: "Medical Data Linkage",
    desc: "Integrate with EMR (Electronic Medical Records) and HIS (Hospital Information System) for seamless data flow. Auto-populate patient information and link signed consents to medical records.",
    phase: "Phase 3",
  },
];

const ExpansionSection = () => {
  return (
    <section id="expansion" className="section-padding">
      <div className="section-container">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">10 — Future Expansion</p>
        <h2 className="section-title">Scalability & Next Steps</h2>
        <p className="section-subtitle max-w-2xl">
          Planned integrations to expand the system's value within the hospital ecosystem.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {expansions.map((e) => (
            <div key={e.title} className="card-base">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <e.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">{e.phase}</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpansionSection;
