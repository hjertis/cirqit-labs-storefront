import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import CategoryNavStrip from "@modules/home/components/category-nav-strip"
import FeaturedCategories from "@modules/home/components/featured-categories"
import CustomPrintCta from "@modules/home/components/custom-print-cta"
import WhyChooseUs from "@modules/home/components/why-choose-us"
import FeaturedProducts from "@modules/home/components/featured-products"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Cirqit-Labs // Precision Additive Manufacturing & 3D Prints",
  description:
    "Engineered functional parts, modular workshop storage, and rapid custom prototyping.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* 1. Split Hero Section */}
      <Hero />

      {/* 2. Quick Discovery Category Strip */}
      <CategoryNavStrip />

      {/* 3. Featured Categories Grid */}
      <FeaturedCategories />

      {/* 4. Custom Print & CAD Service Feature Block */}
      <CustomPrintCta />

      {/* 5. Production & QC Specifications */}
      <WhyChooseUs />

      {/* 6. Featured Products Catalog Strip */}
      <div className="py-16 bg-slate-950/80 border-t border-slate-800/60">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </div>
  )
}
