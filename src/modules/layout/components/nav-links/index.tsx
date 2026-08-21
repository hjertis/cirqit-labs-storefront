"use client"

import { useState } from "react"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type NavLinksProps = {
  categories?: HttpTypes.StoreProductCategory[] | null
  collections?: HttpTypes.StoreCollection[] | null
}

export default function NavLinks({ categories = [], collections = [] }: NavLinksProps) {
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)

  // Top level categories
  const topCategories = (categories || []).filter(
    (c) => !c.parent_category && !c.parent_category_id
  )
  const displayCategories = topCategories.length > 0 ? topCategories : categories || []

  return (
    <div className="hidden lg:flex items-center gap-1 font-mono text-xs">
      {/* Store All */}
      <LocalizedClientLink
        href="/store"
        className="px-3 py-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-900/60 transition-colors"
      >
        Store
      </LocalizedClientLink>

      {/* Categories Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setCategoriesOpen(true)}
        onMouseLeave={() => setCategoriesOpen(false)}
      >
        <button
          type="button"
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
            categoriesOpen
              ? "text-amber-400 bg-slate-900/80"
              : "text-slate-300 hover:text-amber-400 hover:bg-slate-900/60"
          }`}
        >
          <span>Categories</span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              categoriesOpen ? "rotate-180 text-amber-400" : "text-slate-500"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {categoriesOpen && (
          <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-2 z-50 animate-fade-in-top backdrop-blur-md">
            <div className="font-mono text-[10px] text-amber-400 uppercase tracking-widest px-2.5 py-1 mb-1 border-b border-slate-800">
              // PRODUCT CATEGORIES
            </div>
            <div className="space-y-1">
              {displayCategories.length > 0 ? (
                displayCategories.map((cat) => (
                  <LocalizedClientLink
                    key={cat.id}
                    href={`/categories/${cat.handle}`}
                    onClick={() => setCategoriesOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-950/80 transition-colors group"
                  >
                    <span className="text-xs font-medium">{cat.name}</span>
                    <span className="text-[10px] text-slate-600 group-hover:text-amber-400 font-mono">
                      &rarr;
                    </span>
                  </LocalizedClientLink>
                ))
              ) : (
                <div className="p-3 text-center text-xs text-slate-500">No categories found</div>
              )}
            </div>
            <div className="mt-2 pt-2 border-t border-slate-800">
              <LocalizedClientLink
                href="/store"
                onClick={() => setCategoriesOpen(false)}
                className="block text-center py-1 text-[11px] text-slate-400 hover:text-amber-400 transition-colors"
              >
                View all categories &rarr;
              </LocalizedClientLink>
            </div>
          </div>
        )}
      </div>

      {/* Collections Dropdown */}
      {collections && collections.length > 0 && (
        <div
          className="relative"
          onMouseEnter={() => setCollectionsOpen(true)}
          onMouseLeave={() => setCollectionsOpen(false)}
        >
          <button
            type="button"
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
              collectionsOpen
                ? "text-cyan-400 bg-slate-900/80"
                : "text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60"
            }`}
          >
            <span>Collections</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                collectionsOpen ? "rotate-180 text-cyan-400" : "text-slate-500"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Collections Dropdown Menu */}
          {collectionsOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-2 z-50 animate-fade-in-top backdrop-blur-md">
              <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest px-2.5 py-1 mb-1 border-b border-slate-800">
                // FEATURED COLLECTIONS
              </div>
              <div className="space-y-1">
                {collections.slice(0, 6).map((col) => (
                  <LocalizedClientLink
                    key={col.id}
                    href={`/collections/${col.handle}`}
                    onClick={() => setCollectionsOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-950/80 transition-colors group"
                  >
                    <span className="text-xs font-medium">{col.title}</span>
                    <span className="text-[10px] text-slate-600 group-hover:text-cyan-400 font-mono">
                      &rarr;
                    </span>
                  </LocalizedClientLink>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Custom Quote Request CTA */}
      <LocalizedClientLink
        href="/contact"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 transition-all font-semibold ml-1"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
        <span>Custom Quote</span>
      </LocalizedClientLink>
    </div>
  )
}
