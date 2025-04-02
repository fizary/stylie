import { forwardRef, type HTMLAttributes, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { CountdownProvider, type CountdownOptions } from "./context";
import { useCountdown } from "./use-countdown";

export const CountdownRoot = ({
    destinationTime,
    highlightAt,
    children,
}: PropsWithChildren<CountdownOptions>) => {
    return (
        <CountdownProvider
            destinationTime={destinationTime}
            highlightAt={highlightAt}
        >
            {children}
        </CountdownProvider>
    );
};

export const CountdownContainer = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const { isHighlighted } = useCountdown();

    return (
        <div
            className={twMerge(
                "flex items-baseline gap-x-2.5 text-lg font-semibold text-black-3",
                className,
            )}
            data-highlighted={isHighlighted ? true : undefined}
            ref={ref}
            {...props}
        >
            {children}
        </div>
    );
});
CountdownContainer.displayName = "CountdownContainer";

export const CountdownText = forwardRef<
    HTMLSpanElement,
    HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
    return (
        <span className={twMerge("text-sm", className)} ref={ref} {...props}>
            {children}
        </span>
    );
});
CountdownText.displayName = "CountdownText";

export const CountdownCounter = forwardRef<
    HTMLSpanElement,
    PropsWithChildren<HTMLAttributes<HTMLSpanElement>>
>(({ className, children, ...props }, ref) => {
    const { countdown } = useCountdown();

    return (
        <span className={className} ref={ref} {...props}>
            {children
                ? children
                : `${countdown.days}d : ${countdown.hours}h : ${countdown.minutes}m : ${countdown.seconds}s`}
        </span>
    );
});
CountdownCounter.displayName = "CountdownCounter";
