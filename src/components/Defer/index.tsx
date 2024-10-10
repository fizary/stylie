import { Suspense, type ReactNode } from "react";
import { Await } from "react-router-dom";

type DeferProps<T> = {
    data: T;
    fallback?: ReactNode;
    errorElement?: ReactNode;
    children?: ReactNode | ((resolvedData: Awaited<T>) => ReactNode);
};

export const Defer = <T,>({
    data,
    fallback,
    errorElement,
    children,
}: DeferProps<T>) => {
    return (
        <Suspense fallback={fallback}>
            <Await resolve={data} errorElement={errorElement}>
                {(resolvedData: Awaited<T>) =>
                    typeof children === "function"
                        ? children(resolvedData)
                        : children
                }
            </Await>
        </Suspense>
    );
};
