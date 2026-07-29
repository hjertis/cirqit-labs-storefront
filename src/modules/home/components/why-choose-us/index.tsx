const features = [
  {
    id: "in-house",
    tag: "[01] PRODUCTION",
    title: "In-House Production",
    highlight: "Durable, stress-tested functional prints",
    description: "Every component is manufactured on calibrated high-precision print farms using industrial filaments stress-tested for impact, load, and thermal resistance.",
    borderColor: "hover:border-amber-500/50",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: "rapid-turnaround",
    tag: "[02] LOGISTICS",
    title: "Rapid Turnaround",
    highlight: "Fast local processing & shipping",
    description: "Automated production queuing and optimized slicing pipelines allow us to process, print, and dispatch your orders with minimal lead times.",
    borderColor: "hover:border-cyan-500/50",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "cad-slicing",
    tag: "[03] ENGINEERING",
    title: "Custom CAD & Slicing",
    highlight: "Optimized infill & wall thickness for strength",
    description: "We carefully tune layer heights, wall counts, perimeter order, and load-path oriented infill geometries tailored to your precise mechanical requirements.",
    borderColor: "hover:border-amber-500/50",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-2">
          // PRECISION & QUALITY ASSURANCE
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Why Choose Cirqit-Labs Additive
        </h2>
        <p className="text-slate-400 text-sm mt-3">
          Industrial-grade manufacturing principles applied to every print, prototype, and modular order.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item) => (
          <div
            key={item.id}
            className={`relative bg-slate-900/60 border border-slate-800 ${item.borderColor} rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  {item.icon}
                </div>
                <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                  {item.tag}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <div className="font-mono text-xs text-amber-400 mt-1 font-semibold">
                  {item.highlight}
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mt-2">
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between font-mono text-[11px] text-slate-500">
              <span>STATUS: VERIFIED</span>
              <span>QC // PASS</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
