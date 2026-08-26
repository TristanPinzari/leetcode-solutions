function groupAnagrams(strs: string[]): string[][] {
    const groupHashMap = new Map<string, Array<string>>();

    for(let i = 0; i < strs.length; i ++) {
        const stringKey = new Array(26).fill(0);
        
        for(let j = 0; j < strs[i].length; j ++) {
            stringKey[strs[i].charCodeAt(j) - 97]++;
        }
        const key = String.fromCharCode(...stringKey);
        const bucket = groupHashMap.get(key) || [];
        bucket.push(strs[i]);
        groupHashMap.set(key, bucket);
    }

    return [...groupHashMap.values()];
}