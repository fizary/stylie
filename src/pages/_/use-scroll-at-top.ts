import { useState } from "react";
import { useEventListener } from "@/hooks/use-event-listener";

export const useScrollAtTop = () => {
    const [isScrollAtTop, setScrollAtTop] = useState(true);

    useEventListener(window, "scroll", () => {
        if (scrollY !== 0) setScrollAtTop(false);
        else setScrollAtTop(true);
    });

    return isScrollAtTop;
};
