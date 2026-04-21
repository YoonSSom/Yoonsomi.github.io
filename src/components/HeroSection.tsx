interface HeroSectionProps {
  onNavigate: (section: string) => void;
  /** When true, hide the headline (intro overlay is showing/animating it instead). */
  hideHeadline?: boolean;
}

const HeroSection = ({ onNavigate, hideHeadline = false }: HeroSectionProps) => {
  return (
    <section
      id="welcome"
      className="pt-8 pb-2 lg:pt-12 lg:pb-4 flex items-center justify-center relative z-10"
    >
      {/* Padding matches IntroOverlay's centered wrapper (px-5 sm:px-6) so
          the headline lands at the same horizontal offset after transition. */}
      <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        {/* 상단: 한 줄 직무 요약 */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 lg:px-4 lg:py-1.5 rounded-full bg-card/50 border border-border/50 mb-3 lg:mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] lg:text-sm text-muted-foreground">현재 구직 중</span>
          </div>

          {/* Shared-element target. The same text lives in IntroOverlay; on
              dismiss it animates from the center of the screen into this slot. */}
          {/* Shared-element wrapper. Must match IntroOverlay's wrapper
              exactly (inline-block, text-left, no extra padding) so the
              animated intro text lands on the same layout box and there's
              no post-transition shift. */}
          <div
            id="hero-headline"
            className="inline-block text-left align-top"
            style={{ visibility: hideHeadline ? "hidden" : "visible" }}
          >
            {/* Line 1 = base headline. Line 2 is absolutely positioned and
                horizontally centered to Line 1, sitting just below it like
                an anchored subtitle rather than a separate flow block. */}
            <div className="relative inline-block">
              <h1 className="font-bold leading-tight tracking-tight whitespace-nowrap text-[clamp(1rem,4.6vw,3.75rem)]">
                <span className="text-muted-foreground">"이게 될까요?"</span>를{" "}
                <span className="text-gradient">"이게 되네요"</span>로 바꾸는 기획자
              </h1>
              <p className="absolute left-1/2 -translate-x-1/2 top-full mt-1 lg:mt-2 font-semibold text-foreground/90 whitespace-nowrap text-[clamp(0.875rem,2.6vw,1.875rem)]">
                안녕하세요 윤소미입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
