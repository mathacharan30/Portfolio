import { useState, useEffect } from "react";
import data from "../data";

export default function Hero() {
  const { name, titleSuffix, hero, resumePath } = data.siteMeta;
  const [displayedName, setDisplayedName] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= name.length) {
        setDisplayedName(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100); // 100ms per character

    return () => clearInterval(typingInterval);
  }, [name]);

  // Split name for mobile view: "Matha" on first line, rest on second
  const formatNameForMobile = (text, showPeriod) => {
    const parts = text.split(" ");
    if (parts.length >= 2) {
      return (
        <>
          <span className="block md:inline">{parts[0]}</span>{" "}
          <span className="block md:inline">
            {parts.slice(1).join(" ")}
            {showPeriod && "."}
          </span>
        </>
      );
    }
    return text + (showPeriod ? "." : "");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 dark:bg-background bg-background-light transition-colors duration-300"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="space-y-5">
          <span className="text-primary font-mono text-lg block mb-4 animate-fadeIn opacity-0">
            Hi, my name is
          </span>

          <h1 className="text-5xl md:text-7xl font-bold dark:text-textLight text-textLight-light tracking-tight mb-2 animate-fadeInUp opacity-0 delay-100">
            {formatNameForMobile(displayedName, isTypingComplete)}
            {!isTypingComplete && (
              <span className="animate-pulse text-primary">|</span>
            )}
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold dark:text-textDim text-textDim-light mb-6 animate-fadeInUp opacity-0 delay-200">
            {titleSuffix.replace("— ", "")}
          </h2>

          <p className="max-w-2xl text-lg md:text-xl dark:text-textDim text-textDim-light leading-relaxed mb-10 animate-fadeInUp opacity-0 delay-300">
            {hero.oneLiner} {hero.subtext}
          </p>

          <div className="flex flex-wrap gap-4 animate-fadeInUp opacity-0 delay-400">
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-primary text-primary rounded font-mono hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              Check out my work
            </a>
            <a
              href={resumePath}
              className="px-8 py-4 border-2 dark:border-textDim border-textDim-light dark:text-textDim text-textDim-light rounded font-mono dark:hover:border-textLight hover:border-textLight-light dark:hover:text-textLight hover:text-textLight-light transition-all duration-300 hover:scale-105"
              download
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
