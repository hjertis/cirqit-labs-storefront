"use server"

import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import { getCacheOptions } from "./cookies"

export const listRegions = async () => {
  try {
    const next = {
      ...(await getCacheOptions("regions")),
    }

    return await sdk.client
      .fetch<{ regions: HttpTypes.StoreRegion[] }>(`/store/regions`, {
        method: "GET",
        next,
        cache: "force-cache",
      })
      .then(({ regions }) => regions || [])
  } catch (error) {
    console.warn(
      `Failed to list regions: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    )
    return []
  }
}

export const retrieveRegion = async (id: string) => {
  try {
    const next = {
      ...(await getCacheOptions(["regions", id].join("-"))),
    }

    return await sdk.client
      .fetch<{ region: HttpTypes.StoreRegion }>(`/store/regions/${id}`, {
        method: "GET",
        next,
        cache: "force-cache",
      })
      .then(({ region }) => region)
  } catch (error) {
    console.warn(
      `Failed to retrieve region "${id}": ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    )
    return null
  }
}

const regionMap = new Map<string, HttpTypes.StoreRegion>()

export const getRegion = async (countryCode: string) => {
  try {
    if (regionMap.has(countryCode)) {
      return regionMap.get(countryCode)
    }

    const regions = await listRegions()

    if (!regions || regions.length === 0) {
      return null
    }

    regions.forEach((region) => {
      region.countries?.forEach((c) => {
        regionMap.set(c?.iso_2 ?? "", region)
      })
    })

    const region = countryCode
      ? regionMap.get(countryCode)
      : regionMap.get("us")

    return region || null
  } catch (e: any) {
    console.warn(
      `Failed to get region for "${countryCode}": ${
        e instanceof Error ? e.message : "Unknown error"
      }`
    )
    return null
  }
}
