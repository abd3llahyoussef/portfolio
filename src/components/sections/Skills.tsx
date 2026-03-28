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
  Database
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
  SiTypescript
} from "react-icons/si";

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
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", icon: Terminal, color: "text-gray-400" },
    { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "Redis", icon: SiRedis, color: "text-red-400" },
  ],
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable, and high-performance applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <GlassCard className="flex flex-col gap-8 bg-blue-500/5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Layout className="text-blue-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold">Frontend Development</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.frontend.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <skill.icon size={24} className={skill.color + " mb-2"} />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col gap-8 bg-emerald-500/5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
              <Server className="text-emerald-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold">Backend Development</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.backend.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <skill.icon size={24} className={skill.color + " mb-2"} />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
