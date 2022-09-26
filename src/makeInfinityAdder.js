'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  function infinitySum(currentNum) {
    if (currentNum === undefined) {
      const currentSum = totalSum;

      totalSum = 0;

      return currentSum;
    }

    totalSum += currentNum;

    return infinitySum;
  }

  return infinitySum;
}

module.exports = makeInfinityAdder;
