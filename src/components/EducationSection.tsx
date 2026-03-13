import ScrollReveal from "./ScrollReveal";
import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="section-container">
    <ScrollReveal>
      <h2 className="section-title">Education</h2>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="card-brutal p-6 md:p-8 flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 shrink-0">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold">Bachelor of Technology (B.Tech)</h3>
          <p className="text-muted-foreground">Computer Science — Currently in 3rd Year</p>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default EducationSection;
