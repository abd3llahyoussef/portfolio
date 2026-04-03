"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa6";
import { Background } from "../ui/Background";
import { ProfilePicture } from "../ui/ProfilePicture";

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl text-center z-10"
      >
        <motion.div variants={item}>
          <ProfilePicture />
        </motion.div>

        <motion.div
          variants={item}
          className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide uppercase"
        >
          Full Stack Developer
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Hi, I'm <span className="text-gradient">Abdallah Youssef</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting high-performance, visually stunning web experiences with
          <span className="text-foreground"> React, Next.js, and NestJS</span>.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 glow-sm hover:glow-md transition-all duration-300"
          >
            View Projects <ArrowRight size={20} />
          </a>
          <a
            href="https://github.com/abd3llahyoussef"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass text-foreground rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
          >
            <FaGithub size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdallah-youssef-578759207"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass text-foreground rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1MyAGxXakyYENLJOVX1IurHnDYV8l6PJP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass text-foreground rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
          >
            <FaFile size={20} /> My Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50"
      >
        <ArrowRight size={24} className="rotate-90" />
      </motion.div>
    </section>
  );
}
