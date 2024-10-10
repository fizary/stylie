import { Link } from "react-router-dom";
import { type CollectionType } from "@/services/Collection";

type CollectionProps = {
    collection: CollectionType;
};

export const Collection = ({ collection }: CollectionProps) => {
    return (
        <div className="group/collection">
            <div className="lga:py-12 relative flex h-full items-center overflow-hidden rounded-sm py-24 lg:py-32">
                <img
                    src={collection.image_url}
                    className="absolute top-0 h-full w-full object-cover transition-transform duration-300 group-has-[a:hover]/collection:scale-125"
                />
                <div className="absolute top-0 h-full w-full bg-black-1 bg-opacity-65"></div>
                <div className="container-padding z-10 font-sriracha">
                    <div className="text-sm font-bold text-primary-3">
                        {collection.tag}
                    </div>
                    <div className="text-2xl font-bold text-white">
                        {collection.text}
                    </div>
                    <Link
                        to={collection.link_url}
                        className="mt-2 inline-block font-openSans text-lg font-bold text-primary-3 underline hover:text-primary-2"
                    >
                        {collection.link_text || "Browse"}
                    </Link>
                </div>
            </div>
        </div>
    );
};
