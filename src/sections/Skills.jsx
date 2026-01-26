import data from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-xl">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-textLight">
            Technical Skills
          </h2>
          <div className="h-px bg-surface flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondary p-6 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-bold text-textLight mb-6">
              Frontend Development
            </h3>
            <ul className="space-y-2">
              {data.skills.frontend.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center text-textDim font-mono text-sm before:content-['▹'] before:text-primary before:mr-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary p-6 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-bold text-textLight mb-6">
              Backend Development
            </h3>
            <ul className="space-y-2">
              {data.skills.backend.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center text-textDim font-mono text-sm before:content-['▹'] before:text-primary before:mr-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary p-6 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-bold text-textLight mb-6">
              Problem Solving
            </h3>
            <ul className="space-y-2">
              {data.skills.problemSolving.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center text-textDim font-mono text-sm before:content-['▹'] before:text-primary before:mr-2"
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
