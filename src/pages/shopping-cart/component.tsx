import { Defer } from "@/components/defer";
import { Heading } from "@/components/heading";
import {
    CartItemList,
    CartItemListSkeleton,
} from "./components/cart-item-list";
import { CartSummary, CartSummarySkeleton } from "./components/cart-summary";
import { useCart } from "@/features/cart";
import { useOrderFees } from "@/services/order";

export const ShoppingCartPage = () => {
    const { cart, isRevalidating } = useCart();
    const orderFeesQuery = useOrderFees();

    return (
        <main className="container grow py-10">
            <Heading>Shopping cart</Heading>
            <div className="mt-5 flex flex-col gap-8 lg:flex-row">
                {isRevalidating ? (
                    <>
                        <CartItemListSkeleton />
                        <CartSummarySkeleton />
                    </>
                ) : cart.length > 0 ? (
                    <>
                        <CartItemList />
                        <Defer
                            query={orderFeesQuery}
                            fallback={<CartSummarySkeleton />}
                        >
                            {(fees) => <CartSummary fees={fees} />}
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
