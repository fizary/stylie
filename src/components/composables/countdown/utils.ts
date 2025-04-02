import { type CountdownState } from "./context";

export function getCountdown(
    currentTime: number,
    destinationTime: number,
): CountdownState {
    let diff = destinationTime - currentTime;

    const days = Math.max(Math.floor(diff / 86400000), 0);
    diff %= 86400000;

    const hours = Math.max(Math.floor(diff / 3600000), 0);
    diff %= 3600000;

    const minutes = Math.max(Math.floor(diff / 60000), 0);
    diff %= 60000;

    const seconds = Math.max(Math.floor(diff / 1000), 0);

    return {
        days,
        hours,
        minutes,
        seconds,
    };
}
