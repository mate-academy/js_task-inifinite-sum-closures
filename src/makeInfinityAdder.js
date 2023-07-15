'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function createSum(a) {
    if (a === undefined) {
      const realSum = sum;

      sum = 0;

      return realSum;
    }
    sum += a;

    return createSum;
  }

  return createSum;
}

module.exports = makeInfinityAdder;
