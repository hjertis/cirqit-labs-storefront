"use client"

import { useState, Fragment } from "react"
import { Dialog, DialogPanel, DialogBackdrop, Transition, TransitionChild } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { clx, useToggleState } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { HttpTypes } from "@medusajs/types"
import { Locale } from "@lib/data/locales"

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
  categories?: HttpTypes.StoreProductCategory[] | null
  collections?: HttpTypes.StoreCollection[] | null
}

const SideMenu = ({ regions, locales, currentLocale, categories = [], collections = [] }: SideMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  const close = () => setIsOpen(false)

  // Top level categories
  const topCategories = (categories || []).filter(
    (c) => !c.parent_category && !c.parent_category_id
  )
  const displayCategories = topCategories.length > 0 ? topCategories : categories || []

  return (
    <div>
      {/* Menu Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        data-testid="nav-menu-button"
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 text-slate-200 hover:text-amber-400 transition-all focus:outline-none font-mono text-xs cursor-pointer group"
      >
        <svg className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="font-bold">MENU</span>
      </button>

      {/* Full Screen Portaled Dialog Drawer */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={close}>
          {/* Backdrop */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden z-[101]">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto w-screen max-w-md bg-slate-900 border-r border-slate-800 shadow-2xl text-slate-100 flex flex-col justify-between p-6 h-screen overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                      <LocalizedClientLink
                        href="/"
                        onClick={close}
                        className="font-mono text-base font-bold tracking-tight text-white flex items-center gap-1.5"
                      >
                        <span className="text-amber-500 font-black">//</span>
                        <span>CIRQIT-LABS</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/40 text-amber-400">3D</span>
                      </LocalizedClientLink>

                      <button
                        type="button"
                        data-testid="close-menu-button"
                        onClick={close}
                        className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                        aria-label="Close menu"
                      >
                        <XMark className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Navigation Items */}
                    <div className="py-6 space-y-6 flex-1 overflow-y-auto">
                      {/* Main Navigation */}
                      <div>
                        <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3">
                          // DIRECT ACCESS
                        </div>
                        <ul className="space-y-1.5 font-mono text-sm">
                          <li>
                            <LocalizedClientLink
                              href="/"
                              onClick={close}
                              className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-amber-400 transition-colors"
                            >
                              <span>Home</span>
                              <span className="text-slate-600 text-xs">&rarr;</span>
                            </LocalizedClientLink>
                          </li>
                          <li>
                            <LocalizedClientLink
                              href="/store"
                              onClick={close}
                              className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-amber-400 transition-colors"
                            >
                              <span>Store Catalog</span>
                              <span className="text-slate-600 text-xs">&rarr;</span>
                            </LocalizedClientLink>
                          </li>
                          <li>
                            <LocalizedClientLink
                              href="/account"
                              onClick={close}
                              className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-amber-400 transition-colors"
                            >
                              <span>Customer Account</span>
                              <span className="text-slate-600 text-xs">&rarr;</span>
                            </LocalizedClientLink>
                          </li>
                          <li>
                            <LocalizedClientLink
                              href="/cart"
                              onClick={close}
                              className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-amber-400 transition-colors"
                            >
                              <span>Cart</span>
                              <span className="text-slate-600 text-xs">&rarr;</span>
                            </LocalizedClientLink>
                          </li>
                        </ul>
                      </div>

                      {/* Categories section */}
                      {displayCategories.length > 0 && (
                        <div>
                          <div className="font-mono text-[10px] text-amber-400 uppercase tracking-widest mb-3">
                            // PRODUCT CATEGORIES
                          </div>
                          <div className="space-y-1">
                            {displayCategories.slice(0, 6).map((cat) => (
                              <LocalizedClientLink
                                key={cat.id}
                                href={`/categories/${cat.handle}`}
                                onClick={close}
                                className="flex items-center justify-between p-2 rounded-lg bg-slate-950/40 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800/60 text-xs transition-colors"
                              >
                                <span>{cat.name}</span>
                                <span className="font-mono text-[10px] text-amber-500/70">CAT</span>
                              </LocalizedClientLink>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Custom Print Quote CTA */}
                      <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-slate-950 to-slate-950 border border-amber-500/30">
                        <div className="font-mono text-[11px] text-amber-400 font-semibold mb-1">
                          NEED CUSTOM 3D PRINTING?
                        </div>
                        <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                          Upload your STL or CAD models for instant quoting and calibrated additive manufacturing.
                        </p>
                        <LocalizedClientLink
                          href="/contact"
                          onClick={close}
                          className="block text-center py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs transition-colors"
                        >
                          Request Custom Quote &rarr;
                        </LocalizedClientLink>
                      </div>
                    </div>

                    {/* Footer settings: Currency & Locale */}
                    <div className="pt-4 border-t border-slate-800 space-y-4">
                      {!!locales?.length && (
                        <div
                          className="flex justify-between items-center text-xs"
                          onMouseEnter={languageToggleState.open}
                          onMouseLeave={languageToggleState.close}
                        >
                          <LanguageSelect
                            toggleState={languageToggleState}
                            locales={locales}
                            currentLocale={currentLocale}
                          />
                          <ArrowRightMini
                            className={clx(
                              "transition-transform duration-150 text-slate-400",
                              languageToggleState.state ? "-rotate-90" : ""
                            )}
                          />
                        </div>
                      )}

                      <div
                        className="flex justify-between items-center text-xs"
                        onMouseEnter={countryToggleState.open}
                        onMouseLeave={countryToggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={countryToggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-slate-400",
                            countryToggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2">
                        <span>CIRQIT-LABS 3D</span>
                        <span>STATUS: ONLINE</span>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default SideMenu
