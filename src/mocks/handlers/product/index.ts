import { http } from "msw";
import { productsResolver, productResolver } from "./resolvers";

export const handlers = [
    http.get("/api/products", productsResolver),
    http.get("/api/products/:slug/details", productResolver),
];
