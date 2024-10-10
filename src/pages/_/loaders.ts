import { getCart, revalidateCart } from "@/services/Cart";
import { getCategories } from "@/services/Category";
import type { LoaderData } from "@/types/router";

export type LayoutLoaderData = LoaderData<typeof layoutLoader>;

export const layoutLoader = async () => {
    const cart = getCart();

    return {
        cart: cart.length > 0 ? revalidateCart(cart) : cart,
        categories: getCategories(),
    };
};
