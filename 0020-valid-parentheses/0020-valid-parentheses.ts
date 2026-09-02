function isValid(s: string): boolean {
    if  (s.length < 2) return false;
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of s) {
        const mapRes = mapping[char];
        if (!mapRes) {
            stack.push(char);
        } else {
            if (stack[stack.length - 1] !== mapRes) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
};