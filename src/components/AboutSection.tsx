import ScrollReveal from "./ScrollReveal";
import { User } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-container">
    <ScrollReveal>
      <div className="flex items-center gap-3 mb-2">
        <User className="w-6 h-6 text-primary" />
        <h2 className="section-title mb-0">About Me</h2>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="card-brutal p-6 md:p-8 mt-6">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          I am a Computer Science student in 3rd year B.Tech. I enjoy building real web applications and solving problems. I have completed an online internship and participated in multiple hackathons including Smart India Hackathon. I also take leadership roles as a class coordinator and student guide. My goal is to build excellent products, get hired, and make my family proud.
        </p>
      </div>
    </ScrollReveal>
  </section>
);

export default AboutSection;
