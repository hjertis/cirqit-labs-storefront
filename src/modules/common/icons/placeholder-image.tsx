import React from "react"

const PlaceholderImage: React.FC<{ size?: number | string; className?: string }> = () => {
  return (
    <div className="relative w-full h-full min-h-[80px] flex flex-col items-center justify-center bg-slate-950/90 border border-slate-800/80 rounded-lg p-2 overflow-hidden select-none group-hover:border-amber-500/40 transition-colors">
      {/* CAD Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:10px_10px] opacity-40 pointer-events-none"></div>
      
      {/* 3D Isometric Gridfinity Modular Bin CAD Vector */}
      <svg
        className="w-10 h-10 text-amber-400/90 drop-shadow-[0_0_8px_rgba(245,158,11,0.25)] z-10"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Isometric Outer Box Shell */}
        <path
          d="M32 8L54 20V44L32 56L10 44V20L32 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Front Vertices & Top Lips */}
        <path d="M32 56V32" stroke="currentColor" strokeWidth="1.8" />
        <path d="M54 20L32 32L10 20" stroke="currentColor" strokeWidth="1.8" />
        
        {/* Gridfinity Modular Compartments (Dashed Internal Blueprint Lines) */}
        <path
          d="M32 20L43 26M32 32L43 26M21 26L32 20M21 26L32 32"
          stroke="#10b981"
          strokeWidth="1.2"
          strokeDasharray="2 2"
        />
        
        {/* CAD Dimension Nodes */}
        <circle cx="32" cy="8" r="1.5" fill="#f59e0b" />
        <circle cx="54" cy="20" r="1.5" fill="#f59e0b" />
        <circle cx="10" cy="20" r="1.5" fill="#f59e0b" />
        <circle cx="32" cy="56" r="1.5" fill="#f59e0b" />
      </svg>

      {/* Technical Schematic Labels */}
      <div className="z-10 mt-1 flex flex-col items-center">
        <span className="font-mono text-[9px] font-bold text-amber-400 tracking-wider uppercase">
          GRIDFINITY CAD
        </span>
        <span className="font-mono text-[8px] text-slate-500 tracking-tighter">
          42mm &bull; 0.20mm RES
        </span>
      </div>
    </div>
  )
}

export default PlaceholderImage
