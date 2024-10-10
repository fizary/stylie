import { HttpResponse, type HttpResponseResolver, type PathParams } from "msw";
import { type LinkedProductListType } from "@/services/List";
import lists from "@/mocks/data/lists.json";
import products from "@/mocks/data/products.json";

const fakeExpireTime = new Date().getTime() + 86410000;

export const listResolver: HttpResponseResolver<
    PathParams<"slug">,
    never,
    LinkedProductListType
> = ({ params }) => {
    const list = lists.find((list) => list.slug === params.slug);

    if (list === undefined) return HttpResponse.json(null, { status: 404 });

    return HttpResponse.json({
        id: list.id,
        title: list.title,
        link_text: list.link_text,
        link_url: list.link_url,
        expire: params.slug === "sale" ? fakeExpireTime : undefined,
        products: products
            .filter((product) => list.products.includes(product.id))
            .sort(() => 0.5 - Math.random()),
    });
};
