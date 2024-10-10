import { getApiUrl } from "@/utils/api";
import type { LinkedProductListType } from "./types";

export async function getList(slug: string): Promise<LinkedProductListType> {
    const response = await fetch(getApiUrl("/api/lists/:slug", { slug }));
    return response.json();
}
