import { createContext, useState, type PropsWithChildren } from "react";

export type NumberInputOptions = {
    min?: number;
    max?: number;
    value: number;
    setValue: (value: number | ((previousValue: number) => number)) => void;
};

export type NumberInputState = {
    isEmpty: boolean;
    value: number;
    increment: () => void;
    decrement: () => void;
    update: (value: string) => void;
    finalizeInput: () => void;
};

export const NumberInputContext = createContext<NumberInputState>({
    isEmpty: false,
    value: 0,
    finalizeInput: () => {},
    increment: () => {},
    decrement: () => {},
    update: () => {},
});

export const NumberInputProvider = ({
    min,
    max,
    value,
    setValue,
    children,
}: PropsWithChildren<Required<NumberInputOptions>>) => {
    const [isEmpty, setEmpty] = useState(false);

    const finalizeInput = () => setEmpty(false);
    const increment = () => setValue((prev) => (prev < max ? prev + 1 : max));
    const decrement = () => setValue((prev) => (prev > min ? prev - 1 : min));

    const update = (value: string) => {
        const sanitizePattern = /[^0-9]/g;
        const sValue = value.replace(sanitizePattern, "");
        const nValue = parseInt(sValue, 10);

        setValue(
            Number.isNaN(nValue) ? min : Math.min(Math.max(nValue, min), max),
        );

        setEmpty(sValue === "");
    };

    return (
        <NumberInputContext.Provider
            value={{
                isEmpty,
                value,
                finalizeInput,
                increment,
                decrement,
                update,
            }}
        >
            {children}
        </NumberInputContext.Provider>
    );
};
