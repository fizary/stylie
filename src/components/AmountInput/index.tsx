import {
    useState,
    type InputHTMLAttributes,
    type Dispatch,
    type SetStateAction,
} from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "@/components/Icon";
import { SmallButton } from "@/components/SmallButton";

type AmountInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "min" | "max" | "value"
> & {
    min?: number;
    max?: number;
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
};

export const AmountInput = ({
    min = 1,
    max = 99,
    value,
    setValue,
    className,
    ...props
}: AmountInputProps) => {
    const [isEmpty, setEmpty] = useState(false);

    return (
        <div className={twMerge("flex", className)}>
            <SmallButton
                size="sm"
                className="hover:z-10 focus-visible:z-10"
                onClick={() =>
                    setValue((prev) => (prev > min ? prev - 1 : min))
                }
            >
                <Icon icon="remove" className="h-5" />
            </SmallButton>
            <input
                type="text"
                inputMode="numeric"
                className="mx-[-1px] w-20 border border-black-3 px-6 py-1 text-center text-sm font-semibold outline-none focus-visible:z-10 focus-visible:border-primary-3 focus-visible:text-primary-3"
                value={isEmpty ? "" : value}
                onChange={({ target }) => {
                    const sanitizePattern = /[^0-9]/g;
                    const newValue = parseInt(
                        target.value.replace(sanitizePattern, ""),
                        10,
                    );

                    setValue(
                        Number.isNaN(newValue)
                            ? min
                            : newValue < min
                              ? min
                              : newValue > max
                                ? max
                                : newValue,
                    );

                    setEmpty(target.value === "");
                }}
                onBlur={() => setEmpty(false)}
                {...props}
            />
            <SmallButton
                size="sm"
                className="hover:z-10 focus-visible:z-10"
                onClick={() =>
                    setValue((prev) => (prev < max ? prev + 1 : max))
                }
            >
                <Icon icon="add" className="h-5" />
            </SmallButton>
        </div>
    );
};
