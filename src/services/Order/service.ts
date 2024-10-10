import { getApiUrl } from "@/utils/api";
import type { OrderFees } from "./types";

export async function getOrderFees(): Promise<OrderFees> {
    const response = await fetch(getApiUrl("/api/order/fees"));
    return response.json();
}
