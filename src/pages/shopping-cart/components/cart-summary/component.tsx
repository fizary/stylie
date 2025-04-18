import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { useCartValue } from "@/features/cart";
import { type OrderFees } from "@/services/order";
import { formatPrice } from "@/utils/formatters";

type CartSummaryProps = {
    fees: OrderFees;
};

export const CartSummary = ({ fees }: CartSummaryProps) => {
    const subtotalPrice = useCartValue();
    const totalPrice = subtotalPrice + fees.shipping + fees.tax;

    return (
        <div className="sticky top-[108px] flex h-fit w-full max-w-[280px] flex-col gap-y-4 self-end lg:self-start">
            <Heading asChild>
                <h2 className="text-lg">Summary</h2>
            </Heading>
            <div className="space-y-2.5 divide-y divide-gray-3 text-sm font-semibold">
                <div>
                    <div className="flex justify-between">
                        <div>Subtotal</div>
                        <div>{formatPrice(subtotalPrice)}</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Shipping</div>
                        <div>{formatPrice(fees.shipping)}</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Tax</div>
                        <div>{formatPrice(fees.tax)}</div>
                    </div>
                </div>
                <div className="flex justify-between pt-2.5 text-lg">
                    <div>Total</div>
                    <div>{formatPrice(totalPrice)}</div>
                </div>
            </div>
            <Button>Checkout</Button>
        </div>
    );
};
