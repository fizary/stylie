import {
    forwardRef,
    type HTMLAttributes,
    type InputHTMLAttributes,
    type ButtonHTMLAttributes,
    type PropsWithChildren,
    type KeyboardEvent,
} from "react";
import { useStableCallback } from "@/hooks/use-stable-callback";
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
>(({ children, ...props }, ref) => {
    return (
        <div ref={ref} {...props}>
            {children}
        </div>
    );
});
NumberInputContainer.displayName = "NumberInputContainer";

export const NumberInputInput = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => {
    const {
        min,
        max,
        value,
        isEmpty,
        increment,
        decrement,
        update,
        finalizeInput,
    } = useNumberInput();

    const keydownActions: Record<string, () => void> = {
        ArrowUp: increment,
        ArrowDown: decrement,
        Home: () => update(min),
        End: () => update(max),
    };

    const handleKeydown = useStableCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            const action = keydownActions[e.key];
            if (!action) return;

            e.preventDefault();
            action();
        },
    );

    return (
        <input
            type="text"
            inputMode="numeric"
            value={isEmpty ? "" : value}
            role="spinbutton"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            ref={ref}
            onKeyDown={handleKeydown}
            onChange={(e) => update(e.currentTarget.value)}
            onBlur={finalizeInput}
            {...props}
        />
    );
});
NumberInputInput.displayName = "NumberInputInput";

export const NumberInputIncrementButton = forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
    const { increment } = useNumberInput();

    return (
        <button
            type="button"
            tabIndex={-1}
            aria-label="Increase value"
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
>(({ children, ...props }, ref) => {
    const { decrement } = useNumberInput();

    return (
        <button
            type="button"
            tabIndex={-1}
            aria-label="Decrease value"
            ref={ref}
            onClick={decrement}
            {...props}
        >
            {children}
        </button>
    );
});
NumberInputDecrementButton.displayName = "NumberInputDecrementButton";
