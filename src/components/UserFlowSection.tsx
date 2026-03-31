import { ArrowRight } from "lucide-react";

const patientFlow = ["Access Link", "Verify Identity", "Watch Explanation", "Ask Questions", "Sign Consent", "Submit"];
const adminFlow = ["Login", "View Dashboard", "Check Status", "Manage Records"];

const FlowRow = ({ label, steps, color }: { label: string; steps: string[]; color: string }) => (
  <div className="card-base">
    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${color}`}>
      {label}
    </div>
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted border border-border">
            <span className="text-[10px] font-mono text-muted-foreground">{i + 1}</span>
            <span className="text-sm font-medium text-foreground">{step}</span>
          </div>
          {i < steps.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />}
        </div>
      ))}
    </div>
  </div>
);

const UserFlowSection = () => {
  return (
    <section id="flow" className="section-padding">
      <div className="section-container">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">06 — User Flow</p>
        <h2 className="section-title">Step-by-Step User Journey</h2>
        <p className="section-subtitle max-w-2xl">
          Clear, linear flows for both patient and admin users.
        </p>

        <div className="space-y-5 max-w-3xl">
          <FlowRow label="Patient Flow" steps={patientFlow} color="bg-primary/10 text-primary" />
          <FlowRow label="Admin Flow" steps={adminFlow} color="bg-foreground/10 text-foreground" />
        </div>
      </div>
    </section>
  );
};

export default UserFlowSection;
