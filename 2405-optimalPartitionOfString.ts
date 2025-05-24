function partitionString(s: string): number {
    let result = 1;
    let current = s[0];
    
    for (let i = 1; i < s.length; i++) {
      if (current.includes(s[i])) {
        result++;
        current = '';
      }

      current += s[i];
    }

    return result;
};