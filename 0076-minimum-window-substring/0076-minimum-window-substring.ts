function minWindow(s: string, t: string): string {
    if (t.length > s.length) return "";

    const need = new Map<string, number>();
    for (const char of t) {
        need.set(char, (need.get(char) ?? 0) + 1);
    }

    const window = new Map<string, number>();
    let left = 0;
    let matched = 0; // number of distinct chars in `need` currently fully satisfied
    let bestLeft = 0;
    let bestLen = Infinity;

    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];

        if (need.has(rightChar)) {
            window.set(rightChar, (window.get(rightChar) ?? 0) + 1);
            if (window.get(rightChar) === need.get(rightChar)) {
                matched++;
            }
        }

        // Once fully matched, shrink from the left as much as possible
        while (matched === need.size) {
            if (right - left + 1 < bestLen) {
                bestLen = right - left + 1;
                bestLeft = left;
            }

            const leftChar = s[left];
            if (need.has(leftChar)) {
                window.set(leftChar, window.get(leftChar)! - 1);
                if (window.get(leftChar)! < need.get(leftChar)!) {
                    matched--;
                }
            }
            left++;
        }
    }

    return bestLen === Infinity ? "" : s.slice(bestLeft, bestLeft + bestLen);
}