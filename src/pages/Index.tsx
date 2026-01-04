import { useState } from "react";
import TopNav from "@/components/TopNav";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("welcome");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "welcome":
        return <HeroSection onNavigate={handleNavigate} />;
      case "about":
      case "skills":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav activeSection={activeSection} onNavigate={handleNavigate} />
      <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="pt-16 min-h-screen">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
