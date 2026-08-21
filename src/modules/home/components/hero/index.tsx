import LocalizedClientLink from "@modules/common/components/localized-client-link"
import HeroPreviewCard from "./hero-preview-card"

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] w-full flex items-center justify-center border-b border-slate-800/80 bg-slate-950 overflow-hidden py-12 lg:py-20 px-4">
      {/* Background blueprint grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Decorative technical markers */}
      <div className="absolute top-6 left-8 text-slate-700 font-mono text-xs hidden lg:block">
        + SYS_READY [0x9F4A]
      </div>
      <div className="absolute top-6 right-8 text-slate-700 font-mono text-xs hidden lg:block">
        TOLERANCE: ±0.1MM
      </div>
      <div className="absolute bottom-6 left-8 text-slate-700 font-mono text-xs hidden lg:block">
        AXIS: X/Y/Z HIGH-PRECISION
      </div>
      <div className="absolute bottom-6 right-8 text-slate-700 font-mono text-xs hidden lg:block">
        CIRQIT-LABS PLATFORM v2.4
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
          {/* Tech Badge Header */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 font-mono text-xs tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>PRECISION ADDITIVE MANUFACTURING PLATFORM</span>
          </div>

          {/* Main Headings */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Engineered Additive Parts & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200">Custom 3D Prints</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              Functional engineering components, modular Gridfinity workshop systems, electronics enclosures, and rapid on-demand prototyping.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <LocalizedClientLink
              href="/store"
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2 group"
            >
              <span>Explore Products</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-amber-400 font-mono text-sm tracking-wide border border-slate-700 hover:border-amber-500/50 transition-all flex items-center justify-center gap-2"
            >
              <span>Request Custom Print</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </LocalizedClientLink>
          </div>

          {/* Technical Spec Badges Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 font-mono text-xs text-slate-300">
              <div className="p-2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Resolution</div>
                <div className="font-semibold text-slate-200">0.12 - 0.28mm</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 font-mono text-xs text-slate-300">
              <div className="p-2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.11a2 2 0 01-1.183-1.845V7.833a2 2 0 011.183-1.845l2.42-1.01a6 6 0 013.86.517l.318.158a6 6 0 003.86.517l2.387-.477a2 2 0 012.39 1.963v6.764a2 2 0 01-.962 1.706z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Materials</div>
                <div className="font-semibold text-slate-200">PETG-CF / ASA / TPU</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 font-mono text-xs text-slate-300">
              <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Tolerance</div>
                <div className="font-semibold text-slate-200">±0.1mm Precision</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Blueprint 3D Spec Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroPreviewCard />
        </div>
      </div>
    </div>
  )
}

export default Hero
