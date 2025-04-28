function countKeyChanges(s: string): number {
    s = s.toLowerCase();
    let changes = 0;
    let current = s[0];

    for (let i = 1; i < s.length; i++) {
      if (s[i] !== current) {
        current = s[i];
        changes++;
      }
    }

    return changes;
};