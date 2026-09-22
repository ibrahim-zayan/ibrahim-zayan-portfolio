import React from "react";
import { SectionHeader } from "../common/SectionHeader";
import { RetailEdgeCard } from "./RetailEdgeCard";
import { portfolioData } from "../../data/portfolioData";
import { ChevronRight, Cloud } from "lucide-react";

export const ProjectsSection = () => {
  const { labProjects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-cloud-900/40 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 03. PROJECTS"
          title="Cloud Engineering Projects"
          description="A realistic AWS architecture simulation and supporting cloud infrastructure labs."
        />

        {/* Featured Project */}
        <RetailEdgeCard />

        {/* Supporting Labs */}
        {labProjects && labProjects.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-5">
              <Cloud className="w-4 h-4 text-slate-500" />
              <h3 className="text-sm font-semibold text-slate-400 font-mono uppercase tracking-wider">
                Supporting Cloud Labs
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {labProjects.map(lab => (
                <div
                  key={lab.id}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-sm font-bold text-white leading-snug">{lab.title}</h4>
                    <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-sky-400 shrink-0">
                      {lab.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">{lab.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {lab.technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1">
                        <ChevronRight className="w-2.5 h-2.5 text-aws-amber" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
