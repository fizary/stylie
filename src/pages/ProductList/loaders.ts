import { prefetchCategoryProductsBySlug } from "@/services/Category";
import type { LoaderFunctionArgs } from "@/types/router";

export function productListPageLoader({
    request,
    params,
}: LoaderFunctionArgs<"category">) {
    const { searchParams } = new URL(request.url);

    prefetchCategoryProductsBySlug(
        params.category!,
        parseInt(searchParams.get("page")!, 10) || 1,
    );

    return null;
}
