import {
    createContext,
    useState,
    useCallback,
    useEffect,
    type PropsWithChildren,
} from "react";
import { getCountdown } from "./utils";

export type CountdownOptions = {
    destinationTime: number;
    highlightAt?: number;
};

export type CountdownState = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

type CountdownContextType = {
    countdown: CountdownState;
    isHighlighted: boolean;
};

export const CountdownContext = createContext<CountdownContextType>({
    countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
    isHighlighted: false,
});

export const CountdownProvider = ({
    destinationTime,
    highlightAt,
    children,
}: PropsWithChildren<CountdownOptions>) => {
    const [countdown, setCountdown] = useState<CountdownState>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isHighlighted, setHighlighted] = useState(false);

    const update = useCallback(() => {
        const currentTime = Date.now();

        setHighlighted(
            highlightAt
                ? highlightAt - (destinationTime - currentTime) > 0
                : false,
        );
        setCountdown(getCountdown(currentTime, destinationTime));

        return currentTime;
    }, [destinationTime, highlightAt]);

    useEffect(() => {
        update();

        const interval = setInterval(() => {
            const currentTime = update();
            if (currentTime > destinationTime) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, [destinationTime, update]);

    return (
        <CountdownContext.Provider value={{ countdown, isHighlighted }}>
            {children}
        </CountdownContext.Provider>
    );
};
