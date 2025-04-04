import { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Defer } from "@/components/defer";
import { Icon } from "@/components/icon";
import { NavButton } from "@/components/nav-button";
import { SidebarSkeleton } from "./skeleton";
import { useCartValue } from "@/features/cart";
import { useCategories } from "@/services/category";
import { formatPrice } from "@/utils/formatters";

type SidebarProps = {
    isActive: boolean;
    hideSidebar: () => void;
};

export const Sidebar = ({ isActive, hideSidebar }: SidebarProps) => {
    const categoriesQuery = useCategories();
    const cartValue = useCartValue();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current === null) return;

            const isHidden = getComputedStyle(ref.current).display === "none";

            if (isActive && isHidden) hideSidebar();
        };

        addEventListener("resize", handleResize);
        return () => removeEventListener("resize", handleResize);
    }, [hideSidebar, isActive]);

    return (
        <div
            ref={ref}
            className={twMerge(
                "fixed left-0 top-0 z-[100] h-full w-full overflow-x-hidden transition-transform duration-0 lg:hidden",
                isActive ? "translate-x-0" : "translate-x-full delay-500",
            )}
        >
            <div
                className={twMerge(
                    "fixed right-0 top-0 z-10 h-full w-80 p-1.5 transition-transform duration-300",
                    isActive ? "translate-x-0" : "translate-x-80",
                )}
            >
                <div className="container-padding flex h-full w-full flex-col rounded-sm bg-white py-3">
                    <button onClick={hideSidebar} className="self-end">
                        <Icon icon="close" className="h-9" />
                    </button>
                    <div className="flex flex-col gap-7 py-10">
                        <Defer
                            query={categoriesQuery}
                            fallback={<SidebarSkeleton />}
                        >
                            {(categories) => (
                                <>
                                    <div className="flex gap-2">
                                        <NavButton
                                            className="w-full"
                                            onClick={hideSidebar}
                                            asChild
                                        >
                                            <Link to="/sign-in">
                                                Sign in{" "}
                                                <Icon
                                                    icon="person"
                                                    className="h-[18px]"
                                                />
                                            </Link>
                                        </NavButton>
                                        <NavButton
                                            className="w-full"
                                            onClick={hideSidebar}
                                            asChild
                                        >
                                            <Link to="/shopping-cart">
                                                {formatPrice(cartValue)}
                                                <Icon
                                                    icon="bag"
                                                    className="h-[18px]"
                                                />
                                            </Link>
                                        </NavButton>
                                    </div>
                                    <nav className="flex flex-col items-center gap-4">
                                        {categories.map((category) => (
                                            <NavLink
                                                key={category.id}
                                                to={`/products/${category.slug}`}
                                                onClick={hideSidebar}
                                                className="text-xl font-bold hover:text-primary-3 [&.active]:text-primary-3"
                                            >
                                                {category.name}
                                            </NavLink>
                                        ))}
                                    </nav>
                                </>
                            )}
                        </Defer>
                    </div>
                </div>
            </div>
            <div
                onClick={hideSidebar}
                className={twMerge(
                    "h-full w-full bg-black-1 transition-colors duration-500",
                    isActive ? "bg-opacity-75" : "bg-opacity-0",
                )}
            ></div>
        </div>
    );
};
