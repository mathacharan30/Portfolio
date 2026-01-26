import data from "../data";

export default function Work() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-xl">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-textLight">
            Where I've Worked
          </h2>
          <div className="h-px bg-surface flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="space-y-12 border-l-2 border-surface ml-3 pl-8 md:pl-12">
          {data.experience.map((job, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary"></span>

              <div className="mb-2">
                <h3 className="text-xl font-bold text-textLight inline-block mr-2">
                  {job.title}
                </h3>
                <span className="text-primary text-lg">@ {job.company}</span>
              </div>
              <p className="font-mono text-sm text-textDim mb-4">{job.date}</p>

              <ul className="space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start text-textDim relative pl-6 before:content-['▹'] before:text-primary before:absolute before:left-0"
                  >
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
