import { http } from "msw";
import { collectionsResolver } from "./resolvers";

export const handlers = [http.get("/api/collections", collectionsResolver)];
