import { getApiUrl } from "@/utils/api";
import type { BannerType } from "./types";

export async function getBanner(id: number): Promise<BannerType> {
    const response = await fetch(getApiUrl("/api/banners/:id", { id }));
    return response.json();
}
