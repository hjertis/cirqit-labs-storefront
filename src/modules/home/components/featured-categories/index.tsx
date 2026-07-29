import { listCategories } from "@lib/data/categories"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function FeaturedCategories() {
  const categories = await listCategories()

  // Filter top-level categories (no parent_category)
  const mainCategories = (categories || []).filter(
    (c) => !c.parent_category && !c.parent_category_id
  )

  const displayCategories =
    mainCategories.length > 0 ? mainCategories : categories || []

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

      {displayCategories && displayCategories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.slice(0, 4).map((cat, index) => {
            const badgeTag =
              (cat.metadata?.tag as string) ||
              `CAT // ${String(index + 1).padStart(2, "0")}`
            const specs =
              (cat.metadata?.specs as string) ||
              (cat.products && cat.products.length > 0
                ? `${cat.products.length} Products Available`
                : "Additive Manufacturing")
            const description =
              cat.description ||
              "Precision 3D printed additive components and custom engineering solutions."
            const isEven = index % 2 === 0
            const tagColor = isEven
              ? "border-amber-500/30 text-amber-400 bg-amber-500/10"
              : "border-cyan-500/30 text-cyan-400 bg-cyan-500/10"

            return (
              <LocalizedClientLink
                key={cat.id}
                href={`/categories/${cat.handle}`}
                className="group relative flex flex-col justify-between bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-amber-500/30 transition-colors">
                      {isEven ? (
                        <svg
                          className="w-6 h-6 text-amber-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2h-1.5a1 1 0 01-1-1V4zM11 14a2 2 0 114 0v1a2 2 0 01-2 2h-1.5a1 1 0 01-1-1v-1zM4 11a2 2 0 110-4h1a2 2 0 012 2v1.5a1 1 0 01-1 1H4zM14 11a2 2 0 110-4h1a2 2 0 012 2v1.5a1 1 0 01-1 1h-1.5z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-cyan-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${tagColor}`}
                    >
                      {badgeTag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="font-mono text-xs text-amber-400/90 mt-1 font-medium">
                      {specs}
                    </p>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between font-mono text-xs text-slate-400 group-hover:text-amber-400 transition-colors">
                  <span>EXPLORE</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </LocalizedClientLink>
            )
          })}
        </div>
      ) : (
        <div className="p-8 rounded-xl bg-slate-900/60 border border-slate-800 text-center font-mono text-xs text-slate-400">
          No categories found.
        </div>
      )}
    </section>
  )
}
