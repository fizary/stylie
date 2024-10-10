function range(start: number, end: number) {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
}

type CreatePaginationArgs = {
    outerBoundary?: number;
    innerBoundary?: number;
    totalPages?: number;
    currentPage: number;
};

export function createPagination({
    outerBoundary = 1,
    innerBoundary = 1,
    totalPages = 1,
    currentPage,
}: CreatePaginationArgs) {
    const outerBoundaryStart = range(1, Math.min(outerBoundary, totalPages));
    const outerBoundaryEnd = range(
        Math.max(totalPages - outerBoundary + 1, outerBoundary + 1),
        totalPages,
    );

    const innerBoundaryStart = Math.max(
        Math.min(
            // Natural start
            currentPage - innerBoundary,
            // Lower boundary when currentPage is high
            totalPages - outerBoundary - innerBoundary * 2 - 1,
        ),
        // Greater than outerBoundaryStart
        outerBoundary + 2,
    );

    const innerBoundaryEnd = Math.min(
        Math.max(
            // Natural end
            currentPage + innerBoundary,
            // Upper boundary when currentPage is low
            outerBoundary + innerBoundary * 2 + 2,
        ),
        // Less than outerBoundaryEnd
        outerBoundaryEnd.length > 0 ? outerBoundaryEnd[0] - 2 : totalPages - 1,
    );

    return [
        ...outerBoundaryStart,
        ...(innerBoundaryStart > outerBoundary + 2
            ? ["ellipsis-start"]
            : outerBoundary + 1 < totalPages - outerBoundary
              ? [outerBoundary + 1]
              : []),
        ...range(innerBoundaryStart, innerBoundaryEnd),
        ...(innerBoundaryEnd < totalPages - outerBoundary - 1
            ? ["ellipsis-end"]
            : totalPages - outerBoundary > outerBoundary
              ? [totalPages - outerBoundary]
              : []),
        ...outerBoundaryEnd,
    ];
}
