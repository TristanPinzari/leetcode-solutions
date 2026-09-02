function isValid(s: string): boolean {
  const len = s.length;
  // Early exit: odd lengths can never be valid
  if ((len & 1) !== 0) return false;

  // Fixed-size pre-allocated array avoids dynamic resizing overhead
  const stack = new Array(len);
  let top = -1;

  for (let i = 0; i < len; i++) {
    const c = s.charCodeAt(i);

    // Using character codes avoids string primitive allocations
    if (c === 40) {
      // '('
      stack[++top] = 41; // push ')'
    } else if (c === 91) {
      // '['
      stack[++top] = 93; // push ']'
    } else if (c === 123) {
      // '{'
      stack[++top] = 125; // push '}'
    } else {
      // Stack is empty or mismatched bracket
      if (top === -1 || stack[top--] !== c) {
        return false;
      }
    }
  }

  return top === -1;
}