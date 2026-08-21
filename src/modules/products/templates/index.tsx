import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-6">
      {/* Breadcrumb strip */}
      <div className="content-container mb-6 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500 flex-wrap">
          <LocalizedClientLink href="/" className="hover:text-amber-400 transition-colors">
            HOME
          </LocalizedClientLink>
          <span>/</span>
          <LocalizedClientLink href="/store" className="hover:text-amber-400 transition-colors">
            STORE
          </LocalizedClientLink>
          {product.collection && (
            <>
              <span>/</span>
              <LocalizedClientLink
                href={`/collections/${product.collection.handle}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {product.collection.title.toUpperCase()}
              </LocalizedClientLink>
            </>
          )}
          {product.categories && product.categories.length > 0 && (
            <>
              <span>/</span>
              <LocalizedClientLink
                href={`/categories/${product.categories[0].handle}`}
                className="hover:text-amber-400 transition-colors"
              >
                {product.categories[0].name.toUpperCase()}
              </LocalizedClientLink>
            </>
          )}
          <span>/</span>
          <span className="text-amber-400 font-semibold truncate max-w-xs">{product.title}</span>
        </div>
      </div>

      <div
        className="content-container flex flex-col small:flex-row small:items-start py-6 relative gap-8"
        data-testid="product-container"
      >
        <div className="flex flex-col small:sticky small:top-32 small:py-0 small:max-w-[340px] w-full py-4 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
        <div className="block w-full relative">
          <ImageGallery images={images} />
        </div>
        <div className="flex flex-col small:sticky small:top-32 small:py-0 small:max-w-[340px] w-full py-4 gap-y-8">
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>

      <div
        className="content-container my-16 small:my-24 border-t border-slate-800/80 pt-12"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </div>
  )
}

export default ProductTemplate
