import { http } from "msw";
import { cartResolver } from "./resolvers";

export const handlers = [http.post("/api/cart", cartResolver)];
