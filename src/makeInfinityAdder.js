'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function getSum(b) {
    const totalSum = sum;

    if (b === undefined) {
      sum = 0;

      return totalSum;
    }
    sum += b;

    return getSum;
  };
}

module.exports = makeInfinityAdder;
