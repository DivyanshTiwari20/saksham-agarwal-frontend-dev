import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = ["About", "Skills", "Projects", "Education", "Experience", "Achievements", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-2xl font-heading font-bold text-gradient">
          SA
        </button>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left transition-colors"
            >
              {l}
            </button>
          ))}
          <ThemeToggle />
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 transition-transform duration-300"
          >
            Hire Me
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b-2 border-border animate-fade-up">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-1">
                {l}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm text-center"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
