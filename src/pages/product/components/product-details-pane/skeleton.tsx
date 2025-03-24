import { TextSkeleton } from "@/components/skeleton";
import { GallerySkeleton } from "./components/gallery";

export const ProductDetailsPaneSkeleton = () => {
    return (
        <>
            <div className="container flex flex-col gap-y-5 md:flex-row md:gap-y-0">
                <div className="h-[360px] md:w-1/2">
                    <GallerySkeleton />
                </div>
                <div className="flex flex-col gap-y-2.5 md:ml-10 md:w-1/2 md:border-l md:border-l-gray-3 md:pl-10">
                    <TextSkeleton className="text-2xl" />
                    <TextSkeleton className="w-full text-sm" lines={2} />
                    <TextSkeleton className="w-24 text-xl" />
                </div>
            </div>
            <div className="py-5">
                <div className="container space-y-2.5">
                    <TextSkeleton className="text-xl" />
                    <div className="space-y-2.5 text-sm">
                        <TextSkeleton className="w-full" lines={5} />
                    </div>
                </div>
            </div>
        </>
    );
};
