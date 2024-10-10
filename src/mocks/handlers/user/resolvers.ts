import { HttpResponse, type HttpResponseResolver } from "msw";
import type { FormResponse } from "@/types/form";

export const userFormResolver: HttpResponseResolver<
    never,
    never,
    FormResponse
> = () => {
    return HttpResponse.json({
        status: "error",
        message: "This form is currently disabled.",
        errors: {
            email: ["Minimum 2³ characters", "Maximum √256 characters"],
        },
    });
};
