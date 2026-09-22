import React, { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Cloud,
  Database,
  Globe,
  Layers,
  Server,
  ShieldCheck,
} from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

const tagColors = {
  Architecture: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  Resilience: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Networking: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Security: "text-red-400 bg-red-400/10 border-red-400/20",
  Scalability: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

export const RetailEdgeCard = () => {
  const { featuredProject } = portfolioData;
  const [activeImpl, setActiveImpl] = useState("console");

  const activeImplementation = featuredProject.implementations.find(
    (implementation) => implementation.id === activeImpl
  );

  const networking = featuredProject.networking;

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl overflow-hidden">

      <div className="p-6 sm:p-8 border-b border-slate-800">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md bg-aws-amber/10 border border-aws-amber/30 text-[11px] font-mono text-aws-amber">
                Featured Project
              </span>

              <span className="px-2.5 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-[11px] font-mono text-emerald-400">
                Completed
              </span>

              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-[11px] font-mono text-slate-400">
                {featuredProject.classification}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {featuredProject.title}
            </h3>

            <p className="text-sm text-aws-amber font-mono mt-1">
              {featuredProject.subtitle}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-4 max-w-3xl">
              {featuredProject.summary}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {featuredProject.technologies.map((technology) => (
            <span
              key={technology}
              className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[11px] font-mono text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-9">

        <section>
          <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-4">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            The Problem
          </h4>

          <p className="text-sm text-slate-300 leading-relaxed mb-5">
            {featuredProject.businessProblem.scenario}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {featuredProject.businessProblem.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center"
              >
                <div className="text-base font-bold text-aws-amber font-mono">
                  {stat.value}
                </div>

                <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-sky-400" />
            Architecture Overview
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <Cloud className="w-4 h-4 text-sky-400 mb-2" />
              <div className="text-xs text-slate-400">VPC</div>
              <div className="text-sm font-mono text-white mt-1">
                {networking.vpc}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <Globe className="w-4 h-4 text-blue-400 mb-2" />
              <div className="text-xs text-slate-400">Subnets</div>
              <div className="text-sm font-mono text-white mt-1">
                {networking.subnetCount} across{" "}
                {networking.availabilityZones} AZs
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <Server className="w-4 h-4 text-amber-400 mb-2" />
              <div className="text-xs text-slate-400">NAT Gateways</div>
              <div className="text-sm font-mono text-white mt-1">
                {networking.natGateways}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-red-400 mb-2" />
              <div className="text-xs text-slate-400">Security Groups</div>
              <div className="text-sm font-mono text-white mt-1">
                {Array.isArray(networking.securityGroups)
                  ? networking.securityGroups.length
                  : networking.securityGroups}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <Database className="w-4 h-4 text-emerald-400 mb-2" />
              <div className="text-xs text-slate-400">Data Layer</div>
              <div className="text-sm font-mono text-white mt-1">
                RDS + Redis
              </div>
            </div>

          </div>
        </section>

        <section>
          <h4 className="text-sm font-bold text-white mb-3">
            Implementation
          </h4>

          <div className="flex gap-2 mb-5">
            {featuredProject.implementations.map((implementation) => (
              <button
                key={implementation.id}
                onClick={() => setActiveImpl(implementation.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeImpl === implementation.id
                    ? "bg-aws-amber text-slate-950 shadow-md shadow-amber-500/20"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                }`}
              >
                {implementation.label}
              </button>
            ))}
          </div>

          {activeImplementation && (
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-5 sm:p-6">

              <h5 className="text-sm font-bold text-white mb-2">
                {activeImplementation.title}
              </h5>

              <p className="text-xs text-slate-400 leading-relaxed mb-5 max-w-3xl">
                {activeImplementation.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeImplementation.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900 border border-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />

                    <span className="text-xs text-slate-300 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          )}
        </section>

        <section>
          <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Architecture & Security Highlights
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {featuredProject.architectureHighlights.map((highlight) => (
              <div
                key={highlight.point}
                className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800/60"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />

                <div className="flex-1 min-w-0">
                  <span className="text-xs text-slate-300 leading-relaxed">
                    {highlight.point}
                  </span>

                  <span
                    className={`ml-2 px-1.5 py-0.5 rounded text-[10px] font-mono border ${
                      tagColors[highlight.tag] ||
                      "text-slate-400 bg-slate-800 border-slate-700"
                    }`}
                  >
                    {highlight.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};