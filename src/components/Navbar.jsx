import { useState, useEffect } from "react";
import data from "../data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-4 md:px-6 pt-4 md:pt-6">
        <div className={`max-w-5xl mx-auto transition-all duration-300 ${scrolled ? "bg-secondary/40 dark:bg-secondary/40 backdrop-blur-lg shadow-2xl border border-primary/10" : "bg-secondary/20 dark:bg-secondary/20 backdrop-blur-md border border-primary/5"} rounded-full px-4 md:px-8 h-14 md:h-16 flex items-center justify-between`}>
          <a
            href="#home"
            className="dark:text-primary text-primary-light font-mono text-base md:text-lg font-semibold tracking-wide dark:hover:text-primary/80 hover:text-primary-light/80 transition-colors"
          >
            &lt;{data.siteMeta.name} /&gt;
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {data.nav.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="dark:text-textDim text-textDim-light dark:hover:text-primary hover:text-primary-light font-mono text-sm group transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden dark:text-primary text-primary-light focus:outline-none z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-7 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 dark:bg-primary bg-primary-light transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`w-full h-0.5 dark:bg-primary bg-primary-light transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`w-full h-0.5 dark:bg-primary bg-primary-light transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/70 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 w-[75vw] max-w-sm bg-secondary/95 dark:bg-secondary/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 border-l border-primary/10 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {data.nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="dark:text-textDim text-textDim-light dark:hover:text-primary hover:text-primary-light font-mono text-lg flex flex-col items-center gap-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <div className="pt-4">
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}
