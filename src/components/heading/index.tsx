import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
    asChild?: boolean;
};

export const Heading = ({ asChild, className, ...props }: HeadingProps) => {
    const Component = asChild ? Slot : "h1";

    return (
        <Component
            className={twMerge("text-2xl font-bold text-primary-3", className)}
            {...props}
        />
    );
};
