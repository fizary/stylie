import { type RouteObject } from "react-router-dom";
import { shoppingCartPageLoader } from "./loaders";
import { ShoppingCartPage } from "./component";

export default {
    path: "/shopping-cart",
    element: <ShoppingCartPage />,
    loader: shoppingCartPageLoader,
} as RouteObject;
