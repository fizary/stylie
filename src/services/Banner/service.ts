import { getApiUrl } from "@/utils/api";
import type { BannerType } from "./types";

export async function fetchBannerById(id: number): Promise<BannerType> {
    const response = await fetch(getApiUrl("/api/banners/:id", { id }));

    if (!response.ok) throw new Error("Banner could not be fetched");

    return response.json();
}
