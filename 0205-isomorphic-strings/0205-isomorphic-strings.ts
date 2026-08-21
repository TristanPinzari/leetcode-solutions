function isIsomorphic(s: string, t: string): boolean {
    const map = new Map(), set = new Set();
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i], tChar = t[i], res = map.get(tChar);
        if (res && res !== sChar) return false;
        if (!res && set.has(sChar)) return false;
        map.set(tChar, sChar);
        set.add(sChar);
    }
    return true;
};