function maxDepth(s: string): number {
  let nestingDepth = 0;
  let currentDepth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      currentDepth++;
    } else if (s[i] === ')') {
      nestingDepth = Math.max(nestingDepth, currentDepth);
      currentDepth--;
    }
  }

  return nestingDepth;
};