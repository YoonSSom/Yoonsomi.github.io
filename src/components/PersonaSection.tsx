import { User, Building2 } from "lucide-react";

const personas = [
  {
    icon: User,
    role: "Patient",
    name: "Kim Jihye, 58",
    quote: "I don't understand the medical terms and I'm anxious before surgery.",
    traits: [
      "Low digital literacy",
      "Needs clear, simple explanations",
      "Anxious about surgical risks",
      "Wants to review consent at own pace",
    ],
  },
  {
    icon: Building2,
    role: "Hospital Staff",
    name: "Dr. Park, Surgeon",
    quote: "I spend too much time explaining the same consent to every patient.",
    traits: [
      "Handles 15+ consent sessions daily",
      "Needs standardized explanation process",
      "Requires legal compliance records",
      "Wants efficient document management",
    ],
  },
];

const PersonaSection = () => {
  return (
    <section id="persona" className="section-padding">
      <div className="section-container">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">02 — Users & Persona</p>
        <h2 className="section-title">Who Are We Designing For?</h2>
        <p className="section-subtitle max-w-2xl">
          Two primary users with distinct needs and pain points in the consent process.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {personas.map((p) => (
            <div key={p.role} className="card-base">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-primary font-medium uppercase tracking-wider">{p.role}</div>
                  <div className="text-base font-semibold text-foreground">{p.name}</div>
                </div>
              </div>
              <blockquote className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3 mb-4">
                "{p.quote}"
              </blockquote>
              <ul className="space-y-1.5">
                {p.traits.map((t) => (
                  <li key={t} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {t}
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

export default PersonaSection;
