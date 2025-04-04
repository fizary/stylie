import {
    createContext,
    useState,
    useCallback,
    useEffect,
    type PropsWithChildren,
} from "react";

export type NumberInputOptions = {
    min?: number;
    max?: number;
    value: number;
    setValue: (value: number | ((previousValue: number) => number)) => void;
};

export type NumberInputState = {
    min: number;
    max: number;
    value: number;
    isEmpty: boolean;
    increment: () => void;
    decrement: () => void;
    update: (value: string | number) => void;
    finalizeInput: () => void;
};

export const NumberInputContext = createContext<NumberInputState>({
    min: 0,
    max: 0,
    value: 0,
    isEmpty: false,
    increment: () => {},
    decrement: () => {},
    update: () => {},
    finalizeInput: () => {},
});

export const NumberInputProvider = ({
    min,
    max,
    value,
    setValue,
    children,
}: PropsWithChildren<Required<NumberInputOptions>>) => {
    const [isEmpty, setEmpty] = useState(false);

    const finalizeInput = useCallback(() => setEmpty(false), []);

    const increment = useCallback(
        () => setValue((prev) => (prev < max ? prev + 1 : max)),
        [max, setValue],
    );

    const decrement = useCallback(
        () => setValue((prev) => (prev > min ? prev - 1 : min)),
        [min, setValue],
    );

    const update = useCallback(
        (value: string | number) => {
            let newValue = value;

            if (typeof newValue === "string") {
                const sanitizePattern = /[^0-9]/g;
                const safeValue = newValue.replace(sanitizePattern, "");
                newValue = parseInt(safeValue, 10);
                setEmpty(safeValue === "");
            } else setEmpty(false);

            setValue(
                Number.isNaN(newValue)
                    ? min
                    : Math.min(Math.max(newValue, min), max),
            );
        },
        [min, max, setValue],
    );

    useEffect(() => {
        setValue((prev) => Math.min(Math.max(prev, min), max));
    }, [min, max, setValue]);

    return (
        <NumberInputContext.Provider
            value={{
                min,
                max,
                value,
                isEmpty,
                increment,
                decrement,
                update,
                finalizeInput,
            }}
        >
            {children}
        </NumberInputContext.Provider>
    );
};
