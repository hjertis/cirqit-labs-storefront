import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { HttpTypes } from "@medusajs/types"

export default async function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
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
            <LocalizedClientLink href="/" className="hover:text-cyan-400 transition-colors">
              HOME
            </LocalizedClientLink>
            <span>/</span>
            <LocalizedClientLink href="/store" className="hover:text-cyan-400 transition-colors">
              STORE
            </LocalizedClientLink>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{collection.title.toUpperCase()}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-1">
                // FEATURED COLLECTION
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {collection.title}
              </h1>
            </div>

            <div className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>COLLECTION ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Main 2-Column Catalog Layout */}
        <div className="flex flex-col small:flex-row small:items-start gap-8">
          <RefinementList
            sortBy={sort}
            categories={categories}
            collections={collections}
          />
          <div className="w-full">
            <Suspense
              fallback={
                <SkeletonProductGrid
                  numberOfProducts={collection.products?.length}
                />
              }
            >
              <PaginatedProducts
                sortBy={sort}
                page={pageNumber}
                collectionId={collection.id}
                countryCode={countryCode}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
