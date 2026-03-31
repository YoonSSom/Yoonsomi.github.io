const navItems = [
  { id: "problem", label: "Problem" },
  { id: "persona", label: "Persona" },
  { id: "solution", label: "Solution" },
  { id: "features", label: "Features" },
  { id: "flow", label: "User Flow" },
  { id: "wireframe", label: "Wireframe" },
  { id: "impact", label: "Impact" },
];

const TopNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-14">
        <a href="#hero" className="text-sm font-bold text-foreground tracking-tight">
          Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default TopNav;
