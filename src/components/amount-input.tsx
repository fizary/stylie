import { Icon } from "./icon";
import {
    NumberInput as NumberInputPrimitives,
    type NumberInputOptions,
} from "./composables/number-input";

export const AmountInput = ({
    min = 1,
    max = 99,
    value,
    setValue,
}: NumberInputOptions) => {
    return (
        <NumberInputPrimitives.Root
            min={min}
            max={max}
            value={value}
            setValue={setValue}
        >
            <NumberInputPrimitives.Container>
                <NumberInputPrimitives.DecrementButton>
                    <Icon className="h-5" icon="remove" />
                </NumberInputPrimitives.DecrementButton>
                <NumberInputPrimitives.Input />
                <NumberInputPrimitives.IncrementButton>
                    <Icon className="h-5" icon="add" />
                </NumberInputPrimitives.IncrementButton>
            </NumberInputPrimitives.Container>
        </NumberInputPrimitives.Root>
    );
};
