import { CollectionSkeleton } from "./components/Collection";

export const CollectionsSkeleton = () => {
    return (
        <div className="container grid gap-1 px-0 sm:grid-cols-2 lg:grid-cols-4">
            <CollectionSkeleton span="both" />
            <CollectionSkeleton span="col" />
            <CollectionSkeleton />
            <CollectionSkeleton />
        </div>
    );
};
