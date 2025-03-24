import { getApiUrl } from "@/utils/api";
import type { CollectionType, FetchCollectionsFilters } from "./types";

export async function fetchCollections(
    filters?: FetchCollectionsFilters,
): Promise<CollectionType[]> {
    const response = await fetch(
        getApiUrl("/api/collections", undefined, filters),
    );

    if (!response.ok) throw new Error("Collections could not be fetched");

    return response.json();
}
