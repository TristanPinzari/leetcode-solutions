function indexString(s: string) {
    const minCharCode  = 97;
    const arr = new Array(26).fill(0)
    
    for(let i = 0; i < s.length; i++) {
        const charCode = s[i].charCodeAt(0) - minCharCode
        arr[charCode] += 1;
    }

    return arr;
}

function isAnagram(s: string, t: string): boolean {
    const indexedS = indexString(s);
    const indexedT = indexString(t);

    for(let i = 0; i < indexedS.length; i++) {
        if(indexedS[i] !== indexedT[i]) return false;
    }

    return true;
};