import { Icon } from "./icon";
import {
    NumberInput as NumberInputPrimitives,
    type NumberInputOptions,
} from "@/components/composables/number-input";

type AmountInputProps = NumberInputOptions & {
    disabled?: boolean;
};

export const AmountInput = ({
    disabled,
    min = 1,
    max = 99,
    value,
    setValue,
}: AmountInputProps) => {
    return (
        <NumberInputPrimitives.Root
            min={min}
            max={max}
            value={value}
            setValue={setValue}
        >
            <NumberInputPrimitives.Container className="flex">
                <NumberInputPrimitives.DecrementButton
                    className="flex rounded-sm border border-black-3 px-2.5 py-1.5 text-sm font-semibold text-black-3 hover:z-20 hover:border-primary-3 hover:bg-primary-5 hover:text-primary-3 focus-visible:z-20 disabled:z-0 disabled:border-gray-2 disabled:bg-gray-5 disabled:text-gray-2 disabled:outline-none"
                    aria-label="Decrease amount"
                    disabled={disabled || value <= min}
                >
                    <Icon className="h-5" icon="remove" />
                </NumberInputPrimitives.DecrementButton>
                <NumberInputPrimitives.Input
                    className="z-10 -mx-px w-20 border border-black-3 px-6 py-1 text-center text-sm font-semibold outline-none focus-visible:border-primary-3 focus-visible:text-primary-3 disabled:border-gray-2 disabled:bg-gray-5 disabled:text-gray-2 disabled:outline-none"
                    name="amount"
                    aria-label="Amount"
                    disabled={disabled}
                />
                <NumberInputPrimitives.IncrementButton
                    className="flex rounded-sm border border-black-3 px-2.5 py-1.5 text-sm font-semibold text-black-3 hover:z-20 hover:border-primary-3 hover:bg-primary-5 hover:text-primary-3 focus-visible:z-20 disabled:z-0 disabled:border-gray-2 disabled:bg-gray-5 disabled:text-gray-2 disabled:outline-none"
                    aria-label="Increase amount"
                    disabled={disabled || value >= max}
                >
                    <Icon className="h-5" icon="add" />
                </NumberInputPrimitives.IncrementButton>
            </NumberInputPrimitives.Container>
        </NumberInputPrimitives.Root>
    );
};
