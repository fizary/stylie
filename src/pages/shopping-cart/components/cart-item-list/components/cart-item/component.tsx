import { type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router-dom";
import { AmountInput } from "@/components/amount-input";
import { Icon } from "@/components/icon";
import { type CartItemType } from "@/services/cart";
import { formatPrice } from "@/utils/formatters";

type CartItemProps = {
    item: CartItemType;
    setAmount: Dispatch<SetStateAction<number>>;
    removeItem: () => void;
};

export const CartItem = ({ item, setAmount, removeItem }: CartItemProps) => {
    return (
        <div className="flex flex-col items-center gap-x-8 gap-y-3 py-2.5 sm:flex-row">
            <Link to={"/product/" + item.slug} className="shrink-0">
                <img
                    src={item.image_url}
                    className="aspect-square w-48 object-cover sm:w-36"
                />
            </Link>
            <div className="flex w-full flex-col gap-y-3 font-semibold">
                <div className="flex justify-between gap-x-4">
                    <div className="text-lg">{item.name}</div>
                    <button
                        onClick={removeItem}
                        className="text-gray-1 hover:text-primary-3"
                    >
                        <Icon icon="trash" className="h-[18px]" />
                    </button>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                    <div className="flex w-[280px] gap-x-10">
                        <div className="space-y-1 sm:space-y-2.5">
                            <div className="text-xs">Size</div>
                            <div className="text-lg">{item.size}</div>
                        </div>
                        <div className="space-y-1 sm:space-y-2.5">
                            <div className="text-xs">Price</div>
                            <div className="flex items-baseline gap-x-1 text-lg">
                                {item.full_price !== undefined && (
                                    <div className="text-xs text-gray-2 line-through">
                                        {formatPrice(item.full_price)}
                                    </div>
                                )}
                                <div>{formatPrice(item.price)}</div>
                            </div>
                        </div>
                        <div className="space-y-1 sm:space-y-2.5">
                            <div className="text-xs">Total</div>
                            <div className="text-lg">
                                {formatPrice(item.price * item.amount)}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2.5">
                        <div className="text-xs">Amount</div>
                        <AmountInput value={item.amount} setValue={setAmount} />
                    </div>
                </div>
            </div>
        </div>
    );
};
