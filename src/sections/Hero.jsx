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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="space-y-5">
          <span className="text-primary font-mono text-lg block mb-4">
            Hi, my name is
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-textLight tracking-tight mb-2">
            {displayedName}
            {!isTypingComplete && (
              <span className="animate-pulse text-primary">|</span>
            )}
            {isTypingComplete && "."}
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold text-textDim mb-6">
            {titleSuffix.replace("— ", "")}
          </h2>

          <p className="max-w-2xl text-lg md:text-xl text-textDim leading-relaxed mb-10">
            {hero.oneLiner} {hero.subtext}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-primary text-primary rounded font-mono hover:bg-primary/10 transition-colors"
            >
              Check out my work
            </a>
            <a
              href={resumePath}
              className="px-8 py-4 border-2 border-textDim text-textDim rounded font-mono hover:border-textLight hover:text-textLight transition-colors"
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
