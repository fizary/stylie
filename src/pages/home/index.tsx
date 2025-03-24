import { type RouteObject } from "react-router-dom";
import { homePageLoader } from "./loaders";
import { HomePage } from "./component";

export default {
    path: "/",
    element: <HomePage />,
    loader: homePageLoader,
} as RouteObject;
