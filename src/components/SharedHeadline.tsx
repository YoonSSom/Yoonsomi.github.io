import { forwardRef, type CSSProperties } from "react";

interface SharedHeadlineProps {
  id?: string;
  hidden?: boolean;
  className?: string;
  style?: CSSProperties;
}

const SharedHeadline = forwardRef<HTMLDivElement, SharedHeadlineProps>(
  ({ id, hidden = false, className = "", style }, ref) => (
    <div
      id={id}
      ref={ref}
      className={`inline-block text-center align-top ${className}`}
      style={{ visibility: hidden ? "hidden" : "visible", ...style }}
    >
      <div className="relative inline-block">
        <h1 className="font-bold leading-tight tracking-tight text-foreground whitespace-nowrap text-[clamp(1rem,4.6vw,3.75rem)]">
          <span className="text-muted-foreground">"이게 될까요?"</span>를{" "}
          <span className="text-gradient">"이게 되네요"</span>로 바꾸는 기획자
        </h1>
        <p className="absolute left-1/2 -translate-x-1/2 top-full mt-1 lg:mt-2 font-semibold text-foreground/90 whitespace-nowrap text-[clamp(0.875rem,2.6vw,1.875rem)]">
          안녕하세요 윤소미입니다.
        </p>
      </div>
    </div>
  ),
);

SharedHeadline.displayName = "SharedHeadline";

export default SharedHeadline;