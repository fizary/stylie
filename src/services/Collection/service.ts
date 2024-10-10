import { getApiUrl } from "@/utils/api";
import type { CollectionType } from "./types";

type CollectionsSearchParams = {
    ids?: number[];
};

export async function getCollections(
    searchParams?: CollectionsSearchParams,
): Promise<CollectionType[]> {
    const response = await fetch(
        getApiUrl("/api/collections", undefined, searchParams),
    );
    return response.json();
}
