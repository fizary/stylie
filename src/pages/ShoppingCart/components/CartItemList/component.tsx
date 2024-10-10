import { type CartContextType } from "@/contexts/cart";
import { type CartItemType } from "@/services/Cart";
import { CartItem } from "./components/CartItem";

type CartItemListProps = {
    cart: CartItemType[];
    updateCartItem: CartContextType["updateCartItem"];
    removeFromCart: CartContextType["removeFromCart"];
};

export const CartItemList = ({
    cart,
    updateCartItem,
    removeFromCart,
}: CartItemListProps) => {
    return (
        <div className="flex grow flex-col gap-y-2 divide-y divide-gray-3">
            {cart.map((item) => (
                <CartItem
                    key={`${item.id}-${item.size}`}
                    item={item}
                    setAmount={(newAmount) =>
                        updateCartItem({
                            ...item,
                            amount:
                                typeof newAmount === "function"
                                    ? newAmount(item.amount)
                                    : newAmount,
                        })
                    }
                    removeItem={() =>
                        removeFromCart({
                            id: item.id,
                            size: item.size,
                        })
                    }
                />
            ))}
        </div>
    );
};
