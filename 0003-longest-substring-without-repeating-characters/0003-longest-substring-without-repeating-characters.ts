function lengthOfLongestSubstring(s: string): number {
    const seen = new Map<string, number>();
    let left = 0;
    let maximum = 0;
    for (let right = 0; right < s.length; right++) {
        const current = s[right]
        if (seen.has(current) && seen.get(current) >= left) {
            left = seen.get(current) + 1
        }
        seen.set(current, right);

        maximum = Math.max(maximum, right - left + 1)
    }
    return maximum
};