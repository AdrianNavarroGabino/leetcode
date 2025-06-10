/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

  return function (n: number): number {
    let curr = Math.floor(n / 2);
    let minBad = n;
    let maxGood = 0;

    while (maxGood < minBad) {
      const aux1 = isBadVersion(curr);
      const aux2 = isBadVersion(curr + 1);

      if (!aux1 && aux2) {
        return curr + 1;
      } else if (aux1 && aux2) {
        if (curr < minBad) {
          minBad = curr;
        }
      } else {
        if (curr + 1 > maxGood) {
          maxGood = curr + 1;
        }
      }

      curr = maxGood + Math.floor((minBad - maxGood) / 2);
    }

    return 0;
  };
};