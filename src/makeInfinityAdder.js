'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(y) {
    if (y === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
    sum += y;

    return adder;
  };
}

module.exports = makeInfinityAdder;
