function doSomething(n: number, set: Set<Number>): boolean {
    let result = 0;
    for (const digit of String(n)) {
        result += Number(digit) ** 2;
    }
    if (result === 1) {
        return true;
    } else if (set.has(result)) {
        return false;
    } else {
        set.add(result);
        return doSomething(result, set);
    }
}

function isHappy(n: number): boolean {
    const set = new Set<Number>();
    return doSomething(n, set);
};