import profileImage from "@/assets/profile.jpg";
import { GraduationCap, Briefcase, Award, Code2, Database, Palette, Target, Building2, Languages } from "lucide-react";

// 조직 정보 (그룹화용)
const organizations = [
  {
    name: "AI 비대면 수술 동의서 전자서명 서비스(KT)",
    period: "2025.12 - 2026.01",
    type: "experience",
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "border-sky-500/30",
  },
  {
    name: "디저트 린(Dessert Lyn)",
    period: "2023.10 - 현재",
    type: "experience",
    color: "from-pink-500/20 to-orange-500/20",
    borderColor: "border-pink-500/30",
  },
  {
    name: "서울사이버대학교",
    period: "2023.03 - 2025.02",
    type: "education",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    name: "알파코",
    period: "2022.03 - 2022.12",
    type: "experience",
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    name: "배화여자대학교",
    period: "2020.02 - 2022.02",
    type: "education",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },
];

// 프로덕트 엔지니어 5대 역량
const productEngineerCompetencies = [
  {
    icon: Target,
    title: "문제 정의와 Why",
    description: "주어진 스펙만 구현하는 게 아니라, 왜 이 기능을 만드는지 이해합니다.",
    examples: [
      "의료진 인터뷰로 진짜 페인포인트 도출 → 전자서명 서비스 기획",
      "사용자 문제 정의 후 MVP 개발, 불필요한 기능 제거로 2주 내 출시",
    ],
  },
  {
    icon: Database,
    title: "데이터 기반 의사결정",
    description: "감이 아닌 지표로 우선순위와 성공 여부를 판단합니다.",
    examples: [
      "GA4로 사용자 행동 분석, 전환율 3.2% 달성 (업계 평균 대비 160%)",
      "A/B 테스트로 가설 검증, 47회 체계적 실험으로 최적 조합 도출",
    ],
  },
  {
    icon: Palette,
    title: "사용자·비즈니스 중심",
    description: "기술 자체보다 사용자 경험과 비즈니스 임팩트를 우선합니다.",
    examples: [
      "고령층 접근성 고려한 터치 영역 2배 확대 → 서명 완료율 94%",
      "SEO + 데이터 분석으로 광고비 0원에 월 2,400+ 방문자 달성",
    ],
  },
  {
    icon: Code2,
    title: "트레이드오프 제안",
    description: "공수·UX 양쪽 관점에서 현실적인 선택을 제안합니다.",
    examples: [
      "정확도 vs 속도 트레이드오프 분석, 안전 시스템이므로 Recall 우선 결정",
      "MVP에 집중: 완벽한 기능보다 핵심 가설 검증 우선",
    ],
  },
  {
    icon: Building2,
    title: "크로스펑셔널 협업",
    description: "비개발자도 이해할 수 있는 언어로 기술적 선택을 설명합니다.",
    examples: [
      "의료진에게 전자서명 법적 요건 설명, 플로우 조율",
      "마케팅팀에 'AI가 리뷰를 읽는 법' 비유로 설명, 인사이트 활용 협의",
    ],
  },
];

// 기술스택 - 카테고리별 정리
const skillCategories = [
  {
    icon: Code2,
    title: "Product Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Rapid Prototyping"],
    level: "주력",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    skills: ["GA4", "GTM", "Python", "Supabase", "PostgreSQL", "A/B Testing"],
    level: "활용 가능",
  },
  {
    icon: Palette,
    title: "AI/ML Integration",
    skills: ["PyTorch", "OpenCV", "OCR", "LLM API", "CV Models"],
    level: "제품 적용 경험",
  },
  {
    icon: Target,
    title: "Product Tools",
    skills: ["Figma", "Git", "Notion", "Slack", "JIRA", "Linear"],
    level: "활용 가능",
  },
];

