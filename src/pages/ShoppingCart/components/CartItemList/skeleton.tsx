import { CartItemSkeleton } from "./components/CartItem";

export const CartItemListSkeleton = () => {
    return (
        <div className="flex grow flex-col gap-y-2 divide-y divide-gray-3">
            {Array.from({ length: 4 }).map((_, i) => (
                <CartItemSkeleton key={i} />
            ))}
        </div>
    );
};
