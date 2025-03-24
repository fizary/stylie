import { Fragment, useState, useEffect, useCallback } from "react";
import type { ToastStatus, ToastType, ToastEvent } from "../../types";

declare global {
    interface WindowEventHandlersEventMap {
        toast: ToastEvent;
    }
}

export const ToastContainer = () => {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    const updateToastStatus = useCallback(
        (id: number, status: ToastStatus) =>
            setToasts((prevToasts) =>
                prevToasts.map((toast) =>
                    toast.id === id ? { ...toast, status } : toast,
                ),
            ),
        [],
    );

    const removeToast = useCallback(
        (id: number) =>
            setToasts((prevToasts) =>
                prevToasts.filter((toast) => toast.id !== id),
            ),
        [],
    );

    useEffect(() => {
        const toastHandler = (e: ToastEvent) => {
            const data = e.detail;

            if (data.type === "add")
                setToasts((prevToasts) => [
                    ...prevToasts,
                    {
                        id: data.id,
                        content: data.content,
                        status: "enter",
                    },
                ]);
            else if (data.type === "update")
                setToasts((prevToasts) =>
                    prevToasts.map((toast) =>
                        toast.id === data.id
                            ? { ...toast, content: data.content }
                            : toast,
                    ),
                );
            else if (data.type === "remove")
                updateToastStatus(data.id, "leave");
        };

        window.addEventListener("toast", toastHandler);
        return () => window.removeEventListener("toast", toastHandler);
    }, [updateToastStatus]);

    return (
        <div className="fixed bottom-0 right-0 z-10 flex w-full max-w-[380px] flex-col-reverse gap-y-3 p-2.5">
            {toasts.map((toast) => (
                <Fragment key={toast.id}>
                    {toast.content({
                        status: toast.status,
                        updateStatus: (status) =>
                            updateToastStatus(toast.id, status),
                        remove: () => removeToast(toast.id),
                    })}
                </Fragment>
            ))}
        </div>
    );
};
