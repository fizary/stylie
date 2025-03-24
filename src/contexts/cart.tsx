import {
    useEffect,
    useCallback,
    useRef,
    useState,
    createContext,
    type PropsWithChildren,
} from "react";
import { setCart, type CartItemType } from "@/services/cart";

export type CartContextType = {
    cart: CartItemType[];
    addToCart: (cartItem: CartItemType) => void;
    updateCartItem: (
        cartItem: Pick<CartItemType, "id" | "size" | "amount">,
    ) => void;
    removeFromCart: (cartItem: Pick<CartItemType, "id" | "size">) => void;
    isLoading: boolean;
};

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    updateCartItem: () => {},
    removeFromCart: () => {},
    isLoading: false,
});

type CartProviderProps = PropsWithChildren<{
    cart: CartItemType[] | Promise<CartItemType[]>;
}>;

export const CartProvider = ({ cart, children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);
    const [isLoading, setLoading] = useState(cart instanceof Promise);
    const cartMerged = useRef(false);
    const cartUpdated = useRef(false);

    useEffect(() => {
        const mergeCartData = async () => {
            try {
                const resolvedCart = await cart;

                setCartItems((prevCartItems) => {
                    const resolvedCartMap = resolvedCart.reduce(
                        (acc, item, index) => {
                            acc[item.id] = index;
                            return acc;
                        },
                        {} as Record<number, number>,
                    );

                    for (const item of prevCartItems)
                        if (resolvedCartMap[item.id] !== undefined)
                            resolvedCart[resolvedCartMap[item.id]].amount +=
                                item.amount;
                        else resolvedCart.push(item);

                    return resolvedCart;
                });
            } finally {
                setLoading(false);
            }
        };

        // We're merging cart data instead of flipping it in case a promise was provided and user was fast enough to add products before it resolved
        if (!cartMerged.current) {
            cartMerged.current = true;
            mergeCartData();
        }
    }, [cart]);

    useEffect(() => {
        function saveCart() {
            if (cartUpdated.current && document.visibilityState === "hidden") {
                setCart(cartItems);
                cartUpdated.current = false;
            }
        }

        document.addEventListener("visibilitychange", saveCart);
        return () => document.removeEventListener("visibilitychange", saveCart);
    }, [cartItems]);

    const addToCart = useCallback((newItem: CartItemType) => {
        setCartItems((items) => {
            const index = items.findIndex(
                (item) => item.id === newItem.id && item.size === newItem.size,
            );

            if (index !== -1)
                return items.map((item, i) =>
                    i === index
                        ? { ...newItem, amount: item.amount + newItem.amount }
                        : item,
                );
            else return [...items, newItem];
        });

        cartUpdated.current = true;
    }, []);

    const updateCartItem = useCallback(
        ({
            id,
            size,
            amount,
        }: Pick<CartItemType, "id" | "size" | "amount">) => {
            setCartItems((items) => {
                const index = items.findIndex(
                    (item) => item.id === id && item.size === size,
                );

                if (index === -1) return items;
                else
                    return items.map((item, i) =>
                        i === index ? { ...item, amount } : item,
                    );
            });

            cartUpdated.current = true;
        },
        [],
    );

    const removeFromCart = useCallback(
        ({ id, size }: Pick<CartItemType, "id" | "size">) => {
            setCartItems((items) =>
                items.filter((item) => item.id !== id || item.size !== size),
            );

            cartUpdated.current = true;
        },
        [],
    );

    return (
        <CartContext.Provider
            value={{
                cart: cartItems,
                addToCart,
                updateCartItem,
                removeFromCart,
                isLoading,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
