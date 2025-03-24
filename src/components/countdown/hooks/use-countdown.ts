import { useState, useEffect } from "react";

function getCountdown(currentTime: number, destinationTime: number) {
    const difference = destinationTime - currentTime;
    let diff = difference;

    const days = Math.max(Math.floor(diff / 86400000), 0);
    diff %= 86400000;

    const hours = Math.max(Math.floor(diff / 3600000), 0);
    diff %= 3600000;

    const minutes = Math.max(Math.floor(diff / 60000), 0);
    diff %= 60000;

    const seconds = Math.max(Math.floor(diff / 1000), 0);

    return {
        difference,
        days,
        hours,
        minutes,
        seconds,
    };
}

export function useCountdown(destinationTime: number) {
    const [countdown, setCountdown] = useState({
        difference: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setCountdown(getCountdown(Date.now(), destinationTime));

        const interval = setInterval(() => {
            const currentTime = Date.now();

            if (currentTime > destinationTime) clearInterval(interval);

            setCountdown(getCountdown(currentTime, destinationTime));
        }, 1000);

        return () => clearInterval(interval);
    }, [destinationTime]);

    return countdown;
}
