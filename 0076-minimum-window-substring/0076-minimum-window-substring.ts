function minWindow(s: string, t: string): string {
    const charMap = new Map(), map = new Map();
    for (const char of t) {
        charMap.set(char, (charMap.get(char) ?? 0) + 1)
    }
    let result = "", shortest = Infinity, left = 0, counter = 0;
    for (let right = 0; right < s.length; right++) {
        const curr = s[right];
        while (left < right && (!charMap.has(s[left]) || (map.get(s[left]) ?? 0) > charMap.get(s[left]))) {
            if (charMap.has(s[left])) {
                if ((map.get(s[left]) ?? 0) > charMap.get(s[left])) {
                    const removeChar = s[left];
                    if (charMap.has(removeChar)) {
                        const newV = map.get(removeChar) - 1 ;
                        map.set(removeChar, newV);
                        if (newV < charMap.get(removeChar)) counter--;
                    }
                    left++;
                }
            } else {
                left++;
            }
        }
        if (charMap.has(curr)){
            const newVal = (map.get(curr) ?? 0) + 1;
            map.set(curr, newVal);
            if (newVal <= charMap.get(curr)) {
                counter++;
                if (counter === t.length) {
                    if (right - left + 1 < shortest) {
                        result = s.slice(left, right + 1);
                        shortest = result.length;
                    }
                    const removeChar = s[left];
                    if (charMap.has(removeChar)) {
                        const newV = map.get(removeChar) - 1 ;
                        map.set(removeChar, newV);
                        if (newV < charMap.get(removeChar)) counter--;
                    }
                    left++;
                } 
            };
        }
    }
    return result;
};