import { getBanner } from "@/services/Banner";
import { getCollections } from "@/services/Collection";
import { getList } from "@/services/List";
import type { LoaderData } from "@/types/router";

export type HomePageLoaderData = LoaderData<typeof homePageLoader>;

export const homePageLoader = async () => {
    return {
        banner: getBanner(1),
        collections: getCollections(),
        saleList: getList("sale"),
        trendingList: getList("trending"),
    };
};
