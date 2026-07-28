import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  // Extract specs from product metadata or material or default fallback specs
  const materialTag = (product.metadata?.material as string) || product.material || "PETG-CF / PLA"
  const layerTag = (product.metadata?.resolution as string) || "0.16mm Layer"
  const toleranceTag = (product.metadata?.tolerance as string) || "&plusmn;0.1mm"

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block h-full">
      <div 
        data-testid="product-wrapper"
        className="bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden p-3.5 group-hover:border-amber-500/50 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-300 flex flex-col justify-between h-full"
      >
        <div>
          <div className="relative rounded-lg overflow-hidden border border-slate-800/80 bg-slate-950">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
              className="bg-slate-950"
            />
            <div className="absolute top-2 left-2 flex flex-wrap gap-1 z-10">
              <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-slate-950/90 border border-slate-700/80 text-slate-300 backdrop-blur-sm">
                {layerTag}
              </span>
            </div>
          </div>

          <div className="mt-3.5 flex flex-col gap-1.5">
            {/* Tech Spec Tags */}
            <div className="flex items-center gap-1.5 font-mono text-[10px]">
              <span className="px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold">
                {materialTag}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                Tol: &plusmn;0.1mm
              </span>
            </div>

            <h4 
              className="font-sans font-bold text-slate-100 group-hover:text-amber-400 transition-colors text-sm line-clamp-1 mt-0.5" 
              data-testid="product-title"
            >
              {product.title}
            </h4>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">SPEC PRICE</span>
          <div className="flex items-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
