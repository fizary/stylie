import { type ReactNode } from "react";
import { type UseQueryResult } from "@tanstack/react-query";

type DeferProps<T> = {
    query: UseQueryResult<T>;
    fallback?: ReactNode;
    errorElement?: ReactNode;
    children?: ReactNode | ((data: T) => ReactNode);
};

export const Defer = <T,>({
    query,
    fallback,
    errorElement,
    children,
}: DeferProps<T>) => {
    const { data, isPending, isError } = query;

    return isPending
        ? fallback
        : isError
          ? errorElement
          : typeof children === "function"
            ? children(data)
            : children;
};
