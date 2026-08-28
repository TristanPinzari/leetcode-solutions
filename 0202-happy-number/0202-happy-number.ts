function isHappy(n: number): boolean {
    const set = new Set<number>();
    
    function doSomething(n: number): boolean {
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
            return doSomething(result);
        }
    }
    
    return doSomething(n);
}