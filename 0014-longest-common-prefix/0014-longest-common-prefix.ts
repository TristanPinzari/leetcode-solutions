function longestCommonPrefix(strs: string[]): string {
    let res = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < res.length && res[j] === strs[i][j]) j++;
        res = res.slice(0, j);
    }
    return res;
};