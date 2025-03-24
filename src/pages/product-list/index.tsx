import { type RouteObject } from "react-router-dom";
import { productListPageLoader } from "./loaders";
import { ProductListPage } from "./component";

export default {
    path: "/products/:category",
    element: <ProductListPage />,
    loader: productListPageLoader,
} as RouteObject;
