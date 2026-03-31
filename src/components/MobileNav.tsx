import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "problem", label: "Problem" },
  { id: "persona", label: "Persona" },
  { id: "solution", label: "Solution" },
  { id: "features", label: "Features" },
  { id: "flow", label: "User Flow" },
  { id: "wireframe", label: "Wireframe" },
  { id: "impact", label: "Impact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 h-14 bg-background/90 backdrop-blur-sm border-b border-border">
        <a href="#hero" className="text-sm font-bold text-foreground">Portfolio</a>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="bg-background border-b border-border p-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
