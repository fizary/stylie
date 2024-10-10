import { getProduct } from "@/services/Product";
import type { LoaderData, LoaderFunctionArgs } from "@/types/router";

export type ProductPageLoaderData = LoaderData<typeof productPageLoader>;

export const productPageLoader = async ({
    params,
}: LoaderFunctionArgs<"slug">) => {
    return { product: getProduct(params.slug!) };
};
