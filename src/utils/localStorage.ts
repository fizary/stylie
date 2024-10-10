export class LocalStorage<T extends Record<string, unknown>> {
    get = (key: keyof T): T[keyof T] | null =>
        JSON.parse(localStorage.getItem(String(key))!);
    set = (key: keyof T, value: T[keyof T]) =>
        localStorage.setItem(String(key), JSON.stringify(value));
    remove = (key: keyof T) => localStorage.removeItem(String(key));
}
