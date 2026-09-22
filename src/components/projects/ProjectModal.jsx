import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Layers, Beaker, BookOpen } from "lucide-react";
import { GithubIcon } from "../common/SocialIcons";

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-sky-400">
                {project.projectType}
              </span>
              <span className="text-xs font-mono text-aws-amber uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Architecture Diagram Preview */}
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-2 sm:p-4">
            <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800/80 mb-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-sky-400">
                <Layers className="w-4 h-4" />
                <span>Lab Architecture Diagram (Vector Render)</span>
              </span>
              <span className="text-[11px] text-slate-500">Topology Design</span>
            </div>
            <img
              src={project.diagramUrl}
              alt={`${project.title} Architecture Diagram`}
              className="w-full h-auto rounded-lg shadow-inner object-contain max-h-[420px]"
            />
          </div>

          {/* Lab Purpose & Learning Context */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-aws-amber uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Lab Learning Objective & Scope</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.labContext}
            </p>
          </div>

          {/* Technical & Practice Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Technical Concepts Practiced:
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AWS Services & Technologies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                AWS Services Configured
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.awsServices.map((service) => (
                  <span
                    key={service}
                    className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
          >
            Close Window
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-aws-amber hover:bg-amber-500 text-slate-950 font-semibold text-xs font-mono transition-colors shadow"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub Repository</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
