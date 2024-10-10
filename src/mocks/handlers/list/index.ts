import { http } from "msw";
import { listResolver } from "./resolvers";

export const handlers = [http.get("/api/lists/:slug", listResolver)];
