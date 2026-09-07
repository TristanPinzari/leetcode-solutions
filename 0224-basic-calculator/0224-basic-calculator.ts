function findCorrBracket(s: string, i: number): number {
    let skip = 0;
    for (let j = i + 1; j < s.length; j++) {
        const char = s[j];
        if (char === "(") {
            skip++;
            continue;
        }
        if (char === ")") {
            if (skip > 0) {
                skip--;
                continue;
            }
            return j;
        }
    }
}

function calculateNormalized(s: string): number {
    let result = 0, left = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i - 1] === "-" && s[i] === "-") {
            left = i + 1;
            continue;
        }
        if (i === s.length - 1) {
            result += Number(s.slice(left, i + 1))
            return result;
        };
        if (left !== i && (s[i] === "+" || s[i] === "-")) {
            result += Number(s.slice(left, i));
            left = s[i] === "+" ? i + 1 : i;
        }
    }
}

function resolve(s: string): number {
    let normalized = "";
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === " " || char === ")") continue;
        if (char === "(") {
            const corrBracket = findCorrBracket(s, i);
            normalized += resolve(s.slice(i + 1, corrBracket));
            i = corrBracket;
        } else {
            normalized += char;
        }
    }
    return calculateNormalized(normalized);
}

function calculate(s: string): number {
    return resolve(s);
};