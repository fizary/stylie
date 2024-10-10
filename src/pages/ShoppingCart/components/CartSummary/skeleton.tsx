import { TextSkeleton } from "@/components/Skeleton";

export const CartSummarySkeleton = () => {
    return (
        <div className="sticky top-[108px] flex h-fit w-full max-w-[280px] flex-col gap-y-4 self-end lg:self-start">
            <TextSkeleton className="text-lg" />
            <div className="space-y-2.5 divide-y divide-gray-3 text-sm font-semibold">
                <div>
                    <div className="flex justify-between">
                        <TextSkeleton className="w-20" />
                        <TextSkeleton className="w-20" />
                    </div>
                    <div className="flex justify-between">
                        <TextSkeleton className="w-20" />
                        <TextSkeleton className="w-20" />
                    </div>
                    <div className="flex justify-between">
                        <TextSkeleton className="w-20" />
                        <TextSkeleton className="w-20" />
                    </div>
                </div>
                <div className="flex justify-between pt-2.5 text-lg">
                    <TextSkeleton className="w-20" />
                    <TextSkeleton className="w-20" />
                </div>
            </div>
        </div>
    );
};
