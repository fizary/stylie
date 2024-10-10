import { getProducts, type ProductType } from "@/services/Product";
import { LocalStorage } from "@/utils/localStorage";
import type { CartStorageType, CartItemType } from "./types";

const storage = new LocalStorage<CartStorageType>();

export function emptyCart() {
    storage.remove("cart");
}

export function setCart(cartItems: CartItemType[]) {
    storage.set("cart", cartItems);
}

export function getCart() {
    return storage.get("cart") ?? [];
}

export async function revalidateCart(cartItems: CartItemType[]) {
    if (cartItems.length <= 0) return [];

    const productIds = cartItems.reduce((acc, item) => {
        if (!acc.includes(item.id)) acc.push(item.id);
        return acc;
    }, [] as number[]);

    const products = (await getProducts({ ids: productIds })).reduce(
        (acc, product) => {
            acc[product.id] = product;
            return acc;
        },
        {} as Record<number, ProductType>,
    );

    return cartItems.reduce((acc, item) => {
        if (products[item.id] !== undefined)
            acc.push({
                ...item,
                ...products[item.id],
            });

        return acc;
    }, [] as CartItemType[]);
}
