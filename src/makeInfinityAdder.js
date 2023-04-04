'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
