import { useState } from "react";
import data from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.siteMeta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 text-center dark:bg-background bg-background-light transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <span className="dark:text-primary text-primary-light font-mono text-lg block mb-4 animate-fadeIn opacity-0">
          05. What's Next?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold dark:text-textLight text-textLight-light mb-6 animate-fadeInUp opacity-0 delay-100">
          Get In Touch
        </h2>
        <p className="dark:text-textDim text-textDim-light text-lg leading-relaxed mb-12 animate-fadeInUp opacity-0 delay-200">
          I am currently looking for new opportunities. Whether you have a
          question or just want to say hi, I will try my best to get back to
          you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp opacity-0 delay-300">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.siteMeta.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border dark:border-primary border-primary-light dark:text-primary text-primary-light rounded font-mono dark:hover:bg-primary/10 hover:bg-primary-light/10 transition-all duration-300 hover:scale-105 inline-block text-lg"
          >
            Say Hello
          </a>
          <button
            onClick={handleCopyEmail}
            className="px-8 py-4 border dark:border-primary border-primary-light dark:text-primary text-primary-light rounded font-mono dark:hover:bg-primary/10 hover:bg-primary-light/10 transition-all duration-300 hover:scale-105 text-lg"
          >
            {copied ? "✓ Copied!" : "Copy Email"}
          </button>
        </div>
      </div>
    </section>
  );
}
