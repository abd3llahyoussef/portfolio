"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProfilePicture() {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
      {/* Outer rotating dash ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-[2px] border-dashed border-blue-500/40"
      />
      
      {/* Middle rotating gradient ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-violet-500/50 border-t-violet-400 border-l-transparent"
      />
      
      {/* Inner glowing effect */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-5 rounded-full bg-blue-500/10 blur-md"
      />
      
      {/* Profile Image */}
      <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/20 z-10 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
        <Image
          src="/profile.jpg"
          alt="Abdallah Youssef"
          fill
          className="object-cover object-top hover:scale-110 transition-transform duration-700 ease-in-out"
          sizes="192px"
          priority
        />
      </div>
    </div>
  );
}
