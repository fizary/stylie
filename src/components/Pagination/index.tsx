import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { SmallButton } from "@/components/SmallButton";
import { createPagination } from "./utils/pagination";

type PaginationProps = {
    className?: string;
    totalPages: number;
    currentPage: number;
    generatePageUrl: (page: number) => string;
};

export const Pagination = ({
    className,
    totalPages,
    currentPage,
    generatePageUrl,
}: PaginationProps) => {
    const pages = createPagination({
        totalPages,
        currentPage: currentPage || 1,
    });

    return (
        <div
            className={twMerge(
                "flex items-center justify-end gap-x-3.5 text-sm font-semibold text-black-3",
                className,
            )}
        >
            {pages.map((page) =>
                typeof page === "string" ? (
                    <span key={page} className="cursor-default">
                        ...
                    </span>
                ) : (
                    <SmallButton
                        key={page}
                        size="md"
                        isActive={page === currentPage}
                        asChild
                    >
                        <Link to={generatePageUrl(page)}>{page}</Link>
                    </SmallButton>
                ),
            )}
        </div>
    );
};
