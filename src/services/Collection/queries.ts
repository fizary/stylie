import { queryOptions, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/services";
import { fetchCollections } from "./service";
import type { FetchCollectionsFilters } from "./types";

const collectionsQuery = (filters?: FetchCollectionsFilters) =>
    queryOptions({
        queryKey: ["collections", filters],
        queryFn: () => fetchCollections(filters),
    });

export const useCollections = (filters?: FetchCollectionsFilters) =>
    useQuery(collectionsQuery(filters));
export const prefetchCollections = (filters?: FetchCollectionsFilters) =>
    queryClient.prefetchQuery(collectionsQuery(filters));
