import { FileSignature, ShieldCheck, PenTool, LayoutDashboard, Database } from "lucide-react";

const features = [
  {
    icon: FileSignature,
    title: "Electronic Consent Form",
    desc: "Digital consent documents with structured content, multimedia explanations, and accessibility support.",
  },
  {
    icon: ShieldCheck,
    title: "Identity Verification",
    desc: "Multi-factor identity verification via phone number, date of birth, and hospital registration number.",
  },
  {
    icon: PenTool,
    title: "Digital Signature",
    desc: "Touch-based signature capture with timestamp recording and tamper-proof encryption.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    desc: "Real-time consent status tracking, patient management, and analytics for hospital administrators.",
  },
  {
    icon: Database,
    title: "Document Storage",
    desc: "Secure cloud-based storage with retrieval, audit trail logging, and regulatory compliance features.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-muted/50">
      <div className="section-container">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">05 — Key Features</p>
        <h2 className="section-title">Core System Features</h2>
        <p className="section-subtitle max-w-2xl">
          Five essential features that power the untact consent experience.
        </p>

        <div className="space-y-3 max-w-3xl">
          {features.map((f, i) => (
            <div key={f.title} className="card-base flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-muted-foreground/50 font-mono">0{i + 1}</span>
                  <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
