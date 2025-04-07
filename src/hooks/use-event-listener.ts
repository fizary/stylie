import { useEffect, type RefObject, type MutableRefObject } from "react";
import { useStableCallback } from "@/hooks/use-stable-callback";

type ElementTarget = Window | Document | HTMLElement;
type RefTarget<T extends ElementTarget> = RefObject<T> | MutableRefObject<T>;
type Target = ElementTarget | RefTarget<ElementTarget> | null | undefined;

type EventMap<T extends ElementTarget> = T extends Window
    ? WindowEventMap
    : T extends Document
      ? DocumentEventMap
      : T extends HTMLElement
        ? HTMLElementEventMap
        : never;

export function useEventListener<
    T extends ElementTarget,
    K extends keyof EventMap<T>,
>(
    target: T | RefObject<T> | MutableRefObject<T> | null | undefined,
    type: K,
    handler: (event: EventMap<T>[K]) => void,
): void;
export function useEventListener(
    target: Target,
    type: string,
    handler: (event: Event) => void,
): void {
    const stableHandler = useStableCallback(handler);

    useEffect(() => {
        const resolvedTarget =
            target && "current" in target ? target.current : target;
        if (!resolvedTarget) return;

        resolvedTarget.addEventListener(type, stableHandler);
        return () => resolvedTarget.removeEventListener(type, stableHandler);
    }, [target, type, stableHandler]);
}
