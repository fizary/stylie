import { type PaginatedProductListType } from "@/services/List";
import { getApiUrl } from "@/utils/api";
import type { CategoryType, FetchCategoriesFilters } from "./types";

export async function fetchCategories(
    filters?: FetchCategoriesFilters,
): Promise<CategoryType[]> {
    const response = await fetch(
        getApiUrl("/api/categories", undefined, filters),
    );

    if (!response.ok) throw new Error("Categories could not be fetched");

    return response.json();
}

export async function fetchCategoryProductsBySlug(
    slug: string,
    page = 1,
): Promise<PaginatedProductListType> {
    const response = await fetch(
        getApiUrl("/api/categories/:slug/product-list", { slug }, { page }),
    );

    if (!response.ok)
        throw new Error("Products for category could not be fetched");

    return response.json();
}
