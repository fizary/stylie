import { http } from "msw";
import { categoriesResolver, productListResolver } from "./resolvers";

export const handlers = [
    http.get("/api/categories", categoriesResolver),
    http.get("/api/categories/:slug/product-list", productListResolver),
];
