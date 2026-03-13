import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    name: "Screenshot to Editable UI",
    description: "A web app that converts screenshots into directly editable UI/UX designs.",
    tech: ["React", "JavaScript", "AI Processing"],
    link: "https://easypeasy-khaki.vercel.app/",
    highlight: "Practical AI productivity tool",
  },
  {
    name: "Web Linux Terminal",
    description: "A browser-based Linux terminal that simulates a Linux operating system on the web.",
    tech: ["JavaScript", "Linux Simulation"],
    link: "https://linux-teminal.vercel.app/",
    highlight: "Interactive system simulation",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-container">
    <ScrollReveal>
      <h2 className="section-title">Projects</h2>
    </ScrollReveal>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <ScrollReveal key={p.name} delay={i * 0.12}>
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-brutal p-6 md:p-8 block h-full group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </div>
            <p className="text-muted-foreground mb-4">{p.description}</p>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium">{p.highlight}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>
          </a>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
