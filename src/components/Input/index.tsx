import { Field, type InputProps as BaseInputProps } from "@/components/Field";

type InputProps = BaseInputProps & {
    label?: string;
    errors?: string[];
};

export const Input = ({ label, name, errors, ...props }: InputProps) => {
    return (
        <Field.Root>
            {label && <Field.Label htmlFor={name}>{label}</Field.Label>}
            <Field.Input id={name} name={name} {...props} />
            <Field.Error errors={errors} />
        </Field.Root>
    );
};
