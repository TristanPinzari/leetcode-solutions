function wordPattern(pattern: string, s: string): boolean {
    const map = new Map(), set = new Set(), words = s.split(" ");
    if (pattern.length !== words.length) return false;
    for (let i = 0; i < words.length; i++) {
        const currWord = words[i], currPattern = pattern[i], mapVal = map.get(currWord);
        console.log(currWord, currPattern, mapVal)
        if (mapVal && mapVal !== currPattern) return false;
        console.log(1)
        if (!mapVal && set.has(currPattern)) return false;
        console.log(2)
        map.set(currWord, currPattern);
        set.add(currPattern);
    }
    return true;
};