import { type PaginatedProductListType } from "@/services/List";
import { getApiUrl } from "@/utils/api";
import type { CategoryType } from "./types";

type CategoriesSearchParams = {
    ids?: number[];
};

export async function getCategories(
    searchParams?: CategoriesSearchParams,
): Promise<CategoryType[]> {
    const response = await fetch(
        getApiUrl("/api/categories", undefined, searchParams),
    );
    return response.json();
}

type CategoryProductListSearchParams = {
    page?: number;
};

export async function getCategoryProductList(
    slug: string,
    { page = 1 }: CategoryProductListSearchParams,
): Promise<PaginatedProductListType> {
    const response = await fetch(
        getApiUrl("/api/categories/:slug/product-list", { slug }, { page }),
    );
    return response.json();
}
