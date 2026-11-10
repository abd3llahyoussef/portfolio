"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Code2,
  Layout,
  Server,
  Terminal,
  Cpu,
  Globe,
  Radio,
  Zap,
  Activity,
  Network,
  Cable,
  MonitorDot,
  MonitorPlay,
  Factory,
  Workflow,
  CircuitBoard,
  FileCode,
  Timer,
  Sliders,
  Braces,
  Cpu as Microchip,
  Sparkles
} from "lucide-react";
import {
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiPrisma,
  SiDocker,
  SiArduino,
  SiCplusplus,
  SiSiemens,
  SiRockwellautomation,
  SiAbb,
  SiSchneiderelectric
} from "react-icons/si";
import { FaGitAlt, FaAws } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa6";

// Precise schematic SVG for Ladder Logic (LD)
function LadderIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="4" y1="3" x2="4" y2="21" />
      <line x1="20" y1="3" x2="20" y2="21" />
      <line x1="4" y1="8" x2="8" y2="8" />
      <line x1="8" y1="5.5" x2="8" y2="10.5" />
      <line x1="12" y1="5.5" x2="12" y2="10.5" />
      <line x1="12" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="13" y2="16" />
      <circle cx="16" cy="16" r="2.5" />
      <line x1="18.5" y1="16" x2="20" y2="16" />
    </svg>
  );
}

// Precise schematic SVG for Function Block Diagram (FBD)
function FbdIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="7" y="4" width="10" height="16" rx="2" />
      <line x1="2" y1="8" x2="7" y2="8" />
      <line x1="2" y1="16" x2="7" y2="16" />
      <line x1="17" y1="12" x2="22" y2="12" />
      <path d="M10 8h4" />
      <path d="M12 8v8" />
    </svg>
  );
}

