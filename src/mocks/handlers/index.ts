import { http, delay } from "msw";
import { handlers as bannerHandlers } from "./banner";
import { handlers as categoryHandlers } from "./category";
import { handlers as collectionHandlers } from "./collection";
import { handlers as listHandlers } from "./list";
import { handlers as orderHandlers } from "./order";
import { handlers as productHandlers } from "./product";
import { handlers as userHandlers } from "./user";

export const handlers = [
    http.all("/api/*", async () => await delay(1500)),
    ...bannerHandlers,
    ...categoryHandlers,
    ...collectionHandlers,
    ...listHandlers,
    ...orderHandlers,
    ...productHandlers,
    ...userHandlers,
];
