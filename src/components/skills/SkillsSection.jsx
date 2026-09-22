import React, { useState } from "react";
import { 
  Cloud, 
  Terminal, 
  Network, 
  Binary, 
  Server, 
  GitBranch, 
  Database, 
  CheckCircle2, 
  Cpu
} from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { skillCategories } = portfolioData;

  const categoryNames = ["All", ...skillCategories.map(c => c.name)];

  const filteredCategories = selectedCategory === "All"
    ? skillCategories
    : skillCategories.filter(c => c.name === selectedCategory);

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case "Cloud & AWS":
        return <Cloud className="w-5 h-5 text-aws-amber" />;
      case "Infrastructure as Code":
        return <Binary className="w-5 h-5 text-sky-400" />;
      case "Networking":
        return <Network className="w-5 h-5 text-emerald-400" />;
      case "Operating Systems":
        return <Terminal className="w-5 h-5 text-purple-400" />;
      case "Virtualization":
        return <Server className="w-5 h-5 text-amber-400" />;
      case "Version Control":
        return <GitBranch className="w-5 h-5 text-red-400" />;
      case "Databases":
        return <Database className="w-5 h-5 text-cyan-400" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-cloud-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 02. TECHNICAL SKILLS"
          title="Technical Skills & Competencies"
          description="Core knowledge areas across AWS Cloud, Infrastructure as Code, Linux, networking, and supporting technologies."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categoryNames.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-slate-800 text-aws-amber border border-slate-700 font-semibold"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800/80 hover:bg-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {getCategoryIcon(category.name)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-aws-amber transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      {category.skills.length} verified competencies
                    </span>
                  </div>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-950 border border-slate-800/90 text-xs font-mono text-slate-200 hover:border-slate-700 hover:text-white transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
