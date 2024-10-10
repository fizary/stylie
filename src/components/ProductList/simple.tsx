import { Heading } from "@/components/Heading";
import { Product } from "@/components/Product";
import { type ProductListType } from "@/services/List";

type ProductListProps = {
    list: Omit<ProductListType, "id">;
};

export const SimpleProductList = ({ list }: ProductListProps) => {
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
        </div>
    );
};
