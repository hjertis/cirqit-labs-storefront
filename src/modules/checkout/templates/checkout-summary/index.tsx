import { Heading } from "@medusajs/ui"

import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"

const CheckoutSummary = ({ cart }: { cart: any }) => {
  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8 py-8 small:py-0">
      <div className="w-full bg-slate-900 border border-slate-800 p-6 rounded-xl text-slate-100 flex flex-col shadow-2xl">
        <Divider className="my-6 small:hidden border-slate-800" />
        <Heading
          level="h2"
          className="flex flex-row text-xl font-mono text-white uppercase tracking-wider items-baseline"
        >
          // In your Cart
        </Heading>
        <Divider className="my-6 border-slate-800" />
        <CartTotals totals={cart} />
        <ItemsPreviewTemplate cart={cart} />
        <div className="my-6">
          <DiscountCode cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
