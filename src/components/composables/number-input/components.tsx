import {
    forwardRef,
    type HTMLAttributes,
    type InputHTMLAttributes,
    type ButtonHTMLAttributes,
    type PropsWithChildren,
} from "react";
import { twMerge } from "tailwind-merge";
import { NumberInputProvider, type NumberInputOptions } from "./context";
import { useNumberInput } from "./use-number-input";

export const NumberInputRoot = ({
    min = 1,
    max = 99,
    value,
    setValue,
    children,
}: PropsWithChildren<NumberInputOptions>) => {
    return (
        <NumberInputProvider
            min={min}
            max={max}
            value={value}
            setValue={setValue}
        >
            {children}
        </NumberInputProvider>
    );
};

export const NumberInputContainer = forwardRef<
    HTMLDivElement,
    PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>(({ className, children, ...props }, ref) => {
    return (
        <div className={twMerge("flex", className)} ref={ref} {...props}>
            {children}
        </div>
    );
});
NumberInputContainer.displayName = "NumberInputContainer";

export const NumberInputInput = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
    const { isEmpty, value, finalizeInput, update } = useNumberInput();

    return (
        <input
            className={twMerge(
                "-mx-px w-20 border border-black-3 px-6 py-1 text-center text-sm font-semibold outline-none focus-visible:z-10 focus-visible:border-primary-3 focus-visible:text-primary-3",
                className,
            )}
            ref={ref}
            type="text"
            inputMode="numeric"
            value={isEmpty ? "" : value}
            onChange={({ target }) => update(target.value)}
            onBlur={finalizeInput}
            {...props}
        />
    );
});
NumberInputInput.displayName = "NumberInputInput";

export const NumberInputIncrementButton = forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
    const { increment } = useNumberInput();

    return (
        <button
            className={twMerge(
                "flex rounded-sm border border-black-3 px-2.5 py-1.5 text-sm font-semibold text-black-3 hover:z-10 hover:border-primary-3 hover:bg-primary-5 hover:text-primary-3 focus-visible:z-10 disabled:border-gray-2 disabled:bg-gray-5 disabled:text-gray-2 disabled:outline-none",
                className,
            )}
            ref={ref}
            onClick={increment}
            {...props}
        >
            {children}
        </button>
    );
});
NumberInputIncrementButton.displayName = "NumberInputIncrementButton";

export const NumberInputDecrementButton = forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
    const { decrement } = useNumberInput();

    return (
        <button
            className={twMerge(
                "flex rounded-sm border border-black-3 px-2.5 py-1.5 text-sm font-semibold text-black-3 hover:z-10 hover:border-primary-3 hover:bg-primary-5 hover:text-primary-3 focus-visible:z-10 disabled:border-gray-2 disabled:bg-gray-5 disabled:text-gray-2 disabled:outline-none",
                className,
            )}
            ref={ref}
            onClick={decrement}
            {...props}
        >
            {children}
        </button>
    );
});
NumberInputDecrementButton.displayName = "NumberInputDecrementButton";
