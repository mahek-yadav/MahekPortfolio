import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  const groups = [
    ["Programming", portfolioData.skills.programming],
    ["Web", portfolioData.skills.web],
    ["Tools", portfolioData.skills.tools],
    ["Other", portfolioData.skills.other],
  ];

  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <div className="rounded-[2rem] bg-[#f8f3f4] p-8 shadow-lg">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f76]">Technical Skills</p>
        <h2 className="mt-3 text-3xl font-bold text-[#161313]">My Stack</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {groups.map(([title, items]) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-[#1d1b1c]">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="rounded-full bg-[#f3eaec] px-3 py-2 text-sm text-[#4f4046]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
