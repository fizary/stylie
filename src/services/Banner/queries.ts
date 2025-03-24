import { queryOptions, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/services";
import { fetchBannerById } from "./services";

const bannerByIdQuery = (id: number) =>
    queryOptions({
        queryKey: ["banner", { id }],
        queryFn: () => fetchBannerById(id),
    });

export const useBannerById = (id: number) => useQuery(bannerByIdQuery(id));
export const prefetchBannerById = (id: number) =>
    queryClient.prefetchQuery(bannerByIdQuery(id));
