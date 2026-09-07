function calculate(s: string): number {
    const sLength = s.length;
    if (sLength === 1) {
        return Number(s);
    }

    let num = 0;
    let sign = 1;
    let result = 0;
    const stack: number[] = [];

    for (let i = 0; i < sLength; i++) {
        const char = s[i];

        if (char === " ") {
            continue;
        }

        if (char === "+" || char === "-") {
            result += sign * num;
            sign = char === "+" ? 1 : -1;
            num = 0;
            continue;
        }

        if (char === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
            continue;
        }

        if (char === ")") {
            result += sign * num;
            num = 0;
            result *= stack.pop()!;
            result += stack.pop()!;
            continue;
        }

        num = num * 10 + Number(char);
    }

    return result + sign * num;
};