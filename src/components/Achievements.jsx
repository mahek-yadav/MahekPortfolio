import { portfolioData } from "../data/portfolioData";

const Achievements = () => (
  <section id="achievements" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-[2rem] bg-white p-8 shadow-lg">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f76]">
          Achievements
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#161313]">Highlights</h2>

        <ul className="mt-6 space-y-4 text-[#5d4f53]">
          {portfolioData.achievements.map((item) => (
            <li
              key={item}
              className="rounded-2xl bg-[#faf6f7] p-4 leading-7 transition hover:-translate-y-1 hover:bg-[#f3eaec]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-[#1d1b1c] p-8 text-white shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#b89ba3]/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#f6efee]/10 blur-3xl" />

        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          Interests
        </p>
        <h2 className="mt-3 text-3xl font-bold">What I Like</h2>
        <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
          A few things that inspire my design style, creativity, and learning journey.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {portfolioData.interests.map((item, index) => (
            <span
              key={item}
              className={`interest-pill rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 shadow-lg backdrop-blur-sm ${
                index === 0 ? "animate-bounce [animation-duration:4s]" : ""
              } ${index === 1 ? "translate-y-1" : ""} ${
                index === 2 ? "translate-y-2" : ""
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/60">Creative focus</p>
          <p className="mt-2 text-lg font-medium text-white">
            Clean UI, smart layouts, and modern storytelling through design.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;
