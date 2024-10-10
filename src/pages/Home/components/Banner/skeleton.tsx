import { Skeleton } from "@/components/Skeleton";

export const BannerSkeleton = () => {
    return (
        <div className="container relative flex h-[480px] px-0">
            <Skeleton className="h-full w-full" />
        </div>
    );
};
