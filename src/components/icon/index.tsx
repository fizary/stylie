import { type SVGAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type IconType =
    | "add"
    | "airplane"
    | "alert-circle"
    | "bag-add"
    | "bag"
    | "chevron-back"
    | "chevron-forward"
    | "close"
    | "eye-off"
    | "eye"
    | "logo-facebook"
    | "logo-instagram"
    | "logo-pinterest"
    | "logo-twitter"
    | "options"
    | "person"
    | "remove"
    | "reorder-three"
    | "time"
    | "trash"
    | "wallet";

type IconProps = SVGAttributes<SVGSVGElement> & {
    icon: IconType;
};

export const Icon = ({ className, icon, ...props }: IconProps) => {
    return (
        <svg
            className={twMerge("h-6", className)}
            viewBox="0 0 512 512"
            aria-hidden
            {...props}
        >
            <use href={"/icons.svg#" + icon} />
        </svg>
    );
};
