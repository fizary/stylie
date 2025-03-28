import { prefetchCategories } from "@/services/category";

export function layoutLoader() {
    prefetchCategories();

    return null;
}
