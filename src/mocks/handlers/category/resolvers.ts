import { HttpResponse, type HttpResponseResolver, type PathParams } from "msw";
import { type CategoryType } from "@/services/Category";
import { type PaginatedProductListType } from "@/services/List";
import categories from "@/mocks/data/categories.json";
import products from "@/mocks/data/products.json";

export const categoriesResolver: HttpResponseResolver<
    never,
    never,
    CategoryType[]
> = ({ request }) => {
    const { searchParams } = new URL(request.url);
    const idsParam = searchParams.get("ids");

    if (idsParam !== null) {
        if (idsParam === "") return HttpResponse.json(null, { status: 400 });

        const ids = idsParam.split(",").map((id) => parseInt(id, 10));

        return HttpResponse.json(
            categories.filter((category) => ids.includes(category.id)),
        );
    }

    return HttpResponse.json(categories);
};

export const productListResolver: HttpResponseResolver<
    PathParams<"slug">,
    never,
    PaginatedProductListType
> = ({ params }) => {
    const category = categories.find(
        (category) => category.slug === params.slug,
    );

    if (category === undefined) return HttpResponse.json(null, { status: 404 });

    return HttpResponse.json({
        id: category.id,
        title: category.name,
        total_pages: 9,
        products: products.sort(() => 0.5 - Math.random()),
    });
};
