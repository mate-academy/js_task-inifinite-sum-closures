'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  return function adder(num) {
    if (num === undefined) {
      const sum = totalSum;

      totalSum = 0;

      return sum;
    }

    totalSum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
