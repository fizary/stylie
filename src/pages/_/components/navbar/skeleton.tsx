import { Skeleton, TextSkeleton } from "@/components/skeleton";

export const NavbarSkeleton = () => {
    return (
        <>
            <div className="hidden gap-5 lg:flex xl:gap-8">
                {Array.from({ length: 4 }, (_, i) => (
                    <TextSkeleton key={i} className="w-28 text-xl" />
                ))}
            </div>
            <div className="hidden gap-2 lg:flex">
                {Array.from({ length: 2 }, (_, i) => (
                    <Skeleton key={i} className="h-7 w-20" />
                ))}
            </div>
        </>
    );
};
