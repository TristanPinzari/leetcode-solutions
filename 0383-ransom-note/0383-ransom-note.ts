function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false;
    const ransomMap = new Map(), magazineMap = new Map();
    for (let i = 0; i < magazine.length; i++) {
        const ransomeCurr = ransomNote[i], magazineCurr = magazine[i];
        if (ransomNote[i]) ransomMap.set(ransomeCurr, (ransomMap.get(ransomeCurr) ?? 0) + 1);
        magazineMap.set(magazineCurr, (magazineMap.get(magazineCurr) ?? 0) + 1);
    }

    for (const [char, count] of ransomMap) {
        if ((magazineMap.get(char) ?? 0) < count) return false;
    }
    
    return true;
};