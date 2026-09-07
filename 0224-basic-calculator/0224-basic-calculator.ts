function calculate(s: string): number {
    const stack = new Array();
    let result = 0, temp = 0, context = 1;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === " ") continue;
        if (char === "0" || Number(char)) {
            if (temp) temp *= 10;
            temp += Number(char);
            const next = s[i + 1];
            if (!s[i + 1] || next === " " || isNaN(Number(s[i + 1]))) {
                const res = Number(context * temp);
                if (stack.length === 0) {
                    result += res;
                } else {
                    stack[stack.length - 1][1] += res;
                }
                temp = 0;
            }
            continue;
        }
        switch (char) {
            case "+":
                context = 1;
                break;
            case "-":
                context = -1;
                break;
            case "(":
                stack.push([context, 0]);
                context = 1;
                break;
            case ")":
                const pop = stack.pop(), res = Number(pop[0] * pop[1])
                if (stack.length === 0) {
                    result += res;
                } else {
                    stack[stack.length - 1][1] += res;
                }
                break;
        }
    }
    return result;
};