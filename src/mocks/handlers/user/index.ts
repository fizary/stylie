import { http } from "msw";
import { userFormResolver } from "./resolvers";

export const handlers = [
    http.post("/api/user/login", userFormResolver),
    http.post("/api/user/register", userFormResolver),
];
