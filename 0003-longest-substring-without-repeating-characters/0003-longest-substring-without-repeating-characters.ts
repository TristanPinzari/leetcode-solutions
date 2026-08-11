function lengthOfLongestSubstring(s: string): number {
    if (s.length < 2) return s.length;
    let highest = 1, left = 0;
    const map = new Map([[s[0], 0]]);
    for (let i = 1; i < s.length; i++) {
        const curr = s[i];
        if (map.has(curr) && map.get(curr) >= left) {
            left = map.get(curr) + 1;
        }
        highest = Math.max(highest, i - left + 1);
        map.set(curr, i);
    }
    return highest;
};