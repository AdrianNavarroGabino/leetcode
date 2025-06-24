function maxPower(s: string): number {
  let currLetter = s[0];
  let power = 1;
  let currCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currLetter) {
      currCount++;
    } else {
      power = currCount > power ? currCount : power;
      currCount = 1;
      currLetter = s[i];

      if (i >= s.length - power) {
        break;
      }
    }
  }

  return currCount > power ? currCount : power;
};