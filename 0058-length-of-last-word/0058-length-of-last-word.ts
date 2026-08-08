function lengthOfLastWord(s: string): number {
    let res = 0;
    s = s.trim();
    while ((s[s.length - 1 - res] ?? " ") !== " ") res++;
    return res;
};