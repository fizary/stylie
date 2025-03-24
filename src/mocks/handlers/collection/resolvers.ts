import { HttpResponse, type HttpResponseResolver } from "msw";
import { type CollectionType } from "@/services/collection";
import collections from "@/mocks/data/collections.json";

export const collectionsResolver: HttpResponseResolver<
    never,
    never,
    CollectionType[]
> = ({ request }) => {
    const { searchParams } = new URL(request.url);
    const idsParam = searchParams.get("ids");

    if (idsParam !== null) {
        if (idsParam === "") return HttpResponse.json(null, { status: 400 });

        const ids = idsParam.split(",").map((id) => parseInt(id, 10));

        return HttpResponse.json(
            collections.filter((collection) =>
                ids.includes(collection.id),
            ) as CollectionType[],
        );
    }

    return HttpResponse.json(collections as CollectionType[]);
};
