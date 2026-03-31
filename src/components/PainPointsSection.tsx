const painPoints = [
  {
    user: "Patient",
    color: "bg-primary/10 text-primary",
    points: [
      { title: "Complex Medical Terms", desc: "Cannot understand consent content written in professional jargon." },
      { title: "Pressure to Sign Quickly", desc: "Feels rushed by staff and signs without fully understanding." },
      { title: "No Record Access", desc: "Cannot review what was signed after leaving the hospital." },
    ],
  },
  {
    user: "Hospital Staff",
    color: "bg-foreground/10 text-foreground",
    points: [
      { title: "Repetitive Explanations", desc: "Explains the same consent 15+ times daily, consuming valuable time." },
      { title: "Paper Management Burden", desc: "Filing, storing, and retrieving paper forms is inefficient." },
      { title: "Compliance Anxiety", desc: "No proof of adequate explanation in case of disputes." },
    ],
  },
];

const PainPointsSection = () => {
  return (
    <section id="painpoints" className="section-padding bg-muted/50">
      <div className="section-container">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">03 — Pain Points</p>
        <h2 className="section-title">Key Pain Points by User</h2>
        <p className="section-subtitle max-w-2xl">
          Identifying the core frustrations that the current process creates for each user group.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((group) => (
            <div key={group.user}>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${group.color}`}>
                {group.user}
              </div>
              <div className="space-y-3">
                {group.points.map((p, i) => (
                  <div key={p.title} className="card-base">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-muted-foreground/50 mt-0.5">0{i + 1}</span>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">{p.title}</h4>
                        <p className="text-sm text-muted-foreground">{p.desc}</p>
                      </div>
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

export default PainPointsSection;
