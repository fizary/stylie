import { ScrollRestoration, Outlet } from "react-router-dom";
import { ToastContainer } from "@/components/toast";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { CartProvider } from "@/features/cart";

export const Layout = () => {
    return (
        <CartProvider>
            <ScrollRestoration />
            <Header />
            <Outlet />
            <Footer />
            <ToastContainer />
        </CartProvider>
    );
};
