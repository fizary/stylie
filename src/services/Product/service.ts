import { getApiUrl } from "@/utils/api";
import type {
    ProductType,
    ProductDetailsType,
    FetchProductsFilters,
} from "./types";

export async function fetchProducts(
    filters?: FetchProductsFilters,
): Promise<ProductType[]> {
    const response = await fetch(
        getApiUrl("/api/products", undefined, filters),
    );

    if (!response.ok) throw new Error("Products could not be fetched");

    return response.json();
}

export async function fetchProductBySlug(
    slug: string,
): Promise<ProductDetailsType> {
    const response = await fetch(
        getApiUrl("/api/products/:slug/details", { slug }),
    );

    if (!response.ok) throw new Error("Product could not be fetched");

    return response.json();
}
