import { forwardRef, type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ asChild, className, children, ...props }, ref) => {
        const Component = asChild ? Slot : "button";

        return (
            <Component
                className={twMerge(
                    "flex items-center justify-center gap-4 rounded-sm bg-primary-3 px-7 py-2 text-base font-semibold text-white hover:bg-primary-2 active:bg-primary-1 disabled:bg-gray-2",
                    className,
                )}
                ref={ref}
                {...props}
            >
                {children}
            </Component>
        );
    },
);
Button.displayName = "Button";
