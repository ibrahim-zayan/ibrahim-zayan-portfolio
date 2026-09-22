import React from "react";
import { ArrowRight, Download, Server, Cloud, Terminal, Network, MapPin } from "lucide-react";
import { LinkedinIcon } from "../common/SocialIcons";
import { portfolioData } from "../../data/portfolioData";

export const HeroSection = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-grid-pattern">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-aws-amber/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT: Text */}
          <div className="lg:col-span-7 space-y-6">

            {/* Status */}
            <div className="flex flex-wrap items-center gap-2">
              {personalInfo.status && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-inner">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>{personalInfo.status.text}</span>
                </div>
              )}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400">
                <MapPin className="w-3 h-3 text-sky-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {personalInfo.fullName}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-aws-amber font-mono">
                {personalInfo.role}
              </p>
            </div>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.professionalSummary}
            </p>

            {/* Focus Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-sky-400 flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5 text-aws-amber" />
                AWS Cloud
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-amber-300 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-amber-400" />
                Cloud Infrastructure
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-sky-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                Terraform (IaC)
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-purple-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                Ubuntu Linux
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-emerald-300 flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5 text-emerald-400" />
                Networking & VPC
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-aws-amber hover:bg-amber-500 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-sky-500/60 text-slate-200 hover:text-white text-sm font-medium transition-all active:scale-95"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.cvUrl}
                download="Ibrahim_Zayan_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-dashed border-slate-700 hover:border-aws-amber text-slate-300 hover:text-white text-sm font-medium transition-all active:scale-95"
                title="Download CV (PDF)"
              >
                <Download className="w-4 h-4 text-aws-amber" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Profile Photo — clean card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-aws-amber/20 to-sky-500/20 opacity-30 blur-lg pointer-events-none"></div>
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
              <div className="relative h-[430px] sm:h-[460px] w-full overflow-hidden bg-slate-950">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent pointer-events-none"></div>
                {/* Role badge only — no name/education/location repetition */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-slate-200 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{personalInfo.role}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
