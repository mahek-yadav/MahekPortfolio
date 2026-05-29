import { portfolioData } from "../data/portfolioData";

const Contact = () => (
  <section id="contact" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
    <div className="rounded-[2rem] bg-[#f8f3f4] p-8 shadow-lg">
      <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f76]">Contact</p>
      <h2 className="mt-3 text-3xl font-bold text-[#161313]">Let’s Connect</h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6">
          <p className="text-sm text-[#8b6f76]">Email</p>
          <p className="mt-2 text-lg font-semibold text-[#1d1b1c]">{portfolioData.contact.email}</p>
          <p className="mt-5 text-sm text-[#8b6f76]">Phone</p>
          <p className="mt-2 text-lg font-semibold text-[#1d1b1c]">{portfolioData.contact.phone}</p>
          <p className="mt-5 text-sm text-[#8b6f76]">Location</p>
          <p className="mt-2 text-lg font-semibold text-[#1d1b1c]">{portfolioData.contact.location}</p>
        </div>

        <div className="rounded-3xl bg-white p-6">
          <p className="text-sm text-[#8b6f76]">Social Links</p>
          <div className="mt-4 flex flex-col gap-4">
            <a href={portfolioData.contact.github} className="rounded-2xl bg-[#f8f0f2] px-4 py-3 font-medium text-[#1d1b1c]">
              GitHub
            </a>
            <a href={portfolioData.contact.linkedin} className="rounded-2xl bg-[#f8f0f2] px-4 py-3 font-medium text-[#1d1b1c]">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
