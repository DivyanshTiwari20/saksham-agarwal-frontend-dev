import ScrollReveal from "./ScrollReveal";
import { Code, Database, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code,
    color: "primary",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend Basics",
    icon: Database,
    color: "secondary",
    skills: ["Basic Databases"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "accent",
    skills: ["Git", "Linux", "AI Tools"],
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 border-primary/30 text-primary",
  secondary: "bg-secondary/10 border-secondary/30 text-secondary",
  accent: "bg-accent/10 border-accent/30 text-accent",
};

const iconColorMap: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <ScrollReveal>
      <h2 className="section-title">Skills</h2>
    </ScrollReveal>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((cat, i) => {
        const Icon = cat.icon;
        return (
          <ScrollReveal key={cat.title} delay={i * 0.1}>
            <div className="card-brutal p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <Icon className={`w-6 h-6 ${iconColorMap[cat.color]}`} />
                <h3 className="text-lg font-heading font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className={`px-3 py-1.5 rounded-md text-sm font-medium border ${colorMap[cat.color]}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  </section>
);

export default SkillsSection;
