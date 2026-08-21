"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SortProducts, { SortOptions } from "./sort-products"

type RefinementListProps = {
  sortBy: SortOptions
  categories?: HttpTypes.StoreProductCategory[] | null
  collections?: HttpTypes.StoreCollection[] | null
  search?: boolean
  "data-testid"?: string
}

const RefinementList = ({
  sortBy,
  categories = [],
  collections = [],
  "data-testid": dataTestId,
}: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [mobileOpen, setMobileOpen] = useState(false)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  // Filter top-level categories
  const mainCategories = (categories || []).filter(
    (c) => !c.parent_category && !c.parent_category_id
  )
  const displayCategories = mainCategories.length > 0 ? mainCategories : categories || []

  return (
    <div className="w-full small:w-64 small:min-w-[250px] shrink-0 mb-8 small:mb-0">
      {/* Mobile Filter Toggle */}
      <div className="small:hidden mb-4">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>FILTER & SORT CATALOG</span>
          </div>
          <span className="text-amber-400 font-bold">{mobileOpen ? "▲ HIDE" : "▼ SHOW"}</span>
        </button>
      </div>

      {/* Filter Content */}
      <div
        className={`${
          mobileOpen ? "block" : "hidden"
        } small:block bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 space-y-6 backdrop-blur-md`}
      >
        {/* Sort Group */}
        <div>
          <div className="font-mono text-[11px] text-amber-400 uppercase tracking-widest mb-3 flex items-center justify-between">
            <span>// SORTING</span>
          </div>
          <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} data-testid={dataTestId} />
        </div>

        {/* Categories Refinement */}
        {displayCategories.length > 0 && (
          <div className="pt-5 border-t border-slate-800/80">
            <div className="font-mono text-[11px] text-amber-400 uppercase tracking-widest mb-3">
              // CATEGORIES
            </div>
            <ul className="space-y-1.5 font-sans text-xs">
              <li>
                <LocalizedClientLink
                  href="/store"
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors ${
                    pathname.endsWith("/store")
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <span>All Products</span>
                  <span className="font-mono text-[10px] text-slate-600">&bull;</span>
                </LocalizedClientLink>
              </li>
              {displayCategories.map((cat) => {
                const isActive = pathname.includes(`/categories/${cat.handle}`)
                return (
                  <li key={cat.id}>
                    <LocalizedClientLink
                      href={`/categories/${cat.handle}`}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors ${
                        isActive
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className="font-mono text-[10px] text-slate-600">&rarr;</span>
                    </LocalizedClientLink>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {/* Collections Refinement */}
        {collections && collections.length > 0 && (
          <div className="pt-5 border-t border-slate-800/80">
            <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest mb-3">
              // COLLECTIONS
            </div>
            <ul className="space-y-1.5 font-sans text-xs">
              {collections.map((col) => {
                const isActive = pathname.includes(`/collections/${col.handle}`)
                return (
                  <li key={col.id}>
                    <LocalizedClientLink
                      href={`/collections/${col.handle}`}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                      }`}
                    >
                      <span className="truncate">{col.title}</span>
                      <span className="font-mono text-[10px] text-slate-600">&rarr;</span>
                    </LocalizedClientLink>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {/* Technical Specs Help CTA */}
        <div className="pt-5 border-t border-slate-800/80">
          <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 font-mono text-[11px] text-slate-400 space-y-2">
            <div className="text-white font-bold text-xs">// CUSTOM PRINT SERVICE</div>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Don&apos;t see what you need? We print custom STLs on demand in PETG-CF, ASA, TPU, and PLA.
            </p>
            <LocalizedClientLink
              href="/contact"
              className="inline-block text-amber-400 hover:text-amber-300 font-bold text-[11px] pt-1"
            >
              Get Custom Quote &rarr;
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefinementList
