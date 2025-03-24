import { type ProductType } from "@/services/product";

export type ProductListType = {
    id: number;
    title: string;
    products: ProductType[];
};

export type PaginatedProductListType = ProductListType & {
    total_pages: number;
};

export type LinkedProductListType = ProductListType & {
    link_text: string;
    link_url: string;
    expire?: number;
};
