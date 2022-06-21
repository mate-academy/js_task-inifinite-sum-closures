'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(b) {
    if (isNaN(b)) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += b;

    return adder;
  };
}

module.exports = makeInfinityAdder;
