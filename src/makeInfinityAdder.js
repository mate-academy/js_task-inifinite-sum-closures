'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(a = 0) {
  let currentSum = a;

  function sum(...b) {
    if (b.length < 1) {
      const result = currentSum;

      currentSum = 0;

      return result;
    }
    currentSum += +b;

    return sum;
  }

  return sum;
}

module.exports = makeInfinityAdder;
