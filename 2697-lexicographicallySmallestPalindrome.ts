function makeSmallestPalindrome(s: string): string {
  const middle = s.length % 2 ? s[Math.floor(s.length / 2)] : '';
  let result = '';

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    result += s[i].localeCompare(s[s.length - i - 1]) === -1 ? s[i] : s[s.length - i - 1];;
  }

  return result + middle + result.split('').reverse().join('');
};