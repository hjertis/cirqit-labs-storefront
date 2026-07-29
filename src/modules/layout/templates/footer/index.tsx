import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300 w-full font-sans">
      <div className="content-container flex flex-col w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800/80">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <LocalizedClientLink
              href="/"
              className="font-mono text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors uppercase flex items-center gap-1.5"
            >
              <span className="text-amber-500 font-black">//</span>
              <span>CIRQIT-LABS</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/40 text-amber-400 tracking-wider">3D</span>
            </LocalizedClientLink>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Precision Additive Manufacturing & Rapid Custom Prototyping Platform. Engineered functional components, modular workshop storage, and custom print services.
            </p>
            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>ALL PRINTER SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-amber-400">
                  // Categories
                </span>
                <ul className="flex flex-col gap-2 text-slate-400" data-testid="footer-categories">
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) return null
                    return (
                      <li key={c.id}>
                        <LocalizedClientLink
                          className="hover:text-amber-400 transition-colors"
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-amber-400">
                  // Collections
                </span>
                <ul className="flex flex-col gap-2 text-slate-400">
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-amber-400 transition-colors"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-amber-400">
                // Platform
              </span>
              <ul className="flex flex-col gap-2 text-slate-400">
                <li>
                  <LocalizedClientLink href="/store" className="hover:text-amber-400 transition-colors">
                    Store Catalog
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/contact" className="hover:text-amber-400 transition-colors">
                    Custom Quote Request
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/account" className="hover:text-amber-400 transition-colors">
                    Customer Account
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} CIRQIT-LABS 3D MANUFACTURING. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <LocalizedClientLink href="/privacy" className="hover:text-amber-400 transition-colors text-slate-400">
              Privacy Policy
            </LocalizedClientLink>
            <span>&bull;</span>
            <LocalizedClientLink href="/terms" className="hover:text-amber-400 transition-colors text-slate-400">
              Terms of Service
            </LocalizedClientLink>
            <span>&bull;</span>
            <span>RES: 0.12MM-0.28MM</span>
            <span>&bull;</span>
            <span>TOL: &plusmn;0.1MM</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
