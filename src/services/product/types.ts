export type ProductType = {
    id: number;
    name: string;
    slug: string;
    cover_image: string;
    full_price?: number;
    price: number;
    sizes: string[];
};

export type ProductDetailsType = ProductType & {
    short_description: string;
    description: string;
    images: string[];
    related: ProductType[];
};

export type FetchProductsFilters = {
    ids?: number[];
};
