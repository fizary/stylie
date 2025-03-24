import { queryOptions, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/services";
import { fetchCategories, fetchCategoryProductsBySlug } from "./services";
import type { FetchCategoriesFilters } from "./types";

const categoriesQuery = (filters?: FetchCategoriesFilters) =>
    queryOptions({
        queryKey: ["categories", filters],
        queryFn: () => fetchCategories(filters),
    });

const categoryProductsBySlugQuery = (slug: string, page?: number) =>
    queryOptions({
        queryKey: ["category", "products", { slug, page }],
        queryFn: () => fetchCategoryProductsBySlug(slug, page),
    });

export const useCategories = (filters?: FetchCategoriesFilters) =>
    useQuery(categoriesQuery(filters));
export const prefetchCategories = (filters?: FetchCategoriesFilters) =>
    queryClient.prefetchQuery(categoriesQuery(filters));

export const useCategoryProductsBySlug = (slug: string, page?: number) =>
    useQuery(categoryProductsBySlugQuery(slug, page));
export const prefetchCategoryProductsBySlug = (slug: string, page?: number) =>
    queryClient.prefetchQuery(categoryProductsBySlugQuery(slug, page));
