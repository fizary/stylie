import { queryOptions, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/services";
import { fetchListBySlug } from "./service";

const listBySlugQuery = (slug: string) =>
    queryOptions({
        queryKey: ["list", { slug }],
        queryFn: () => fetchListBySlug(slug),
    });

export const useListBySlug = (slug: string) => useQuery(listBySlugQuery(slug));
export const prefetchListBySlug = (slug: string) =>
    queryClient.prefetchQuery(listBySlugQuery(slug));
