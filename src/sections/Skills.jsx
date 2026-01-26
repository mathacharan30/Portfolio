import data from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 dark:bg-background bg-background-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 animate-fadeIn opacity-0">
          <span className="text-primary font-mono text-xl">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold dark:text-textLight text-textLight-light">
            Technical Skills
          </h2>
          <div className="h-px dark:bg-textDim/20 bg-textDim-light/20 flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="dark:bg-secondary bg-secondary-light p-6 rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fadeInUp opacity-0 delay-100">
            <h3 className="text-xl font-bold dark:text-textLight text-textLight-light mb-6">
              Frontend Development
            </h3>
            <ul className="space-y-2">
              {data.skills.frontend.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center dark:text-textDim text-textDim-light font-mono text-sm before:content-['▹'] before:text-primary before:mr-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="dark:bg-secondary bg-secondary-light p-6 rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fadeInUp opacity-0 delay-200">
            <h3 className="text-xl font-bold dark:text-textLight text-textLight-light mb-6">
              Backend Development
            </h3>
            <ul className="space-y-2">
              {data.skills.backend.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center dark:text-textDim text-textDim-light font-mono text-sm before:content-['▹'] before:text-primary before:mr-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="dark:bg-secondary bg-secondary-light p-6 rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fadeInUp opacity-0 delay-300">
            <h3 className="text-xl font-bold dark:text-textLight text-textLight-light mb-6">
              Problem Solving
            </h3>
            <ul className="space-y-2">
              {data.skills.problemSolving.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center dark:text-textDim text-textDim-light font-mono text-sm before:content-['▹'] before:text-primary before:mr-2"
                >
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
