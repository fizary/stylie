import { prefetchOrderFees } from "@/services/Order";

export function shoppingCartPageLoader() {
    prefetchOrderFees();

    return null;
}
