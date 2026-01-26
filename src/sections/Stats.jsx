import data from "../data";

export default function Stats() {
  const ghUser = data.socials.github?.split("/").filter(Boolean).pop();
  const lcUser = data.socials.leetcode?.split("/").filter(Boolean).pop();

  if (!ghUser && !lcUser) return null;

  return (
    <section className="py-20 px-6 dark:bg-background bg-background-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold font-mono text-center dark:text-textLight text-textLight-light mb-12 animate-fadeIn opacity-0">
          <span className="text-primary">02.</span> Stats
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-6xl mx-auto">
          {ghUser && (
            <div className="hover:-translate-y-2 hover:scale-105 transition-all duration-300 w-full aspect-[1.5/1] overflow-hidden rounded-lg animate-fadeInUp opacity-0 delay-100">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${ghUser}&show_icons=true&theme=radical&bg_color=1a1a1a&title_color=ffffff&text_color=ffffff&icon_color=00ff00&border_color=333333&hide_border=false`}
                alt="GitHub Stats"
                className="w-full h-full object-fill"
              />
            </div>
          )}
          {lcUser && (
            <div className="hover:-translate-y-2 hover:scale-105 transition-all duration-300 w-full aspect-[1.5/1] overflow-hidden rounded-lg animate-fadeInUp opacity-0 delay-200">
              <img
                src={`https://leetcard.jacoblin.cool/${lcUser}?theme=dark&font=Karma`}
                alt="LeetCode Stats"
                className="w-full h-full object-fill"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
