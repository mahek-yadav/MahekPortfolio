const navItems = ["home", "about", "education", "skills", "achievements", "projects", "contact"];

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#f6efee]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <div className="text-lg font-bold tracking-[0.25em] text-[#1d1b1c]">
          MAHEK
        </div>

        <div className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium capitalize text-[#4b4144] transition hover:text-[#111]"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          className="rounded-full bg-[#1d1b1c] px-5 py-2 text-sm font-medium text-white transition hover:scale-[1.02]"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
