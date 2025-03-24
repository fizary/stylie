import { useContext } from "react";
import { Defer } from "@/components/Defer";
import { Heading } from "@/components/Heading";
import { CartItemList, CartItemListSkeleton } from "./components/CartItemList";
import { CartSummary, CartSummarySkeleton } from "./components/CartSummary";
import { CartContext } from "@/contexts/cart";
import { useOrderFees } from "@/services/Order";

export const ShoppingCartPage = () => {
    const orderFeesQuery = useOrderFees();
    const { isLoading, cart, updateCartItem, removeFromCart } =
        useContext(CartContext);

    return (
        <main className="container grow py-10">
            <Heading>Shopping cart</Heading>
            <div className="mt-5 flex flex-col gap-8 lg:flex-row">
                {isLoading ? (
                    <>
                        <CartItemListSkeleton />
                        <CartSummarySkeleton />
                    </>
                ) : cart.length > 0 ? (
                    <>
                        <CartItemList
                            cart={cart}
                            updateCartItem={updateCartItem}
                            removeFromCart={removeFromCart}
                        />
                        <Defer
                            query={orderFeesQuery}
                            fallback={<CartSummarySkeleton />}
                        >
                            {(fees) => <CartSummary cart={cart} fees={fees} />}
                        </Defer>
                    </>
                ) : (
                    <div className="text-sm">
                        You don't have any products in your cart.
                    </div>
                )}
            </div>
        </main>
    );
};
