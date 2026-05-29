import { portfolioData } from "../data/portfolioData";

const Education = () => (
  <section id="education" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
    <div className="rounded-[2rem] bg-white/75 p-8 shadow-lg backdrop-blur-xl">
      <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f76]">Education</p>
      <h2 className="mt-3 text-3xl font-bold text-[#161313]">{portfolioData.education.institute}</h2>
      <p className="mt-2 text-lg text-[#5d4f53]">{portfolioData.education.degree}</p>
      <p className="mt-6 font-semibold text-[#1d1b1c]">Relevant Coursework</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {portfolioData.education.coursework.map((item) => (
          <span key={item} className="rounded-full bg-[#f2e8ea] px-4 py-2 text-sm text-[#4f4046]">
            {item}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
