import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { register, type RegisterFormInputsType } from "@/services/user";
import { invalidateFormInputs } from "@/utils/form";
import type { FormInputErrors } from "@/types/form";

export function useRegisterForm() {
    const navigate = useNavigate();
    const [isPending, setPending] = useState(false);
    const [formError, setFormError] = useState<string | undefined>(undefined);
    const [inputErrors, setInputErrors] = useState<
        FormInputErrors<RegisterFormInputsType>
    >({});

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        setPending(true);
        const response = await register({ email, password });
        setPending(false);

        if (response.status === "success") return navigate("/my-account");

        setFormError(response.message);
        setInputErrors(response.errors);
        invalidateFormInputs(form, response.errors);
    }

    return {
        handleSubmit,
        isPending,
        formError,
        inputErrors,
    };
}
