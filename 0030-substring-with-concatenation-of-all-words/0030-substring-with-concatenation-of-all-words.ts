function findSubstring(s: string, words: string[]): number[] {
    const results: number[] = [];
    const L = words[0].length;
    const k = words.length;
    const totalLen = L * k;
    if (s.length < totalLen) return results;

    const wordsMap = new Map<string, number>();
    for (const w of words) {
        wordsMap.set(w, (wordsMap.get(w) ?? 0) + 1);
    }

    // One independent pass per starting offset
    for (let r = 0; r < L; r++) {
        let left = r;
        let count = 0; // number of words currently correctly placed in the window
        const windowMap = new Map<string, number>();

        for (let right = r; right + L <= s.length; right += L) {
            const word = s.slice(right, right + L);

            if (wordsMap.has(word)) {
                windowMap.set(word, (windowMap.get(word) ?? 0) + 1);
                count++;

                // too many of this word — shrink from the left until valid
                while (windowMap.get(word)! > wordsMap.get(word)!) {
                    const leftWord = s.slice(left, left + L);
                    windowMap.set(leftWord, windowMap.get(leftWord)! - 1);
                    left += L;
                    count--;
                }

                // window has grown too wide — shrink from the left
                if (right - left + L === totalLen) {
                    // window is exactly the right size AND all counts valid
                    if (count === k) results.push(left);
                }
                // if window exceeds totalLen in words, shrink by one from left
                if (right - left + L > totalLen) {
                    const leftWord = s.slice(left, left + L);
                    windowMap.set(leftWord, windowMap.get(leftWord)! - 1);
                    left += L;
                    count--;
                }
            } else {
                // invalid word — reset window entirely, starting fresh after this word
                windowMap.clear();
                count = 0;
                left = right + L;
            }
        }
    }

    return results;
}