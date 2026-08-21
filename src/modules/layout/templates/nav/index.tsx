import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import NavLinks from "@modules/layout/components/nav-links"
import SearchModal from "@modules/layout/components/search-modal"

export default async function Nav() {
  const [regions, locales, currentLocale, categories, collectionsResult] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions).catch(() => []),
    listLocales().catch(() => []),
    getLocale().catch(() => null),
    listCategories().catch(() => []),
    listCollections({ fields: "id, handle, title" }).catch(() => ({ collections: [] })),
  ])

  const collections = collectionsResult?.collections || []

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      {/* Top Utility & Status Banner */}
      <div className="bg-slate-950 border-b border-slate-800/80 py-1.5 px-4 font-mono text-[11px] text-slate-400">
        <div className="content-container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden sm:inline">PROD STATUS:</span>
              <strong className="font-semibold text-emerald-300">ONLINE // 24-48H DISPATCH</strong>
            </div>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline text-slate-400">TOLERANCES: ±0.1MM PRECISION</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <LocalizedClientLink
              href="/contact"
              className="text-amber-400/90 hover:text-amber-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Custom STL Quotes</span>
              <span>&rarr;</span>
            </LocalizedClientLink>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="relative h-16 mx-auto border-b duration-200 bg-slate-950/95 backdrop-blur-md border-slate-800 text-slate-100 shadow-lg">
        <nav className="content-container flex items-center justify-between w-full h-full text-xs font-sans">
          {/* Left: Mobile Menu & Brand */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Mobile / Quick Side Menu */}
            <SideMenu
              regions={regions}
              locales={locales}
              currentLocale={currentLocale}
              categories={categories}
              collections={collections}
            />

            {/* Brand Logo */}
            <LocalizedClientLink
              href="/"
              className="font-mono text-lg sm:text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors uppercase flex items-center gap-1.5"
              data-testid="nav-store-link"
            >
              <span className="text-amber-500 font-black">//</span>
              <span>CIRQIT-LABS</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/40 text-amber-400 tracking-wider">
                3D
              </span>
            </LocalizedClientLink>

            {/* Desktop Navigation Links (Store, Categories Mega, Collections, Custom Quote) */}
            <NavLinks categories={categories} collections={collections} />
          </div>

          {/* Right: Search, Account & Cart */}
          <div className="flex items-center gap-2 sm:gap-4 h-full font-mono text-xs">
            {/* Search Modal Trigger */}
            <SearchModal categories={categories} collections={collections} />

            {/* Account Link */}
            <LocalizedClientLink
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-900/60 transition-colors"
              href="/account"
              data-testid="nav-account-link"
            >
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Account</span>
            </LocalizedClientLink>

            {/* Cart Button */}
            <div className="flex items-center">
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="hover:text-amber-400 transition-colors flex gap-2 text-slate-300 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    Cart (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
