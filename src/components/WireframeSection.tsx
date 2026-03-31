const wireframes = [
  {
    title: "Identity Verification",
    elements: ["Phone number input", "Date of birth input", "Hospital ID input", "Verify button"],
  },
  {
    title: "Consent Form",
    elements: ["AI avatar video area", "Consent text content", "Q&A chat interface", "Progress indicator"],
  },
  {
    title: "Digital Signature",
    elements: ["Consent summary", "Signature pad area", "Clear / Redo button", "Submit signature"],
  },
  {
    title: "Completion",
    elements: ["Success confirmation", "Document download link", "Return to portal", "Contact support"],
  },
  {
    title: "Admin Dashboard",
    elements: ["Patient list table", "Status filters", "Consent detail view", "Export / Print actions"],
  },
];

const WireframeSection = () => {
  return (
    <section id="wireframe" className="section-padding bg-muted/50">
      <div className="section-container">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">07 — Wireframes</p>
        <h2 className="section-title">Low-Fidelity Screen Layouts</h2>
        <p className="section-subtitle max-w-2xl">
          Simplified wireframes showing key screen structures and element hierarchy.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {wireframes.map((w) => (
            <div key={w.title} className="border border-border rounded-lg overflow-hidden bg-card">
              {/* Mock screen header */}
              <div className="bg-muted px-4 py-2.5 border-b border-border flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-border" />
                <span className="w-2 h-2 rounded-full bg-border" />
                <span className="w-2 h-2 rounded-full bg-border" />
                <span className="text-[10px] text-muted-foreground ml-2 font-mono">{w.title}</span>
              </div>
              {/* Mock screen body */}
              <div className="p-4 space-y-2.5">
                {w.elements.map((el) => (
                  <div key={el} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-border shrink-0" />
                    <div className="flex-1 h-7 rounded bg-muted border border-border flex items-center px-2.5">
                      <span className="text-[11px] text-muted-foreground">{el}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WireframeSection;
