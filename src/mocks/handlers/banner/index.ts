import { http } from "msw";
import { bannerResolver } from "./resolvers";

export const handlers = [http.get("/api/banners/:id", bannerResolver)];
