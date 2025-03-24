import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Field, type InputProps } from "@/components/field";
import { Icon } from "@/components/icon";

type PasswordInputProps = Omit<InputProps, "type"> & {
    label?: string;
    errors?: string[];
};

export const PasswordInput = ({
    label,
    name,
    errors,
    className,
    ...props
}: PasswordInputProps) => {
    const [visible, setVisible] = useState(false);

    return (
        <Field.Root>
            {label && <Field.Label htmlFor={name}>{label}</Field.Label>}
            <Field.Input
                id={name}
                name={name}
                type={visible ? "text" : "password"}
                className={twMerge("pr-12", className)}
                {...props}
            />
            <Icon
                icon={visible ? "eye-off" : "eye"}
                className="absolute right-3 top-[calc(50%-12px+5px)] z-10 cursor-pointer select-none"
                onClick={() => setVisible((prev) => !prev)}
            />
            <Field.Error errors={errors} />
        </Field.Root>
    );
};
