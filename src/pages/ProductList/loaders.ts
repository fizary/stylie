import { getCategoryProductList } from "@/services/Category";
import type { LoaderData, LoaderFunctionArgs } from "@/types/router";

export type ProductListPageLoaderData = LoaderData<
    typeof productListPageLoader
>;

export const productListPageLoader = async ({
    request,
    params,
}: LoaderFunctionArgs<"category">) => {
    const { searchParams } = new URL(request.url);

    return {
        productList: getCategoryProductList(params.category!, {
            page: parseInt(searchParams.get("page")!, 10) || 1,
        }),
    };
};
