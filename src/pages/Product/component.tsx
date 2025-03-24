import { useParams } from "react-router-dom";
import { Defer } from "@/components/Defer";
import {
    SimpleProductList,
    ProductListSkeleton,
} from "@/components/ProductList";
import {
    ProductDetailsPane,
    ProductDetailsPaneSkeleton,
} from "./components/ProductDetailsPane";
import { useProductBySlug } from "@/services/Product";

export const ProductPage = () => {
    const params = useParams();
    const productQuery = useProductBySlug(params["slug"]!);

    return (
        <main className="flex grow flex-col gap-y-10 py-10">
            <Defer
                query={productQuery}
                fallback={
                    <>
                        <ProductDetailsPaneSkeleton />
                        <ProductListSkeleton />
                    </>
                }
            >
                {(product) => (
                    <>
                        <ProductDetailsPane
                            key={params["slug"]}
                            product={product}
                        />
                        <SimpleProductList
                            list={{
                                title: "Related products",
                                products: product.related,
                            }}
                        />
                    </>
                )}
            </Defer>
        </main>
    );
};
