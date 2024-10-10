import { generatePath, type PathParam } from "react-router-dom";

export function getApiUrl<Path extends string>(
    originalPath: Path,
    params?: Record<PathParam<Path>, string | number | null>,
    searchParams?: Record<
        string,
        string | number | boolean | (string | number | boolean)[]
    >,
) {
    const path = generatePath(
        originalPath,
        params as Record<PathParam<Path>, string | null>,
    );

    if (searchParams !== undefined) {
        const urlSearchParams = new URLSearchParams();
        const searchEntries = Object.entries(searchParams);

        for (const [key, value] of searchEntries)
            urlSearchParams.set(
                key,
                Array.isArray(value) ? value.join(",") : (value as string),
            );

        return urlSearchParams.size > 0
            ? path + "?" + urlSearchParams.toString()
            : path;
    }

    return path;
}
