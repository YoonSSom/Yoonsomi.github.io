import { useState, useEffect } from "react";
import TopNav from "@/components/TopNav";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import IntroOverlay from "@/components/IntroOverlay";

const Index = () => {
  const [activeSection, setActiveSection] = useState("welcome");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displaySection, setDisplaySection] = useState("welcome");
  const [showIntro, setShowIntro] = useState(true);
  // Once true, the rest of the homepage chrome (nav, status pill, projects,
  // background blobs, etc.) is allowed to fade in. Stays false while the
  // intro is on screen AND while the FLIP transition is mid-flight.
  const [contentRevealed, setContentRevealed] = useState(false);

  // Reveal homepage content only AFTER the intro overlay has fully
  // dismissed (i.e. the shared text has landed in its final position).
  // Honors prefers-reduced-motion by skipping the fade delay.
  useEffect(() => {
    if (showIntro) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setContentRevealed(true);
      return;
    }
    // One frame after dismiss so the headline is committed before chrome fades in.
    const id = requestAnimationFrame(() => setContentRevealed(true));
    return () => cancelAnimationFrame(id);
  }, [showIntro]);

  const handleNavigate = (section: string) => {
    if (section === activeSection) return;
    
    setIsTransitioning(true);
    
    // Wait for fade out, then switch section
    setTimeout(() => {
      setDisplaySection(section);
      setActiveSection(section);
      // Small delay then fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  const renderSection = () => {
    switch (displaySection) {
      case "welcome":
        return (
          <div className="relative overflow-hidden">
            {/* Shared background layer for hero + projects */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-[40%] right-[10%] w-80 h-80 bg-accent/20 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[30%] w-72 h-72 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <HeroSection
                onNavigate={handleNavigate}
                hideHeadline={showIntro}
              />
              <ProjectsSection hideHeader />
            </div>
          </div>
        );
      case "about":
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
      {showIntro && (
        <IntroOverlay
          onDismiss={() => setShowIntro(false)}
        />
      )}
      {/* Nav fades in only after the intro shared-element transition completes. */}
      <div
        className={`transition-opacity duration-500 ease-out ${
          contentRevealed ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <TopNav activeSection={activeSection} onNavigate={handleNavigate} />
        <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />
      </div>

      <main className="pt-12 md:pt-16 min-h-screen">
        <div
          className={`transition-all duration-300 ease-out ${
            isTransitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* Wrap rendered section so non-headline content fades in only
              after the shared text settles into place. The hero headline
              itself is not affected (it lives in HeroSection and is
              controlled separately via hideHeadline). */}
          <div
            data-content-revealed={contentRevealed}
            className={`[&_*:not(#hero-headline):not(#hero-headline_*)]:transition-opacity [&_*:not(#hero-headline):not(#hero-headline_*)]:duration-500 ${
              contentRevealed ? "" : "[&_*:not(#hero-headline):not(#hero-headline_*)]:opacity-0"
            }`}
          >
            {renderSection()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
