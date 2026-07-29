"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Code, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { ProjectModal } from "@/components/ui/ProjectModal";

const projects = [
  {
    title: "AmbientHome",
    description: "End-to-end IoT home climate monitoring system. ESP8266 & DHT11 sensors collect temperature (°C/°F) and humidity data, transmitting over BearSSL TLS-encrypted MQTT (HiveMQ Cloud) to a Node.js/PostgreSQL backend with real-time WebSocket streaming and interactive Chart.js visualization.",
    tags: ["React 19", "Node.js", "TypeScript", "ESP8266", "MQTT (TLS)", "WebSockets", "PostgreSQL", "Chart.js"],
    github: "https://github.com/abd3llahyoussef",
    live: "#",
    videoUrl: "https://youtu.be/FYobw3x6B1s",
    image: "https://img.youtube.com/vi/FYobw3x6B1s/maxresdefault.jpg"
  },
  {
    title: "IoT Motor Health & Safety System",
    description: "Industrial IoT (IIoT) equipment monitoring & sensor fusion system using a two-tier MCU architecture (Arduino + ESP8266 over UART). Tracks machine condition (vibration & bearing wear), projects Remaining Useful Life (RUL), and triggers zero-latency safety alerts for flame hazards over BearSSL TLS MQTT, WebSockets, and a React HMI dashboard.",
    tags: ["Arduino", "ESP8266", "Sensor Fusion", "MQTT (TLS)", "WebSockets", "Node.js", "PostgreSQL", "React"],
    github: "https://github.com/abd3llahyoussef",
    live: "#",
    videoUrl: "https://youtu.be/zrR7fuka7OA",
    image: "https://img.youtube.com/vi/zrR7fuka7OA/maxresdefault.jpg"
  },
  {
    title: "Modbus TCP & MQTT Industrial Dashboard",
    description: "Industrial-grade real-time monitoring and control dashboard bridging Modbus TCP field devices (PLCs, Arduino, ESP32) with web applications & MQTT brokers. Supports holding register/coil read & write, dynamic auto-polling, real-time WebSocket events, and multi-format (Hex/Dec/Binary) data displays.",
    tags: ["Modbus TCP", "MQTT", "WebSockets", "Node.js", "Express", "TypeScript", "React 19", "Vite"],
    github: "https://github.com/abd3llahyoussef/Modbus-Integration",
    live: "#",
    videoUrl: "https://youtu.be/sRb1eCZUwA0",
    image: "https://img.youtube.com/vi/sRb1eCZUwA0/maxresdefault.jpg"
  },
  {
    title: "Furniture E-Commerce",
    description: "A comprehensive full-stack e-commerce platform for high-end furniture. Features Google OAuth, RESTful APIs, session-based cart management, and a robust admin dashboard.",
    tags: ["React", "Express", "PostgreSQL", "Passport.js", "JWT"],
    github: "https://github.com/abd3llahyoussef",
    live: "#",
    videoUrl: "https://youtu.be/G_ORIVZm8mE",
    image: "https://img.youtube.com/vi/G_ORIVZm8mE/maxresdefault.jpg"
  },
  {
    title: "Real-time Chat App",
    description: "A high-performance messaging application featuring real-time communication via Redis Pub/Sub, JWT-secured authentication, and persistent storage with MongoDB.",
    tags: ["Next.js", "Node.js", "MongoDB", "Redis", "JWT"],
    github: "https://github.com/abd3llahyoussef",
    live: "#",
    videoUrl: "https://youtu.be/YbKSs9u2xqg",
    image: "https://img.youtube.com/vi/YbKSs9u2xqg/maxresdefault.jpg"
  },
  {
    title: "Query Builder App",
    description: "A full-stack query builder application featuring query building via AI, JWT-secured authentication, and persistent storage with postgresql with Prisma.",
    tags: ["Next.js", "Nest.js", "PostgreSQL", "Prisma", "JWT"],
    github: "https://github.com/abd3llahyoussef",
    live: "#",
    videoUrl: "https://youtu.be/w5YgHiIQQWI",
    image: "https://img.youtube.com/vi/w5YgHiIQQWI/maxresdefault.jpg"
  },
  {
    title: "Aerway — Flight Reservation",
    description: "A professional-grade flight booking platform featuring seat selection, dependent management, and passport validation. Built with a focus on real-world business logic and seamless UX.",
    tags: ["React.js", "Nest.js", "PostgreSQL", "Prisma", "Docker", "AWS"],
    github: "https://github.com/abd3llahyoussef",
    live: "#",
    videoUrl: "https://youtu.be/xQcL2c71NqM",
    image: "https://img.youtube.com/vi/xQcL2c71NqM/maxresdefault.jpg"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A selection of my recent work, showcasing full-stack capabilities and modern UI/UX principles.
          </p>
        </div>
        <a href="#" className="flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors mb-2">
          View All Projects <ExternalLink size={18} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <GlassCard
            key={index}
            className="group overflow-hidden p-0 border-white/5 flex flex-col h-full cursor-pointer"
            onClick={() => openProject(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
              {project.videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-4 rounded-full glass bg-white/20 backdrop-blur-xl scale-90 group-hover:scale-100 transition-transform">
                    <Play className="text-white fill-white" size={32} />
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {tag}
                  </span>
                ))}
                {(project as any).isLive && (
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                <a href={project.github} className="p-2 glass hover:bg-white/10 rounded-lg transition-colors" title="GitHub">
                  <FaGithub size={20} />
                </a>
                <button
                  onClick={() => openProject(project)}
                  className="ml-auto text-sm font-semibold flex items-center gap-1 text-white/50 group-hover:text-white transition-colors"
                >
                  Details <Code size={16} />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
