import { Skeleton, TextSkeleton } from "@/components/skeleton";

export const SidebarSkeleton = () => {
    return (
        <>
            <div className="flex gap-2">
                {Array.from({ length: 2 }, (_, i) => (
                    <Skeleton key={i} className="h-7 w-full" />
                ))}
            </div>
            <nav className="flex flex-col items-center gap-4">
                {Array.from({ length: 4 }, (_, i) => (
                    <TextSkeleton key={i} className="w-full text-xl" />
                ))}
            </nav>
        </>
    );
};
