import { type ProductType } from "@/services/product";

export type CartStorageType = {
    cart: CartItemType[];
};

export type CartItemType = ProductType & {
    size: string;
    amount: number;
};
