import { createIdGenerator } from "@/utils/generators";
import type {
    ToastContent,
    AddToastEvent,
    UpdateToastEvent,
    RemoveToastEvent,
} from "./types";

const generateId = createIdGenerator();

export function addToast(content: ToastContent) {
    const id = generateId();
    const event = new CustomEvent<AddToastEvent>("toast", {
        detail: {
            type: "add",
            id,
            content,
        },
    });

    window.dispatchEvent(event);

    return id;
}

export function updateToast(id: number, content: ToastContent) {
    const event = new CustomEvent<UpdateToastEvent>("toast", {
        detail: {
            type: "update",
            id,
            content,
        },
    });

    window.dispatchEvent(event);
}

export function removeToast(id: number) {
    const event = new CustomEvent<RemoveToastEvent>("toast", {
        detail: {
            type: "remove",
            id,
        },
    });

    window.dispatchEvent(event);
}
