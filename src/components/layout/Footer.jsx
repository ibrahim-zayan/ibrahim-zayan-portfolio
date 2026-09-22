import React from "react";
import { Cloud, ArrowUp, Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "../common/SocialIcons";
import { portfolioData } from "../../data/portfolioData";

export const Footer = () => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-10 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Middle Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Cloud className="w-4 h-4 text-aws-amber" />
            </div>
            <div>
              <div className="text-white font-bold text-sm tracking-wide">
                {personalInfo.fullName}
              </div>
              <div className="text-slate-500 text-[11px] font-mono">
                {personalInfo.role} &bull; {personalInfo.field}
              </div>
            </div>
          </div>

          {/* Nav Jumps */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            <a href="#about" className="hover:text-aws-amber transition-colors">About</a>
            <a href="#skills" className="hover:text-aws-amber transition-colors">Skills</a>
            <a href="#projects" className="hover:text-aws-amber transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-aws-amber transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-aws-amber transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-sky-400 hover:text-sky-300 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Send Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Return to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-4 border-t border-slate-900/80 text-center text-slate-600 text-[11px] font-mono">
          <p>&copy; {new Date().getFullYear()} {personalInfo.fullName}. Cloud Engineering Portfolio.</p>
        </div>
      </div>
    </footer>
  );
};
