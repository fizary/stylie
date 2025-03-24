import { getCart, revalidateCart } from "@/services/cart";
import { prefetchCategories } from "@/services/category";
import type { LoaderData } from "@/types/router";

export type LayoutLoaderData = LoaderData<typeof layoutLoader>;

export function layoutLoader() {
    prefetchCategories();
    const cart = getCart();

    return {
        cart: cart.length > 0 ? revalidateCart(cart) : cart,
    };
}
