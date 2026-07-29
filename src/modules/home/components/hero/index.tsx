import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] w-full flex items-center justify-center border-b border-slate-800/80 bg-slate-950 overflow-hidden py-16 px-4">
      {/* Background blueprint grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative technical markers */}
      <div className="absolute top-8 left-8 text-slate-700 font-mono text-xs hidden sm:block">
        + SYS_READY [0x9F4A]
      </div>
      <div className="absolute top-8 right-8 text-slate-700 font-mono text-xs hidden sm:block">
        TOLERANCE: &plusmn;0.1MM
      </div>
      <div className="absolute bottom-8 left-8 text-slate-700 font-mono text-xs hidden sm:block">
        AXIS: X/Y/Z HIGH-PRECISION
      </div>
      <div className="absolute bottom-8 right-8 text-slate-700 font-mono text-xs hidden sm:block">
        CIRQIT-LABS ENGINE v2.4
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Tech Badge Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 font-mono text-xs tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.1)]">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>CIRQIT-LABS ADDITIVE MANUFACTURING PLATFORM</span>
        </div>

        {/* Main Headings */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Precision Additive Manufacturing & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200">Custom Prints</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Engineered functional parts, modular workshop storage, and rapid custom prototyping.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
          <LocalizedClientLink
            href="/store"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 group"
          >
            <span>Browse Products</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </LocalizedClientLink>

          <LocalizedClientLink
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-amber-400 font-mono text-sm tracking-wide border border-slate-700 hover:border-amber-500/50 transition-all flex items-center justify-center gap-2"
          >
            <span>Request Custom Print</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </LocalizedClientLink>
        </div>

        {/* Technical Spec Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mt-8 pt-8 border-t border-slate-800/80">
          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 font-mono text-xs text-slate-300">
            <div className="p-2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Resolution</div>
              <div className="font-semibold text-slate-200">0.12mm - 0.28mm Layer Resolution</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 font-mono text-xs text-slate-300">
            <div className="p-2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.11a2 2 0 01-1.183-1.845V7.833a2 2 0 011.183-1.845l2.42-1.01a6 6 0 013.86.517l.318.158a6 6 0 003.86.517l2.387-.477a2 2 0 012.39 1.963v6.764a2 2 0 01-.962 1.706z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Materials</div>
              <div className="font-semibold text-slate-200">PLA / PETG / ASA / TPU Compatible</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 font-mono text-xs text-slate-300">
            <div className="p-2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Accuracy</div>
              <div className="font-semibold text-slate-200">Precision Tolerances</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

