
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
  Image as ImageIcon,
  Code2,
  ExternalLink,
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
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl">
      <div className="border-b border-slate-800 p-6 sm:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-aws-amber/30 bg-aws-amber/10 px-2.5 py-1 font-mono text-[11px] text-aws-amber">
            Featured Project
          </span>

          <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-[11px] text-emerald-400">
            {featuredProject.status}
          </span>

          <span className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 font-mono text-[11px] text-slate-400">
            {featuredProject.classification}
          </span>
        </div>

        <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {featuredProject.title}
        </h3>

        <p className="mt-1 font-mono text-sm text-aws-amber">
          {featuredProject.subtitle}
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
          {featuredProject.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {featuredProject.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded border border-slate-700 bg-slate-800 px-2 py-1 font-mono text-[11px] text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {featuredProject.repositoryUrl && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={featuredProject.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-aws-amber px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
            >
              <Code2 className="h-4 w-4" />
              View Project on GitHub
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <span className="text-xs text-slate-500">
              Explore the source code and documentation.
            </span>
          </div>
        )}
      </div>

      <div className="space-y-8 p-6 sm:p-8">
        {featuredProject.architectureImage && (
          <section>
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-white">
              <ImageIcon className="h-4 w-4 text-sky-400" />
              AWS Architecture Diagram
            </h4>

            <a
              href={featuredProject.architectureImage}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-2 transition-colors hover:border-aws-amber/60 sm:p-4"
              title="Open architecture diagram in a new tab"
            >
              <img
                src={featuredProject.architectureImage}
                alt="RetailEdge AWS architecture diagram"
                loading="lazy"
                className="mx-auto h-auto max-h-[650px] w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />

              <p className="mt-3 text-center text-xs text-slate-500">
                View full-size architecture diagram ↗
              </p>
            </a>
          </section>
        )}

        <section>
          <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            Business Problem
          </h4>

          <p className="mb-4 max-w-3xl text-sm leading-relaxed text-slate-300">
            {featuredProject.businessProblem.scenario}
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {featuredProject.businessProblem.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-center"
              >
                <div className="font-mono text-base font-bold text-aws-amber">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] leading-tight text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-white">
            <Layers className="h-4 w-4 text-sky-400" />
            Infrastructure Overview
          </h4>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <Cloud className="mb-2 h-4 w-4 text-sky-400" />
              <div className="text-xs text-slate-400">VPC</div>
              <div className="mt-1 font-mono text-sm text-white">
                {networking.vpc}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <Globe className="mb-2 h-4 w-4 text-blue-400" />
              <div className="text-xs text-slate-400">Subnets</div>
              <div className="mt-1 font-mono text-sm text-white">
                {networking.subnetCount} across {networking.availabilityZones}{" "}
                AZs
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <Server className="mb-2 h-4 w-4 text-amber-400" />
              <div className="text-xs text-slate-400">NAT Gateways</div>
              <div className="mt-1 font-mono text-sm text-white">
                {networking.natGateways}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <ShieldCheck className="mb-2 h-4 w-4 text-red-400" />
              <div className="text-xs text-slate-400">Security Groups</div>
              <div className="mt-1 font-mono text-sm text-white">
                {networking.securityGroups.length}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <Database className="mb-2 h-4 w-4 text-emerald-400" />
              <div className="text-xs text-slate-400">Data Layer</div>
              <div className="mt-1 font-mono text-sm text-white">
                RDS + Redis
              </div>
            </div>
          </div>
        </section>

        <section>
          <h4 className="mb-3 text-sm font-bold text-white">
            Implementation Approaches
          </h4>

          <div className="mb-4 flex flex-wrap gap-2">
            {featuredProject.implementations.map((implementation) => (
              <button
                key={implementation.id}
                type="button"
                onClick={() => setActiveImpl(implementation.id)}
                aria-pressed={activeImpl === implementation.id}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                  activeImpl === implementation.id
                    ? "bg-aws-amber text-slate-950 shadow-md shadow-amber-500/20"
                    : "border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {implementation.label}
              </button>
            ))}
          </div>

          {activeImplementation && (
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 sm:p-6">
              <h5 className="mb-2 text-sm font-bold text-white">
                {activeImplementation.title}
              </h5>

              <p className="mb-4 max-w-3xl text-xs leading-relaxed text-slate-400">
                {activeImplementation.description}
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {activeImplementation.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-2.5 rounded-lg border border-slate-800 bg-slate-900 p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="text-xs leading-relaxed text-slate-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section>
          <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-white">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Key Design Highlights
          </h4>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {featuredProject.architectureHighlights.map((highlight) => (
              <div
                key={highlight.point}
                className="flex items-start gap-3 rounded-lg border border-slate-800/60 bg-slate-950/60 p-3"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                <div className="min-w-0 flex-1">
                  <span className="text-xs leading-relaxed text-slate-300">
                    {highlight.point}
                  </span>

                  <span
                    className={`ml-2 inline-block rounded border px-1.5 py-0.5 font-mono text-[10px] ${
                      tagColors[highlight.tag] ||
                      "border-slate-700 bg-slate-800 text-slate-400"
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
