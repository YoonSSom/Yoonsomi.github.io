import { CheckCircle2 } from "lucide-react";

const solutions = [
  {
    problem: "Long waiting time for explanation",
    solution: "AI avatar delivers standardized video explanation patients can watch anytime, anywhere.",
  },
  {
    problem: "Complex medical terminology",
    solution: "Interactive Q&A allows patients to ask questions and receive plain-language answers in real-time.",
  },
  {
    problem: "Paper-based document management",
    solution: "Fully digital consent forms with electronic signatures, stored securely in cloud database.",
  },
  {
    problem: "No proof of adequate explanation",
    solution: "System logs viewing time, Q&A interactions, and signature timestamps for legal compliance.",
  },
  {
    problem: "Patients can't review after signing",
    solution: "Signed consent documents are accessible anytime via patient portal or email.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="section-padding">
      <div className="section-container">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">04 — Solution</p>
        <h2 className="section-title">AI-Powered Untact Consent System</h2>
        <p className="section-subtitle max-w-2xl">
          An electronic signature-based system that solves each identified problem through technology and process redesign.
        </p>

        <div className="space-y-4 max-w-3xl">
          {solutions.map((s, i) => (
            <div key={i} className="card-base flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-1/3 shrink-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Problem</div>
                <p className="text-sm font-medium text-foreground">{s.problem}</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-border shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs text-primary uppercase tracking-wider font-medium">Solution</span>
                </div>
                <p className="text-sm text-muted-foreground">{s.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