// 경력/교육 타임라인
const timeline = [
  {
    period: "2024.01 – 2024.03",
    organization: "AI 비대면 수술 동의서 전자서명 서비스(KT)",
    title: "기획 담당",
    type: "experience",
    details: [
      "역할: 서비스 기획 담당 (팀 프로젝트)",
      "AS-IS 수술 동의 프로세스 분석 및 TO-BE 구조 설계",
      "페르소나 정의 및 사용자 흐름(UX Flow) 설계",
      "핵심 기능 도출 및 우선순위 정의 (AI 설명, Q&A, 이해도 체크, 전자서명)",
      "AI와 의료진 역할 분담 정책 수립",
      "의료진 인터뷰 기반 요구사항 도출 및 기획 문서 작성",
    ],
  },
  {
    period: "2023.10 - 현재",
    organization: "디저트 린(Dessert Lyn)",
    title: "마케팅",
    type: "experience",
    details: [
      "역할: 브랜딩, 온라인 운영 및 웹사이트 유지보수 참여",
      "서이추 이벤트 및 릴스 마케팅을 통한 +500 팔로워 상승",
      "Google Ads를 활용한 광고 집행 및 성과 분석 경험",
      "Facebook 및 Instagram에서 배너 운영 및 콘텐츠 제작",
      "블로그 콘텐츠 작성 및 배포",
    ],
  },
  {
    period: "2023 하반기",
    organization: "디저트 린(Dessert Lyn)",
    title: "웹사이트 구축",
    type: "experience",
    details: [
      "역할: 모바일 마케팅 및 프론트엔드 개발 담당",
      "전체 홈페이지 UI를 반응형 레이아웃으로 재구성하여 이탈률 약 5% 감소",
      "SEO 타이틀태그 설치 가이드 준수 및 콘텐츠 전략 수립",
      "GTM을 이용한 GA4 활성화 및 페이지별 애널리틱스 데이터수집 및 리포트 세팅 작업",
      "400을 고려한 블로그에 그룹 및 레이블 구조화",
      "컨텐츠 페이지 및 상세 페이지 구현, 신뢰할 수 있는가 및 기타 엔진에서의 포지션 데이터 및 데이터 협업",
      "관리자 고객 후기 정산, Google Search Console 및 Google Analytics 실적 및 분석",
    ],
  },
  {
    period: "2023 하반기",
    organization: "디저트 린(Dessert Lyn)",
    title: "웹사이트 운영",
    type: "experience",
    details: [
      "역할: 웹사이트 콘텐츠 및 콘텐츠 관리 담당",
      "주요 업무: 소식 및 뉴스레터 관련 업데이트 등 취합, 소셜 채널과의 제휴 및 SNS링크 확대, 웹사이트 문의 답변태도 등 관리, 브랜드 자사의 이벤트 및 제안",
    ],
  },
  {
    period: "2023.02",
    organization: "서울사이버대학교",
    title: "컴퓨터공학과",
    type: "education",
    details: [
      "학과: 컴퓨터공학과 (졸업)",
      "파이썬, 데이터 분석, RPA 자동화, 웹크롤, AI 프로젝트",
      "머신러닝, 자연 언어처리 모델, 실무 프로젝트",
    ],
  },
  {
    period: "2022.03",
    organization: "알파코",
    title: "Text_Mining_ML",
    type: "experience",
    details: [
      "AI 2기 수료",
      "여러 형태 데이터 분석법업을 활용해 학습, EDA 자동화, 마스크 타이머까지 모든 클라우드 형성",
      "AWS, GithubAction, 스트릿지 리소스비용 최적화, 업무보고를 위한 시뮬레이터 제작에 심각 참가",
      "슬랙/디스코드 협업툴 활용(리서치 요요분석 서비스 디자인 되어, 실시간 팀 공간 기록, 품질 심사 데려/바니)",
      "리전별 데이터들의 군집, 트리 내 관중업 각 산의 현황 패턴화된 근거의 관리문을 사용하여 요약",
      "서비스 기술 상세 슬라리드에서 상당 부분의 컨텐츠엔템를 설정, 모듈화하",
    ],
  },
  {
    period: "2022 상반기",
    organization: "알파코",
    title: "RNN_Seq2Seq",
    type: "experience",
    details: [
      "역할: 대규모 언어 사전 검색분석 진행",
    ],
  },
  {
    period: "2022 상반기",
    organization: "알파코",
    title: "NLP-MUSINSA",
    type: "experience",
    details: [
      "Recommending items\"\"데이터 분석을 통한 다음 몇가지 상품 추천",
      "Predicting Starpoint Using Nouns\"\"단어특성 자연 형태소 색을 분류",
      "musinsa 텍스트데이터에 관한 언어형 청보 사례를 사이",
    ],
  },
  {
    period: "2022 상반기",
    organization: "알파코",
    title: "GPT2기반 자동 문장 생성",
    type: "experience",
    details: [
      "AI 모델 신기반상 개발을 목적 및 그룹원 전체의 데이터를 활용, GPT2로 파인튜닝",
    ],
  },
  {
    period: "2022 상반기",
    organization: "알파코",
    title: "차량 파손 인식(포카)",
    type: "experience",
    details: [
      "Semantic Segmentation을 의도한 자동적 파손부위 탐지",
      "via tool 사용",
      "DeepLabV3",
      "차량사례를 활용한 다양한 프로젝트",
    ],
  },
  {
    period: "2022 상반기",
    organization: "알파코",
    title: "졸음 운전 실시간 인식",
    type: "experience",
    details: [
      "눈을 통해 눈을 모니터링 승용 업소 지역에 대한 \"\"실시간\"\" 인지",
      "Drowsiness with a3",
      "YOLOv4",
    ],
  },
  {
    period: "2022 상반기",
    organization: "알파코",
    title: "OCR",
    type: "experience",
    details: [
      "OCR Project (Read More)",
      "AI와 비지니스성 언어를 적용",
      "인터넷에서 비정형 텍스트 언어하며 사전 조작하여 종합 75+의 OCR 모델 구현",
      "파테고 API를 활용해 벤의 사례포 개발",
    ],
  },
  {
    period: "2022 상반기",
    organization: "알파코",
    title: "HuBMAP + HPA - Hacking the Human Body",
    type: "experience",
    details: [
      "딥러닝 기법해서 다양, 기능을 학습, 팩션 조직(FTU)에 segmentation",
      "대회 순이후 판별 리더에의 다른간 기관이 Segmentation에 대한 이해력도",
    ],
  },
  {
    period: "2020.02",
    organization: "배화여자대학교",
    title: "법무법인 인턴",
    type: "education",
    details: [
      "학과: 비서행정과 (졸업)",
      "일정 조정 및 관련 문서 번역 습득",
      "법률 및 혜택 시간에 배달들해 관련 정령자와의 면담과 등 주요 사항 활용",
    ],
  },
];

