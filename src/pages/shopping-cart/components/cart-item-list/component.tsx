import { useCart } from "@/features/cart";
import { CartItem } from "./components/cart-item";

export const CartItemList = () => {
    const { cart } = useCart();

    return (
        <div className="flex grow flex-col gap-y-2 divide-y divide-gray-3">
            {cart.map((item) => (
                <CartItem key={`${item.product.id}-${item.size}`} item={item} />
            ))}
        </div>
    );
};
