import { portfolioData } from "../data/portfolioData";

const Projects = () => (
  <section id="projects" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
    <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f76]">Projects</p>
    <h2 className="mt-3 text-3xl font-bold text-[#161313]">Selected Work</h2>
    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#62595c]">
      A few projects that reflect my work in web development, product thinking, and modern UI building.
    </p>

    <div className="mt-8 grid gap-6 lg:grid-cols-3">
      {portfolioData.projects.map((project) => (
        <div
          key={project.title}
          className="group rounded-[2rem] border border-white/50 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold text-[#1d1b1c]">
              {project.title}
            </h3>
            <span className="rounded-full bg-[#f3eaec] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b575f]">
              Featured
            </span>
          </div>

          <p className="mt-4 leading-7 text-[#5d4f53]">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#f3eaec] px-3 py-2 text-xs font-medium text-[#4f4046]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[#1d1b1c] underline underline-offset-4 transition hover:opacity-70"
            >
              GitHub
            </a>
            
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
