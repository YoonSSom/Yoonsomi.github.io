import profileImage from "@/assets/profile.jpg";

const skills = {
  backend: ["Java", "Python", "JavaScript (Node.js)", "C#"],
  frontend: ["HTML", "CSS", "JavaScript", "반응형 디자인"],
};

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-gradient opacity-0 animate-fade-in">
          사용자 중심의 개발자
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          실제 사용자에게 긍정적인 영향을 미칠 수 있는 웹 기술과 프레임워크를 활용하여
          사용자 친화적이고 효율적인 애플리케이션을 개발하는 데 주력하는 것이 목표입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <div className="project-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-6 mb-8">
              <img
                src={profileImage}
                alt="윤소미"
                className="w-24 h-24 rounded-full object-cover border-2 border-primary/50"
              />
              <div>
                <h3 className="text-2xl font-display font-bold">윤소미</h3>
                <p className="text-muted-foreground">2001.02.12</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-primary mb-3">학력</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">배화여자대학교 비서행정</p>
                    <p className="text-muted-foreground">(2020 ~ 2022)</p>
                  </div>
                  <div>
                    <p className="font-medium">서울사이버대학교 컴퓨터공학</p>
                    <p className="text-muted-foreground">(2023 ~ 2025)</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-primary mb-3">경력</h4>
                <p className="text-sm">알파코 부트캠프 2기 수료 (2022)</p>
                <p className="text-sm text-muted-foreground">웹사이트 구축 및 운영</p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-primary mb-3">자격증</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">빅데이터전문가</span>
                  <span className="skill-tag">코딩지도사 1급</span>
                  <span className="skill-tag">ITQ (한글, 엑셀)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div className="project-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h4 className="text-sm uppercase tracking-wider text-primary mb-4">Backend Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h4 className="text-sm uppercase tracking-wider text-primary mb-4">Frontend Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
              <h4 className="text-sm uppercase tracking-wider text-accent mb-4">How I Work</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                부족할 수 있지만 부족한 것을 유지하지 않는 사람이 되고 싶어 많은 노력을 하였습니다.
                이미 지난 과거를 바꿀 수 없다면, 보다 더 나은 미래를 만들면 된다고 생각합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
