import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AmountInput } from "@/components/amount-input";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { SmallButton } from "@/components/small-button";
import { addToast } from "@/components/toast/utils";
import { AddToCartToast } from "./components/add-to-cart-toast";
import { Gallery } from "./components/gallery";
import { useCart } from "@/features/cart";
import { type ProductDetailsType } from "@/services/product";
import { formatPrice } from "@/utils/formatters";

type ProductDetailsPaneProps = {
    product: ProductDetailsType;
};

export const ProductDetailsPane = ({ product }: ProductDetailsPaneProps) => {
    const { addToCart } = useCart();
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedSize, setSelectedSize] = useState(
        searchParams.get("size") || product.sizes[0],
    );
    const [amount, setAmount] = useState(1);

    return (
        <>
            <div className="container flex flex-col gap-y-5 md:flex-row md:gap-y-0">
                <div className="h-[360px] md:w-1/2">
                    <Gallery images={product.images} />
                </div>
                <div className="flex flex-col gap-y-2.5 md:ml-10 md:w-1/2 md:border-l md:border-l-gray-3 md:pl-10">
                    <Heading>{product.name}</Heading>
                    <div className="text-sm">{product.short_description}</div>
                    <div className="flex items-baseline gap-x-2.5">
                        {product.full_price !== undefined && (
                            <span className="text-sm font-bold text-gray-1 line-through">
                                {formatPrice(product.full_price)}
                            </span>
                        )}
                        <span className="text-xl font-bold">
                            {formatPrice(product.price)}
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-2.5 py-5">
                        <div>
                            <div className="mb-2.5 text-sm font-bold">Size</div>
                            <div className="flex flex-wrap gap-4">
                                {product.sizes.map((size, i) => (
                                    <SmallButton
                                        key={i}
                                        size="sm"
                                        isActive={selectedSize === size}
                                        onClick={() => {
                                            setSelectedSize(size);
                                            setSearchParams(
                                                { size },
                                                {
                                                    preventScrollReset: true,
                                                },
                                            );
                                        }}
                                    >
                                        {size}
                                    </SmallButton>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="mb-2.5 text-sm font-bold">
                                Amount
                            </div>
                            <AmountInput value={amount} setValue={setAmount} />
                        </div>
                    </div>
                    <Button
                        onClick={() => {
                            addToCart({
                                product,
                                size: selectedSize,
                                amount,
                            });

                            addToast((props) => (
                                <AddToCartToast
                                    name={product.name}
                                    image={product.cover_image}
                                    size={selectedSize}
                                    amount={amount}
                                    {...props}
                                />
                            ));
                        }}
                    >
                        Purchase
                    </Button>
                </div>
            </div>
            <div className="bg-gray-4 py-5">
                <div className="container space-y-2.5">
                    <Heading className="text-xl" asChild>
                        <h2>Description</h2>
                    </Heading>
                    <div className="space-y-2.5 text-sm">
                        {product.description.split("\n").map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
