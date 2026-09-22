import React from "react";
import { Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";
import { LinkedinIcon } from "../common/SocialIcons";
import { SectionHeader } from "../common/SectionHeader";
import { portfolioData } from "../../data/portfolioData";

export const ContactSection = () => {
  const { personalInfo } = portfolioData;

  const contactItems = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <Mail className="w-4 h-4 text-aws-amber" />,
    },
    {
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      icon: <Phone className="w-4 h-4 text-sky-400" />,
    },
    {
      label: "Location",
      value: personalInfo.location,
      href: null,
      icon: <MapPin className="w-4 h-4 text-emerald-400" />,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ibrahim-zayan",
      href: personalInfo.linkedin,
      icon: <LinkedinIcon className="w-4 h-4 text-sky-400" />,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-cloud-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// 06. CONTACT"
          title="Let's Connect"
          description="Available for cloud engineering opportunities, collaboration, and technical conversations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Message */}
          <div className="space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am currently open to internship and junior Cloud Engineer opportunities, freelance cloud projects, and technical discussions around AWS, Terraform, Linux, and cloud infrastructure.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Feel free to reach out via email or LinkedIn — I will respond promptly.
            </p>
            <div className="pt-2">
              <a
                href={personalInfo.cvUrl}
                download="Ibrahim_Zayan_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-aws-amber hover:bg-amber-500 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right: Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactItems.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all group">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm font-mono text-slate-200 hover:text-aws-amber transition-colors flex items-center gap-1.5 group-hover:text-aws-amber break-all"
                  >
                    {item.value}
                    {item.external && <ExternalLink className="w-3 h-3 shrink-0" />}
                  </a>
                ) : (
                  <span className="text-sm font-mono text-slate-300">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
