function indexString(s: string) {
    const minCharCode  = 97;
    const arr = new Array(26).fill(0)
    
    for(let i = 0; i < s.length; i++) {
        const charCode = s[i].charCodeAt(0) - minCharCode
        arr[charCode] += 1;
    }

    return arr.toString();
}

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map(), res = new Array();
    for (const str of strs) {
        const arrStr = indexString(str);
        if (map.has(arrStr)) {
            map.get(arrStr).push(str);
        } else {
            map.set(arrStr, [str]);
        }
    }
    for (const [key, val] of map) {
        res.push(val);
    }
    return res;
};