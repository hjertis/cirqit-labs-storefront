"use client"

import { Button, Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

type SummaryProps = {
  cart: HttpTypes.StoreCart & {
    promotions: HttpTypes.StorePromotion[]
  }
}

function getCheckoutStep(cart: HttpTypes.StoreCart) {
  if (!cart?.shipping_address?.address_1 || !cart.email) {
    return "address"
  } else if (cart?.shipping_methods?.length === 0) {
    return "delivery"
  } else {
    return "payment"
  }
}

const Summary = ({ cart }: SummaryProps) => {
  const step = getCheckoutStep(cart)

  return (
    <div className="flex flex-col gap-y-4 text-slate-100">
      <Heading level="h2" className="text-xl font-mono text-white uppercase tracking-wider">
        // Summary
      </Heading>
      <DiscountCode cart={cart} />
      <Divider />
      <CartTotals totals={cart} />
      <LocalizedClientLink
        href={"/checkout?step=" + step}
        data-testid="checkout-button"
        className="w-full"
      >
        <button className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold rounded-lg text-sm transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center justify-center gap-2">
          <span>GO TO CHECKOUT</span>
          <span>&rarr;</span>
        </button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
