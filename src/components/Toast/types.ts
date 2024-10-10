import { type ReactNode } from "react";

export type ToastStatus = "enter" | "active" | "leave";
export type ToastContent = (props: ToastProps) => ReactNode;

export type ToastProps = {
    status: ToastStatus;
    updateStatus: (status: ToastStatus) => void;
    remove: () => void;
};

export type ToastType = {
    id: number;
    content: ToastContent;
    status: ToastStatus;
};

export type ToastEvent = CustomEvent<
    AddToastEvent | UpdateToastEvent | RemoveToastEvent
>;

export type AddToastEvent = {
    type: "add";
    id: number;
    content: ToastContent;
};

export type UpdateToastEvent = {
    type: "update";
    id: number;
    content: ToastContent;
};

export type RemoveToastEvent = {
    type: "remove";
    id: number;
};
