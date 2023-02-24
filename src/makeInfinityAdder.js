'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    const currentSum = sum;

    if (num === undefined) {
      sum = 0;

      return currentSum;
    }
    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
