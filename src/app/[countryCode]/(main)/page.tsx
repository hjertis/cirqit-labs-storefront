import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import FeaturedCategories from "@modules/home/components/featured-categories"
import WhyChooseUs from "@modules/home/components/why-choose-us"
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
      <Hero />
      <FeaturedCategories />
      <WhyChooseUs />
      <div className="py-12 bg-slate-950/80 border-t border-slate-800/60">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </div>
  )
}
