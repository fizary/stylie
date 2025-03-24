import { useParams, useSearchParams } from "react-router-dom";
import { Defer } from "@/components/Defer";
import {
    PaginatedProductList,
    ProductListSkeleton,
} from "@/components/ProductList";
import { useCategoryProductsBySlug } from "@/services/Category";

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
