function reverseWords(s: string): string {
    return s.split(" ").map((value) => value.trim()).filter(Boolean).reverse().join(" ");
};