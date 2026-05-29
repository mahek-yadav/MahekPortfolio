import { portfolioData } from "../data/portfolioData";

const Hero = () => {
  const { name, role, shortIntro } = portfolioData;

  return (
    <section id="home" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#8b6f76]">
            Student Portfolio
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-tight text-[#161313] md:text-7xl">
            {name}
          </h1>
          <p className="mt-4 text-xl text-[#5d4f53] md:text-2xl">{role}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#62595c] md:text-lg">
            {shortIntro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#1d1b1c] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#1d1b1c]/20 px-6 py-3 text-sm font-semibold text-[#1d1b1c] transition hover:bg-[#1d1b1c]/5"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#d7c1c7] to-[#f6efee] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mx-auto flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border-8 border-white bg-gradient-to-br from-[#b89ba3] to-[#efe4e6] shadow-xl md:h-80 md:w-80">
              <img
                src="/profile.jpg"
                alt="Mahek Yadav"
                className="h-full w-full object-cover object-[50%_12%]"
              />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-[#5d4f53]">
              <div className="rounded-2xl bg-[#f8f2f3] p-4">
                <p className="text-xl font-bold text-[#1d1b1c]">3+</p>
                <p>Skills Areas</p>
              </div>
              <div className="rounded-2xl bg-[#f8f2f3] p-4">
                <p className="text-xl font-bold text-[#1d1b1c]">3</p>
                <p>Hackathons</p>
              </div>
              <div className="rounded-2xl bg-[#f8f2f3] p-4">
                <p className="text-xl font-bold text-[#1d1b1c]">2025</p>
                <p>CSE Batch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
