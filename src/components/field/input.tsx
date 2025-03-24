import { type InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    type?:
        | "hidden"
        | "text"
        | "password"
        | "number"
        | "datetime-local"
        | "date"
        | "month"
        | "week"
        | "time";
};

export const Input = ({ className, ...props }: InputProps) => {
    return (
        <input
            className={twMerge(
                "w-full rounded-sm border border-black-3 bg-transparent px-5 py-3 text-sm font-semibold text-black-3 placeholder-gray-1 outline-none",
                "focus-visible:border-primary-3 focus-visible:text-primary-3 focus-visible:placeholder-primary-4",
                "invalid:!border-danger-1 invalid:!text-danger-1 invalid:!placeholder-danger-2",
                "disabled:border-gray-2 disabled:text-gray-2 disabled:placeholder-gray-3",
                className,
            )}
            {...props}
        />
    );
};
