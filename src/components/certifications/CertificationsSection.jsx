import React from "react";
import { Award, BookOpen, Terminal, ShieldCheck, CheckCircle2, Check } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";

export const CertificationsSection = () => {
  const { certifications, coursesAndTraining } = portfolioData;

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case "Terminal": return <Terminal className="w-5 h-5 text-purple-400" />;
      case "Award": return <Award className="w-5 h-5 text-aws-amber" />;
      case "BookOpen": return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-sky-400" />;
      default: return <Award className="w-5 h-5 text-aws-amber" />;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-cloud-900/50 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 05. CERTIFICATIONS & LEARNING"
          title="Credentials & Structured Training"
          description="Formal cloud and systems credentials alongside structured training programs and self-directed study."
        />

        {/* CERTIFICATIONS */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-aws-amber" />
            <h3 className="text-lg font-bold text-white">Verified Certifications</h3>
            <span className="text-xs font-mono text-slate-500 ml-1">(4 credentials)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certifications.map(cert => (
              <div
                key={cert.id}
                className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all group shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors shrink-0">
                    {getCertIcon(cert.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-white group-hover:text-aws-amber transition-colors leading-snug">
                        {cert.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-emerald-400 shrink-0">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                    <p className="text-xs font-mono text-sky-400 mb-3">{cert.organization}</p>
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1.5">What I Learned:</div>
                      {cert.whatILearned.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COURSES & TRAINING */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-sky-400" />
            <h3 className="text-lg font-bold text-white">Courses & Training</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coursesAndTraining.map(course => (
              <div
                key={course.id}
                className={`p-5 rounded-xl border transition-all shadow-md ${
                  course.type === 'Self-Study'
                    ? 'bg-slate-900/40 border-slate-800/60 hover:border-slate-700/80'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-sm font-bold text-white leading-snug">{course.title}</h4>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 ${
                    course.type === 'Self-Study'
                      ? 'bg-slate-950 border-slate-700 text-slate-400'
                      : 'bg-slate-950 border-slate-800 text-sky-400'
                  }`}>
                    {course.type}
                  </span>
                </div>
                <p className="text-xs font-mono text-aws-amber mb-3">{course.organization}</p>
                <div className="space-y-1.5">
                  {course.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
