import { Skeleton, TextSkeleton } from "@/components/Skeleton";

export const ProductSkeleton = () => {
    return (
        <div>
            <Skeleton className="aspect-square w-full" />
            <div className="mt-2 space-y-1 px-1">
                <TextSkeleton className="w-3/4 text-sm" />
                <div className="flex flex-wrap items-baseline gap-x-2.5">
                    <TextSkeleton className="w-1/4 text-sm" />
                    <TextSkeleton className="w-1/4 text-sm" />
                </div>
            </div>
        </div>
    );
};
