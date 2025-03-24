type BaseProductType = {
    id: number;
    name: string;
    full_price?: number;
    price: number;
};

export type ProductType = BaseProductType & {
    image_url: string;
    slug: string;
};

export type ProductDetailsType = BaseProductType & {
    short_description: string;
    description: string;
    sizes: string[];
    images: string[];
    slug: string;
    related: ProductType[];
};

export type FetchProductsFilters = {
    ids?: number[];
};
