function isAlphaChar(char) {
  const code = char.charCodeAt(0);
  return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
}

function isPalindrome(s: string): boolean {
    s = s.toLowerCase();
    let i = 0, j = s.length - 1;
    while (i < j) {
        while (i < s.length && !isAlphaChar(s[i])) i++;
        while (j > 0 && !isAlphaChar(s[j])) j--;
        if (i >= j) break;
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true
};