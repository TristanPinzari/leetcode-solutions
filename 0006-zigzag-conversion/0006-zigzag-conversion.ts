function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) return s;

    const n = s.length;
    const gap = 2 * numRows - 2;
    const rows: string[][] = new Array(numRows);
    for (let i = 0; i < numRows; i++) rows[i] = [];

    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < n; j += gap) {
            rows[i].push(s[j]);
            if (i !== 0 && i !== numRows - 1) {
                const diag = j + gap - 2 * i;
                if (diag < n) rows[i].push(s[diag]);
            }
        }
    }

    let result = "";
    for (let i = 0; i < numRows; i++) result += rows[i].join("");
    return result;
}