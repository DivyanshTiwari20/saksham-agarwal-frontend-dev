import ScrollReveal from "./ScrollReveal";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="section-container">
    <ScrollReveal>
      <h2 className="section-title">Experience</h2>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <div className="card-brutal p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-secondary/10 shrink-0">
            <Briefcase className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold">Frontend Developer Intern</h3>
            <p className="text-sm text-primary font-medium">Online Internship • 1 Month</p>
            <p className="text-muted-foreground mt-2">
              Worked on real web development tasks and improved practical coding skills.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default ExperienceSection;
