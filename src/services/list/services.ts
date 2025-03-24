import { getApiUrl } from "@/utils/api";
import type { LinkedProductListType } from "./types";

export async function fetchListBySlug(
    slug: string,
): Promise<LinkedProductListType> {
    const response = await fetch(getApiUrl("/api/lists/:slug", { slug }));

    if (!response.ok) throw new Error("Product list could not be fetched");

    return response.json();
}
