"use client"

import { useState, useEffect, useRef, Fragment } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogPanel, DialogBackdrop, Transition, TransitionChild } from "@headlessui/react"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type SearchModalProps = {
  categories?: HttpTypes.StoreProductCategory[] | null
  collections?: HttpTypes.StoreCollection[] | null
}

export default function SearchModal({ categories = [], collections = [] }: SearchModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Keyboard shortcut listener: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setSearchTerm("")
    }
  }, [isOpen])

  const filteredCategories = (categories || []).filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredCollections = (collections || []).filter((col) =>
    col.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const quickLinks = [
    { name: "Explore All Store Catalog", href: "/store", tag: "CATALOG" },
    { name: "Request Custom 3D Print Quote", href: "/contact", tag: "SERVICE" },
    { name: "Gridfinity Storage Systems", href: "/categories/gridfinity-cat", tag: "CATEGORY" },
    { name: "Modular Workshop Organizers", href: "/collections/gridfinity", tag: "COLLECTION" },
  ]

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
    setIsOpen(false)
    router.push(`/store?q=${encodeURIComponent(searchTerm.trim())}`)
  }

  return (
    <>
      {/* Search Button in Header */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 text-slate-400 hover:text-slate-200 transition-all font-mono text-xs group cursor-pointer"
        aria-label="Search catalog"
      >
        <svg
          className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="hidden md:inline">Search parts & prints...</span>
        <span className="md:hidden">Search</span>
        <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-500 font-mono">
          ⌘K
        </kbd>
      </button>

      {/* Portaled Search Dialog */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={() => setIsOpen(false)}>
          {/* Backdrop */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-[101] overflow-y-auto pt-16 sm:pt-24 px-4">
            <div className="flex min-h-full items-start justify-center text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95 -translate-y-2"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 -translate-y-2"
              >
                <DialogPanel className="relative w-full max-w-2xl transform rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl text-left overflow-hidden transition-all flex flex-col max-h-[80vh]">
                  {/* Header / Input Form */}
                  <form
                    onSubmit={handleSearchSubmit}
                    className="flex items-center gap-3 px-5 py-4 border-b border-slate-800 bg-slate-950/70"
                  >
                    <svg
                      className="w-5 h-5 text-amber-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search products, categories, materials (e.g. PETG, Gridfinity, Bins)..."
                      className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm font-sans focus:outline-none"
                    />
                    {searchTerm && (
                      <button
                        type="button"
                        onClick={() => setSearchTerm("")}
                        className="text-xs font-mono text-slate-500 hover:text-slate-300"
                      >
                        CLEAR
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-2 py-1 rounded bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-mono"
                    >
                      ESC
                    </button>
                  </form>

                  {/* Results / Navigation Body */}
                  <div className="p-4 overflow-y-auto space-y-6">
                    {/* Quick Matches / Categories */}
                    {searchTerm && filteredCategories.length > 0 && (
                      <div>
                        <div className="font-mono text-[11px] text-amber-400 uppercase tracking-widest mb-2 px-2">
                          // Matching Categories
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {filteredCategories.slice(0, 4).map((cat) => (
                            <LocalizedClientLink
                              key={cat.id}
                              href={`/categories/${cat.handle}`}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/40 transition-colors group"
                            >
                              <span className="text-sm font-medium text-slate-200 group-hover:text-amber-400">
                                {cat.name}
                              </span>
                              <span className="font-mono text-[10px] text-slate-500 group-hover:text-amber-400">
                                &rarr;
                              </span>
                            </LocalizedClientLink>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Collections match */}
                    {searchTerm && filteredCollections.length > 0 && (
                      <div>
                        <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest mb-2 px-2">
                          // Matching Collections
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {filteredCollections.slice(0, 4).map((col) => (
                            <LocalizedClientLink
                              key={col.id}
                              href={`/collections/${col.handle}`}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                            >
                              <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-400">
                                {col.title}
                              </span>
                              <span className="font-mono text-[10px] text-slate-500 group-hover:text-cyan-400">
                                &rarr;
                              </span>
                            </LocalizedClientLink>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick Links / Top Hub */}
                    <div>
                      <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-2 px-2">
                        // Recommended Navigation Hub
                      </div>
                      <div className="space-y-1.5">
                        {quickLinks.map((item) => (
                          <LocalizedClientLink
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between p-3 rounded-lg bg-slate-950/40 hover:bg-slate-800/60 border border-slate-800/60 hover:border-amber-500/40 transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
                              <span className="text-sm text-slate-200 group-hover:text-amber-400 transition-colors">
                                {item.name}
                              </span>
                            </div>
                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                              {item.tag}
                            </span>
                          </LocalizedClientLink>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer / Helper tip */}
                  <div className="p-3 border-t border-slate-800/80 bg-slate-950/90 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Press <kbd className="text-slate-300">Enter</kbd> to search in catalog</span>
                    <span>CIRQIT-LABS SEARCH v2.4</span>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
