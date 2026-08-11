function findSubstring(s: string, words: string[]): number[] {
    const results = new Array();
    const n = words[0].length;
    const wordsMap = new Map();
    for (let i = 0; i < words.length; i++) {
        const curr = words[i];
        wordsMap.set(curr, (wordsMap.get(curr) ?? 0) + 1);
    }
    const map = new Map();
    let left = 0;
    console.log(wordsMap);
    for (let i = 0; i <= s.length - n * words.length; i++) {
        let index = i, counter = 0;
        while (index < i + n * words.length) {
            const slice = s.slice(index, index + n);
            if (wordsMap.has(slice) && wordsMap.get(slice) >= (map.get(slice) ?? 0) + 1) {
                counter++;
                if (counter === words.length) {
                    results.push(i);
                    break;
                }
                map.set(slice, (map.get(slice) ?? 0) + 1);
            } else {
                break;
            }
            index += n;
        }
        map.clear();
    }
    return results;
};