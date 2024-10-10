import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { twJoin } from "tailwind-merge";
import { Defer } from "@/components/Defer";
import { Icon } from "@/components/Icon";
import { NavButton } from "@/components/NavButton";
import { NavbarSkeleton } from "./skeleton";
import { CartContext } from "@/contexts/cart";
import { type CategoryType } from "@/services/Category";
import { formatPrice } from "@/utils/formatters";

type NavbarProps = {
    categories: Promise<CategoryType[]>;
    isSticky: boolean;
    showSidebar: () => void;
};

export const Navbar = ({ categories, isSticky, showSidebar }: NavbarProps) => {
    const { cart } = useContext(CartContext);
    const cartValue = cart.reduce(
        (acc, item) => acc + item.amount * item.price,
        0,
    );

    return (
        <header
            className={twJoin(
                "sticky top-0 z-30 bg-white",
                isSticky && "shadow-md",
            )}
        >
            <div className="container flex items-center justify-between py-3 lg:py-5">
                <Link to="/">
                    <img src="/logotype.webp" className="h-6" />
                </Link>
                <button onClick={showSidebar} className="lg:hidden">
                    <Icon icon="reorder-three" className="h-11" />
                </button>
                <Defer data={categories} fallback={<NavbarSkeleton />}>
                    {(resolvedCategories) => (
                        <>
                            <nav className="hidden gap-5 lg:flex xl:gap-8">
                                {resolvedCategories.map((category) => (
                                    <NavLink
                                        key={category.id}
                                        to={`/products/${category.slug}`}
                                        className="text-xl font-bold hover:text-primary-3 [&.active]:text-primary-3"
                                    >
                                        {category.name}
                                    </NavLink>
                                ))}
                            </nav>
                            <div className="hidden gap-2 lg:flex">
                                <NavButton asChild>
                                    <Link to="/shopping-cart">
                                        {formatPrice(cartValue)}
                                        <Icon icon="bag" className="h-[18px]" />
                                    </Link>
                                </NavButton>
                                <NavButton asChild>
                                    <Link to="/sign-in">
                                        Sign in{" "}
                                        <Icon
                                            icon="person"
                                            className="h-[18px]"
                                        />
                                    </Link>
                                </NavButton>
                            </div>
                        </>
                    )}
                </Defer>
            </div>
        </header>
    );
};
