import { getApiUrl } from "@/utils/api";
import type { OrderFees } from "./types";

export async function fetchOrderFees(): Promise<OrderFees> {
    const response = await fetch(getApiUrl("/api/order/fees"));

    if (!response.ok) throw new Error("Order fees could not be fetched");

    return response.json();
}
