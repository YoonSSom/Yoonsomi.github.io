import { useState } from "react";
import { ExternalLink, Calendar, Users, CheckCircle2, Circle, TrendingUp, GitBranch, FileText, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface TimelineStep {
  label: string;
  completed: boolean;
}

interface Metric {
  label: string;
  value: string;
  description: string;
}

interface Decision {
  question: string;
  answer: string;
}

interface Project {
  id: string;
  title: string;
  problem: string; // 해결한 문제
  description: string;
  fullDescription: string;
  tags: { label: string; color: string }[];
  link?: string;
  github?: string;
  docs?: string;
  image: string;
  period: string;
  team: string;
  myRole: string; // 나의 역할
  tools: string[];
  progress: number;
  timeline: TimelineStep[];
  metrics: Metric[]; // 성과 수치
  decisions: Decision[]; // 설계 결정 이유
  collaboration: string[]; // 협업/문서화 흔적
  growth: string; // 성장 포인트
}

const projects: Project[] = [
  {
    id: "todosign",
    title: "비대면 수술 동의서 전자서명 서비스",
    problem: "💡 가설: 고령 환자의 병원 방문 부담을 줄이면 동의서 서명 완료율이 높아질 것",
    description: "**문제 발견** → 코로나 이후 비대면 니즈 증가 | **솔루션** → 모바일 최적화 전자서명 | **결과** → 서명 완료율 94%, 처리 시간 90% 단축",
    fullDescription: "**[문제 정의]** 코로나19 이후 고령 환자의 병원 방문 부담이 커지면서 수술 동의서 서명 지연 문제 발생. 의료진 인터뷰 결과, 환자 10명 중 3명이 서명을 위해 별도 내원.\n\n**[가설]** 모바일에서 간편하게 서명할 수 있다면 완료율이 80% 이상 달성 가능.\n\n**[솔루션]** React + TypeScript 기반 반응형 UI, 고령층을 고려한 큰 버튼/단순 플로우, 법적 효력 있는 전자서명 API 연동.\n\n**[결과 검증]** 서명 완료율 94% 달성(가설 초과), 처리 시간 3분(기존 30분 대비 90% 단축), 모바일 사용률 78%로 접근성 개선 확인.",
    tags: [
      { label: "End-to-End", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "헬스케어", color: "bg-purple-500/20 text-purple-400" },
      { label: "MVP", color: "bg-pink-500/20 text-pink-400" },
    ],
    link: "https://todosign.lovable.app",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    period: "2024.01 - 2024.03",
    team: "1인 (기획~배포)",
    myRole: "문제 정의, 사용자 리서치, 프로토타이핑, 개발, 배포",
    tools: ["React", "TypeScript", "Tailwind CSS", "전자서명 API", "Supabase"],
    progress: 100,
    timeline: [
      { label: "의료진 인터뷰 & 페인포인트 도출", completed: true },
      { label: "핵심 가설 정의 & 성공 지표 설정", completed: true },
      { label: "Lo-fi 프로토타입 & 피드백", completed: true },
      { label: "MVP 개발 (2주)", completed: true },
      { label: "파일럿 테스트 & 결과 측정", completed: true },
    ],
    metrics: [
      { label: "가설 검증", value: "✓ 성공", description: "목표 80% → 실제 94% 달성" },
      { label: "처리 시간", value: "90%↓", description: "30분 → 3분으로 단축" },
      { label: "모바일 비율", value: "78%", description: "접근성 개선 확인" },
    ],
    decisions: [
      { question: "왜 MVP에 집중했나요?", answer: "완벽한 기능보다 핵심 가설 검증이 우선. 2주 내 배포 후 실제 데이터로 판단했습니다." },
      { question: "고령층 UX는 어떻게 개선했나요?", answer: "사용자 테스트에서 '버튼이 작다'는 피드백 → 터치 영역 2배 확대, 단계 3개로 축소." },
    ],
    collaboration: [
      "Figma로 의료진과 실시간 피드백",
      "가설-실험-결과 문서화 (Notion)",
      "주간 KPI 리뷰 및 개선 사이클",
    ],
    growth: "기술보다 '누구의 어떤 문제인가'가 먼저라는 것을 배웠습니다. 완벽한 코드보다 빠른 검증이 중요하고, 사용자 피드백이 최고의 기획서입니다.",
  },
  {
    id: "commercial",
    title: "디저트 커머스 웹사이트",
    problem: "💡 가설: SEO 최적화 + 데이터 분석으로 유기적 유입을 늘리면 광고비 없이 성장 가능",
    description: "**문제 발견** → 오프라인 의존도 높음 | **솔루션** → SEO + GA4 기반 성장 | **결과** → 월 2,400+ 방문자, 전환율 3.2%",
    fullDescription: "**[문제 정의]** 오프라인 중심 베이커리의 신규 고객 유입 한계. 광고비 지출 없이 온라인 판로 확대 필요.\n\n**[가설]** SEO 최적화와 데이터 기반 개선으로 6개월 내 월 2,000 방문자 달성 가능.\n\n**[솔루션]** Next.js SSG로 SEO 최적화, GA4로 사용자 행동 분석, A/B 테스트로 전환율 개선.\n\n**[결과 검증]** 월 2,400+ 방문자(가설 초과), 전환율 3.2%, 평균 체류 시간 2분 34초. 광고비 0원으로 유기적 성장 달성.",
    tags: [
      { label: "Growth", color: "bg-green-500/20 text-green-400" },
      { label: "Data-Driven", color: "bg-blue-500/20 text-blue-400" },
      { label: "운영중", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    link: "https://dessertlyn.lovable.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    period: "2023.06 - 현재",
    team: "1인 (기획~운영)",
    myRole: "제품 전 과정: 기획, 개발, 마케팅, 데이터 분석, 운영",
    tools: ["React", "Next.js", "GA4", "GTM", "Google Search Console", "Tailwind CSS"],
    progress: 80,
    timeline: [
      { label: "시장 조사 & 페르소나 정의", completed: true },
      { label: "MVP 개발 & SEO 기본 적용", completed: true },
      { label: "GA4 세팅 & 데이터 수집 시작", completed: true },
      { label: "주간 데이터 리뷰 & 개선", completed: true },
      { label: "A/B 테스트 확대 중", completed: false },
    ],
    metrics: [
      { label: "가설 검증", value: "✓ 성공", description: "목표 2,000 → 실제 2,400+ 달성" },
      { label: "전환율", value: "3.2%", description: "업계 평균 2% 대비 160%" },
      { label: "광고비", value: "₩0", description: "100% 유기적 성장" },
    ],
    decisions: [
      { question: "왜 직접 운영하나요?", answer: "제품의 전체 사이클을 경험하고, 데이터 기반 의사결정 역량을 키우기 위해 1인 운영을 선택했습니다." },
      { question: "어떤 지표를 가장 중시하나요?", answer: "전환율 > 방문자 수. 트래픽보다 실제 비즈니스 임팩트를 우선시합니다." },
    ],
    collaboration: [
      "주간 KPI 대시보드 운영 (GA4)",
      "가설-실험-결과 로그 누적 (30건+)",
      "개선 사례 블로그 포스팅 (5편)",
    ],
    growth: "개발자가 비즈니스를 이해하면 더 좋은 제품을 만들 수 있습니다. PDCA 사이클을 체득하고, 숫자로 말하는 습관을 들였습니다.",
  },
  {
    id: "medical-segmentation",
    title: "의료 영상 FTU 분할 모델",
    problem: "💡 가설: 앙상블 + TTA 전략으로 단일 모델 대비 Dice Score 5% 이상 개선 가능",
    description: "**문제 발견** → 수동 분할의 시간/비용 | **솔루션** → U-Net 앙상블 | **결과** → 상위 12%, Dice 0.847",
    fullDescription: "**[문제 정의]** 의료 연구에서 FTU 수동 분할에 평균 2시간 소요. 자동화로 연구 효율성 개선 필요.\n\n**[가설]** U-Net 앙상블 + TTA로 단일 모델 대비 5% 이상 성능 개선 가능.\n\n**[솔루션]** EfficientNet 백본 U-Net, 다양한 Augmentation, 5-fold 앙상블 + TTA.\n\n**[결과 검증]** Dice Score 0.847 달성(베이스라인 0.78 대비 8.6%↑), 1,175팀 중 상위 12%, 47회 체계적 실험으로 최적 조합 도출.",
    tags: [
      { label: "ML Pipeline", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "실험관리", color: "bg-purple-500/20 text-purple-400" },
      { label: "수상", color: "bg-pink-500/20 text-pink-400" },
    ],
    github: "https://github.com/username/hubmap-segmentation",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop",
    period: "2022.09 - 2022.12",
    team: "팀 (3인)",
    myRole: "가설 설계, 모델 아키텍처, 실험 파이프라인 구축",
    tools: ["Python", "PyTorch", "U-Net", "EfficientNet", "W&B", "Albumentations"],
    progress: 100,
    timeline: [
      { label: "EDA & 베이스라인 가설 수립", completed: true },
      { label: "실험 파이프라인 & 로깅 구축", completed: true },
      { label: "가설별 A/B 실험 (47회)", completed: true },
      { label: "앙상블 전략 최적화", completed: true },
      { label: "결과 분석 & 회고", completed: true },
    ],
    metrics: [
      { label: "가설 검증", value: "✓ 성공", description: "목표 5%↑ → 실제 8.6%↑" },
      { label: "최종 순위", value: "Top 12%", description: "1,175팀 중 상위권" },
      { label: "실험 횟수", value: "47회", description: "체계적 가설 검증" },
    ],
    decisions: [
      { question: "왜 체계적 실험에 집중했나요?", answer: "랜덤 시도보다 가설-실험-분석 사이클이 효율적. W&B로 모든 실험 추적." },
      { question: "가장 임팩트 있던 개선은?", answer: "TTA만으로 1.5% 개선. 비용 대비 효과가 가장 컸습니다." },
    ],
    collaboration: [
      "팀 Notion에 가설-결과 문서화",
      "주 2회 실험 결과 리뷰 미팅",
      "GitHub PR로 코드 품질 관리",
    ],
    growth: "가설을 세우고 검증하는 과학적 사고방식을 체득했습니다. 감보다 데이터, 직관보다 실험이 더 나은 결과를 만듭니다.",
  },
  {
    id: "ocr",
    title: "다국어 메뉴판 번역 시스템",
    problem: "💡 가설: 이미지 전처리가 OCR 정확도를 80% 이상으로 끌어올릴 것",
    description: "**문제 발견** → 외국인의 메뉴 이해 어려움 | **솔루션** → OCR + 번역 API | **결과** → 정확도 89%, 응답 1.2초",
    fullDescription: "**[문제 정의]** 외국인 관광객 10명 인터뷰 결과, 7명이 한국 식당 메뉴 이해에 어려움 호소. 기존 번역 앱은 메뉴판 인식률이 낮음.\n\n**[가설]** 조명/각도 보정 전처리를 적용하면 OCR 정확도 80% 이상 달성 가능.\n\n**[솔루션]** OpenCV 전처리(이진화, 노이즈 제거) + Tesseract OCR + Google Translate API.\n\n**[결과 검증]** OCR 정확도 89%(가설 초과), 5개 언어 지원, 평균 응답 시간 1.2초. 외국인 유학생 10명 사용성 테스트에서 만족도 4.2/5.",
    tags: [
      { label: "사용자중심", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "MVP", color: "bg-purple-500/20 text-purple-400" },
      { label: "팀협업", color: "bg-pink-500/20 text-pink-400" },
    ],
    github: "https://github.com/username/menu-translator",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop",
    period: "2022.03 - 2022.06",
    team: "팀 (4인)",
    myRole: "사용자 인터뷰, OCR 파이프라인 설계, 전처리 최적화",
    tools: ["Python", "Tesseract OCR", "OpenCV", "Google Translate API", "Flask"],
    progress: 100,
    timeline: [
      { label: "사용자 인터뷰 & 페인포인트 정의", completed: true },
      { label: "가설 수립 & 성공 지표 정의", completed: true },
      { label: "전처리 실험 (A/B 비교)", completed: true },
      { label: "MVP 개발 & 배포", completed: true },
      { label: "사용성 테스트 & 피드백 반영", completed: true },
    ],
    metrics: [
      { label: "가설 검증", value: "✓ 성공", description: "목표 80% → 실제 89%" },
      { label: "사용자 만족도", value: "4.2/5", description: "10명 테스트 결과" },
      { label: "응답 시간", value: "1.2초", description: "실시간 사용 가능" },
    ],
    decisions: [
      { question: "왜 사용자 인터뷰부터 시작했나요?", answer: "실제 문제인지 확인 없이 개발하면 쓸모없는 제품이 됩니다. 인터뷰로 진짜 니즈 확인 후 착수." },
      { question: "왜 전처리에 집중했나요?", answer: "실험 결과, 모델 변경보다 전처리가 정확도에 3배 더 큰 영향. 가성비 높은 개선점이었습니다." },
    ],
    collaboration: [
      "Trello로 스프린트 관리",
      "사용자 피드백 → 백로그 반영",
      "데모 영상 제작 및 발표",
    ],
    growth: "기술적으로 완벽하지 않아도 문제를 해결할 수 있습니다. 빠른 피드백 루프가 완성도를 높이는 가장 좋은 방법입니다.",
  },
  {
    id: "drowsy-detection",
    title: "실시간 졸음 운전 감지 시스템",
    problem: "💡 가설: 2초 이상 눈 감김 감지로 졸음 경고 시 사고 예방 가능",
    description: "**문제 발견** → 졸음 운전 사망률 증가 | **솔루션** → YOLOv4 실시간 감지 | **결과** → 정확도 96.3%, 45FPS",
    fullDescription: "**[문제 정의]** 졸음 운전 교통사고 연간 2,000건+, 사망률 일반 사고 대비 3배. 조기 경고 시스템 필요.\n\n**[가설]** 문헌 연구 기반, 2초 이상 눈 감김 시 졸음 상태로 판단 가능. 실시간 감지 시 사고 예방 효과.\n\n**[솔루션]** YOLOv4 커스텀 학습(눈 열림/감김 분류), GPU 가속으로 45FPS 실시간 처리.\n\n**[결과 검증]** 감지 정확도 96.3%, 경고 지연 0.5초 이내, 시뮬레이션에서 졸음 상태 100% 감지.",
    tags: [
      { label: "실시간", color: "bg-green-500/20 text-green-400" },
      { label: "트레이드오프", color: "bg-blue-500/20 text-blue-400" },
      { label: "Safety", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    github: "https://github.com/username/drowsy-detection",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    period: "2021.09 - 2021.12",
    team: "팀 (3인)",
    myRole: "문헌 조사, 가설 설계, 모델 학습 및 최적화",
    tools: ["Python", "YOLOv4", "Darknet", "OpenCV", "CUDA"],
    progress: 100,
    timeline: [
      { label: "문헌 조사 & 가설 수립 (2초 기준)", completed: true },
      { label: "데이터 수집 & 라벨링", completed: true },
      { label: "정확도 vs 속도 트레이드오프 실험", completed: true },
      { label: "최적 균형점 도출 & 구현", completed: true },
      { label: "시뮬레이션 테스트 & 데모", completed: true },
    ],
    metrics: [
      { label: "가설 검증", value: "✓ 성공", description: "2초 기준 졸음 감지 유효" },
      { label: "정확도", value: "96.3%", description: "실시간 처리 조건에서" },
      { label: "처리 속도", value: "45 FPS", description: "실시간 요구사항 충족" },
    ],
    decisions: [
      { question: "왜 2초를 기준으로 했나요?", answer: "문헌 연구 결과 2초 이상 눈 감김 시 사고 위험 급증. 근거 기반 의사결정." },
      { question: "정확도 vs 속도, 어떻게 선택했나요?", answer: "안전 시스템이므로 recall 우선. 오탐보다 미탐이 더 위험하기 때문." },
    ],
    collaboration: [
      "역할 분담: 데이터/모델/통합 각 1명",
      "주 3회 진척 공유 미팅",
      "시연 영상 제작 및 최종 발표",
    ],
    growth: "트레이드오프에서 '왜 이 선택인가'를 설명할 수 있어야 합니다. 엔지니어링은 정답이 아닌 최적을 찾는 과정입니다.",
  },
  {
    id: "socar",
    title: "공유차량 파손 자동 감지 시스템",
    problem: "💡 가설: Focal Loss 적용으로 클래스 불균형 문제를 해결하면 mIoU 0.7 이상 달성 가능",
    description: "**문제 발견** → 수동 파손 확인 비효율 | **솔루션** → DeepLab V3+ 픽셀 분할 | **결과** → mIoU 0.72, 스크래치 IoU 0.81",
    fullDescription: "**[문제 정의]** 공유차량 반납 시 파손 수동 확인에 평균 5분 소요, 인력 비용 및 분쟁 발생.\n\n**[가설]** 클래스 불균형이 심한 파손 데이터에 Focal Loss를 적용하면 소수 클래스 성능 개선 가능.\n\n**[솔루션]** DeepLab V3+ Semantic Segmentation, Focal Loss + 클래스 가중치, 다양한 Augmentation.\n\n**[결과 검증]** mIoU 0.72 달성(가설 충족), 스크래치 IoU 0.81로 가장 빈번한 파손 유형에서 높은 성능.",
    tags: [
      { label: "클래스불균형", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "팀협업", color: "bg-purple-500/20 text-purple-400" },
    ],
    github: "https://github.com/username/car-damage-detection",
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=500&fit=crop",
    period: "2022.01 - 2022.02",
    team: "팀 (5인)",
    myRole: "가설 설계, DeepLab V3+ 구현, Loss 함수 실험",
    tools: ["Python", "PyTorch", "DeepLab V3+", "OpenCV", "Albumentations"],
    progress: 100,
    timeline: [
      { label: "EDA & 클래스 불균형 분석", completed: true },
      { label: "가설 수립 (Focal Loss)", completed: true },
      { label: "베이스라인 vs Focal Loss A/B 실험", completed: true },
      { label: "Augmentation 추가 실험", completed: true },
    ],
    metrics: [
      { label: "가설 검증", value: "✓ 성공", description: "목표 0.7 → 실제 0.72" },
      { label: "스크래치 IoU", value: "0.81", description: "핵심 파손 유형 고성능" },
      { label: "학습 시간", value: "8시간", description: "V100 GPU 기준" },
    ],
    decisions: [
      { question: "왜 Focal Loss에 집중했나요?", answer: "EDA 결과 클래스 불균형이 핵심 문제. 모델 변경보다 Loss 함수 실험이 가성비 높았습니다." },
      { question: "대규모 팀에서 어떻게 협업했나요?", answer: "Git Flow + 주 1회 실험 공유 미팅. 각자 가설을 검증하고 결과를 통합했습니다." },
    ],
    collaboration: [
      "Git Flow 브랜치 전략",
      "주 1회 실험 결과 공유 미팅",
      "코드 리뷰로 품질 관리",
    ],
    growth: "대규모 팀에서 '각자의 가설을 검증하고 통합'하는 협업 방식을 배웠습니다. 역할 분담과 문서화가 효율의 핵심입니다.",
  },
  {
    id: "musinsa",
    title: "패션 리뷰 감성분석 및 트렌드 예측",
    problem: "💡 가설: 데이터 증식으로 클래스 불균형 해결 시 분류 정확도 90% 이상 달성 가능",
    description: "**문제 발견** → 대량 리뷰 수동 분석 불가 | **솔루션** → KoBERT + 데이터 증식 | **결과** → 정확도 91.2%, 52,000건 분석",
    fullDescription: "**[문제 정의]** 시즌별 트렌드 파악을 위해 수만 건의 리뷰를 읽는 것은 비효율적. 자동화된 감성 분석 필요.\n\n**[가설]** 중립 리뷰 부족 문제를 Back-translation으로 해결하면 3클래스 분류 90% 이상 가능.\n\n**[솔루션]** KoBERT Fine-tuning, Back-translation + EDA로 중립 데이터 3배 증강.\n\n**[결과 검증]** 분류 정확도 91.2%(가설 초과), 52,000건 리뷰 분석, 시즌별 트렌드 인사이트 도출.",
    tags: [
      { label: "데이터품질", color: "bg-green-500/20 text-green-400" },
      { label: "NLP", color: "bg-blue-500/20 text-blue-400" },
      { label: "인사이트", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    github: "https://github.com/username/musinsa-sentiment",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    period: "2022.04 - 2022.06",
    team: "팀 (4인)",
    myRole: "가설 설계, 데이터 증식 실험, KoBERT Fine-tuning",
    tools: ["Python", "KoBERT", "PyTorch", "Pandas", "Hugging Face", "Matplotlib"],
    progress: 100,
    timeline: [
      { label: "EDA & 클래스 불균형 분석", completed: true },
      { label: "가설 수립 (데이터 증식)", completed: true },
      { label: "증식 전/후 A/B 실험", completed: true },
      { label: "최종 모델 학습 & 인사이트 도출", completed: true },
    ],
    metrics: [
      { label: "가설 검증", value: "✓ 성공", description: "목표 90% → 실제 91.2%" },
      { label: "데이터 규모", value: "52,000건", description: "6개월치 리뷰 분석" },
      { label: "증강 효과", value: "3배↑", description: "중립 클래스 데이터" },
    ],
    decisions: [
      { question: "왜 데이터 증식부터 했나요?", answer: "EDA 결과 모델보다 데이터가 문제. 'Garbage In, Garbage Out' 원칙 적용." },
      { question: "인사이트는 어떻게 도출했나요?", answer: "감성 레이블 + 시간 축 분석으로 시즌별 긍정/부정 트렌드 시각화." },
    ],
    collaboration: [
      "역할 분담: 크롤링/전처리/모델/시각화",
      "주간 Zoom 미팅",
      "인사이트 보고서 작성 (15페이지)",
    ],
    growth: "데이터 품질이 모델 성능을 결정합니다. 전처리에 투자한 시간이 가장 높은 ROI를 가져왔습니다.",
  },
];

// Helper function to render text with bold keywords
const renderDescriptionWithHighlights = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const keyword = part.slice(2, -2);
      return (
        <span key={index} className="font-semibold text-primary">
          {keyword}
        </span>
      );
    }
    return part;
  });
};

const ProjectCard = ({ 
  project, 
  index, 
  onClick 
}: { 
  project: Project; 
  index: number; 
  onClick: () => void;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
      style={{ 
        transitionDelay: `${index * 80}ms`,
        transitionProperty: "all"
      }}
    >
      {/* Image */}
      <div className="aspect-[2/1] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Tags + Metric Badge */}
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag.label}
              className={`px-2 py-0.5 text-[10px] font-medium rounded ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
          {project.metrics && project.metrics.length > 0 && (
            <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-primary/20 text-primary">
              {project.metrics[0].label}: {project.metrics[0].value}
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-sm font-semibold mb-1.5 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>
        
        {/* Problem - 핵심 한 줄 */}
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {project.problem}
        </p>
        
        {/* Footer: Period + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <span className="text-[10px] text-muted-foreground">{project.period}</span>
          <span className="text-[10px] text-primary font-medium flex items-center gap-1 group-hover:gap-1.5 transition-all">
            자세히
            <ExternalLink className="w-2.5 h-2.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="projects" className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            주요 <span className="text-gradient">프로젝트</span>
          </h2>
          <p className="text-muted-foreground">
            실제로 진행했던 프로젝트들을 소개합니다
          </p>
        </div>

        {/* All Projects - 3 column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden bg-card border-border p-0">
          {selectedProject && (
            <div className="flex flex-col max-h-[85vh]">
              <VisuallyHidden>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </VisuallyHidden>
              
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Header Section */}
                <div className="p-6 pb-4 border-b border-border/50">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`px-2 py-0.5 text-xs font-medium rounded ${tag.color}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-sm text-muted-foreground">{selectedProject.problem}</p>
                </div>

                {/* Metrics */}
                {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                  <div className="px-6 py-4 bg-muted/30 border-b border-border/50">
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-xl font-bold text-primary">{metric.value}</p>
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main Content */}
                <div className="p-6 space-y-6">
                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedProject.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedProject.team}</span>
                    </div>
                  </div>

                  {/* My Role */}
                  {selectedProject.myRole && (
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">역할</h4>
                      <p className="text-sm">{selectedProject.myRole}</p>
                    </div>
                  )}

                  {/* Tools */}
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">기술 스택</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tools.map((tool) => (
                        <span key={tool} className="px-2 py-1 text-xs bg-muted rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">프로젝트 설명</h4>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {renderDescriptionWithHighlights(selectedProject.fullDescription)}
                    </p>
                  </div>

                  {/* Design Decisions */}
                  {selectedProject.decisions && selectedProject.decisions.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5" />
                        설계 결정
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.decisions.map((decision, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-muted/50">
                            <p className="text-xs font-medium text-primary mb-1">{decision.question}</p>
                            <p className="text-xs text-foreground/80">{decision.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Growth */}
                  {selectedProject.growth && (
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        성장 포인트
                      </h4>
                      <p className="text-sm text-foreground/90 leading-relaxed pl-3 border-l-2 border-primary/50">
                        {selectedProject.growth}
                      </p>
                    </div>
                  )}

                  {/* Timeline - Compact */}
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">타임라인</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.timeline.map((step, index) => (
                        <span 
                          key={index} 
                          className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded ${
                            step.completed 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle2 className="w-3 h-3" />
                          ) : (
                            <Circle className="w-3 h-3" />
                          )}
                          {step.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer - Links */}
                <div className="px-6 py-4 border-t border-border/50 flex flex-wrap gap-2">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      데모
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded-md hover:bg-muted/80 transition-colors"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                  {selectedProject.docs && (
                    <a
                      href={selectedProject.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded-md hover:bg-muted/80 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      문서
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
