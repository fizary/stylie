import { getApiUrl } from "@/utils/api";
import type { ProductType, ProductDetailsType } from "./types";

type ProductsSearchParams = {
    ids?: number[];
};

export async function getProducts(
    searchParams?: ProductsSearchParams,
): Promise<ProductType[]> {
    const response = await fetch(
        getApiUrl("/api/products", undefined, searchParams),
    );
    return response.json();
}

export async function getProduct(slug: string): Promise<ProductDetailsType> {
    const response = await fetch(
        getApiUrl("/api/products/:slug/details", { slug }),
    );
    return response.json();
}
