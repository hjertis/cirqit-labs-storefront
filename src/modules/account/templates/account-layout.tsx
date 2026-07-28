import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  if (!customer) {
    return (
      <div className="flex-1 py-8 sm:py-12 bg-slate-950 text-slate-100 min-h-[75vh] flex items-center justify-center" data-testid="account-page">
        <div className="w-full max-w-md mx-auto flex items-center justify-center">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 py-8 sm:py-12 bg-slate-950 text-slate-100 min-h-[75vh]" data-testid="account-page">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-slate-900/70 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col shadow-2xl backdrop-blur-md">
        <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] py-4 gap-8">
          <div><AccountNav customer={customer} /></div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-start sm:items-end justify-between border border-slate-800/80 pt-6 mt-8 gap-6 bg-slate-950/60 p-6 rounded-lg">
          <div>
            <h3 className="text-lg font-bold font-mono text-white mb-1.5">// Got questions?</h3>
            <span className="text-xs text-slate-400">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div>
            <UnderlineLink href="/customer-service" className="font-mono text-xs text-amber-400 hover:text-amber-300">
              Customer Service
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
