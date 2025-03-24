import { useState, useCallback } from "react";
import { ScrollRestoration, Outlet, useLoaderData } from "react-router-dom";
import { ToastContainer } from "@/components/toast";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { CartProvider } from "@/contexts/cart";
import { useScrollAtTop } from "./hooks/use-scroll-at-top";
import { lockScroll, unlockScroll } from "@/utils/scroll-lock";
import { type LayoutLoaderData } from "./loaders";

export const Layout = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);
    const isScrollAtTop = useScrollAtTop();
    const { cart } = useLoaderData() as LayoutLoaderData;

    const showSidebar = useCallback(() => {
        setSidebarActive(true);
        lockScroll("menu");
    }, [setSidebarActive]);

    const hideSidebar = useCallback(() => {
        setSidebarActive(false);
        unlockScroll("menu");
    }, [setSidebarActive]);

    return (
        <CartProvider cart={cart}>
            <ScrollRestoration />
            <Navbar isSticky={!isScrollAtTop} showSidebar={showSidebar} />
            <Sidebar isActive={isSidebarActive} hideSidebar={hideSidebar} />
            <Outlet />
            <Footer />
            <ToastContainer />
        </CartProvider>
    );
};
