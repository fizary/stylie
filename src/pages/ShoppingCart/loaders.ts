import { getOrderFees } from "@/services/Order";
import type { LoaderData } from "@/types/router";

export type ShoppingCartPageLoaderData = LoaderData<
    typeof shoppingCartPageLoader
>;

export const shoppingCartPageLoader = async () => {
    return {
        fees: getOrderFees(),
    };
};
