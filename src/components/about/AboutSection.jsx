import React from "react";
import { GraduationCap, Cloud, Terminal, Network, CheckCircle2, Languages, Users } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";

export const AboutSection = () => {
  const { personalInfo, corePillars } = portfolioData;

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case "Cloud": return <Cloud className="w-5 h-5 text-aws-amber" />;
      case "Binary": return <Terminal className="w-5 h-5 text-sky-400" />;
      case "Network": return <Network className="w-5 h-5 text-emerald-400" />;
      case "Terminal": return <Terminal className="w-5 h-5 text-purple-400" />;
      default: return <Cloud className="w-5 h-5 text-aws-amber" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-cloud-900/50 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 01. ABOUT"
          title="Building Practical Cloud Engineering Skills"
          description="Combining formal engineering coursework with structured AWS, Linux, and Terraform training."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Bio + Education + Skills */}
          <div className="lg:col-span-6 space-y-6">
            {/* About paragraphs */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              {personalInfo.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Education Card — no profile photo here */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-aws-amber mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {personalInfo.education.degree}
                </h4>
                <p className="text-xs text-aws-amber font-mono mt-0.5">
                  {personalInfo.education.specialization}
                </p>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  {personalInfo.education.institution} &bull; {personalInfo.education.period}
                </p>
              </div>
            </div>

            {/* Soft Skills & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-aws-amber mb-2.5">
                  <Users className="w-4 h-4" />
                  <span>SOFT SKILLS</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.softSkills.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2.5">
                  <Languages className="w-4 h-4" />
                  <span>LANGUAGES</span>
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  {personalInfo.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between text-slate-300">
                      <span>{lang.name}</span>
                      <span className="text-slate-400 px-2 py-0.5 rounded bg-slate-950 text-[11px]">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Core Focus Areas */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-aws-amber transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Structured Training & Labs</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
