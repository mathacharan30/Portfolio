import data from "../data";

export default function Stats() {
  const ghUser = data.socials.github?.split("/").filter(Boolean).pop();
  const lcUser = data.socials.leetcode?.split("/").filter(Boolean).pop();

  if (!ghUser && !lcUser) return null;

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 animate-fadeIn opacity-0">
          <span className="dark:text-primary text-primary-light font-mono text-xl">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold dark:text-textLight text-textLight-light">
            Stats
          </h2>
          <div className="h-px dark:bg-textDim/20 bg-textDim-light/20 flex-grow max-w-xs ml-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {ghUser && (
            <>
              <div className="hover:-translate-y-2 hover:scale-105 transition-all duration-300 w-full overflow-hidden rounded-lg animate-fadeInUp opacity-0 delay-100">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${ghUser}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=64FFDA&text_color=8B949E&icon_color=64FFDA`}
                  alt="GitHub Stats"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://github-readme-stats-sigma-five.vercel.app/api?username=${ghUser}&show_icons=true&theme=dark&hide_border=true&bg_color=0D1117&title_color=64FFDA&text_color=8B949E&icon_color=64FFDA`;
                  }}
                />
              </div>
              
              <div className="hover:-translate-y-2 hover:scale-105 transition-all duration-300 w-full overflow-hidden rounded-lg animate-fadeInUp opacity-0 delay-150">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${ghUser}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=64FFDA&text_color=8B949E`}
                  alt="Top Languages"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${ghUser}&layout=compact&theme=dark&hide_border=true&bg_color=0D1117&title_color=64FFDA&text_color=8B949E`;
                  }}
                />
              </div>
              
              <div className="hover:-translate-y-2 hover:scale-105 transition-all duration-300 w-full overflow-hidden rounded-lg animate-fadeInUp opacity-0 delay-200">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${ghUser}&theme=tokyonight&hide_border=true&background=0D1117&ring=64FFDA&fire=64FFDA&currStreakLabel=64FFDA`}
                  alt="GitHub Streak"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://streak-stats.demolab.com/?user=${ghUser}&theme=dark&hide_border=true&background=0D1117&ring=64FFDA&fire=64FFDA&currStreakLabel=64FFDA`;
                  }}
                />
              </div>
            </>
          )}
          {lcUser && (
            <div className="hover:-translate-y-2 hover:scale-105 transition-all duration-300 w-full overflow-hidden rounded-lg animate-fadeInUp opacity-0 delay-250">
              <img
                src={`https://leetcard.jacoblin.cool/${lcUser}?theme=dark&font=Karma&ext=activity`}
                alt="LeetCode Stats"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://leetcode-stats-six.vercel.app/api?username=${lcUser}&theme=dark`;
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
