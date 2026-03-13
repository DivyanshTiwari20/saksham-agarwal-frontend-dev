import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-texture overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Frontend Developer • Open to Work
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Saksham Agarwal</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Frontend Developer from Lucknow building modern web apps
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
            I know HTML, CSS, JavaScript and React. Currently learning backend and databases to become a Full-Stack Developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:scale-105 transition-transform duration-300 shadow-card"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3 rounded-lg border-2 border-border bg-card text-foreground font-semibold text-base hover:scale-105 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" /> Hire Me
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
