function wordPattern(pattern: string, s: string): boolean {
    const map = new Map(), set = new Set(), words = s.split(" ");
    if (pattern.length !== words.length) return false;
    for (let i = 0; i < words.length; i++) {
        const currWord = words[i], currPattern = pattern[i], mapVal = map.get(currWord);
        if (mapVal && mapVal !== currPattern) return false;
        if (!mapVal && set.has(currPattern)) return false;
        map.set(currWord, currPattern);
        set.add(currPattern);
    }
    return true;
};