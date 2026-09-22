import React from "react";

export const SectionHeader = ({ tag, title, description, align = "left" }) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {tag && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-mono text-aws-amber mb-3 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-aws-amber animate-pulse"></span>
          <span>{tag}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
