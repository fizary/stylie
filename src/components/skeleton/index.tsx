import { twMerge } from "tailwind-merge";

type Skeleton = {
    className?: string;
};

export const Skeleton = ({ className }: Skeleton) => {
    return (
        <div
            className={twMerge("animate-pulse rounded-sm bg-gray-2", className)}
        ></div>
    );
};

type TextSkeleton = Skeleton & {
    lines?: number;
};

export const TextSkeleton = ({ className, lines = 1 }: TextSkeleton) => {
    return (
        <div className={twMerge("flex w-32 overflow-hidden", className)}>
            <div className="flex w-full shrink-0 animate-pulse flex-col justify-around">
                {Array.from({ length: lines }).map((_, i) => (
                    <div
                        key={i}
                        className="h-[1em] w-full rounded bg-gray-2"
                    ></div>
                ))}
            </div>
            <div
                className="w-px break-words"
                dangerouslySetInnerHTML={{
                    __html: "&nbsp;".repeat(lines),
                }}
            ></div>
        </div>
    );
};
