import { getApiUrl } from "@/utils/api";
import type { FormResponse } from "@/types/form";
import type { LoginFormInputsType, RegisterFormInputsType } from "./types";

export async function login({
    email,
    password,
}: LoginFormInputsType): Promise<FormResponse<LoginFormInputsType>> {
    const response = await fetch(getApiUrl("/api/user/login"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    return response.json();
}

export async function register({
    email,
    password,
}: RegisterFormInputsType): Promise<FormResponse<RegisterFormInputsType>> {
    const response = await fetch(getApiUrl("/api/user/register"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    return response.json();
}
