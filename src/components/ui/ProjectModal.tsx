"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Globe, Play, Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { BrowserPreview } from "./BrowserPreview";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  videoUrl?: string;
  image?: string;
  isLive?: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [viewMode, setViewMode] = useState<"media" | "live">("media");

  // Reset view mode when project changes or modal opens
  useEffect(() => {
    if (isOpen) setViewMode("media");
  }, [isOpen, project]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  // Extract YouTube ID if possible
  const getYouTubeId = (url?: string) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]{11})/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(project.videoUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl glass rounded-3xl overflow-hidden border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 glass hover:bg-white/10 rounded-full z-10 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
              {/* Video/Image Section */}
              <div className="lg:w-3/5 bg-black/40 flex items-center justify-center aspect-video lg:aspect-auto overflow-hidden">
                {viewMode === "live" && project.live ? (
                  <div className="w-full h-full p-4">
                    <BrowserPreview url={project.live} title={project.title} />
                  </div>
                ) : videoId ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-white/20">No preview available</div>
                )}
              </div>

              {/* Content Section */}
              <div className="lg:w-2/5 p-8 overflow-y-auto flex flex-col custom-scrollbar">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
                  {project.isLive && (
                    <div className="flex p-1 bg-white/5 rounded-xl border border-white/5 mb-4">
                      <button
                        onClick={() => setViewMode("media")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all ${viewMode === "media" ? "bg-white/10 text-white shadow-lg" : "text-white/40 hover:text-white/60"}`}
                      >
                        {videoId ? <Play size={16} /> : <ImageIcon size={16} />} Media
                      </button>
                      <button
                        onClick={() => setViewMode("live")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all ${viewMode === "live" ? "bg-blue-500/20 text-blue-400 shadow-lg border border-blue-500/20" : "text-white/40 hover:text-white/60"}`}
                      >
                        <Globe size={16} /> Live Demo
                      </button>
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 glass hover:bg-white/10 rounded-xl font-semibold transition-all"
                      >
                        <FaGithub size={20} /> GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass hover:bg-white/10 rounded-xl transition-all text-blue-400"
                        title="Open in new tab"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
