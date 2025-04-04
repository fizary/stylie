import {
    createContext,
    useState,
    useEffect,
    type PropsWithChildren,
} from "react";
import { useStableCallback } from "@/hooks/use-stable-callback";

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

    const finalizeInput = useStableCallback(() => setEmpty(false));

    const increment = useStableCallback(() =>
        setValue((prev) => (prev < max ? prev + 1 : max)),
    );

    const decrement = useStableCallback(() =>
        setValue((prev) => (prev > min ? prev - 1 : min)),
    );

    const update = useStableCallback((value: string | number) => {
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
    });

    const updateToMinMax = useStableCallback(() => {
        if (value < min) setValue(min);
        else if (value > max) setValue(max);
    });

    useEffect(() => {
        updateToMinMax();
    }, [min, max, updateToMinMax]);

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
