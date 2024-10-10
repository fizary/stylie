import { Collection } from "./components/Collection";
import { type CollectionType } from "@/services/Collection";

type CollectionsProps = {
    collections: CollectionType[];
};

export const Collections = ({ collections }: CollectionsProps) => {
    return (
        <div className="container grid gap-1 px-0 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
                <Collection key={collection.id} collection={collection} />
            ))}
        </div>
    );
};
