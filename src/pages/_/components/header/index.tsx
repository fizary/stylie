import { useState, useCallback } from "react";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import { useScrollAtTop } from "./use-scroll-at-top";
import { lockScroll, unlockScroll } from "@/utils/scroll-lock";

export const Header = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);
    const isScrollAtTop = useScrollAtTop();

    const showSidebar = useCallback(() => {
        setSidebarActive(true);
        lockScroll("menu");
    }, [setSidebarActive]);

    const hideSidebar = useCallback(() => {
        setSidebarActive(false);
        unlockScroll("menu");
    }, [setSidebarActive]);

    return (
        <>
            <Navbar isSticky={!isScrollAtTop} showSidebar={showSidebar} />
            <Sidebar isActive={isSidebarActive} hideSidebar={hideSidebar} />
        </>
    );
};
