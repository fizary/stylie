import { Link } from "react-router-dom";
import { Button } from "@/components/button";
import { FormError } from "@/components/form-error";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { PasswordInput } from "@/components/password-input";
import { useRegisterForm } from "./hooks/use-register-form";

export const SignUpPage = () => {
    const { handleSubmit, isPending, formError, inputErrors } =
        useRegisterForm();

    return (
        <main className="container flex grow items-center justify-center py-10">
            <img
                src="/illustrations/signup.webp"
                className="hidden w-2/5 max-w-[26.25rem] md:block"
            />
            <form
                className="flex w-full max-w-[25rem] flex-col md:ml-10 md:min-h-80 md:border-l md:border-gray-3 md:py-7 md:pl-10"
                onSubmit={handleSubmit}
                noValidate
            >
                <Heading>Sign up</Heading>
                <div className="mt-2.5 text-sm font-semibold">
                    Join us today! Sign up now to receive notifications about
                    sales and exclusive offers only for you.
                </div>
                <fieldset className="my-6 flex flex-col gap-2.5">
                    <FormError error={formError} />
                    <Input
                        type="text"
                        name="email"
                        label="E-mail"
                        inputMode="email"
                        placeholder="Input e-mail address"
                        errors={inputErrors.email}
                    />
                    <PasswordInput
                        name="npassword"
                        label="Password"
                        placeholder="Input password"
                        errors={inputErrors.password}
                    />
                </fieldset>
                <Button type="submit" disabled={isPending}>
                    {isPending ? "Submitting..." : "Create account"}
                </Button>
                <div className="mt-3.5 text-xs font-semibold">
                    Already have an account?{" "}
                    <Link
                        to="/sign-in"
                        className="text-primary-3 underline hover:text-primary-2"
                    >
                        Sign in
                    </Link>
                </div>
            </form>
        </main>
    );
};
