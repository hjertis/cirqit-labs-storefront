import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts || pricedProducts.length === 0) {
    return null
  }

  return (
    <div className="content-container py-12">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
        <div>
          <div className="font-mono text-[11px] text-amber-400 tracking-wider uppercase mb-1">
            // COLLECTION CATALOG
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {collection.title}
          </h3>
        </div>
        <LocalizedClientLink 
          href={`/collections/${collection.handle}`}
          className="font-mono text-xs text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
        >
          <span>VIEW COLLECTION</span>
          <span>&rarr;</span>
        </LocalizedClientLink>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricedProducts.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product} region={region} isFeatured />
          </li>
        ))}
      </ul>
    </div>
  )
}