const skills = {
  plcProgramming: [
    { name: "Ladder Logic (LD)", icon: LadderIcon, color: "text-amber-400" },
    { name: "FBD", icon: FbdIcon, color: "text-blue-400" },
    { name: "Structured Text (SCL)", icon: FileCode, color: "text-cyan-400" },
    { name: "Sequential (SFC)", icon: Workflow, color: "text-emerald-400" },
    { name: "Continuous (CFC)", icon: Activity, color: "text-purple-400" },
    { name: "Instruction List (IL)", icon: Terminal, color: "text-red-400" },
    { name: "Timers & Counters", icon: Timer, color: "text-yellow-400" },
    { name: "String Handling", icon: Braces, color: "text-pink-400" },
    { name: "Non-PID Control Logic", icon: Sliders, color: "text-teal-400" },
  ],
  platformsHmi: [
    { name: "Siemens S7-1500", icon: SiSiemens, color: "text-teal-400" },
    { name: "Siemens TIA Portal", icon: Cpu, color: "text-blue-400" },
    { name: "WinCC Runtime", icon: MonitorPlay, color: "text-sky-400" },
    { name: "ABB CODESYS", icon: SiAbb, color: "text-red-500" },
    { name: "MicroLogix 1100", icon: SiRockwellautomation, color: "text-orange-500" },
    { name: "RSLogix 500 / Emulate", icon: CircuitBoard, color: "text-amber-400" },
    { name: "RSLinx Classic", icon: Network, color: "text-indigo-400" },
    { name: "RSLinx DDE to Excel", icon: FaFileExcel, color: "text-emerald-400" },
    { name: "Wonderware (InTouch)", icon: SiSchneiderelectric, color: "text-green-500" },
  ],
  iot: [
    { name: "Modbus TCP / RTU", icon: Zap, color: "text-amber-400" },
    { name: "MQTT / TLS", icon: Radio, color: "text-purple-400" },
    { name: "WebSockets", icon: Network, color: "text-sky-400" },
    { name: "UART / Serial", icon: Cable, color: "text-orange-400" },
    { name: "C / C++ Firmware", icon: SiCplusplus, color: "text-blue-300" },
    { name: "Arduino & ESP8266", icon: SiArduino, color: "text-teal-400" },
    { name: "Edge Computing", icon: Cpu, color: "text-cyan-400" },
    { name: "Sensor Fusion", icon: Activity, color: "text-emerald-400" },
    { name: "HMI Dashboard Design", icon: MonitorDot, color: "text-rose-400" },
  ],
  frontend: [
    { name: "ReactJS", icon: SiReact, color: "text-sky-400" },
    { name: "NextJS", icon: SiNextdotjs, color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-500" },
    { name: "JavaScript (ES6+)", icon: Code2, color: "text-yellow-400" },
    { name: "HTML5", icon: Globe, color: "text-orange-500" },
    { name: "CSS3", icon: Layout, color: "text-blue-500" },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", icon: Terminal, color: "text-gray-400" },
    { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "Redis", icon: SiRedis, color: "text-red-400" },
    { name: "Prisma", icon: SiPrisma, color: "text-blue-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "AWS", icon: FaAws, color: "text-orange-500" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  ],
};

type CategoryId = "all" | "plc" | "platforms" | "iot" | "software";

interface FilterTab {
  id: CategoryId;
  label: string;
  badge?: string;
}

const filterTabs: FilterTab[] = [
  { id: "all", label: "All Disciplines" },
  { id: "plc", label: "PLC Programming", badge: "IEC 61131-3" },
  { id: "platforms", label: "Platforms & HMI", badge: "SCADA" },
  { id: "iot", label: "IoT & Protocols", badge: "IIoT" },
  { id: "software", label: "Full-Stack & Cloud", badge: "Web" },
];

export function Skills() {
  const [activeTab, setActiveTab] = useState<CategoryId>("all");

  const showPlc = activeTab === "all" || activeTab === "plc";
  const showPlatforms = activeTab === "all" || activeTab === "platforms";
  const showIot = activeTab === "all" || activeTab === "iot";
  const showSoftware = activeTab === "all" || activeTab === "software";

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
          <Sparkles size={14} className="text-blue-400 animate-pulse" />
          Engineering Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Bridging deterministic Industrial Automation (PLC & SCADA), real-time IIoT telemetry,
          and scalable modern full-stack web architectures.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "text-white bg-blue-600/30 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                    : "text-muted-foreground hover:text-foreground glass hover:bg-white/10 border-white/5"
                }`}
              >
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive
                        ? "bg-blue-400/20 text-blue-300"
                        : "bg-white/5 text-muted-foreground"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="space-y-12"
        >
          {/* Section: Industrial Automation & Control Systems */}
          {(showPlc || showPlatforms || showIot) && (
            <div>
              {activeTab === "all" && (
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent flex-1" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-amber-400/90 flex items-center gap-2">
                    <Factory size={16} /> Industrial Automation & Control Systems
                  </span>
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent flex-1" />
                </div>
              )}

              <div
                className={`grid gap-6 ${
                  activeTab === "all"
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : activeTab === "plc" || activeTab === "platforms"
                    ? "grid-cols-1 max-w-2xl mx-auto"
                    : "grid-cols-1 max-w-2xl mx-auto"
                }`}
              >
                {/* PLC Programming Card */}
                {showPlc && (
                  <GlassCard className="flex flex-col justify-between bg-amber-500/[0.03] border-amber-500/15 hover:border-amber-500/30">
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3.5">
                          <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400">
                            <LadderIcon size={28} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">PLC Programming</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              IEC 61131-3 Logic & State Machines
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          Logic
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {skills.plcProgramming.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-amber-500/30 transition-all duration-200 text-center group min-h-[92px]"
                          >
                            <skill.icon
                              size={24}
                              className={`${skill.color} mb-2 transition-transform duration-200 group-hover:scale-110`}
                            />
                            <span className="text-xs font-medium text-slate-200 leading-snug">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-muted-foreground/80 flex items-center justify-between">
                      <span>Interlocks & Non-PID Logic</span>
                      <span className="text-amber-400/80 font-mono">IEC 61131-3</span>
                    </div>
                  </GlassCard>
                )}

                {/* Platforms & HMI Card */}
                {showPlatforms && (
                  <GlassCard className="flex flex-col justify-between bg-cyan-500/[0.03] border-cyan-500/15 hover:border-cyan-500/30">
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3.5">
                          <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                            <Factory size={28} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">Platforms & HMI</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              Industrial Hardware & SCADA Systems
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          SCADA / HMI
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {skills.platformsHmi.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-cyan-500/30 transition-all duration-200 text-center group min-h-[92px]"
                          >
                            <skill.icon
                              size={24}
                              className={`${skill.color} mb-2 transition-transform duration-200 group-hover:scale-110`}
                            />
                            <span className="text-xs font-medium text-slate-200 leading-snug">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-muted-foreground/80 flex items-center justify-between">
                      <span>Siemens • Rockwell • CODESYS</span>
                      <span className="text-cyan-400/80 font-mono">DDE / Telemetry</span>
                    </div>
                  </GlassCard>
                )}

                {/* IoT & Protocols Card */}
                {showIot && (
                  <GlassCard className="flex flex-col justify-between bg-purple-500/[0.03] border-purple-500/15 hover:border-purple-500/30">
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3.5">
                          <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                            <Cpu size={28} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">IoT & Protocols</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              Fieldbus, Telemetry & Embedded Nodes
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          IIoT
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {skills.iot.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-200 text-center group min-h-[92px]"
                          >
                            <skill.icon
                              size={24}
                              className={`${skill.color} mb-2 transition-transform duration-200 group-hover:scale-110`}
                            />
                            <span className="text-xs font-medium text-slate-200 leading-snug">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-muted-foreground/80 flex items-center justify-between">
                      <span>Modbus TCP • MQTT (TLS) • Serial</span>
                      <span className="text-purple-400/80 font-mono">Edge Computing</span>
                    </div>
                  </GlassCard>
                )}
              </div>
            </div>
          )}

          {/* Section: Software Engineering & Cloud */}
          {showSoftware && (
            <div>
              {activeTab === "all" && (
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent flex-1" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-blue-400/90 flex items-center gap-2">
                    <Code2 size={16} /> Full-Stack Web & Cloud Infrastructure
                  </span>
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent flex-1" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend Card */}
                <GlassCard className="flex flex-col justify-between bg-blue-500/[0.03] border-blue-500/15 hover:border-blue-500/30">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                          <Layout size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">Frontend Engineering</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Interactive, Reactive & Responsive Web UIs
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Client
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {skills.frontend.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-blue-500/30 transition-all duration-200 text-center group min-h-[92px]"
                        >
                          <skill.icon
                            size={24}
                            className={`${skill.color} mb-2 transition-transform duration-200 group-hover:scale-110`}
                          />
                          <span className="text-xs font-medium text-slate-200 leading-snug">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-muted-foreground/80 flex items-center justify-between">
                    <span>React 19 • Next.js • TypeScript</span>
                    <span className="text-blue-400/80 font-mono">Modern UI/UX</span>
                  </div>
                </GlassCard>

                {/* Backend Card */}
                <GlassCard className="flex flex-col justify-between bg-emerald-500/[0.03] border-emerald-500/15 hover:border-emerald-500/30">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                          <Server size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">Backend & Cloud</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Microservices, Databases & Cloud DevOps
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Server
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {skills.backend.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all duration-200 text-center group min-h-[92px]"
                        >
                          <skill.icon
                            size={24}
                            className={`${skill.color} mb-2 transition-transform duration-200 group-hover:scale-110`}
                          />
                          <span className="text-xs font-medium text-slate-200 leading-snug">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-muted-foreground/80 flex items-center justify-between">
                    <span>Node • NestJS • PostgreSQL • Docker</span>
                    <span className="text-emerald-400/80 font-mono">Cloud Architecture</span>
                  </div>
                </GlassCard>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
