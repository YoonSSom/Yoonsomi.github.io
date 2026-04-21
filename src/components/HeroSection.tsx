import SharedHeadline from "@/components/SharedHeadline";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
  /** When true, hide the headline (intro overlay is showing/animating it instead). */
  hideHeadline?: boolean;
  /** When true, reveal non-headline chrome (status pill). False keeps it hidden
      so the homepage builds itself only after the shared text settles. */
  revealChrome?: boolean;
}

const HeroSection = ({ onNavigate, hideHeadline = false, revealChrome = true }: HeroSectionProps) => {
  return (
    <section
      id="welcome"
      className="pt-8 pb-2 lg:pt-12 lg:pb-4 flex items-center justify-center relative z-10"
    >
      {/* Same alignment container as IntroOverlay so center/width/padding are identical. */}
      <div className="w-full max-w-[92vw] md:max-w-3xl lg:max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        {/* 상단: 한 줄 직무 요약 */}
        <div className="text-center">
          <div
            className={`mb-3 lg:mb-5 transition-opacity duration-500 ease-out ${
              revealChrome ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-2.5 py-1 lg:px-4 lg:py-1.5 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] lg:text-sm text-muted-foreground">현재 구직 중</span>
            </div>
          </div>

          <div className="flex justify-center">
            <SharedHeadline id="hero-headline" hidden={hideHeadline} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
