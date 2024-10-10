import { Link } from "react-router-dom";
import { Countdown } from "@/components/Countdown";
import { Heading } from "@/components/Heading";
import { Product } from "@/components/Product";
import { type LinkedProductListType } from "@/services/List";

type LinkedProductListProps = {
    list: LinkedProductListType;
};

export const LinkedProductList = ({ list }: LinkedProductListProps) => {
    return (
        <div className="container flex flex-col gap-y-6">
            <div className="flex flex-col items-baseline justify-between md:flex-row">
                <Heading asChild>
                    <h2>{list.title}</h2>
                </Heading>
                {list.expire && (
                    <Countdown destinationTimestamp={list.expire} />
                )}
            </div>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {list.products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <div className="flex justify-end">
                <Link
                    to={list.link_url}
                    className="flex items-center text-lg font-semibold text-primary-3 underline hover:text-primary-2"
                >
                    {list.link_text}
                </Link>
            </div>
        </div>
    );
};
