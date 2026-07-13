import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Configure pdf.js worker (bundled locally)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface PdfViewerProps {
  file: string;
}

const PdfViewer = ({ file }: PdfViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<{ w: number; h: number } | null>(null);
  const [containerSize, setContainerSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [fadeIn, setFadeIn] = useState(true);

  // Track container size
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const update = () => setContainerSize({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Fade animation on page change
  useEffect(() => {
    setFadeIn(false);
    const t = setTimeout(() => setFadeIn(true), 30);
    return () => clearTimeout(t);
  }, [pageNumber]);

  const goPrev = () => setPageNumber((p) => Math.max(1, p - 1));
  const goNext = () => setPageNumber((p) => Math.min(numPages || p, p + 1));

  // Compute scale so the page fits inside the container without clipping.
  const scale = (() => {
    if (!pageSize || !containerSize.w || !containerSize.h) return 1;
    return Math.min(containerSize.w / pageSize.w, containerSize.h / pageSize.h);
  })();

  return (
    <div ref={containerRef} className="relative w-full h-full bg-neutral-900 overflow-hidden select-none">
      {/* PDF page centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
        >
          <Document
            file={file}
            onLoadSuccess={({ numPages: n }) => setNumPages(n)}
            loading={<div className="text-sm text-muted-foreground">Loading PDF…</div>}
            error={<div className="text-sm text-destructive">Failed to load PDF</div>}
          >
            {containerSize.w > 0 && (
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                onLoadSuccess={(p) => {
                  const vp = p.getViewport({ scale: 1 });
                  setPageSize({ w: vp.width, h: vp.height });
                }}
              />
            )}
          </Document>
        </div>
      </div>

      {/* Left click zone */}
      <button
        type="button"
        aria-label="이전 페이지"
        onClick={goPrev}
        disabled={pageNumber <= 1}
        className="group absolute left-0 top-0 h-full w-1/2 flex items-center justify-start pl-4 md:pl-8 cursor-pointer disabled:cursor-default disabled:opacity-0 z-10"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 text-white/90 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs md:text-sm">
          <ChevronLeft className="w-4 h-4" />
          이전 페이지
        </span>
      </button>

      {/* Right click zone */}
      <button
        type="button"
        aria-label="다음 페이지"
        onClick={goNext}
        disabled={pageNumber >= numPages}
        className="group absolute right-0 top-0 h-full w-1/2 flex items-center justify-end pr-4 md:pr-8 cursor-pointer disabled:cursor-default disabled:opacity-0 z-10"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 text-white/90 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs md:text-sm">
          다음 페이지
          <ChevronRight className="w-4 h-4" />
        </span>
      </button>

      {/* Page counter */}
      {numPages > 0 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-white/90 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs md:text-sm font-medium tabular-nums pointer-events-none">
          {pageNumber} / {numPages}
        </div>
      )}
    </div>
  );
};

export default PdfViewer;