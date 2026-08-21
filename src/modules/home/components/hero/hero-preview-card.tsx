"use client"

import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const materials = [
  {
    id: "petg-cf",
    name: "PETG Carbon Fiber",
    tag: "STRUCTURAL GRADE",
    color: "from-amber-500 to-amber-700",
    textColor: "text-amber-400",
    border: "border-amber-500/40",
    temp: "80°C HDT",
    tensile: "62 MPa",
    layer: "0.16mm High Detail",
    bestFor: "Mechanical brackets, drone frames, tool holders",
  },
  {
    id: "asa",
    name: "ASA Weatherproof",
    tag: "UV & HEAT RESISTANT",
    color: "from-cyan-500 to-cyan-700",
    textColor: "text-cyan-400",
    border: "border-cyan-500/40",
    temp: "95°C HDT",
    tensile: "48 MPa",
    layer: "0.20mm Functional",
    bestFor: "Outdoor fixtures, automotive mounts, solar gear",
  },
  {
    id: "tpu",
    name: "TPU 95A Elastomer",
    tag: "IMPACT ABSORBING",
    color: "from-emerald-500 to-emerald-700",
    textColor: "text-emerald-400",
    border: "border-emerald-500/40",
    temp: "Flexible",
    tensile: "35 MPa",
    layer: "0.24mm High Flow",
    bestFor: "Gaskets, protective bumpers, vibration dampers",
  },
  {
    id: "pla-plus",
    name: "PLA+ High Precision",
    tag: "ULTRA RIGID",
    color: "from-purple-500 to-purple-700",
    textColor: "text-purple-400",
    border: "border-purple-500/40",
    temp: "55°C HDT",
    tensile: "55 MPa",
    layer: "0.12mm Micro Precision",
    bestFor: "Gridfinity modular bins, desk gear, enclosures",
  },
]

export default function HeroPreviewCard() {
  const [selectedMat, setSelectedMat] = useState(materials[0])

  return (
    <div className="relative w-full max-w-lg lg:max-w-none">
      {/* Glow aura */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-75 animate-pulse" />

      {/* Main Spec Card Container */}
      <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl p-6 backdrop-blur-xl overflow-hidden">
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-white uppercase">// SYSTEM SIMULATOR</span>
          </div>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-400">
            PRECISION CALIBRATED
          </span>
        </div>

        {/* Blueprint Visual Showcase Canvas */}
        <div className="relative h-48 sm:h-56 rounded-xl bg-slate-950 border border-slate-800 p-4 flex flex-col justify-between overflow-hidden group">
          {/* Blueprint Grid Lines */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />

          {/* Interactive Layer Visual */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-36 h-36 rounded-2xl border-2 border-dashed border-amber-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <div className="w-24 h-24 rounded-xl border border-cyan-500/40 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-2 text-center">
                <svg className="w-8 h-8 text-amber-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="font-mono text-[9px] text-slate-300 mt-1 font-semibold">
                  3D SLICE: OK
                </span>
              </div>
            </div>
          </div>

          {/* Top Info overlay */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>NOZZLE: 0.4MM HARDENED</span>
            <span>BED TEMP: 65°C - 100°C</span>
          </div>

          {/* Bottom Info overlay */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
            <span className={`px-2 py-0.5 rounded bg-slate-900/90 border ${selectedMat.border} ${selectedMat.textColor} font-semibold`}>
              {selectedMat.name}
            </span>
            <span className="text-slate-400">TOL: ±0.1MM</span>
          </div>
        </div>

        {/* Material Selector Buttons */}
        <div className="mt-5">
          <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-2">
            // Select Production Filament
          </div>
          <div className="grid grid-cols-2 gap-2">
            {materials.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedMat(m)}
                className={`flex flex-col text-left p-2.5 rounded-lg border transition-all ${
                  selectedMat.id === m.id
                    ? "bg-slate-950 border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                    : "bg-slate-950/50 border-slate-800 hover:border-slate-700 text-slate-400"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-xs font-bold ${selectedMat.id === m.id ? m.textColor : "text-slate-200"}`}>
                    {m.name.split(" ")[0]}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500">{m.temp}</span>
                </div>
                <span className="text-[10px] text-slate-400 truncate mt-0.5">{m.tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Real-time Material Spec Output */}
        <div className="mt-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-slate-500">Tensile Strength:</span>
            <span className="font-semibold text-white">{selectedMat.tensile}</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-slate-500">Layer Height:</span>
            <span className="font-semibold text-amber-400">{selectedMat.layer}</span>
          </div>
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-slate-400 text-[11px]">Best For: {selectedMat.bestFor}</span>
          </div>
        </div>

        {/* Direct Action Link */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <LocalizedClientLink
            href="/store"
            className="flex-1 py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs text-center font-semibold transition-colors"
          >
            Explore Catalog &rarr;
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/contact"
            className="flex-1 py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs text-center font-bold transition-colors"
          >
            Order Custom Print
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}
