import { useRef, useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useStableCallback<T extends (...args: any[]) => any>(
    callback: T,
): T {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    return useCallback<T>(
        ((...args) => {
            return callbackRef.current(...args);
        }) as T,
        [],
    );
}
