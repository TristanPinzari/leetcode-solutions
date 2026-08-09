function strStr(haystack: string, needle: string): number {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let bool = true;
        for (let j = 0; j < needle.length; j++) {
            if (needle[j] !== haystack[i + j]) bool = false;
        }
        if (bool) return i;
    }
    return -1;
};