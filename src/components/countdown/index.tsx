import { twMerge } from "tailwind-merge";
import { useCountdown } from "./hooks/use-countdown";

type CountdownProps = {
    destinationTimestamp: number;
    highlightAtDifference?: number;
};

export const Countdown = ({
    destinationTimestamp,
    highlightAtDifference = 86400000,
}: CountdownProps) => {
    const countdown = useCountdown(destinationTimestamp);

    return (
        <div
            className={twMerge(
                "flex items-baseline gap-x-2.5 text-lg font-semibold text-black-3 transition-colors duration-500",
                highlightAtDifference - countdown.difference > 0 &&
                    "text-danger-1",
            )}
        >
            <span className="text-sm">Offer ends in</span>
            {`${countdown.days}d : ${countdown.hours}h : ${countdown.minutes}m : ${countdown.seconds}s`}
        </div>
    );
};
