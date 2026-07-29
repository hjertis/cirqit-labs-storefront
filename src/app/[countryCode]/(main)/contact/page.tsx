import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request Custom Print // Cirqit-Labs 3D",
  description: "Submit custom 3D printing, CAD design, and rapid additive prototyping quote requests.",
}

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>CUSTOM MANUFACTURING INTENTION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Request Custom Print & Prototyping
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Submit your part specifications, STEP/STL CAD files, or custom manufacturing requirements for an engineering review and price quote.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                  Full Name / Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan / Apex Robotics"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 placeholder-slate-600 font-sans text-sm focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="alex@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 placeholder-slate-600 font-sans text-sm focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                  Part Category
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 font-sans text-sm focus:outline-none transition-colors">
                  <option>Custom Functional Part (Bracket/Mount/Enclosure)</option>
                  <option>Gridfinity Modular Storage Component</option>
                  <option>Rapid Prototyping & Short-Run Batch</option>
                  <option>Hardware Assembly / Heat-Set Inserts</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                  Target Material
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 font-sans text-sm focus:outline-none transition-colors">
                  <option>PETG (Durable & Chemical Resistant)</option>
                  <option>PLA+ (High-Precision Rigid Parts)</option>
                  <option>ASA (UV & Outdoor Weatherproof)</option>
                  <option>TPU (Flexible / Shock-Absorbing)</option>
                  <option>PETG-CF (Carbon Fiber Reinforced High-Temp)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                  Desired Layer Resolution
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 font-sans text-sm focus:outline-none transition-colors">
                  <option>0.16mm (Fine Detail & Smooth Finish)</option>
                  <option>0.20mm (Standard Precision - Recommended)</option>
                  <option>0.28mm (Draft Speed & Heavy Walls)</option>
                  <option>0.12mm (Ultra High Resolution)</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                  Infill Density & Wall Count
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 font-sans text-sm focus:outline-none transition-colors">
                  <option>Standard (20% Infill / 3 Perimeters)</option>
                  <option>Heavy Load (40% Gyroid / 4 Perimeters)</option>
                  <option>Solid Mechanical (100% Infill / 6+ Walls)</option>
                  <option>Lightweight (15% Infill / 2 Perimeters)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                Engineering Notes & Dimensions
              </label>
              <textarea
                rows={4}
                placeholder="Describe part dimensions, critical tolerances, mounting hole specs, or special environmental requirements..."
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-amber-500 text-slate-100 placeholder-slate-600 font-sans text-sm focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <div className="p-4 rounded-lg bg-slate-950/80 border border-dashed border-slate-800 flex flex-col items-center justify-center text-center gap-2">
              <svg className="w-8 h-8 text-amber-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <div className="font-mono text-xs text-slate-300">
                DRAG & DROP CAD FILES (.STL, .STEP, .3MF)
              </div>
              <div className="text-[11px] text-slate-500">
                Max file size: 50MB per upload
              </div>
            </div>

            <button
              type="button"
              className="w-full py-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2 mt-2"
            >
              <span>SUBMIT CUSTOM PRINT REQUEST</span>
              <span>&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
