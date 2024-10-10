import { type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";

type NavButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
};

export const NavButton = ({
    asChild,
    type,
    className,
    ...props
}: NavButtonProps) => {
    const Component = asChild ? Slot : "button";

    return (
        <Component
            type={type ?? "button"}
            className={twMerge(
                "flex items-center justify-center gap-1.5 rounded-sm border border-primary-4 bg-primary-5 px-3 py-1 text-xs font-bold text-primary-3 hover:border-primary-3 hover:bg-primary-3 hover:text-white disabled:border-gray-2 disabled:bg-gray-5 disabled:text-gray-2 disabled:outline-none",
                className,
            )}
            {...props}
        />
    );
};
