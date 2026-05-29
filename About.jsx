import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-white/75 p-8 shadow-lg backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f76]">
            Profile
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#161313]">About Me</h2>
          <p className="mt-5 leading-8 text-[#5d4f53]">{portfolioData.bio}</p>
        </div>

        <div className="perspective-[1500px]">
          <div
            onClick={() => setFlipped(!flipped)}
            className={`relative h-[420px] w-full cursor-pointer rounded-[2rem] transition-transform duration-700 preserve-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/20 bg-[#0b0b10] shadow-2xl backface-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,155,163,0.35),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(246,239,238,0.18),transparent_32%),linear-gradient(135deg,#09090d,#17131d_55%,#0a0a0c)]" />
              <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-white/10 bg-white/5 animate-pulse" />
              <div className="absolute right-10 top-16 h-14 w-14 rounded-full border border-[#f6efee]/20 bg-[#f6efee]/10 animate-bounce [animation-duration:5s]" />
              <div className="absolute bottom-10 left-16 h-28 w-28 rounded-full border border-[#b89ba3]/20 bg-[#b89ba3]/10 blur-sm animate-ping [animation-duration:4s]" />

              <div className="relative flex h-full items-center justify-center">
                <div className="flex h-72 w-72 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(184,155,163,0.18)]">
                  <div className="h-52 w-52 rounded-full border border-white/10 bg-gradient-to-br from-[#b89ba3] via-[#efe4e6] to-white opacity-90 blur-2xl animate-pulse" />
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-white/55">
                  click to flip
                </p>
              </div>
            </div>

            <div
              className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/20 bg-[#111114] p-8 shadow-2xl backface-hidden"
              style={{ transform: "rotateY(180deg)" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,155,163,0.25),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(246,239,238,0.12),transparent_30%),linear-gradient(135deg,#111114,#19131f_55%,#0b0b0f)]" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/50">
                    hidden mode
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-white">
                    Visual Analysis
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-3xl font-bold text-white">3</p>
                    <p className="mt-1 text-sm text-white/65">Projects</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-3xl font-bold text-white">4+</p>
                    <p className="mt-1 text-sm text-white/65">Skills</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-3xl font-bold text-white">3</p>
                    <p className="mt-1 text-sm text-white/65">Wins/Finals</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-3xl font-bold text-white">UI</p>
                    <p className="mt-1 text-sm text-white/65">Focus</p>
                  </div>
                </div>

                <p className="text-center text-xs uppercase tracking-[0.4em] text-white/45">
                  click again to return
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
