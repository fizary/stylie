const locks: string[] = [];

export function lockScroll(name: string) {
    if (locks.includes(name)) return;

    locks.push(name);
    document.body.style.overflow = "hidden";
}

export function unlockScroll(name: string) {
    const index = locks.indexOf(name);

    if (index < 0) return;

    locks.splice(index, 1);

    if (locks.length === 0) document.body.style.overflow = "";
}
