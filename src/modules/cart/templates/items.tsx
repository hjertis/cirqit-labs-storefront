import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items
  return (
    <div>
      <div className="pb-6 mb-4 flex items-center justify-between border-b border-slate-800/80">
        <Heading className="text-xl sm:text-2xl font-mono text-white font-bold uppercase tracking-wider flex items-center gap-2">
          <span className="text-amber-500 font-black">//</span>
          <span>Shopping Cart</span>
        </Heading>
        {items && items.length > 0 && (
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold">
            {items.reduce((acc, item) => acc + item.quantity, 0)} ITEMS
          </span>
        )}
      </div>
      <div className="w-full overflow-x-auto rounded-xl border border-slate-800/80 bg-slate-950/40 p-2 sm:p-4">
        <Table>
          <Table.Header className="border-t-0 border-b border-slate-800/80">
            <Table.Row className="text-slate-500 font-mono text-[10px] uppercase tracking-widest font-normal opacity-80 border-b border-slate-800/80">
              <Table.HeaderCell className="pl-6 pr-4 py-4 text-slate-500 font-normal text-left">ITEM</Table.HeaderCell>
              <Table.HeaderCell className="px-4 py-4"></Table.HeaderCell>
              <Table.HeaderCell className="px-4 py-4 text-slate-500 font-normal">QUANTITY</Table.HeaderCell>
              <Table.HeaderCell className="hidden small:table-cell px-4 py-4 text-slate-500 font-normal">
                PRICE
              </Table.HeaderCell>
              <Table.HeaderCell className="pl-4 pr-6 py-4 text-right text-slate-500 font-normal">
                TOTAL
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body className="divide-y divide-slate-800/60">
            {items
              ? items
                  .sort((a, b) => {
                    return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                  })
                  .map((item) => {
                    return (
                      <Item
                        key={item.id}
                        item={item}
                        currencyCode={cart?.currency_code}
                      />
                    )
                  })
              : repeat(5).map((i) => {
                  return <SkeletonLineItem key={i} />
                })}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default ItemsTemplate
