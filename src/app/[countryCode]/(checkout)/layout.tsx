import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-slate-950 text-slate-100 relative small:min-h-screen">
      <div className="h-16 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-xs font-mono text-slate-300 hover:text-amber-400 flex items-center gap-x-2 uppercase flex-1 basis-0 transition-colors"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90 text-amber-400" size={16} />
            <span className="mt-px hidden small:block">
              Back to shopping cart
            </span>
            <span className="mt-px block small:hidden">
              Back
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="font-mono text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors uppercase flex items-center gap-1.5"
            data-testid="store-link"
          >
            <span className="text-amber-500 font-black">//</span>
            <span>LAYERLAB</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/40 text-amber-400 tracking-wider">3D</span>
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative py-8" data-testid="checkout-container">{children}</div>
      <div className="py-8 w-full flex items-center justify-center border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs font-mono">
        <MedusaCTA />
      </div>
    </div>
  )
}
