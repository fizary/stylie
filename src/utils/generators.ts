export function createIdGenerator() {
    let ID = 1;
    return () => ID++;
}
