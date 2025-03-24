import { prefetchBannerById } from "@/services/Banner";
import { prefetchCollections } from "@/services/Collection";
import { prefetchListBySlug } from "@/services/List";

export function homePageLoader() {
    prefetchBannerById(1);
    prefetchCollections();
    prefetchListBySlug("sale");
    prefetchListBySlug("trending");

    return null;
}
