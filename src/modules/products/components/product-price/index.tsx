import { clx } from "@medusajs/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-slate-800 animate-pulse rounded-lg" />
  }

  return (
    <div className="flex flex-col text-slate-100 py-2">
      <div className="flex items-baseline gap-2 font-mono">
        {!variant && <span className="text-xs text-slate-400 font-sans">From</span>}
        <span
          className="text-2xl font-bold text-amber-400 tracking-tight"
          data-testid="product-price"
          data-value={selectedPrice.calculated_price_number}
        >
          {selectedPrice.calculated_price}
        </span>
      </div>
      {selectedPrice.price_type === "sale" && (
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400 mt-1">
          <span>Original: </span>
          <span
            className="line-through text-slate-500"
            data-testid="original-product-price"
            data-value={selectedPrice.original_price_number}
          >
            {selectedPrice.original_price}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
            -{selectedPrice.percentage_diff}%
          </span>
        </div>
      )}
    </div>
  )
}
