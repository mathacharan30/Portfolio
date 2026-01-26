import data from "../data";
import Icon from "../components/Icon";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-xl">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-textLight">
            Some Things I've Built
          </h2>
          <div className="h-px bg-surface flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-lg p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 group flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-primary">
                  <Icon name="file" size={40} />
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="text-textDim hover:text-primary transition-colors"
                    >
                      <Icon name="github" size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Site"
                      className="text-textDim hover:text-primary transition-colors"
                    >
                      <Icon name="external" size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-textLight mb-2 group-hover:text-primary transition-colors">
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.title}
                </a>
              </h3>

              <p className="text-textDim mb-6 leading-relaxed text-sm flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-surface">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-textDim opacity-80 mr-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
