import { useState, useCallback } from "react";
import { ScrollRestoration, Outlet, useLoaderData } from "react-router-dom";
import { ToastContainer } from "@/components/Toast";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { CartProvider } from "@/contexts/cart";
import { useScrollAtTop } from "./hooks/useScrollAtTop";
import { lockScroll, unlockScroll } from "@/utils/scrollLock";
import { type LayoutLoaderData } from "./loaders";

export const Layout = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);
    const isScrollAtTop = useScrollAtTop();
    const { cart, categories } = useLoaderData() as LayoutLoaderData;

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
            <Navbar
                categories={categories}
                isSticky={!isScrollAtTop}
                showSidebar={showSidebar}
            />
            <Sidebar
                categories={categories}
                isActive={isSidebarActive}
                hideSidebar={hideSidebar}
            />
            <Outlet />
            <Footer />
            <ToastContainer />
        </CartProvider>
    );
};
