import { Skeleton, TextSkeleton } from "@/components/skeleton";

export const CartItemSkeleton = () => {
    return (
        <div className="flex flex-col items-center gap-x-8 gap-y-3 py-2.5 sm:flex-row">
            <Skeleton className="aspect-square w-48 shrink-0 sm:w-36" />
            <div className="flex w-full flex-col gap-y-3">
                <TextSkeleton className="text-lg" />
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                    <div className="flex gap-x-10">
                        <div className="space-y-1 sm:space-y-2.5">
                            <TextSkeleton className="w-10 text-xs" />
                            <TextSkeleton className="w-16 text-lg" />
                        </div>
                        <div className="space-y-1 sm:space-y-2.5">
                            <TextSkeleton className="w-10 text-xs" />
                            <TextSkeleton className="w-16 text-lg" />
                        </div>
                        <div className="space-y-1 sm:space-y-2.5">
                            <TextSkeleton className="w-10 text-xs" />
                            <TextSkeleton className="w-16 text-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
