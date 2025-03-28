import { useState, useCallback } from "react";
import { ScrollRestoration, Outlet } from "react-router-dom";
import { ToastContainer } from "@/components/toast";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { useScrollAtTop } from "./hooks/use-scroll-at-top";
import { CartProvider } from "@/features/cart";
import { lockScroll, unlockScroll } from "@/utils/scroll-lock";

export const Layout = () => {
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
        <CartProvider>
            <ScrollRestoration />
            <Navbar isSticky={!isScrollAtTop} showSidebar={showSidebar} />
            <Sidebar isActive={isSidebarActive} hideSidebar={hideSidebar} />
            <Outlet />
            <Footer />
            <ToastContainer />
        </CartProvider>
    );
};
