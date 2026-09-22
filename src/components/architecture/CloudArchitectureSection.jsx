import React, { useState } from "react";
import { ShieldCheck, Layers, ChevronRight, CheckCircle2, Network, Terminal, Cloud } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";

export const CloudArchitectureSection = () => {
  const { architectureShowcase } = portfolioData;
  const [activePillarKey, setActivePillarKey] = useState(architectureShowcase.pillars[0].key);

  const activePillar = architectureShowcase.pillars.find(p => p.key === activePillarKey) || architectureShowcase.pillars[0];

  const architecturalBaselines = [
    { title: "Network Isolation", desc: "Placing internal compute in private subnets without public IPv4 addresses to minimize attack exposure." },
    { title: "Infrastructure as Code", desc: "Using Terraform to define repeatable, version-controlled cloud infrastructure templates." },
    { title: "Security Perimeter", desc: "Configuring restrictive Security Groups and IAM policies following least-privilege principles." },
    { title: "Managed Egress Routing", desc: "Routing outbound internet requests through an AWS NAT Gateway without exposing inbound ports." },
    { title: "CloudWatch Monitoring", desc: "Setting up metric alarms and thresholds to monitor resource health and trigger alerts." },
    { title: "Multi-AZ Segmentation", desc: "Subnetting across multiple Availability Zones to understand high availability and fault tolerance." },
  ];

  return (
    <section id="architecture" className="py-20 bg-cloud-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 04. CLOUD ARCHITECTURE & CONCEPTS"
          title="Infrastructure Architecture & Design Principles"
          description={architectureShowcase.subtitle}
        />

        {/* Interactive Architecture Pattern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Pillar Navigation Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-mono text-slate-400 mb-3 px-1">
              ARCHITECTURAL TOPICS:
            </div>
            {architectureShowcase.pillars.map((pillar) => (
              <button
                key={pillar.key}
                onClick={() => setActivePillarKey(pillar.key)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                  activePillarKey === pillar.key
                    ? "bg-slate-900 border-aws-amber shadow-md shadow-amber-500/5"
                    : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700"
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {pillar.tag}
                  </span>
                  <span className={`text-sm font-bold ${
                    activePillarKey === pillar.key ? "text-aws-amber" : "text-slate-200 group-hover:text-white"
                  }`}>
                    {pillar.name}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  activePillarKey === pillar.key ? "text-aws-amber translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                }`} />
              </button>
            ))}
          </div>

          {/* Active Pillar Card */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-aws-amber mb-2">
              <Layers className="w-4 h-4" />
              <span>{activePillar.tag}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {activePillar.name}
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {activePillar.summary}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Lab Implementation Details:
              </h4>
              {activePillar.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Baseline Grid */}
        <div className="pt-8 border-t border-slate-900">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Core Architectural Knowledge Applied in Labs</span>
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Foundational principles practiced across training exercises and personal Terraform configurations:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {architecturalBaselines.map((baseline, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>{baseline.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {baseline.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
