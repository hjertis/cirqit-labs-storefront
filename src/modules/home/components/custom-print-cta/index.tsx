import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function CustomPrintCta() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>RAPID ON-DEMAND ADDITIVE MANUFACTURING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Have a Custom STL, CAD Model, or Prototyping Request?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              We provide precision slicing, material consultation (PETG-CF, ASA, TPU, PLA+), and automated production queuing for custom batches and one-off mechanical prototypes.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>STEP / STL / 3MF Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>24-48h Print Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>Strict QC & Dimension Tolerancing</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <LocalizedClientLink
              href="/contact"
              className="py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-sm text-center tracking-wide transition-all shadow-[0_0_25px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 group"
            >
              <span>Submit Model for Quote</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/store"
              className="py-3 px-6 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-xs text-center border border-slate-700 transition-colors"
            >
              Browse Stock Parts & Systems
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </section>
  )
}
