import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function CategoryNavStrip() {
  const [categories, collectionsResult] = await Promise.all([
    listCategories().catch(() => []),
    listCollections({ fields: "id, handle, title" }).catch(() => ({ collections: [] })),
  ])

  const collections = collectionsResult?.collections || []

  // Filter top-level categories
  const mainCategories = (categories || []).filter(
    (c) => !c.parent_category && !c.parent_category_id
  )

  const displayCategories = mainCategories.length > 0 ? mainCategories : categories || []

  return (
    <div className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase tracking-wider shrink-0">
          <span className="text-amber-500">//</span>
          <span>QUICK DISCOVERY:</span>
        </div>

        {/* Scrollable quick tags */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <LocalizedClientLink
            href="/store"
            className="shrink-0 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 font-mono text-xs transition-colors flex items-center gap-1.5"
          >
            <span>All Products</span>
          </LocalizedClientLink>

          {displayCategories.map((cat) => (
            <LocalizedClientLink
              key={cat.id}
              href={`/categories/${cat.handle}`}
              className="shrink-0 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 font-mono text-xs transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
              <span>{cat.name}</span>
            </LocalizedClientLink>
          ))}

          {collections.map((col) => (
            <LocalizedClientLink
              key={col.id}
              href={`/collections/${col.handle}`}
              className="shrink-0 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 font-mono text-xs transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
              <span>{col.title}</span>
            </LocalizedClientLink>
          ))}

          <LocalizedClientLink
            href="/contact"
            className="shrink-0 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-400 font-mono text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <span>+ Custom 3D Request</span>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}