// 자격증
const certifications = [
  { name: "빅데이터전문가", year: "2022" },
  { name: "코딩지도사 1급", year: "2022" },
  { name: "ITQ (한글, 엑셀)", year: "2020" },
];

// 어학
const languages = [
  { name: "JPT", score: "400" },
];

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-16 md:py-20 px-4 md:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
            ABOUT ME
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">이력 요약</span>
          </h2>
        </div>

        {/* 프로덕트 엔지니어 5대 역량 */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <Target className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <h3 className="font-semibold text-base md:text-lg">Product Engineer 핵심 역량</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {productEngineerCompetencies.map((item) => (
              <div 
                key={item.title} 
                className="p-4 md:p-5 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <h4 className="font-semibold text-xs md:text-sm">{item.title}</h4>
                </div>
                <p className="text-[10px] md:text-xs text-muted-foreground mb-2 md:mb-3">{item.description}</p>
                <ul className="space-y-1 md:space-y-1.5">
                  {item.examples.map((ex, idx) => (
                    <li key={idx} className="text-[10px] md:text-xs flex items-start gap-1.5 md:gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="leading-relaxed">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* 좌측: 프로필 카드 */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 space-y-4 md:space-y-6">
              {/* 프로필 */}
              <div className="p-4 md:p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <img
                    src={profileImage}
                    alt="윤소미"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-primary/50"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">윤소미</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Product Engineer</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">ysomi010212@gmail.com</p>
                  </div>
                </div>
                
                {/* 자격증 */}
                <div>
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <Award className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                    <h4 className="text-xs md:text-sm font-medium">자격증</h4>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    {certifications.map((cert) => (
                      <div key={cert.name} className="flex justify-between text-xs md:text-sm">
                        <span>{cert.name}</span>
                        <span className="text-muted-foreground">{cert.year}</span>
                      </div>
                    ))}
                </div>

                {/* 어학 */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <Languages className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                    <h4 className="text-xs md:text-sm font-medium">어학</h4>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex justify-between text-xs md:text-sm">
                        <span>{lang.name}</span>
                        <span className="text-muted-foreground">{lang.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </div>

              {/* 가치관 - Product Engineer 마인드셋 - 모바일에서 숨김 */}
              <div className="hidden md:block p-4 md:p-6 rounded-2xl bg-card border border-border">
                <h4 className="text-xs md:text-sm font-medium mb-2 md:mb-3 text-primary">일하는 방식</h4>
                <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground">
                  <p className="leading-relaxed">
                    <span className="text-foreground font-medium">🎯 Why부터 시작</span><br/>
                    스펙 구현 전에 "왜 이 기능인가" 질문합니다.
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-foreground font-medium">📊 숫자로 판단</span><br/>
                    감이 아닌 지표로 우선순위와 성공 여부를 결정합니다.
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-foreground font-medium">⚖️ 트레이드오프 제안</span><br/>
                    공수와 UX 양쪽 관점에서 현실적인 선택을 제안합니다.
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-foreground font-medium">🤝 모두가 이해하는 언어</span><br/>
                    비개발자도 이해할 수 있게 기술적 선택을 설명합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 우측: 기술스택 + 타임라인 */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* 기술스택 */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">기술 스택</h3>
              <div className="grid gap-3 md:gap-4">
                {skillCategories.map((category) => (
                  <div
                    key={category.title}
                    className="p-4 md:p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <div className="flex items-center gap-2">
                        <category.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        <h4 className="font-medium text-sm md:text-base">{category.title}</h4>
                      </div>
                      <span className="text-[10px] md:text-xs px-2 py-0.5 md:py-1 rounded-full bg-primary/10 text-primary">
                        {category.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs md:text-sm px-2 md:px-3 py-0.5 md:py-1 rounded-md bg-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 조직별 그룹화된 타임라인 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">경력 & 교육</h3>
              <div className="space-y-6">
                {organizations.map((org) => {
                  const orgItems = timeline.filter((item) => item.organization === org.name);
                  if (orgItems.length === 0) return null;
                  
                  return (
                    <div
                      key={org.name}
                      className={`rounded-2xl border ${org.borderColor} bg-gradient-to-br ${org.color} overflow-hidden`}
                    >
                      {/* 조직 헤더 */}
                      <div className="p-4 border-b border-border/50 flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          org.type === "education" 
                            ? "bg-primary/20" 
                            : "bg-accent/20"
                        }`}>
                          {org.type === "education" ? (
                            <GraduationCap className="w-5 h-5 text-primary" />
                          ) : (
                            <Building2 className="w-5 h-5 text-accent" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold">{org.name}</h4>
                          <p className="text-xs text-muted-foreground">{org.period}</p>
                        </div>
                        <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                          org.type === "education" 
                            ? "bg-primary/20 text-primary" 
                            : "bg-accent/20 text-accent"
                        }`}>
                          {org.type === "education" ? "교육" : "경력"}
                        </span>
                      </div>
                      
                      {/* 해당 조직의 항목들 */}
                      <div className="p-4 space-y-4">
                        {orgItems.map((item, idx) => (
                          <div key={idx} className="relative pl-4 border-l-2 border-border/50">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium text-primary">{item.title}</span>
                              <span className="text-xs text-muted-foreground">| {item.period}</span>
                            </div>
                            <ul className="space-y-1">
                              {item.details.map((detail, dIdx) => (
                                <li key={dIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary/60 mt-1">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;