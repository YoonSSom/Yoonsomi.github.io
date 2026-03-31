import { XCircle, AlertTriangle } from "lucide-react";

const edgeCases = [
  {
    icon: XCircle,
    title: "Identity Verification Failure",
    scenario: "Patient enters incorrect information 3+ times.",
    handling: [
      "Lock verification for 30 minutes after 3 failed attempts",
      "Display guidance to contact hospital registration desk",
      "Log failed attempts for security audit",
      "Offer alternative in-person verification path",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Missing or Incomplete Signature",
    scenario: "Patient submits consent without completing required signature fields.",
    handling: [
      "Validate all required fields before allowing submission",
      "Highlight incomplete sections with inline error messages",
      "Prevent form submission until all signatures are captured",
      "Auto-save progress to prevent data loss on accidental exit",
    ],
  },
];

const EdgeCasesSection = () => {
  return (
    <section id="edgecases" className="section-padding">
      <div className="section-container">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">08 — Edge Cases</p>
        <h2 className="section-title">Error Handling & Edge Cases</h2>
        <p className="section-subtitle max-w-2xl">
          Anticipating failure scenarios and designing graceful recovery paths.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {edgeCases.map((ec) => (
            <div key={ec.title} className="card-base">
              <div className="flex items-center gap-2 mb-3">
                <ec.icon className="w-4 h-4 text-destructive" />
                <h3 className="text-sm font-semibold text-foreground">{ec.title}</h3>
              </div>
              <div className="text-xs text-muted-foreground bg-muted rounded px-3 py-2 mb-3">
                <span className="font-medium">Scenario: </span>{ec.scenario}
              </div>
              <ul className="space-y-1.5">
                {ec.handling.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdgeCasesSection;
