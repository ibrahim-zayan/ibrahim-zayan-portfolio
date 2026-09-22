import React from "react";
import { Layers, ArrowUpRight, Cloud, Beaker } from "lucide-react";
import { GithubIcon } from "../common/SocialIcons";

export const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <div className="rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden group shadow-lg">
      <div>
        {/* Architecture Diagram Preview Box */}
        <div 
          onClick={() => onOpenModal(project)}
          className="relative h-48 bg-slate-950 border-b border-slate-800 cursor-pointer overflow-hidden flex items-center justify-center p-3 group-hover:bg-slate-950/80 transition-colors"
          title="Click to view lab architecture diagram"
        >
          <img
            src={project.diagramUrl}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/90 border border-aws-amber text-xs font-mono text-aws-amber shadow-lg">
              <Layers className="w-3.5 h-3.5" />
              <span>Expand Lab Diagram</span>
            </span>
          </div>

          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-sky-400">
              <Beaker className="w-3 h-3 text-aws-amber" />
              <span>{project.projectType}</span>
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-4">
          <div>
            <h3 
              onClick={() => onOpenModal(project)}
              className="text-base sm:text-lg font-bold text-white group-hover:text-aws-amber transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-aws-amber transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </h3>
            <p className="text-xs text-aws-amber font-mono mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* AWS Services */}
          <div>
            <div className="text-[10px] font-mono text-slate-500 mb-1.5 flex items-center gap-1">
              <Cloud className="w-3 h-3 text-aws-amber" />
              <span>AWS SERVICES:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.awsServices.map((service) => (
                <span
                  key={service}
                  className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-amber-300/90"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <div className="text-[10px] font-mono text-slate-500 mb-1.5">TECHNOLOGIES:</div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenModal(project)}
          className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-mono transition-colors flex items-center justify-center gap-1.5"
        >
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span>View Lab Details</span>
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5"
          title="GitHub Repository / Code"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};
