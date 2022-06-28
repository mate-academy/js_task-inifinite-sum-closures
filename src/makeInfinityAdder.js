'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function adder(x) {
    if (isNaN(x)) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
    sum += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
