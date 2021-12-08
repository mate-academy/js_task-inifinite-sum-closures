'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  return function adder(x) {
    if (x === undefined) {
      const sum = currentSum;

      currentSum = 0;

      return sum;
    }

    currentSum += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
