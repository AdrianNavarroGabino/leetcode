function clearDigits(s: string): string {
    const result = [] as string[];

    for (let i = 0; i < s.length; i++) {
      if ('0123456789'.includes(s[i])) {
        result.pop();
      } else {
        result.push(s[i]);
      }
    }

    return result.join('');
};