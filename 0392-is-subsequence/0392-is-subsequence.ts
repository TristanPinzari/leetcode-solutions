function isSubsequence(s: string, t: string): boolean {
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        const res = t.indexOf(s[i], index);
        if (res === -1) return false;
        index = res + 1;
    }
    return true;
};