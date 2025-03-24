import { prefetchBannerById } from "@/services/banner";
import { prefetchCollections } from "@/services/collection";
import { prefetchListBySlug } from "@/services/list";

export function homePageLoader() {
    prefetchBannerById(1);
    prefetchCollections();
    prefetchListBySlug("sale");
    prefetchListBySlug("trending");

    return null;
}
