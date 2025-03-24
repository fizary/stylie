import { queryOptions, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/services";
import { fetchProductBySlug, fetchProducts } from "./service";
import type { FetchProductsFilters } from "./types";

const productsQuery = (filters?: FetchProductsFilters) =>
    queryOptions({
        queryKey: ["products", { filters }],
        queryFn: () => fetchProducts(filters),
    });

const productBySlugQuery = (slug: string) =>
    queryOptions({
        queryKey: ["product", { slug }],
        queryFn: () => fetchProductBySlug(slug),
    });

export const useProducts = (filters?: FetchProductsFilters) =>
    useQuery(productsQuery(filters));
export const prefetchProducts = (filters?: FetchProductsFilters) =>
    queryClient.prefetchQuery(productsQuery(filters));

export const useProductBySlug = (slug: string) =>
    useQuery(productBySlugQuery(slug));
export const prefetchProductBySlug = (slug: string) =>
    queryClient.prefetchQuery(productBySlugQuery(slug));
