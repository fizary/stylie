import { HttpResponse, type HttpResponseResolver, type PathParams } from "msw";
import { type BannerType } from "@/services/banner";
import banners from "@/mocks/data/banners.json";

export const bannerResolver: HttpResponseResolver<
    PathParams<"id">,
    never,
    BannerType
> = ({ params }) => {
    const id = parseInt(params.id as string, 10);
    const banner = banners.find((banner) => banner.id === id);

    if (banner === undefined) return HttpResponse.json(null, { status: 404 });

    return HttpResponse.json(banner);
};
