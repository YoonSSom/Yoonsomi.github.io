import { useEffect, useRef, useState } from "react";
import { MousePointer2 } from "lucide-react";

interface IntroOverlayProps {
  onDismiss: () => void;
  /** Called the instant the user triggers exit, so the host can prep the
      target (e.g. keep the hero headline hidden until the FLIP completes). */
  onExitStart?: () => void;
}

const IntroOverlay = ({ onDismiss, onExitStart }: IntroOverlayProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 1800);
    return () => clearTimeout(t);
  }, []);

  const handleDismiss = () => {
    if (isExiting) return;
    setIsExiting(true);
    onExitStart?.();

    // Honor reduced-motion: skip the FLIP, do a quick fade only.
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // FLIP: animate the centered intro text into the hero headline slot.
    const sourceEl = textRef.current;
    const targetEl = document.getElementById("hero-headline");
    const bgEl = bgRef.current;

    if (prefersReducedMotion) {
      const REDUCED_DURATION = 150;
      if (bgEl) {
        bgEl.style.transition = `opacity ${REDUCED_DURATION}ms linear`;
        bgEl.style.opacity = "0";
      }
      if (sourceEl) {
        sourceEl.style.transition = `opacity ${REDUCED_DURATION}ms linear`;
        sourceEl.style.opacity = "0";
      }
      setTimeout(onDismiss, REDUCED_DURATION);
      return;
    }

    // Fade the background/hint out independently so it doesn't drag the text.
    if (bgEl) {
      bgEl.style.transition = "opacity 600ms ease-out";
      bgEl.style.opacity = "0";
    }

    const DURATION = 900; // 0.9s — within the requested 0.8–1.0s range
    const EASING = "cubic-bezier(0.65, 0, 0.35, 1)"; // ease-in-out

    if (sourceEl && targetEl) {
      const from = sourceEl.getBoundingClientRect();
      const to = targetEl.getBoundingClientRect();

      const dx = to.left + to.width / 2 - (from.left + from.width / 2);
      const dy = to.top + to.height / 2 - (from.top + from.height / 2);

      sourceEl.style.transformOrigin = "50% 50%";
      // Position-only transition: translate the element to its destination
      // without any scaling so the text size stays constant throughout.
      sourceEl.animate(
        [
          { transform: "translate(0px, 0px)" },
          { transform: `translate(${dx}px, ${dy}px)` },
        ],
        { duration: DURATION, easing: EASING, fill: "forwards" },
      );
    }

    // After the FLIP finishes, unmount and let the hero headline take over.
    // Wait one extra frame past the animation end so the landed transform is
    // fully committed before we swap to the static homepage element — this
    // prevents any single-frame flicker from a duplicate render.
    setTimeout(() => {
      requestAnimationFrame(onDismiss);
    }, DURATION);
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
      className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer overflow-hidden"
    >
      {/* Background layers — fade out independently of the shared text. */}
      <div ref={bgRef} className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[110px] pointer-events-none" />
      </div>

      <div className="relative z-10 px-5 sm:px-6 w-full max-w-[92vw] md:max-w-3xl lg:max-w-5xl flex flex-col items-center text-center">
        {/* Shared text element. Identical markup/classes to the hero headline,
            so a simple translate+scale produces a seamless transition. */}
        <div
          ref={textRef}
          className="opacity-0 animate-fade-in will-change-transform"
          style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
        >
          <h1 className="font-bold leading-tight tracking-tight text-foreground whitespace-nowrap text-[clamp(1rem,4.6vw,3.75rem)]">
            <span className="text-muted-foreground">"이게 될까요?"</span>를{" "}
            <span className="text-gradient">"이게 되네요"</span>로 바꾸는 기획자
          </h1>
          <p className="mt-2 lg:mt-4 font-semibold text-foreground/90 whitespace-nowrap text-[clamp(0.875rem,2.6vw,1.875rem)]">
            안녕하세요 윤소미입니다.
          </p>
        </div>

        <div
          className={`mt-12 flex items-center justify-center gap-2.5 text-xs md:text-sm text-muted-foreground tracking-widest uppercase transition-opacity duration-700 ${
            showHint && !isExiting ? "opacity-100" : "opacity-0"
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
