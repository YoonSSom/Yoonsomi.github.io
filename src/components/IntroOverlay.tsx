import { useEffect, useState } from "react";

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

      <div className="relative z-10 text-center px-6 max-w-4xl lg:max-w-5xl">
        <h1
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight opacity-0 animate-fade-in"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          <span className="text-muted-foreground">"이게 될까요?"</span>를{" "}
          <span className="text-gradient">"이게 되네요"</span>로 바꾸는 기획자
        </h1>

        <p
          className="mt-6 text-xl md:text-3xl lg:text-4xl font-semibold opacity-0 animate-fade-in"
          style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
        >
          안녕하세요, 윤소미입니다
        </p>

        <p
          className={`mt-12 text-xs md:text-sm text-muted-foreground tracking-widest uppercase transition-opacity duration-700 ${
            showHint ? "opacity-100" : "opacity-0"
          }`}
        >
          Click anywhere to enter
        </p>
      </div>
    </div>
  );
};

export default IntroOverlay;
