import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Defer } from "@/components/Defer";
import { Heading } from "@/components/Heading";
import { CartItemList, CartItemListSkeleton } from "./components/CartItemList";
import { CartSummary, CartSummarySkeleton } from "./components/CartSummary";
import { CartContext } from "@/contexts/cart";
import { type ShoppingCartPageLoaderData } from "./loaders";

export const ShoppingCartPage = () => {
    const { fees } = useLoaderData() as ShoppingCartPageLoaderData;
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
                        <Defer data={fees} fallback={<CartSummarySkeleton />}>
                            {(resolvedFees) => (
                                <CartSummary cart={cart} fees={resolvedFees} />
                            )}
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
