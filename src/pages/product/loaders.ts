import { prefetchProductBySlug } from "@/services/product";
import type { LoaderFunctionArgs } from "@/types/router";

export function productPageLoader({ params }: LoaderFunctionArgs<"slug">) {
    prefetchProductBySlug(params.slug!);

    return null;
}
