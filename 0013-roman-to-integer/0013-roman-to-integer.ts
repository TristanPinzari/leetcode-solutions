function romanToInt(s: string): number {
    let total = 0;
    const valueMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    const arr = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        arr[i] = valueMap[s[i]];
    }

    for (let i = 0; i < s.length; i++) {
        if (arr[i] < arr[i + 1]) {
            arr[i + 1] -= arr[i];
        } else {
            total += arr[i];
        };
    }

    return total;
};