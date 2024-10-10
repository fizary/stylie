import { type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";

type SmallButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    size: "md" | "sm" | "xs";
    isActive?: boolean;
};

export const SmallButton = ({
    asChild,
    size,
    isActive,
    type,
    className,
    ...props
}: SmallButtonProps) => {
    const Component = asChild ? Slot : "button";

    return (
        <Component
            type={type ?? "button"}
            className={twMerge(
                "flex rounded-sm border border-black-3 text-sm font-semibold text-black-3 hover:border-primary-3 hover:bg-primary-5 hover:text-primary-3 disabled:border-gray-2 disabled:bg-gray-5 disabled:text-gray-2 disabled:outline-none",
                isActive && "border-primary-3 bg-primary-5 text-primary-3",
                size === "md"
                    ? "px-2.5 py-2"
                    : size === "sm"
                      ? "px-2.5 py-1.5"
                      : "p-1",
                className,
            )}
            {...props}
        />
    );
};
