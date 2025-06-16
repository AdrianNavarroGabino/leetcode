function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  for (let i = 1; i <= s.length; i++) {
    console.log(s.substring(i), goal.substring(0, i), s, goal)
    if (goal.endsWith(s.substring(0, i))) {
      if (goal.startsWith(s.substring(i))) {
        return true;
      }
    }
  }

  return false;
};