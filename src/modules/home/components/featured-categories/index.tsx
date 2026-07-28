import LocalizedClientLink from "@modules/common/components/localized-client-link"

const categories = [
  {
    id: "functional-parts",
    title: "Custom Functional Parts",
    badge: "CAT // 01",
    specs: "Brackets, mounts, enclosures",
    description: "High-strength mechanical components engineered for load-bearing applications and custom machine fitments.",
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2h-1.5a1 1 0 01-1-1V4zM11 14a2 2 0 114 0v1a2 2 0 01-2 2h-1.5a1 1 0 01-1-1v-1zM4 11a2 2 0 110-4h1a2 2 0 012 2v1.5a1 1 0 01-1 1H4zM14 11a2 2 0 110-4h1a2 2 0 012 2v1.5a1 1 0 01-1 1h-1.5z" />
      </svg>
    ),
    tagColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
  },
  {
    id: "gridfinity-storage",
    title: "Gridfinity & Modular Storage",
    badge: "CAT // 02",
    specs: "Bins, tool organizers, baseplates",
    description: "Standardized modular storage ecosystem engineered for maximum workshop efficiency and organization.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    tagColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
  },
  {
    id: "prototyping",
    title: "Prototyping & Short Runs",
    badge: "CAT // 03",
    specs: "Engineering-grade materials",
    description: "Rapid iteration cycles using ASA, PETG-CF, and TPU for functional stress-testing and batch evaluation.",
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.11a2 2 0 01-1.183-1.845V7.833a2 2 0 011.183-1.845l2.42-1.01a6 6 0 013.86.517l.318.158a6 6 0 003.86.517l2.387-.477a2 2 0 012.39 1.963v6.764a2 2 0 01-.962 1.706z" />
      </svg>
    ),
    tagColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
  },
  {
    id: "hardware-accessories",
    title: "Hardware & Accessories",
    badge: "CAT // 04",
    specs: "Fasteners, heat-set inserts, magnets",
    description: "Pre-verified mechanical hardware, brass threaded heat-set inserts, and high-strength neodymium magnets.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
    tagColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-2">
            // MANUFACTURING CAPABILITIES
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Featured Product Categories
          </h2>
        </div>
        <LocalizedClientLink
          href="/store"
          className="font-mono text-xs text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
        >
          <span>VIEW ALL CATEGORIES</span>
          <span>&rarr;</span>
        </LocalizedClientLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <LocalizedClientLink
            key={cat.id}
            href="/store"
            className="group relative flex flex-col justify-between bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-amber-500/30 transition-colors">
                  {cat.icon}
                </div>
                <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${cat.tagColor}`}>
                  {cat.badge}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="font-mono text-xs text-amber-400/90 mt-1 font-medium">
                  {cat.specs}
                </p>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between font-mono text-xs text-slate-400 group-hover:text-amber-400 transition-colors">
              <span>EXPLORE</span>
              <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </LocalizedClientLink>
        ))}
      </div>
    </section>
  )
}
