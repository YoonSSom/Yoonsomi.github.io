import profileImage from "@/assets/profile.jpg";
import { GraduationCap, Briefcase, Award, Code2, Database, Palette, Target } from "lucide-react";

// 핵심 역량 요약
const highlights = [
  "React/TypeScript 기반 프론트엔드 개발 2년+",
  "Python + PyTorch 활용 AI/ML 프로젝트 5건+",
  "실제 서비스 기획-개발-운영 경험 (커머스)",
  "Kaggle 대회 상위 12% 달성",
];

// 기술스택 - 카테고리별 정리
const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "주력",
  },
  {
    icon: Database,
    title: "Backend & DB",
    skills: ["Python", "Node.js", "Supabase", "PostgreSQL"],
    level: "활용 가능",
  },
  {
    icon: Palette,
    title: "AI/ML",
    skills: ["PyTorch", "OpenCV", "Hugging Face", "Computer Vision"],
    level: "프로젝트 경험",
  },
];

// 경력/교육 타임라인
const timeline = [
  {
    period: "2023 - 2025",
    title: "서울사이버대학교 컴퓨터공학",
    type: "education",
    description: "CS 기초 및 소프트웨어 공학 학습",
  },
  {
    period: "2022",
    title: "알파코 AI 부트캠프 2기 수료",
    type: "experience",
    description: "Python, ML/DL, 팀 프로젝트 6건 수행",
  },
  {
    period: "2020 - 2022",
    title: "배화여자대학교 비서행정",
    type: "education",
    description: "문서 작성, 커뮤니케이션 역량",
  },
];

// 자격증
const certifications = [
  { name: "빅데이터전문가", year: "2022" },
  { name: "코딩지도사 1급", year: "2022" },
  { name: "ITQ (한글, 엑셀)", year: "2020" },
];

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
            ABOUT ME
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">이력 요약</span>
          </h2>
        </div>

        {/* 핵심 역량 하이라이트 - 스캔하기 쉽게 */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">핵심 역량</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-3">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 좌측: 프로필 카드 */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* 프로필 */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={profileImage}
                    alt="윤소미"
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary/50"
                  />
                  <div>
                    <h3 className="text-xl font-bold">윤소미</h3>
                    <p className="text-sm text-muted-foreground">Frontend Developer</p>
                    <p className="text-xs text-muted-foreground">ysomi010212@gmail.com</p>
                  </div>
                </div>
                
                {/* 자격증 */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-primary" />
                    <h4 className="text-sm font-medium">자격증</h4>
                  </div>
                  <div className="space-y-2">
                    {certifications.map((cert) => (
                      <div key={cert.name} className="flex justify-between text-sm">
                        <span>{cert.name}</span>
                        <span className="text-muted-foreground">{cert.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 가치관 */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h4 className="text-sm font-medium mb-3 text-primary">Work Philosophy</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "부족한 것을 유지하지 않는 사람"이 되고자 합니다. 
                  지난 과거를 바꿀 수 없다면, 더 나은 미래를 만들면 됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* 우측: 기술스택 + 타임라인 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 기술스택 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">기술 스택</h3>
              <div className="grid gap-4">
                {skillCategories.map((category) => (
                  <div
                    key={category.title}
                    className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <category.icon className="w-5 h-5 text-primary" />
                        <h4 className="font-medium">{category.title}</h4>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {category.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm px-3 py-1 rounded-md bg-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 타임라인 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">경력 & 교육</h3>
              <div className="relative">
                {/* 타임라인 선 */}
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border" />
                
                <div className="space-y-6">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="flex gap-4 relative">
                      <div className="flex-shrink-0 z-10">
                        {item.type === "education" ? (
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                            <GraduationCap className="w-3 h-3 text-primary" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                            <Briefcase className="w-3 h-3 text-accent" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="text-xs text-muted-foreground mb-1">{item.period}</p>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;