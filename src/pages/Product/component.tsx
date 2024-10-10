import { useLoaderData, useParams } from "react-router-dom";
import { Defer } from "@/components/Defer";
import {
    SimpleProductList,
    ProductListSkeleton,
} from "@/components/ProductList";
import {
    ProductDetailsPane,
    ProductDetailsPaneSkeleton,
} from "./components/ProductDetailsPane";
import { type ProductPageLoaderData } from "./loaders";

export const ProductPage = () => {
    const params = useParams();
    const { product } = useLoaderData() as ProductPageLoaderData;

    return (
        <main className="flex grow flex-col gap-y-10 py-10">
            <Defer
                data={product}
                fallback={
                    <>
                        <ProductDetailsPaneSkeleton />
                        <ProductListSkeleton />
                    </>
                }
            >
                {(resolvedProduct) => (
                    <>
                        <ProductDetailsPane
                            key={params["slug"]}
                            product={resolvedProduct}
                        />
                        <SimpleProductList
                            list={{
                                title: "Related products",
                                products: resolvedProduct.related,
                            }}
                        />
                    </>
                )}
            </Defer>
        </main>
    );
};
