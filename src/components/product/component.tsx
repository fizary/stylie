import { Link } from "react-router-dom";
import { type ProductType } from "@/services/product";
import { formatPrice } from "@/utils/formatters";

type ProductProps = {
    product: ProductType;
};

export const Product = ({ product }: ProductProps) => {
    return (
        <Link
            to={"/product/" + product.slug}
            className="rounded-sm border border-transparent p-1 hover:border-primary-3 hover:bg-primary-5"
        >
            <img
                src={product.image_url}
                className="aspect-square h-auto w-full object-cover"
            />
            <div className="mt-2 space-y-1 px-1">
                <div className="text-sm font-bold">{product.name}</div>
                <div className="flex flex-wrap items-baseline gap-x-2.5">
                    {product.full_price !== undefined && (
                        <span className="text-sm font-semibold text-gray-2 line-through">
                            {formatPrice(product.full_price)}
                        </span>
                    )}
                    <span className="text-sm font-bold text-primary-3">
                        {formatPrice(product.price)}
                    </span>
                </div>
            </div>
        </Link>
    );
};
