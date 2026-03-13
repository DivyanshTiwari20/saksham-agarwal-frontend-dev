import ScrollReveal from "./ScrollReveal";
import { Smile } from "lucide-react";

const CTASection = () => (
  <section className="section-container">
    <ScrollReveal>
      <div className="card-brutal p-8 md:p-12 text-center border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
        <Heart className="w-8 h-8 text-accent mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
          I want to build great products and make my parents proud.
        </h2>
        <p className="text-muted-foreground mb-6">Currently open for opportunities.</p>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300"
        >
          Hire Me
        </button>
      </div>
    </ScrollReveal>
  </section>
);

export default CTASection;
