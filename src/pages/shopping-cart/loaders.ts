import { prefetchOrderFees } from "@/services/order";

export function shoppingCartPageLoader() {
    prefetchOrderFees();

    return null;
}
