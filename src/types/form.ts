export type FormInputs<T extends string = string> = Record<T, string>;

export type FormInputErrors<T extends FormInputs> = {
    [P in keyof T]?: string[];
};

export type FormResponseError<T extends FormInputs> = {
    status: "error";
    message?: string;
    errors: FormInputErrors<T>;
};

export type FormResponseSuccess = {
    status: "success";
};

export type FormResponse<T extends FormInputs = FormInputs> =
    | FormResponseError<T>
    | FormResponseSuccess;
