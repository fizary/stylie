import { type LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ className, children, ...props }: LabelProps) => {
    return (
        <label
            className={twMerge(
                "absolute left-3 top-0 z-10 select-none px-1.5 text-sm font-semibold text-black-3",
                "group-has-[:focus-visible]/field:text-primary-3",
                "group-has-[:invalid]/field:text-danger-1",
                "group-has-[:disabled]/field:text-gray-2",
                className,
            )}
            {...props}
        >
            <div className="absolute left-0 top-2.5 -z-10 block h-[1px] w-full bg-white"></div>
            {children}
        </label>
    );
};
