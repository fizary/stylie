import { type RouteObject } from "react-router-dom";
import { productPageLoader } from "./loaders";
import { ProductPage } from "./component";

export default {
    path: "/product/:slug",
    element: <ProductPage />,
    loader: productPageLoader,
    shouldRevalidate: ({ currentParams, nextParams }) => {
        return currentParams.slug !== nextParams.slug;
    },
} as RouteObject;
