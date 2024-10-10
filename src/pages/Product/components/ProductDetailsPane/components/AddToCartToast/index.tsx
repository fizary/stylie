import { type AnimationEvent } from "react";
import { type ToastProps } from "@/components/Toast";
import { Icon } from "@/components/Icon";

type AddToCartToastProps = ToastProps & {
    duration?: number;
    name: string;
    image: string;
    size: string;
    amount: number;
};

export const AddToCartToast = ({
    name,
    image,
    size,
    amount,
    status,
    duration = 8,
    updateStatus,
    remove,
}: AddToCartToastProps) => {
    const handleRootAnimationEnd = (e: AnimationEvent<HTMLElement>) => {
        e.stopPropagation();
        if (status === "enter") updateStatus("active");
        if (status === "leave") remove();
    };

    const handleTimerAnimationEnd = (e: AnimationEvent<HTMLElement>) => {
        e.stopPropagation();
        updateStatus("leave");
    };

    return (
        <div
            onAnimationEnd={handleRootAnimationEnd}
            className="group/toast rounded-sm border border-gray-3 bg-gray-5 shadow-[0_.5rem_1rem_rgba(0,0,0,.15)]"
            style={{
                animationName:
                    status === "enter"
                        ? "toast-enter"
                        : status === "leave"
                          ? "toast-leave"
                          : "",
                animationDuration: ".25s",
                animationTimingFunction: "linear",
                animationFillMode: "both",
            }}
        >
            <div
                onAnimationEnd={handleTimerAnimationEnd}
                className="h-0.5 bg-primary-3 group-hover/toast:[animation-play-state:paused]"
                style={{
                    animationName: status !== "enter" ? "shrink" : "",
                    animationDuration: `${duration}s`,
                    animationTimingFunction: "linear",
                    animationFillMode: "forwards",
                }}
            />
            <div className="flex justify-between">
                <div className="flex items-center gap-5 overflow-hidden p-1">
                    <img src={image} className="aspect-square h-20" />
                    <div className="overflow-hidden">
                        <div className="mb-0.5 text-sm font-semibold">
                            ADDED TO CART
                        </div>
                        <div className="overflow-hidden text-ellipsis text-nowrap text-base font-bold text-primary-3">
                            <span className="text-xs font-normal text-black-3">
                                {amount}x{" "}
                            </span>
                            {name}
                        </div>
                        <div className="text-xs">
                            <span className="font-bol">Size:</span> {size}
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => updateStatus("leave")}
                    className="h-9 cursor-pointer p-1 hover:text-primary-3"
                >
                    <Icon icon="close" className="h-full" />
                </button>
            </div>
        </div>
    );
};
