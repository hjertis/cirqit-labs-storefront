import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <div className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md bg-slate-950 border border-amber-500/40 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
      {price.price_type === "sale" && (
        <span
          className="line-through text-slate-500 mr-1 text-[11px]"
          data-testid="original-price"
        >
          {price.original_price}
        </span>
      )}
      <span className="font-bold text-amber-400 tracking-tight" data-testid="price">
        {price.calculated_price}
      </span>
    </div>
  )
}
