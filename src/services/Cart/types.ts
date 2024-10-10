import { type ProductType } from "@/services/Product";

export type CartStorageType = {
    cart: CartItemType[];
};

export type CartItemType = ProductType & {
    size: string;
    amount: number;
};
