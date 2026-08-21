import { Suspense } from "react"
import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PaginatedProducts from "./paginated-products"

const StoreTemplate = async ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  const [categories, collectionsResult] = await Promise.all([
    listCategories().catch(() => []),
    listCollections({ fields: "id, handle, title" }).catch(() => ({ collections: [] })),
  ])

  const collections = collectionsResult?.collections || []

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-8">
      <div className="content-container">
        {/* Breadcrumb & Section Header */}
        <div className="mb-8 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-500 mb-2">
            <LocalizedClientLink href="/" className="hover:text-amber-400 transition-colors">
              HOME
            </LocalizedClientLink>
            <span>/</span>
            <span className="text-amber-400 font-semibold">STORE CATALOG</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" data-testid="store-page-title">
                Store Catalog & Products
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Precision additive parts, modular workshop storage, and engineered components.
              </p>
            </div>

            <div className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>CALIBRATED DISPATCH</span>
            </div>
          </div>
        </div>

        {/* Main 2-Column Catalog Layout */}
        <div
          className="flex flex-col small:flex-row small:items-start gap-8"
          data-testid="category-container"
        >
          <RefinementList
            sortBy={sort}
            categories={categories}
            collections={collections}
          />
          <div className="w-full">
            <Suspense fallback={<SkeletonProductGrid />}>
              <PaginatedProducts
                sortBy={sort}
                page={pageNumber}
                countryCode={countryCode}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
