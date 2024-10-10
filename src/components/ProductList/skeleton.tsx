import { ProductSkeleton } from "@/components/Product";
import { TextSkeleton } from "@/components/Skeleton";

type ProductListSkeletonProps = {
    items?: number;
};

export const ProductListSkeleton = ({
    items = 12,
}: ProductListSkeletonProps) => {
    return (
        <div className="container flex flex-col gap-y-6">
            <TextSkeleton className="text-2xl" />
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {Array.from({ length: items }).map((_, i) => (
                    <ProductSkeleton key={i} />
                ))}
            </div>
        </div>
    );
};
