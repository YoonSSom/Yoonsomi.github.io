import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { TodoSignDetail, TODOSIGN_PROJECT_META } from "@/components/ProjectsSection";

const TodoSignPage = () => {
  useEffect(() => {
    document.title = "AI 비대면 수술동의서 전자서명 서비스 (TodoSign)";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-20 bg-background/90 backdrop-blur border-b border-border/40">
        <div className="max-w-5xl mx-auto px-5 md:px-10 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> 프로젝트로 돌아가기
          </Link>
          <span className="text-xs text-muted-foreground">TodoSign · 상세 기획서</span>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col">
        <TodoSignDetail project={TODOSIGN_PROJECT_META} />
      </div>
    </div>
  );
};

export default TodoSignPage;