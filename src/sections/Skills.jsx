import data from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 animate-fadeIn opacity-0">
          <span className="dark:text-primary text-primary-light font-mono text-xl">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold dark:text-textLight text-textLight-light">
            Technical Skills
          </h2>
          <div className="h-px dark:bg-textDim/20 bg-textDim-light/20 flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group dark:bg-gradient-to-br dark:from-secondary dark:to-secondary/80 bg-gradient-to-br from-secondary-light to-blue-50 p-6 rounded-xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 delay-100 border dark:border-primary/10 border-primary-light/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg dark:bg-primary/10 bg-primary-light/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">🧠</span>
              </div>
              <h3 className="text-lg font-bold dark:text-textLight text-textLight-light">
                {data.labels.skills.coreCS}
              </h3>
            </div>
            <ul className="space-y-3">
              {data.skills.coreCS.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start dark:text-textDim text-textDim-light font-mono text-sm hover:text-primary-light dark:hover:text-primary transition-colors duration-200"
                >
                  <span className="dark:text-primary text-primary-light mr-3 mt-0.5 group-hover:animate-pulse">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="group dark:bg-gradient-to-br dark:from-secondary dark:to-secondary/80 bg-gradient-to-br from-secondary-light to-blue-50 p-6 rounded-xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 delay-200 border dark:border-primary/10 border-primary-light/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg dark:bg-primary/10 bg-primary-light/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold dark:text-textLight text-textLight-light">
                {data.labels.skills.frontend}
              </h3>
            </div>
            <ul className="space-y-3">
              {data.skills.frontend.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start dark:text-textDim text-textDim-light font-mono text-sm hover:text-primary-light dark:hover:text-primary transition-colors duration-200"
                >
                  <span className="dark:text-primary text-primary-light mr-3 mt-0.5 group-hover:animate-pulse">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="group dark:bg-gradient-to-br dark:from-secondary dark:to-secondary/80 bg-gradient-to-br from-secondary-light to-blue-50 p-6 rounded-xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 delay-300 border dark:border-primary/10 border-primary-light/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg dark:bg-primary/10 bg-primary-light/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">⚙️</span>
              </div>
              <h3 className="text-lg font-bold dark:text-textLight text-textLight-light">
                {data.labels.skills.backend}
              </h3>
            </div>
            <ul className="space-y-3">
              {data.skills.backend.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start dark:text-textDim text-textDim-light font-mono text-sm hover:text-primary-light dark:hover:text-primary transition-colors duration-200"
                >
                  <span className="dark:text-primary text-primary-light mr-3 mt-0.5 group-hover:animate-pulse">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="group dark:bg-gradient-to-br dark:from-secondary dark:to-secondary/80 bg-gradient-to-br from-secondary-light to-blue-50 p-6 rounded-xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 delay-400 border dark:border-primary/10 border-primary-light/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg dark:bg-primary/10 bg-primary-light/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="text-lg font-bold dark:text-textLight text-textLight-light">
                {data.labels.skills.aiTools}
              </h3>
            </div>
            <ul className="space-y-3">
              {data.skills.aiTools.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start dark:text-textDim text-textDim-light font-mono text-sm hover:text-primary-light dark:hover:text-primary transition-colors duration-200"
                >
                  <span className="dark:text-primary text-primary-light mr-3 mt-0.5 group-hover:animate-pulse">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
