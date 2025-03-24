import { useState, useCallback, useEffect } from "react";

export function useScrollAtTop() {
    const [isScrollAtTop, setScrollAtTop] = useState(true);

    const handleScroll = useCallback(() => {
        if (scrollY !== 0) setScrollAtTop(false);
        else setScrollAtTop(true);
    }, [setScrollAtTop]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return isScrollAtTop;
}
