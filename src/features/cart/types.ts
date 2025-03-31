import { type ProductType } from "@/services/product";

export type CartStorageType = {
    cart: CartPayloadType[];
};

export type CartContextType = {
    isRevalidating: boolean;
    cart: CartItemType[];
    addToCart: (cartItem: CartItemType) => void;
    updateCartItem: (cartItem: CartPayloadType) => void;
    removeCartItem: (cartItem: BaseCartPayloadType) => void;
};

export type CartItemType = {
    product: ProductType;
    size: string;
    amount: number;
};

export type BaseCartPayloadType = {
    id: number;
    size: string;
};

export type CartPayloadType = BaseCartPayloadType & {
    amount: number;
};
