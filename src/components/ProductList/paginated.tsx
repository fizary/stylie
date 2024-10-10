import { useSearchParams } from "react-router-dom";
import { Heading } from "@/components/Heading";
import { Product } from "@/components/Product";
import { Pagination } from "@/components/Pagination";
import { type PaginatedProductListType } from "@/services/List";

type PaginatedProductListProps = {
    list: PaginatedProductListType;
};

export const PaginatedProductList = ({ list }: PaginatedProductListProps) => {
    const [searchParams] = useSearchParams({ page: "1" });

    function generatePageUrl(page: number) {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());

        return "?" + params.toString();
    }

    return (
        <div className="container flex flex-col gap-y-6">
            <Heading asChild>
                <h2>{list.title}</h2>
            </Heading>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {list.products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <Pagination
                totalPages={list.total_pages}
                currentPage={parseInt(searchParams.get("page")!, 10)}
                generatePageUrl={generatePageUrl}
            />
        </div>
    );
};
