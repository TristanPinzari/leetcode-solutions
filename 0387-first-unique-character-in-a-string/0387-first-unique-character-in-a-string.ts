function firstUniqChar(s: string): number {
    let memory = "";
    let sCopy = s;
    for (let i = 0; i < s.length; i++) {
        const currentChar = sCopy[0];
        sCopy = sCopy.slice(1);
        if (!sCopy.includes(currentChar) && !memory.includes(currentChar)) return i;
        memory += currentChar;
    }
    return -1;
};