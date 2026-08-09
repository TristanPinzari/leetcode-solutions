function convert(s: string, numRows: number): string {
    const arr = new Array(numRows).fill("");
    const gap = numRows + Math.max(0, numRows - 2);
    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < s.length; j += gap) {
            arr[i] += s[j];
            if (i !== 0 && i !== numRows - 1) arr[i] += s[gap * arr[i].length - j] ?? "";
        }
    }
    return arr.join("");
};