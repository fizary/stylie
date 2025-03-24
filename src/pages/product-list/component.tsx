import { useParams, useSearchParams } from "react-router-dom";
import { Defer } from "@/components/defer";
import {
    PaginatedProductList,
    ProductListSkeleton,
} from "@/components/product-list";
import { useCategoryProductsBySlug } from "@/services/category";

export const ProductListPage = () => {
    const params = useParams();
    const [searchParams] = useSearchParams();
    const categoryProductsQuery = useCategoryProductsBySlug(
        params.category!,
        parseInt(searchParams.get("page")!, 10) || 1,
    );

    return (
        <main className="flex grow flex-col gap-y-10 py-10">
            <Defer
                query={categoryProductsQuery}
                fallback={<ProductListSkeleton />}
            >
                {(list) => <PaginatedProductList list={list} />}
            </Defer>
        </main>
    );
};
