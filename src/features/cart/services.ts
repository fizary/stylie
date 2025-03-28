import { getApiUrl } from "@/utils/api";
import type { CartItemType, CartPayloadType } from "./types";

export async function revalidateCart(
    cart: CartPayloadType[],
): Promise<CartItemType[]> {
    const response = await fetch(getApiUrl("/api/cart"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cart),
    });

    if (!response.ok) throw new Error("Cart revalidation failed");

    return response.json();
}
