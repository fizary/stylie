import { HttpResponse, type HttpResponseResolver, type PathParams } from "msw";
import { type ProductType, type ProductDetailsType } from "@/services/product";
import products from "@/mocks/data/products.json";

export const productsResolver: HttpResponseResolver<
    never,
    never,
    ProductType[]
> = ({ request }) => {
    const { searchParams } = new URL(request.url);
    const idsParam = searchParams.get("ids");

    if (idsParam !== null) {
        if (idsParam === "") return HttpResponse.json(null, { status: 400 });

        const ids = idsParam.split(",").map((id) => parseInt(id, 10));

        return HttpResponse.json(
            products.filter((product) => ids.includes(product.id)),
        );
    }

    return HttpResponse.json(products.sort(() => 0.5 - Math.random()));
};

export const productResolver: HttpResponseResolver<
    PathParams<"slug">,
    never,
    ProductDetailsType
> = ({ params }) => {
    const product = products.find((product) => product.slug === params.slug);

    if (product === undefined) return HttpResponse.json(null, { status: 404 });

    return HttpResponse.json({
        ...product,
        short_description:
            "Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        images: [
            product.cover_image,
            "/upload/product/1.webp",
            "/upload/product/2.webp",
            "/upload/product/3.webp",
            "/upload/product/4.webp",
        ],
        related: [...products]
            .filter((p) => p.id !== product.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 6),
    });
};
