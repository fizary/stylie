import { http } from "msw";
import { orderFeesResolver } from "./resolvers";

export const handlers = [http.get("/api/order/fees", orderFeesResolver)];
