import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "@/pages";

import "./index.css";

async function enableMocking() {
    if (process.env.NODE_ENV !== "development") return;

    const { worker } = await import("./mocks/browser");

    return worker.start({
        onUnhandledRequest: (request, print) => {
            const url = new URL(request.url);

            if (
                url.origin === location.origin &&
                url.pathname.startsWith("/api/")
            )
                print.error();
        },
    });
}

enableMocking().then(() => {
    const router = createBrowserRouter(routes);

    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    );
});
