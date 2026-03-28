"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export function Background() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Enhanced particle system with wandering motion
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      // Initial positions
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      // Target paths (random wandering)
      pathX: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
      pathY: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
    }));
  }, []);

  if (!mounted) return null;

  return (
    <div className="gradient-bg overflow-hidden pointer-events-none">
      {/* Tech Grid */}
      <div className="grid-pattern" />

      {/* Floating Particles (Random Wandering) */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            opacity: 0,
            x: `${p.startX}vw`,
            y: `${p.startY}vh`
          }}
          animate={{
            opacity: [0, 0.8, 0],
            x: p.pathX.map(v => `${v}vw`),
            y: p.pathY.map(v => `${v}vh`),
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
          }}
          className="bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.9)]"
        />
      ))}

      {/* Advanced Gradient Blobs */}
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="gradient-blob bg-blue-600/15 top-[-10%] left-[-10%]"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, -100, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="gradient-blob bg-violet-600/15 bottom-[-10%] right-[-10%]"
      />

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="gradient-blob bg-emerald-500/10 top-[30%] left-[20%]"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -80, 80, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="gradient-blob bg-cyan-400/10 bottom-[20%] left-[40%]"
      />

      {/* Subtle overlay to soften everything */}
      <div className="absolute inset-0 bg-[#020617]/20 backdrop-blur-[2px]" />
    </div>
  );
}
