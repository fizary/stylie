import {
    useEffect,
    useCallback,
    useRef,
    useState,
    createContext,
    type PropsWithChildren,
} from "react";
import { useEventListener } from "@/hooks/use-event-listener";
import { LocalStorage } from "@/utils/storage";
import { revalidateCart } from "./services";
import type {
    CartStorageType,
    CartContextType,
    CartItemType,
    BaseCartPayloadType,
    CartPayloadType,
} from "./types";

const storage = new LocalStorage<CartStorageType>();

export const CartContext = createContext<CartContextType>({
    isRevalidating: false,
    cart: [],
    addToCart: () => {},
    updateCartItem: () => {},
    removeCartItem: () => {},
});

export const CartProvider = ({ children }: PropsWithChildren) => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);
    const [isRevalidating, setRevalidating] = useState(false);
    const isCartModified = useRef(false);

    // Revalidate local cart
    useEffect(() => {
        const localCart = storage.get("cart");

        if (localCart && localCart.length > 0) {
            setRevalidating(true);

            revalidateCart(localCart)
                .then((cart) => setCartItems(cart))
                .finally(() => setRevalidating(false));
        }
    }, []);

    // Save local cart on visibility change
    useEventListener(document, "visibilitychange", () => {
        if (isCartModified.current && document.visibilityState === "hidden") {
            const cart = cartItems.map((item) => ({
                id: item.product.id,
                size: item.size,
                amount: item.amount,
            }));

            storage.set("cart", cart);
            isCartModified.current = false;
        }
    });

    const addToCart = useCallback((newItem: CartItemType) => {
        setCartItems((items) => {
            const index = items.findIndex(
                (item) =>
                    item.product.id === newItem.product.id &&
                    item.size === newItem.size,
            );

            if (index !== -1)
                return items.map((item, i) =>
                    i === index
                        ? { ...item, amount: item.amount + newItem.amount }
                        : item,
                );
            else return [...items, newItem];
        });

        isCartModified.current = true;
    }, []);

    const updateCartItem = useCallback(
        ({ id, size, amount }: CartPayloadType) => {
            setCartItems((items) => {
                const index = items.findIndex(
                    (item) => item.product.id === id && item.size === size,
                );

                if (index === -1) return items;
                else
                    return items.map((item, i) =>
                        i === index ? { ...item, amount } : item,
                    );
            });

            isCartModified.current = true;
        },
        [],
    );

    const removeCartItem = useCallback(({ id, size }: BaseCartPayloadType) => {
        setCartItems((items) =>
            items.filter(
                (item) => item.product.id !== id || item.size !== size,
            ),
        );

        isCartModified.current = true;
    }, []);

    return (
        <CartContext.Provider
            value={{
                isRevalidating,
                cart: cartItems,
                addToCart,
                updateCartItem,
                removeCartItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
