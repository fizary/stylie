import type { FormInputs, FormInputErrors } from "@/types/form";

export function invalidateFormInputs(
    form: HTMLFormElement,
    errors: FormInputErrors<FormInputs>,
) {
    let firstErroredField: HTMLInputElement | null = null;

    for (const field of form.elements) {
        if (field instanceof HTMLInputElement) {
            const fieldErrors = errors[field.name];

            if (fieldErrors !== undefined) {
                field.setCustomValidity(fieldErrors.join("\n"));

                if (firstErroredField === null) firstErroredField = field;
            } else field.setCustomValidity("");
        }
    }

    firstErroredField?.focus();
}
