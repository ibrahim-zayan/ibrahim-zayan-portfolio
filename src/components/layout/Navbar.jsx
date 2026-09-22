import React, { useState, useEffect } from "react";
import { Menu, X, Cloud, Download } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cloud-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 group text-white font-mono text-lg font-bold tracking-wider">
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:border-aws-amber transition-colors">
              <Cloud className="w-5 h-5 text-aws-amber transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-1.5 leading-none">
                <span>{portfolioData.personalInfo.shortName}</span>
                <span className="text-aws-amber text-xs font-normal">/&gt;</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-normal leading-none mt-1">
                {portfolioData.personalInfo.role}
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "text-aws-amber bg-slate-800/80 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={portfolioData.personalInfo.cvUrl}
              download="Ibrahim_Zayan_CV.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-aws-amber text-xs font-mono text-slate-200 hover:text-white transition-all shadow-sm"
              title="Download Ibrahim Zayan's CV"
            >
              <Download className="w-3.5 h-3.5 text-aws-amber" />
              <span>Download CV</span>
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cloud-950/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-aws-amber hover:bg-slate-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={portfolioData.personalInfo.cvUrl}
              download="Ibrahim_Zayan_CV.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm font-mono text-white hover:border-aws-amber"
            >
              <Download className="w-4 h-4 text-aws-amber" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
