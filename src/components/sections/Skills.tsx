"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Code2,
  Layers,
  Layout,
  Server,
  Terminal,
  Cpu,
  Globe,
  Database,
  Radio,
  Zap,
  Activity,
  Network,
  Cable,
  MonitorDot
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
  SiCplusplus
} from "react-icons/si";
import { FaGitAlt, FaAws } from "react-icons/fa";

const skills = {
  frontend: [
    { name: "HTML5", icon: Globe, color: "text-orange-500" },
    { name: "CSS3", icon: Layout, color: "text-blue-500" },
    { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "ReactJS", icon: SiReact, color: "text-sky-400" },
    { name: "NextJS", icon: SiNextdotjs, color: "text-white" },
    { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-500" },
    { name: "AWS", icon: FaAws, color: "text-orange-500" },
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
    { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  ],
  iot: [
    { name: "C / C++ Firmware", icon: SiCplusplus, color: "text-blue-300" },
    { name: "Arduino & ESP8266", icon: SiArduino, color: "text-teal-400" },
    { name: "UART / Serial", icon: Cable, color: "text-orange-400" },
    { name: "Modbus TCP", icon: Zap, color: "text-amber-400" },
    { name: "MQTT / TLS", icon: Radio, color: "text-purple-400" },
    { name: "WebSockets", icon: Network, color: "text-sky-400" },
    { name: "Edge Computing", icon: Cpu, color: "text-cyan-400" },
    { name: "Sensor Fusion", icon: Activity, color: "text-emerald-400" },
    { name: "HMI Design", icon: MonitorDot, color: "text-rose-400" },
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web platforms, backend architectures, and Industrial IoT systems.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <GlassCard className="flex flex-col gap-8 bg-blue-500/5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Layout className="text-blue-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold">Frontend</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.frontend.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <skill.icon size={24} className={skill.color + " mb-2"} />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col gap-8 bg-emerald-500/5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
              <Server className="text-emerald-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold">Backend</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.backend.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <skill.icon size={24} className={skill.color + " mb-2"} />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col gap-8 bg-purple-500/5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-xl">
              <Cpu className="text-purple-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold">IoT & Protocols</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.iot.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <skill.icon size={24} className={skill.color + " mb-2"} />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
