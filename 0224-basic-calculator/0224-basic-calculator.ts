function calculate(s: string): number {
    const stack: number[] = [];
    let res = 0;
    let curr = 0;
    let sign = 1;

    for (const c of s) {
        if (/\d/.test(c)) {
            curr = curr * 10 + Number(c);
        } else if (c === '+') {
            res += sign * curr;
            sign = 1;
            curr = 0;
        } else if (c === '-') {
            res += sign * curr;
            sign = -1;
            curr = 0;
        } else if (c === '(') {
            stack.push(res);
            stack.push(sign);
            res = 0;
            sign = 1;
        } else if (c === ')') {
            res += sign * curr;
            curr = 0;
            res *= stack.pop()!;
            res += stack.pop()!;
        }
    }

    res += sign * curr;
    return res;
}