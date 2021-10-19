'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  return function adder(number) {
    if (!number) {
      const sum = totalSum;

      totalSum = 0;

      return sum;
    }

    totalSum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
