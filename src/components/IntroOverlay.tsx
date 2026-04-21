import { useEffect, useState } from "react";
import { MousePointer2 } from "lucide-react";

interface IntroOverlayProps {
  onDismiss: () => void;
}

const IntroOverlay = ({ onDismiss }: IntroOverlayProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 1800);
    return () => clearTimeout(t);
  }, []);

  const handleDismiss = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(onDismiss, 600);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key) handleDismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background cursor-pointer overflow-hidden transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 px-5 sm:px-6 w-full max-w-[92vw] md:max-w-3xl lg:max-w-5xl flex flex-col items-center text-center">
        {/* Line 1 — headline (forced single line, never reflows into line 2) */}
        <h1
          className="opacity-0 animate-fade-in font-bold leading-tight tracking-tight text-foreground whitespace-nowrap text-[clamp(1rem,4.6vw,3.75rem)]"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          <span className="text-muted-foreground">"이게 될까요?"</span>를{" "}
          <span className="text-gradient">"이게 되네요"</span>로 바꾸는 기획자
        </h1>

        {/* Forced line break between Line 1 and Line 2 */}
        <p
          className="opacity-0 animate-fade-in mt-3 md:mt-4 font-semibold text-foreground/90 whitespace-nowrap text-[clamp(0.875rem,2.6vw,1.875rem)]"
          style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
        >
          안녕하세요 윤소미입니다.
        </p>

        <div
          className={`mt-12 flex items-center justify-center gap-2.5 text-xs md:text-sm text-muted-foreground tracking-widest uppercase transition-opacity duration-700 ${
            showHint ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7">
            {/* expanding click rings */}
            <span className="absolute inset-0 rounded-full border border-primary/60 animate-intro-click-ring" />
            <span
              className="absolute inset-0 rounded-full border border-primary/40 animate-intro-click-ring"
              style={{ animationDelay: "0.6s" }}
            />
            {/* pointer icon */}
            <MousePointer2 className="relative w-3.5 h-3.5 md:w-4 md:h-4 text-primary animate-intro-click-tap" />
          </span>
          <span>Click anywhere to enter</span>
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;
