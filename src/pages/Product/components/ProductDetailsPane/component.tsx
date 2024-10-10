import { useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AmountInput } from "@/components/AmountInput";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { SmallButton } from "@/components/SmallButton";
import { addToast } from "@/components/Toast/utils";
import { AddToCartToast } from "./components/AddToCartToast";
import { Gallery } from "./components/Gallery";
import { CartContext } from "@/contexts/cart";
import { type ProductDetailsType } from "@/services/Product";
import { formatPrice } from "@/utils/formatters";

type ProductDetailsPaneProps = {
    product: ProductDetailsType;
};

export const ProductDetailsPane = ({ product }: ProductDetailsPaneProps) => {
    const { addToCart } = useContext(CartContext);
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
                            <span className="text-sm font-bold text-gray-2 line-through">
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
                            <AmountInput
                                min={1}
                                max={99}
                                value={amount}
                                setValue={setAmount}
                            />
                        </div>
                    </div>
                    <Button
                        onClick={() => {
                            addToCart({
                                id: product.id,
                                name: product.name,
                                slug: product.slug,
                                image_url: product.images[0],
                                full_price: product.full_price,
                                price: product.price,
                                size: selectedSize,
                                amount,
                            });

                            addToast((props) => (
                                <AddToCartToast
                                    name={product.name}
                                    image={product.images[0]}
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
