import React, { useState } from "react";
import { Terminal, Check, Copy } from "lucide-react";

export const TerminalCard = () => {
  const [activeTab, setActiveTab] = useState("terraform");
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: "terraform", label: "terraform plan" },
    { id: "aws", label: "aws sts & vpc" },
    { id: "validation", label: "lab-verification" },
  ];

  const terminalContent = {
    terraform: [
      { text: "$ terraform plan -out=tfplan.binary", type: "command" },
      { text: "Refreshing Terraform state in local lab environment...", type: "info" },
      { text: "", type: "empty" },
      { text: "Terraform will perform the following actions:", type: "text" },
      { text: "  + aws_vpc.lab_vpc", type: "add", detail: "cidr_block: \"10.0.0.0/16\"" },
      { text: "  + aws_subnet.public_subnet_a", type: "add", detail: "10.0.1.0/24 [eu-west-1a]" },
      { text: "  + aws_subnet.private_subnet_a", type: "add", detail: "10.0.10.0/24 [eu-west-1a]" },
      { text: "  + aws_nat_gateway.lab_nat_gw", type: "add", detail: "allocation_id: eipalloc-0a1b" },
      { text: "  + aws_route_table.private_rt", type: "add", detail: "0.0.0.0/0 -> nat-gw" },
      { text: "", type: "empty" },
      { text: "Plan: 7 to add, 0 to change, 0 to destroy.", type: "success" },
      { text: "Saved the plan to: tfplan.binary (Practice Lab)", type: "info" }
    ],
    aws: [
      { text: "$ aws sts get-caller-identity", type: "command" },
      { text: "{\n  \"UserId\": \"AIDALABUSER789012\",\n  \"Account\": \"123456789012\",\n  \"Arn\": \"arn:aws:iam::123456789012:user/ibrahim-zayan-lab\"\n}", type: "json" },
      { text: "", type: "empty" },
      { text: "$ aws ec2 describe-vpcs --filters Name=tag:Name,Values=Lab-VPC", type: "command" },
      { text: "VpcId: vpc-0a81f349d (10.0.0.0/16)\nState: available\nTags: { Project: \"VPC-Terraform-Lab\", ManagedBy: \"Terraform\" }", type: "info" }
    ],
    validation: [
      { text: "$ ip addr show eth0", type: "command" },
      { text: "inet 10.0.10.15/24 (Private Subnet - No Public IP)", type: "info" },
      { text: "", type: "empty" },
      { text: "$ ping -c 3 8.8.8.8", type: "command" },
      { text: "64 bytes from 8.8.8.8: icmp_seq=1 ttl=115 time=14.2 ms", type: "success" },
      { text: "64 bytes from 8.8.8.8: icmp_seq=2 ttl=115 time=14.5 ms", type: "success" },
      { text: "--- 8.8.8.8 ping statistics ---", type: "text" },
      { text: "3 packets transmitted, 3 received, 0% packet loss", type: "success" },
      { text: "Result: Egress through NAT Gateway verified successfully.", type: "success" }
    ]
  };

  const copyCurrentTerminal = () => {
    const textToCopy = terminalContent[activeTab]
      .map(item => item.text + (item.detail ? ` (${item.detail})` : ""))
      .join("\n");
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Titlebar */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-slate-400 text-xs flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-aws-amber" />
            <span>cloud-lab: ~/aws-infrastructure-lab</span>
          </span>
        </div>

        <button
          onClick={copyCurrentTerminal}
          className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          title="Copy output"
          aria-label="Copy terminal output"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800/80 bg-slate-900/40 px-2 pt-1 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-t text-xs transition-colors ${
              activeTab === tab.id
                ? "bg-slate-950 text-aws-amber border-t-2 border-aws-amber font-semibold"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Terminal Output */}
      <div className="p-4 sm:p-5 h-[260px] overflow-y-auto space-y-1.5 text-slate-300 select-text">
        {terminalContent[activeTab].map((line, idx) => {
          if (line.type === "empty") return <div key={idx} className="h-2" />;
          if (line.type === "command") {
            return (
              <div key={idx} className="text-sky-300 font-semibold flex items-start gap-1">
                <span>{line.text}</span>
              </div>
            );
          }
          if (line.type === "add") {
            return (
              <div key={idx} className="flex flex-wrap items-center gap-2 text-emerald-400 pl-2">
                <span>{line.text}</span>
                {line.detail && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-300">
                    {line.detail}
                  </span>
                )}
              </div>
            );
          }
          if (line.type === "success") {
            return (
              <div key={idx} className="text-emerald-400 font-semibold pl-2">
                {line.text}
              </div>
            );
          }
          if (line.type === "info") {
            return (
              <div key={idx} className="text-slate-400 pl-2">
                {line.text}
              </div>
            );
          }
          if (line.type === "json") {
            return (
              <pre key={idx} className="text-amber-200/90 pl-2 overflow-x-auto whitespace-pre">
                {line.text}
              </pre>
            );
          }
          return (
            <div key={idx} className="text-slate-300 pl-2">
              {line.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
