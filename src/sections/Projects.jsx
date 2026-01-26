import data from "../data";
import Icon from "../components/Icon";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 dark:bg-background bg-background-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 animate-fadeIn opacity-0">
          <span className="dark:text-primary text-primary-light font-mono text-xl">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold dark:text-textLight text-textLight-light">
            Some Things I've Built
          </h2>
          <div className="h-px dark:bg-textDim/20 bg-textDim-light/20 flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, idx) => (
            <div
              key={idx}
              className="dark:bg-secondary bg-secondary-light rounded-lg p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 group flex flex-col h-full animate-fadeInUp opacity-0"
              style={{animationDelay: `${(idx + 1) * 100}ms`}}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="dark:text-primary text-primary-light">
                  <Icon name="file" size={40} />
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="dark:text-textDim text-textDim-light dark:hover:text-primary hover:text-primary-light transition-colors"
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
                      className="dark:text-textDim text-textDim-light dark:hover:text-primary hover:text-primary-light transition-colors"
                    >
                      <Icon name="external" size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold dark:text-textLight text-textLight-light mb-2 dark:group-hover:text-primary group-hover:text-primary-light transition-colors">
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.title}
                </a>
              </h3>

              <p className="dark:text-textDim text-textDim-light mb-6 leading-relaxed text-sm flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t dark:border-textDim/20 border-textDim-light/20">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs dark:text-textDim text-textDim-light opacity-80 mr-2"
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
