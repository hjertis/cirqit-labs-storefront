import { notFound } from "next/navigation"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { HttpTypes } from "@medusajs/types"

export default async function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!category || !countryCode) notFound()

  const [allCategories, collectionsResult] = await Promise.all([
    listCategories().catch(() => []),
    listCollections({ fields: "id, handle, title" }).catch(() => ({ collections: [] })),
  ])

  const collections = collectionsResult?.collections || []

  const parents = [] as HttpTypes.StoreProductCategory[]

  const getParents = (cat: HttpTypes.StoreProductCategory) => {
    if (cat.parent_category) {
      parents.push(cat.parent_category)
      getParents(cat.parent_category)
    }
  }

  getParents(category)

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-8">
      <div className="content-container">
        {/* Breadcrumb & Section Header */}
        <div className="mb-8 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-500 mb-2 flex-wrap">
            <LocalizedClientLink href="/" className="hover:text-amber-400 transition-colors">
              HOME
            </LocalizedClientLink>
            <span>/</span>
            <LocalizedClientLink href="/store" className="hover:text-amber-400 transition-colors">
              STORE
            </LocalizedClientLink>
            <span>/</span>
            {parents.reverse().map((parent) => (
              <span key={parent.id} className="flex items-center gap-2">
                <LocalizedClientLink
                  className="hover:text-amber-400 transition-colors"
                  href={`/categories/${parent.handle}`}
                >
                  {parent.name.toUpperCase()}
                </LocalizedClientLink>
                <span>/</span>
              </span>
            ))}
            <span className="text-amber-400 font-semibold">{category.name.toUpperCase()}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-1">
                // PRODUCT CATEGORY
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" data-testid="category-page-title">
                {category.name}
              </h1>
              {category.description && (
                <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                  {category.description}
                </p>
              )}
            </div>

            <div className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>CATEGORY ACTIVE</span>
            </div>
          </div>

          {/* Subcategories tags */}
          {category.category_children && category.category_children.length > 0 && (
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 flex-wrap">
              <span className="font-mono text-xs text-slate-500 mr-2">Subcategories:</span>
              {category.category_children.map((c) => (
                <LocalizedClientLink
                  key={c.id}
                  href={`/categories/${c.handle}`}
                  className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 text-xs font-mono transition-colors"
                >
                  {c.name} &rarr;
                </LocalizedClientLink>
              ))}
            </div>
          )}
        </div>

        {/* Main 2-Column Catalog Layout */}
        <div
          className="flex flex-col small:flex-row small:items-start gap-8"
          data-testid="category-container"
        >
          <RefinementList
            sortBy={sort}
            categories={allCategories}
            collections={collections}
            data-testid="sort-by-container"
          />
          <div className="w-full">
            <Suspense
              fallback={
                <SkeletonProductGrid
                  numberOfProducts={category.products?.length ?? 8}
                />
              }
            >
              <PaginatedProducts
                sortBy={sort}
                page={pageNumber}
                categoryId={category.id}
                countryCode={countryCode}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
