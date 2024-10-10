import { type RouteObject } from "react-router-dom";
import { layoutLoader } from "./loaders";
import { Layout } from "./component";

export default {
    element: <Layout />,
    loader: layoutLoader,
    shouldRevalidate: () => false,
} as RouteObject;
