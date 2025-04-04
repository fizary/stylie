import { HttpResponse, type HttpResponseResolver } from "msw";
import { type OrderFees } from "@/services/order";

export const orderFeesResolver: HttpResponseResolver<
    never,
    never,
    OrderFees
> = () => {
    return HttpResponse.json({
        shipping: 8,
        tax: 400,
    });
};
