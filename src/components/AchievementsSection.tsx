import ScrollReveal from "./ScrollReveal";
import { Award, Trophy, Users, BookOpen, FileCheck } from "lucide-react";

const items = [
  { text: "Participant in Smart India Hackathon", icon: Trophy },
  { text: "Runner-up in a 24-hour live hackathon", icon: Award },
  { text: "Class Coordinator", icon: Users },
  { text: "Student Guide", icon: BookOpen },
  { text: "Multiple coding certificates", icon: FileCheck },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-container">
    <ScrollReveal>
      <h2 className="section-title">Achievements & Leadership</h2>
    </ScrollReveal>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="card-brutal p-5 flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-accent/10 shrink-0">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  </section>
);

export default AchievementsSection;
