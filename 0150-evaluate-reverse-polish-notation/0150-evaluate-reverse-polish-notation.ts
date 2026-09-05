function evalRPN(tokens: string[]): number {
    const stack = new Array();
    for (const token of tokens) {
        if (Number(token) || token === "0") {
            stack.push(Number(token));
            continue;
        }
        let res;
        const second = stack.pop(), first = stack.pop();
        switch (token) {
            case "+":
                res = first + second;
                break;
            case "-":
                res = first - second;
                break;
            case "*":
                res = first * second;
                break;
            case "/":
                res = Math.trunc(first / second);
                break;
        }
        stack.push(res);
    }
    return stack[0];
};