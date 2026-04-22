import { Mail, Phone, MapPin, FileText, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-24 px-6 lg:px-12 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="section-title text-gradient opacity-0 animate-fade-in">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          새로운 기회와 협업에 항상 열려 있습니다. 편하게 연락주세요!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="project-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Email</h4>
                <a href="mailto:ysomi010212@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  ysomi010212@gmail.com
                </a>
              </div>
            </div>

            <div className="project-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Phone</h4>
                <p className="text-foreground">010-6383-5014</p>
              </div>
            </div>

            <div className="project-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Address</h4>
                <p className="text-foreground">경기도 남양주시</p>
              </div>
            </div>
          </div>

          <div className="project-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-display font-bold mb-6">더 알아보기</h3>
            <div className="space-y-4">
              <Button asChild variant="outline" className="w-full justify-start">
                <a
                  href="https://www.notion.so/2744de04b5e847c181a60dfc1e2f9906"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-3 w-5 h-5" />
                  자기소개서
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a
                  href="https://github.com/YoonSoM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-3 w-5 h-5" />
                  GitHub 프로필
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a
                  href="https://www.notion.so/it-s-my-Notion-496f12b2c46c4a7386dbbc0e5a6944a0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-3 w-5 h-5" />
                  Notion 개발 일지
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <p>© 2025 윤소미. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
