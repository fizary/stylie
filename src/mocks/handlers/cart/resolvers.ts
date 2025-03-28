import { HttpResponse, type HttpResponseResolver } from "msw";
import { type CartItemType, type CartPayloadType } from "@/features/cart";
import products from "@/mocks/data/products.json";

export const cartResolver: HttpResponseResolver<
    never,
    CartPayloadType[],
    CartItemType[]
> = async ({ request }) => {
    const payload = await request.json();
    const cart: CartItemType[] = [];

    for (const item of payload) {
        const product = products.find((product) => product.id === item.id);

        if (product)
            cart.push({
                ...product,
                size: item.size,
                amount: item.amount,
            });
    }

    return HttpResponse.json(cart);
};
