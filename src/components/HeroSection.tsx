interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section
      id="welcome"
      className="pt-8 pb-2 lg:pt-12 lg:pb-4 flex items-center justify-center relative z-10"
    >
      <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 relative z-10">
        {/* 상단: 한 줄 직무 요약 */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 lg:px-4 lg:py-1.5 rounded-full bg-card/50 border border-border/50 mb-3 lg:mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] lg:text-sm text-muted-foreground">현재 구직 중</span>
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 lg:mb-4 leading-tight">
            <span className="text-muted-foreground">"이게 될까요?"</span>를 <span className="text-gradient">"이게 되네요"</span>로 바꾸는 기획자
          </h1>
          
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold">
            안녕하세요, 윤소미입니다
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
