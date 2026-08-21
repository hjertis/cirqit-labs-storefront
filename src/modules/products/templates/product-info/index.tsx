import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const materialTag = (product.metadata?.material as string) || product.material || "PETG-CF / PLA"
  const layerTag = (product.metadata?.resolution as string) || "0.16mm High Detail"

  return (
    <div id="product-info" className="space-y-4">
      {/* Spec Tags */}
      <div className="flex items-center gap-2 flex-wrap font-mono text-[11px]">
        <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold">
          {materialTag}
        </span>
        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
          {layerTag}
        </span>
        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
          Tol: ±0.1mm
        </span>
      </div>

      {/* Collection tag */}
      {product.collection && (
        <LocalizedClientLink
          href={`/collections/${product.collection.handle}`}
          className="font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider block"
        >
          // {product.collection.title}
        </LocalizedClientLink>
      )}

      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight"
        data-testid="product-title"
      >
        {product.title}
      </h1>

      {/* Description */}
      {product.description && (
        <div
          className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line pt-2"
          data-testid="product-description"
        >
          {product.description}
        </div>
      )}
    </div>
  )
}

export default ProductInfo
