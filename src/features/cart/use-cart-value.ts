import { useContext } from "react";
import { CartContext } from "./context";

export const useCartValue = () => {
    const { cart } = useContext(CartContext);

    return cart.reduce((value, cartItem) => {
        value += cartItem.amount * cartItem.product.price;
        return value;
    }, 0);
};
