import { Github, Linkedin, Mail, FileText } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "welcome", label: "WELCOME" },
  { id: "about", label: "WHO AM I" },
  { id: "projects", label: "WHAT DID I DO" },
  { id: "contact", label: "GET IN TOUCH" },
];

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-sidebar flex flex-col justify-between py-12 px-8 border-r border-sidebar-border z-50 hidden lg:flex">
      <div className="space-y-12">
        <nav className="space-y-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-link block text-right w-full opacity-0 animate-slide-in-left`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className={activeSection === item.id ? "active nav-link" : "nav-link"}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
      
      <div className="flex justify-end gap-4">
        <a
          href="https://github.com/YoonSoM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.notion.so/it-s-my-Notion-496f12b2c46c4a7386dbbc0e5a6944a0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <FileText className="w-5 h-5" />
        </a>
        <a
          href="mailto:ysomi010212@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
