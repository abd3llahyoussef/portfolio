"use client";

import { Maximize2, RotateCw, ShieldCheck, Lock, ChevronLeft, ChevronRight } from "lucide-react";

interface BrowserPreviewProps {
  url: string;
  title?: string;
}

export function BrowserPreview({ url, title }: BrowserPreviewProps) {
  // Extract domain for the address bar
  const displayUrl = url.replace(/^https?:\/\//, "");

  return (
    <div className="w-full h-full flex flex-col bg-[#1c1c1c] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Browser Header/Toolbar */}
      <div className="bg-[#2a2a2a] px-4 py-3 flex items-center gap-4 border-b border-white/5">
        {/* Window Controls */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-3 text-white/40">
          <ChevronLeft size={18} />
          <ChevronRight size={18} />
          <RotateCw size={16} />
        </div>

        {/* Address Bar */}
        <div className="flex-grow max-w-2xl mx-auto h-8 bg-black/30 rounded-lg flex items-center px-4 gap-2 border border-white/5 group">
          <Lock size={12} className="text-emerald-400/70" />
          <span className="text-[13px] text-white/60 truncate">{displayUrl}</span>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
            <ShieldCheck size={14} className="text-blue-400" />
          </div>
        </div>

        {/* Extra Actions */}
        <div className="flex items-center gap-3 text-white/40">
          <Maximize2 size={16} />
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-grow relative bg-white">
        <iframe
          src={url}
          title={title || "Live Preview"}
          className="w-full h-full border-none"
          loading="lazy"
        />
        
        {/* Loading Overlay (Optional) */}
        <div className="absolute inset-0 pointer-events-none bg-blue-500/5" />
      </div>
    </div>
  );
}
