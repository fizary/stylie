import { useContext } from "react";
import { CartContext } from "./context";

export function useCart() {
    return useContext(CartContext);
}

export function useCartValue() {
    const { cart } = useContext(CartContext);

    return cart.reduce((value, cartItem) => {
        value += cartItem.amount * cartItem.price;
        return value;
    }, 0);
}
