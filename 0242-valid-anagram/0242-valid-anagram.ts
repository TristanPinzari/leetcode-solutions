function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const sMap = new Map(), tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
        tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
    }
    for (const [key, val] of sMap) {
        if (val !== tMap.get(key)) return false;
    }
    return true;
};