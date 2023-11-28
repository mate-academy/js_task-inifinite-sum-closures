'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(num) {
  // write code here
  let sumCount = 0;

  function sumAll(element) {
    if (element === undefined) {
      return sumCount;
    }
    sumCount += element;

    return sumCount;
  }

  let allSum = sumAll(num);

  function countSum(value) {
    if (value === undefined) {
      const result = sumCount;

      sumCount = 0;

      return result;
    }

    allSum += sumAll(value);

    return countSum;
  }

  countSum.valueOf = function() {
    return allSum;
  };

  return countSum;
}

module.exports = makeInfinityAdder;
