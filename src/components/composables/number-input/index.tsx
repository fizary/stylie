import {
    NumberInputRoot,
    NumberInputContainer,
    NumberInputInput,
    NumberInputIncrementButton,
    NumberInputDecrementButton,
} from "./components";

export const NumberInput = {
    Root: NumberInputRoot,
    Container: NumberInputContainer,
    Input: NumberInputInput,
    IncrementButton: NumberInputIncrementButton,
    DecrementButton: NumberInputDecrementButton,
};

export { useNumberInput } from "./use-number-input";
export type { NumberInputOptions } from "./context";
