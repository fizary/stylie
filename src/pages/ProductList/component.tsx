import { useLoaderData } from "react-router-dom";
import { Defer } from "@/components/Defer";
import {
    PaginatedProductList,
    ProductListSkeleton,
} from "@/components/ProductList";
import { type ProductListPageLoaderData } from "./loaders";

export const ProductListPage = () => {
    const { productList } = useLoaderData() as ProductListPageLoaderData;

    return (
        <main className="flex grow flex-col gap-y-10 py-10">
            <Defer data={productList} fallback={<ProductListSkeleton />}>
                {(resolvedList) => <PaginatedProductList list={resolvedList} />}
            </Defer>
        </main>
    );
};
