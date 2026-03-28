"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className, hover = true, onClick }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hover && "glass-hover",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
